/* Entraînement VHF — application autonome (aucune dépendance, fonctionne en file://). */
(function () {
  'use strict';

  // ------------------------------------------------------------------
  // Constantes & stockage local
  // ------------------------------------------------------------------
  const KEYS = {
    settings: 'vhf.parametres',
    history: 'vhf.historique',
    qstats: 'vhf.statsQuestions',
  };
  const DEFAULT_SETTINGS = {
    examCount: 20,       // nombre de questions de la simulation d'examen
    passMark: 75,        // % de bonnes réponses pour réussir
    examTimeLimit: 0,    // minutes, 0 = pas de limite
    practiceBlock: 30,   // taille d'une série en perfectionnement (enregistrée à la fin)
    weakShare: 80,       // % de questions issues des catégories les plus faibles
    weakCatCount: 3,     // nombre de catégories considérées comme « faibles »
  };
  const TYPE_LABELS = { memoire: 'Mémoire', raisonnement: 'Raisonnement' };
  const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  const store = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        return raw == null ? fallback : JSON.parse(raw);
      } catch (e) { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); return true; }
      catch (e) { return false; }
    },
    remove(key) { try { localStorage.removeItem(key); } catch (e) { /* ignoré */ } },
  };

  function loadSettings() {
    const s = Object.assign({}, DEFAULT_SETTINGS, store.get(KEYS.settings, {}));
    for (const k of Object.keys(DEFAULT_SETTINGS)) {
      const n = Number(s[k]);
      s[k] = Number.isFinite(n) ? n : DEFAULT_SETTINGS[k];
    }
    return s;
  }

  // ------------------------------------------------------------------
  // Chargement & normalisation des questions
  // ------------------------------------------------------------------
  // Formats acceptés :
  //  - QCM « mémoire » : choices = ["…", …], answer = texte de la bonne réponse
  //  - QCM « raisonnement » : choices = [{id, text, correct, explanation}], answer = id
  //  Le type peut être forcé avec "kind": "memoire" | "raisonnement".
  function normalizeQuestion(raw) {
    if (!raw || !Array.isArray(raw.choices) || raw.choices.length < 2 || !raw.question) return null;
    const objChoices = typeof raw.choices[0] === 'object';
    let correct = -1;
    const choices = raw.choices.map((c, i) => {
      if (objChoices) {
        if (c.correct === true || (raw.answer != null && c.id === raw.answer)) correct = correct < 0 ? i : correct;
        return { text: String(c.text), why: c.explanation || '' };
      }
      if (c === raw.answer) correct = i;
      return { text: String(c), why: '' };
    });
    if (typeof raw.answer === 'number' && correct < 0) correct = raw.answer;
    if (correct < 0 || correct >= choices.length) return null;
    let kind = raw.kind;
    if (kind !== 'memoire' && kind !== 'raisonnement') kind = (raw.reasoning_type || objChoices) ? 'raisonnement' : 'memoire';
    return {
      id: String(raw.id),
      kind,
      category: raw.category || 'sans-categorie',
      difficulty: raw.difficulty || '',
      question: String(raw.question),
      choices,
      correct,
      explanation: raw.explanation || '',
      reminder: raw.reminder || '',
      sources: raw.sources || (raw.source ? [raw.source] : []),
      illustration: raw.illustration && raw.illustration.svg ? raw.illustration : null,
    };
  }

  function buildBank(datasets) {
    const categories = new Map();
    const questions = [];
    const seen = new Set();
    for (const data of datasets) {
      const list = Array.isArray(data) ? data : (data.questions || []);
      for (const c of (data.categories || [])) if (!categories.has(c.id)) categories.set(c.id, c);
      for (const raw of list) {
        const q = normalizeQuestion(raw);
        if (!q || seen.has(q.id)) continue;
        seen.add(q.id);
        questions.push(q);
        if (!categories.has(q.category)) categories.set(q.category, { id: q.category, label: q.category });
      }
    }
    // On ne garde que les catégories qui ont au moins une question.
    const used = new Set(questions.map(q => q.category));
    for (const id of [...categories.keys()]) if (!used.has(id)) categories.delete(id);
    return { categories, questions };
  }

  let BANK = { categories: new Map(), questions: [] };
  let BY_ID = new Map();
  // Manuel dont sont tirées les questions (à la racine du projet).
  const MANUAL_PDF = (window.QUESTIONS_DATA && window.QUESTIONS_DATA.source_pdf) || 'manuel-vhf-2025.pdf';

  // Seule source des questions : data/manuel-vhf-2025-qcm.js, chargé par index.html
  // (il définit window.QUESTIONS_DATA ; généré par tools/build-questions.py).
  function loadBank() {
    BANK = window.QUESTIONS_DATA ? buildBank([window.QUESTIONS_DATA]) : { categories: new Map(), questions: [] };
    BY_ID = new Map(BANK.questions.map(q => [q.id, q]));
  }
  // Nettoyage : anciennes questions importées par une version précédente.
  store.remove('vhf.questionsImportees');

  const catLabel = id => (BANK.categories.get(id) || { label: id }).label;

  // ------------------------------------------------------------------
  // Utilitaires
  // ------------------------------------------------------------------
  const $app = document.getElementById('app');
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  const pct = (c, n) => (n ? Math.round((c / n) * 100) : 0);
  const shuffle = arr => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const fmtDate = ts => new Date(ts).toLocaleString('fr-BE', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  const fmtDuration = sec => { sec = Math.max(0, Math.round(sec)); const m = Math.floor(sec / 60), s = sec % 60; return m + ' min ' + String(s).padStart(2, '0') + ' s'; };
  const fmtClock = sec => { sec = Math.max(0, Math.ceil(sec)); return Math.floor(sec / 60) + ':' + String(sec % 60).padStart(2, '0'); };
  const barClass = p => (p >= 75 ? 'good' : p >= 50 ? 'mid' : 'bad');

  function weightedPick(items, weightFn) {
    let total = 0;
    const w = items.map(it => { const x = Math.max(0.0001, weightFn(it)); total += x; return x; });
    let r = Math.random() * total;
    for (let i = 0; i < items.length; i++) { r -= w[i]; if (r <= 0) return items[i]; }
    return items[items.length - 1];
  }

  function svgImg(ill) {
    const src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(ill.svg);
    return '<div class="illustration"><img src="' + src + '" alt="' + esc(ill.alt || 'Illustration') + '"></div>';
  }

  function sourcesHtml(q) {
    if (!q.sources.length) return '';
    return q.sources.map(s => '<div class="source">Manuel, p. ' + esc(s.page) + (s.quote ? ' — <q>' + esc(s.quote) + '</q>' : '') + '</div>').join('');
  }

  function confirmDialog(title, text, okLabel) {
    return new Promise(resolve => {
      const m = document.getElementById('modal');
      document.getElementById('modal-title').textContent = title;
      document.getElementById('modal-text').textContent = text;
      const ok = document.getElementById('modal-ok');
      const cancel = document.getElementById('modal-cancel');
      ok.textContent = okLabel || 'Confirmer';
      m.hidden = false;
      ok.focus();
      const done = v => { m.hidden = true; ok.onclick = cancel.onclick = m.onclick = document.onkeydown = null; bindKeys(); resolve(v); };
      ok.onclick = () => done(true);
      cancel.onclick = () => done(false);
      m.onclick = e => { if (e.target === m) done(false); };
      document.onkeydown = e => { if (e.key === 'Escape') done(false); };
    });
  }

  // ------------------------------------------------------------------
  // Statistiques
  // ------------------------------------------------------------------
  const getHistory = () => store.get(KEYS.history, []);
  const getQStats = () => store.get(KEYS.qstats, {});

  function emptyAgg() { return { n: 0, c: 0, byType: {}, byCategory: {} }; }
  function addToAgg(agg, q, ok) {
    agg.n++; if (ok) agg.c++;
    const t = agg.byType[q.kind] || (agg.byType[q.kind] = { n: 0, c: 0 });
    t.n++; if (ok) t.c++;
    const k = agg.byCategory[q.category] || (agg.byCategory[q.category] = { n: 0, c: 0 });
    k.n++; if (ok) k.c++;
  }
  function aggregateHistory(history) {
    const agg = emptyAgg();
    for (const s of history) {
      agg.n += s.total; agg.c += s.correct;
      for (const [t, v] of Object.entries(s.byType || {})) { const a = agg.byType[t] || (agg.byType[t] = { n: 0, c: 0 }); a.n += v.n; a.c += v.c; }
      for (const [k, v] of Object.entries(s.byCategory || {})) { const a = agg.byCategory[k] || (agg.byCategory[k] = { n: 0, c: 0 }); a.n += v.n; a.c += v.c; }
    }
    return agg;
  }

  function recordAnswers(answers) { // answers: [{q, ok}]
    const qs = getQStats();
    const now = Date.now();
    for (const { q, ok } of answers) {
      const s = qs[q.id] || (qs[q.id] = { n: 0, c: 0 });
      s.n++; if (ok) s.c++;
      s.last = ok ? 1 : 0;
      s.ts = now;
    }
    store.set(KEYS.qstats, qs);
  }

  function saveSession(mode, answers, startedAt, extra) {
    if (!answers.length) return null;
    const agg = emptyAgg();
    for (const a of answers) addToAgg(agg, a.q, a.ok);
    const session = Object.assign({
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      mode,
      start: startedAt,
      end: Date.now(),
      total: agg.n,
      correct: agg.c,
      byType: agg.byType,
      byCategory: agg.byCategory,
      answers: answers.map(a => [a.q.id, a.ok ? 1 : 0]),
    }, extra || {});
    const history = getHistory();
    history.push(session);
    if (!store.set(KEYS.history, history)) {
      // Stockage plein : on retire le détail des réponses des plus anciennes sessions.
      for (const h of history) if (h !== session) delete h.answers;
      store.set(KEYS.history, history);
    }
    return session;
  }

  // Catégories les plus faibles : taux de réussite lissé (c+1)/(n+2) ;
  // une catégorie jamais travaillée vaut 50 %, elle sera donc vite proposée.
  function categoryScores() {
    const agg = aggregateHistory(getHistory());
    const list = [...BANK.categories.keys()].map((id, i) => {
      const v = agg.byCategory[id] || { n: 0, c: 0 };
      return { id, n: v.n, c: v.c, score: (v.c + 1) / (v.n + 2), tie: i };
    });
    list.sort((a, b) => a.score - b.score || a.n - b.n || a.tie - b.tie);
    return list;
  }
  function weakCategories(count) {
    const list = categoryScores();
    return list.slice(0, clamp(count, 1, Math.max(1, list.length - 1))).map(x => x.id);
  }

  // ------------------------------------------------------------------
  // Sélection des questions
  // ------------------------------------------------------------------
  function pickExamQuestions(count) {
    // Tirage équilibré : on parcourt les catégories à tour de rôle.
    const byCat = new Map();
    for (const q of shuffle(BANK.questions)) {
      if (!byCat.has(q.category)) byCat.set(q.category, []);
      byCat.get(q.category).push(q);
    }
    const cats = shuffle([...byCat.keys()]);
    const out = [];
    count = Math.min(count, BANK.questions.length);
    while (out.length < count) {
      let added = false;
      for (const c of cats) {
        const list = byCat.get(c);
        if (list.length && out.length < count) { out.push(list.pop()); added = true; }
      }
      if (!added) break;
    }
    return shuffle(out);
  }

  function questionWeight(q, qstats) {
    const s = qstats[q.id];
    if (!s || !s.n) return 3;          // jamais vue
    if (s.last === 0) return 4;        // ratée la dernière fois
    return 1 + 2 * (1 - s.c / s.n);    // d'autant plus que le taux est faible
  }

  function makeView(q) {
    return { q, order: shuffle(q.choices.map((_, i) => i)), selected: null };
  }

  // ------------------------------------------------------------------
  // État de l'application
  // ------------------------------------------------------------------
  let view = 'accueil';
  let exam = null;      // simulation d'examen en cours
  let practice = null;  // perfectionnement en cours
  let lastResult = null;
  let timerHandle = null;
  let settingsNotice = null;

  function setNavActive() {
    const top = ['stats', 'stats-questions', 'parametres'].includes(view) ? view : 'accueil';
    document.querySelectorAll('.tabs [data-nav]').forEach(b => b.classList.toggle('active', b.dataset.nav === top));
  }

  async function navigate(target) {
    if (target === view && !exam && !practice) return render();
    if (exam && view === 'examen') {
      const ok = await confirmDialog('Abandonner l’examen ?', 'La simulation en cours sera abandonnée et ne sera pas enregistrée.', 'Abandonner');
      if (!ok) return;
      stopTimer(); exam = null;
    }
    if (practice && view === 'perfectionnement') {
      stopPractice(target);
      return;
    }
    view = target;
    render();
  }

  function render() {
    setNavActive();
    const fn = {
      accueil: renderHome,
      stats: renderStats,
      'stats-questions': renderQuestionStats,
      parametres: renderSettings,
      examen: renderExam,
      'examen-resultat': renderExamResult,
      perfectionnement: renderPractice,
      'perfectionnement-resultat': renderPracticeResult,
    }[view] || renderHome;
    fn();
    bindKeys();
  }

  // ------------------------------------------------------------------
  // Accueil
  // ------------------------------------------------------------------
  function renderHome() {
    const st = loadSettings();
    const history = getHistory();
    const agg = aggregateHistory(history);
    const exams = history.filter(h => h.mode === 'examen');
    const lastExam = exams[exams.length - 1];
    const weak = BANK.questions.length ? weakCategories(st.weakCatCount) : [];
    const nMem = BANK.questions.filter(q => q.kind === 'memoire').length;
    const nRai = BANK.questions.length - nMem;

    if (!BANK.questions.length) {
      $app.innerHTML = '<div class="card empty"><h2>Aucune question chargée</h2><p>Le fichier <code>data/manuel-vhf-2025-qcm.js</code> est introuvable ou ne contient aucune question valide.</p></div>';
      return;
    }

    $app.innerHTML = `
      <section class="hero">
        <h1>Certificat restreint de radiotéléphoniste VHF</h1>
        <p>${BANK.questions.length} questions disponibles : ${nMem} de mémoire et ${nRai} de raisonnement, réparties en ${BANK.categories.size} catégories.</p>
        <p>Toutes les questions sont basées sur le manuel VHF 2025 : chaque correction cite le passage du manuel et sa page.
          <a href="${esc(MANUAL_PDF)}" target="_blank" rel="noopener">Consulter le manuel (PDF)</a></p>
      </section>
      <div class="grid-2">
        <section class="card mode-card">
          <h2>Simulation d’examen</h2>
          <p>Une série de ${Math.min(st.examCount, BANK.questions.length)} questions couvrant toutes les catégories, sans correction avant la fin.</p>
          <ul>
            <li>Seuil de réussite : ${st.passMark} %</li>
            <li>${st.examTimeLimit > 0 ? 'Temps limité : ' + st.examTimeLimit + ' min' : 'Sans limite de temps'}</li>
          </ul>
          <div class="btn-row"><button class="btn primary" type="button" data-action="start-exam">Commencer l’examen</button></div>
        </section>
        <section class="card mode-card">
          <h2>Perfectionnement</h2>
          <p>Entraînement continu avec correction immédiate. ${st.weakShare} % des questions portent sur vos catégories les plus faibles. Vos résultats sont enregistrés toutes les ${st.practiceBlock} questions.</p>
          <div class="small muted">Catégories ciblées actuellement :</div>
          <div class="target-list" style="margin-bottom:16px">${weak.map(id => '<span class="badge ko">' + esc(catLabel(id)) + '</span>').join('')}</div>
          <div class="btn-row"><button class="btn primary" type="button" data-action="start-practice">Commencer le perfectionnement</button></div>
        </section>
      </div>
      <section class="card">
        <h2>Vos résultats en bref</h2>
        ${agg.n ? `
        <div class="kpis">
          <div class="kpi"><div class="v">${agg.n}</div><div class="l">questions répondues</div></div>
          <div class="kpi"><div class="v">${pct(agg.c, agg.n)} %</div><div class="l">de bonnes réponses</div></div>
          <div class="kpi"><div class="v">${exams.length}</div><div class="l">simulations d’examen</div></div>
          <div class="kpi"><div class="v">${lastExam ? pct(lastExam.correct, lastExam.total) + ' %' : '—'}</div><div class="l">dernier examen</div></div>
        </div>
        <div class="btn-row" style="margin-top:14px"><button class="btn" type="button" data-nav="stats">Voir les statistiques détaillées</button></div>
        ` : '<p class="muted">Aucune session enregistrée pour l’instant. Lancez une simulation ou un perfectionnement pour voir vos statistiques.</p>'}
      </section>`;
  }

  // ------------------------------------------------------------------
  // Simulation d'examen
  // ------------------------------------------------------------------
  function startExam() {
    const st = loadSettings();
    const qs = pickExamQuestions(st.examCount);
    exam = {
      items: qs.map(makeView),
      index: 0,
      startedAt: Date.now(),
      deadline: st.examTimeLimit > 0 ? Date.now() + st.examTimeLimit * 60000 : null,
      passMark: st.passMark,
    };
    view = 'examen';
    render();
    if (exam.deadline) startTimer();
  }

  function startTimer() {
    stopTimer();
    timerHandle = setInterval(() => {
      if (!exam || !exam.deadline) return stopTimer();
      const left = (exam.deadline - Date.now()) / 1000;
      const el = document.getElementById('timer');
      if (el) { el.textContent = fmtClock(left); el.classList.toggle('low', left < 60); }
      if (left <= 0) finishExam(true);
    }, 500);
  }
  function stopTimer() { if (timerHandle) clearInterval(timerHandle); timerHandle = null; }

  function choiceButtons(item, opts) {
    // opts.reveal : afficher la correction ; opts.showWhy : explications par réponse
    return item.order.map((ci, k) => {
      const c = item.q.choices[ci];
      const cls = ['choice'];
      if (opts.reveal) {
        if (ci === item.q.correct) cls.push('correct');
        else if (item.selected === k) cls.push('wrong');
      } else if (item.selected === k) cls.push('selected');
      const why = opts.reveal && opts.showWhy && c.why ? '<span class="why">' + esc(c.why) + '</span>' : '';
      return '<button type="button" class="' + cls.join(' ') + '" data-choice="' + k + '"' + (opts.reveal ? ' disabled' : '') +
        ' aria-pressed="' + (item.selected === k) + '"><span class="letter">' + LETTERS[k] + '</span><span class="body">' + esc(c.text) + why + '</span></button>';
    }).join('');
  }

  function renderExam() {
    if (!exam) { view = 'accueil'; return renderHome(); }
    const item = exam.items[exam.index];
    const q = item.q;
    const n = exam.items.length;
    const answered = exam.items.filter(it => it.selected !== null).length;
    const left = exam.deadline ? (exam.deadline - Date.now()) / 1000 : null;
    $app.innerHTML = `
      <div class="quiz-head">
        <div class="title">Simulation d’examen · question ${exam.index + 1} / ${n}</div>
        <div class="btn-row">
          ${left !== null ? '<span class="timer' + (left < 60 ? ' low' : '') + '" id="timer" aria-label="Temps restant">' + fmtClock(left) + '</span>' : ''}
          <span class="small muted">${answered} / ${n} répondues</span>
        </div>
      </div>
      <div class="progress"><div style="width:${(answered / n) * 100}%"></div></div>
      <section class="card">
        <div class="question-text">${esc(q.question)}</div>
        ${q.illustration && q.illustration.placement === 'question' ? svgImg(q.illustration) : ''}
        <div class="choices">${choiceButtons(item, { reveal: false })}</div>
        <div class="btn-row">
          <button class="btn" type="button" data-action="exam-prev" ${exam.index === 0 ? 'disabled' : ''}>Précédente</button>
          <span class="spacer"></span>
          ${exam.index < n - 1
            ? '<button class="btn primary" type="button" data-action="exam-next">Suivante</button>'
            : '<button class="btn primary" type="button" data-action="exam-finish">Terminer l’examen</button>'}
        </div>
      </section>
      <section class="card">
        <div class="btn-row"><h3 style="margin:0">Aller à la question</h3><span class="spacer"></span>
          <button class="btn ghost" type="button" data-action="exam-finish">Terminer maintenant</button></div>
        <div class="navgrid">${exam.items.map((it, i) => '<button type="button" data-goto="' + i + '" class="' + (it.selected !== null ? 'answered ' : '') + (i === exam.index ? 'current' : '') + '" aria-label="Question ' + (i + 1) + '">' + (i + 1) + '</button>').join('')}</div>
      </section>`;
  }

  async function finishExam(timeUp) {
    if (!exam) return;
    if (!timeUp) {
      const missing = exam.items.filter(it => it.selected === null).length;
      if (missing) {
        const ok = await confirmDialog('Terminer l’examen ?', missing + (missing > 1 ? ' questions sont restées sans réponse et seront comptées fausses.' : ' question est restée sans réponse et sera comptée fausse.'), 'Terminer');
        if (!ok || !exam) return;
      }
    }
    stopTimer();
    const answers = exam.items.map(it => ({ q: it.q, ok: it.selected !== null && it.order[it.selected] === it.q.correct }));
    const correct = answers.filter(a => a.ok).length;
    const passed = pct(correct, answers.length) >= exam.passMark;
    recordAnswers(answers);
    const session = saveSession('examen', answers, exam.startedAt, { passMark: exam.passMark, passed, timeUp: !!timeUp });
    lastResult = { items: exam.items, answers, session, timeUp: !!timeUp, filter: 'erreurs' };
    exam = null;
    view = 'examen-resultat';
    render();
    window.scrollTo(0, 0);
  }

  function breakdownHtml(agg, opts) {
    opts = opts || {};
    const typeRows = ['memoire', 'raisonnement'].filter(t => agg.byType[t]).map(t => statRow(TYPE_LABELS[t], agg.byType[t]));
    const catIds = [...BANK.categories.keys()].filter(id => agg.byCategory[id] || opts.allCats);
    catIds.sort((a, b) => {
      const A = agg.byCategory[a] || { n: 0, c: 0 }, B = agg.byCategory[b] || { n: 0, c: 0 };
      return (A.n ? A.c / A.n : 2) - (B.n ? B.c / B.n : 2) || B.n - A.n;
    });
    const catRows = catIds.map(id => statRow(catLabel(id), agg.byCategory[id] || { n: 0, c: 0 }, opts.weak && opts.weak.includes(id) ? '<span class="badge ko">ciblée</span>' : ''));
    return `
      <section class="card"><h2>Par type de question</h2>${typeRows.join('') || '<p class="muted">—</p>'}</section>
      <section class="card"><h2>Par catégorie</h2>${catRows.join('') || '<p class="muted">—</p>'}</section>`;
  }

  function statRow(label, v, extra) {
    const p = pct(v.c, v.n);
    return '<div class="stat-row"><div class="label">' + esc(label) + ' ' + (extra || '') +
      '<span class="sub">' + (v.n ? v.c + ' / ' + v.n + ' correctes' : 'pas encore travaillée') + '</span></div>' +
      '<div class="bar ' + (v.n ? barClass(p) : '') + '"><div style="width:' + (v.n ? p : 0) + '%"></div></div>' +
      '<div class="val">' + (v.n ? p + ' %' : '—') + '</div></div>';
  }

  function reviewHtml(items, filter) {
    const list = items.map((it, i) => ({ it, i })).filter(({ it }) => filter !== 'erreurs' || it.selected === null || it.order[it.selected] !== it.q.correct);
    if (!list.length) return '<p class="muted">Aucune erreur, bravo !</p>';
    return list.map(({ it, i }) => {
      const q = it.q;
      const given = it.selected === null ? null : it.order[it.selected];
      const ok = given === q.correct;
      return `<div class="review-item">
        <div class="q">${i + 1}. ${esc(q.question)}</div>
        <div class="ans">
          ${ok ? '<span class="ok">✓ Bonne réponse :</span> ' + esc(q.choices[q.correct].text)
            : (given === null ? '<span class="ko">✗ Sans réponse.</span>' : '<span class="ko">✗ Votre réponse :</span> ' + esc(q.choices[given].text)) +
              '<br><span class="ok">Bonne réponse :</span> ' + esc(q.choices[q.correct].text)}
        </div>
        <details${ok ? '' : ' open'}><summary>Explication</summary>
          ${explanationBlock(q, given)}
        </details>
      </div>`;
    }).join('');
  }

  function explanationBlock(q, given) {
    let html = '';
    if (q.explanation) html += '<p>' + esc(q.explanation) + '</p>';
    if (given !== null && given !== undefined && given !== q.correct && q.choices[given].why) {
      html += '<p><b>Pourquoi votre réponse est fausse :</b> ' + esc(q.choices[given].why) + '</p>';
    }
    if (q.reminder) html += '<div class="reminder">' + esc(q.reminder) + '</div>';
    if (q.illustration && q.illustration.placement !== 'question') html += svgImg(q.illustration);
    html += sourcesHtml(q);
    return html;
  }

  function renderExamResult() {
    if (!lastResult) { view = 'accueil'; return renderHome(); }
    const s = lastResult.session;
    const p = pct(s.correct, s.total);
    $app.innerHTML = `
      <section class="card">
        <div class="result-banner ${s.passed ? 'pass' : 'fail'}">
          <div class="score-big">${s.correct} / ${s.total}</div>
          <div>
            <h1 style="margin:0">${s.passed ? 'Examen réussi' : 'Examen non réussi'}</h1>
            <div class="muted">${p} % de bonnes réponses · seuil ${s.passMark} % · durée ${fmtDuration((s.end - s.start) / 1000)}${lastResult.timeUp ? ' · temps écoulé' : ''}</div>
          </div>
        </div>
        <div class="btn-row" style="margin-top:16px">
          <button class="btn primary" type="button" data-action="start-exam">Nouvel examen</button>
          <button class="btn" type="button" data-action="start-practice">Perfectionnement</button>
          <button class="btn ghost" type="button" data-nav="stats">Statistiques</button>
        </div>
      </section>
      ${breakdownHtml(aggregateHistory([s]))}
      <section class="card">
        <div class="btn-row" style="margin-bottom:8px"><h2 style="margin:0">Correction</h2><span class="spacer"></span>
          <div class="filter-row" role="group" aria-label="Filtre">
            <button type="button" class="btn ${lastResult.filter === 'erreurs' ? 'primary' : ''}" data-review="erreurs">Erreurs</button>
            <button type="button" class="btn ${lastResult.filter === 'toutes' ? 'primary' : ''}" data-review="toutes">Toutes</button>
          </div>
        </div>
        ${reviewHtml(lastResult.items, lastResult.filter)}
      </section>`;
  }

  // ------------------------------------------------------------------
  // Perfectionnement
  // ------------------------------------------------------------------
  function startPractice() {
    practice = {
      startedAt: Date.now(),
      blockStart: Date.now(),
      blockNo: 0,
      plan: [],         // séquence de 'faible' / 'autre' pour la série en cours
      blockAnswers: [], // réponses de la série en cours
      allAnswers: [],   // toutes les réponses depuis le début
      sessions: [],     // séries enregistrées
      recent: [],       // ids des dernières questions (anti-répétition)
      weak: [],
      current: null,
      revealed: false,
      notice: null,
    };
    newBlock();
    nextPracticeQuestion();
    view = 'perfectionnement';
    render();
  }

  function newBlock() {
    const st = loadSettings();
    const size = Math.max(1, Math.round(st.practiceBlock));
    const nWeak = Math.round(size * clamp(st.weakShare, 0, 100) / 100);
    practice.weak = weakCategories(st.weakCatCount);
    practice.plan = shuffle(Array.from({ length: size }, (_, i) => (i < nWeak ? 'faible' : 'autre')));
    practice.blockSize = size;
    practice.blockNo++;
    practice.blockStart = Date.now();
    practice.blockAnswers = [];
  }

  function nextPracticeQuestion() {
    const slot = practice.plan[practice.blockAnswers.length] || 'faible';
    const weakSet = new Set(practice.weak);
    let pool = BANK.questions.filter(q => (slot === 'faible') === weakSet.has(q.category));
    if (!pool.length) pool = BANK.questions;
    const avoid = new Set(practice.recent.slice(-Math.min(40, Math.floor(pool.length / 2))));
    let candidates = pool.filter(q => !avoid.has(q.id));
    if (!candidates.length) candidates = pool;
    const qstats = getQStats();
    const q = weightedPick(candidates, x => questionWeight(x, qstats));
    practice.recent.push(q.id);
    if (practice.recent.length > 200) practice.recent.splice(0, 100);
    practice.current = makeView(q);
    practice.slot = slot;
    practice.revealed = false;
  }

  function validatePractice() {
    const it = practice.current;
    if (practice.revealed || it.selected === null) return;
    const ok = it.order[it.selected] === it.q.correct;
    practice.revealed = true;
    const ans = { q: it.q, ok };
    practice.blockAnswers.push(ans);
    practice.allAnswers.push(ans);
    recordAnswers([ans]);
    render();
  }

  function nextPractice() {
    practice.notice = null;
    if (practice.blockAnswers.length >= practice.blockSize) {
      const s = saveSession('perfectionnement', practice.blockAnswers, practice.blockStart, { weakCats: practice.weak.slice() });
      if (s) practice.sessions.push(s);
      practice.notice = 'Série ' + practice.blockNo + ' enregistrée : ' + s.correct + ' / ' + s.total + ' (' + pct(s.correct, s.total) + ' %). Les catégories ciblées ont été recalculées.';
      newBlock();
    }
    nextPracticeQuestion();
    render();
    window.scrollTo(0, 0);
  }

  function stopPractice(target) {
    if (!practice) return;
    if (practice.blockAnswers.length) {
      const s = saveSession('perfectionnement', practice.blockAnswers, practice.blockStart, { weakCats: practice.weak.slice(), partial: true });
      if (s) practice.sessions.push(s);
    }
    const done = practice;
    practice = null;
    if (target && target !== 'perfectionnement-resultat') { view = target; return render(); }
    lastResult = { practice: done };
    view = 'perfectionnement-resultat';
    render();
  }

  function renderPractice() {
    if (!practice) { view = 'accueil'; return renderHome(); }
    const it = practice.current;
    const q = it.q;
    const all = practice.allAnswers;
    const good = all.filter(a => a.ok).length;
    const inBlock = practice.blockAnswers.length + (practice.revealed ? 0 : 1);
    const given = it.selected === null ? null : it.order[it.selected];
    const ok = practice.revealed && given === q.correct;
    $app.innerHTML = `
      ${practice.notice ? '<div class="notice">' + esc(practice.notice) + '</div>' : ''}
      <div class="quiz-head">
        <div class="title">Perfectionnement · série ${practice.blockNo} · question ${Math.min(inBlock, practice.blockSize)} / ${practice.blockSize}</div>
        <button class="btn danger" type="button" data-action="stop-practice">Arrêter</button>
      </div>
      <div class="progress"><div style="width:${(practice.blockAnswers.length / practice.blockSize) * 100}%"></div></div>
      <div class="live-stats" style="margin-bottom:12px">
        <span>Depuis le début : <b>${good} / ${all.length}</b>${all.length ? ' (' + pct(good, all.length) + ' %)' : ''}</span>
        <span>${practice.slot === 'faible' ? 'Question issue d’une catégorie ciblée' : 'Question de révision générale'}</span>
      </div>
      <section class="card">
        <div class="question-text">${esc(q.question)}</div>
        ${q.illustration && q.illustration.placement === 'question' ? svgImg(q.illustration) : ''}
        <div class="choices">${choiceButtons(it, { reveal: practice.revealed, showWhy: true })}</div>
        ${practice.revealed ? `
          <div class="feedback ${ok ? 'ok' : 'ko'}" role="status">
            <div class="verdict">${ok ? '✓ Bonne réponse' : '✗ Mauvaise réponse — la bonne réponse était : ' + esc(q.choices[q.correct].text)}</div>
            ${explanationBlock(q, given)}
          </div>` : ''}
        <div class="btn-row end">
          ${practice.revealed
            ? '<button class="btn primary" type="button" data-action="practice-next">' + (practice.blockAnswers.length >= practice.blockSize ? 'Enregistrer la série et continuer' : 'Question suivante') + '</button>'
            : '<button class="btn primary" type="button" data-action="practice-validate" ' + (it.selected === null ? 'disabled' : '') + '>Valider</button>'}
        </div>
      </section>
      <section class="card">
        <h3>Catégories ciblées pour cette série</h3>
        <div class="target-list">${practice.weak.map(id => '<span class="badge ko">' + esc(catLabel(id)) + '</span>').join('')}</div>
        <p class="small muted" style="margin:8px 0 0">${loadSettings().weakShare} % des questions de la série en proviennent. Raccourcis : touches 1 à 4 (ou A à D) pour choisir, Entrée pour valider.</p>
      </section>`;
  }

  function renderPracticeResult() {
    const p = lastResult && lastResult.practice;
    if (!p) { view = 'accueil'; return renderHome(); }
    const agg = emptyAgg();
    for (const a of p.allAnswers) addToAgg(agg, a.q, a.ok);
    $app.innerHTML = `
      <section class="card">
        <div class="result-banner">
          <div class="score-big">${agg.c} / ${agg.n}</div>
          <div>
            <h1 style="margin:0">Perfectionnement terminé</h1>
            <div class="muted">${pct(agg.c, agg.n)} % de bonnes réponses · ${p.sessions.length} série${p.sessions.length > 1 ? 's' : ''} enregistrée${p.sessions.length > 1 ? 's' : ''} · durée ${fmtDuration((Date.now() - p.startedAt) / 1000)}</div>
          </div>
        </div>
        <div class="btn-row" style="margin-top:16px">
          <button class="btn primary" type="button" data-action="start-practice">Reprendre le perfectionnement</button>
          <button class="btn" type="button" data-action="start-exam">Simulation d’examen</button>
          <button class="btn ghost" type="button" data-nav="stats">Statistiques</button>
        </div>
      </section>
      ${agg.n ? breakdownHtml(agg) : ''}`;
  }

  // ------------------------------------------------------------------
  // Statistiques
  // ------------------------------------------------------------------
  let statsFilter = 'tous';
  function renderStats() {
    const history = getHistory();
    const filtered = history.filter(h => statsFilter === 'tous' || h.mode === statsFilter);
    const agg = aggregateHistory(filtered);
    const exams = history.filter(h => h.mode === 'examen');
    const passed = exams.filter(e => e.passed).length;
    const st = loadSettings();
    const weak = BANK.questions.length ? weakCategories(st.weakCatCount) : [];
    const qstats = getQStats();
    const seen = BANK.questions.filter(q => qstats[q.id]).length;
    const recent = filtered.slice(-30).reverse();
    const filterBtn = (v, l) => '<button type="button" class="btn ' + (statsFilter === v ? 'primary' : '') + '" data-stats-filter="' + v + '">' + l + '</button>';

    $app.innerHTML = `
      <div class="btn-row" style="margin-bottom:16px"><h1 style="margin:0">Statistiques</h1><span class="spacer"></span>
        <div class="filter-row" style="margin:0">${filterBtn('tous', 'Tout')}${filterBtn('examen', 'Examens')}${filterBtn('perfectionnement', 'Perfectionnement')}</div>
      </div>
      ${history.length ? `
      <section class="card">
        <div class="kpis">
          <div class="kpi"><div class="v">${filtered.length}</div><div class="l">sessions enregistrées</div></div>
          <div class="kpi"><div class="v">${agg.n}</div><div class="l">questions répondues</div></div>
          <div class="kpi"><div class="v">${pct(agg.c, agg.n)} %</div><div class="l">de bonnes réponses</div></div>
          <div class="kpi"><div class="v">${exams.length ? passed + ' / ' + exams.length : '—'}</div><div class="l">examens réussis</div></div>
          <div class="kpi"><div class="v">${seen} / ${BANK.questions.length}</div><div class="l">questions déjà vues</div></div>
        </div>
      </section>
      ${breakdownHtml(agg, { allCats: true, weak: statsFilter === 'perfectionnement' || statsFilter === 'tous' ? weak : null })}
      <section class="card">
        <h2>Questions les moins réussies</h2>
        ${worstQuestionsHtml(qstats)}
      </section>
      <section class="card">
        <h2>Historique ${filtered.length > 30 ? '(30 dernières sessions)' : ''}</h2>
        ${recent.length ? `<div class="table-wrap"><table class="history">
          <thead><tr><th>Date</th><th>Mode</th><th class="r">Score</th><th class="r">%</th><th class="r">Mémoire</th><th class="r">Raisonnement</th><th>Résultat</th></tr></thead>
          <tbody>${recent.map(h => {
            const m = h.byType.memoire, r = h.byType.raisonnement;
            return '<tr><td>' + esc(fmtDate(h.end)) + '</td><td>' + (h.mode === 'examen' ? 'Examen' : 'Perfectionnement' + (h.partial ? ' (partiel)' : '')) + '</td>' +
              '<td class="r">' + h.correct + ' / ' + h.total + '</td><td class="r">' + pct(h.correct, h.total) + ' %</td>' +
              '<td class="r">' + (m ? pct(m.c, m.n) + ' %' : '—') + '</td><td class="r">' + (r ? pct(r.c, r.n) + ' %' : '—') + '</td>' +
              '<td>' + (h.mode === 'examen' ? (h.passed ? '<span class="badge ok">Réussi</span>' : '<span class="badge ko">Échoué</span>') : '') + '</td></tr>';
          }).join('')}</tbody></table></div>` : '<p class="muted">Aucune session pour ce filtre.</p>'}
      </section>
      ` : '<section class="card empty"><h2>Pas encore de statistiques</h2><p>Terminez une simulation d’examen ou une série de perfectionnement pour voir vos résultats ici.</p><div class="btn-row" style="justify-content:center"><button class="btn primary" type="button" data-nav="accueil">Retour à l’accueil</button><button class="btn" type="button" data-nav="stats-questions">Parcourir les questions</button></div></section>'}
      `;
  }

  // ------------------------------------------------------------------
  // Statistiques par question
  // ------------------------------------------------------------------
  const QS_FILTERS = {
    tous: { label: 'Toutes les questions', test: () => true },
    arevoir: { label: 'À revoir', test: s => s && s.n > 0 && (s.last === 0 || s.c / s.n < 0.6) },
    maitrisees: { label: 'Maîtrisées', test: s => s && s.n > 0 && s.last === 1 && s.c / s.n >= 0.8 },
    vues: { label: 'Déjà travaillées', test: s => s && s.n > 0 },
    jamais: { label: 'Jamais vues', test: s => !s || !s.n },
  };
  const QS_PAGE = 50;
  const qsState = { search: '', cat: '', filter: 'tous', limit: QS_PAGE };

  const normText = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

  function filteredQuestions() {
    const qstats = getQStats();
    const needle = normText(qsState.search.trim());
    const test = (QS_FILTERS[qsState.filter] || QS_FILTERS.tous).test;
    const list = BANK.questions.filter(q =>
      (!qsState.cat || q.category === qsState.cat) &&
      test(qstats[q.id]) &&
      (!needle || normText(q.question + ' ' + q.choices.map(c => c.text).join(' ')).includes(needle)));
    // Les moins bien réussies d'abord, puis les plus travaillées ; jamais vues à la fin.
    const rate = q => { const s = qstats[q.id]; return s && s.n ? s.c / s.n : 2; };
    const tries = q => (qstats[q.id] ? qstats[q.id].n : 0);
    list.sort((a, b) => rate(a) - rate(b) || tries(b) - tries(a));
    return { list, qstats };
  }

  function renderQuestionStats() {
    const qstats = getQStats();
    const seen = BANK.questions.filter(q => qstats[q.id] && qstats[q.id].n).length;
    const cats = [...BANK.categories.values()];
    $app.innerHTML = `
      <h1>Questions</h1>
      <p class="muted">${seen} question${seen > 1 ? 's' : ''} travaillée${seen > 1 ? 's' : ''} sur ${BANK.questions.length}. Cliquez sur une question pour voir la réponse.</p>
      <section class="card">
        <div class="qs-controls">
          <input type="search" id="qs-search" placeholder="Rechercher…" aria-label="Rechercher une question" value="${esc(qsState.search)}">
          <select id="qs-filter" aria-label="Filtrer">${Object.entries(QS_FILTERS).map(([k, f]) => '<option value="' + k + '"' + (k === qsState.filter ? ' selected' : '') + '>' + f.label + '</option>').join('')}</select>
          <select id="qs-cat" aria-label="Catégorie"><option value="">Toutes les catégories</option>${cats.map(c => '<option value="' + esc(c.id) + '"' + (c.id === qsState.cat ? ' selected' : '') + '>' + esc(c.label) + '</option>').join('')}</select>
        </div>
        <div id="qs-list"></div>
      </section>`;
    renderQuestionList();
  }

  function renderQuestionList() {
    const box = document.getElementById('qs-list');
    if (!box) return;
    const { list, qstats } = filteredQuestions();
    const shown = list.slice(0, qsState.limit);
    box.innerHTML = `
      <div class="small muted qs-count">${list.length} question${list.length > 1 ? 's' : ''}</div>
      ${shown.length ? shown.map(q => {
        const s = qstats[q.id];
        const p = s && s.n ? pct(s.c, s.n) : null;
        return `<details class="qrow" data-qid="${esc(q.id)}">
          <summary>
            <span class="qtext">${esc(q.question)}</span>
            <span class="qscore">${s && s.n
              ? '<span class="num">' + s.c + ' / ' + s.n + '</span><span class="badge ' + (p >= 75 ? 'ok' : p < 50 ? 'ko' : '') + '">' + p + ' %</span>'
              : '<span class="muted small">jamais vue</span>'}</span>
          </summary>
          <div class="qdetail"></div>
        </details>`;
      }).join('') : '<p class="muted" style="margin:12px 0 0">Aucune question ne correspond.</p>'}
      ${list.length > shown.length ? '<div class="btn-row" style="justify-content:center;margin-top:12px"><button class="btn" type="button" data-action="qs-more">Afficher plus (' + (list.length - shown.length) + ' restantes)</button></div>' : ''}`;
  }

  // Les 5 questions au plus mauvais taux de réussite (au moins une erreur).
  function worstQuestionsHtml(qstats) {
    const worst = BANK.questions
      .filter(q => { const s = qstats[q.id]; return s && s.n && s.c < s.n; })
      .map(q => ({ q, s: qstats[q.id], r: qstats[q.id].c / qstats[q.id].n }))
      .sort((a, b) => a.r - b.r || b.s.n - a.s.n)
      .slice(0, 5);
    if (!worst.length) return '<p class="muted" style="margin:0">Aucune erreur enregistrée pour l’instant.</p>';
    return '<ul class="worst-list">' + worst.map(({ q, s }) =>
      '<li><button type="button" data-qdetail="' + esc(q.id) + '"><span class="qtext">' + esc(q.question) + '</span>' +
      '<span class="qscore"><span class="num">' + s.c + ' / ' + s.n + '</span><span class="badge ko">' + pct(s.c, s.n) + ' %</span></span></button></li>').join('') + '</ul>';
  }

  let qmodalReturnFocus = null;
  function openQuestionModal(q) {
    const m = document.getElementById('qmodal');
    document.getElementById('qmodal-title').textContent = q.question;
    document.getElementById('qmodal-body').innerHTML = questionDetailHtml(q);
    qmodalReturnFocus = document.activeElement;
    m.hidden = false;
    m.querySelector('.modal-box').scrollTop = 0;
    document.getElementById('qmodal-close').focus();
  }
  function closeQuestionModal() {
    const m = document.getElementById('qmodal');
    if (m.hidden) return;
    m.hidden = true;
    if (qmodalReturnFocus && qmodalReturnFocus.focus) qmodalReturnFocus.focus();
  }

  function questionDetailHtml(q) {
    const s = getQStats()[q.id];
    return `
      <div class="small muted" style="margin-bottom:8px">${s && s.n
        ? s.n + ' essai' + (s.n > 1 ? 's' : '') + ' · ' + s.c + ' réussite' + (s.c > 1 ? 's' : '') + (s.ts ? ' · dernière réponse ' + (s.last ? 'correcte' : 'fausse') + ' le ' + esc(fmtDate(s.ts)) : '')
        : 'Jamais répondue'}</div>
      ${q.illustration && q.illustration.placement === 'question' ? svgImg(q.illustration) : ''}
      <ul class="qchoices">${q.choices.map((c, i) => '<li class="' + (i === q.correct ? 'good' : '') + '"><span class="mark">' + (i === q.correct ? '✓' : '') + '</span><span>' + esc(c.text) +
        (c.why ? '<span class="why">' + esc(c.why) + '</span>' : '') + '</span></li>').join('')}</ul>
      ${explanationBlock(q, null)}`;
  }

  // ------------------------------------------------------------------
  // Paramètres
  // ------------------------------------------------------------------
  const FIELDS = [
    { key: 'examCount', label: 'Nombre de questions de l’examen', help: 'Taille de la simulation d’examen.', min: 5, max: () => BANK.questions.length || 500 },
    { key: 'passMark', label: 'Seuil de réussite (%)', help: 'Pourcentage de bonnes réponses requis pour réussir la simulation.', min: 1, max: () => 100 },
    { key: 'examTimeLimit', label: 'Durée maximale de l’examen (minutes)', help: '0 = pas de limite de temps.', min: 0, max: () => 300 },
    { key: 'practiceBlock', label: 'Taille d’une série de perfectionnement', help: 'Les résultats sont enregistrés à la fin de chaque série.', min: 5, max: () => 200 },
    { key: 'weakShare', label: 'Part des catégories faibles (%)', help: 'Proportion des questions tirées dans les catégories les moins bien réussies.', min: 0, max: () => 100 },
    { key: 'weakCatCount', label: 'Nombre de catégories ciblées', help: 'Combien de catégories parmi les plus faibles sont travaillées en priorité.', min: 1, max: () => Math.max(1, BANK.categories.size - 1) },
  ];

  function renderSettings() {
    const st = loadSettings();
    const nMem = BANK.questions.filter(q => q.kind === 'memoire').length;
    $app.innerHTML = `
      <h1>Paramètres</h1>
      ${settingsNotice ? '<div class="notice' + (settingsNotice.err ? ' err' : '') + '" role="status">' + esc(settingsNotice.text) + '</div>' : ''}
      <section class="card">
        <h2>Entraînement</h2>
        <form id="settings-form" novalidate>
          ${FIELDS.map(f => `<div class="field">
            <label for="f-${f.key}">${f.label}<span class="help">${f.help}</span></label>
            <input id="f-${f.key}" name="${f.key}" type="number" inputmode="numeric" min="${f.min}" max="${f.max()}" step="1" value="${st[f.key]}">
          </div>`).join('')}
          <div class="btn-row end" style="margin-top:12px">
            <button type="button" class="btn ghost" data-action="settings-defaults">Valeurs par défaut</button>
            <button type="submit" class="btn primary">Enregistrer</button>
          </div>
        </form>
      </section>
      <section class="card">
        <h2>Questions</h2>
        <p style="margin:0">${BANK.questions.length} questions (${nMem} mémoire, ${BANK.questions.length - nMem} raisonnement).</p>
      </section>
      <section class="card">
        <h2>Données</h2>
        <p class="small muted">Les paramètres et les résultats sont conservés dans le stockage local de ce navigateur.</p>
        <div class="btn-row"><button type="button" class="btn danger" data-action="reset-stats">Effacer toutes les statistiques</button></div>
      </section>`;
    settingsNotice = null;
  }

  function saveSettingsFromForm(form) {
    const st = loadSettings();
    for (const f of FIELDS) {
      const raw = form.elements[f.key].value;
      let v = Math.round(Number(raw));
      if (!Number.isFinite(v) || raw === '') v = DEFAULT_SETTINGS[f.key];
      st[f.key] = clamp(v, f.min, f.max());
    }
    const ok = store.set(KEYS.settings, st);
    settingsNotice = ok ? { text: 'Paramètres enregistrés.' } : { text: 'Impossible d’enregistrer : le stockage local est indisponible.', err: true };
    render();
  }

  // ------------------------------------------------------------------
  // Événements
  // ------------------------------------------------------------------
  document.addEventListener('click', async e => {
    const qm = document.getElementById('qmodal');
    if (!qm.hidden && (e.target === qm || e.target.closest('#qmodal-close'))) return closeQuestionModal();
    const qd = e.target.closest('[data-qdetail]');
    if (qd) { const q = BY_ID.get(qd.dataset.qdetail); if (q) openQuestionModal(q); return; }

    const nav = e.target.closest('[data-nav]');
    if (nav) { e.preventDefault(); return navigate(nav.dataset.nav); }

    const choice = e.target.closest('[data-choice]');
    if (choice && !choice.disabled) {
      const k = Number(choice.dataset.choice);
      if (view === 'examen' && exam) { exam.items[exam.index].selected = k; render(); }
      else if (view === 'perfectionnement' && practice && !practice.revealed) { practice.current.selected = k; render(); }
      return;
    }
    const go = e.target.closest('[data-goto]');
    if (go && exam) { exam.index = Number(go.dataset.goto); return render(); }
    const rv = e.target.closest('[data-review]');
    if (rv && lastResult) { lastResult.filter = rv.dataset.review; return render(); }
    const sf = e.target.closest('[data-stats-filter]');
    if (sf) { statsFilter = sf.dataset.statsFilter; return render(); }

    const act = e.target.closest('[data-action]');
    if (!act) return;
    switch (act.dataset.action) {
      case 'start-exam': startExam(); window.scrollTo(0, 0); break;
      case 'start-practice': startPractice(); window.scrollTo(0, 0); break;
      case 'exam-prev': if (exam && exam.index > 0) { exam.index--; render(); } break;
      case 'exam-next': if (exam && exam.index < exam.items.length - 1) { exam.index++; render(); } break;
      case 'exam-finish': finishExam(false); break;
      case 'practice-validate': validatePractice(); break;
      case 'practice-next': nextPractice(); break;
      case 'qs-more': qsState.limit += QS_PAGE; renderQuestionList(); break;
      case 'stop-practice': stopPractice('perfectionnement-resultat'); break;
      case 'settings-defaults':
        store.set(KEYS.settings, DEFAULT_SETTINGS);
        settingsNotice = { text: 'Valeurs par défaut rétablies.' };
        render(); break;
      case 'reset-stats':
        if (await confirmDialog('Effacer les statistiques ?', 'Tout l’historique des sessions et les statistiques par question seront supprimés définitivement.', 'Effacer')) {
          store.remove(KEYS.history); store.remove(KEYS.qstats);
          settingsNotice = { text: 'Statistiques effacées.' };
          render();
        }
        break;
    }
  });

  document.addEventListener('submit', e => {
    if (e.target.id === 'settings-form') { e.preventDefault(); saveSettingsFromForm(e.target); }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeQuestionModal();
  });
  document.addEventListener('input', e => {
    if (e.target.id === 'qs-search') { qsState.search = e.target.value; qsState.limit = QS_PAGE; renderQuestionList(); }
  });
  // Détail d'une question : construit à la première ouverture seulement.
  document.addEventListener('toggle', e => {
    const d = e.target;
    if (!d.classList || !d.classList.contains('qrow') || !d.open) return;
    const body = d.querySelector('.qdetail');
    const q = BY_ID.get(d.dataset.qid);
    if (body && q && !body.childElementCount) body.innerHTML = questionDetailHtml(q);
  }, true);
  document.addEventListener('change', e => {
    if (e.target.id === 'qs-filter') { qsState.filter = e.target.value; qsState.limit = QS_PAGE; return renderQuestionList(); }
    if (e.target.id === 'qs-cat') { qsState.cat = e.target.value; qsState.limit = QS_PAGE; return renderQuestionList(); }
  });

  function bindKeys() {
    document.onkeydown = e => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'select' || tag === 'textarea') return;
      const quiz = view === 'examen' ? exam && exam.items[exam.index] : view === 'perfectionnement' ? practice && practice.current : null;
      if (!quiz) return;
      let k = -1;
      if (/^[1-8]$/.test(e.key)) k = Number(e.key) - 1;
      else if (/^[a-h]$/i.test(e.key)) k = e.key.toUpperCase().charCodeAt(0) - 65;
      if (k >= 0 && k < quiz.order.length) {
        if (view === 'perfectionnement' && practice.revealed) return;
        quiz.selected = k; e.preventDefault(); return render();
      }
      if (e.key === 'Enter' && !(e.target.closest && e.target.closest('button'))) {
        e.preventDefault();
        if (view === 'perfectionnement') practice.revealed ? nextPractice() : validatePractice();
        else if (view === 'examen') { if (exam.index < exam.items.length - 1) { exam.index++; render(); } else finishExam(false); }
      } else if (view === 'examen' && e.key === 'ArrowRight' && exam.index < exam.items.length - 1) { exam.index++; render(); }
      else if (view === 'examen' && e.key === 'ArrowLeft' && exam.index > 0) { exam.index--; render(); }
    };
  }

  // Examen en cours : on prévient avant de quitter la page.
  window.addEventListener('beforeunload', e => {
    if (exam) { e.preventDefault(); e.returnValue = ''; }
  });
  // Perfectionnement : la série entamée est enregistrée si la page est fermée.
  window.addEventListener('pagehide', () => {
    if (practice && practice.blockAnswers.length) {
      saveSession('perfectionnement', practice.blockAnswers, practice.blockStart, { weakCats: practice.weak.slice(), partial: true });
      practice.blockAnswers = [];
    }
  });

  loadBank();
  render();
})();
