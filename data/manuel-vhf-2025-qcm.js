// Généré par tools/build-questions.py à partir de qa/*.validated.json — ne pas modifier à la main.
window.QUESTIONS_DATA = {
 "source_pdf": "manuel-vhf-2025.pdf",
 "categories": [
  {
   "id": "cadre-legal-autorisations",
   "label": "Cadre légal, autorisations et certificats",
   "description": "Services radiotéléphoniques, zones et obligations d'équipement, autorisation de station, certificat d'opérateur, examen, contrôle, sanctions et secret des communications"
  },
  {
   "id": "identification-stations",
   "label": "Identification des stations",
   "description": "Indicatif d'appel, séries de lettres, MMSI et MID, numéros d'identification maritime, base MARS et structure du code ATIS"
  },
  {
   "id": "equipements-installations",
   "label": "Équipements et installations",
   "description": "VHF fixe et portative, puissances, commandes du mariphone, double veille, GSM, conformité et marquages, antennes et câbles"
  },
  {
   "id": "frequences-modes",
   "label": "Fréquences, portée et modes d'exploitation",
   "description": "Bande VHF, propagation et calcul de portée, désignation des canaux, duplex, semi-duplex et simplex"
  },
  {
   "id": "canaux-vhf",
   "label": "Canaux VHF spécifiques",
   "description": "Affectation des canaux en navigation maritime (eaux belges) et en navigation intérieure"
  },
  {
   "id": "procedures-generales",
   "label": "Procédures et discipline des communications",
   "description": "Précautions, discipline, instructions de la station côtière, déroulement de la communication, langues, épellation, routine et essais"
  },
  {
   "id": "detresse-urgence-securite",
   "label": "Détresse, urgence et sécurité",
   "description": "Ordre de priorité, MAYDAY, accusé de réception, relais, silence radio, PRUDENCE, PAN PAN et messages de sécurité"
  },
  {
   "id": "navigation-maritime",
   "label": "Procédures spécifiques en navigation maritime",
   "description": "Navires astreints, veille sur le canal 16, MRCC et centres de sauvetage voisins, Oostende Radio et correspondance publique (CIAC)"
  },
  {
   "id": "navigation-interieure",
   "label": "Procédures spécifiques en navigation intérieure",
   "description": "Arrangement Rainwat, types de communications fluviales, ATIS, AIS, enregistrement et certificat"
  },
  {
   "id": "glossaire",
   "label": "Glossaire et définitions",
   "description": "Définitions des termes, organismes et abréviations du glossaire"
  }
 ],
 "questions": [
  {
   "id": "Q1001",
   "type": "qcm",
   "question": "Quelle plage de fréquences correspond à la station radio VHF visée par le certificat restreint ?",
   "choices": [
    "152.025 MHz – 156.025 MHz",
    "156.025 MHz – 162.025 MHz",
    "156.025 MHz – 174.025 MHz",
    "146.025 MHz – 152.025 MHz"
   ],
   "answer": "156.025 MHz – 162.025 MHz",
   "explanation": "L'introduction précise que le certificat restreint porte sur l'utilisation d'une station radio VHF de 156.025 MHz à 162.025 MHz, en mer et sur les voies de navigation intérieure.",
   "reminder": "Bande VHF du certificat : de 156.025 à 162.025 MHz.",
   "source": {
    "page": 4,
    "quote": "certificat restreint pour l’utilisation d’une station radio VHF (156.025 MHz – 162.025 MHz) en mer et sur les voies de navigation intérieure"
   },
   "category": "frequences-modes",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 140\" font-family=\"Arial, sans-serif\"><rect width=\"520\" height=\"140\" fill=\"#ffffff\"/><text x=\"260\" y=\"24\" text-anchor=\"middle\" font-size=\"15\" fill=\"#1a2a5a\">Bande VHF du certificat restreint</text><line x1=\"40\" y1=\"80\" x2=\"480\" y2=\"80\" stroke=\"#555\" stroke-width=\"2\"/><rect x=\"120\" y=\"62\" width=\"280\" height=\"36\" fill=\"#cfe3f7\" stroke=\"#1a5fa0\"/><text x=\"260\" y=\"85\" text-anchor=\"middle\" font-size=\"14\" fill=\"#1a2a5a\">VHF maritime</text><line x1=\"120\" y1=\"56\" x2=\"120\" y2=\"104\" stroke=\"#1a5fa0\" stroke-width=\"2\"/><line x1=\"400\" y1=\"56\" x2=\"400\" y2=\"104\" stroke=\"#1a5fa0\" stroke-width=\"2\"/><text x=\"120\" y=\"124\" text-anchor=\"middle\" font-size=\"13\">156.025 MHz</text><text x=\"400\" y=\"124\" text-anchor=\"middle\" font-size=\"13\">162.025 MHz</text></svg>",
    "placement": "explanation",
    "alt": "Axe de fréquences montrant la bande VHF maritime entre 156.025 MHz et 162.025 MHz"
   },
   "kind": "memoire"
  },
  {
   "id": "Q1002",
   "type": "qcm",
   "question": "Quel exemple le manuel donne-t-il d'une installation de télécommunications qui ne peut pas garantir les communications navire-navire et navire-terre qu'assure l'installation radioélectrique de bord ?",
   "choices": [
    "L'EPIRB",
    "L'ASN",
    "L'AIS",
    "Le GSM"
   ],
   "answer": "Le GSM",
   "explanation": "Le manuel indique que l'installation radioélectrique de bord permet des communications que d'autres installations, par exemple le GSM, ne peuvent pas garantir.",
   "reminder": "La VHF garantit les communications navire-navire et navire-terre, ce que le GSM ne garantit pas.",
   "source": {
    "page": 4,
    "quote": "L’installation radioélectrique à bord permet une communication entre les navires et entre un navire et la terre que d’autres installations de télécommunications (par ex. : GSM, cf. point 3.3) ne peuvent pas garantir."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q1003",
   "type": "qcm",
   "question": "Pour les navires opérant en mer et non soumis à la convention SOLAS, que recommande l'OMI ?",
   "choices": [
    "Une installation permettant les appels sélectifs numériques (ASN)",
    "Un AIS-SART",
    "Une installation ATIS",
    "Un second appareil VHF portable"
   ],
   "answer": "Une installation permettant les appels sélectifs numériques (ASN)",
   "explanation": "Le manuel indique que l'OMI recommande à ces navires une installation permettant les appels sélectifs numériques (ASN, ou DSC en anglais).",
   "reminder": "Navire en mer non SOLAS : l'OMI recommande l'ASN (DSC).",
   "source": {
    "page": 4,
    "quote": "Pour les navires opérant en mer et non soumis à la convention SOLAS, l’OMI recommande d’utiliser une installation permettant les appels sélectifs numériques (ASN ou Digital Selective Calling (DSC) en anglais)."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q1004",
   "type": "qcm",
   "question": "Quel certificat est requis pour utiliser une installation ASN, un EPIRB, un SART ou un AIS-SART ?",
   "choices": [
    "Le seul certificat restreint de radiotéléphoniste (certificat VHF)",
    "Un certificat de jaugeage",
    "Un certificat SMDSM (GMDSS)",
    "Une autorisation de station côtière"
   ],
   "answer": "Un certificat SMDSM (GMDSS)",
   "explanation": "Selon le manuel, une installation ASN ainsi que l'utilisation d'un EPIRB, d'un SART ou d'un AIS-SART requièrent un certificat SMDSM (SRC, LRC, ROC ou GOC). Le certificat restreint VHF ne suffit donc pas.",
   "reminder": "ASN, EPIRB, SART, AIS-SART : certificat SMDSM obligatoire (SRC, LRC, ROC ou GOC).",
   "source": {
    "page": 4,
    "quote": "Cependant une telle installation de même que l’utilisation d’un EPIRB, d’un SART ou d’un AIS-SART requièrent la possession d’un certificat SMDSM (ou GMDSS en anglais). (Certificat SRC, LRC, ROC ou GOC)."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q1005",
   "type": "qcm",
   "question": "Quel est l'équivalent anglais de l'abréviation ASN (appels sélectifs numériques) ?",
   "choices": [
    "DSC (Digital Selective Calling)",
    "GMDSS",
    "MMSI",
    "ATIS"
   ],
   "answer": "DSC (Digital Selective Calling)",
   "explanation": "Le manuel précise que les appels sélectifs numériques (ASN) s'appellent Digital Selective Calling (DSC) en anglais.",
   "reminder": "ASN = appels sélectifs numériques = DSC en anglais.",
   "source": {
    "page": 4,
    "quote": "appels sélectifs numériques (ASN ou Digital Selective Calling (DSC) en anglais)"
   },
   "category": "glossaire",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q1006",
   "type": "qcm",
   "question": "Quel est l'équivalent anglais de l'abréviation SMDSM ?",
   "choices": [
    "VTS",
    "DSC",
    "SOLAS",
    "GMDSS"
   ],
   "answer": "GMDSS",
   "explanation": "Le manuel indique « certificat SMDSM (ou GMDSS en anglais) ». DSC est l'équivalent anglais d'ASN, pas de SMDSM.",
   "reminder": "SMDSM = GMDSS en anglais.",
   "source": {
    "page": 4,
    "quote": "certificat SMDSM (ou GMDSS en anglais)"
   },
   "category": "glossaire",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q1007",
   "type": "qcm",
   "question": "Comment appelle-t-on les communications entre les stations à bord d'un même navire ?",
   "choices": [
    "Correspondance publique",
    "Intraship",
    "Intership",
    "Ship-ship"
   ],
   "answer": "Intraship",
   "explanation": "Le manuel nomme « intraship » les communications entre les stations à bord d'un navire. « Intership » ou « ship-ship » désigne les communications entre navires.",
   "reminder": "Intra = à l'intérieur du navire ; inter = entre navires.",
   "source": {
    "page": 5,
    "quote": "entre les stations à bord d’un navire (intraship)"
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "facile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 230\" font-family=\"Arial, sans-serif\"><rect width=\"520\" height=\"230\" fill=\"#ffffff\"/><rect x=\"20\" y=\"60\" width=\"140\" height=\"90\" rx=\"10\" fill=\"#e8f1fb\" stroke=\"#1a5fa0\"/><text x=\"90\" y=\"52\" text-anchor=\"middle\" font-size=\"13\">Navire A</text><circle cx=\"55\" cy=\"105\" r=\"14\" fill=\"#fff\" stroke=\"#333\"/><text x=\"55\" y=\"110\" text-anchor=\"middle\" font-size=\"11\">P</text><circle cx=\"125\" cy=\"105\" r=\"14\" fill=\"#fff\" stroke=\"#333\"/><text x=\"125\" y=\"110\" text-anchor=\"middle\" font-size=\"11\">VHF</text><line x1=\"69\" y1=\"105\" x2=\"111\" y2=\"105\" stroke=\"#c0392b\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><text x=\"90\" y=\"140\" text-anchor=\"middle\" font-size=\"12\" fill=\"#c0392b\">intraship</text><rect x=\"360\" y=\"60\" width=\"140\" height=\"90\" rx=\"10\" fill=\"#e8f1fb\" stroke=\"#1a5fa0\"/><text x=\"430\" y=\"52\" text-anchor=\"middle\" font-size=\"13\">Navire B</text><line x1=\"160\" y1=\"95\" x2=\"360\" y2=\"95\" stroke=\"#27ae60\" stroke-width=\"2\"/><text x=\"260\" y=\"88\" text-anchor=\"middle\" font-size=\"12\" fill=\"#27ae60\">intership (ship-ship)</text><rect x=\"200\" y=\"180\" width=\"120\" height=\"36\" fill=\"#f4ecd8\" stroke=\"#8a6d3b\"/><text x=\"260\" y=\"203\" text-anchor=\"middle\" font-size=\"13\">Terre</text><line x1=\"120\" y1=\"150\" x2=\"230\" y2=\"180\" stroke=\"#2c3e50\" stroke-width=\"2\"/><text x=\"120\" y=\"182\" font-size=\"11\" fill=\"#2c3e50\">navire-terre</text><text x=\"40\" y=\"24\" font-size=\"14\" fill=\"#1a2a5a\">Types de communications</text></svg>",
    "placement": "explanation",
    "alt": "Schéma : communication intraship à l'intérieur du navire A, intership entre les navires A et B, et navire-terre"
   },
   "kind": "memoire"
  },
  {
   "id": "Q1008",
   "type": "qcm",
   "question": "Dans quelle catégorie de communications le manuel classe-t-il la correspondance publique et les opérations portuaires ?",
   "choices": [
    "Les communications de détresse, d'urgence et de sécurité",
    "Les communications entre les stations à bord d'un navire",
    "Les communications entre un navire et la terre",
    "Les communications entre navires"
   ],
   "answer": "Les communications entre un navire et la terre",
   "explanation": "La correspondance publique et les opérations portuaires sont citées comme exemples de communications entre un navire et la terre.",
   "reminder": "Correspondance publique et opérations portuaires : navire-terre.",
   "source": {
    "page": 5,
    "quote": "entre un navire et la terre (correspondance publique, opérations portuaires)"
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q1009",
   "type": "qcm",
   "question": "Quelle autorité est compétente pour l'équipement radioélectrique obligatoire à bord d'un navire dans les eaux maritimes ?",
   "choices": [
    "L'UIT",
    "Le Service public fédéral Mobilité et Transports",
    "L'IBPT",
    "L'OMI"
   ],
   "answer": "Le Service public fédéral Mobilité et Transports",
   "explanation": "Le manuel indique que l'équipement radioélectrique obligatoire relève de la compétence du SPF Mobilité et Transports pour les eaux maritimes. L'IBPT délivre les autorisations de station et les certificats.",
   "reminder": "Équipement obligatoire en mer : SPF Mobilité et Transports.",
   "source": {
    "page": 5,
    "quote": "L’équipement radioélectrique obligatoire à bord d’un navire relève de la compétence du Service public fédéral Mobilité et Transports (pour les eaux maritimes)."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q1010",
   "type": "qcm",
   "question": "Dans la répartition des eaux belges, à quoi correspond la zone 5 ?",
   "choices": [
    "La zone à partir de 60 milles nautiques jusque 200 milles nautiques",
    "La zone au-delà de 200 milles nautiques",
    "La zone à partir du littoral jusque 6 milles nautiques",
    "La zone à partir de 6 milles nautiques jusque 60 milles nautiques"
   ],
   "answer": "La zone à partir de 6 milles nautiques jusque 60 milles nautiques",
   "explanation": "La zone 5 s'étend de 6 à 60 milles nautiques. La zone 4 va du littoral à 6 milles, la zone 6 de 60 à 200 milles et la zone 7 au-delà de 200 milles.",
   "reminder": "Zones 4-5-6-7 : 0-6, 6-60, 60-200, au-delà de 200 milles nautiques.",
   "source": {
    "page": 5,
    "quote": "zone 5 : la zone à partir de 6 milles nautiques jusque 60 milles nautiques"
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 200\" font-family=\"Arial, sans-serif\"><rect width=\"520\" height=\"200\" fill=\"#ffffff\"/><text x=\"260\" y=\"22\" text-anchor=\"middle\" font-size=\"15\" fill=\"#1a2a5a\">Zones en mer (eaux belges)</text><rect x=\"20\" y=\"40\" width=\"40\" height=\"120\" fill=\"#e3d7b8\" stroke=\"#8a6d3b\"/><text x=\"40\" y=\"104\" text-anchor=\"middle\" font-size=\"11\" transform=\"rotate(-90 40 100)\">Littoral</text><rect x=\"60\" y=\"40\" width=\"100\" height=\"120\" fill=\"#d6eaf8\" stroke=\"#1a5fa0\"/><text x=\"110\" y=\"95\" text-anchor=\"middle\" font-size=\"13\" fill=\"#1a2a5a\">Zone 4</text><text x=\"110\" y=\"115\" text-anchor=\"middle\" font-size=\"12\">0 - 6 M</text><rect x=\"160\" y=\"40\" width=\"130\" height=\"120\" fill=\"#aed6f1\" stroke=\"#1a5fa0\"/><text x=\"225\" y=\"95\" text-anchor=\"middle\" font-size=\"13\" fill=\"#1a2a5a\">Zone 5</text><text x=\"225\" y=\"115\" text-anchor=\"middle\" font-size=\"12\">6 - 60 M</text><rect x=\"290\" y=\"40\" width=\"120\" height=\"120\" fill=\"#85c1e9\" stroke=\"#1a5fa0\"/><text x=\"350\" y=\"95\" text-anchor=\"middle\" font-size=\"13\" fill=\"#1a2a5a\">Zone 6</text><text x=\"350\" y=\"115\" text-anchor=\"middle\" font-size=\"12\">60 - 200 M</text><rect x=\"410\" y=\"40\" width=\"90\" height=\"120\" fill=\"#5dade2\" stroke=\"#1a5fa0\"/><text x=\"455\" y=\"95\" text-anchor=\"middle\" font-size=\"13\" fill=\"#1a2a5a\">Zone 7</text><text x=\"455\" y=\"115\" text-anchor=\"middle\" font-size=\"12\">> 200 M</text><text x=\"260\" y=\"185\" text-anchor=\"middle\" font-size=\"11\" fill=\"#444\">M = milles nautiques</text></svg>",
    "placement": "explanation",
    "alt": "Bandes successives depuis le littoral : zone 4 de 0 à 6 milles, zone 5 de 6 à 60 milles, zone 6 de 60 à 200 milles, zone 7 au-delà de 200 milles"
   },
   "kind": "memoire"
  },
  {
   "id": "Q1011",
   "type": "qcm",
   "question": "Quelle zone correspond à l'Escaut maritime inférieur ?",
   "choices": [
    "Zone 0",
    "Zone 1",
    "Zone 2",
    "Zone 3"
   ],
   "answer": "Zone 2",
   "explanation": "L'Escaut maritime inférieur forme la zone 2. La zone 1 comprend toutes les eaux intérieures reliées à la mer, sauf justement l'Escaut maritime inférieur.",
   "reminder": "Zone 2 = Escaut maritime inférieur.",
   "source": {
    "page": 5,
    "quote": "zone 2 : l’Escaut maritime inférieur"
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q1012",
   "type": "qcm",
   "question": "Jusqu'à quelle zone un appareil VHF fixe peut-il être remplacé par un appareil portable ?",
   "choices": [
    "Jusqu'à la zone 2",
    "Jusqu'à la zone 5",
    "Jusqu'à la zone 4",
    "Jusqu'à la zone 3"
   ],
   "answer": "Jusqu'à la zone 2",
   "explanation": "Le manuel indique que jusqu'à la zone 2, un appareil VHF fixe peut être remplacé par un portable. À partir de la zone 3 (ports de la côte), une VHF fixe est obligatoire.",
   "reminder": "Portable accepté jusqu'à la zone 2 ; VHF fixe obligatoire dès la zone 3.",
   "source": {
    "page": 5,
    "quote": "Jusqu’à la zone 2, un appareil VHF fixe peut être remplacé par un appareil portable. À partir de la zone 3, un appareil VHF fixe est obligatoire et un appareil VHF avec ASN est conseillé."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q1013",
   "type": "qcm",
   "question": "Quel équipement VHF est obligatoire pour naviguer dans les zones 6 et 7 ?",
   "choices": [
    "Deux appareils portables, dont un avec ASN",
    "Une VHF fixe sans ASN et un appareil portable supplémentaire",
    "Une VHF fixe avec ASN et un appareil portable supplémentaire",
    "Une VHF fixe avec ASN, sans appareil portable"
   ],
   "answer": "Une VHF fixe avec ASN et un appareil portable supplémentaire",
   "explanation": "Pour les zones 6 et 7, le manuel impose une VHF fixe avec ASN ainsi qu'un appareil portable supplémentaire. Il faut donc les deux.",
   "reminder": "Zones 6 et 7 : VHF fixe avec ASN et portable supplémentaire.",
   "source": {
    "page": 5,
    "quote": "Pour les zones 6 et 7, une VHF fixe avec ASN est obligatoire, ainsi qu’un appareil portable supplémentaire."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q1014",
   "type": "qcm",
   "question": "Votre appareil VHF dispose du système ASN de classe D. Quel examen devez-vous passer ?",
   "choices": [
    "L'examen LRC",
    "L'examen ROC",
    "L'examen GOC",
    "L'examen SRC"
   ],
   "answer": "L'examen SRC",
   "explanation": "Le manuel indique qu'un appareil ASN de classe D impose l'examen SRC. Pour une VHF avec ASN de classe A, il faut au moins l'examen ROC.",
   "reminder": "ASN classe D : SRC ; ASN classe A : au moins ROC.",
   "source": {
    "page": 5,
    "quote": "Si votre appareil dispose du système ASN (classe D), vous devez passer un examen SRC. Si votre appareil est une VHF avec ASN de classe A, vous devez au moins passer l’examen ROC."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q1015",
   "type": "qcm",
   "question": "Si vous organisez de la navigation de plaisance professionnellement, à partir de quelle zone devez-vous obligatoirement avoir à bord une VHF fixe avec ASN ?",
   "choices": [
    "À partir de la zone 5",
    "À partir de la zone 4",
    "À partir de la zone 6",
    "À partir de la zone 3"
   ],
   "answer": "À partir de la zone 5",
   "explanation": "Pour la plaisance organisée professionnellement, la VHF fixe avec ASN est obligatoire dès la zone 5, et il faut passer un examen ROC. Pour la plaisance non professionnelle, l'obligation ne commence qu'aux zones 6 et 7.",
   "reminder": "Plaisance professionnelle : VHF fixe avec ASN dès la zone 5, examen ROC.",
   "source": {
    "page": 6,
    "quote": "Attention : Si vous organisez de la navigation de plaisance professionnellement, vous devez obligatoirement avoir à bord une VHF fixe avec ASN à partir de la zone 5. Vous devez pour cela passer un examen ROC."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q1016",
   "type": "qcm",
   "question": "En navigation intérieure, depuis quelle date un mariphone est-il obligatoire sur un petit bateau à moteur de 7 m à 20 m ?",
   "choices": [
    "01.01.2011",
    "01.01.2009",
    "01.01.2007",
    "01.01.2005"
   ],
   "answer": "01.01.2009",
   "explanation": "D'après le tableau du manuel, le mariphone est obligatoire depuis le 01.01.2009 pour un petit bateau de 7 m à 20 m. La date du 01.01.2007 concerne les grands bateaux.",
   "reminder": "Mariphone obligatoire : grand bateau depuis 2007, petit bateau de 7 à 20 m depuis 2009.",
   "source": {
    "page": 6,
    "quote": "Petit bateau entre 7 m et 20 m 01.01.2009 Non, mais à conseiller Grand bateau 01.01.2007 01.01.2007"
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "difficile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 540 180\" font-family=\"Arial, sans-serif\"><rect width=\"540\" height=\"180\" fill=\"#ffffff\"/><text x=\"270\" y=\"22\" text-anchor=\"middle\" font-size=\"14\" fill=\"#1a2a5a\">Navigation intérieure - bateaux à moteur</text><rect x=\"0\" y=\"36\" width=\"180\" height=\"34\" fill=\"#cfe3f7\" stroke=\"#1a5fa0\"/><text x=\"8\" y=\"58\" font-size=\"12\"></text><rect x=\"180\" y=\"36\" width=\"160\" height=\"34\" fill=\"#cfe3f7\" stroke=\"#1a5fa0\"/><text x=\"188\" y=\"58\" font-size=\"12\">Mariphone obligatoire</text><rect x=\"340\" y=\"36\" width=\"200\" height=\"34\" fill=\"#cfe3f7\" stroke=\"#1a5fa0\"/><text x=\"348\" y=\"58\" font-size=\"12\">Double mariphone obligatoire</text><rect x=\"0\" y=\"70\" width=\"180\" height=\"34\" fill=\"#cfe3f7\" stroke=\"#1a5fa0\"/><text x=\"8\" y=\"92\" font-size=\"12\">Petit bateau ≤ 7 m</text><rect x=\"180\" y=\"70\" width=\"160\" height=\"34\" fill=\"#ffffff\" stroke=\"#1a5fa0\"/><text x=\"188\" y=\"92\" font-size=\"12\">Non</text><rect x=\"340\" y=\"70\" width=\"200\" height=\"34\" fill=\"#ffffff\" stroke=\"#1a5fa0\"/><text x=\"348\" y=\"92\" font-size=\"12\">Non</text><rect x=\"0\" y=\"104\" width=\"180\" height=\"34\" fill=\"#cfe3f7\" stroke=\"#1a5fa0\"/><text x=\"8\" y=\"126\" font-size=\"12\">Petit bateau 7 m - 20 m</text><rect x=\"180\" y=\"104\" width=\"160\" height=\"34\" fill=\"#ffffff\" stroke=\"#1a5fa0\"/><text x=\"188\" y=\"126\" font-size=\"12\">01.01.2009</text><rect x=\"340\" y=\"104\" width=\"200\" height=\"34\" fill=\"#ffffff\" stroke=\"#1a5fa0\"/><text x=\"348\" y=\"126\" font-size=\"12\">Non, mais à conseiller</text><rect x=\"0\" y=\"138\" width=\"180\" height=\"34\" fill=\"#cfe3f7\" stroke=\"#1a5fa0\"/><text x=\"8\" y=\"160\" font-size=\"12\">Grand bateau</text><rect x=\"180\" y=\"138\" width=\"160\" height=\"34\" fill=\"#ffffff\" stroke=\"#1a5fa0\"/><text x=\"188\" y=\"160\" font-size=\"12\">01.01.2007</text><rect x=\"340\" y=\"138\" width=\"200\" height=\"34\" fill=\"#ffffff\" stroke=\"#1a5fa0\"/><text x=\"348\" y=\"160\" font-size=\"12\">01.01.2007</text></svg>",
    "placement": "explanation",
    "alt": "Tableau : petit bateau de 7 m ou moins, non et non ; petit bateau de 7 à 20 m, 01.01.2009 et non mais à conseiller ; grand bateau, 01.01.2007 pour les deux colonnes"
   },
   "kind": "memoire"
  },
  {
   "id": "Q1017",
   "type": "qcm",
   "question": "En navigation intérieure, lequel de ces bateaux est un « grand bateau » ?",
   "choices": [
    "Un bateau de plaisance à moteur de 15 m",
    "Un bateau de plaisance à moteur de 19 m",
    "Un petit bateau à moteur de 7 m",
    "Un bateau à passagers de 12 m"
   ],
   "answer": "Un bateau à passagers de 12 m",
   "explanation": "Un bateau à passagers est un grand bateau quelle que soit sa longueur. Sinon, un bateau n'est « grand » qu'à partir de 20 m : un bateau de plaisance de 19 m ne l'est donc pas.",
   "reminder": "Grand bateau : 20 m ou plus, ou transbordeur, bateau à passagers, bateau en train de pêcher ou barge de poussage, quelle que soit la longueur.",
   "source": {
    "page": 6,
    "quote": "un bateau à passagers, quelle que soit sa longueur"
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q1018",
   "type": "qcm",
   "question": "Pourquoi un grand bateau en navigation intérieure doit-il être équipé de deux mariphones ?",
   "choices": [
    "Parce que la puissance d'un seul mariphone y est limitée",
    "Parce que la double veille (Dual Watch) est interdite sur les voies de navigation intérieure",
    "Parce que l'ATIS ne peut être programmé que sur un seul appareil",
    "Parce qu'un appareil portable ne peut jamais être compté comme mariphone"
   ],
   "answer": "Parce que la double veille (Dual Watch) est interdite sur les voies de navigation intérieure",
   "explanation": "Un grand bateau doit écouter en même temps deux canaux (bateau à bateau et informations nautiques). Comme la double veille est interdite sur les voies de navigation intérieure, il faut deux mariphones.",
   "reminder": "Navigation intérieure : Dual Watch interdite, donc deux mariphones sur les grands bateaux.",
   "source": {
    "page": 6,
    "quote": "Comme la fonction double veille (Dual Watch) est interdite sur les voies de navigation intérieure, l’achat de deux mariphones est nécessaire pour satisfaire à cette condition."
   },
   "category": "equipements-installations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q1019",
   "type": "qcm",
   "question": "Sous l'autorité de qui le service radiotéléphonique de la station de navire est-il placé ?",
   "choices": [
    "Du capitaine ou du skipper du navire",
    "Du titulaire de l'autorisation de station",
    "Du propriétaire du navire",
    "De l'IBPT"
   ],
   "answer": "Du capitaine ou du skipper du navire",
   "explanation": "Le manuel place le service radiotéléphonique sous l'autorité du capitaine ou du skipper. Le propriétaire, lui, est responsable des règles administratives.",
   "reminder": "Service radio à bord : autorité du capitaine ou du skipper.",
   "source": {
    "page": 6,
    "quote": "Le service radiotéléphonique de la station de navire est placé sous l'autorité du capitaine ou du skipper du navire."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q1020",
   "type": "qcm",
   "question": "Qui est responsable du respect des règles administratives de la station (autorisation de station, changements d'adresse, programmation correcte) ?",
   "choices": [
    "Chaque opérateur titulaire d'un certificat",
    "Le capitaine ou le skipper",
    "Le propriétaire",
    "Le revendeur de l'appareil"
   ],
   "answer": "Le propriétaire",
   "explanation": "Le manuel confie au propriétaire le respect des règles administratives (autorisation, changements d'adresse, programmation correcte). Le capitaine ou skipper veille, lui, au respect des règles d'exploitation.",
   "reminder": "Propriétaire : règles administratives ; capitaine ou skipper : règles d'exploitation.",
   "source": {
    "page": 6,
    "quote": "Le propriétaire est responsable du respect des règles administratives (autorisation de station, changements d’adresse, programmation correcte...) auxquelles est soumise l’installation de la station."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q1021",
   "type": "qcm",
   "question": "Où doit se trouver l'original de l'autorisation de station ?",
   "choices": [
    "Auprès de l'IBPT",
    "Toujours à bord du navire",
    "Au domicile du propriétaire, avec une copie à bord",
    "Dans le port d'attache du navire"
   ],
   "answer": "Toujours à bord du navire",
   "explanation": "Le manuel exige que l'original de l'autorisation de station soit toujours conservé à bord et présenté sur demande à tout représentant d'une autorité compétente.",
   "reminder": "L'original de l'autorisation reste toujours à bord.",
   "source": {
    "page": 6,
    "quote": "L’original de l’autorisation de station doit toujours être conservé à bord du navire et doit être présenté sur demande à tout représentant d’une autorité compétente."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q1022",
   "type": "qcm",
   "question": "Que risquez-vous si vous ne tenez pas à jour les données de votre autorisation de station ?",
   "choices": [
    "Que votre MMSI soit remplacé par un numéro d'identification maritime",
    "Que votre certificat d'opérateur soit prolongé d'office",
    "Une simple remarque sans conséquence",
    "Que l'autorisation soit suspendue ou révoquée"
   ],
   "answer": "Que l'autorisation soit suspendue ou révoquée",
   "explanation": "Le manuel précise qu'en omettant de tenir à jour les données de l'autorisation, vous risquez une suspension ou une révocation (article 10 de l'AR du 18 décembre 2009).",
   "reminder": "Données non mises à jour : risque de suspension ou de révocation de l'autorisation.",
   "source": {
    "page": 7,
    "quote": "Si vous omettez de tenir à jour les données de votre autorisation, vous courez le risque que votre autorisation soit suspendue ou révoquée"
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q1023",
   "type": "qcm",
   "question": "Pour quels navires l'IBPT délivre-t-il des autorisations de station ?",
   "choices": [
    "Uniquement pour les navires soumis au droit belge, enregistrés dans un registre naval belge",
    "Pour tout navire dont le propriétaire réside en Belgique, même s'il n'est pas enregistré",
    "Uniquement pour les navires de plus de 20 m",
    "Pour tout navire naviguant dans les eaux belges, quel que soit son pavillon"
   ],
   "answer": "Uniquement pour les navires soumis au droit belge, enregistrés dans un registre naval belge",
   "explanation": "L'IBPT ne délivre des autorisations que pour les navires soumis au droit belge, c'est-à-dire enregistrés dans un registre naval belge (lettre d'enregistrement ou certificat de jaugeage).",
   "reminder": "Autorisation IBPT : navire soumis au droit belge (lettre d'enregistrement ou certificat de jaugeage).",
   "source": {
    "page": 7,
    "quote": "L’IBPT délivre uniquement les autorisations de station pour les navires soumis au droit belge (ce qui signifie que votre navire doit être enregistré dans un registre naval belge au moyen d’une lettre d’enregistrement ou d’un certificat de jaugeage)."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q1024",
   "type": "qcm",
   "question": "À quel moment pouvez-vous acheter l'appareil de radiocommunications ?",
   "choices": [
    "Dès l'envoi du formulaire de demande à l'IBPT",
    "Avant d'introduire la demande d'autorisation",
    "Seulement après réception de l'autorisation de station",
    "Dans les 60 jours précédant la demande d'autorisation"
   ],
   "answer": "Seulement après réception de l'autorisation de station",
   "explanation": "Le manuel indique qu'on ne peut acheter l'appareil qu'après avoir reçu l'autorisation de station, y compris pour tout appareil supplémentaire.",
   "reminder": "D'abord l'autorisation, ensuite l'achat de l'appareil (même supplémentaire).",
   "source": {
    "page": 7,
    "quote": "Vous ne pouvez acheter l’appareil de radiocommunications qu’après réception de l’autorisation de station. Cela vaut également pour tout appareil supplémentaire que vous achetez."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q1025",
   "type": "qcm",
   "question": "Vous achetez un navire à bord duquel se trouve déjà un appareil radio. De quel délai disposez-vous pour demander votre autorisation de station ?",
   "choices": [
    "30 jours",
    "90 jours",
    "15 jours",
    "60 jours"
   ],
   "answer": "60 jours",
   "explanation": "Le manuel accorde un délai de 60 jours pour demander l'autorisation lorsque le navire acheté comporte déjà un appareil.",
   "reminder": "Navire acheté déjà équipé : 60 jours pour demander l'autorisation.",
   "source": {
    "page": 7,
    "quote": "Si vous achetez un navire à bord duquel se trouve déjà un appareil, vous disposez d’un délai de 60 jours pour demander votre autorisation."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q1026",
   "type": "qcm",
   "question": "Que faire de l'autorisation de station en cas de vente ou de mise hors service du navire ?",
   "choices": [
    "La renvoyer immédiatement à l'IBPT",
    "La faire modifier à la main au nom du nouveau propriétaire",
    "La conserver 5 ans",
    "La remettre à l'acheteur avec le navire"
   ],
   "answer": "La renvoyer immédiatement à l'IBPT",
   "explanation": "Le manuel impose qu'en cas de vente ou de mise hors service du navire, l'autorisation de station soit immédiatement renvoyée à l'IBPT. Les autres options ne respectent pas cette obligation ; de plus, les modifications manuelles de l'autorisation sont interdites (page 8).",
   "reminder": "Vente ou mise hors service : l'autorisation retourne immédiatement à l'IBPT.",
   "source": {
    "page": 7,
    "quote": "En cas de vente ou de mise hors service du navire, l’autorisation de station doit être immédiatement renvoyée à l’IBPT."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q1027",
   "type": "qcm",
   "question": "Quels moyens de radiocommunications l'autorisation de station doit-elle reprendre ?",
   "choices": [
    "Uniquement les appareils équipés de l'ASN",
    "Uniquement l'appareil principal",
    "Tous les moyens présents à bord, y compris les stations portatives",
    "Uniquement les appareils fixes"
   ],
   "answer": "Tous les moyens présents à bord, y compris les stations portatives",
   "explanation": "L'autorisation de station doit reprendre tous les moyens de radiocommunications présents à bord, donc aussi les stations portatives.",
   "reminder": "Autorisation de station : tous les appareils du bord, portatifs compris.",
   "source": {
    "page": 7,
    "quote": "L’autorisation de station doit reprendre tous les moyens de radiocommunications présents à bord et donc également les stations portatives."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q1028",
   "type": "qcm",
   "question": "Votre autorisation de station ne reflète plus l'équipement de bord. Que pouvez-vous faire ?",
   "choices": [
    "La conserver telle quelle tant qu'elle n'a pas expiré",
    "Demander une autorisation adaptée ; la modifier à la main est interdit",
    "La corriger à la main et la faire contresigner par le skipper",
    "La corriger à la main, à condition d'informer l'IBPT"
   ],
   "answer": "Demander une autorisation adaptée ; la modifier à la main est interdit",
   "explanation": "L'autorisation reproduit l'état correct de l'équipement et les modifications manuelles sont interdites. En cas de modification de l'installation, il faut demander une autorisation adaptée (page 7).",
   "reminder": "L'autorisation de station reflète l'équipement exact : aucune modification manuelle.",
   "source": {
    "page": 8,
    "quote": "L’autorisation de station est la permission de détenir un appareil. Elle reproduit l’état correct de l’équipement à bord. Les modifications manuelles sont interdites."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q1029",
   "type": "qcm",
   "question": "Que peut entraîner une violation des conditions d'autorisation mentionnées dans l'autorisation de station ?",
   "choices": [
    "La prolongation automatique du certificat d'opérateur",
    "Le changement de l'indicatif d'appel",
    "Uniquement un avertissement écrit",
    "La révocation de l'autorisation de station"
   ],
   "answer": "La révocation de l'autorisation de station",
   "explanation": "Les conditions d'autorisation sont les règles à suivre pour conserver l'autorisation. Les violer peut entraîner sa révocation.",
   "reminder": "Conditions d'autorisation non respectées : révocation possible.",
   "source": {
    "page": 8,
    "quote": "Une violation de ces conditions d'autorisation peut entraîner la révocation de votre autorisation de station."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q1030",
   "type": "qcm",
   "question": "Quelle est la durée de validité du certificat d'opérateur ?",
   "choices": [
    "3 ans",
    "Illimitée",
    "5 ans",
    "10 ans"
   ],
   "answer": "5 ans",
   "explanation": "Le manuel précise que le certificat d'opérateur n'est valable que 5 ans.",
   "reminder": "Certificat d'opérateur : 5 ans de validité.",
   "source": {
    "page": 8,
    "quote": "Le certificat d’opérateur n’est valable que 5 ans."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "facile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 140\" font-family=\"Arial, sans-serif\"><rect width=\"520\" height=\"140\" fill=\"#ffffff\"/><text x=\"260\" y=\"22\" text-anchor=\"middle\" font-size=\"14\" fill=\"#1a2a5a\">Validité du certificat d’opérateur</text><line x1=\"40\" y1=\"70\" x2=\"480\" y2=\"70\" stroke=\"#333\" stroke-width=\"2\"/><circle cx=\"40\" cy=\"70\" r=\"6\" fill=\"#1a5fa0\"/><text x=\"40\" y=\"100\" text-anchor=\"middle\" font-size=\"12\">Délivrance</text><circle cx=\"480\" cy=\"70\" r=\"6\" fill=\"#c0392b\"/><text x=\"480\" y=\"100\" text-anchor=\"middle\" font-size=\"12\">Échéance</text><text x=\"260\" y=\"60\" text-anchor=\"middle\" font-size=\"13\">5 ans</text><circle cx=\"410\" cy=\"70\" r=\"6\" fill=\"#e67e22\"/><text x=\"410\" y=\"125\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e67e22\">Avertissement : 6 semaines avant</text><line x1=\"410\" y1=\"76\" x2=\"410\" y2=\"110\" stroke=\"#e67e22\" stroke-dasharray=\"3 3\"/></svg>",
    "placement": "explanation",
    "alt": "Frise chronologique : délivrance, avertissement 6 semaines avant l'échéance, échéance après 5 ans"
   },
   "kind": "memoire"
  },
  {
   "id": "Q1031",
   "type": "qcm",
   "question": "Combien de temps avant l'échéance de votre certificat d'opérateur êtes-vous averti ?",
   "choices": [
    "6 semaines",
    "6 mois",
    "2 semaines",
    "3 mois"
   ],
   "answer": "6 semaines",
   "explanation": "Le titulaire est averti 6 semaines avant l'échéance pour pouvoir demander un nouveau certificat à temps, à condition que son adresse soit à jour.",
   "reminder": "Avertissement 6 semaines avant la fin des 5 ans : gardez votre adresse à jour.",
   "source": {
    "page": 8,
    "quote": "Vous êtes averti 6 semaines avant l’arrivée à échéance de la validité afin de vous permettre de demander un nouveau certificat à temps."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q1032",
   "type": "qcm",
   "question": "Qui délivre le certificat restreint de radiotéléphoniste de station de navire (certificat VHF), et à quelle condition ?",
   "choices": [
    "L'IBPT, sur simple présentation de l'autorisation de station",
    "L'IBPT, après la réussite d'un examen",
    "Le SPF Mobilité et Transports, sur simple demande",
    "L'UIT, après la réussite d'un examen"
   ],
   "answer": "L'IBPT, après la réussite d'un examen",
   "explanation": "Le certificat VHF est délivré par l'IBPT suite à la réussite d'un examen.",
   "reminder": "Certificat VHF : délivré par l'IBPT après réussite de l'examen.",
   "source": {
    "page": 8,
    "quote": "Le certificat restreint de radiotéléphoniste de station de navire (certificat VHF) est délivré par l’IBPT suite à la réussite d'un examen."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q1033",
   "type": "qcm",
   "question": "Quel âge minimum faut-il avoir pour obtenir le certificat restreint VHF ?",
   "choices": [
    "16 ans",
    "18 ans",
    "15 ans",
    "14 ans"
   ],
   "answer": "15 ans",
   "explanation": "Le certificat restreint VHF n'est délivré qu'à des personnes physiques âgées d'au moins 15 ans.",
   "reminder": "Certificat VHF : personne physique, 15 ans minimum.",
   "source": {
    "page": 9,
    "quote": "Le certificat restreint VHF est délivré uniquement à des personnes physiques âgées de 15 ans au moins."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q1034",
   "type": "qcm",
   "question": "Quelle série de lettres a été attribuée à la Belgique pour les indicatifs d'appel ?",
   "choices": [
    "ONA à OTZ",
    "OUA à OZZ",
    "ORA à OTZ",
    "OAA à OMZ"
   ],
   "answer": "ONA à OTZ",
   "explanation": "L'UIT attribue des séries de lettres par pays, et la série ONA à OTZ a été attribuée à la Belgique.",
   "reminder": "Belgique : série ONA à OTZ, attribuée par l'UIT.",
   "source": {
    "page": 9,
    "quote": "La série ONA à OTZ a été attribuée à la Belgique."
   },
   "category": "identification-stations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q1035",
   "type": "qcm",
   "question": "Combien de chiffres compte un MMSI, et qui l'attribue aux stations de bateau et de navire en Belgique ?",
   "choices": [
    "7 chiffres, attribués par l'IBPT",
    "9 chiffres, attribués par le fabricant",
    "6 chiffres, attribués par l'UIT",
    "9 chiffres, attribués par l'IBPT"
   ],
   "answer": "9 chiffres, attribués par l'IBPT",
   "explanation": "Le MMSI est un code d'identification unique de neuf chiffres attribué par l'IBPT. Ce sont les numéros d'identification maritime (AIS-SART, AIS-MOB, AIS-EPIRB) qui sont attribués par le fabricant.",
   "reminder": "MMSI : 9 chiffres, attribué par l'IBPT.",
   "source": {
    "page": 9,
    "quote": "L'identité dans le service mobile maritime (MMSI, Maritime Mobile Service Identity en anglais) est un code d’identification unique de neuf chiffres, attribué par l’IBPT aux stations de bateau et de navire."
   },
   "category": "identification-stations",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 140\" font-family=\"Arial, sans-serif\"><rect width=\"520\" height=\"140\" fill=\"#ffffff\"/><text x=\"260\" y=\"24\" text-anchor=\"middle\" font-size=\"15\" fill=\"#1a2a5a\">Structure d’un MMSI belge (9 chiffres)</text><rect x=\"60\" y=\"45\" width=\"40\" height=\"44\" fill=\"#f9e0b0\" stroke=\"#1a5fa0\"/><text x=\"80\" y=\"74\" text-anchor=\"middle\" font-size=\"18\">2</text><rect x=\"105\" y=\"45\" width=\"40\" height=\"44\" fill=\"#f9e0b0\" stroke=\"#1a5fa0\"/><text x=\"125\" y=\"74\" text-anchor=\"middle\" font-size=\"18\">0</text><rect x=\"150\" y=\"45\" width=\"40\" height=\"44\" fill=\"#f9e0b0\" stroke=\"#1a5fa0\"/><text x=\"170\" y=\"74\" text-anchor=\"middle\" font-size=\"18\">5</text><rect x=\"195\" y=\"45\" width=\"40\" height=\"44\" fill=\"#e8f1fb\" stroke=\"#1a5fa0\"/><text x=\"215\" y=\"74\" text-anchor=\"middle\" font-size=\"18\">X</text><rect x=\"240\" y=\"45\" width=\"40\" height=\"44\" fill=\"#e8f1fb\" stroke=\"#1a5fa0\"/><text x=\"260\" y=\"74\" text-anchor=\"middle\" font-size=\"18\">X</text><rect x=\"285\" y=\"45\" width=\"40\" height=\"44\" fill=\"#e8f1fb\" stroke=\"#1a5fa0\"/><text x=\"305\" y=\"74\" text-anchor=\"middle\" font-size=\"18\">X</text><rect x=\"330\" y=\"45\" width=\"40\" height=\"44\" fill=\"#e8f1fb\" stroke=\"#1a5fa0\"/><text x=\"350\" y=\"74\" text-anchor=\"middle\" font-size=\"18\">X</text><rect x=\"375\" y=\"45\" width=\"40\" height=\"44\" fill=\"#e8f1fb\" stroke=\"#1a5fa0\"/><text x=\"395\" y=\"74\" text-anchor=\"middle\" font-size=\"18\">X</text><rect x=\"420\" y=\"45\" width=\"40\" height=\"44\" fill=\"#e8f1fb\" stroke=\"#1a5fa0\"/><text x=\"440\" y=\"74\" text-anchor=\"middle\" font-size=\"18\">X</text><line x1=\"60\" y1=\"100\" x2=\"190\" y2=\"100\" stroke=\"#b9770e\" stroke-width=\"2\"/><text x=\"125\" y=\"120\" text-anchor=\"middle\" font-size=\"12\" fill=\"#b9770e\">MID (pays) = 205</text><line x1=\"195\" y1=\"100\" x2=\"460\" y2=\"100\" stroke=\"#1a5fa0\" stroke-width=\"2\"/><text x=\"327\" y=\"120\" text-anchor=\"middle\" font-size=\"12\" fill=\"#1a5fa0\">six chiffres</text></svg>",
    "placement": "explanation",
    "alt": "Neuf cases : les trois premières contiennent 205 (MID de la Belgique), les six suivantes des chiffres libres"
   },
   "kind": "memoire"
  },
  {
   "id": "Q1036",
   "type": "qcm",
   "question": "Comment reconnaît-on un MMSI belge ?",
   "choices": [
    "Il commence par 970, suivi de six chiffres",
    "Il commence par le code national 205, suivi de six chiffres",
    "Il se termine par le code national 205",
    "Il commence par les lettres ON, suivies de sept chiffres"
   ],
   "answer": "Il commence par le code national 205, suivi de six chiffres",
   "explanation": "Les trois premiers chiffres du MMSI forment le MID, qui identifie le pays. Les navires belges ont le code « 205 » suivi de six chiffres. Le préfixe 970 correspond aux AIS-SART.",
   "reminder": "MMSI belge : 205 + six chiffres (205 = MID de la Belgique).",
   "source": {
    "page": 9,
    "quote": "Les trois premiers chiffres représentent les chiffres d’identification maritime MID (Maritime Identification Digit). Ils identifient le pays. Les navires belges sont reconnaissables au code national « 205 » suivi de six chiffres."
   },
   "category": "identification-stations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q1037",
   "type": "qcm",
   "question": "À quelle fréquence les administrations qui attribuent les MMSI doivent-elles transmettre une mise à jour à l'UIT (base de données MARS) ?",
   "choices": [
    "Chaque année",
    "Chaque trimestre",
    "Chaque mois",
    "Chaque semaine"
   ],
   "answer": "Chaque mois",
   "explanation": "Les données d'identification figurent dans la base de données mondiale MARS de l'UIT. Les administrations qui attribuent ces numéros doivent lui transmettre une mise à jour mensuelle.",
   "reminder": "Base MARS de l'UIT : mise à jour mensuelle.",
   "source": {
    "page": 9,
    "quote": "Ces données se retrouvent dans la base de données mondiale de l’UIT (base de données MARS). Les administrations qui attribuent ces numéros sont obligées de transmettre une mise à jour mensuelle à l’UIT."
   },
   "category": "identification-stations",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q1038",
   "type": "qcm",
   "question": "Par quels chiffres commence l'identification d'un AIS-MOB ?",
   "choices": [
    "970",
    "205",
    "974",
    "972"
   ],
   "answer": "972",
   "explanation": "Le manuel donne AIS-SART = 970 XX YYYY, AIS-MOB = 972 XX YYYY et AIS-EPIRB = 974 XX YYYY. Ce ne sont pas des MMSI : ils sont attribués par le fabricant et ne figurent pas dans la base MARS.",
   "reminder": "SART 970, MOB 972, EPIRB 974 : numéros du fabricant, pas des MMSI.",
   "source": {
    "page": 9,
    "quote": "Les identifications de AIS-SART (970 XX YYYY), AIS-MOB (972 XX YYYY) et AIS-EPIRB (974 XX YYYY) ne sont pas des numéros MMSI, elles ne sont pas attribuées par l’IBPT mais par le fabricant."
   },
   "category": "identification-stations",
   "difficulty": "difficile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 185\" font-family=\"Arial, sans-serif\"><rect width=\"460\" height=\"185\" fill=\"#ffffff\"/><text x=\"230\" y=\"22\" text-anchor=\"middle\" font-size=\"14\" fill=\"#1a2a5a\">Numéros d’identification maritime (fabricant)</text><rect x=\"60\" y=\"38\" width=\"150\" height=\"32\" fill=\"#e8f1fb\" stroke=\"#1a5fa0\"/><text x=\"72\" y=\"59\" font-size=\"13\">AIS-SART</text><rect x=\"210\" y=\"38\" width=\"190\" height=\"32\" fill=\"#ffffff\" stroke=\"#1a5fa0\"/><text x=\"222\" y=\"59\" font-size=\"13\">970 XX YYYY</text><rect x=\"60\" y=\"76\" width=\"150\" height=\"32\" fill=\"#e8f1fb\" stroke=\"#1a5fa0\"/><text x=\"72\" y=\"97\" font-size=\"13\">AIS-MOB</text><rect x=\"210\" y=\"76\" width=\"190\" height=\"32\" fill=\"#ffffff\" stroke=\"#1a5fa0\"/><text x=\"222\" y=\"97\" font-size=\"13\">972 XX YYYY</text><rect x=\"60\" y=\"114\" width=\"150\" height=\"32\" fill=\"#e8f1fb\" stroke=\"#1a5fa0\"/><text x=\"72\" y=\"135\" font-size=\"13\">AIS-EPIRB</text><rect x=\"210\" y=\"114\" width=\"190\" height=\"32\" fill=\"#ffffff\" stroke=\"#1a5fa0\"/><text x=\"222\" y=\"135\" font-size=\"13\">974 XX YYYY</text><text x=\"230\" y=\"170\" text-anchor=\"middle\" font-size=\"11\" fill=\"#444\">Pas des MMSI - non enregistrés dans MARS</text></svg>",
    "placement": "explanation",
    "alt": "Tableau : AIS-SART 970 XX YYYY, AIS-MOB 972 XX YYYY, AIS-EPIRB 974 XX YYYY, attribués par le fabricant"
   },
   "kind": "memoire"
  },
  {
   "id": "Q1039",
   "type": "qcm",
   "question": "De combien de questions se compose l'examen du certificat VHF ?",
   "choices": [
    "40 questions à choix multiple",
    "25 questions à choix multiple",
    "30 questions à choix multiple",
    "20 questions à choix multiple"
   ],
   "answer": "25 questions à choix multiple",
   "explanation": "L'examen se déroule sur ordinateur et compte 25 questions à choix multiple.",
   "reminder": "Examen VHF : 25 QCM sur ordinateur.",
   "source": {
    "page": 9,
    "quote": "L’examen se déroule sur ordinateur et est composé de 25 questions à choix multiple."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "facile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 120\" font-family=\"Arial, sans-serif\"><rect width=\"460\" height=\"120\" fill=\"#ffffff\"/><text x=\"230\" y=\"22\" text-anchor=\"middle\" font-size=\"14\" fill=\"#1a2a5a\">Examen certificat VHF</text><rect x=\"30\" y=\"40\" width=\"400\" height=\"30\" fill=\"#f2f2f2\" stroke=\"#555\"/><rect x=\"30\" y=\"40\" width=\"240\" height=\"30\" fill=\"#a9dfbf\" stroke=\"#555\"/><text x=\"150\" y=\"60\" text-anchor=\"middle\" font-size=\"12\">60 % = 15 / 25</text><line x1=\"270\" y1=\"34\" x2=\"270\" y2=\"76\" stroke=\"#c0392b\" stroke-width=\"2\"/><text x=\"230\" y=\"100\" text-anchor=\"middle\" font-size=\"12\">25 questions à choix multiple, sur ordinateur</text></svg>",
    "placement": "explanation",
    "alt": "Barre de progression : 60 % des 25 questions, soit 15 bonnes réponses, est le seuil de réussite"
   },
   "kind": "memoire"
  },
  {
   "id": "Q1040",
   "type": "qcm",
   "question": "Quel pourcentage faut-il obtenir pour réussir l'examen du certificat VHF ?",
   "choices": [
    "60 %",
    "50 %",
    "75 %",
    "70 %"
   ],
   "answer": "60 %",
   "explanation": "Le manuel indique qu'il faut obtenir 60 % pour réussir l'examen.",
   "reminder": "Seuil de réussite : 60 %.",
   "source": {
    "page": 9,
    "quote": "Il faut obtenir 60 % pour réussir l’examen."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q1041",
   "type": "qcm",
   "question": "Que peuvent exiger les autorités de contrôle (officiers de police judiciaire de l'IBPT, police, douane...) ?",
   "choices": [
    "La présentation de l'autorisation au port d'attache dans la semaine",
    "L'envoi d'une copie scannée de l'autorisation à l'IBPT",
    "La production immédiate de l'original de l'autorisation de station",
    "La production d'une copie de l'autorisation dans les 60 jours"
   ],
   "answer": "La production immédiate de l'original de l'autorisation de station",
   "explanation": "Les autorités de contrôle peuvent exiger la production immédiate de l'original de l'autorisation de station, d'où l'obligation de le conserver toujours à bord.",
   "reminder": "Contrôle : l'original de l'autorisation doit être présenté immédiatement.",
   "source": {
    "page": 10,
    "quote": "peuvent exiger la production immédiate de l'original de l’autorisation de station"
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q1042",
   "type": "qcm",
   "question": "À quoi donne lieu l'absence d'autorisation de station ?",
   "choices": [
    "À une simple remarque écrite sans autre conséquence",
    "Uniquement au retrait du certificat d'opérateur",
    "Au remplacement du MMSI du navire",
    "À une saisie de l'équipement radioélectrique et à d'éventuelles poursuites judiciaires"
   ],
   "answer": "À une saisie de l'équipement radioélectrique et à d'éventuelles poursuites judiciaires",
   "explanation": "L'absence d'autorisation de station enfreint l'article 13/1, § 1er de la loi du 13 juin 2005. Elle entraîne une saisie de l'équipement et d'éventuelles poursuites judiciaires.",
   "reminder": "Pas d'autorisation : saisie de l'équipement et poursuites possibles.",
   "source": {
    "page": 10,
    "quote": "L’absence d’autorisation de station est une infraction à l’article 13/1, § 1er de la loi du 13 juin 2005 relative aux communications électroniques. Elle donne lieu à une saisie de l’équipement radioélectrique et à d’éventuelles poursuites judiciaires."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q1043",
   "type": "qcm",
   "question": "Dans quel cas, cité par le manuel, l'autorisation de station est-elle révoquée ?",
   "choices": [
    "En cas de navigation en zone 7",
    "En cas de violation du secret des communications (article 41 de la loi du 13 juin 2005)",
    "En cas d'achat d'un appareil supplémentaire après réception d'une autorisation adaptée",
    "En cas de changement d'adresse communiqué à l'IBPT"
   ],
   "answer": "En cas de violation du secret des communications (article 41 de la loi du 13 juin 2005)",
   "explanation": "L'autorisation est révoquée si ses conditions ne sont pas respectées ou en cas de violation de l'article 41 de la loi du 13 juin 2005, qui porte sur le secret.",
   "reminder": "Révocation : conditions non respectées ou violation du secret (article 41).",
   "source": {
    "page": 10,
    "quote": "en cas de violation de l’article 41 de la loi du 13 juin 2005 relative aux communications électroniques (secret)."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q1044",
   "type": "qcm",
   "question": "À qui le procès-verbal d'une infraction est-il toujours transmis ?",
   "choices": [
    "Au parquet du Procureur du Roi",
    "À l'UIT",
    "Au propriétaire du navire",
    "Au Service public fédéral Mobilité et Transports"
   ],
   "answer": "Au parquet du Procureur du Roi",
   "explanation": "Le manuel précise qu'un procès-verbal est toujours rédigé et transmis au parquet du Procureur du Roi.",
   "reminder": "Procès-verbal : toujours transmis au parquet du Procureur du Roi.",
   "source": {
    "page": 10,
    "quote": "Un procès-verbal est toujours rédigé et transmis au parquet du Procureur du Roi."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q1045",
   "type": "qcm",
   "question": "Laquelle de ces informations n'est PAS soumise au secret des radiocommunications ?",
   "choices": [
    "Un renseignement obtenu au moyen du service des radiocommunications",
    "Une conversation radiotéléphonique entre deux navires",
    "Un bulletin météorologique adressé à toutes les stations de navire",
    "L'existence d'une conversation entre un navire et la terre"
   ],
   "answer": "Un bulletin météorologique adressé à toutes les stations de navire",
   "explanation": "Les informations « À TOUTES LES STATIONS DE NAVIRE », comme les bulletins météorologiques, ne relèvent pas du secret. Le contenu, mais aussi la simple existence des conversations, doit en revanche rester secret.",
   "reminder": "Messages à TOUTES LES STATIONS (météo, infos de navigation) : pas de secret ; tout le reste : secret.",
   "source": {
    "page": 10,
    "quote": "Les informations « À TOUTES LES STATIONS DE NAVIRE » ne sont pas soumises au secret des radiocommunications, par exemple : • les bulletins météorologiques"
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q1046",
   "type": "qcm",
   "question": "Qui peut dispenser de l'obligation du secret des radiocommunications ?",
   "choices": [
    "Le capitaine ou le skipper",
    "L'IBPT",
    "Le propriétaire du navire",
    "Seul un juge (d'instruction)"
   ],
   "answer": "Seul un juge (d'instruction)",
   "explanation": "Le manuel indique que seul un juge (d'instruction) peut dispenser de cette obligation.",
   "reminder": "Seul un juge d'instruction peut lever le secret des radiocommunications.",
   "source": {
    "page": 10,
    "quote": "Seul un juge (d’instruction) peut dispenser de l’obligation du secret des radiocommunications."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2001",
   "type": "qcm",
   "question": "Selon le manuel, quelle est la plage de puissance faible d'une station de navire VHF fixe ?",
   "choices": [
    "0,5 à 1 watt",
    "1 à 6 watts",
    "6 à 25 watts",
    "0,1 à 0,5 watt"
   ],
   "answer": "0,5 à 1 watt",
   "explanation": "La puissance de sortie d'une station de navire fixe va de 0,5 à 1 watt en puissance faible et de 6 à 25 watts en puissance élevée. La plage 6 à 25 watts correspond donc à la puissance élevée, pas à la puissance faible.",
   "reminder": "VHF fixe : faible = 0,5 à 1 W, élevée = 6 à 25 W.",
   "source": {
    "page": 11,
    "quote": "La puissance de sortie des stations de navire est comprise entre 0,5 à 1 watt (puissance faible) et 6 à 25 watts (puissance élevée)."
   },
   "category": "equipements-installations",
   "difficulty": "facile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 200\" font-family=\"Arial, sans-serif\"><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"#ffffff\"/><text x=\"230\" y=\"20\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Puissances de sortie (watts) selon le manuel</text><line x1=\"40\" y1=\"170\" x2=\"440\" y2=\"170\" stroke=\"#333\"/><line x1=\"40\" y1=\"166\" x2=\"40\" y2=\"174\" stroke=\"#333\"/><text x=\"40\" y=\"190\" font-size=\"11\" text-anchor=\"middle\">0</text><line x1=\"56\" y1=\"166\" x2=\"56\" y2=\"174\" stroke=\"#333\"/><text x=\"56\" y=\"190\" font-size=\"11\" text-anchor=\"middle\">1</text><line x1=\"136\" y1=\"166\" x2=\"136\" y2=\"174\" stroke=\"#333\"/><text x=\"136\" y=\"190\" font-size=\"11\" text-anchor=\"middle\">6</text><line x1=\"240.0\" y1=\"166\" x2=\"240.0\" y2=\"174\" stroke=\"#333\"/><text x=\"240.0\" y=\"190\" font-size=\"11\" text-anchor=\"middle\">12,5</text><line x1=\"440\" y1=\"166\" x2=\"440\" y2=\"174\" stroke=\"#333\"/><text x=\"440\" y=\"190\" font-size=\"11\" text-anchor=\"middle\">25</text><rect x=\"48\" y=\"40\" width=\"8\" height=\"22\" fill=\"#2e8b57\"/><text x=\"62\" y=\"56\" font-size=\"12\">VHF fixe, puissance faible : 0,5 à 1 W</text><rect x=\"136\" y=\"72\" width=\"304\" height=\"22\" fill=\"#c0392b\"/><text x=\"145\" y=\"88\" font-size=\"12\" fill=\"#fff\">VHF fixe, puissance élevée : 6 à 25 W</text><rect x=\"48\" y=\"104\" width=\"88\" height=\"22\" fill=\"#2980b9\"/><text x=\"142\" y=\"120\" font-size=\"12\">Portophone : 0,5 à 6 W</text><rect x=\"40\" y=\"136\" width=\"200\" height=\"22\" fill=\"#f39c12\"/><text x=\"246\" y=\"152\" font-size=\"12\">AIS : 12,5 W maximum</text></svg>",
    "placement": "explanation",
    "alt": "Échelle des puissances : VHF fixe faible 0,5 à 1 W, élevée 6 à 25 W, portophone 0,5 à 6 W, AIS 12,5 W maximum."
   },
   "kind": "memoire"
  },
  {
   "id": "Q2003",
   "type": "qcm",
   "question": "Quel bouton du mariphone permet de passer de la puissance faible à la puissance élevée ?",
   "choices": [
    "DUAL",
    "HI/LO",
    "SQL.",
    "POWER"
   ],
   "answer": "HI/LO",
   "explanation": "La puissance de sortie peut être réglée à l'aide du bouton « HI/LO ». Le bouton DUAL active la double veille, SQL règle le squelch et POWER allume ou éteint l'appareil.",
   "reminder": "HI/LO = choix de la puissance (faible / élevée).",
   "source": {
    "page": 11,
    "quote": "Elle peut être réglée à l’aide du bouton « HI/LO » sur l’appareil."
   },
   "category": "equipements-installations",
   "difficulty": "facile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 170\" font-family=\"Arial, sans-serif\"><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"#ffffff\"/><rect x=\"10\" y=\"10\" width=\"380\" height=\"150\" rx=\"22\" fill=\"#e6e6e6\" stroke=\"#555\" stroke-width=\"2\"/><rect x=\"30\" y=\"30\" width=\"90\" height=\"80\" fill=\"#fff\" stroke=\"#000\" stroke-width=\"2\"/><text x=\"75\" y=\"88\" font-size=\"46\" font-weight=\"bold\" fill=\"#d00\" text-anchor=\"middle\">16</text><rect x=\"130\" y=\"30\" width=\"34\" height=\"28\" fill=\"#fff\" stroke=\"#000\"/><text x=\"147\" y=\"51\" font-size=\"18\" text-anchor=\"middle\">&#9650;</text><rect x=\"130\" y=\"82\" width=\"34\" height=\"28\" fill=\"#fff\" stroke=\"#000\"/><text x=\"147\" y=\"103\" font-size=\"18\" text-anchor=\"middle\">&#9660;</text><rect x=\"30\" y=\"125\" width=\"60\" height=\"22\" rx=\"4\" fill=\"#4aa8e0\" stroke=\"#124\"/><text x=\"60\" y=\"141\" font-size=\"12\" text-anchor=\"middle\">POWER</text><rect x=\"130\" y=\"125\" width=\"44\" height=\"22\" rx=\"4\" fill=\"#d22\"/><text x=\"152\" y=\"141\" font-size=\"13\" fill=\"#fff\" text-anchor=\"middle\">16</text><rect x=\"185\" y=\"90\" width=\"60\" height=\"22\" rx=\"4\" fill=\"#4aa8e0\" stroke=\"#124\"/><text x=\"215\" y=\"106\" font-size=\"12\" text-anchor=\"middle\">HI/LO</text><rect x=\"185\" y=\"125\" width=\"60\" height=\"22\" rx=\"4\" fill=\"#4aa8e0\" stroke=\"#124\"/><text x=\"215\" y=\"141\" font-size=\"12\" text-anchor=\"middle\">DUAL</text><circle cx=\"330\" cy=\"45\" r=\"16\" fill=\"#4aa8e0\" stroke=\"#000\" stroke-width=\"2\"/><text x=\"330\" y=\"78\" font-size=\"13\" text-anchor=\"middle\">VOL.</text><circle cx=\"330\" cy=\"105\" r=\"16\" fill=\"#4aa8e0\" stroke=\"#000\" stroke-width=\"2\"/><text x=\"330\" y=\"140\" font-size=\"13\" text-anchor=\"middle\">SQL.</text></svg>",
    "placement": "explanation",
    "alt": "Façade schématique d'un mariphone affichant le canal 16, avec les boutons POWER, 16, HI/LO et DUAL, et les molettes VOL. et SQL."
   },
   "kind": "memoire"
  },
  {
   "id": "Q2004",
   "type": "qcm",
   "question": "Quelle puissance de sortie un système AIS ne peut-il pas dépasser ?",
   "choices": [
    "12,5 watts",
    "6 watts",
    "25 watts",
    "1 watt"
   ],
   "answer": "12,5 watts",
   "explanation": "Le manuel fixe à 12,5 watts la puissance de sortie maximale des systèmes AIS. 25 watts est le haut de la plage de puissance élevée d'une VHF fixe, pas une limite AIS.",
   "reminder": "AIS : 12,5 W maximum.",
   "source": {
    "page": 11,
    "quote": "La puissance de sortie des systèmes AIS ne peut pas dépasser 12,5 watts."
   },
   "category": "equipements-installations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2005",
   "type": "qcm",
   "question": "Que prévoit-on à bord pour un appareil VHF fixe ?",
   "choices": [
    "Une batterie intégrée et une antenne télescopique sur l'appareil",
    "Une alimentation séparée, l'antenne étant intégrée à l'appareil",
    "Une alimentation séparée et une antenne séparée installée sur le navire",
    "Une batterie intégrée, l'antenne étant partagée avec l'AIS"
   ],
   "answer": "Une alimentation séparée et une antenne séparée installée sur le navire",
   "explanation": "Pour une VHF fixe, le manuel prévoit à la fois une alimentation séparée à bord et une antenne séparée installée sur le navire.",
   "reminder": "VHF fixe = alimentation séparée + antenne séparée.",
   "source": {
    "page": 11,
    "quote": "Pour un appareil VHF fixe, il est prévu une alimentation séparée à bord du navire ainsi qu’une antenne séparée installée sur le navire."
   },
   "category": "equipements-installations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2006",
   "type": "qcm",
   "question": "À quoi sert le squelch (circuit silencieux) d'un mariphone ?",
   "choices": [
    "À régler le volume du haut-parleur intégré ou de l'écouteur",
    "À activer la fonction de double veille",
    "À réduire la puissance de sortie de l'émetteur",
    "À définir le seuil à partir duquel les signaux reçus sont transmis, en éliminant les bruits de fond"
   ],
   "answer": "À définir le seuil à partir duquel les signaux reçus sont transmis, en éliminant les bruits de fond",
   "explanation": "Le squelch définit le seuil de transmission des signaux reçus et supprime les bruits de fond. Le réglage du volume relève du bouton « Volume », pas du squelch.",
   "reminder": "Squelch = seuil de réception qui coupe le bruit de fond.",
   "source": {
    "page": 11,
    "quote": "Le squelch (circuit silencieux) permet de définir le seuil à partir duquel les signaux reçus sont transmis en éliminant les bruits de fond."
   },
   "category": "equipements-installations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2007",
   "type": "qcm",
   "question": "Quelle est la conséquence d'un squelch mal configuré ?",
   "choices": [
    "L'appareil émet en permanence sur le canal 16",
    "Vous ne recevrez plus les stations faibles",
    "La double veille s'active automatiquement",
    "L'appareil passe automatiquement en puissance élevée"
   ],
   "answer": "Vous ne recevrez plus les stations faibles",
   "explanation": "Le manuel précise que, si le squelch n'est pas correctement configuré, les stations faibles ne sont plus reçues. Les autres effets proposés (émission permanente, double veille, passage en puissance élevée) ne sont pas associés au squelch dans le manuel.",
   "reminder": "Squelch trop fermé = stations faibles perdues.",
   "source": {
    "page": 11,
    "quote": "Si le squelch n’est pas correctement configuré, vous ne recevrez plus les stations faibles."
   },
   "category": "equipements-installations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2008",
   "type": "qcm",
   "question": "Que permet le bouton « DUAL » et quelle restriction s'y applique ?",
   "choices": [
    "Il active la double veille ; c'est interdit sur les voies de navigation intérieure",
    "Il active la double veille ; c'est interdit en mer",
    "Il réduit la puissance ; c'est obligatoire sur les voies de navigation intérieure",
    "Il règle le seuil de réception ; c'est interdit sur les voies de navigation intérieure"
   ],
   "answer": "Il active la double veille ; c'est interdit sur les voies de navigation intérieure",
   "explanation": "Le bouton DUAL active la fonction double veille, et il est interdit de l'utiliser sur les voies de navigation intérieure.",
   "reminder": "DUAL = double veille, interdite en navigation intérieure.",
   "source": {
    "page": 11,
    "quote": "Le bouton « DUAL » permet d’activer la fonction double veille. Il est interdit de le faire sur les voies de navigation intérieure."
   },
   "category": "equipements-installations",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q2009",
   "type": "qcm",
   "question": "Entre quelles valeurs la puissance de sortie d'un portophone (VHF portative) doit-elle être réglée ?",
   "choices": [
    "Entre 0,5 et 1 watt",
    "Entre 6 et 25 watts",
    "Entre 1 et 12,5 watts",
    "Entre 0,5 et 6 watts"
   ],
   "answer": "Entre 0,5 et 6 watts",
   "explanation": "Le manuel indique que la puissance de sortie des équipements VHF portatifs doit être réglée entre 0,5 et 6 watts. La plage 6 à 25 watts est celle de la puissance élevée d'une VHF fixe.",
   "reminder": "Portophone : 0,5 à 6 W.",
   "source": {
    "page": 11,
    "quote": "La puissance de sortie des équipements VHF portatifs doit être réglée à une valeur comprise entre 0,5 et 6 watts."
   },
   "category": "equipements-installations",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q2010",
   "type": "qcm",
   "question": "Comparé à un équipement VHF fixe, que faut-il savoir sur un portophone ?",
   "choices": [
    "Sa portée est supérieure grâce à sa mobilité",
    "Sa batterie dure plus longtemps mais sa portée est plus faible",
    "Sa portée et sa batterie sont équivalentes",
    "Sa portée et la capacité de sa batterie sont nettement inférieures"
   ],
   "answer": "Sa portée et la capacité de sa batterie sont nettement inférieures",
   "explanation": "La portée et la capacité de la batterie d'un portophone sont nettement inférieures à celles d'une VHF fixe, et le risque de perdre l'appareil est aussi beaucoup plus élevé.",
   "reminder": "Portophone : moins de portée, moins de batterie, plus de risque de perte.",
   "source": {
    "page": 12,
    "quote": "Il faut tenir compte du fait que la portée et la capacité de la batterie d’un portophone sont nettement inférieures à celles d’un équipement VHF fixe."
   },
   "category": "equipements-installations",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q2011",
   "type": "qcm",
   "question": "Laquelle de ces conditions est exigée pour l'utilisation d'un portophone ?",
   "choices": [
    "L'appareil doit être mentionné sur l'autorisation de station",
    "L'appareil peut être utilisé à quai sans autorisation supplémentaire",
    "L'utilisateur est dispensé de certificat d'opérateur si le navire en possède un",
    "L'ATIS est facultatif sur les voies de navigation intérieure"
   ],
   "answer": "L'appareil doit être mentionné sur l'autorisation de station",
   "explanation": "Le portophone doit figurer sur l'autorisation de station et son utilisateur doit être titulaire d'un certificat d'opérateur. Son usage à quai exige une autorisation spécifique, et l'ATIS est toujours obligatoire en navigation intérieure.",
   "reminder": "Portophone : inscrit sur l'autorisation de station + utilisateur certifié.",
   "source": {
    "page": 12,
    "quote": "l’appareil doit être mentionné sur l’autorisation de station ; • l’utilisateur doit en outre être titulaire d'un certificat d’opérateur ;"
   },
   "category": "equipements-installations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2012",
   "type": "qcm",
   "question": "Si un portophone est utilisé à quai, sous quelle catégorie de l'AR du 18/12/2009 doit-il être autorisé ?",
   "choices": [
    "La 4e catégorie",
    "La 1re catégorie",
    "La 2e catégorie",
    "La 3e catégorie"
   ],
   "answer": "La 4e catégorie",
   "explanation": "Le portophone ne peut normalement être utilisé qu'à bord, jamais à quai. S'il l'est à quai, il doit être autorisé sous la 4e catégorie visée à l'AR du 18/12/2009 et couvert par une autorisation spécifique.",
   "reminder": "Portophone à quai : 4e catégorie (AR 18/12/2009) + autorisation spécifique.",
   "source": {
    "page": 12,
    "quote": "l’appareil portable ne peut être utilisé qu’à bord du navire, jamais à quai (s’il est utilisé à quai, le portophone doit être autorisé sous la 4e catégorie visée à l’AR 18/12/2009) et être couvert par une autorisation spécifique;"
   },
   "category": "equipements-installations",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q2013",
   "type": "qcm",
   "question": "Sur les voies de navigation intérieure, à quoi est lié le code ATIS d'un portophone ?",
   "choices": [
    "Au bateau auquel il a été attribué",
    "À l'utilisateur titulaire du certificat d'opérateur",
    "Au port d'attache du bateau",
    "À l'appareil, quel que soit le bateau sur lequel il est utilisé"
   ],
   "answer": "Au bateau auquel il a été attribué",
   "explanation": "Conformément à l'arrangement Rainwat, le portophone doit toujours être équipé d'ATIS, et ce code est indissociable du bateau auquel il a été attribué.",
   "reminder": "Code ATIS du portophone = lié au bateau, pas à la personne.",
   "source": {
    "page": 12,
    "quote": "le portophone doit toujours être équipé d’ATIS sur les voies de navigation intérieure, conformément à l’arrangement Rainwat. Le code ATIS est indissociable du bateau auquel il a été attribué ;"
   },
   "category": "navigation-interieure",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2014",
   "type": "qcm",
   "question": "À quelle valeur les appareils radiotéléphoniques utilisés en navigation intérieure doivent-ils pouvoir réduire la puissance de sortie de l'émetteur ?",
   "choices": [
    "Entre 1 et 6 watts",
    "Entre 0,5 et 1 watt",
    "Entre 6 et 12,5 watts",
    "Entre 0,1 et 0,5 watt"
   ],
   "answer": "Entre 0,5 et 1 watt",
   "explanation": "Les appareils utilisés en navigation intérieure doivent avoir un dispositif de commutation réduisant la puissance à une valeur comprise entre 0,5 et 1 watt.",
   "reminder": "Réduction de puissance obligatoire en fluvial : 0,5 à 1 W.",
   "source": {
    "page": 12,
    "quote": "Les appareils radiotéléphoniques utilisés en navigation intérieure doivent être équipés d’un dispositif de commutation permettant de réduire la puissance de sortie de l’émetteur à une valeur comprise entre 0,5 et 1 watts."
   },
   "category": "navigation-interieure",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2015",
   "type": "qcm",
   "question": "Sur quels canaux la réduction de puissance est-elle appliquée en navigation intérieure ?",
   "choices": [
    "Bateau-bateau, détresse et correspondance publique",
    "Bateau-autorités portuaires, AIS et détresse",
    "Radiocommunications de bord, ASN et sécurité de Radio Ostende",
    "Bateau-bateau, bateau-autorités portuaires et radiocommunications de bord"
   ],
   "answer": "Bateau-bateau, bateau-autorités portuaires et radiocommunications de bord",
   "explanation": "Le manuel énumère trois types de canaux soumis à la réduction de puissance : bateau-bateau, bateau-autorités portuaires et radiocommunications de bord.",
   "reminder": "Puissance réduite : bateau-bateau, bateau-port, bord.",
   "source": {
    "page": 12,
    "quote": "Cette réduction de puissance est appliquée sur les canaux pour : • les communications bateau-bateau • les communications bateau-autorités portuaires • les radiocommunications de bord"
   },
   "category": "navigation-interieure",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2016",
   "type": "qcm",
   "question": "Où figurent les canaux auxquels s'applique la réduction de puissance ?",
   "choices": [
    "À l'annexe 2 de l'arrangement Rainwat",
    "À l'annexe 1 de l'arrangement Rainwat",
    "À l'annexe 3 de l'arrangement Rainwat",
    "Dans la décision 2000/637/CE"
   ],
   "answer": "À l'annexe 2 de l'arrangement Rainwat",
   "explanation": "Le manuel renvoie à l'annexe 2 de l'arrangement Rainwat pour la liste des canaux soumis à la réduction de puissance, et précise que cela vaut aussi pour les appareils portables.",
   "reminder": "Canaux à puissance réduite : annexe 2 du Rainwat.",
   "source": {
    "page": 12,
    "quote": "Les canaux auxquels s'applique cette réduction de puissance figurent à l'annexe 2 de l'arrangement Rainwat. Ceci s'applique également aux appareils portables."
   },
   "category": "navigation-interieure",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q2017",
   "type": "qcm",
   "question": "Sur les voies de navigation intérieure, vous devez écouter deux canaux en même temps. Que devez-vous faire ?",
   "choices": [
    "Activer la fonction Dual Watch",
    "Activer la fonction Tri Watch",
    "Alterner entre les deux canaux à l'aide du squelch",
    "Utiliser deux appareils"
   ],
   "answer": "Utiliser deux appareils",
   "explanation": "La double et la triple veille ne sont pas autorisées sur les voies de navigation intérieure. Pour écouter deux canaux, il faut donc deux appareils.",
   "reminder": "Fluvial : pas de Dual/Tri Watch, deux canaux = deux appareils.",
   "source": {
    "page": 12,
    "quote": "Ces systèmes ne sont pas autorisés sur les voies de navigation intérieure. Par conséquent, si vous devez écouter deux canaux, vous devez avoir deux appareils."
   },
   "category": "equipements-installations",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q2018",
   "type": "qcm",
   "question": "D'après le manuel, pourquoi un smartphone n'est-il pas pratique en cas de détresse ?",
   "choices": [
    "Si le réseau est très occupé ou si le correspondant est en ligne, l'appel ne peut pas être rendu prioritaire",
    "Il ne fonctionne jamais sur les voies de navigation intérieure",
    "Il émet sur le canal 16 et perturbe les appels de détresse",
    "Il permet de joindre plusieurs navires mais pas la côte"
   ],
   "answer": "Si le réseau est très occupé ou si le correspondant est en ligne, l'appel ne peut pas être rendu prioritaire",
   "explanation": "Avec un smartphone, la communication ne peut pas être rendue prioritaire : en détresse, il faut parfois attendre que la ligne se libère. Le manuel indique pourtant qu'il fonctionne généralement bien sur les voies de navigation intérieure.",
   "reminder": "Smartphone : pas de priorité d'appel, donc pas fiable en détresse.",
   "source": {
    "page": 12,
    "quote": "Tout d'abord, si vous essayez d'appeler quelqu'un et que cette personne est déjà en ligne, ou si le réseau est très occupé, la communication ne peut pas être rendue prioritaire."
   },
   "category": "equipements-installations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2019",
   "type": "qcm",
   "question": "Pourquoi la coordination d'un sauvetage est-elle plus difficile si l'on utilise un smartphone ?",
   "choices": [
    "Parce que les autres navires à proximité ne peuvent pas écouter",
    "Parce que le smartphone émet à une puissance trop élevée",
    "Parce que le smartphone bloque le canal 16",
    "Parce que les services d'urgence ne disposent pas de téléphone"
   ],
   "answer": "Parce que les autres navires à proximité ne peuvent pas écouter",
   "explanation": "Avec un smartphone, on ne peut communiquer qu'avec une seule personne à la fois et, si les secours sont en route, on ne peut pas communiquer directement avec les services d'urgence. Les autres navires à proximité ne peuvent donc pas écouter, ce qui rend la coordination du sauvetage plus difficile.",
   "reminder": "Smartphone = conversation privée, les navires voisins n'entendent rien.",
   "source": {
    "page": 13,
    "quote": "Il est donc plus difficile de coordonner les opérations de sauvetage parce que les autres navires à proximité ne peuvent pas écouter."
   },
   "category": "equipements-installations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2020",
   "type": "qcm",
   "question": "Quel avantage du mariphone sur le smartphone en mer le manuel cite-t-il au sujet de la localisation ?",
   "choices": [
    "Le mariphone peut être facilement localisé via les ondes radio",
    "Le mariphone transmet automatiquement la position par SMS",
    "Le smartphone est plus facile à localiser grâce au réseau mobile",
    "Seul le smartphone permet une localisation en mer"
   ],
   "answer": "Le mariphone peut être facilement localisé via les ondes radio",
   "explanation": "Le manuel indique qu'un mariphone peut être facilement localisé via les ondes radio, ce qui n'est pas le cas d'un smartphone en mer.",
   "reminder": "Mariphone : localisable par radio ; smartphone en mer : non.",
   "source": {
    "page": 13,
    "quote": "En outre, un mariphone peut être facilement localisé via les ondes radio, ce qui n'est pas le cas d'un smartphone en mer."
   },
   "category": "equipements-installations",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q2021",
   "type": "qcm",
   "question": "Quelle est la conclusion du manuel sur l'usage du smartphone à bord ?",
   "choices": [
    "Il peut remplacer le mariphone sur les voies de navigation intérieure",
    "Ce n'est pas un outil fiable pour la sécurité à bord d'un navire",
    "Il est fiable en mer s'il est chargé",
    "Il est recommandé pour les appels de détresse le long de la côte"
   ],
   "answer": "Ce n'est pas un outil fiable pour la sécurité à bord d'un navire",
   "explanation": "Après avoir listé ses limites (pas de priorité, un seul correspondant, pas de localisation, saturation, batterie), le manuel conclut que le smartphone n'est pas un outil fiable pour la sécurité.",
   "reminder": "Smartphone ≠ outil de sécurité à bord.",
   "source": {
    "page": 13,
    "quote": "Conclusion : un smartphone n’est pas un outil fiable pour la sécurité à bord d’un navire."
   },
   "category": "equipements-installations",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q2022",
   "type": "qcm",
   "question": "Les appareils émetteurs mis sur le marché après quelle date doivent-ils porter le marquage CE adéquat ou un marquage « barre à roue » ?",
   "choices": [
    "Le 08/04/2001",
    "Le 08/04/2000",
    "Le 18/12/2009",
    "Le 18/04/2012"
   ],
   "answer": "Le 08/04/2000",
   "explanation": "Le manuel fixe au 08/04/2000 la date à partir de laquelle le marquage CE ou « barre à roue » est requis. Le 08/04/2001 est la date liée à l'ancien numéro d'agrément RTT.",
   "reminder": "Après le 08/04/2000 : marquage CE ou « barre à roue ».",
   "source": {
    "page": 13,
    "quote": "Les appareils émetteurs à bord de navires mis sur le marché après le 08/04/2000 doivent porter le marquage CE adéquat (conformément à la directive européenne 1995/5/CE ou 2014/53/UE) ou un marquage « barre à roue » (directive maritime 96/98/CE ou 2014/90/UE)."
   },
   "category": "equipements-installations",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q2023",
   "type": "qcm",
   "question": "Quel marquage doivent porter les équipements mis sur le marché avant le 08/04/2001 ?",
   "choices": [
    "L'ancien numéro d'agrément RTT",
    "Le marquage « barre à roue »",
    "Le marquage CE avec le numéro NBnr",
    "Le certificat d'examen « CE de type »"
   ],
   "answer": "L'ancien numéro d'agrément RTT",
   "explanation": "Le manuel précise que les équipements mis sur le marché avant le 08/04/2001 doivent porter l'ancien numéro d'agrément RTT.",
   "reminder": "Avant le 08/04/2001 : ancien agrément RTT.",
   "source": {
    "page": 13,
    "quote": "Les équipements mis sur le marché avant le 08/04/2001 doivent porter l’ancien numéro d’agrément RTT/….."
   },
   "category": "equipements-installations",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q2024",
   "type": "qcm",
   "question": "Dans le marquage CE complet des appareils pour les voies de navigation intérieure, que représente « NBnr » ?",
   "choices": [
    "Le numéro ATIS attribué au bateau",
    "Le numéro d'identification de l'organisme notifié qui intervient dans l'évaluation de la conformité",
    "Le numéro de l'autorisation de station délivrée par l'IBPT",
    "Le numéro de série du fabricant de l'appareil"
   ],
   "answer": "Le numéro d'identification de l'organisme notifié qui intervient dans l'évaluation de la conformité",
   "explanation": "« NBnr » est le numéro d'identification de l'organisme notifié qui intervient dans l'évaluation de la conformité. Le point d'exclamation qui suit signale des bandes de fréquences non harmonisées.",
   "reminder": "NBnr = numéro de l'organisme notifié.",
   "source": {
    "page": 13,
    "quote": "« NBnr » représentant le numéro d’identification de l’organisme notifié qui intervient dans l’évaluation de la conformité."
   },
   "category": "equipements-installations",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 130\" font-family=\"Arial, sans-serif\"><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"#ffffff\"/><text x=\"200\" y=\"22\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Marquage CE complet (voies de navigation intérieure)</text><text x=\"40\" y=\"80\" font-size=\"40\" font-weight=\"bold\">CE</text><text x=\"120\" y=\"80\" font-size=\"34\" font-weight=\"bold\">NBnr</text><circle cx=\"270\" cy=\"68\" r=\"20\" fill=\"none\" stroke=\"#000\" stroke-width=\"4\"/><text x=\"270\" y=\"80\" font-size=\"30\" font-weight=\"bold\" text-anchor=\"middle\">!</text><text x=\"160\" y=\"115\" font-size=\"11\" text-anchor=\"middle\">organisme notifié</text><text x=\"300\" y=\"115\" font-size=\"11\" text-anchor=\"middle\">bandes non harmonisées</text></svg>",
    "placement": "explanation",
    "alt": "Marquage CE complet : CE, NBnr (organisme notifié) et point d'exclamation cerclé (bandes de fréquences non harmonisées)."
   },
   "kind": "memoire"
  },
  {
   "id": "Q2025",
   "type": "qcm",
   "question": "Dans le marquage CE des appareils pour les voies de navigation intérieure, qu'indique le point d'exclamation ?",
   "choices": [
    "Que l'appareil n'a pas encore été évalué",
    "Que l'appareil est réservé aux navires SOLAS",
    "Que la double veille est désactivée",
    "Que les bandes de fréquences ne sont pas harmonisées"
   ],
   "answer": "Que les bandes de fréquences ne sont pas harmonisées",
   "explanation": "Le manuel indique que le point d'exclamation signale que les bandes de fréquences ne sont pas harmonisées.",
   "reminder": "« ! » dans le marquage = bandes non harmonisées.",
   "source": {
    "page": 13,
    "quote": "Le point d'exclamation indique que les bandes de fréquences ne sont pas harmonisées."
   },
   "category": "equipements-installations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2026",
   "type": "qcm",
   "question": "Selon le manuel, de quelles obligations fait mention la décision 2000/637/CE pour les équipements utilisés sur les voies de navigation intérieure ?",
   "choices": [
    "Le marquage « barre à roue » et le certificat « CE de type »",
    "L'interdiction de la double veille et du smartphone",
    "La veille sur le canal 70 et l'utilisation de l'ASN",
    "L'utilisation du système ATIS et la réduction de puissance"
   ],
   "answer": "L'utilisation du système ATIS et la réduction de puissance",
   "explanation": "La décision 2000/637/CE s'applique aux équipements hertziens des bateaux sur les voies de navigation intérieure et impose l'utilisation de l'ATIS ainsi que la réduction de puissance.",
   "reminder": "Décision 2000/637/CE = ATIS + réduction de puissance.",
   "source": {
    "page": 13,
    "quote": "Les équipements hertziens utilisés à bord de bateaux opérant sur les voies de navigation intérieure sont également soumis à l’application de la décision 2000/637/CE, dans laquelle il est fait mention de l’obligation d’utilisation du système ATIS et de la réduction de puissance."
   },
   "category": "navigation-interieure",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q2027",
   "type": "qcm",
   "question": "Que faut-il annexer aux équipements des navires opérant en mer qui relèvent de la convention SOLAS ?",
   "choices": [
    "Une simple déclaration de conformité avec le marquage CE NBnr",
    "L'ancien numéro d'agrément RTT",
    "Un certificat d'examen « CE de type » avec un marquage « barre à roue »",
    "Une attestation ATIS délivrée par l'IBPT"
   ],
   "answer": "Un certificat d'examen « CE de type » avec un marquage « barre à roue »",
   "explanation": "Pour les navires SOLAS, le manuel exige un certificat d'examen « CE de type » (directive 96/98/CE ou 2014/90/UE) avec un marquage « barre à roue ».",
   "reminder": "SOLAS : certificat « CE de type » + « barre à roue ».",
   "source": {
    "page": 13,
    "quote": "Pour les navires opérant en mer qui relèvent de la convention SOLAS, il convient d’annexer pour les équipements un certificat d’examen « CE de type » (directive CE 96/98/CE ou 2014/90/UE) avec un marquage « barre à roue »."
   },
   "category": "equipements-installations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2028",
   "type": "qcm",
   "question": "Quel marquage les navires non-SOLAS opérant en mer doivent-ils porter, et quelle tolérance existe ?",
   "choices": [
    "Le même marquage CE que pour les voies de navigation intérieure ; les équipements « barre à roue » sont aussi admis",
    "Uniquement le marquage « barre à roue », le marquage CE est interdit",
    "L'ancien numéro RTT ; le marquage CE est aussi admis",
    "Aucun marquage n'est exigé pour les navires non-SOLAS"
   ],
   "answer": "Le même marquage CE que pour les voies de navigation intérieure ; les équipements « barre à roue » sont aussi admis",
   "explanation": "Les navires non-SOLAS en mer relèvent de la directive 1995/5/CE ou 2014/53/UE et portent le même marquage CE qu'en navigation intérieure. Il a toutefois été convenu que les équipements « barre à roue » peuvent aussi y être utilisés.",
   "reminder": "Non-SOLAS : marquage CE, « barre à roue » toléré.",
   "source": {
    "page": 13,
    "quote": "Les navires opérant en mer qui ne relèvent pas de la convention SOLAS, sont soumis à la directive 1995/5/CE ou 2014/53/UE et doivent donc porter le même marquage CE que pour les voies de navigation intérieure. Il a cependant été convenu que les équipements portant le marquage « barre à roue » peuvent également être utilisés à bord de navires non-SOLAS."
   },
   "category": "equipements-installations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2029",
   "type": "qcm",
   "question": "À quelles directives le marquage « barre à roue » est-il associé ?",
   "choices": [
    "96/98/CE ou 2014/90/UE",
    "1995/5/CE ou 2014/53/UE",
    "2000/637/CE ou 2014/53/UE",
    "2000/637/CE ou 1995/5/CE"
   ],
   "answer": "96/98/CE ou 2014/90/UE",
   "explanation": "Le marquage « barre à roue » relève de la directive maritime 96/98/CE ou 2014/90/UE, alors que le marquage CE relève de la directive 1995/5/CE ou 2014/53/UE.",
   "reminder": "« Barre à roue » = directive maritime 96/98/CE ou 2014/90/UE.",
   "source": {
    "page": 13,
    "quote": "ou un marquage « barre à roue » (directive maritime 96/98/CE ou 2014/90/UE)."
   },
   "category": "equipements-installations",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q2030",
   "type": "qcm",
   "question": "Entre quelles fréquences se situent les fréquences utilisées par le service VHF ?",
   "choices": [
    "156,800 et 161,975 MHz",
    "156,025 et 162,025 MHz",
    "146,025 et 156,025 MHz",
    "161,975 et 162,025 MHz"
   ],
   "answer": "156,025 et 162,025 MHz",
   "explanation": "Le manuel situe les fréquences du service VHF entre 156,025 et 162,025 MHz. 156,800 MHz est la fréquence du canal 16, et 161,975 et 162,025 MHz sont celles des canaux AIS.",
   "reminder": "Bande VHF : 156,025 à 162,025 MHz.",
   "source": {
    "page": 14,
    "quote": "Les fréquences utilisées par le service VHF sont comprises entre 156,025 et 162,025 MHz."
   },
   "category": "frequences-modes",
   "difficulty": "facile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 140\" font-family=\"Arial, sans-serif\"><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"#ffffff\"/><text x=\"230\" y=\"20\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Bande du service VHF (MHz)</text><rect x=\"40\" y=\"50\" width=\"380\" height=\"26\" fill=\"#e8f4ea\" stroke=\"#2e7d32\"/><text x=\"40\" y=\"44\" font-size=\"12\" text-anchor=\"middle\">156,025</text><text x=\"420\" y=\"44\" font-size=\"12\" text-anchor=\"middle\">162,025</text><line x1=\"87\" y1=\"50\" x2=\"87\" y2=\"76\" stroke=\"#c00\" stroke-width=\"3\"/><text x=\"87\" y=\"96\" font-size=\"11\" text-anchor=\"middle\" fill=\"#c00\">Canal 16 : 156,800</text><line x1=\"415\" y1=\"50\" x2=\"415\" y2=\"76\" stroke=\"#06c\" stroke-width=\"2\"/><line x1=\"420\" y1=\"50\" x2=\"420\" y2=\"76\" stroke=\"#06c\" stroke-width=\"2\"/><text x=\"400\" y=\"114\" font-size=\"11\" text-anchor=\"end\" fill=\"#06c\">AIS1 : 161,975 / AIS2 : 162,025</text></svg>",
    "placement": "explanation",
    "alt": "Bande VHF de 156,025 à 162,025 MHz, avec le canal 16 à 156,800 MHz et les canaux AIS à 161,975 et 162,025 MHz."
   },
   "kind": "memoire"
  },
  {
   "id": "Q2031",
   "type": "qcm",
   "question": "Comment se propagent les fréquences VHF en mer ?",
   "choices": [
    "En suivant la courbure de la Terre bien au-delà de l'horizon",
    "En ligne droite jusqu'à l'horizon",
    "Indépendamment de la hauteur des antennes",
    "Uniquement par réflexion sur le relief côtier"
   ],
   "answer": "En ligne droite jusqu'à l'horizon",
   "explanation": "La propagation VHF en mer se fait en ligne droite jusqu'à l'horizon. C'est pour cela que la portée dépend surtout de la hauteur des antennes de l'émetteur et du récepteur.",
   "reminder": "VHF = ligne droite jusqu'à l'horizon ; antennes hautes = plus de portée.",
   "source": {
    "page": 14,
    "quote": "La propagation des fréquences VHF en mer s’effectue en ligne droite jusqu’à l’horizon. La portée est en grande partie définie par la hauteur des antennes de l’émetteur et du récepteur."
   },
   "category": "frequences-modes",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2032",
   "type": "qcm",
   "question": "Quel facteur définit en grande partie la portée VHF en mer ?",
   "choices": [
    "La hauteur des antennes de l'émetteur et du récepteur",
    "La longueur du câble d'antenne",
    "Le réglage du squelch",
    "Le numéro du canal utilisé"
   ],
   "answer": "La hauteur des antennes de l'émetteur et du récepteur",
   "explanation": "Le manuel précise que la portée dépend de la hauteur d'antenne, de la puissance et de l'environnement, et qu'en mer elle est en grande partie définie par la hauteur des antennes de l'émetteur et du récepteur.",
   "reminder": "Portée en mer : surtout la hauteur des deux antennes.",
   "source": {
    "page": 14,
    "quote": "La portée est en grande partie définie par la hauteur des antennes de l’émetteur et du récepteur."
   },
   "category": "frequences-modes",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2033",
   "type": "qcm",
   "question": "Quelle formule le manuel donne-t-il pour calculer la portée théorique en mer ?",
   "choices": [
    "2,25 (T + R) = distance en milles nautiques",
    "2,25 (√T + √R) = distance en milles nautiques",
    "2,5 (√T + √R) = distance en kilomètres",
    "1,852 (√T + √R) = distance en milles nautiques"
   ],
   "answer": "2,25 (√T + √R) = distance en milles nautiques",
   "explanation": "La formule du manuel est 2,25 (√T + √R), avec T et R les hauteurs en mètres des antennes de l'émetteur et du récepteur, et le résultat est en milles nautiques.",
   "reminder": "Portée = 2,25 × (√T + √R) en milles nautiques.",
   "source": {
    "page": 14,
    "quote": "2,25 (√T + √R) = distance en milles nautiques"
   },
   "category": "frequences-modes",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2034",
   "type": "qcm",
   "question": "Deux yachts en mer ont chacun une antenne de 16 mètres (voir schéma). Quelle portée approximative le manuel indique-t-il dans des conditions atmosphériques normales ?",
   "choices": [
    "18 milles nautiques",
    "9 milles nautiques",
    "36 milles nautiques",
    "72 milles nautiques"
   ],
   "answer": "18 milles nautiques",
   "explanation": "Avec la formule 2,25 (√16 + √16) = 2,25 × (4 + 4), on obtient environ 18 milles nautiques. 9 milles correspondrait à une seule antenne prise en compte.",
   "reminder": "Deux antennes de 16 m : 2,25 × 8 = 18 NM.",
   "source": {
    "page": 14,
    "quote": "Deux yachts en mer équipés d’un mariphone fixe connecté à une antenne de 16 mètres pourront, dans des conditions atmosphériques normales, franchir une distance d’environ : 2,25 (√16 + √16) = 18 milles nautiques (approximativement)."
   },
   "category": "frequences-modes",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 210\" font-family=\"Arial, sans-serif\"><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"#ffffff\"/><rect x=\"0\" y=\"150\" width=\"460\" height=\"60\" fill=\"#cfe8f7\"/><path d=\"M40 150 l60 0 l-10 18 l-40 0 z\" fill=\"#888\"/><line x1=\"70\" y1=\"150\" x2=\"70\" y2=\"40\" stroke=\"#333\" stroke-width=\"3\"/><path d=\"M360 150 l60 0 l-10 18 l-40 0 z\" fill=\"#888\"/><line x1=\"390\" y1=\"150\" x2=\"390\" y2=\"40\" stroke=\"#333\" stroke-width=\"3\"/><text x=\"78\" y=\"100\" font-size=\"13\">T = 16 m</text><text x=\"320\" y=\"100\" font-size=\"13\">R = 16 m</text><line x1=\"70\" y1=\"40\" x2=\"390\" y2=\"40\" stroke=\"#c0392b\" stroke-dasharray=\"6 4\" stroke-width=\"2\"/><text x=\"230\" y=\"32\" font-size=\"13\" text-anchor=\"middle\">portée = ? milles nautiques</text></svg>",
    "placement": "question",
    "alt": "Deux yachts avec des antennes T = 16 m et R = 16 m au-dessus de l'eau, reliés par une ligne pointillée marquée portée inconnue en milles nautiques."
   },
   "kind": "memoire"
  },
  {
   "id": "Q2035",
   "type": "qcm",
   "question": "Dans la formule de portée 2,25 (√T + √R), que représentent T et R ?",
   "choices": [
    "La hauteur en mètres des antennes de l'émetteur et du récepteur au-dessus de la surface de l'eau",
    "La puissance en watts de l'émetteur et du récepteur",
    "La hauteur en pieds des antennes au-dessus du pont",
    "La distance en milles entre l'émetteur et le récepteur"
   ],
   "answer": "La hauteur en mètres des antennes de l'émetteur et du récepteur au-dessus de la surface de l'eau",
   "explanation": "T désigne l'émetteur et R le récepteur, et leurs valeurs sont les hauteurs en mètres des antennes au-dessus de la surface de l'eau.",
   "reminder": "T et R = hauteurs d'antenne en mètres au-dessus de l'eau.",
   "source": {
    "page": 14,
    "quote": "(T=émetteur et R=récepteur , ceux-ci donnent la hauteur en mètres des antennes au-dessus de la surface de l’eau)."
   },
   "category": "frequences-modes",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2036",
   "type": "qcm",
   "question": "À combien de mètres équivaut 1 mille nautique ?",
   "choices": [
    "1609 m",
    "1852 m",
    "1000 m",
    "1825 m"
   ],
   "answer": "1852 m",
   "explanation": "Le manuel indique qu'un mille nautique équivaut à 1852 m.",
   "reminder": "1 mille nautique = 1852 m.",
   "source": {
    "page": 14,
    "quote": "1 mille nautique équivaut à 1852 m"
   },
   "category": "frequences-modes",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q2037",
   "type": "qcm",
   "question": "À quelle fréquence correspond le canal 16 ?",
   "choices": [
    "156,025 MHz",
    "161,975 MHz",
    "156,800 MHz",
    "162,025 MHz"
   ],
   "answer": "156,800 MHz",
   "explanation": "Le manuel donne l'exemple du canal 16 plutôt que de la fréquence 156,800 MHz, ce qui illustre qu'à chaque canal correspond une fréquence.",
   "reminder": "Canal 16 = 156,800 MHz.",
   "source": {
    "page": 14,
    "quote": "Nous parlerons donc du canal 16 plutôt que de la fréquence 156,800 MHz."
   },
   "category": "frequences-modes",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q2038",
   "type": "qcm",
   "question": "À quoi correspond le canal 1027 ?",
   "choices": [
    "À la partie inférieure de l'ancien canal duplex 27",
    "À la partie supérieure de l'ancien canal duplex 27",
    "À la double veille des canaux 10 et 27",
    "Au canal 27 utilisé en puissance réduite"
   ],
   "answer": "À la partie inférieure de l'ancien canal duplex 27",
   "explanation": "Les canaux à 4 chiffres sont d'anciens canaux duplex transformés en canaux simplex : 1027 est la partie inférieure de l'ancien canal 27 et 2027 sa partie supérieure.",
   "reminder": "10xx = partie inférieure, 20xx = partie supérieure.",
   "source": {
    "page": 14,
    "quote": "Par exemple, le canal 1027 fait référence à la partie inférieure de l’ancien canal duplex 27."
   },
   "category": "frequences-modes",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 150\" font-family=\"Arial, sans-serif\"><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"#ffffff\"/><text x=\"210\" y=\"22\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Ancien canal duplex 27 devenu deux canaux simplex</text><rect x=\"40\" y=\"45\" width=\"340\" height=\"40\" fill=\"#eef\" stroke=\"#336\"/><line x1=\"210\" y1=\"45\" x2=\"210\" y2=\"85\" stroke=\"#336\" stroke-width=\"2\"/><text x=\"125\" y=\"72\" font-size=\"16\" text-anchor=\"middle\"><tspan font-size=\"11\">10</tspan>27</text><text x=\"295\" y=\"72\" font-size=\"16\" text-anchor=\"middle\"><tspan font-size=\"11\">20</tspan>27</text><text x=\"125\" y=\"110\" font-size=\"12\" text-anchor=\"middle\">partie inférieure</text><text x=\"295\" y=\"110\" font-size=\"12\" text-anchor=\"middle\">partie supérieure</text><text x=\"210\" y=\"138\" font-size=\"11\" text-anchor=\"middle\">Le 10 (ou 20) est généralement indiqué en plus petit</text></svg>",
    "placement": "explanation",
    "alt": "L'ancien canal duplex 27 est séparé en deux : 1027 pour la partie inférieure et 2027 pour la partie supérieure."
   },
   "kind": "memoire"
  },
  {
   "id": "Q2039",
   "type": "qcm",
   "question": "Que sont les canaux désignés par 4 chiffres ?",
   "choices": [
    "Des canaux simplex récemment transformés en canaux duplex",
    "Des canaux réservés à l'AIS",
    "Des canaux réservés à l'ASN",
    "D'anciens canaux duplex récemment transformés en canaux simplex"
   ],
   "answer": "D'anciens canaux duplex récemment transformés en canaux simplex",
   "explanation": "Le manuel explique que les canaux à 4 chiffres étaient auparavant des canaux duplex, récemment transformés en canaux simplex.",
   "reminder": "Canal à 4 chiffres = ancien duplex devenu simplex.",
   "source": {
    "page": 14,
    "quote": "Il s'agissait auparavant de canaux duplex (voir ci-dessous) qui ont récemment été transformés en canaux simplex."
   },
   "category": "frequences-modes",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2041",
   "type": "qcm",
   "question": "Quelle est la caractéristique d'un canal duplex ?",
   "choices": [
    "Il utilise une seule fréquence, à tour de rôle",
    "Seule la station côtière reçoit les appels des navires",
    "Il utilise deux fréquences mais impose de dire « OVER » pour recevoir",
    "Il utilise deux fréquences, ce qui permet d'écouter et de parler simultanément"
   ],
   "answer": "Il utilise deux fréquences, ce qui permet d'écouter et de parler simultanément",
   "explanation": "Un canal duplex est composé de deux fréquences, l'une pour l'émission du navire et l'autre pour l'émission de la station côtière, ce qui permet d'écouter et de parler simultanément.",
   "reminder": "Duplex = 2 fréquences, parler et écouter en même temps.",
   "source": {
    "page": 15,
    "quote": "Un canal duplex est un canal composé de deux fréquences, l’une réservée à l’émission de la station de navire et la réception de la station côtière et l’autre réservée à l’émission de la station côtière et la réception de la station de navire. Cela permet d’écouter et de parler simultanément."
   },
   "category": "frequences-modes",
   "difficulty": "facile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 160\" font-family=\"Arial, sans-serif\"><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"#ffffff\"/><text x=\"210\" y=\"20\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Duplex : deux fréquences</text><rect x=\"20\" y=\"50\" width=\"90\" height=\"60\" rx=\"6\" fill=\"#dfefff\" stroke=\"#246\"/><text x=\"65\" y=\"85\" font-size=\"12\" text-anchor=\"middle\">Navire</text><rect x=\"310\" y=\"50\" width=\"90\" height=\"60\" rx=\"6\" fill=\"#fff2d9\" stroke=\"#a60\"/><text x=\"355\" y=\"85\" font-size=\"12\" text-anchor=\"middle\">Station côtière</text><line x1=\"115\" y1=\"65\" x2=\"300\" y2=\"65\" stroke=\"#246\" stroke-width=\"2\"/><path d=\"M300 60 l10 5 l-10 5 z\" fill=\"#246\"/><text x=\"210\" y=\"58\" font-size=\"11\" text-anchor=\"middle\">Fréquence A : émission navire / réception côtière</text><line x1=\"125\" y1=\"98\" x2=\"305\" y2=\"98\" stroke=\"#a60\" stroke-width=\"2\"/><path d=\"M125 93 l-10 5 l10 5 z\" fill=\"#a60\"/><text x=\"210\" y=\"114\" font-size=\"11\" text-anchor=\"middle\">Fréquence B : émission côtière / réception navire</text><text x=\"210\" y=\"145\" font-size=\"12\" text-anchor=\"middle\">→ écouter et parler simultanément</text></svg>",
    "placement": "explanation",
    "alt": "Duplex : la fréquence A sert à l'émission du navire vers la côte, la fréquence B à l'émission de la côte vers le navire, ce qui permet d'écouter et de parler simultanément."
   },
   "kind": "memoire"
  },
  {
   "id": "Q2043",
   "type": "qcm",
   "question": "Quelle est la particularité du mode semi-duplex ?",
   "choices": [
    "Tous les navires reçoivent les appels des autres navires, mais pas ceux de la station côtière",
    "Il n'utilise qu'une seule fréquence",
    "Seule la station côtière reçoit les appels des navires, mais tous les navires reçoivent les appels de la station côtière",
    "Il permet à chaque navire d'écouter et de parler simultanément avec un autre navire"
   ],
   "answer": "Seule la station côtière reçoit les appels des navires, mais tous les navires reçoivent les appels de la station côtière",
   "explanation": "En semi-duplex, les appels des navires ne sont reçus que par la station côtière, alors que les appels de la station côtière sont reçus par tous les navires. Ce mode utilise deux fréquences.",
   "reminder": "Semi-duplex : navires → côte seule ; côte → tous les navires.",
   "source": {
    "page": 15,
    "quote": "Seule la station côtière reçoit les appels des navires mais tous les navires reçoivent les appels de la station côtière."
   },
   "category": "frequences-modes",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 190\" font-family=\"Arial, sans-serif\"><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"#ffffff\"/><text x=\"210\" y=\"20\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Semi-duplex</text><rect x=\"165\" y=\"35\" width=\"90\" height=\"40\" rx=\"6\" fill=\"#fff2d9\" stroke=\"#a60\"/><text x=\"210\" y=\"60\" font-size=\"12\" text-anchor=\"middle\">Station côtière</text><rect x=\"30\" y=\"130\" width=\"80\" height=\"34\" rx=\"6\" fill=\"#dfefff\" stroke=\"#246\"/><text x=\"70\" y=\"152\" font-size=\"12\" text-anchor=\"middle\">Navire 1</text><rect x=\"170\" y=\"130\" width=\"80\" height=\"34\" rx=\"6\" fill=\"#dfefff\" stroke=\"#246\"/><text x=\"210\" y=\"152\" font-size=\"12\" text-anchor=\"middle\">Navire 2</text><rect x=\"310\" y=\"130\" width=\"80\" height=\"34\" rx=\"6\" fill=\"#dfefff\" stroke=\"#246\"/><text x=\"350\" y=\"152\" font-size=\"12\" text-anchor=\"middle\">Navire 3</text><line x1=\"60\" y1=\"128\" x2=\"180\" y2=\"80\" stroke=\"#246\" stroke-width=\"2\"/><line x1=\"198\" y1=\"80\" x2=\"88\" y2=\"128\" stroke=\"#a60\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/><line x1=\"230\" y1=\"80\" x2=\"350\" y2=\"128\" stroke=\"#a60\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/><line x1=\"210\" y1=\"80\" x2=\"210\" y2=\"128\" stroke=\"#a60\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/><text x=\"210\" y=\"182\" font-size=\"11\" text-anchor=\"middle\">Seule la station côtière reçoit les navires ; tous les navires reçoivent la côtière</text></svg>",
    "placement": "explanation",
    "alt": "Semi-duplex : le navire 1 émet vers la station côtière seule (trait plein), et les émissions de la station côtière sont reçues par les trois navires (pointillés)."
   },
   "kind": "memoire"
  },
  {
   "id": "Q2044",
   "type": "qcm",
   "question": "En mode simplex, quel mot faut-il utiliser systématiquement pour passer du mode émission au mode réception ?",
   "choices": [
    "OUT",
    "THIS IS",
    "TEST",
    "OVER"
   ],
   "answer": "OVER",
   "explanation": "En simplex, on parle à tour de rôle : il faut dire « OVER » à chaque fois pour passer de l'émission à la réception. « OUT » met fin à la communication.",
   "reminder": "Simplex : chacun son tour, terminer par « OVER ».",
   "source": {
    "page": 15,
    "quote": "Toutefois, certains canaux sont disponibles en mode simplex ; il convient dans ce cas de passer du mode émission au mode réception en utilisant systématiquement « OVER »."
   },
   "category": "frequences-modes",
   "difficulty": "facile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 150\" font-family=\"Arial, sans-serif\"><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"#ffffff\"/><text x=\"210\" y=\"20\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Simplex : une seule fréquence, à tour de rôle</text><rect x=\"20\" y=\"50\" width=\"90\" height=\"50\" rx=\"6\" fill=\"#dfefff\" stroke=\"#246\"/><text x=\"65\" y=\"80\" font-size=\"12\" text-anchor=\"middle\">Station 1</text><rect x=\"310\" y=\"50\" width=\"90\" height=\"50\" rx=\"6\" fill=\"#dfefff\" stroke=\"#246\"/><text x=\"355\" y=\"80\" font-size=\"12\" text-anchor=\"middle\">Station 2</text><line x1=\"115\" y1=\"65\" x2=\"300\" y2=\"65\" stroke=\"#246\" stroke-width=\"2\"/><path d=\"M300 60 l10 5 l-10 5 z\" fill=\"#246\"/><text x=\"210\" y=\"58\" font-size=\"11\" text-anchor=\"middle\">Fréquence A ... « OVER »</text><line x1=\"125\" y1=\"88\" x2=\"305\" y2=\"88\" stroke=\"#246\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/><path d=\"M125 83 l-10 5 l10 5 z\" fill=\"#246\"/><text x=\"210\" y=\"106\" font-size=\"11\" text-anchor=\"middle\">puis Fréquence A dans l’autre sens ... « OVER »</text><text x=\"210\" y=\"138\" font-size=\"12\" text-anchor=\"middle\">Pas d’émission simultanée</text></svg>",
    "placement": "explanation",
    "alt": "Simplex : une seule fréquence A utilisée à tour de rôle dans chaque sens, chaque passage se terminant par OVER."
   },
   "kind": "memoire"
  },
  {
   "id": "Q2045",
   "type": "qcm",
   "question": "Quels modes de communication nécessitent deux fréquences ?",
   "choices": [
    "Le simplex et le duplex",
    "Le simplex et le semi-duplex",
    "Le simplex uniquement",
    "Le duplex et le semi-duplex"
   ],
   "answer": "Le duplex et le semi-duplex",
   "explanation": "Le duplex et le semi-duplex nécessitent deux fréquences, alors que le simplex n'en utilise qu'une seule.",
   "reminder": "Deux fréquences : duplex et semi-duplex ; une seule : simplex.",
   "source": {
    "page": 15,
    "quote": "Les communications en duplex et en semi-duplex nécessitent deux fréquences. Les communications en simplex font usage d’une seule fréquence."
   },
   "category": "frequences-modes",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q2046",
   "type": "qcm",
   "question": "Dans les eaux territoriales belges, par qui le canal 6 est-il utilisé ?",
   "choices": [
    "Par Oostende Radio",
    "Par les ports de plaisance",
    "Par les opérations SAR",
    "Par les services de pilotage"
   ],
   "answer": "Par les services de pilotage",
   "explanation": "Le canal 06 est le premier canal navire-navire au niveau international, et en Belgique il est utilisé par les services de pilotage.",
   "reminder": "Canal 6 : 1er intership international, pilotage en Belgique.",
   "source": {
    "page": 16,
    "quote": "Communications « Intership » : premier canal navire-navire au niveau international. En Belgique, le canal 6 est utilisé par les services de pilotage."
   },
   "category": "canaux-vhf",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2047",
   "type": "qcm",
   "question": "Quel est le premier canal navire-navire (Intership) en Belgique, en navigation maritime ?",
   "choices": [
    "Le canal 08",
    "Le canal 06",
    "Le canal 10",
    "Le canal 13"
   ],
   "answer": "Le canal 08",
   "explanation": "Le canal 08 est le premier canal navire-navire en Belgique. Le canal 06 est le premier canal navire-navire au niveau international, et le canal 10 est le premier canal Intership en navigation intérieure.",
   "reminder": "Intership mer : 06 international, 08 en Belgique.",
   "source": {
    "page": 16,
    "quote": "Communications « Intership » : premier canal navire-navire en Belgique."
   },
   "category": "canaux-vhf",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q2048",
   "type": "qcm",
   "question": "Quel canal maritime est associé à Oostende Radio (avis au personnel naviguant en mer) ?",
   "choices": [
    "Le canal 06",
    "Le canal 31",
    "Le canal 67",
    "Le canal 07"
   ],
   "answer": "Le canal 07",
   "explanation": "Dans le tableau des canaux maritimes belges, le canal 07 correspond à Oostende Radio pour les avis au personnel naviguant en mer.",
   "reminder": "Canal 07 = Oostende Radio.",
   "source": {
    "page": 16,
    "quote": "Oostende Radio (Avis au personnel naviguant en mer)"
   },
   "category": "canaux-vhf",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q2049",
   "type": "qcm",
   "question": "À quoi le canal 13 est-il exclusivement réservé ?",
   "choices": [
    "À la sécurité de la navigation",
    "Aux communications sociales",
    "Aux opérations SAR",
    "Aux transmissions ASN"
   ],
   "answer": "À la sécurité de la navigation",
   "explanation": "Selon le manuel, le canal 13 ne peut être utilisé que pour la sécurité de la navigation.",
   "reminder": "Canal 13 = sécurité de la navigation uniquement.",
   "source": {
    "page": 16,
    "quote": "Ce canal ne peut être utilisé que pour la sécurité de la navigation."
   },
   "category": "canaux-vhf",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q2050",
   "type": "qcm",
   "question": "Dans quel cas le canal 16 peut-il être utilisé comme canal d'appel pour les communications navire-navire ?",
   "choices": [
    "Systématiquement, comme canal d'appel principal entre navires",
    "Uniquement pour les communications sociales",
    "Uniquement en dernier ressort, en limitant les communications au strict nécessaire",
    "Jamais, il est réservé aux stations côtières"
   ],
   "answer": "Uniquement en dernier ressort, en limitant les communications au strict nécessaire",
   "explanation": "Le canal 16 sert d'abord à la détresse, puis de canal d'appel pour les stations côtières. Ce n'est qu'en dernier ressort qu'il sert d'appel navire-navire, avec des communications limitées au strict nécessaire.",
   "reminder": "Canal 16 entre navires : dernier recours, au strict nécessaire.",
   "source": {
    "page": 16,
    "quote": "Ce n’est qu’en dernier ressort que ce canal peut être utilisé comme canal d’appel pour les communications navire-navire. Dans ce cas, les communications doivent être limitées au strict nécessaire."
   },
   "category": "canaux-vhf",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2051",
   "type": "qcm",
   "question": "Dans quelle langue est-il recommandé d'émettre les appels et messages de détresse dans la mesure du possible ?",
   "choices": [
    "En français",
    "En anglais",
    "Dans la langue du pays de la station côtière la plus proche",
    "En néerlandais"
   ],
   "answer": "En anglais",
   "explanation": "L'anglais étant considéré comme la langue véhiculaire de la navigation, le manuel recommande d'émettre tous les appels et messages de détresse dans cette langue autant que possible.",
   "reminder": "Détresse : de préférence en anglais.",
   "source": {
    "page": 16,
    "quote": "L’anglais étant considéré comme la langue véhiculaire dans la navigation, il est recommandé d’émettre tous les appels et messages de détresse dans cette langue dans la mesure du possible."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q2052",
   "type": "qcm",
   "question": "Pourquoi est-il obligatoire de maintenir une veille efficace sur le canal 16 autant que possible pendant la navigation ?",
   "choices": [
    "Pour recevoir les communications sociales des autres navires",
    "Pour permettre l'identification automatique AIS",
    "Dans un souci de solidarité en matière de sécurité",
    "Pour recevoir les transmissions numériques ASN"
   ],
   "answer": "Dans un souci de solidarité en matière de sécurité",
   "explanation": "Le manuel justifie l'obligation de veille sur le canal 16 par un souci de solidarité en matière de sécurité.",
   "reminder": "Veille canal 16 = solidarité de sécurité.",
   "source": {
    "page": 16,
    "quote": "Dans un souci de solidarité en matière de sécurité, il est obligatoire de maintenir une veille efficace sur le canal 16 autant que possible pendant la navigation."
   },
   "category": "navigation-maritime",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2053",
   "type": "qcm",
   "question": "À quoi servent les canaux 15 et 17 ?",
   "choices": [
    "Aux communications avec les écluses",
    "Aux radiocommunications de bord (Intraship)",
    "Aux communications navire-navire (Intership)",
    "Aux opérations de recherche et de sauvetage"
   ],
   "answer": "Aux radiocommunications de bord (Intraship)",
   "explanation": "Les canaux 15 et 17 sont des canaux « Intraship », utilisés pour les liaisons à bord d'un même navire. Intership désigne au contraire les échanges entre navires.",
   "reminder": "15 & 17 = Intraship (à bord d'un même navire).",
   "source": {
    "page": 16,
    "quote": "Communications « Intraship » : ces canaux sont utilisés pour les radiocommunications de bord, c.-à-d. les liaisons à bord d'un même navire."
   },
   "category": "canaux-vhf",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q2054",
   "type": "qcm",
   "question": "Dans les eaux territoriales belges, quel canal est le canal mariphone pour les communications radio avec les ports de plaisance ?",
   "choices": [
    "Le canal 37L",
    "Le canal 77",
    "Le canal 31",
    "Le canal 82"
   ],
   "answer": "Le canal 31",
   "explanation": "Le canal 31 est le canal maritime pour les communications avec les ports de plaisance. Le 37L est utilisé en Angleterre et seulement dans les eaux britanniques.",
   "reminder": "Ports de plaisance (Belgique) : canal 31.",
   "source": {
    "page": 16,
    "quote": "Canal maritime – canal mariphone pour les communications radio avec les ports de plaisance"
   },
   "category": "canaux-vhf",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q2055",
   "type": "qcm",
   "question": "Quel est le canal international de recherche et de sauvetage (SAR) ?",
   "choices": [
    "Le canal 73",
    "Le canal 67",
    "Le canal 70",
    "Le canal 13"
   ],
   "answer": "Le canal 67",
   "explanation": "Le canal 67 sert aux opérations SAR en mer et aussi aux communications de lutte contre les catastrophes écologiques en mer. Le canal 73 est le canal antipollution.",
   "reminder": "SAR = canal 67.",
   "source": {
    "page": 16,
    "quote": "Canal international de recherche et de sauvetage (SAR) : ce canal est utilisé pour les opérations SAR (Search and Rescue) en mer. Il est utilisé également pour les communications dans le cadre de la lutte contre les catastrophes écologiques en mer."
   },
   "category": "canaux-vhf",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2056",
   "type": "qcm",
   "question": "Après un appel de détresse ou d'urgence ASN sur le canal 70, que faut-il faire pour la suite du traitement ?",
   "choices": [
    "Rester sur le canal 70",
    "Passer au canal 67",
    "Passer au canal 16",
    "Passer au canal 13"
   ],
   "answer": "Passer au canal 16",
   "explanation": "Le canal 70 est réservé aux transmissions numériques du SMDSM. Après un appel de détresse ou d'urgence ASN, la suite se fait sur le canal 16.",
   "reminder": "ASN sur 70, puis suite en phonie sur 16.",
   "source": {
    "page": 16,
    "quote": "Après un appel de détresse ou un appel d'urgence ASN, il convient de passer au canal 16 pour la suite du traitement."
   },
   "category": "canaux-vhf",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2057",
   "type": "qcm",
   "question": "Quel certificat faut-il posséder pour utiliser un émetteur-récepteur avec fonction ASN ?",
   "choices": [
    "Un simple certificat d'opérateur VHF navigation intérieure",
    "Une autorisation de 4e catégorie",
    "Un certificat d'opérateur SMDSM",
    "Aucun certificat particulier"
   ],
   "answer": "Un certificat d'opérateur SMDSM",
   "explanation": "Le manuel précise qu'il faut être titulaire d'un certificat d'opérateur SMDSM pour utiliser un émetteur-récepteur avec fonction ASN.",
   "reminder": "ASN = certificat d'opérateur SMDSM.",
   "source": {
    "page": 16,
    "quote": "Pour l’utilisation d’un émetteur-récepteur avec fonction ASN, il faut être titulaire d’un certificat d’opérateur SMDSM."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2058",
   "type": "qcm",
   "question": "Que dit le manuel du canal 70 pour la radiotéléphonie ?",
   "choices": [
    "Il sert de canal d'appel en phonie pour les stations côtières",
    "Il est utilisable à faible puissance",
    "Il est toujours bloqué pour la radiotéléphonie",
    "Il est réservé aux écluses"
   ],
   "answer": "Il est toujours bloqué pour la radiotéléphonie",
   "explanation": "Le canal 70 est réservé aux transmissions numériques ASN : il doit être bloqué sur les mariphones sans ASN et il est toujours bloqué pour la radiotéléphonie.",
   "reminder": "Canal 70 : numérique ASN, jamais en phonie.",
   "source": {
    "page": 17,
    "quote": "fonction ASN, le canal 70 doit être bloqué. Le canal 70 est toujours bloqué pour la radiotéléphonie."
   },
   "category": "canaux-vhf",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2059",
   "type": "qcm",
   "question": "Quel canal est réservé aux communications dans le cadre de la lutte contre la pollution en mer ?",
   "choices": [
    "Le canal 67",
    "Le canal 82",
    "Le canal 73",
    "Le canal 75"
   ],
   "answer": "Le canal 73",
   "explanation": "Le canal 73 est le canal antipollution. Le canal 67 sert aux opérations SAR et le canal 82 à l'approvisionnement ou au soutage.",
   "reminder": "Canal 73 = antipollution.",
   "source": {
    "page": 17,
    "quote": "Canal antipollution : ce canal est réservé aux communications dans le cadre de la lutte contre la pollution en mer."
   },
   "category": "canaux-vhf",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q2060",
   "type": "qcm",
   "question": "À quoi correspondent les canaux 75 et 76, et quelle utilisation particulière est prévue ?",
   "choices": [
    "À l'AIS à longue portée ; ils peuvent aussi être utilisés à 1 watt par les autorités portuaires",
    "Aux communications sociales ; utilisables à 25 watts par les plaisanciers",
    "À l'approvisionnement ; utilisables avec l'autorisation de l'IBPT",
    "Aux écluses ; utilisables à 1 watt par les éclusiers"
   ],
   "answer": "À l'AIS à longue portée ; ils peuvent aussi être utilisés à 1 watt par les autorités portuaires",
   "explanation": "Les canaux 75 et 76 servent à l'AIS à longue portée (Long Range AIS), et les autorités portuaires peuvent aussi les utiliser à 1 watt.",
   "reminder": "75 & 76 = Long Range AIS (autorités portuaires à 1 W).",
   "source": {
    "page": 17,
    "quote": "AIS à longue portée (Long Range AIS en anglais) : ce canal peut également être utilisé à 1 watt par les autorités portuaires ;"
   },
   "category": "canaux-vhf",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q2061",
   "type": "qcm",
   "question": "En mer, quel canal est destiné aux communications d'ordre familial et social entre navires, et à quelle puissance ?",
   "choices": [
    "Le canal 72, à faible puissance (entre 0,5 et 1 watt)",
    "Le canal 77, à faible puissance (entre 0,5 et 1 watt)",
    "Le canal 77, à puissance élevée (entre 6 et 25 watts)",
    "Le canal 31, à faible puissance (entre 0,5 et 1 watt)"
   ],
   "answer": "Le canal 77, à faible puissance (entre 0,5 et 1 watt)",
   "explanation": "En mer, seul le canal 77 peut servir aux communications sociales, et uniquement à faible puissance. Le canal 72 n'est ajouté que sur les voies de navigation intérieure.",
   "reminder": "Social en mer : 77 seulement, à 0,5 à 1 W.",
   "source": {
    "page": 17,
    "quote": "Communications d’ordre familial et social : ce canal est destiné aux communications sociales entre les navires. Il ne peut être utilisé qu’à faible puissance (entre 0,5 et 1 watt)."
   },
   "category": "canaux-vhf",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q2062",
   "type": "qcm",
   "question": "Pour le canal 82 (approvisionnement ou soutage), à quoi est subordonné l'établissement des fréquences côtières à bord ?",
   "choices": [
    "À l'accord de la station côtière la plus proche",
    "À la possession d'un certificat SMDSM",
    "À l'autorisation préalable de l'IBPT",
    "À l'enregistrement du code ATIS"
   ],
   "answer": "À l'autorisation préalable de l'IBPT",
   "explanation": "Pour le canal 82, l'établissement des fréquences côtières à bord ou aux points d'approvisionnement est subordonné à l'autorisation préalable de l'IBPT.",
   "reminder": "Canal 82 (soutage) : autorisation préalable IBPT.",
   "source": {
    "page": 17,
    "quote": "Approvisionnement ou soutage : l’établissement des fréquences appelées fréquences côtières à bord de navires amarrés ou non, ou de points d’approvisionnement est subordonné à l'autorisation préalable de l’IBPT."
   },
   "category": "canaux-vhf",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2063",
   "type": "qcm",
   "question": "Quelle est la fréquence du canal 87H-AIS1 ?",
   "choices": [
    "162,025 MHz",
    "156,800 MHz",
    "161,975 MHz",
    "156,025 MHz"
   ],
   "answer": "161,975 MHz",
   "explanation": "Le canal 87H-AIS1 est à 161,975 MHz et le canal 88H-AIS2 à 162,025 MHz.",
   "reminder": "AIS1 (87H) = 161,975 MHz ; AIS2 (88H) = 162,025 MHz.",
   "source": {
    "page": 17,
    "quote": "Système d'identification automatique – 161,975 MHz"
   },
   "category": "canaux-vhf",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q2064",
   "type": "qcm",
   "question": "À quelles conditions les canaux VHF maritimes non mentionnés à l'annexe 2 peuvent-ils être utilisés ?",
   "choices": [
    "Librement, à faible puissance",
    "Avec l'autorisation préalable de l'IBPT et s'ils figurent expressément sur l'autorisation",
    "Avec l'accord de la station côtière",
    "Uniquement en cas de détresse"
   ],
   "answer": "Avec l'autorisation préalable de l'IBPT et s'ils figurent expressément sur l'autorisation",
   "explanation": "Le manuel précise que les canaux non mentionnés à l'annexe 2 ne peuvent être utilisés qu'avec l'autorisation préalable de l'IBPT et s'ils figurent expressément sur l'autorisation.",
   "reminder": "Autres canaux : IBPT d'abord, et inscrits sur l'autorisation.",
   "source": {
    "page": 17,
    "quote": "Tous les canaux non mentionnés à l’annexe 2, les canaux VHF pour la navigation maritime, ne peuvent être utilisés qu’avec l’autorisation préalable de l’IBPT et lorsqu’ils figurent expressément sur l'autorisation."
   },
   "category": "canaux-vhf",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2065",
   "type": "qcm",
   "question": "Où le canal 37L peut-il être utilisé ?",
   "choices": [
    "Uniquement dans les eaux territoriales britanniques",
    "Uniquement dans les eaux territoriales belges",
    "Sur toutes les voies de navigation intérieure",
    "Dans tous les ports de plaisance européens"
   ],
   "answer": "Uniquement dans les eaux territoriales britanniques",
   "explanation": "Le canal 37L est utilisé en Angleterre entre les ports de plaisance et la navigation de plaisance, et ne peut donc être utilisé que dans les eaux territoriales britanniques.",
   "reminder": "37L = Angleterre, eaux britanniques seulement.",
   "source": {
    "page": 17,
    "quote": "Ce canal est utilisé en Angleterre pour les communications entre les ports de plaisance et la navigation de plaisance et ne peut dès lors être utilisé que dans les eaux territoriales britanniques."
   },
   "category": "canaux-vhf",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2066",
   "type": "qcm",
   "question": "En navigation intérieure, quel canal est le premier canal Intership, aussi utilisé comme canal d'urgence et pour les messages de sécurité de Radio Ostende ?",
   "choices": [
    "Le canal 08",
    "Le canal 16",
    "Le canal 10",
    "Le canal 13"
   ],
   "answer": "Le canal 10",
   "explanation": "Dans le tableau de la navigation intérieure, le canal 10 est le premier canal Intership, le canal d'urgence et le canal des messages de sécurité de Radio Ostende.",
   "reminder": "Fluvial : canal 10 = 1er intership + urgence + sécurité Radio Ostende.",
   "source": {
    "page": 17,
    "quote": "Communications « Intership » : premier canal. Canal d’urgence et canal pour les messages de sécurité de Radio Ostende. »"
   },
   "category": "canaux-vhf",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2067",
   "type": "qcm",
   "question": "En navigation intérieure, quels canaux sont prévus pour les écluses ?",
   "choices": [
    "Les canaux 15 et 17",
    "Les canaux 18, 20 et 22",
    "Les canaux 72 et 77",
    "Les canaux 75 et 76"
   ],
   "answer": "Les canaux 18, 20 et 22",
   "explanation": "Le tableau des canaux de navigation intérieure attribue les canaux 18, 20 et 22 aux écluses. Les canaux 15 et 17 sont réservés aux radiocommunications de bord.",
   "reminder": "Écluses : 18, 20, 22.",
   "source": {
    "page": 17,
    "quote": "Canal pour les écluses"
   },
   "category": "canaux-vhf",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q2068",
   "type": "qcm",
   "question": "L'utilisation de l'ASN (canal 70) est-elle autorisée sur les voies de navigation intérieure ?",
   "choices": [
    "Oui, avec un certificat d'opérateur SMDSM",
    "Oui, uniquement pour les appels de détresse",
    "Oui, à faible puissance",
    "Non, l'ASN n'est pas autorisée sur les voies de navigation intérieure"
   ],
   "answer": "Non, l'ASN n'est pas autorisée sur les voies de navigation intérieure",
   "explanation": "Le manuel indique clairement que l'utilisation de l'ASN n'est pas autorisée sur les voies de navigation intérieure, et que le canal 70 est toujours bloqué pour la radiotéléphonie.",
   "reminder": "Pas d'ASN en navigation intérieure.",
   "source": {
    "page": 17,
    "quote": "Canal ASN international : l’utilisation de l’ASN n’est pas autorisée sur les voies de navigation intérieure ! Le canal 70 est toujours bloqué pour la radiotéléphonie."
   },
   "category": "navigation-interieure",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q2069",
   "type": "qcm",
   "question": "En navigation intérieure, quel canal peut être utilisé en plus du canal 77 pour les communications d'ordre social et familial ?",
   "choices": [
    "Le canal 31",
    "Le canal 73",
    "Le canal 72",
    "Le canal 82"
   ],
   "answer": "Le canal 72",
   "explanation": "Selon l'Arrangement sur les voies de navigation intérieure, le canal 72 peut aussi servir aux communications sociales et familiales, en plus du 77, uniquement à faible puissance.",
   "reminder": "Social en fluvial : 72 et 77, à faible puissance.",
   "source": {
    "page": 18,
    "quote": "Comme indiqué dans l’Arrangement sur les voies de navigation intérieure, le canal 72 (en plus du canal 77) peut être utilisé pour les communications d’ordre social et familial. Il ne peut être utilisé qu’à faible puissance (entre 0,5 et 1 watt)."
   },
   "category": "canaux-vhf",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 150\" font-family=\"Arial, sans-serif\"><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"#ffffff\"/><text x=\"210\" y=\"20\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Canaux pour les communications sociales</text><rect x=\"20\" y=\"40\" width=\"180\" height=\"80\" rx=\"8\" fill=\"#cfe8f7\" stroke=\"#246\"/><text x=\"110\" y=\"62\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\">En mer</text><text x=\"110\" y=\"95\" font-size=\"22\" text-anchor=\"middle\">77</text><rect x=\"220\" y=\"40\" width=\"180\" height=\"80\" rx=\"8\" fill=\"#e8f4ea\" stroke=\"#2e7d32\"/><text x=\"310\" y=\"62\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\">Navigation intérieure</text><text x=\"310\" y=\"95\" font-size=\"22\" text-anchor=\"middle\">72 et 77</text><text x=\"210\" y=\"140\" font-size=\"12\" text-anchor=\"middle\">Toujours à faible puissance (entre 0,5 et 1 watt)</text></svg>",
    "placement": "explanation",
    "alt": "Canaux sociaux : 77 en mer, 72 et 77 en navigation intérieure, toujours à faible puissance de 0,5 à 1 watt."
   },
   "kind": "memoire"
  },
  {
   "id": "Q2070",
   "type": "qcm",
   "question": "Dans quels pays voisins la même réglementation s'applique-t-elle au canal 72 ?",
   "choices": [
    "Pays-Bas, Luxembourg et Royaume-Uni",
    "Pays-Bas, France et Allemagne",
    "France, Allemagne et Suisse",
    "Pays-Bas, Allemagne et Autriche"
   ],
   "answer": "Pays-Bas, France et Allemagne",
   "explanation": "Le manuel indique que la même réglementation est d'application aux Pays-Bas, en France et en Allemagne. Pour les autres pays, il faut consulter l'Arrangement (annexe 3).",
   "reminder": "Canal 72 : même règle aux Pays-Bas, en France et en Allemagne.",
   "source": {
    "page": 18,
    "quote": "La même réglementation est d’application dans nos pays voisins (Pays-Bas, France et Allemagne)."
   },
   "category": "canaux-vhf",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q2071",
   "type": "qcm",
   "question": "À quel règlement est soumis le déroulement des radiocommunications du service radiotéléphonique en navigation intérieure ?",
   "choices": [
    "À la convention SOLAS",
    "À la décision 2000/637/CE",
    "Au Règlement des radiocommunications de l'Union Internationale des Télécommunications (UIT)",
    "Au règlement de l'IBPT sur les ports de plaisance"
   ],
   "answer": "Au Règlement des radiocommunications de l'Union Internationale des Télécommunications (UIT)",
   "explanation": "Le manuel précise que ces radiocommunications sont soumises au Règlement des radiocommunications de l'UIT.",
   "reminder": "Radiocommunications fluviales : Règlement des radiocommunications de l'UIT.",
   "source": {
    "page": 18,
    "quote": "Le déroulement des radiocommunications du service radiotéléphonique en navigation intérieure est soumis au Règlement des radiocommunications de l’Union Internationale des Télécommunications (UIT)."
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2072",
   "type": "qcm",
   "question": "Quelles informations peuvent en principe être transmises par radiotéléphonie ?",
   "choices": [
    "Celles qui traitent de la sécurité de la vie humaine, de la navigation ou de la sécurité des bateaux",
    "Toute information, y compris la musique, à faible puissance",
    "Uniquement les messages de détresse",
    "Les conversations privées de toute nature sur tous les canaux"
   ],
   "answer": "Celles qui traitent de la sécurité de la vie humaine, de la navigation ou de la sécurité des bateaux",
   "explanation": "Le manuel limite en principe les transmissions aux informations sur la sécurité de la vie humaine, de la navigation ou des bateaux.",
   "reminder": "Radio = sécurité de la vie, de la navigation, des bateaux.",
   "source": {
    "page": 18,
    "quote": "Ne peuvent être transmises en principe que des informations traitant de la sécurité de la vie humaine, de la navigation ou de la sécurité des bateaux."
   },
   "category": "procedures-generales",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q2073",
   "type": "qcm",
   "question": "Quand les stations terrestres assurent-elles la veille sur le canal assigné ?",
   "choices": [
    "En permanence, 24 heures sur 24",
    "Uniquement en cas de détresse",
    "Uniquement sur demande d'un navire",
    "Pendant les heures de service de ces stations"
   ],
   "answer": "Pendant les heures de service de ces stations",
   "explanation": "Le manuel indique que les stations terrestres assurent la veille sur le canal assigné pendant leurs heures de service.",
   "reminder": "Stations terrestres : veille pendant leurs heures de service.",
   "source": {
    "page": 18,
    "quote": "Les stations terrestres assurent la veille sur le canal assigné pendant les heures de service de ces stations."
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2074",
   "type": "qcm",
   "question": "Que faut-il vérifier avant chaque transmission ?",
   "choices": [
    "Qu'aucune autre liaison ne sera perturbée",
    "Que le squelch est complètement ouvert",
    "Que la double veille est activée",
    "Que la puissance élevée est sélectionnée"
   ],
   "answer": "Qu'aucune autre liaison ne sera perturbée",
   "explanation": "Avant chaque transmission, il faut s'assurer qu'aucune autre liaison ne sera perturbée, en particulier les appels de détresse qui ont la priorité absolue.",
   "reminder": "Avant d'émettre : écouter pour ne perturber personne.",
   "source": {
    "page": 18,
    "quote": "Avant chaque transmission, il convient de s’assurer qu’aucune autre liaison ne sera perturbée. Cette disposition vaut plus particulièrement pour les appels de détresse qui ont la priorité absolue."
   },
   "category": "procedures-generales",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q2075",
   "type": "qcm",
   "question": "Combien de temps au maximum peut durer une transmission de test d'un mariphone ?",
   "choices": [
    "5 secondes",
    "10 secondes",
    "30 secondes",
    "1 minute"
   ],
   "answer": "10 secondes",
   "explanation": "Le test doit être réduit au minimum et la transmission ne peut pas durer plus de 10 secondes.",
   "reminder": "Test radio : 10 secondes maximum.",
   "source": {
    "page": 18,
    "quote": "Si l’on souhaite tester un mariphone, cette opération doit être réduite au minimum et la transmission ne peut pas durer plus de 10 secondes."
   },
   "category": "procedures-generales",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q2076",
   "type": "qcm",
   "question": "Que doit comprendre une transmission de test ?",
   "choices": [
    "Le mot « test », suivi du nom du port d'attache",
    "L'indicatif d'appel de la station de navire, suivi du mot « test »",
    "Le numéro ATIS, suivi d'un décompte de 1 à 10",
    "Le mot « MAYDAY », suivi du mot « test »"
   ],
   "answer": "L'indicatif d'appel de la station de navire, suivi du mot « test »",
   "explanation": "La transmission de test comprend l'indicatif d'appel de la station de navire suivi du mot « test », les deux étant prononcés lentement et clairement.",
   "reminder": "Test = indicatif d'appel + « test », lentement et clairement.",
   "source": {
    "page": 19,
    "quote": "La transmission test doit comprendre l’indicatif d’appel de la station de navire, suivi du mot « test ». L’indicatif d'appel et le mot « test » doivent être prononcés lentement et clairement."
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2077",
   "type": "qcm",
   "question": "Pourquoi la discipline des communications exige-t-elle de limiter la puissance d'émission autant que possible ?",
   "choices": [
    "Pour économiser la batterie du portophone",
    "Pour éviter des brouillages d'autres liaisons de radiocommunications",
    "Pour empêcher la localisation du navire",
    "Pour pouvoir activer la double veille"
   ],
   "answer": "Pour éviter des brouillages d'autres liaisons de radiocommunications",
   "explanation": "La discipline des communications demande de limiter la puissance d'émission autant que possible afin d'éviter de brouiller d'autres liaisons.",
   "reminder": "Puissance minimale = pas de brouillage des autres.",
   "source": {
    "page": 19,
    "quote": "de limiter la puissance d'émission autant qu'il est possible pour éviter des brouillages d'autres liaisons de radiocommunications ;"
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2078",
   "type": "qcm",
   "question": "Laquelle de ces exigences fait partie de la discipline des communications ?",
   "choices": [
    "Diffuser de la musique à faible puissance pour tester la liaison",
    "Ne pas appuyer sur la manette du combiné plus longtemps qu'il n'est nécessaire",
    "Utiliser le canal 72 pour les communications sociales en mer",
    "Parler rapidement pour libérer le canal plus vite"
   ],
   "answer": "Ne pas appuyer sur la manette du combiné plus longtemps qu'il n'est nécessaire",
   "explanation": "La discipline impose notamment de ne pas appuyer sur la manette plus que nécessaire, de ne pas diffuser de musique, de parler lentement et clairement, et de n'utiliser en mer que le canal 77 pour les communications sociales.",
   "reminder": "Discipline : bref, lent, clair, pas de musique, manette relâchée.",
   "source": {
    "page": 19,
    "quote": "de ne pas appuyer sur la manette du combiné plus longtemps qu’il n’est nécessaire ;"
   },
   "category": "procedures-generales",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q2079",
   "type": "qcm",
   "question": "Quel type de conversations faut-il uniquement entretenir sur les liaisons navire-navire, informations nautiques, navire-autorité portuaire et communications de bord ?",
   "choices": [
    "Des conversations sociales et familiales",
    "Des conversations professionnelles",
    "Des conversations en anglais uniquement",
    "Des conversations de détresse uniquement"
   ],
   "answer": "Des conversations professionnelles",
   "explanation": "La discipline exige de n'entretenir que des conversations professionnelles sur ces liaisons. Les communications sociales se font sur des canaux dédiés (72 et 77 en fluvial, 77 en mer).",
   "reminder": "Liaisons de travail = conversations professionnelles seulement.",
   "source": {
    "page": 19,
    "quote": "d’entretenir uniquement des conversations professionnelles sur les liaisons de radiocommunications navire-navire, informations nautiques, navire-autorité portuaire et communications de bord ;"
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2080",
   "type": "qcm",
   "question": "Laquelle de ces instructions une station côtière peut-elle donner à une station de navire ?",
   "choices": [
    "Activer la double veille sur les voies de navigation intérieure",
    "Diffuser de la musique pour tester la liaison",
    "Utiliser l'ASN sur les voies de navigation intérieure",
    "Réduire la puissance de sortie de la station de navire"
   ],
   "answer": "Réduire la puissance de sortie de la station de navire",
   "explanation": "Le manuel cite comme exemples d'instructions de la station côtière une demande de silence radio, la réduction de la puissance de sortie du navire et la veille sur un canal déterminé. Les autres propositions sont interdites par le manuel.",
   "reminder": "Station côtière : silence radio, réduction de puissance, veille sur un canal.",
   "source": {
    "page": 19,
    "quote": "Ces instructions peuvent par exemple être : • une demande de silence radio ; • la réduction de la puissance de sortie de la station de navire ; • la veille sur un canal déterminé."
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2081",
   "type": "qcm",
   "question": "Que peut-on faire en cas de danger vis-à-vis des instructions de la station côtière ?",
   "choices": [
    "Y déroger sans jamais devoir en informer la station côtière",
    "Y déroger, à condition d'en informer la station côtière par la suite",
    "Demander d'abord son autorisation à la station côtière avant toute action",
    "Rien : il n'est jamais permis d'y déroger"
   ],
   "answer": "Y déroger, à condition d'en informer la station côtière par la suite",
   "explanation": "Le manuel précise qu'en cas de danger, on peut déroger aux instructions de la station côtière, qui doit en être informée par la suite.",
   "reminder": "Danger : on peut déroger, puis on informe la côte.",
   "source": {
    "page": 19,
    "quote": "En cas de danger, il peut être dérogé aux instructions de la station côtière. La station côtière doit en être informée par la suite."
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2082",
   "type": "qcm",
   "question": "Quand les messages reçus doivent-ils faire l'objet d'un accusé de réception ?",
   "choices": [
    "Toujours, pour chaque message",
    "Jamais en navigation intérieure",
    "Sur demande",
    "Uniquement en mer"
   ],
   "answer": "Sur demande",
   "explanation": "Le manuel indique que les messages reçus doivent faire l'objet d'un accusé de réception sur demande.",
   "reminder": "Accusé de réception : sur demande.",
   "source": {
    "page": 19,
    "quote": "Sur demande, les messages reçus doivent faire l’objet d’un accusé réception."
   },
   "category": "procedures-generales",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q2083",
   "type": "qcm",
   "question": "Lequel de ces éléments permet d'identifier une station ?",
   "choices": [
    "Le nom du navire suivi de son indicatif d'appel",
    "Le nom du skipper",
    "Le port d'attache du navire",
    "Le numéro de téléphone du navire"
   ],
   "answer": "Le nom du navire suivi de son indicatif d'appel",
   "explanation": "Une station s'identifie par le nom du navire ou de la station côtière, par son indicatif d'appel, ou par le nom suivi de l'indicatif d'appel.",
   "reminder": "Identification : nom, indicatif, ou nom + indicatif.",
   "source": {
    "page": 20,
    "quote": "le nom du navire ou de la station côtière, suivi de son indicatif d’appel."
   },
   "category": "procedures-generales",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q2084",
   "type": "qcm",
   "question": "Quels mots faut-il utiliser avant de transmettre son identification, et quel mot les remplace si la liaison est mauvaise ?",
   "choices": [
    "ICI ou THIS IS ; DE (prononcé DELTA ECHO) si la liaison est mauvaise",
    "À VOUS ou OVER ; DE (prononcé DELTA ECHO) si la liaison est mauvaise",
    "ICI ou THIS IS ; OUT si la liaison est mauvaise",
    "TERMINÉ ou OUT ; ICI si la liaison est mauvaise"
   ],
   "answer": "ICI ou THIS IS ; DE (prononcé DELTA ECHO) si la liaison est mauvaise",
   "explanation": "On annonce son identification par ICI ou THIS IS, et par DE (prononcé DELTA ECHO) quand la liaison est mauvaise. À VOUS / OVER sert à passer la parole.",
   "reminder": "ICI / THIS IS avant l'identité, DE si la liaison est mauvaise.",
   "source": {
    "page": 20,
    "quote": "Avant de transmettre son identification, il faut utiliser les mots ICI ou THIS IS. Si la liaison est mauvaise, DE (prononcé DELTA ECHO) sera utilisé."
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2085",
   "type": "qcm",
   "question": "Quels mots faut-il utiliser pour passer la parole à son correspondant ?",
   "choices": [
    "TERMINÉ ou OUT",
    "ICI ou THIS IS",
    "OVER AND OUT",
    "À VOUS ou OVER"
   ],
   "answer": "À VOUS ou OVER",
   "explanation": "Pour passer la parole, on dit À VOUS ou OVER. TERMINÉ ou OUT met fin à la communication, et ICI ou THIS IS précède l'identification.",
   "reminder": "Passer la parole : À VOUS / OVER.",
   "source": {
    "page": 20,
    "quote": "Lorsqu’on souhaite passer la parole à son correspondant, on doit utiliser les mots À VOUS ou OVER."
   },
   "category": "procedures-generales",
   "difficulty": "facile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 130\" font-family=\"Arial, sans-serif\"><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"#ffffff\"/><text x=\"230\" y=\"20\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Mots de procédure</text><rect x=\"15\" y=\"40\" width=\"130\" height=\"44\" rx=\"6\" fill=\"#dfefff\" stroke=\"#333\"/><text x=\"80\" y=\"58\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\">ICI / THIS IS</text><text x=\"80\" y=\"76\" font-size=\"11\" text-anchor=\"middle\">(DE si liaison mauvaise)</text><rect x=\"165\" y=\"40\" width=\"130\" height=\"44\" rx=\"6\" fill=\"#fff2d9\" stroke=\"#333\"/><text x=\"230\" y=\"58\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\">À VOUS / OVER</text><text x=\"230\" y=\"76\" font-size=\"11\" text-anchor=\"middle\">passer la parole</text><rect x=\"315\" y=\"40\" width=\"130\" height=\"44\" rx=\"6\" fill=\"#f9dede\" stroke=\"#333\"/><text x=\"380\" y=\"58\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\">TERMINÉ / OUT</text><text x=\"380\" y=\"76\" font-size=\"11\" text-anchor=\"middle\">fin de communication</text><text x=\"230\" y=\"115\" font-size=\"12\" text-anchor=\"middle\" fill=\"#c00\">« OVER AND OUT » ne peut pas être utilisé</text></svg>",
    "placement": "explanation",
    "alt": "Mots de procédure : ICI / THIS IS (DE si la liaison est mauvaise), À VOUS / OVER pour passer la parole, TERMINÉ / OUT pour finir, et OVER AND OUT interdit."
   },
   "kind": "memoire"
  },
  {
   "id": "Q2087",
   "type": "qcm",
   "question": "Pourquoi l'expression « OVER AND OUT » ne peut-elle pas être utilisée ?",
   "choices": [
    "Parce qu'elle est réservée aux messages de détresse",
    "Parce que « OVER » attend une réponse alors que « OUT » signifie que la communication est terminée",
    "Parce qu'elle n'est autorisée qu'en navigation intérieure",
    "Parce qu'elle doit être remplacée par DE en cas de mauvaise liaison"
   ],
   "answer": "Parce que « OVER » attend une réponse alors que « OUT » signifie que la communication est terminée",
   "explanation": "« OVER » signifie qu'on attend une réponse, tandis que « OUT » indique que la communication est terminée. Les deux mots sont donc contradictoires.",
   "reminder": "OVER = j'attends une réponse ; OUT = c'est fini. Jamais les deux.",
   "source": {
    "page": 20,
    "quote": "Le terme « OVER AND OUT » ne peut pas être utilisé parce que lorsqu'on dit « OVER », on attend une réponse de l'autre partie, alors que « OUT » implique justement que la communication est terminée."
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2088",
   "type": "qcm",
   "question": "En navigation intérieure, quelle langue utilise-t-on entre une station de bateau et une station terrestre fixe ?",
   "choices": [
    "La langue du pays du bateau",
    "La langue du pays où se trouve la station terrestre fixe",
    "Toujours l'anglais",
    "La langue choisie par le bateau appelant"
   ],
   "answer": "La langue du pays où se trouve la station terrestre fixe",
   "explanation": "En navigation intérieure, les échanges entre bateau et station terrestre fixe se font dans la langue du pays où se trouve la station terrestre fixe.",
   "reminder": "Fluvial bateau-terre : langue du pays de la station terrestre.",
   "source": {
    "page": 20,
    "quote": "Pour les communications échangées entre les stations de bateau et les stations terrestres fixes, il est fait usage de la langue du pays où se trouve la station terrestre fixe."
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2089",
   "type": "qcm",
   "question": "En navigation intérieure, quelle langue utilise-t-on entre stations de bateau, et que faire en cas de difficultés de compréhension ?",
   "choices": [
    "La langue du pays du bateau appelé ; en cas de difficulté, le français",
    "La langue du pays où le bateau navigue ; en cas de difficulté, la langue des règlements de police fluviale",
    "L'anglais ; en cas de difficulté, la langue du pays où le bateau navigue",
    "La langue du pays d'immatriculation ; en cas de difficulté, l'allemand"
   ],
   "answer": "La langue du pays où le bateau navigue ; en cas de difficulté, la langue des règlements de police fluviale",
   "explanation": "Entre bateaux, on utilise la langue du pays dans lequel le bateau navigue. En cas de difficultés de compréhension, il faut utiliser la langue prévue par les règlements de police fluviale.",
   "reminder": "Fluvial bateau-bateau : langue du pays navigué, sinon celle de la police fluviale.",
   "source": {
    "page": 20,
    "quote": "Pour les communications échangées entre les stations de bateau, il est fait usage de la langue du pays dans lequel le bateau concerné navigue. En cas de difficultés de compréhension, la langue spécifiée dans les règlements de police fluviale doit être utilisée."
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2090",
   "type": "qcm",
   "question": "En navigation intérieure, si aucun « Règlement général de police pour la navigation sur les eaux intérieures » n'est d'application, quelle langue doit être utilisée en premier pour les communications bateau-autorités portuaires ?",
   "choices": [
    "La langue du pays des stations à terre, l'anglais pouvant servir de back-up",
    "Le néerlandais, le français pouvant servir de back-up",
    "L'anglais, la langue du pays des stations à terre pouvant servir de back-up",
    "La langue du pays du bateau, l'anglais pouvant servir de back-up"
   ],
   "answer": "L'anglais, la langue du pays des stations à terre pouvant servir de back-up",
   "explanation": "Sans règlement général de police applicable, l'arrangement Rainwat impose l'anglais comme première langue entre bateau et autorités portuaires, la langue du pays des stations à terre servant de back-up.",
   "reminder": "Sans règlement de police : anglais d'abord (bateau-port et bateau-bateau).",
   "source": {
    "page": 20,
    "quote": "Bateau-autorités portuaires : l’anglais doit être utilisé comme première langue. La langue du pays où les stations à terre se trouvent peut être utilisée à titre de back-up."
   },
   "category": "navigation-interieure",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q2091",
   "type": "qcm",
   "question": "En navigation maritime, quelle langue utilise-t-on entre une station de navire et une station côtière fixe ?",
   "choices": [
    "La langue du pays du navire ou l'anglais",
    "Uniquement l'anglais",
    "La langue du pays où se trouve la station côtière fixe ou l'anglais",
    "La langue du pays du navire appelant uniquement"
   ],
   "answer": "La langue du pays où se trouve la station côtière fixe ou l'anglais",
   "explanation": "En mer, les échanges entre navire et station côtière fixe se font dans la langue du pays de la station côtière ou en anglais.",
   "reminder": "Mer, navire-côte : langue de la station côtière ou anglais.",
   "source": {
    "page": 20,
    "quote": "Pour les communications échangées entre les stations de navire et les stations côtières fixes, il est fait usage de la langue du pays où se trouve la station côtière fixe ou de l’anglais."
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q2092",
   "type": "qcm",
   "question": "En navigation maritime, quelle langue utilise-t-on entre stations de navire ?",
   "choices": [
    "La langue du pays du navire appelant ou l'anglais",
    "La langue du pays du navire appelé ou l'anglais",
    "La langue du pays de la station côtière la plus proche",
    "Uniquement l'anglais"
   ],
   "answer": "La langue du pays du navire appelé ou l'anglais",
   "explanation": "Entre navires en mer, on utilise la langue du pays du navire appelé ou l'anglais. Le piège est le navire appelant : c'est la langue du navire appelé qui compte.",
   "reminder": "Mer, navire-navire : langue du navire APPELÉ ou anglais.",
   "source": {
    "page": 20,
    "quote": "Pour les communications échangées entre les stations de navire, il est fait usage de la langue du pays du navire appelé ou de l’anglais."
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3001",
   "type": "qcm",
   "question": "Dans quel cas est-il recommandé d'épeler les mots à transmettre à l'aide de la table d'épellation ?",
   "choices": [
    "Systématiquement pour chaque nom de navire",
    "Uniquement lors des essais radio",
    "Uniquement lors d'un appel de détresse",
    "En cas de difficulté de compréhension"
   ],
   "answer": "En cas de difficulté de compréhension",
   "explanation": "Le manuel recommande d'épeler les mots selon la table d'épellation en cas de difficulté de compréhension. Ce n'est pas réservé aux appels de détresse ni aux essais.",
   "reminder": "Difficulté de compréhension = j'épelle avec la table d'épellation.",
   "source": {
    "page": 21,
    "quote": "En cas de difficulté de compréhension, il est recommandé d’épeler les mots à transmettre conformément à la table d’épellation ci-après, et de transmettre les nombres chiffre par chiffre."
   },
   "category": "procedures-generales",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q3002",
   "type": "qcm",
   "question": "Comment le manuel recommande-t-il de transmettre les nombres en cas de difficulté de compréhension ?",
   "choices": [
    "Chiffre par chiffre",
    "En les répétant trois fois sans les décomposer",
    "Par groupes de deux chiffres",
    "En toutes lettres d'un seul tenant"
   ],
   "answer": "Chiffre par chiffre",
   "explanation": "En cas de difficulté de compréhension, les nombres sont transmis chiffre par chiffre, avec les mots de code de la table.",
   "reminder": "Les nombres se transmettent chiffre par chiffre.",
   "source": {
    "page": 21,
    "quote": "et de transmettre les nombres chiffre par chiffre."
   },
   "category": "procedures-generales",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q3003",
   "type": "qcm",
   "question": "Quel est le mot de code de la table d'épellation pour la lettre K ?",
   "choices": [
    "Charlie",
    "X-ray",
    "Kilo",
    "Québec"
   ],
   "answer": "Kilo",
   "explanation": "Dans la table d'épellation, la lettre K se transmet avec le mot de code Kilo (prononcé KI LO). Québec correspond à Q, Charlie à C et X-ray à X.",
   "reminder": "K = Kilo (KI LO).",
   "source": {
    "page": 21,
    "quote": "K\n\nKilo\n\nKI LO"
   },
   "category": "procedures-generales",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q3004",
   "type": "qcm",
   "question": "Comment se prononce le mot de code de la lettre Q selon la table d'épellation ?",
   "choices": [
    "KI LO",
    "KÉ BEK",
    "KÉ BÈK KO",
    "KOU É BEK"
   ],
   "answer": "KÉ BEK",
   "explanation": "La lettre Q a pour mot de code Québec, prononcé KÉ BEK. KI LO est la prononciation de Kilo (lettre K).",
   "reminder": "Q = Québec, prononcé KÉ BEK.",
   "source": {
    "page": 21,
    "quote": "Q\n\nQuébec\n\nKÉ BEK"
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3005",
   "type": "qcm",
   "question": "Quel mot de code de la table d'épellation correspond à la lettre W ?",
   "choices": [
    "Whiskey",
    "Victor",
    "Yankee",
    "Uniform"
   ],
   "answer": "Whiskey",
   "explanation": "La lettre W se transmet avec le mot de code Whiskey, prononcé OUISS KI. Victor correspond à V, Yankee à Y et Uniform à U.",
   "reminder": "W = Whiskey (OUISS KI).",
   "source": {
    "page": 21,
    "quote": "W\n\nWhiskey\n\nOUISS KI"
   },
   "category": "procedures-generales",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q3006",
   "type": "qcm",
   "question": "Quel est le mot de code utilisé pour transmettre le chiffre 0 ?",
   "choices": [
    "NOVENINE",
    "NADAZERO",
    "UNAONE",
    "SOXISIX"
   ],
   "answer": "NADAZERO",
   "explanation": "Dans la table des chiffres, 0 se transmet NADAZERO (prononcé NAH-DAH-ZÉ-ROH). UNAONE est le 1, NOVENINE le 9 et SOXISIX le 6.",
   "reminder": "0 = NADAZERO (NAH-DAH-ZÉ-ROH).",
   "source": {
    "page": 21,
    "quote": "0\n\nNADAZERO\n\nNAH-DAH-ZÉ-ROH"
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3007",
   "type": "qcm",
   "question": "Dans la table d'épellation des lettres, comment les syllabes accentuées de la prononciation sont-elles signalées ?",
   "choices": [
    "Elles sont placées entre crochets",
    "Elles sont écrites en italique",
    "Elles sont soulignées",
    "Elles sont imprimées en gras"
   ],
   "answer": "Elles sont imprimées en gras",
   "explanation": "La note (1) de la colonne prononciation des lettres précise que les syllabes accentuées sont imprimées en gras.",
   "reminder": "Lettres : la syllabe accentuée est en gras.",
   "source": {
    "page": 22,
    "quote": "(1) Les syllabes accentuées sont imprimées en gras."
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3008",
   "type": "qcm",
   "question": "Quelles prononciations la table d'épellation admet-elle pour le mot de code Charlie (lettre C) ?",
   "choices": [
    "CHAR LI ou SHAR LÉ",
    "KHAR LI uniquement",
    "TCHA LI ou CHAR LI",
    "TCHA LI uniquement"
   ],
   "answer": "TCHA LI ou CHAR LI",
   "explanation": "La table indique deux prononciations possibles pour Charlie : TCHA LI ou CHAR LI.",
   "reminder": "Charlie : TCHA LI ou CHAR LI.",
   "source": {
    "page": 21,
    "quote": "C\n\nCharlie\n\nTCHA LI ou CHAR LI"
   },
   "category": "procedures-generales",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q3009",
   "type": "qcm",
   "question": "Quel mot de code correspond au chiffre 5 dans la table d'épellation ?",
   "choices": [
    "SETTESEVEN",
    "PANTAFIVE",
    "TERRATHREE",
    "KARTEFOUR"
   ],
   "answer": "PANTAFIVE",
   "explanation": "Le chiffre 5 se transmet PANTAFIVE (prononcé PAN-TAH-FA-IF). KARTEFOUR est le 4, SETTESEVEN le 7 et TERRATHREE le 3.",
   "reminder": "5 = PANTAFIVE.",
   "source": {
    "page": 22,
    "quote": "5\n\nPANTAFIVE"
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3010",
   "type": "qcm",
   "question": "Quel mot de code utilise-t-on pour transmettre une virgule décimale ?",
   "choices": [
    "POINT",
    "COMMA",
    "STOP",
    "DECIMAL"
   ],
   "answer": "DECIMAL",
   "explanation": "La virgule décimale se transmet DECIMAL (prononcé DE-SI-MAL). STOP est le mot de code du point.",
   "reminder": "Virgule = DECIMAL ; point = STOP.",
   "source": {
    "page": 22,
    "quote": "Virgule décimale\n\nDECIMAL\n\nDE-SI-MAL"
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3012",
   "type": "qcm",
   "question": "Comment se prononce le mot de code du chiffre 8 ?",
   "choices": [
    "OK-TOH-ÉIT",
    "SE-TE-SEV'N",
    "SOK-SI-SIKS",
    "NO-VE-NAÏ-NEU"
   ],
   "answer": "OK-TOH-ÉIT",
   "explanation": "Le chiffre 8 (OKTOEIGHT) se prononce OK-TOH-ÉIT. NO-VE-NAÏ-NEU correspond au 9, SE-TE-SEV'N au 7 et SOK-SI-SIKS au 6.",
   "reminder": "8 = OKTOEIGHT, OK-TOH-ÉIT.",
   "source": {
    "page": 22,
    "quote": "8\n\nOKTOEIGHT OK-TOH-ÉIT"
   },
   "category": "procedures-generales",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q3013",
   "type": "qcm",
   "question": "Selon la note de la table des chiffres, comment les syllabes des mots de code des chiffres sont-elles accentuées ?",
   "choices": [
    "Seule la première syllabe est accentuée",
    "La syllabe accentuée est imprimée en gras",
    "Toutes les syllabes sont accentuées de la même manière",
    "Seule la dernière syllabe est accentuée"
   ],
   "answer": "Toutes les syllabes sont accentuées de la même manière",
   "explanation": "La note (2) précise que, pour les chiffres, toutes les syllabes sont accentuées de la même manière. Le gras ne concerne que la table des lettres (note 1).",
   "reminder": "Chiffres : toutes les syllabes ont le même accent.",
   "source": {
    "page": 22,
    "quote": "(2) Toutes les syllabes sont accentuées de la même manière."
   },
   "category": "procedures-generales",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q3014",
   "type": "qcm",
   "question": "Dans l'ordre de priorité des communications radiotéléphoniques, quelle catégorie occupe la troisième place ?",
   "choices": [
    "SÉCURITÉ (communications de sécurité)",
    "Communications de routine",
    "PAN PAN (communications d'urgence)",
    "MAYDAY (communications de détresse)"
   ],
   "answer": "SÉCURITÉ (communications de sécurité)",
   "explanation": "L'ordre est : 1. MAYDAY (détresse), 2. PAN PAN (urgence), 3. SÉCURITÉ (sécurité), 4. autres communications (routine). PAN PAN passe donc avant SÉCURITÉ.",
   "reminder": "Priorité : MAYDAY > PAN PAN > SÉCURITÉ > routine.",
   "source": {
    "page": 22,
    "quote": "L’ordre de priorité des communications radiotéléphoniques est le suivant :\n\n1.\n\nMAYDAY (Communications de détresse)\n\n2.\n\nPAN PAN (Communications d’urgence)\n\n3.\n\nSÉCURITÉ (Communications de sécurité)\n\n4.\n\nAutres communications (Communications de routine)"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "facile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 232\" width=\"460\" height=\"232\" font-family=\"Arial, sans-serif\"><rect x=\"0\" y=\"0\" width=\"460\" height=\"232\" fill=\"#f8fbff\"/><text x=\"230\" y=\"28\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#1a2a6c\">Ordre de priorité des communications</text><rect x=\"20\" y=\"44\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"64\" font-size=\"13\" fill=\"#102030\">1. MAYDAY - Communications de détresse</text><rect x=\"20\" y=\"82\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"102\" font-size=\"13\" fill=\"#102030\">2. PAN PAN - Communications d'urgence</text><rect x=\"20\" y=\"120\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"140\" font-size=\"13\" fill=\"#102030\">3. SÉCURITÉ - Communications de sécurité</text><rect x=\"20\" y=\"158\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"178\" font-size=\"13\" fill=\"#102030\">4. Autres communications - Routine</text><text x=\"230\" y=\"220\" text-anchor=\"middle\" font-size=\"12\" fill=\"#444\">1 = priorité la plus haute</text></svg>",
    "placement": "explanation",
    "alt": "Liste de l'ordre de priorité : 1 MAYDAY détresse, 2 PAN PAN urgence, 3 SÉCURITÉ, 4 routine."
   },
   "kind": "memoire"
  },
  {
   "id": "Q3015",
   "type": "qcm",
   "question": "À quel type de communication correspond le signal PAN PAN ?",
   "choices": [
    "Communications de détresse",
    "Communications d'urgence",
    "Communications de routine",
    "Communications de sécurité"
   ],
   "answer": "Communications d'urgence",
   "explanation": "PAN PAN annonce les communications d'urgence, deuxième dans l'ordre de priorité. MAYDAY annonce la détresse et SÉCURITÉ la sécurité.",
   "reminder": "PAN PAN = urgence (priorité n°2).",
   "source": {
    "page": 22,
    "quote": "2.\n\nPAN PAN (Communications d’urgence)"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q3016",
   "type": "qcm",
   "question": "D'après les exemples du manuel, un navire en panne par temps de tempête et qui risque de s'échouer émet quel type de communication ?",
   "choices": [
    "Une communication d'urgence (PAN PAN)",
    "Une communication de routine",
    "Une communication de sécurité (SÉCURITÉ)",
    "Une communication de détresse (MAYDAY)"
   ],
   "answer": "Une communication de détresse (MAYDAY)",
   "explanation": "L'exemple du manuel classe la panne par tempête avec risque d'échouement en détresse (MAYDAY). La panne par vent de force 5 en zone de trafic relève, elle, de l'urgence.",
   "reminder": "Panne + tempête + risque d'échouement = MAYDAY.",
   "source": {
    "page": 22,
    "quote": "Un navire est en panne par temps de tempête et risque de s’échouer, il émet une communication de détresse (MAYDAY)."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3017",
   "type": "qcm",
   "question": "D'après les exemples du manuel, un navire en panne par un vent de force 5 dans une zone de trafic maritime émet :",
   "choices": [
    "Une communication d'urgence (PAN PAN)",
    "Une communication de sécurité (SECURITY)",
    "Une communication de détresse (MAYDAY)",
    "Un relais de détresse (MAYDAY RELAY)"
   ],
   "answer": "Une communication d'urgence (PAN PAN)",
   "explanation": "Dans l'exemple du manuel, la panne par vent de force 5 en zone de trafic maritime donne lieu à une communication d'urgence (PAN PAN), pas à un MAYDAY réservé au danger imminent.",
   "reminder": "Panne + force 5 + zone de trafic = PAN PAN.",
   "source": {
    "page": 22,
    "quote": "Un navire est en panne par un vent de force 5 dans une zone de trafic maritime, il émet une communication d’urgence (PAN PAN)."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3018",
   "type": "qcm",
   "question": "D'après les exemples du manuel, quel message émet un navire en panne par temps calme dans une zone à faible trafic maritime ?",
   "choices": [
    "Une communication d'urgence (PAN PAN)",
    "Une communication de détresse (MAYDAY)",
    "Aucune communication n'est prévue",
    "Une communication de sécurité (SECURITY)"
   ],
   "answer": "Une communication de sécurité (SECURITY)",
   "explanation": "L'exemple du manuel indique que la panne par temps calme en zone à faible trafic donne lieu à une communication de sécurité (SECURITY).",
   "reminder": "Panne + temps calme + faible trafic = SÉCURITÉ.",
   "source": {
    "page": 22,
    "quote": "Un navire est en panne par temps calme dans une zone à faible trafic maritime, il émet une communication de sécurité (SECURITY)."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3019",
   "type": "qcm",
   "question": "À quels messages les stations (à bord et à terre) doivent-elles donner la priorité ?",
   "choices": [
    "Aux messages de navires astreints avant ceux des navires non astreints",
    "Uniquement aux messages concernant la sécurité de la vie humaine sur les voies navigables",
    "À tous les messages traitant de la sécurité de la vie humaine sur les voies navigables, à terre et dans les airs",
    "Aux messages émis par les stations côtières en priorité sur ceux des navires"
   ],
   "answer": "À tous les messages traitant de la sécurité de la vie humaine sur les voies navigables, à terre et dans les airs",
   "explanation": "Le manuel impose de donner la priorité à tous les messages traitant de la sécurité de la vie humaine, sur les voies navigables mais aussi à terre et dans les airs.",
   "reminder": "Priorité à la vie humaine : sur l'eau, à terre et dans les airs.",
   "source": {
    "page": 22,
    "quote": "Les stations (à bord d’un navire et à terre) doivent donner la priorité à tous les messages traitant de la sécurité de la vie humaine sur les voies navigables, à terre et dans les airs."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3020",
   "type": "qcm",
   "question": "Dans quel texte est définie la prononciation des mots clés comme MAYDAY, PAN PAN ou SÉCURITÉ ?",
   "choices": [
    "La convention SOLAS",
    "Le Règlement des radiocommunications",
    "Le règlement général de police",
    "L'arrangement Rainwat"
   ],
   "answer": "Le Règlement des radiocommunications",
   "explanation": "Le manuel précise que la prononciation des mots clés de détresse, d'urgence et de sécurité est définie dans le Règlement des radiocommunications.",
   "reminder": "Prononciation des mots clés : Règlement des radiocommunications.",
   "source": {
    "page": 22,
    "quote": "La prononciation de ces mots clés est précisée dans la suite du document et est définie dans le Règlement des radiocommunications."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q3021",
   "type": "qcm",
   "question": "Comment doivent être utilisés les mots clés comme MAYDAY, PAN PAN ou THIS IS ?",
   "choices": [
    "Traduits dans la langue autorisée sur la voie d'eau",
    "Épelés avec la table d'épellation",
    "Tels quels, sans chercher à les traduire",
    "Traduits en anglais s'ils sont en français"
   ],
   "answer": "Tels quels, sans chercher à les traduire",
   "explanation": "Les mots clés s'utilisent tels quels, sans traduction ; seule la suite de la communication se poursuit dans une langue autorisée sur la voie d'eau.",
   "reminder": "Mots clés : jamais traduits ; la suite dans la langue autorisée.",
   "source": {
    "page": 23,
    "quote": "Ces mots clés sont à utiliser tels quels et sans chercher à les traduire. La suite de la communication doit être poursuivie dans une langue autorisée sur cette voie d’eau."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q3022",
   "type": "qcm",
   "question": "Qui décide s'il s'agit ou non d'une situation de détresse ?",
   "choices": [
    "Le commandant de bord",
    "La station côtière",
    "Le MRCC",
    "Le poste de trafic"
   ],
   "answer": "Le commandant de bord",
   "explanation": "Le manuel attribue cette décision au commandant de bord, y compris pour les dangers à terre.",
   "reminder": "C'est le commandant de bord qui décide de la détresse.",
   "source": {
    "page": 23,
    "quote": "Le commandant de bord décide s'il s'agit ou non d'une situation de détresse."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q3023",
   "type": "qcm",
   "question": "Comment le manuel définit-il une situation de détresse ?",
   "choices": [
    "Une situation de maladie à bord sans que la vie de la personne soit en danger",
    "Une situation de danger imminent pour une personne ou un navire, nécessitant une aide immédiate",
    "Une situation nécessitant un avertissement nautique ou météorologique important",
    "Une situation où la sécurité du navire est menacée sans danger imminent"
   ],
   "answer": "Une situation de danger imminent pour une personne ou un navire, nécessitant une aide immédiate",
   "explanation": "La détresse suppose un danger imminent et une aide immédiate. Les maladies sans danger pour la vie et les dommages sans danger imminent relèvent de l'urgence.",
   "reminder": "Détresse = danger imminent + aide immédiate.",
   "source": {
    "page": 23,
    "quote": "Une situation de détresse est une situation de danger imminent pour une personne ou un navire, nécessitant une aide immédiate."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3024",
   "type": "qcm",
   "question": "Selon le manuel, une prescription peut-elle empêcher quelqu'un de prendre des mesures en vue de sauver des vies humaines ou de parer au danger ?",
   "choices": [
    "Oui, si la station côtière n'a pas donné son autorisation",
    "Non, aucune prescription ne peut l'en empêcher",
    "Oui, s'il n'est pas commandant d'un navire astreint",
    "Oui, si la mesure n'est pas prise sur le canal 16"
   ],
   "answer": "Non, aucune prescription ne peut l'en empêcher",
   "explanation": "Le manuel est explicite : aucune prescription ne peut empêcher quelqu'un de prendre des mesures en vue de sauver des vies humaines ou de parer au danger. Les conditions proposées dans les autres choix n'existent pas.",
   "reminder": "Sauver des vies prime sur toute prescription.",
   "source": {
    "page": 23,
    "quote": "Aucune prescription ne peut empêcher quelqu'un de prendre des mesures en vue de sauver des vies humaines ou de parer au danger."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3025",
   "type": "qcm",
   "question": "Sur les voies de navigation intérieure, sur quel canal le signal de détresse est-il émis en principe ?",
   "choices": [
    "Le canal 16",
    "Le canal 10",
    "Le canal 70",
    "Le canal 85"
   ],
   "answer": "Le canal 10",
   "explanation": "En navigation intérieure, le signal de détresse est en principe émis sur le canal 10, sur le canal d'une écluse proche ou sur un canal attribué par le règlement général de police. Le manuel précise que des règles différentes s'appliquent en mer.",
   "reminder": "Détresse en navigation intérieure : canal 10 en principe.",
   "source": {
    "page": 23,
    "quote": "En principe, le signal de détresse sera émis sur le canal 10, soit sur le canal d’une écluse située à proximité (canal imposé), soit un canal attribué par le règlement général de police."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3026",
   "type": "qcm",
   "question": "Que doivent faire les stations qui ne participent pas à une communication de détresse en cours ?",
   "choices": [
    "Respecter le silence radio",
    "Accuser réception du message",
    "Relayer systématiquement le message (MAYDAY RELAY)",
    "Passer sur le canal 16 et émettre leur position"
   ],
   "answer": "Respecter le silence radio",
   "explanation": "Les stations qui ne participent pas à la communication de détresse doivent respecter le silence radio.",
   "reminder": "Pas concerné par le MAYDAY ? Silence radio.",
   "source": {
    "page": 23,
    "quote": "Pendant une communication de détresse, les stations n'y participant pas doivent respecter le silence radio."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q3027",
   "type": "qcm",
   "question": "Dans l'appel de détresse, combien de fois le signal MAYDAY est-il prononcé ?",
   "choices": [
    "Cinq fois",
    "Deux fois",
    "Trois fois",
    "Une fois"
   ],
   "answer": "Trois fois",
   "explanation": "L'appel de détresse débute par le signal MAYDAY, prononcé m'aider, répété trois fois.",
   "reminder": "Appel de détresse : MAYDAY x3.",
   "source": {
    "page": 23,
    "quote": "Le signal de détresse « MAYDAY » [prononcé m’aider], répété trois fois ;"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "facile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 202\" width=\"460\" height=\"202\" font-family=\"Arial, sans-serif\"><rect x=\"0\" y=\"0\" width=\"460\" height=\"202\" fill=\"#f8fbff\"/><text x=\"230\" y=\"28\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#1a2a6c\">Appel de détresse</text><rect x=\"20\" y=\"44\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"64\" font-size=\"13\" fill=\"#102030\">1. MAYDAY (x3)</text><rect x=\"20\" y=\"82\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"102\" font-size=\"13\" fill=\"#102030\">2. THIS IS / ICI</text><rect x=\"20\" y=\"120\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"140\" font-size=\"13\" fill=\"#102030\">3. Nom du navire en détresse (x3)</text><rect x=\"20\" y=\"158\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"178\" font-size=\"13\" fill=\"#102030\">4. Indicatif d'appel ou autre identification</text></svg>",
    "placement": "explanation",
    "alt": "Structure de l'appel de détresse : MAYDAY trois fois, THIS IS ou ICI, nom du navire trois fois, indicatif d'appel."
   },
   "kind": "memoire"
  },
  {
   "id": "Q3028",
   "type": "qcm",
   "question": "Dans l'appel de détresse, quel élément suit immédiatement les mots « THIS IS » ou « ICI » ?",
   "choices": [
    "La position au point kilométrique",
    "Le nom du navire en détresse, répété trois fois",
    "Le mot RECEIVED",
    "La nature de la détresse"
   ],
   "answer": "Le nom du navire en détresse, répété trois fois",
   "explanation": "L'appel de détresse comprend : MAYDAY x3, THIS IS ou ICI, le nom du navire en détresse x3, puis l'indicatif d'appel. La position et la nature de la détresse viennent dans le message de détresse qui suit.",
   "reminder": "Appel : MAYDAY x3, ICI, nom x3, indicatif.",
   "source": {
    "page": 23,
    "quote": "Les communications de détresse débutent par un appel de détresse :\n• Le signal de détresse « MAYDAY » [prononcé m’aider], répété trois fois ; • Les mots « THIS IS » ou « ICI »\n• Le nom du navire en détresse, répété trois fois ;"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3029",
   "type": "qcm",
   "question": "Dans le message de détresse, quel élément vient juste après l'indicatif d'appel ?",
   "choices": [
    "La nature de la détresse",
    "La position au point kilométrique",
    "Le type d'assistance nécessaire",
    "Le nom de la station relais"
   ],
   "answer": "La position au point kilométrique",
   "explanation": "L'ordre du message de détresse est : MAYDAY, nom, indicatif d'appel, position au point kilométrique, nature de la détresse, type d'assistance, autres informations utiles.",
   "reminder": "Message MAYDAY : qui (nom, indicatif), où (PK), quoi (nature), besoin (assistance).",
   "source": {
    "page": 23,
    "quote": "le nom du navire en détresse ; • l’indicatif d’appel ou toute autre identification ; • la position au point kilométrique ; • la nature de la détresse ;"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 316\" width=\"460\" height=\"316\" font-family=\"Arial, sans-serif\"><rect x=\"0\" y=\"0\" width=\"460\" height=\"316\" fill=\"#f8fbff\"/><text x=\"230\" y=\"28\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#1a2a6c\">Message de détresse (après l'appel)</text><rect x=\"20\" y=\"44\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"64\" font-size=\"13\" fill=\"#102030\">1. MAYDAY</text><rect x=\"20\" y=\"82\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"102\" font-size=\"13\" fill=\"#102030\">2. Nom du navire en détresse</text><rect x=\"20\" y=\"120\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"140\" font-size=\"13\" fill=\"#102030\">3. Indicatif d'appel / identification</text><rect x=\"20\" y=\"158\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#ffe08a\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"178\" font-size=\"13\" fill=\"#102030\">4. Position au point kilométrique</text><rect x=\"20\" y=\"196\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"216\" font-size=\"13\" fill=\"#102030\">5. Nature de la détresse</text><rect x=\"20\" y=\"234\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"254\" font-size=\"13\" fill=\"#102030\">6. Type d'assistance nécessaire</text><rect x=\"20\" y=\"272\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"292\" font-size=\"13\" fill=\"#102030\">7. Autres informations utiles</text></svg>",
    "placement": "explanation",
    "alt": "Les sept éléments du message de détresse dans l'ordre, la position au point kilométrique étant mise en évidence."
   },
   "kind": "memoire"
  },
  {
   "id": "Q3031",
   "type": "qcm",
   "question": "Quel élément termine le message de détresse ?",
   "choices": [
    "Le mot PRUDENCE",
    "Les mots SILENCE FINI",
    "D'autres informations utiles",
    "Le mot RECEIVED"
   ],
   "answer": "D'autres informations utiles",
   "explanation": "Le message de détresse se termine par le type d'assistance nécessaire puis d'autres informations utiles. RECEIVED appartient à l'accusé de réception et SILENCE FINI à la fin de la communication de détresse.",
   "reminder": "Le message MAYDAY finit par l'assistance requise et les autres infos utiles.",
   "source": {
    "page": 23,
    "quote": "le type d’assistance nécessaire ; • d’autres informations utiles."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q3032",
   "type": "qcm",
   "question": "Quel signal utilise une station qui n'est pas elle-même en détresse pour relayer un appel de détresse ?",
   "choices": [
    "PAN PAN, répété trois fois",
    "SILENCE MAYDAY, répété deux fois",
    "MAYDAY, répété une fois",
    "MAYDAY RELAY, répété trois fois"
   ],
   "answer": "MAYDAY RELAY, répété trois fois",
   "explanation": "Le relais d'un appel de détresse débute par MAYDAY RELAY (prononcé m'aider relais), répété trois fois.",
   "reminder": "Relais de détresse : MAYDAY RELAY x3.",
   "source": {
    "page": 23,
    "quote": "le signal de détresse « MAYDAY RELAY » [prononcé m’aider relais], répété trois\nfois ;"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "facile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 240\" width=\"460\" height=\"240\" font-family=\"Arial, sans-serif\"><rect x=\"0\" y=\"0\" width=\"460\" height=\"240\" fill=\"#f8fbff\"/><text x=\"230\" y=\"28\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#1a2a6c\">Relais d'un appel de détresse</text><rect x=\"20\" y=\"44\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"64\" font-size=\"13\" fill=\"#102030\">1. MAYDAY RELAY (x3)</text><rect x=\"20\" y=\"82\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"102\" font-size=\"13\" fill=\"#102030\">2. ALL STATIONS ou station côtière (x3)</text><rect x=\"20\" y=\"120\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"140\" font-size=\"13\" fill=\"#102030\">3. THIS IS / ICI</text><rect x=\"20\" y=\"158\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"178\" font-size=\"13\" fill=\"#102030\">4. Nom de la station relais (x3)</text><rect x=\"20\" y=\"196\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"216\" font-size=\"13\" fill=\"#102030\">5. Indicatif de la station relais</text></svg>",
    "placement": "explanation",
    "alt": "Structure du relais de détresse : MAYDAY RELAY trois fois, ALL STATIONS ou station côtière trois fois, THIS IS ou ICI, nom de la station relais trois fois, indicatif."
   },
   "kind": "memoire"
  },
  {
   "id": "Q3033",
   "type": "qcm",
   "question": "Dans un relais de détresse, qu'est-ce qui suit le signal MAYDAY RELAY ?",
   "choices": [
    "Le mot PRUDENCE",
    "Les mots ALL STATIONS ou le nom de la station côtière, répétés trois fois",
    "Le nom du navire en détresse, répété trois fois",
    "La position de la station relais"
   ],
   "answer": "Les mots ALL STATIONS ou le nom de la station côtière, répétés trois fois",
   "explanation": "Après MAYDAY RELAY x3, la station relais prononce ALL STATIONS ou le nom de la station côtière, selon le cas, trois fois, puis THIS IS ou ICI et son propre nom x3.",
   "reminder": "Relais : MAYDAY RELAY x3, puis ALL STATIONS (ou station côtière) x3.",
   "source": {
    "page": 23,
    "quote": "les mots « ALL STATIONS » ou le nom de la station côtière, selon le cas, répété\ntrois fois ;"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3034",
   "type": "qcm",
   "question": "Dans l'appel de relais de détresse, quel nom est prononcé trois fois après « THIS IS » ou « ICI » ?",
   "choices": [
    "Le nom du navire en détresse",
    "Le nom du MRCC",
    "Le nom de la station relais",
    "Le nom de la station côtière"
   ],
   "answer": "Le nom de la station relais",
   "explanation": "Après THIS IS ou ICI, la station relais se présente : son nom répété trois fois puis son indicatif d'appel.",
   "reminder": "Dans un relais, après ICI : le nom de la station relais x3.",
   "source": {
    "page": 23,
    "quote": "le nom de la station relais, répété trois fois ; • l’indicatif d'appel ou toute autre identification de la station relais."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q3035",
   "type": "qcm",
   "question": "Que doit reprendre, dans la mesure du possible, le message qui suit un appel de relais de détresse ?",
   "choices": [
    "Uniquement la position de la station relais",
    "La liste des stations ayant accusé réception",
    "L'heure de fin du silence radio",
    "Les informations contenues dans l'appel de détresse ou le message de détresse initial"
   ],
   "answer": "Les informations contenues dans l'appel de détresse ou le message de détresse initial",
   "explanation": "L'appel de relais est suivi d'un message de détresse qui reprend, dans la mesure du possible, les informations de l'appel ou du message de détresse initial.",
   "reminder": "Le relais retransmet les infos du MAYDAY initial.",
   "source": {
    "page": 24,
    "quote": "Cet appel est suivi d’un message de détresse lequel, dans la mesure du possible, reprend les informations contenues dans l'appel de détresse ou le message de détresse initial."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3036",
   "type": "qcm",
   "question": "En ce qui concerne les informations nautiques, par qui l'accusé de réception d'un message de détresse est-il transmis ?",
   "choices": [
    "Par la station côtière",
    "Par toute station de navire à proximité",
    "Par le navire en détresse lui-même",
    "Par l'autorité portuaire"
   ],
   "answer": "Par la station côtière",
   "explanation": "Pour les informations nautiques, c'est la station côtière qui transmet l'accusé de réception. En navire-navire, ce sont les stations de navire à proximité.",
   "reminder": "Informations nautiques : accusé de réception par la station côtière.",
   "source": {
    "page": 24,
    "quote": "En ce qui concerne les informations nautiques, l'accusé de réception est transmis par la station côtière."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3037",
   "type": "qcm",
   "question": "En communication navire-autorité portuaire, après combien de temps sans accusé de réception de l'autorité portuaire une station de navire doit-elle prendre la communication de détresse ?",
   "choices": [
    "Cinq minutes",
    "Deux minutes",
    "Trente secondes",
    "Une minute"
   ],
   "answer": "Une minute",
   "explanation": "Il faut attendre l'accusé de réception de l'autorité portuaire. Si aucun accusé n'est transmis dans l'intervalle d'une minute, une station de navire doit prendre la communication de détresse.",
   "reminder": "Autorité portuaire muette pendant 1 minute : un navire prend le relais.",
   "source": {
    "page": 24,
    "quote": "En ce qui concerne les communications navire-autorité portuaire, il faut attendre un accusé de réception de l'autorité portuaire. Si, dans l'intervalle d'une minute, aucun accusé de réception n'est transmis, une station de navire doit prendre la communication de détresse."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3038",
   "type": "qcm",
   "question": "En communication navire-navire, qui doit accuser réception d'un appel de détresse ?",
   "choices": [
    "Uniquement le navire le plus grand",
    "Toute station de navire se trouvant à proximité",
    "Uniquement l'autorité portuaire",
    "Uniquement la station côtière"
   ],
   "answer": "Toute station de navire se trouvant à proximité",
   "explanation": "En navire-navire, l'appel de détresse doit faire l'objet d'un accusé de réception par toute station de navire se trouvant à proximité.",
   "reminder": "Navire-navire : tout navire proche accuse réception.",
   "source": {
    "page": 24,
    "quote": "En ce qui concerne les communications navire-navire, l'appel de détresse doit faire l'objet d'un accusé de réception par toute station de navire se trouvant à proximité."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3039",
   "type": "qcm",
   "question": "Quel mot, placé juste avant le MAYDAY final, confirme l'accusé de réception d'un message de détresse ?",
   "choices": [
    "RECEIVED ou REÇU",
    "ROGER",
    "PRUDENCE",
    "SILENCE FINI"
   ],
   "answer": "RECEIVED ou REÇU",
   "explanation": "L'accusé de réception se compose de : MAYDAY, nom et indicatif de la station en détresse, THIS IS ou ICI, nom et indicatif de la station qui accuse réception, RECEIVED ou REÇU, puis MAYDAY.",
   "reminder": "Accusé de réception : ... RECEIVED (REÇU) ... MAYDAY.",
   "source": {
    "page": 24,
    "quote": "Le mot « RECEIVED » ou « REÇU » ; • Le signal de détresse « MAYDAY »."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "facile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 278\" width=\"460\" height=\"278\" font-family=\"Arial, sans-serif\"><rect x=\"0\" y=\"0\" width=\"460\" height=\"278\" fill=\"#f8fbff\"/><text x=\"230\" y=\"28\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#1a2a6c\">Accusé de réception d'un MAYDAY</text><rect x=\"20\" y=\"44\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"64\" font-size=\"13\" fill=\"#102030\">1. MAYDAY</text><rect x=\"20\" y=\"82\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"102\" font-size=\"13\" fill=\"#102030\">2. Nom + indicatif de la station qui émet l'appel</text><rect x=\"20\" y=\"120\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"140\" font-size=\"13\" fill=\"#102030\">3. THIS IS / ICI</text><rect x=\"20\" y=\"158\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"178\" font-size=\"13\" fill=\"#102030\">4. Nom + indicatif de la station qui accuse réception</text><rect x=\"20\" y=\"196\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#ffe08a\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"216\" font-size=\"13\" fill=\"#102030\">5. RECEIVED / REÇU</text><rect x=\"20\" y=\"234\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"254\" font-size=\"13\" fill=\"#102030\">6. MAYDAY</text></svg>",
    "placement": "explanation",
    "alt": "Structure de l'accusé de réception d'un MAYDAY, avec RECEIVED ou REÇU en avant-dernière position, entre l'identification et le MAYDAY final."
   },
   "kind": "memoire"
  },
  {
   "id": "Q3040",
   "type": "qcm",
   "question": "Dans l'accusé de réception d'un message de détresse, quelle station est identifiée juste après le premier MAYDAY ?",
   "choices": [
    "La station qui accuse réception",
    "Le poste de trafic",
    "La station qui émet l'appel de détresse",
    "La station côtière la plus proche"
   ],
   "answer": "La station qui émet l'appel de détresse",
   "explanation": "Après le premier MAYDAY, on donne le nom puis l'indicatif de la station qui émet l'appel ; la station qui accuse réception ne se nomme qu'après THIS IS ou ICI.",
   "reminder": "Accusé : d'abord la station en détresse, puis ICI + moi.",
   "source": {
    "page": 24,
    "quote": "• Le signal de détresse « MAYDAY »\n• Le nom suivi de l’indicatif d’appel ou de toute autre identification de la station qui émet l’appel ;"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q3041",
   "type": "qcm",
   "question": "Par quels mots commence et se termine une demande de silence radio pendant une communication de détresse ?",
   "choices": [
    "SILENCE MAYDAY",
    "MAYDAY RELAY",
    "PRUDENCE",
    "SILENCE FINI"
   ],
   "answer": "SILENCE MAYDAY",
   "explanation": "Le message de silence radio se compose de SILENCE MAYDAY, puis du nom du perturbateur ou de ALL STATIONS, puis à nouveau de SILENCE MAYDAY. SILENCE FINI sert au contraire à lever le silence.",
   "reminder": "Imposer le silence : SILENCE MAYDAY ; lever le silence : SILENCE FINI.",
   "source": {
    "page": 24,
    "quote": "Les mots « SILENCE MAYDAY » [prononcé silence m’aider] ;"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "facile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 164\" width=\"460\" height=\"164\" font-family=\"Arial, sans-serif\"><rect x=\"0\" y=\"0\" width=\"460\" height=\"164\" fill=\"#f8fbff\"/><text x=\"230\" y=\"28\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#1a2a6c\">Demande de silence radio</text><rect x=\"20\" y=\"44\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"64\" font-size=\"13\" fill=\"#102030\">1. SILENCE MAYDAY</text><rect x=\"20\" y=\"82\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"102\" font-size=\"13\" fill=\"#102030\">2. Bateau ou station perturbatrice / ALL STATIONS</text><rect x=\"20\" y=\"120\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"140\" font-size=\"13\" fill=\"#102030\">3. SILENCE MAYDAY</text></svg>",
    "placement": "explanation",
    "alt": "Structure de la demande de silence radio : SILENCE MAYDAY, nom du perturbateur ou ALL STATIONS, SILENCE MAYDAY."
   },
   "kind": "memoire"
  },
  {
   "id": "Q3042",
   "type": "qcm",
   "question": "Selon le manuel, qui peut imposer le silence radio aux stations qui brouilleraient une communication de détresse ?",
   "choices": [
    "La station en détresse, mais aucune autre station",
    "Le poste de trafic, la centrale de secteur, l'unité qui coordonne les sauvetages, la station en détresse ou une autre station",
    "Le poste de trafic et la centrale de secteur, mais jamais la station en détresse",
    "Les seules stations ayant accusé réception du MAYDAY"
   ],
   "answer": "Le poste de trafic, la centrale de secteur, l'unité qui coordonne les sauvetages, la station en détresse ou une autre station",
   "explanation": "Le manuel énumère plusieurs stations habilitées : poste de trafic, centrale de secteur, unité de coordination des sauvetages, station en détresse ou une autre station.",
   "reminder": "Le silence radio peut être imposé par plusieurs stations, pas seulement la station en détresse.",
   "source": {
    "page": 24,
    "quote": "Le poste de trafic, la centrale de secteur, l’unité qui coordonne les opérations de sauvetage, la station en détresse ou une autre station peuvent imposer le silence radio aux stations qui brouilleraient cette communication."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3043",
   "type": "qcm",
   "question": "Jusqu'à quand une station informée d'une demande de silence radio, et qui n'est pas en détresse, doit-elle s'abstenir d'émettre sur les fréquences de détresse ?",
   "choices": [
    "Pendant une minute après l'accusé de réception",
    "Pendant 10 minutes",
    "Jusqu'à réception d'un message indiquant qu'elle peut reprendre les communications normales",
    "Jusqu'à ce que le navire en détresse ne soit plus audible"
   ],
   "answer": "Jusqu'à réception d'un message indiquant qu'elle peut reprendre les communications normales",
   "explanation": "L'interdiction d'émettre sur les fréquences de détresse dure tant qu'un message n'a pas indiqué que les communications normales peuvent reprendre (message SILENCE FINI).",
   "reminder": "Silence radio jusqu'au message de reprise (SILENCE FINI).",
   "source": {
    "page": 24,
    "quote": "Tant qu'elles n'ont pas reçu un message leur indiquant qu'elles peuvent reprendre les communications radiotéléphoniques normales, il est interdit à toutes les stations qui ont connaissance de cette demande de silence radio, et qui ne sont pas elles-mêmes en détresse, d'émettre sur les fréquences sur lesquelles ont lieu les communications de détresse."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3044",
   "type": "qcm",
   "question": "Par quel signal est introduite l'autorisation d'un trafic restreint de radiocommunications pendant une détresse ?",
   "choices": [
    "SILENCE FINI",
    "SÉCURITÉ",
    "PAN PAN",
    "PRUDENCE"
   ],
   "answer": "PRUDENCE",
   "explanation": "Le trafic restreint est autorisé par le signal PRUDENCE. SILENCE FINI marque la fin de la communication de détresse.",
   "reminder": "Trafic restreint = PRUDENCE ; fin de détresse = SILENCE FINI.",
   "source": {
    "page": 24,
    "quote": "L’autorisation d’un trafic restreint de radiocommunications est introduite par le signal\n« PRUDENCE »."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3045",
   "type": "qcm",
   "question": "Dans la procédure PRUDENCE, comment se prononce l'appel CQ ?",
   "choices": [
    "CHARLIE QUEBEC",
    "CHARLIE QUATRE",
    "COPY QUEBEC",
    "CHARLIE KILO"
   ],
   "answer": "CHARLIE QUEBEC",
   "explanation": "Dans la procédure PRUDENCE, l'appel « à tous » ou CQ est prononcé CHARLIE QUEBEC et répété 3 fois.",
   "reminder": "CQ = « à tous », prononcé CHARLIE QUEBEC, x3.",
   "source": {
    "page": 25,
    "quote": "L’appel « à tous » ou CQ (prononcé CHARLIE QUEBEC), répété 3 fois"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3046",
   "type": "qcm",
   "question": "Dans la procédure PRUDENCE, quel mot peut remplacer ICI ?",
   "choices": [
    "AT, prononcé ALFA TANGO",
    "TO, prononcé TANGO OSCAR",
    "DE, prononcé DELTA ECHO",
    "CQ, prononcé CHARLIE QUEBEC"
   ],
   "answer": "DE, prononcé DELTA ECHO",
   "explanation": "La procédure PRUDENCE prévoit les mots ICI ou le mot DE, prononcé DELTA ECHO.",
   "reminder": "PRUDENCE : ICI ou DE (DELTA ECHO).",
   "source": {
    "page": 25,
    "quote": "Les mots ICI (ou le mot DE prononcé DELTA ECHO)"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q3047",
   "type": "qcm",
   "question": "Dans la procédure PRUDENCE, quel élément précède immédiatement l'identification de la station en détresse ?",
   "choices": [
    "Le mot PRUDENCE",
    "L'heure à laquelle le message de détresse est émis",
    "L'appel « à tous » ou CQ",
    "Le signal de détresse MAYDAY"
   ],
   "answer": "L'heure à laquelle le message de détresse est émis",
   "explanation": "La procédure PRUDENCE suit l'ordre : MAYDAY, appel « à tous » ou CQ (3 fois), ICI ou DE, identification de la station transmettant le message, heure à laquelle le message de détresse est émis, identification de la station en détresse, puis le mot PRUDENCE. L'heure précède donc l'identification de la station en détresse.",
   "reminder": "PRUDENCE : ... heure du message de détresse, station en détresse, puis PRUDENCE.",
   "source": {
    "page": 25,
    "quote": "L'heure à laquelle le message de détresse est émis • L’identification de la station en détresse"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "difficile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 316\" width=\"460\" height=\"316\" font-family=\"Arial, sans-serif\"><rect x=\"0\" y=\"0\" width=\"460\" height=\"316\" fill=\"#f8fbff\"/><text x=\"230\" y=\"28\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#1a2a6c\">Procédure PRUDENCE</text><rect x=\"20\" y=\"44\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"64\" font-size=\"13\" fill=\"#102030\">1. MAYDAY</text><rect x=\"20\" y=\"82\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"102\" font-size=\"13\" fill=\"#102030\">2. À tous / CQ (x3)</text><rect x=\"20\" y=\"120\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"140\" font-size=\"13\" fill=\"#102030\">3. ICI / DE</text><rect x=\"20\" y=\"158\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"178\" font-size=\"13\" fill=\"#102030\">4. Identification de la station émettrice</text><rect x=\"20\" y=\"196\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#ffe08a\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"216\" font-size=\"13\" fill=\"#102030\">5. Heure d'émission du message</text><rect x=\"20\" y=\"234\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"254\" font-size=\"13\" fill=\"#102030\">6. Identification de la station en détresse</text><rect x=\"20\" y=\"272\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"292\" font-size=\"13\" fill=\"#102030\">7. PRUDENCE</text></svg>",
    "placement": "explanation",
    "alt": "Les sept éléments de la procédure PRUDENCE, l'heure d'émission du message (élément 5) étant mise en évidence."
   },
   "kind": "memoire"
  },
  {
   "id": "Q3048",
   "type": "qcm",
   "question": "Quelle station doit faire transmettre le message indiquant que la communication de détresse est terminée ?",
   "choices": [
    "La première station ayant accusé réception",
    "Le navire qui a relayé le MAYDAY",
    "Toute station de navire à proximité",
    "La station qui a demandé le silence radio"
   ],
   "answer": "La station qui a demandé le silence radio",
   "explanation": "Le manuel confie cette tâche à la station qui a demandé le silence radio.",
   "reminder": "Qui a imposé le silence le lève.",
   "source": {
    "page": 25,
    "quote": "La station qui a demandé le silence radio doit faire transmettre un message indiquant que la communication de détresse est terminée."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3049",
   "type": "qcm",
   "question": "Par quels mots se termine le message de fin de la communication de détresse ?",
   "choices": [
    "OUT",
    "SILENCE MAYDAY",
    "SILENCE FINI",
    "PRUDENCE"
   ],
   "answer": "SILENCE FINI",
   "explanation": "Le message de fin de détresse se termine par l'heure de la notification puis les mots SILENCE FINI. SILENCE MAYDAY sert à imposer le silence.",
   "reminder": "Fin de la détresse : SILENCE FINI.",
   "source": {
    "page": 25,
    "quote": "L’heure à laquelle la notification a lieu\n• Les mots « SILENCE FINI »."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "facile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 316\" width=\"460\" height=\"316\" font-family=\"Arial, sans-serif\"><rect x=\"0\" y=\"0\" width=\"460\" height=\"316\" fill=\"#f8fbff\"/><text x=\"230\" y=\"28\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#1a2a6c\">Fin de la communication de détresse</text><rect x=\"20\" y=\"44\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"64\" font-size=\"13\" fill=\"#102030\">1. MAYDAY</text><rect x=\"20\" y=\"82\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"102\" font-size=\"13\" fill=\"#102030\">2. ALL STATIONS (x3)</text><rect x=\"20\" y=\"120\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"140\" font-size=\"13\" fill=\"#102030\">3. THIS IS / ICI</text><rect x=\"20\" y=\"158\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"178\" font-size=\"13\" fill=\"#102030\">4. Nom de la station appelante (x3)</text><rect x=\"20\" y=\"196\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"216\" font-size=\"13\" fill=\"#102030\">5. Indicatif de la station appelante</text><rect x=\"20\" y=\"234\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"254\" font-size=\"13\" fill=\"#102030\">6. Heure de la notification</text><rect x=\"20\" y=\"272\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#ffe08a\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"292\" font-size=\"13\" fill=\"#102030\">7. SILENCE FINI</text></svg>",
    "placement": "explanation",
    "alt": "Structure du message de fin de détresse, se terminant par l'heure puis SILENCE FINI."
   },
   "kind": "memoire"
  },
  {
   "id": "Q3050",
   "type": "qcm",
   "question": "Dans le message de fin de communication de détresse, combien de fois les mots ALL STATIONS sont-ils répétés ?",
   "choices": [
    "Trois fois",
    "Ils ne sont pas prononcés",
    "Une fois",
    "Deux fois"
   ],
   "answer": "Trois fois",
   "explanation": "Le message de fin de détresse commence par MAYDAY puis les mots ALL STATIONS répétés trois fois.",
   "reminder": "Fin de détresse : MAYDAY, ALL STATIONS x3.",
   "source": {
    "page": 25,
    "quote": "Le signal de détresse « MAYDAY » • Les mots « ALL STATIONS », répétés trois fois"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3051",
   "type": "qcm",
   "question": "Selon le manuel, un échouement sans fuite de cargaison relève de quel type de communication ?",
   "choices": [
    "Communication de routine",
    "Message de sécurité (SÉCURITÉ)",
    "Communication de détresse (MAYDAY)",
    "Communication d'urgence (PAN PAN)"
   ],
   "answer": "Communication d'urgence (PAN PAN)",
   "explanation": "Les dommages aux navires sans danger imminent, comme un échouement sans fuite de cargaison, sont cités comme exemple de communication d'urgence.",
   "reminder": "Échouement sans fuite = dommage sans danger imminent = PAN PAN.",
   "source": {
    "page": 25,
    "quote": "des dommages aux navires sans qu'il y ait danger imminent (par exemple, un échouement sans fuite de cargaison)."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3052",
   "type": "qcm",
   "question": "Une personne est malade à bord sans que sa vie soit en danger. Quel type de communication le manuel prévoit-il ?",
   "choices": [
    "Un message de sécurité (SÉCURITÉ)",
    "Une communication d'urgence (PAN PAN)",
    "Une communication de détresse (MAYDAY)",
    "Un relais de détresse (MAYDAY RELAY)"
   ],
   "answer": "Une communication d'urgence (PAN PAN)",
   "explanation": "Les maladies de personnes sans danger pour leur vie font partie des exemples de communications d'urgence. Le MAYDAY suppose un danger imminent.",
   "reminder": "Malade sans danger de mort = PAN PAN.",
   "source": {
    "page": 25,
    "quote": "Les communications d’urgence concernent une situation dans laquelle doivent être transmis des messages traitant de la sécurité de l'équipage ou du navire, tels que des maladies de personnes sans que leur vie ne soit en danger,"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q3053",
   "type": "qcm",
   "question": "Combien de fois le signal d'urgence PAN PAN est-il répété au début d'une communication d'urgence ?",
   "choices": [
    "Une fois",
    "Deux fois",
    "Trois fois",
    "Quatre fois"
   ],
   "answer": "Trois fois",
   "explanation": "La communication d'urgence commence par le signal PAN PAN répété trois fois, suivi du nom de la station appelée ou de ALL STATIONS, lui aussi trois fois.",
   "reminder": "Urgence : PAN PAN x3.",
   "source": {
    "page": 25,
    "quote": "Le signal d'urgence « PAN PAN », répété trois fois ;"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "facile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 278\" width=\"460\" height=\"278\" font-family=\"Arial, sans-serif\"><rect x=\"0\" y=\"0\" width=\"460\" height=\"278\" fill=\"#f8fbff\"/><text x=\"230\" y=\"28\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#1a2a6c\">Communication d'urgence</text><rect x=\"20\" y=\"44\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"64\" font-size=\"13\" fill=\"#102030\">1. PAN PAN (x3)</text><rect x=\"20\" y=\"82\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"102\" font-size=\"13\" fill=\"#102030\">2. Station appelée ou ALL STATIONS (x3)</text><rect x=\"20\" y=\"120\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"140\" font-size=\"13\" fill=\"#102030\">3. THIS IS / ICI</text><rect x=\"20\" y=\"158\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"178\" font-size=\"13\" fill=\"#102030\">4. Nom de la station appelante (x3)</text><rect x=\"20\" y=\"196\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"216\" font-size=\"13\" fill=\"#102030\">5. Indicatif / identification</text><rect x=\"20\" y=\"234\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"254\" font-size=\"13\" fill=\"#102030\">6. Message d'urgence (motif, position...)</text></svg>",
    "placement": "explanation",
    "alt": "Structure de la communication d'urgence : PAN PAN trois fois, station appelée ou ALL STATIONS trois fois, THIS IS ou ICI, nom de l'appelant trois fois, indicatif, message d'urgence."
   },
   "kind": "memoire"
  },
  {
   "id": "Q3054",
   "type": "qcm",
   "question": "Que contient le message d'urgence qui conclut une communication PAN PAN ?",
   "choices": [
    "Un avertissement météorologique important",
    "Le motif de la communication d'urgence, avec indication de la position",
    "Uniquement l'heure de l'événement",
    "Les mots SILENCE FINI"
   ],
   "answer": "Le motif de la communication d'urgence, avec indication de la position",
   "explanation": "Le message d'urgence donne le motif de la communication d'urgence avec indication de la position, etc.",
   "reminder": "Message PAN PAN : le motif + la position.",
   "source": {
    "page": 25,
    "quote": "Message d'urgence (Motif de la communication d'urgence, avec indication de la\nposition, etc.)."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3055",
   "type": "qcm",
   "question": "Qu'est-ce qu'un message de sécurité selon le manuel ?",
   "choices": [
    "Un message signalant un danger imminent pour un navire",
    "Un message de test de l'installation radio",
    "Un message signalant une maladie à bord sans danger de mort",
    "Un message contenant un avertissement nautique ou météorologique important"
   ],
   "answer": "Un message contenant un avertissement nautique ou météorologique important",
   "explanation": "Le message de sécurité contient un avertissement nautique important ou un avertissement météorologique important. Les maladies sans danger de mort relèvent de l'urgence.",
   "reminder": "SÉCURITÉ = avertissement nautique ou météo important.",
   "source": {
    "page": 25,
    "quote": "Un message de sécurité est un message contenant un avertissement nautique important ou un avertissement météorologique important."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q3056",
   "type": "qcm",
   "question": "Comment débute un message de sécurité ?",
   "choices": [
    "Par le signal SÉCURITÉ, répété trois fois",
    "Par le signal MAYDAY, répété trois fois",
    "Par le signal PAN PAN, répété trois fois",
    "Par le nom de la station appelée, répété une fois"
   ],
   "answer": "Par le signal SÉCURITÉ, répété trois fois",
   "explanation": "Le message de sécurité débute par le signal SÉCURITÉ (prononcé sécurité) répété trois fois, puis le nom de la station appelée ou ALL STATIONS trois fois.",
   "reminder": "Sécurité : SÉCURITÉ x3, puis ALL STATIONS x3.",
   "source": {
    "page": 26,
    "quote": "le signal de sécurité « SÉCURITÉ » [prononcé sécurité], répété trois fois ;"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "facile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 240\" width=\"460\" height=\"240\" font-family=\"Arial, sans-serif\"><rect x=\"0\" y=\"0\" width=\"460\" height=\"240\" fill=\"#f8fbff\"/><text x=\"230\" y=\"28\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#1a2a6c\">Message de sécurité</text><rect x=\"20\" y=\"44\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"64\" font-size=\"13\" fill=\"#102030\">1. SÉCURITÉ (x3)</text><rect x=\"20\" y=\"82\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"102\" font-size=\"13\" fill=\"#102030\">2. Station appelée ou ALL STATIONS (x3)</text><rect x=\"20\" y=\"120\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"140\" font-size=\"13\" fill=\"#102030\">3. THIS IS / ICI</text><rect x=\"20\" y=\"158\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"178\" font-size=\"13\" fill=\"#102030\">4. Nom de la station appelante (x3)</text><rect x=\"20\" y=\"196\" width=\"420\" height=\"30\" rx=\"6\" fill=\"#dceefb\" stroke=\"#2b6cb0\"/><text x=\"34\" y=\"216\" font-size=\"13\" fill=\"#102030\">5. Indicatif / identification</text></svg>",
    "placement": "explanation",
    "alt": "Structure du message de sécurité : SÉCURITÉ trois fois, station appelée ou ALL STATIONS trois fois, THIS IS ou ICI, nom de la station appelante trois fois, indicatif."
   },
   "kind": "memoire"
  },
  {
   "id": "Q3057",
   "type": "qcm",
   "question": "Dans quelle langue le message de sécurité lui-même peut-il se poursuivre après l'annonce ?",
   "choices": [
    "Dans la langue locale, après l'annonce en anglais",
    "Uniquement avec la table d'épellation",
    "Obligatoirement en anglais",
    "Obligatoirement en français"
   ],
   "answer": "Dans la langue locale, après l'annonce en anglais",
   "explanation": "Le manuel précise que le message de sécurité peut se poursuivre dans la langue locale après l'annonce (en anglais).",
   "reminder": "Sécurité : annonce en anglais, suite en langue locale.",
   "source": {
    "page": 26,
    "quote": "Le message de sécurité lui-même peut se poursuivre dans la langue locale après l'annonce (en anglais)."
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3058",
   "type": "qcm",
   "question": "Dans une communication de routine navire-terre ou navire-navire, quel élément est éventuellement non requis dans le port ?",
   "choices": [
    "Le nom du navire appelant",
    "Le nom de la station appelée",
    "Le sens de navigation",
    "L'objet de la communication"
   ],
   "answer": "Le sens de navigation",
   "explanation": "Dans le schéma d'appel de routine, le sens de navigation est indiqué comme éventuellement non requis dans le port.",
   "reminder": "Au port, le sens de navigation peut être omis.",
   "source": {
    "page": 26,
    "quote": "Sens de navigation (éventuellement non requis dans le port) ;"
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3059",
   "type": "qcm",
   "question": "Dans une communication de routine navire-terre, quels éléments le navire donne-t-il après « THIS IS » ou « ICI » ?",
   "choices": [
    "Son code CIAC puis son numéro de téléphone",
    "Uniquement son indicatif d'appel",
    "Le signal SÉCURITÉ puis sa position",
    "Le type de navire et son nom, puis sa position"
   ],
   "answer": "Le type de navire et son nom, puis sa position",
   "explanation": "Après THIS IS ou ICI, le navire indique son type et son nom (répété jusqu'à trois fois), sa position, son sens de navigation et l'objet de la communication.",
   "reminder": "Routine navire-terre : qui j'appelle, ICI, type + nom, position, sens, objet.",
   "source": {
    "page": 26,
    "quote": "Type de navire et • Nom du navire appelant (répété jusqu’à trois fois) ; • Position du navire"
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3060",
   "type": "qcm",
   "question": "Dans une communication de routine terre-navire, quelle formule peut remplacer le nom de la station appelée ?",
   "choices": [
    "MAYDAY RELAY",
    "ALL STATIONS ou APPEL À TOUS LES NAVIRES",
    "SÉCURITÉ",
    "CQ PRUDENCE"
   ],
   "answer": "ALL STATIONS ou APPEL À TOUS LES NAVIRES",
   "explanation": "En sens terre-navire, la station côtière peut appeler une station nommée ou utiliser ALL STATIONS ou APPEL À TOUS LES NAVIRES (répétés jusqu'à trois fois).",
   "reminder": "Terre-navire : nom de la station ou ALL STATIONS / APPEL À TOUS LES NAVIRES.",
   "source": {
    "page": 26,
    "quote": "jusqu’à trois fois) ou les mots « ALL STATIONS » ou « APPEL À TOUS LES NAVIRES » (répétés jusqu’à trois"
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3061",
   "type": "qcm",
   "question": "Si la liaison est bonne, combien de fois prononce-t-on, lors de l'appel, le nom de la station appelée et celui de la station appelante ?",
   "choices": [
    "Station appelée : une fois ; station appelante : deux fois",
    "Les deux noms trois fois",
    "Station appelée : deux fois ; station appelante : une fois",
    "Les deux noms une seule fois"
   ],
   "answer": "Station appelée : une fois ; station appelante : deux fois",
   "explanation": "Avec une bonne liaison, le nom de la station appelée est prononcé une fois et celui de la station appelante (ou type et nom du navire appelant) deux fois.",
   "reminder": "Bonne liaison : appelé x1, appelant x2.",
   "source": {
    "page": 26,
    "quote": "Si la liaison est bonne, lors de l’appel, le nom de la station appelée doit être prononcé une fois et le nom de la station appelante ou le type de navire et le nom du navire appelant doit être répété deux fois."
   },
   "category": "procedures-generales",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q3062",
   "type": "qcm",
   "question": "Une fois la liaison établie, combien de fois faut-il prononcer le nom de la station de navire ou de la station côtière ?",
   "choices": [
    "Deux fois",
    "Il n'est plus nécessaire de le prononcer",
    "Trois fois",
    "Une seule fois"
   ],
   "answer": "Une seule fois",
   "explanation": "Une fois la liaison établie, il suffit de prononcer une seule fois le nom de la station de navire ou de la station côtière.",
   "reminder": "Liaison établie : le nom une seule fois.",
   "source": {
    "page": 26,
    "quote": "Une fois que la liaison est établie, il suffit de prononcer une seule fois le nom de la station de navire ou de la station côtière."
   },
   "category": "procedures-generales",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q3063",
   "type": "qcm",
   "question": "Quand des essais radio peuvent-ils être effectués ?",
   "choices": [
    "À tout moment sur le canal 16",
    "Lorsqu'aucune autre communication n'est en cours, et pas sur le canal 16",
    "Uniquement sur le canal 16, la nuit",
    "Pendant une communication de détresse pour vérifier l'installation"
   ],
   "answer": "Lorsqu'aucune autre communication n'est en cours, et pas sur le canal 16",
   "explanation": "Les essais n'ont pas leur place dans le trafic ordinaire, certainement pas sur le canal 16, et ne peuvent être faits que lorsqu'aucune autre communication n'est en cours.",
   "reminder": "Essai : jamais sur le 16, et seulement si le canal est libre.",
   "source": {
    "page": 26,
    "quote": "Ces communications n’ont pas leur place dans le trafic ordinaire, et certainement pas sur le canal 16. Ces essais ne peuvent donc être effectués que lorsqu'aucune autre communication n'est en cours."
   },
   "category": "procedures-generales",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q3064",
   "type": "qcm",
   "question": "Quelle est la durée maximale d'un signal test selon le manuel ?",
   "choices": [
    "2,5 secondes",
    "1 minute",
    "10 secondes",
    "30 secondes"
   ],
   "answer": "10 secondes",
   "explanation": "Les signaux tests doivent être réduits au minimum et ne doivent pas dépasser 10 secondes. Les 2,5 secondes concernent le cycle de la double veille.",
   "reminder": "Signal test : 10 secondes maximum.",
   "source": {
    "page": 26,
    "quote": "Lorsqu'il est nécessaire pour une station de transmettre des signaux tests, ceux-ci doivent être réduits au minimum et ne doivent pas dépasser 10 secondes."
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3065",
   "type": "qcm",
   "question": "Que doivent comporter les signaux tests ?",
   "choices": [
    "Le nom de la station suivi des mots « en essai », prononcés lentement et distinctement",
    "Le signal SÉCURITÉ suivi du nom de la station",
    "Le code CIAC suivi des mots « en essai »",
    "Uniquement les mots « en essai », répétés trois fois"
   ],
   "answer": "Le nom de la station suivi des mots « en essai », prononcés lentement et distinctement",
   "explanation": "Les signaux tests comportent le nom de la station suivi des mots « en essai », prononcés lentement et distinctement.",
   "reminder": "Essai : « nom de la station + en essai », lentement et distinctement.",
   "source": {
    "page": 27,
    "quote": "comporter le nom de la station suivi des mots « en essai». Le nom de la station et les mots « en essai » doivent être prononcés lentement et distinctement."
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3066",
   "type": "qcm",
   "question": "Dans l'exemple d'essai du manuel, que répond Oostende Radio à OS1256 ?",
   "choices": [
    "Libérez le canal 85",
    "Je vous reçois clairement et distinctement",
    "Restez à l'écoute",
    "Quelle est votre position"
   ],
   "answer": "Je vous reçois clairement et distinctement",
   "explanation": "Dans l'exemple d'essai, Oostende Radio répond « Je vous reçois clairement et distinctement ». Les autres phrases appartiennent à l'exemple de correspondance publique.",
   "reminder": "Réponse à un essai : « Je vous reçois clairement et distinctement ».",
   "source": {
    "page": 27,
    "quote": "Oostende Radio répond : OS1256 ICI Oostende Radio Je vous reçois clairement et distinctement Over"
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3067",
   "type": "qcm",
   "question": "Dans l'exemple d'essai, par quel mot OS1256 conclut-il la conversation ?",
   "choices": [
    "Over",
    "Silence fini",
    "Prudence",
    "Terminé"
   ],
   "answer": "Terminé",
   "explanation": "Dans l'exemple d'essai, la conversation s'achève par « ICI OS1256, Merci, Terminé ». Over figure à la fin de l'appel et de la réponse d'Oostende Radio, pas à la fin de la conversation.",
   "reminder": "Fin de l'essai : « Merci, Terminé ».",
   "source": {
    "page": 27,
    "quote": "La conversation s’achève comme suit ICI OS1256 Merci Terminé"
   },
   "category": "procedures-generales",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q3068",
   "type": "qcm",
   "question": "Qu'est-ce qu'un navire astreint ?",
   "choices": [
    "Un navire qui doit utiliser la double veille",
    "Un navire naviguant uniquement sur les voies intérieures",
    "Un navire où une station de radiocommunications est obligatoire (convention SOLAS)",
    "Un navire de plaisance de moins de 12 m"
   ],
   "answer": "Un navire où une station de radiocommunications est obligatoire (convention SOLAS)",
   "explanation": "Le manuel définit le navire astreint comme un navire où une station de radiocommunications est obligatoire, en vertu de la convention SOLAS.",
   "reminder": "Astreint = station radio obligatoire (SOLAS).",
   "source": {
    "page": 27,
    "quote": "Un navire astreint est un navire où une station de radiocommunications est obligatoire (convention SOLAS)."
   },
   "category": "navigation-maritime",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q3069",
   "type": "qcm",
   "question": "Quel canal de la bande VHF est la fréquence de détresse internationale ?",
   "choices": [
    "Le canal 67",
    "Le canal 70",
    "Le canal 16",
    "Le canal 10"
   ],
   "answer": "Le canal 16",
   "explanation": "Le canal 16 de la bande VHF est la fréquence de détresse internationale. Le canal 70 sert à l'ASN et le canal 10 au signal de détresse en navigation intérieure.",
   "reminder": "Canal 16 = détresse internationale.",
   "source": {
    "page": 27,
    "quote": "Le canal 16 de la bande VHF est la fréquence de détresse internationale."
   },
   "category": "navigation-maritime",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q3070",
   "type": "qcm",
   "question": "La veille sur le canal 16 est-elle obligatoire pour un navire non astreint ?",
   "choices": [
    "Non, elle n'est pas obligatoire mais conseillée autant que possible",
    "Non, elle est interdite pour les navires non astreints",
    "Oui, mais uniquement de nuit",
    "Oui, en permanence"
   ],
   "answer": "Non, elle n'est pas obligatoire mais conseillée autant que possible",
   "explanation": "Seuls les navires astreints assurent une veille permanente sur le canal 16 ; pour les autres elle n'est pas obligatoire, mais il est conseillé de la faire autant que possible via la double veille.",
   "reminder": "Non astreint : veille 16 non obligatoire, mais conseillée.",
   "source": {
    "page": 27,
    "quote": "Les navires astreints assurent une veille permanente sur le canal 16 (dans la mesure du possible). Pour les autres navires, la veille sur le canal 16 n’est pas obligatoire."
   },
   "category": "navigation-maritime",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3071",
   "type": "qcm",
   "question": "Où la fonction double veille est-elle interdite ?",
   "choices": [
    "En mer, dans les eaux belges",
    "Dans les zones couvertes par le MRCC",
    "Sur les navires astreints",
    "En navigation intérieure"
   ],
   "answer": "En navigation intérieure",
   "explanation": "Le manuel conseille la double veille en mer mais précise que ce système est interdit en navigation intérieure.",
   "reminder": "Double veille : conseillée en mer, interdite en navigation intérieure.",
   "source": {
    "page": 27,
    "quote": "Toutefois, il est cependant conseillé de le faire autant que possible en activant la fonction double veille (ce système est interdit en navigation intérieure)."
   },
   "category": "navigation-maritime",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3072",
   "type": "qcm",
   "question": "Avec la fonction double veille, à quelle fréquence le poste se positionne-t-il brièvement sur le canal 16 ?",
   "choices": [
    "Toutes les secondes",
    "Toutes les 2,5 secondes",
    "Toutes les 10 secondes",
    "Toutes les 30 secondes"
   ],
   "answer": "Toutes les 2,5 secondes",
   "explanation": "En double veille, le poste se positionne sur le canal 16 quelques centièmes de seconde toutes les 2,5 secondes, quel que soit son réglage. Les 10 secondes sont la durée maximale d'un signal test.",
   "reminder": "Double veille : un coup d'œil au 16 toutes les 2,5 s.",
   "source": {
    "page": 27,
    "quote": "Le poste se positionne alors sur le canal 16 pendant quelques centièmes de secondes toutes les 2,5 secondes, quel que soit son réglage."
   },
   "category": "navigation-maritime",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 150\" width=\"460\" height=\"150\" font-family=\"Arial, sans-serif\"><rect x=\"0\" y=\"0\" width=\"460\" height=\"150\" fill=\"#f8fbff\"/><text x=\"230\" y=\"24\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"bold\" fill=\"#1a2a6c\">Double veille</text><line x1=\"30\" y1=\"90\" x2=\"440\" y2=\"90\" stroke=\"#2b6cb0\" stroke-width=\"2\"/><rect x=\"30\" y=\"60\" width=\"6\" height=\"30\" fill=\"#e53e3e\"/><rect x=\"170\" y=\"60\" width=\"6\" height=\"30\" fill=\"#e53e3e\"/><rect x=\"310\" y=\"60\" width=\"6\" height=\"30\" fill=\"#e53e3e\"/><text x=\"103\" y=\"110\" text-anchor=\"middle\" font-size=\"12\" fill=\"#102030\">2,5 s</text><text x=\"243\" y=\"110\" text-anchor=\"middle\" font-size=\"12\" fill=\"#102030\">2,5 s</text><text x=\"230\" y=\"52\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e53e3e\">canal 16 : quelques centièmes de seconde</text><text x=\"230\" y=\"135\" text-anchor=\"middle\" font-size=\"12\" fill=\"#444\">Transmission détectée : le poste reste sur le 16 toute sa durée</text></svg>",
    "placement": "explanation",
    "alt": "Frise temporelle : brèves écoutes du canal 16 toutes les 2,5 secondes ; si une transmission est détectée, le poste reste sur le 16."
   },
   "kind": "memoire"
  },
  {
   "id": "Q3073",
   "type": "qcm",
   "question": "En double veille, que fait le poste lorsqu'une transmission est détectée sur le canal 16 ?",
   "choices": [
    "Il reste sur le canal 16 pendant 2,5 secondes puis revient",
    "Il reste sur le canal 16 pendant toute la durée de la transmission",
    "Il émet automatiquement un accusé de réception",
    "Il revient immédiatement sur le canal réglé"
   ],
   "answer": "Il reste sur le canal 16 pendant toute la durée de la transmission",
   "explanation": "Lorsqu'une transmission est détectée, le poste reste positionné sur le canal 16 pendant toute la durée de cette transmission.",
   "reminder": "Transmission détectée sur le 16 : le poste y reste jusqu'à la fin.",
   "source": {
    "page": 27,
    "quote": "Lorsqu’une transmission est détectée, il reste positionné sur le canal 16 pendant toute la durée de la transmission."
   },
   "category": "navigation-maritime",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3074",
   "type": "qcm",
   "question": "Quel organisme est le premier point de contact pour tous les incidents en mer en Belgique ?",
   "choices": [
    "Le MRCC à Ostende",
    "Oostende Radio",
    "Le CROSS Gris-Nez",
    "La garde côtière de Den Helder"
   ],
   "answer": "Le MRCC à Ostende",
   "explanation": "Le MRCC d'Ostende est le premier point de contact pour tous les incidents en mer. Oostende Radio ne traite pas les incidents ; le CROSS Gris-Nez (France) et Den Helder (Pays-Bas) sont les centres voisins.",
   "reminder": "Incident en mer en Belgique : MRCC Ostende.",
   "source": {
    "page": 27,
    "quote": "Le Centre de coordination et de sauvetage maritimes (MRCC) à Ostende est le premier point de contact pour tous les incidents en mer."
   },
   "category": "navigation-maritime",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q3076",
   "type": "qcm",
   "question": "Quel organisme est chargé de la coordination de l'assistance et de l'évacuation médicales en mer en Belgique ?",
   "choices": [
    "L'autorité comptable (CIAC)",
    "Le CROSS Gris-Nez",
    "Le MRCC",
    "Oostende Radio"
   ],
   "answer": "Le MRCC",
   "explanation": "Le MRCC est notamment chargé de la coordination de l'assistance et de l'évacuation médicales.",
   "reminder": "Évacuation médicale en mer : coordination par le MRCC.",
   "source": {
    "page": 28,
    "quote": "chargé de la coordination de l’assistance et de l’évacuation médicales ;"
   },
   "category": "navigation-maritime",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3077",
   "type": "qcm",
   "question": "Outre le canal 16, sur quel autre canal VHF de radiotéléphonie le MRCC assure-t-il une veille continue ?",
   "choices": [
    "Le canal 85",
    "Le canal 67",
    "Le canal 7",
    "Le canal 10"
   ],
   "answer": "Le canal 67",
   "explanation": "Le MRCC veille 24/7 les canaux VHF 16 et 67, le canal 70 en ASN, ainsi que 2187,5 kHz en ASN et 2182 kHz en MF.",
   "reminder": "MRCC : VHF 16 et 67, ASN 70, ASN 2187,5 kHz, MF 2182 kHz.",
   "source": {
    "page": 28,
    "quote": "Le MRCC assure une veille continue (24/7) sur les\ncanaux VHF 16, 67, ASN 70 ainsi qu’ASN 2187,5 kHz et MF 2182 kHz (radiotéléphonie)"
   },
   "category": "navigation-maritime",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q3078",
   "type": "qcm",
   "question": "Sur quel canal VHF la garde côtière de Den Helder (Pays-Bas) assure-t-elle la veille ASN ?",
   "choices": [
    "Le canal 70",
    "Le canal 67",
    "Le canal 10",
    "Le canal 16"
   ],
   "answer": "Le canal 70",
   "explanation": "Den Helder veille en permanence le canal VHF 16 et assure l'ASN sur le canal VHF 70 et en MF sur 2187,5 kHz.",
   "reminder": "ASN en VHF : canal 70.",
   "source": {
    "page": 28,
    "quote": "Pays-Bas : Garde côtière Den Helder Veille permanente sur le canal VHF 16 ASN : canal VHF 70 et MF 2187,5 kHz"
   },
   "category": "navigation-maritime",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3079",
   "type": "qcm",
   "question": "Quel est le centre de coordination de sauvetage français cité par le manuel ?",
   "choices": [
    "Le MRCC Ostende",
    "Oostende Radio",
    "La garde côtière Den Helder",
    "Le CROSS Gris-Nez"
   ],
   "answer": "Le CROSS Gris-Nez",
   "explanation": "Le manuel cite pour la France le CROSS Gris-Nez et pour les Pays-Bas la garde côtière Den Helder.",
   "reminder": "France : CROSS Gris-Nez ; Pays-Bas : Den Helder.",
   "source": {
    "page": 28,
    "quote": "France : CROSS Gris-Nez"
   },
   "category": "navigation-maritime",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q3080",
   "type": "qcm",
   "question": "Quel est le rôle d'Oostende Radio selon le manuel ?",
   "choices": [
    "Coordonner les évacuations médicales",
    "Traiter et coordonner les incidents en mer",
    "Transmettre des informations sur la sécurité maritime (MSI) pour le compte du MRCC",
    "Délivrer les autorisations de station"
   ],
   "answer": "Transmettre des informations sur la sécurité maritime (MSI) pour le compte du MRCC",
   "explanation": "Oostende Radio transmet des MSI (bulletins et alertes météo) pour le compte du MRCC et ne traite pas les incidents, qui relèvent du MRCC.",
   "reminder": "Oostende Radio diffuse les MSI ; le MRCC traite les incidents.",
   "source": {
    "page": 28,
    "quote": "Oostende Radio transmet des informations sur la sécurité maritime (MSI) pour la navigation maritime pour le compte du MRCC ; il s’agit notamment de bulletins météorologiques et d’alertes météo. Oostende Radio ne traite pas les incidents."
   },
   "category": "navigation-maritime",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3081",
   "type": "qcm",
   "question": "De quelle autorité dépend la station côtière Oostende Radio ?",
   "choices": [
    "De la Composante Marine, de la Défense, du Gouvernement fédéral",
    "D'une autorité comptable privée",
    "De l'Agence « Maritieme Dienstverlening en Kust », du Gouvernement flamand",
    "Du MRCC, au sein du Gouvernement flamand"
   ],
   "answer": "De la Composante Marine, de la Défense, du Gouvernement fédéral",
   "explanation": "Oostende Radio fait partie de la Composante Marine (Défense, Gouvernement fédéral), alors que le MRCC relève de l'Agence « Maritieme Dienstverlening en Kust » du Gouvernement flamand.",
   "reminder": "Oostende Radio = fédéral (Défense) ; MRCC = flamand.",
   "source": {
    "page": 28,
    "quote": "Le MRCC fait partie du Département « Scheepvaartbegeleiding » de l’Agence « Maritieme Dienstverlening en Kust », du Gouvernement flamand. La station côtière Oostende Radio fait partie de la Composante Marine, de la Défense, du Gouvernement fédéral."
   },
   "category": "navigation-maritime",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q3082",
   "type": "qcm",
   "question": "Depuis quand la base opérationnelle d'Ostende a-t-elle été étendue avec le stand opérateurs d'Oostende Radio ?",
   "choices": [
    "Depuis janvier 2020",
    "Depuis l'automne 2018",
    "Depuis le printemps 2006",
    "Depuis le printemps 2016"
   ],
   "answer": "Depuis le printemps 2016",
   "explanation": "Le manuel indique que, depuis le printemps 2016, la base opérationnelle d'Ostende accueille le stand opérateurs d'Oostende Radio.",
   "reminder": "Printemps 2016 : le stand opérateurs d'Oostende Radio rejoint la base opérationnelle d'Ostende.",
   "source": {
    "page": 28,
    "quote": "Depuis le printemps 2016, la base opérationnelle d’Ostende a été étendue avec le stand opérateurs de la station radiomaritime d'Ostende « Oostende Radio »"
   },
   "category": "navigation-maritime",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q3083",
   "type": "qcm",
   "question": "Que désigne le code CIAC dans les radiocommunications de correspondance publique ?",
   "choices": [
    "Le canal de travail d'Oostende Radio",
    "Le numéro MMSI du navire",
    "Le code identifiant l'autorité comptable, à spécifier lors de chaque communication",
    "Le code d'accès à l'ASN"
   ],
   "answer": "Le code identifiant l'autorité comptable, à spécifier lors de chaque communication",
   "explanation": "Pour la correspondance publique, il faut un abonnement auprès d'une autorité comptable, identifiée par un code CIAC à spécifier lors de chaque communication.",
   "reminder": "CIAC = code de l'autorité comptable, à donner à chaque appel.",
   "source": {
    "page": 28,
    "quote": "Pour avoir accès à ce service, il faut souscrire un abonnement auprès d’une autorité comptable. Cette autorité est identifiée par un code (CIAC), qui doit être spécifié lors de chaque communication."
   },
   "category": "navigation-maritime",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3084",
   "type": "qcm",
   "question": "En Belgique, quelle station offre toujours des services de radiocommunications de correspondance publique ?",
   "choices": [
    "Aucune station",
    "Oostende Radio",
    "Le CROSS Gris-Nez",
    "Le MRCC Ostende"
   ],
   "answer": "Oostende Radio",
   "explanation": "Le manuel indique que, même si de moins en moins de stations offrent ce service, Oostende Radio l'offre toujours en Belgique.",
   "reminder": "Correspondance publique en Belgique : Oostende Radio.",
   "source": {
    "page": 28,
    "quote": "En Belgique, Oostende Radio offre toujours ce service."
   },
   "category": "navigation-maritime",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q3085",
   "type": "qcm",
   "question": "Dans l'exemple de correspondance publique, sur quel canal OS1256 appelle-t-il d'abord Oostende Radio ?",
   "choices": [
    "Le canal 16",
    "Le canal 7",
    "Le canal 67",
    "Le canal 85"
   ],
   "answer": "Le canal 7",
   "explanation": "Dans l'exemple, OS1256 appelle Oostende Radio « sur le canal 7 », avant de passer sur le canal 85.",
   "reminder": "Exemple CIAC : appel sur le canal 7, puis travail sur le 85.",
   "source": {
    "page": 29,
    "quote": "Oostende Radio Oostende Radio ICI OS1256 OS1256 Sur le canal 7 Over"
   },
   "category": "navigation-maritime",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q3086",
   "type": "qcm",
   "question": "Dans l'exemple de correspondance publique, quel est le code d'identification donné par OS1256 ?",
   "choices": [
    "oscar-sierra-one-two",
    "bravo-echo-one-two",
    "delta-echo-two-one",
    "bravo-echo-two-one"
   ],
   "answer": "bravo-echo-two-one",
   "explanation": "Sur le canal 85, OS1256 donne son code d'identification « bravo-echo-two-one » avant de demander le numéro à joindre, conformément à l'obligation de spécifier le code CIAC à chaque communication.",
   "reminder": "On annonce son code d'identification (CIAC) avant de demander le numéro.",
   "source": {
    "page": 29,
    "quote": "Oostende Radio ICI OS1256 Sur le canal 85 Mon code d’identification est bravo-echo-two-one"
   },
   "category": "navigation-maritime",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q3087",
   "type": "qcm",
   "question": "Pourquoi est-il conseillé d'utiliser les mots OVER et OUT pendant la communication établie dans l'exemple ?",
   "choices": [
    "Parce qu'il s'agit d'une communication simplex",
    "Parce que le canal 85 est un canal ASN",
    "Parce que la liaison est mauvaise",
    "Parce qu'il s'agit d'une communication de détresse"
   ],
   "answer": "Parce qu'il s'agit d'une communication simplex",
   "explanation": "Le manuel précise que la communication étant simplex, il est conseillé d'utiliser OVER et OUT durant celle-ci.",
   "reminder": "Simplex : on utilise OVER et OUT.",
   "source": {
    "page": 29,
    "quote": "La communication est établie (étant donné qu’il s’agit d’une communication simplex, il est conseillé d’utiliser les mots OVER et OUT durant celle-ci)"
   },
   "category": "navigation-maritime",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3088",
   "type": "qcm",
   "question": "Comment s'appelle l'accord réglementant le service de radiocommunications sur les voies de navigation intérieure ?",
   "choices": [
    "Le règlement général de police",
    "La convention SOLAS",
    "L'arrangement Rainwat",
    "Le Règlement des radiocommunications"
   ],
   "answer": "L'arrangement Rainwat",
   "explanation": "L'accord signé par plusieurs pays européens pour la radiocommunication sur les voies de navigation intérieure est appelé l'arrangement Rainwat.",
   "reminder": "Voies intérieures : arrangement Rainwat.",
   "source": {
    "page": 30,
    "quote": "Cet accord est appelé l’arrangement Rainwat."
   },
   "category": "navigation-interieure",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q3089",
   "type": "qcm",
   "question": "Lequel de ces pays figure parmi les signataires de l'arrangement Rainwat cités par le manuel ?",
   "choices": [
    "La Moldavie",
    "Le Royaume-Uni",
    "L'Italie",
    "Le Danemark"
   ],
   "answer": "La Moldavie",
   "explanation": "La liste du manuel comprend notamment la Moldavie ; le Royaume-Uni, le Danemark et l'Italie n'y figurent pas.",
   "reminder": "Rainwat : 16 pays, dont Belgique, France, Pays-Bas, Allemagne... et Moldavie, Ukraine.",
   "source": {
    "page": 30,
    "quote": "Allemagne, Autriche, Belgique, Bulgarie, Croatie, France, Hongrie, Luxembourg, Moldavie, Pays-Bas, Pologne, République de Serbie, République slovaque, République tchèque, Suisse et Ukraine."
   },
   "category": "navigation-interieure",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q3090",
   "type": "qcm",
   "question": "À quelle distance minimale une antenne VHF doit-elle être installée de toute masse métallique importante qui la dépasse en hauteur ?",
   "choices": [
    "12 m",
    "4 m",
    "2,5 m",
    "1 m"
   ],
   "answer": "4 m",
   "explanation": "Les antennes doivent être installées à 4 m au moins de toute masse métallique importante qui les dépasse en hauteur. Les 12 m concernent la hauteur maximale au-dessus de la marque de franc-bord.",
   "reminder": "Antenne : au moins 4 m de toute grosse masse métallique.",
   "source": {
    "page": 30,
    "quote": "Elles doivent être installées à 4 m au moins de toute masse métallique importante qui les dépasse en hauteur."
   },
   "category": "equipements-installations",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 220\" width=\"460\" height=\"220\" font-family=\"Arial, sans-serif\"><rect x=\"0\" y=\"0\" width=\"460\" height=\"220\" fill=\"#f8fbff\"/><text x=\"230\" y=\"22\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"bold\" fill=\"#1a2a6c\">Installation de l'antenne VHF</text><path d=\"M40 180 L420 180 L390 205 L70 205 Z\" fill=\"#cbd5e0\" stroke=\"#4a5568\"/><line x1=\"40\" y1=\"190\" x2=\"420\" y2=\"190\" stroke=\"#e53e3e\" stroke-dasharray=\"4 3\"/><text x=\"80\" y=\"201\" font-size=\"10\" fill=\"#e53e3e\">franc-bord</text><rect x=\"110\" y=\"70\" width=\"24\" height=\"110\" fill=\"#718096\"/><text x=\"122\" y=\"64\" text-anchor=\"middle\" font-size=\"11\" fill=\"#102030\">masse métallique</text><line x1=\"300\" y1=\"50\" x2=\"300\" y2=\"180\" stroke=\"#2b6cb0\" stroke-width=\"4\"/><text x=\"300\" y=\"44\" text-anchor=\"middle\" font-size=\"11\" fill=\"#2b6cb0\">antenne verticale (env. 1 m)</text><line x1=\"134\" y1=\"140\" x2=\"300\" y2=\"140\" stroke=\"#102030\" marker-end=\"url(#a)\"/><text x=\"217\" y=\"134\" text-anchor=\"middle\" font-size=\"12\" fill=\"#102030\">au moins 4 m</text><line x1=\"360\" y1=\"50\" x2=\"360\" y2=\"190\" stroke=\"#102030\"/><text x=\"366\" y=\"125\" font-size=\"12\" fill=\"#102030\">max 12 m</text><defs><marker id=\"a\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0 0 L8 4 L0 8 Z\" fill=\"#102030\"/></marker></defs></svg>",
    "placement": "explanation",
    "alt": "Schéma d'un navire avec antenne verticale d'environ 1 m, placée à au moins 4 m d'une masse métallique et à 12 m maximum au-dessus de la marque de franc-bord."
   },
   "kind": "memoire"
  },
  {
   "id": "Q3091",
   "type": "qcm",
   "question": "Pour les navires astreints, de combien le point le plus élevé de l'antenne peut-il au maximum dépasser la marque de franc-bord ?",
   "choices": [
    "10 m",
    "16 m",
    "12 m",
    "4 m"
   ],
   "answer": "12 m",
   "explanation": "Pour les navires astreints, le point le plus élevé de l'antenne ne doit pas dépasser de plus de 12 m la marque de franc-bord (ou d'enfoncement).",
   "reminder": "Hauteur maximale de l'antenne : 12 m au-dessus du franc-bord.",
   "source": {
    "page": 30,
    "quote": "Le point le plus élevé de l’antenne ne doit pas dépasser de plus de 12 m la marque de franc-bord (ou la marque d’enfoncement) du navire (pour les navires astreints)."
   },
   "category": "equipements-installations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3092",
   "type": "qcm",
   "question": "Pourquoi l'installation d'un éclairage LED à moins de 4 m d'une antenne VHF est-elle fortement déconseillée ?",
   "choices": [
    "Parce que les LED réduisent l'impédance de l'antenne à 50 ohms",
    "Parce que la lumière des LED est interdite par l'arrangement Rainwat",
    "Parce que la chaleur des LED endommage le câble coaxial",
    "Parce que l'alimentation des LED provoque des perturbations dans la bande VHF"
   ],
   "answer": "Parce que l'alimentation des LED provoque des perturbations dans la bande VHF",
   "explanation": "Le manuel explique que l'alimentation des LED provoque des perturbations dans la bande VHF, d'où la recommandation de ne pas les installer à moins de 4 m de l'antenne.",
   "reminder": "LED à moins de 4 m de l'antenne = perturbations VHF.",
   "source": {
    "page": 30,
    "quote": "Pour info : l’installation d’éclairage LED à proximité (moins de 4 m) d’une antenne VHF est fortement déconseillée. En effet, l’alimentation des LED provoque des perturbations dans la bande VHF."
   },
   "category": "equipements-installations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3093",
   "type": "qcm",
   "question": "Selon le manuel, comment l'antenne VHF doit-elle être positionnée pour fonctionner correctement ?",
   "choices": [
    "Horizontalement",
    "Inclinée à 45° vers l'avant",
    "Verticalement",
    "Inclinée vers l'arrière, comme sur une voiture de sport"
   ],
   "answer": "Verticalement",
   "explanation": "L'antenne ne fonctionnera correctement que positionnée verticalement ; une antenne inclinée vers l'arrière comme sur une voiture de sport ne fonctionnera pas.",
   "reminder": "Antenne VHF : toujours verticale.",
   "source": {
    "page": 30,
    "quote": "Votre antenne ne fonctionnera correctement que si elle est positionnée verticalement."
   },
   "category": "equipements-installations",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q3094",
   "type": "qcm",
   "question": "Quelle est la longueur approximative correcte d'une antenne VHF selon le manuel ?",
   "choices": [
    "Environ 50 cm",
    "Environ 4 m",
    "Environ 12 m",
    "Environ 1 m"
   ],
   "answer": "Environ 1 m",
   "explanation": "La longueur de l'antenne doit être correcte, environ 1 m, pour transmettre correctement la puissance de l'appareil vers les ondes.",
   "reminder": "Antenne VHF : environ 1 m.",
   "source": {
    "page": 30,
    "quote": "La longueur de l'antenne doit être correcte (environ 1 m) pour transmettre correctement la puissance de l'appareil vers les ondes."
   },
   "category": "equipements-installations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3095",
   "type": "qcm",
   "question": "Quelle conséquence peut avoir une antenne de longueur incorrecte ?",
   "choices": [
    "Aucune, seule l'orientation compte",
    "Une portée réduite et, dans le pire des cas, un appareil endommagé",
    "Le passage automatique sur le canal 16",
    "Une portée augmentée mais un son déformé"
   ],
   "answer": "Une portée réduite et, dans le pire des cas, un appareil endommagé",
   "explanation": "Si la longueur de l'antenne n'est pas correcte, la portée sera réduite et, dans le pire des cas, l'appareil pourra être endommagé.",
   "reminder": "Mauvaise longueur d'antenne : portée réduite, voire appareil abîmé.",
   "source": {
    "page": 30,
    "quote": "Si la longueur n'est pas correcte, la portée sera réduite et, dans le pire des cas, votre appareil pourra être endommagé."
   },
   "category": "equipements-installations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3096",
   "type": "qcm",
   "question": "Comment appelle-t-on le fil de cuivre central d'un câble coaxial ?",
   "choices": [
    "L'âme",
    "La tresse",
    "La gaine",
    "L'isolation"
   ],
   "answer": "L'âme",
   "explanation": "Le câble coaxial est constitué d'un fil de cuivre central appelé âme, entouré d'un isolant, d'une gaine métallique (tresse) et d'une autre couche isolante.",
   "reminder": "Coaxial, du centre vers l'extérieur : âme, isolation, tresse, isolation.",
   "source": {
    "page": 30,
    "quote": "Un câble coaxial est un câble constitué d'un fil de cuivre central (appelé âme), entouré d'un matériau isolant et d'une gaine métallique, puis d'une autre couche de matériau isolant."
   },
   "category": "equipements-installations",
   "difficulty": "facile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 170\" width=\"460\" height=\"170\" font-family=\"Arial, sans-serif\"><rect x=\"0\" y=\"0\" width=\"460\" height=\"170\" fill=\"#f8fbff\"/><text x=\"230\" y=\"22\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"bold\" fill=\"#1a2a6c\">Câble coaxial (vue en coupe)</text><circle cx=\"110\" cy=\"95\" r=\"55\" fill=\"#2d3748\"/><circle cx=\"110\" cy=\"95\" r=\"42\" fill=\"#b7791f\"/><circle cx=\"110\" cy=\"95\" r=\"32\" fill=\"#edf2f7\" stroke=\"#a0aec0\"/><circle cx=\"110\" cy=\"95\" r=\"9\" fill=\"#c05621\"/><text x=\"200\" y=\"60\" font-size=\"13\" fill=\"#102030\">1. Âme (fil de cuivre central)</text><text x=\"200\" y=\"84\" font-size=\"13\" fill=\"#102030\">2. Isolation</text><text x=\"200\" y=\"108\" font-size=\"13\" fill=\"#102030\">3. Tresse ou protection métallique</text><text x=\"200\" y=\"132\" font-size=\"13\" fill=\"#102030\">4. Isolation</text><text x=\"230\" y=\"160\" text-anchor=\"middle\" font-size=\"12\" fill=\"#444\">Mariphone - antenne : impédance 50 ohms</text></svg>",
    "placement": "explanation",
    "alt": "Coupe d'un câble coaxial : 1 âme en cuivre au centre, 2 isolation, 3 tresse métallique, 4 isolation extérieure."
   },
   "kind": "memoire"
  },
  {
   "id": "Q3097",
   "type": "qcm",
   "question": "Dans un câble coaxial, quelle couche se trouve entre les deux couches d'isolation ?",
   "choices": [
    "Une couche d'air",
    "La tresse ou protection métallique",
    "Une seconde âme en cuivre",
    "L'âme"
   ],
   "answer": "La tresse ou protection métallique",
   "explanation": "Le schéma du manuel numérote : 1. Âme, 2. Isolation, 3. Tresse ou protection métallique, 4. Isolation. La tresse est donc prise entre les deux isolations.",
   "reminder": "La tresse métallique est entre les deux isolants.",
   "source": {
    "page": 30,
    "quote": "• 1. Âme • 2. Isolation • 3. Tresse ou protection métallique • 4. Isolation"
   },
   "category": "equipements-installations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3098",
   "type": "qcm",
   "question": "Quelle impédance doit avoir le câble coaxial reliant le mariphone à l'antenne ?",
   "choices": [
    "100 ohms",
    "25 ohms",
    "50 ohms",
    "75 ohms"
   ],
   "answer": "50 ohms",
   "explanation": "Le manuel indique qu'il convient d'utiliser un câble coaxial d'une impédance de 50 ohms pour relier le mariphone et l'antenne.",
   "reminder": "Câble mariphone-antenne : 50 ohms.",
   "source": {
    "page": 30,
    "quote": "Pour relier le mariphone et l'antenne, il convient d’utiliser un câble coaxial d'une impédance de 50 ohms."
   },
   "category": "equipements-installations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q3099",
   "type": "qcm",
   "question": "Quelle est la conséquence d'une connexion non étanche entre le câble et l'antenne ?",
   "choices": [
    "L'eau pénètre dans le câble, ce qui limite la portée et peut entraîner un dysfonctionnement",
    "L'impédance passe automatiquement à 75 ohms",
    "L'antenne bascule en double veille",
    "Aucune conséquence si l'antenne est verticale"
   ],
   "answer": "L'eau pénètre dans le câble, ce qui limite la portée et peut entraîner un dysfonctionnement",
   "explanation": "En cas de fuite, l'eau pénètre dans le câble coaxial, ce qui limite la portée de la transmission et peut entraîner un dysfonctionnement de l'appareil.",
   "reminder": "Connexion non étanche = eau dans le coax = portée réduite.",
   "source": {
    "page": 30,
    "quote": "En cas de fuite, l'eau pénètre dans le câble coaxial de l’installation, ce qui limite la portée de la transmission et peut entraîner un dysfonctionnement de l'appareil."
   },
   "category": "equipements-installations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4001",
   "type": "qcm",
   "question": "Combien de types de communications la radiotéléphonie pour la navigation intérieure comprend-elle ?",
   "choices": [
    "Cinq",
    "Quatre",
    "Trois",
    "Six"
   ],
   "answer": "Cinq",
   "explanation": "Le manuel énumère cinq types : bateau-bateau, informations nautiques, bateau-autorités portuaires, radiocommunications de bord et correspondance publique.",
   "reminder": "Navigation intérieure = 5 types de communications.",
   "source": {
    "page": 31,
    "quote": "La radiotéléphonie pour la navigation intérieure comprend cinq types de communications :"
   },
   "category": "navigation-interieure",
   "difficulty": "facile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 430 174\" width=\"430\" height=\"174\"><rect x=\"0\" y=\"0\" width=\"430\" height=\"174\" fill=\"#f8fafc\"/><text x=\"215.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" font-weight=\"bold\" fill=\"#1e3a8a\">Les 5 types de communications (navigation intérieure)</text><rect x=\"20.0\" y=\"45\" width=\"70\" height=\"44\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#1e3a8a\"/><text x=\"55.0\" y=\"73\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#0f172a\">1</text><text x=\"55.0\" y=\"108\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">Bateau-</text><text x=\"55.0\" y=\"126\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">bateau</text><rect x=\"100.0\" y=\"45\" width=\"70\" height=\"44\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#1e3a8a\"/><text x=\"135.0\" y=\"73\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#0f172a\">2</text><text x=\"135.0\" y=\"108\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">Infos</text><text x=\"135.0\" y=\"126\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">nautiques</text><rect x=\"180.0\" y=\"45\" width=\"70\" height=\"44\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#1e3a8a\"/><text x=\"215.0\" y=\"73\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#0f172a\">3</text><text x=\"215.0\" y=\"108\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">Bateau-</text><text x=\"215.0\" y=\"126\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">autorités</text><text x=\"215.0\" y=\"144\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">portuaires</text><rect x=\"260.0\" y=\"45\" width=\"70\" height=\"44\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#1e3a8a\"/><text x=\"295.0\" y=\"73\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#0f172a\">4</text><text x=\"295.0\" y=\"108\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">De bord</text><text x=\"295.0\" y=\"126\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">(Intraship)</text><rect x=\"340.0\" y=\"45\" width=\"70\" height=\"44\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#1e3a8a\"/><text x=\"375.0\" y=\"73\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#0f172a\">5</text><text x=\"375.0\" y=\"108\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">Corresp.</text><text x=\"375.0\" y=\"126\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">publique</text></svg>",
    "placement": "explanation",
    "alt": "Cinq cases numérotées : bateau-bateau, informations nautiques, bateau-autorités portuaires, radiocommunications de bord, correspondance publique."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4002",
   "type": "qcm",
   "question": "Parmi les types de communications de la navigation intérieure, lequel est qualifié de service non obligatoire ?",
   "choices": [
    "Les communications bateau-bateau (Intership)",
    "Les radiocommunications de correspondance publique",
    "Les radiocommunications de bord (Intraship)",
    "Les communications d'informations nautiques"
   ],
   "answer": "Les radiocommunications de correspondance publique",
   "explanation": "Dans la liste des cinq types, seule la correspondance publique porte la mention « service non obligatoire ».",
   "reminder": "Correspondance publique en navigation intérieure : service non obligatoire.",
   "source": {
    "page": 31,
    "quote": "radiocommunications de correspondance publique (service non obligatoire)"
   },
   "category": "navigation-interieure",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4003",
   "type": "qcm",
   "question": "En navigation intérieure, sur quel canal s'effectue l'appel d'une station mobile ou d'une station terrestre ?",
   "choices": [
    "Sur le premier canal (canal d'appel) du réseau sur lequel la communication est demandée",
    "Toujours sur le canal 16",
    "Toujours sur le canal 10",
    "Sur le dernier canal libre du réseau choisi"
   ],
   "answer": "Sur le premier canal (canal d'appel) du réseau sur lequel la communication est demandée",
   "explanation": "Le manuel précise que l'appel se fait sur le premier canal, appelé canal d'appel, du réseau concerné par la communication.",
   "reminder": "On appelle sur le canal d'appel = premier canal du réseau visé.",
   "source": {
    "page": 31,
    "quote": "L’appel d’une station mobile ou une station terrestre s’effectue sur le premier canal (canal d’appel) du réseau sur lequel la communication est demandée."
   },
   "category": "navigation-interieure",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4004",
   "type": "qcm",
   "question": "Dans le réseau bateau-bateau (Intership), sur quels canaux les informations d'ordre social et privé sont-elles autorisées ?",
   "choices": [
    "Uniquement sur les canaux 18 et 22",
    "Uniquement sur les canaux 15 et 17",
    "Uniquement sur les canaux 77 et 72",
    "Uniquement sur les canaux 10 et 16"
   ],
   "answer": "Uniquement sur les canaux 77 et 72",
   "explanation": "La particularité du réseau bateau-bateau est que les informations d'ordre social et privé ne sont permises que sur les canaux 77 et 72. Les canaux 15/17 concernent les portatifs à bord (Intraship).",
   "reminder": "Social et privé entre bateaux : canaux 77 et 72 seulement.",
   "source": {
    "page": 31,
    "quote": "Les informations d’ordre social et privé ne sont autorisées que sur le canal 77 et le canal 72."
   },
   "category": "canaux-vhf",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 174\" width=\"360\" height=\"174\"><rect x=\"0\" y=\"0\" width=\"360\" height=\"174\" fill=\"#f8fafc\"/><text x=\"180.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Canaux cités en navigation intérieure</text><rect x=\"65.0\" y=\"45\" width=\"110\" height=\"44\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#1e3a8a\"/><text x=\"120.0\" y=\"73\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#0f172a\">77 / 72</text><text x=\"120.0\" y=\"108\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">Bateau-bateau :</text><text x=\"120.0\" y=\"126\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">infos d'ordre</text><text x=\"120.0\" y=\"144\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">social et privé</text><rect x=\"185.0\" y=\"45\" width=\"110\" height=\"44\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#1e3a8a\"/><text x=\"240.0\" y=\"73\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#0f172a\">15 / 17</text><text x=\"240.0\" y=\"108\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">Radiocom. de bord :</text><text x=\"240.0\" y=\"126\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">appareils</text><text x=\"240.0\" y=\"144\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">portatifs</text></svg>",
    "placement": "explanation",
    "alt": "Deux cases : canaux 77 et 72 pour les informations d'ordre social et privé entre bateaux ; canal 15/17 pour les portatifs à bord."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4005",
   "type": "qcm",
   "question": "Quel est le mode d'exploitation des communications bateau-bateau (Intership) ?",
   "choices": [
    "Semi-duplex, avec réduction automatique de la puissance à 1 watt",
    "Simplex, avec une puissance d'émission libre",
    "Simplex, avec réduction automatique de la puissance d'émission à maximum 1 watt",
    "Duplex, avec une puissance d'émission de 25 watts"
   ],
   "answer": "Simplex, avec réduction automatique de la puissance d'émission à maximum 1 watt",
   "explanation": "Le tableau Intership indique un fonctionnement en simplex avec réduction automatique de la puissance à 1 watt maximum.",
   "reminder": "Bateau-bateau : simplex et 1 watt maximum (réduction automatique).",
   "source": {
    "page": 31,
    "quote": "Simplex. Réduction automatique de la puissance d’émission à maximum 1 watt."
   },
   "category": "frequences-modes",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4006",
   "type": "qcm",
   "question": "Quel terme anglais le manuel associe-t-il aux communications bateau-bateau ?",
   "choices": [
    "Intraship",
    "Ship-shore",
    "Interport",
    "Intership"
   ],
   "answer": "Intership",
   "explanation": "Le titre du tableau est « Communications bateau-bateau (Intership) ». Intraship désigne les radiocommunications de bord.",
   "reminder": "Inter-ship = entre bateaux ; Intra-ship = à bord.",
   "source": {
    "page": 31,
    "quote": "COMMUNICATIONS BATEAU-BATEAU (INTERSHIP)"
   },
   "category": "navigation-interieure",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4007",
   "type": "qcm",
   "question": "Quel exemple d'usage le manuel donne-t-il pour les communications bateau-bateau ?",
   "choices": [
    "La manœuvre des aussières et l'amarrage",
    "L'échange d'informations sur l'état des voies navigables",
    "L'attribution d'aires de stationnement",
    "La détermination de la route à suivre"
   ],
   "answer": "La détermination de la route à suivre",
   "explanation": "La définition des communications Intership cite la détermination de la route à suivre. L'attribution d'aires de stationnement relève des autorités portuaires.",
   "reminder": "Bateau-bateau : par exemple pour se mettre d'accord sur la route à suivre.",
   "source": {
    "page": 31,
    "quote": "Établissement de liaisons de radiocommunications entre les stations de bateau, par exemple pour la détermination de la route à suivre."
   },
   "category": "navigation-interieure",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4008",
   "type": "qcm",
   "question": "En Belgique et aux Pays-Bas, quelle puissance de sortie maximale est permise sur le réseau Informations nautiques ?",
   "choices": [
    "6 watts",
    "25 watts",
    "1 watt",
    "10 watts"
   ],
   "answer": "1 watt",
   "explanation": "La particularité du réseau Informations nautiques est qu'en Belgique et aux Pays-Bas, il ne peut être exploité qu'avec une puissance de sortie de maximum 1 watt.",
   "reminder": "Informations nautiques en Belgique et aux Pays-Bas : 1 watt maximum.",
   "source": {
    "page": 31,
    "quote": "En Belgique et aux Pays-Bas, ce réseau ne peut être exploité qu’avec une puissance de sortie de maximum 1 watt."
   },
   "category": "frequences-modes",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4009",
   "type": "qcm",
   "question": "Quels modes d'exploitation le manuel mentionne-t-il pour les communications d'informations nautiques ?",
   "choices": [
    "Duplex, semi-duplex ou simplex",
    "Duplex uniquement",
    "Semi-duplex uniquement",
    "Simplex uniquement"
   ],
   "answer": "Duplex, semi-duplex ou simplex",
   "explanation": "Contrairement aux réseaux bateau-bateau, autorités portuaires et de bord (simplex), le réseau Informations nautiques admet le duplex, le semi-duplex ou le simplex.",
   "reminder": "Informations nautiques : seul réseau en duplex, semi-duplex ou simplex.",
   "source": {
    "page": 31,
    "quote": "Duplex, semi-duplex, uniquement pour les stations de bateau, ou simplex."
   },
   "category": "frequences-modes",
   "difficulty": "difficile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 170\" width=\"520\" height=\"170\"><rect x=\"0\" y=\"0\" width=\"520\" height=\"170\" fill=\"#f8fafc\"/><text x=\"260.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Modes d'exploitation par type de communication</text><rect x=\"20\" y=\"40\" width=\"480\" height=\"114\" rx=\"8\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><text x=\"40\" y=\"60\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">Bateau-bateau : simplex, 1 W max</text><text x=\"40\" y=\"86\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">Informations nautiques : duplex, semi-duplex ou simplex</text><text x=\"40\" y=\"112\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">Bateau-autorités portuaires : simplex, 1 W max</text><text x=\"40\" y=\"138\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">Radiocommunications de bord : simplex, 1 W max</text></svg>",
    "placement": "explanation",
    "alt": "Liste de quatre lignes : bateau-bateau, autorités portuaires et de bord en simplex à 1 watt maximum ; informations nautiques en duplex, semi-duplex ou simplex (en gras)."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4010",
   "type": "qcm",
   "question": "Entre quelles stations s'établissent les communications d'informations nautiques ?",
   "choices": [
    "Entre les stations de bateau et les réseaux de télécommunications publics",
    "Uniquement entre des stations de bateau",
    "Entre les stations de bateau et les stations terrestres des autorités chargées de l'exploitation des voies navigables",
    "Entre les stations de bateau et les stations terrestres des autorités portuaires"
   ],
   "answer": "Entre les stations de bateau et les stations terrestres des autorités chargées de l'exploitation des voies navigables",
   "explanation": "Les informations nautiques relient les bateaux aux autorités qui exploitent les voies navigables, par exemple pour l'état des voies, le conseil et l'orientation du trafic.",
   "reminder": "Informations nautiques = bateau ↔ gestionnaire de la voie navigable.",
   "source": {
    "page": 31,
    "quote": "Établissement de liaisons de radiocommunications entre les stations de bateau et les stations terrestres des autorités chargées de l’exploitation des voies navigables"
   },
   "category": "navigation-interieure",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4011",
   "type": "qcm",
   "question": "Quels messages peuvent être transmis sur le réseau Informations nautiques ?",
   "choices": [
    "Uniquement les messages de détresse",
    "Tous les messages, y compris d'ordre privé",
    "Uniquement les messages de correspondance publique",
    "Seuls les messages relatifs à la sécurité de la vie humaine, à la navigation ou à la sécurité des bateaux"
   ],
   "answer": "Seuls les messages relatifs à la sécurité de la vie humaine, à la navigation ou à la sécurité des bateaux",
   "explanation": "L'objet des communications du réseau Informations nautiques est limité à la sécurité de la vie humaine, à la navigation et à la sécurité des bateaux.",
   "reminder": "Informations nautiques : vie humaine, navigation, sécurité des bateaux, rien d'autre.",
   "source": {
    "page": 31,
    "quote": "Seuls les messages relatifs à la sécurité de la vie humaine, à la navigation ou à la sécurité des bateaux peuvent être transmis."
   },
   "category": "navigation-interieure",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4012",
   "type": "qcm",
   "question": "Quel usage le manuel cite-t-il en exemple pour les communications bateau-autorités portuaires ?",
   "choices": [
    "Les instructions de manœuvre des aussières à bord",
    "La détermination de la route à suivre entre bateaux",
    "L'attribution d'aires de stationnement ou la navigation dans les ports",
    "L'échange de messages privés"
   ],
   "answer": "L'attribution d'aires de stationnement ou la navigation dans les ports",
   "explanation": "Les communications bateau-autorités portuaires servent par exemple à attribuer des aires de stationnement ou pour la navigation dans les ports.",
   "reminder": "Autorités portuaires : stationnement et navigation dans le port.",
   "source": {
    "page": 32,
    "quote": "par exemple pour l’attribution d’aires de stationnement ou pour la navigation dans les ports."
   },
   "category": "navigation-interieure",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4013",
   "type": "qcm",
   "question": "Quel est le mode d'exploitation des communications bateau-autorités portuaires ?",
   "choices": [
    "Duplex, à pleine puissance",
    "Duplex ou simplex, au choix, à 25 watts",
    "Semi-duplex, avec 1 watt maximum",
    "Simplex, avec réduction automatique de la puissance à maximum 1 watt"
   ],
   "answer": "Simplex, avec réduction automatique de la puissance à maximum 1 watt",
   "explanation": "Comme le réseau bateau-bateau et les radiocommunications de bord, le réseau bateau-autorités portuaires fonctionne en simplex à 1 watt maximum.",
   "reminder": "Autorités portuaires : simplex et 1 watt maximum.",
   "source": {
    "page": 32,
    "quote": "Simplex. Réduction automatique de la puissance d’émission à maximum 1 watt."
   },
   "category": "frequences-modes",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4014",
   "type": "qcm",
   "question": "Que désignent les radiocommunications de bord (Intraship) ?",
   "choices": [
    "Les liaisons avec les réseaux téléphoniques publics",
    "Les liaisons avec les autorités portuaires",
    "Les liaisons entre des stations de bateau différentes",
    "Les radiocommunications à bord de bateaux et de convois"
   ],
   "answer": "Les radiocommunications à bord de bateaux et de convois",
   "explanation": "Le tableau Intraship définit ces radiocommunications comme celles établies à bord de bateaux et de convois.",
   "reminder": "Intraship = à bord du bateau ou du convoi.",
   "source": {
    "page": 32,
    "quote": "Établissement de radiocommunications à bord de bateaux et de convois."
   },
   "category": "navigation-interieure",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4015",
   "type": "qcm",
   "question": "Sur quel(s) canal(aux) l'utilisation d'appareils portatifs est-elle autorisée pour les radiocommunications de bord ?",
   "choices": [
    "Canal 10/16",
    "Canal 15/17",
    "Canal 77/72",
    "Canal 18/22"
   ],
   "answer": "Canal 15/17",
   "explanation": "La particularité des radiocommunications de bord est que les portatifs sont autorisés sur le canal 15/17. Les canaux 77 et 72 servent aux informations d'ordre social et privé entre bateaux.",
   "reminder": "Portatifs à bord (Intraship) : canal 15/17.",
   "source": {
    "page": 32,
    "quote": "L’utilisation d’appareils portatifs est autorisée sur le canal 15/17"
   },
   "category": "canaux-vhf",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4016",
   "type": "qcm",
   "question": "Que signifie l'abréviation ATIS ?",
   "choices": [
    "Advanced Transmitter Integrated Signal",
    "Automatic Transmitter Identification System",
    "Automatic Identification System",
    "Automatic Traffic Information Service"
   ],
   "answer": "Automatic Transmitter Identification System",
   "explanation": "ATIS signifie Automatic Transmitter Identification System, un système d'identification automatique des émetteurs radiotéléphoniques des bateaux. Automatic Identification System désigne l'AIS.",
   "reminder": "ATIS = identification automatique de l'émetteur (Transmitter).",
   "source": {
    "page": 32,
    "quote": "ATIS signifie Automatic Transmitter Identification System."
   },
   "category": "navigation-interieure",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4017",
   "type": "qcm",
   "question": "Dans quelle ville l'Arrangement régional rendant l'ATIS obligatoire a-t-il été signé le 18 avril 2012 ?",
   "choices": [
    "Bucarest",
    "Brest",
    "Genève",
    "Londres"
   ],
   "answer": "Bucarest",
   "explanation": "L'Arrangement régional a été signé à Bucarest le 18 avril 2012. Brest est la ville où il a été modifié en 2023.",
   "reminder": "Arrangement régional (Rainwat) : Bucarest, 18 avril 2012.",
   "source": {
    "page": 32,
    "quote": "L’utilisation d’ATIS est obligatoire sur les voies de navigation intérieure des pays qui ont signé l’Arrangement régional relatif au service de radiocommunications sur les voies de navigation intérieure à Bucarest le 18 avril 2012"
   },
   "category": "navigation-interieure",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4018",
   "type": "qcm",
   "question": "Où et quand l'Arrangement régional de Bucarest a-t-il été modifié ?",
   "choices": [
    "À Genève, en 2020",
    "À Brest, le 18 avril 2012",
    "À Brest, le 18 octobre 2023",
    "À Bucarest, le 18 octobre 2023"
   ],
   "answer": "À Brest, le 18 octobre 2023",
   "explanation": "Le manuel indique que l'Arrangement de Bucarest du 18 avril 2012 a été modifié à Brest le 18 octobre 2023.",
   "reminder": "Bucarest 2012, modifié à Brest le 18 octobre 2023.",
   "source": {
    "page": 32,
    "quote": "à Bucarest le 18 avril 2012, modifié à Brest le 18 octobre 2023."
   },
   "category": "navigation-interieure",
   "difficulty": "difficile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 169\" width=\"480\" height=\"169\"><rect x=\"0\" y=\"0\" width=\"480\" height=\"169\" fill=\"#f8fafc\"/><text x=\"240.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Arrangement régional (Rainwat)</text><defs><marker id=\"a\" markerWidth=\"8\" markerHeight=\"8\" refX=\"4\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#1e3a8a\"/></marker></defs><rect x=\"40\" y=\"40\" width=\"400\" height=\"40\" rx=\"6\" fill=\"#e0f2fe\" stroke=\"#0369a1\"/><text x=\"240.0\" y=\"65\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" fill=\"#0f172a\">Signé à Bucarest le 18 avril 2012</text><line x1=\"240.0\" y1=\"80\" x2=\"240.0\" y2=\"99\" stroke=\"#1e3a8a\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"40\" y=\"102\" width=\"400\" height=\"40\" rx=\"6\" fill=\"#e0f2fe\" stroke=\"#0369a1\"/><text x=\"240.0\" y=\"127\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" fill=\"#0f172a\">Modifié à Brest le 18 octobre 2023</text></svg>",
    "placement": "explanation",
    "alt": "Deux étapes : signature à Bucarest le 18 avril 2012, puis modification à Brest le 18 octobre 2023."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4019",
   "type": "qcm",
   "question": "À quel moment le signal ATIS est-il transmis ?",
   "choices": [
    "Uniquement à la demande d'une station terrestre",
    "À la fin de chaque émission, au relâchement du commutateur d'émission",
    "Au début de chaque émission, à l'enfoncement du commutateur",
    "Uniquement lors d'un appel de détresse"
   ],
   "answer": "À la fin de chaque émission, au relâchement du commutateur d'émission",
   "explanation": "L'installation ATIS génère automatiquement le signal d'identification, transmis à la fin de chaque émission, c'est-à-dire au relâchement du commutateur d'émission.",
   "reminder": "ATIS : signal envoyé quand on relâche le bouton d'émission.",
   "source": {
    "page": 32,
    "quote": "Ce signal est transmis à la fin de chaque émission (relâchement du commutateur d’émission)."
   },
   "category": "navigation-interieure",
   "difficulty": "facile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 355\" width=\"480\" height=\"355\"><rect x=\"0\" y=\"0\" width=\"480\" height=\"355\" fill=\"#f8fafc\"/><text x=\"240.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Fonctionnement de l'ATIS</text><defs><marker id=\"a\" markerWidth=\"8\" markerHeight=\"8\" refX=\"4\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#1e3a8a\"/></marker></defs><rect x=\"40\" y=\"40\" width=\"400\" height=\"40\" rx=\"6\" fill=\"#e0f2fe\" stroke=\"#0369a1\"/><text x=\"240.0\" y=\"65\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" fill=\"#0f172a\">Appui sur le commutateur d'émission</text><line x1=\"240.0\" y1=\"80\" x2=\"240.0\" y2=\"99\" stroke=\"#1e3a8a\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"40\" y=\"102\" width=\"400\" height=\"40\" rx=\"6\" fill=\"#e0f2fe\" stroke=\"#0369a1\"/><text x=\"240.0\" y=\"127\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" fill=\"#0f172a\">Message vocal</text><line x1=\"240.0\" y1=\"142\" x2=\"240.0\" y2=\"161\" stroke=\"#1e3a8a\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"40\" y=\"164\" width=\"400\" height=\"40\" rx=\"6\" fill=\"#e0f2fe\" stroke=\"#0369a1\"/><text x=\"240.0\" y=\"189\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" fill=\"#0f172a\">Relâchement du commutateur</text><line x1=\"240.0\" y1=\"204\" x2=\"240.0\" y2=\"223\" stroke=\"#1e3a8a\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"40\" y=\"226\" width=\"400\" height=\"40\" rx=\"6\" fill=\"#e0f2fe\" stroke=\"#0369a1\"/><text x=\"240.0\" y=\"251\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" fill=\"#0f172a\">Envoi automatique du signal ATIS</text><line x1=\"240.0\" y1=\"266\" x2=\"240.0\" y2=\"285\" stroke=\"#1e3a8a\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"40\" y=\"288\" width=\"400\" height=\"40\" rx=\"6\" fill=\"#e0f2fe\" stroke=\"#0369a1\"/><text x=\"240.0\" y=\"313\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" fill=\"#0f172a\">Émission longue : ATIS toutes les 5 minutes</text></svg>",
    "placement": "explanation",
    "alt": "Schéma en étapes : on parle, on relâche le commutateur, le signal ATIS part automatiquement ; en cas d'émission longue il est répété toutes les cinq minutes."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4020",
   "type": "qcm",
   "question": "En cas d'émission longue, à quelle fréquence le signal ATIS est-il transmis ?",
   "choices": [
    "Toutes les deux minutes",
    "Toutes les trente secondes",
    "Toutes les dix minutes",
    "Toutes les cinq minutes"
   ],
   "answer": "Toutes les cinq minutes",
   "explanation": "Le manuel précise qu'en cas d'émissions longues, l'ATIS est répété toutes les cinq minutes.",
   "reminder": "Émission longue : ATIS toutes les 5 minutes.",
   "source": {
    "page": 32,
    "quote": "En cas d'émissions longues, le signal ATIS est transmis toutes les cinq minutes."
   },
   "category": "navigation-interieure",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4021",
   "type": "qcm",
   "question": "Quels équipements de bord doivent être munis d'une installation de codage ATIS ?",
   "choices": [
    "Uniquement les équipements portatifs",
    "Toutes les installations de radiotéléphonie et tous les équipements portatifs à bord",
    "Uniquement les installations fixes",
    "Uniquement les installations équipées de l'ASN"
   ],
   "answer": "Toutes les installations de radiotéléphonie et tous les équipements portatifs à bord",
   "explanation": "Le manuel impose le codage ATIS à toutes les installations de radiotéléphonie et à tous les équipements portatifs à bord, sans exception.",
   "reminder": "ATIS : obligatoire sur les fixes ET les portatifs.",
   "source": {
    "page": 32,
    "quote": "Toutes les installations de radiotéléphonie et tous les équipements portatifs à bord doivent être équipés d'une installation de codage pour l'émission du signal ATIS."
   },
   "category": "navigation-interieure",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4022",
   "type": "qcm",
   "question": "Si l'installation est équipée d'un appel sélectif numérique (ASN), que se passe-t-il pour l'ATIS lors d'un appel ASN ?",
   "choices": [
    "Le signal ATIS n'est pas transmis",
    "Le signal ATIS est transmis deux fois",
    "Le signal ATIS est transmis toutes les cinq minutes",
    "Le signal ATIS remplace l'appel ASN"
   ],
   "answer": "Le signal ATIS n'est pas transmis",
   "explanation": "Le manuel indique que le signal ATIS n'est pas émis lors d'un appel ASN.",
   "reminder": "Appel ASN = pas de signal ATIS.",
   "source": {
    "page": 32,
    "quote": "le signal ATIS n’est pas transmis lors d’un appel ASN"
   },
   "category": "navigation-interieure",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4023",
   "type": "qcm",
   "question": "Quel est le statut de l'ASN (appel sélectif numérique) sur les voies de navigation intérieure ?",
   "choices": [
    "Son utilisation est autorisée uniquement en cas de détresse",
    "Son utilisation est autorisée sur le canal 70 uniquement",
    "Son utilisation est interdite",
    "Son utilisation est obligatoire"
   ],
   "answer": "Son utilisation est interdite",
   "explanation": "Le manuel rappelle que l'ASN est interdit sur les voies de navigation intérieure ; c'est l'ATIS qui y est obligatoire.",
   "reminder": "Voies intérieures : ATIS obligatoire, ASN interdit.",
   "source": {
    "page": 32,
    "quote": "Rappel : L’utilisation de l’ASN est interdite sur les voies de navigation intérieure."
   },
   "category": "navigation-interieure",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4024",
   "type": "qcm",
   "question": "Si le dispositif ATIS est séparé de l'installation émettrice, comment doit-il y être connecté ?",
   "choices": [
    "Par un raccordement électrique protégé contre les coupures de courant",
    "Par un raccordement électrique non protégé",
    "Aucune connexion n'est nécessaire",
    "Par une liaison acoustique"
   ],
   "answer": "Par un raccordement électrique protégé contre les coupures de courant",
   "explanation": "Un dispositif ATIS séparé doit être relié par un raccordement électrique protégé contre les coupures de courant ; les liaisons acoustiques ou similaires sont interdites.",
   "reminder": "ATIS séparé : câble électrique protégé, jamais de liaison acoustique.",
   "source": {
    "page": 32,
    "quote": "il doit être connecté à celui-ci au moyen d'un raccordement électrique protégé contre les coupures de courant. Les liaisons acoustiques ou similaires ne sont pas autorisées."
   },
   "category": "equipements-installations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4025",
   "type": "qcm",
   "question": "L'utilisateur peut-il intervenir sur le dispositif ATIS ?",
   "choices": [
    "Il peut le déconnecter mais pas le reprogrammer",
    "Il peut le reprogrammer mais pas le déconnecter",
    "Oui, il peut le reprogrammer s'il possède un certificat SMDSM",
    "Non, il ne peut ni le déconnecter ni le reprogrammer"
   ],
   "answer": "Non, il ne peut ni le déconnecter ni le reprogrammer",
   "explanation": "Le manuel est formel : l'utilisateur ne peut ni déconnecter ni reprogrammer le dispositif ATIS.",
   "reminder": "ATIS : ni déconnexion ni reprogrammation par l'utilisateur.",
   "source": {
    "page": 32,
    "quote": "Il n’est pas possible pour l’utilisateur de déconnecter ou de reprogrammer le dispositif ATIS."
   },
   "category": "navigation-interieure",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4026",
   "type": "qcm",
   "question": "Quelle influence le dispositif ATIS a-t-il sur les communications et les systèmes de navigation ?",
   "choices": [
    "Il perturbe les systèmes de navigation",
    "Il coupe le haut-parleur pendant les communications",
    "Aucune influence, ni sur les communications ni sur les systèmes de navigation",
    "Il réduit la portée des communications"
   ],
   "answer": "Aucune influence, ni sur les communications ni sur les systèmes de navigation",
   "explanation": "Le manuel précise que l'ATIS n'a d'influence ni sur les communications ni sur les systèmes de navigation.",
   "reminder": "ATIS : sans influence sur la communication ni sur la navigation.",
   "source": {
    "page": 32,
    "quote": "Le dispositif ATIS n’a pas d’influence sur les communications, ni sur les systèmes de navigation."
   },
   "category": "navigation-interieure",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4027",
   "type": "qcm",
   "question": "Quelle norme définit la structure du code ATIS selon le manuel ?",
   "choices": [
    "Directive 2014/53/UE",
    "Directive 96/98/CE",
    "ETSI EN 300 698-1, annexe B",
    "Règlement des radiocommunications, Genève 2020"
   ],
   "answer": "ETSI EN 300 698-1, annexe B",
   "explanation": "Le manuel renvoie à l'annexe B de la norme européenne ETSI EN 300 698-1 pour la structure du code ATIS.",
   "reminder": "Code ATIS : norme ETSI EN 300 698-1, annexe B.",
   "source": {
    "page": 32,
    "quote": "La structure du code ATIS est la suivante (ETSI EN 300 698-1, annexe B) :"
   },
   "category": "navigation-interieure",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q4028",
   "type": "qcm",
   "question": "Quelle est la structure du code ATIS ?",
   "choices": [
    "MID X1 X2 X3 X4 X5 X6 Z",
    "Z X1 X2 X3 X4 X5 X6 MID",
    "Z MID X1 X2 X3 X4 X5 X6",
    "MID Z X1 X2 X3 X4 X5 X6"
   ],
   "answer": "Z MID X1 X2 X3 X4 X5 X6",
   "explanation": "Le code ATIS commence par Z, suivi du MID puis des six positions X1 à X6.",
   "reminder": "ATIS = Z, puis MID, puis X1 à X6.",
   "source": {
    "page": 32,
    "quote": "Z MID X1 X2 X3 X4 X5 X6"
   },
   "category": "identification-stations",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 510 156\" width=\"510\" height=\"156\"><rect x=\"0\" y=\"0\" width=\"510\" height=\"156\" fill=\"#f8fafc\"/><text x=\"255.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Structure du code ATIS</text><rect x=\"20.0\" y=\"45\" width=\"110\" height=\"44\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#1e3a8a\"/><text x=\"75.0\" y=\"73\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#0f172a\">Z</text><text x=\"75.0\" y=\"108\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">toujours 9</text><rect x=\"140.0\" y=\"45\" width=\"110\" height=\"44\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#1e3a8a\"/><text x=\"195.0\" y=\"73\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#0f172a\">MID</text><text x=\"195.0\" y=\"108\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">n° du pays</text><text x=\"195.0\" y=\"126\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">(UIT-R)</text><rect x=\"260.0\" y=\"45\" width=\"110\" height=\"44\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#1e3a8a\"/><text x=\"315.0\" y=\"73\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#0f172a\">X1X2</text><text x=\"315.0\" y=\"108\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">2e ou 3e lettre</text><text x=\"315.0\" y=\"126\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">01=A, 02=B...</text><rect x=\"380.0\" y=\"45\" width=\"110\" height=\"44\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#1e3a8a\"/><text x=\"435.0\" y=\"73\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#0f172a\">X3X4X5X6</text><text x=\"435.0\" y=\"108\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">4 chiffres de</text><text x=\"435.0\" y=\"126\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">l'indicatif</text></svg>",
    "placement": "explanation",
    "alt": "Quatre cases : Z (toujours 9), MID (numéro d'identification maritime du pays), X1X2 (deuxième ou troisième lettre de l'indicatif, 01=A), X3 à X6 (les 4 chiffres de l'indicatif)."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4029",
   "type": "qcm",
   "question": "Dans le code ATIS, quelle valeur prend toujours le premier chiffre Z ?",
   "choices": [
    "2",
    "0",
    "9",
    "1"
   ],
   "answer": "9",
   "explanation": "Le tableau du code ATIS indique que Z représente le chiffre 9, toujours.",
   "reminder": "Code ATIS : Z = toujours 9.",
   "source": {
    "page": 33,
    "quote": "(Z = toujours 9)"
   },
   "category": "identification-stations",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4030",
   "type": "qcm",
   "question": "Que représente le MID dans le code ATIS ?",
   "choices": [
    "Le numéro du port d'attache du bateau",
    "Le numéro d'identification maritime du pays d'enregistrement du bateau",
    "Le numéro de série de l'émetteur",
    "Le numéro du secteur de trafic"
   ],
   "answer": "Le numéro d'identification maritime du pays d'enregistrement du bateau",
   "explanation": "Dans le code ATIS, MID désigne le numéro d'identification maritime du pays d'enregistrement du bateau.",
   "reminder": "MID = numéro du pays d'enregistrement.",
   "source": {
    "page": 33,
    "quote": "MID = numéro d’identification maritime du pays d’enregistrement du bateau"
   },
   "category": "identification-stations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4031",
   "type": "qcm",
   "question": "Que représentent les positions X1X2 du code ATIS ?",
   "choices": [
    "La deuxième ou troisième lettre de l'indicatif d'appel",
    "Les deux premiers chiffres de l'indicatif d'appel",
    "La première lettre de l'indicatif d'appel",
    "Le numéro de la classe AIS"
   ],
   "answer": "La deuxième ou troisième lettre de l'indicatif d'appel",
   "explanation": "X1X2 codent la deuxième ou troisième lettre de l'indicatif d'appel sous forme de nombre (01 = A, 02 = B, etc.).",
   "reminder": "X1X2 = une lettre de l'indicatif (2e ou 3e) traduite en nombre.",
   "source": {
    "page": 33,
    "quote": "représente la deuxième ou troisième lettre de l'indicatif d'appel, où"
   },
   "category": "identification-stations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4032",
   "type": "qcm",
   "question": "Dans le code ATIS, quel code X1X2 correspond à la lettre C ?",
   "choices": [
    "01",
    "03",
    "13",
    "30"
   ],
   "answer": "03",
   "explanation": "Selon le tableau, 01 correspond à A, 02 à B et 03 à C.",
   "reminder": "X1X2 : rang de la lettre dans l'alphabet (A=01, B=02, C=03).",
   "source": {
    "page": 33,
    "quote": "01 correspond à A, 02 correspond à B, 03 correspond à C, etc."
   },
   "category": "identification-stations",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 390 138\" width=\"390\" height=\"138\"><rect x=\"0\" y=\"0\" width=\"390\" height=\"138\" fill=\"#f8fafc\"/><text x=\"195.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Codage de la lettre dans X1X2</text><rect x=\"20.0\" y=\"45\" width=\"110\" height=\"44\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#1e3a8a\"/><text x=\"75.0\" y=\"73\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#0f172a\">A</text><text x=\"75.0\" y=\"108\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">01</text><rect x=\"140.0\" y=\"45\" width=\"110\" height=\"44\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#1e3a8a\"/><text x=\"195.0\" y=\"73\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#0f172a\">B</text><text x=\"195.0\" y=\"108\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">02</text><rect x=\"260.0\" y=\"45\" width=\"110\" height=\"44\" rx=\"6\" fill=\"#fde68a\" stroke=\"#1e3a8a\"/><text x=\"315.0\" y=\"73\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#0f172a\">C</text><text x=\"315.0\" y=\"108\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">?</text></svg>",
    "placement": "question",
    "alt": "Trois cases A, B, C avec les codes 01 et 02 sous A et B, et un point d'interrogation sous C."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4033",
   "type": "qcm",
   "question": "Que représentent les positions X3X4X5X6 du code ATIS ?",
   "choices": [
    "Le numéro MMSI complet",
    "Les 4 derniers chiffres du MID",
    "La date d'enregistrement du bateau",
    "Les 4 chiffres de l'indicatif d'appel"
   ],
   "answer": "Les 4 chiffres de l'indicatif d'appel",
   "explanation": "Les quatre dernières positions du code ATIS reprennent les 4 chiffres de l'indicatif d'appel.",
   "reminder": "X3 à X6 = les 4 chiffres de l'indicatif.",
   "source": {
    "page": 33,
    "quote": "les 4 chiffres de l’indicatif d’appel"
   },
   "category": "identification-stations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4036",
   "type": "qcm",
   "question": "Quel organisme est mentionné à côté du MID dans le tableau du code ATIS ?",
   "choices": [
    "ETSI",
    "UIT-R",
    "CCNR",
    "OMI"
   ],
   "answer": "UIT-R",
   "explanation": "Dans la colonne MID du tableau, la mention (UIT-R) accompagne la définition du numéro d'identification maritime du pays.",
   "reminder": "MID : numéro de pays relevant de l'UIT-R.",
   "source": {
    "page": 33,
    "quote": "MID = numéro d’identification maritime du pays d’enregistrement du bateau (UIT-R)"
   },
   "category": "identification-stations",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q4037",
   "type": "qcm",
   "question": "Quelle bande de fréquences le système AIS utilise-t-il pour échanger des données de navigation ?",
   "choices": [
    "La bande HF",
    "La bande mobile maritime VHF",
    "La bande UHF",
    "La bande MF"
   ],
   "answer": "La bande mobile maritime VHF",
   "explanation": "Le manuel décrit l'AIS comme un système de communications utilisant la bande mobile maritime VHF pour échanger des données de navigation.",
   "reminder": "AIS : données de navigation échangées en VHF maritime.",
   "source": {
    "page": 34,
    "quote": "Il s’agit d’un système de communications basé sur un protocole utilisant la bande mobile maritime VHF pour échanger des données de navigation."
   },
   "category": "navigation-interieure",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4038",
   "type": "qcm",
   "question": "Sur quel standard l'AIS intérieur est-il basé ?",
   "choices": [
    "Le standard SMDSM",
    "Le standard ASN",
    "Le standard AIS maritime",
    "Le standard ATIS"
   ],
   "answer": "Le standard AIS maritime",
   "explanation": "Le manuel indique que l'AIS intérieur repose sur le standard AIS maritime.",
   "reminder": "AIS intérieur = dérivé de l'AIS maritime.",
   "source": {
    "page": 34,
    "quote": "Le AIS intérieur est basé sur le standard AIS maritime."
   },
   "category": "navigation-interieure",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4039",
   "type": "qcm",
   "question": "Que désigne le sigle SIF, dont les services utilisent l'AIS intérieur ?",
   "choices": [
    "Le système d'identification fluviale",
    "Le service international des fréquences",
    "Le signal d'identification fixe",
    "Les services d'informations fluviales"
   ],
   "answer": "Les services d'informations fluviales",
   "explanation": "Les SIF sont les services d'informations fluviales (River Information Services, RIS en anglais), qui utilisent l'AIS intérieur.",
   "reminder": "SIF (RIS en anglais) = services d'informations fluviales, qui utilisent l'AIS intérieur.",
   "source": {
    "page": 34,
    "quote": "Les services d’informations fluviales (SIF) (River Information Services, RIS, en anglais) utilisent le AIS intérieur."
   },
   "category": "navigation-interieure",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4040",
   "type": "qcm",
   "question": "Selon le manuel, à quoi sert notamment l'AIS ?",
   "choices": [
    "À identifier l'émetteur à la fin de chaque émission vocale",
    "À transmettre les alertes de détresse ASN",
    "À prévenir les collisions entre les bateaux",
    "À enregistrer les communications radio"
   ],
   "answer": "À prévenir les collisions entre les bateaux",
   "explanation": "L'AIS permet aux bateaux de connaître l'identité, les données de navigation et les manœuvres des autres bateaux équipés, et sert à prévenir les collisions. L'identification en fin d'émission vocale est le rôle de l'ATIS.",
   "reminder": "AIS = anti-collision ; ATIS = identification de l'émetteur.",
   "source": {
    "page": 34,
    "quote": "Le AIS sert à prévenir les collisions entre les bateaux."
   },
   "category": "navigation-interieure",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4041",
   "type": "qcm",
   "question": "Comment les centres de trafic obtiennent-ils les informations AIS pour surveiller le trafic ?",
   "choices": [
    "Par les appels sur le canal 16",
    "Par des appels ASN sur le canal 70",
    "Par le biais de stations AIS terrestres",
    "Par les signaux ATIS des bateaux"
   ],
   "answer": "Par le biais de stations AIS terrestres",
   "explanation": "Le manuel précise que les centres de trafic obtiennent leurs informations par le biais de stations AIS terrestres.",
   "reminder": "Surveillance du trafic : stations AIS terrestres.",
   "source": {
    "page": 34,
    "quote": "Le AIS permet de surveiller le trafic, les centres de trafic obtenant leurs informations par le biais de stations AIS terrestres."
   },
   "category": "navigation-interieure",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4042",
   "type": "qcm",
   "question": "Pour quels bateaux l'AIS de classe A est-il prescrit ?",
   "choices": [
    "Pour les bateaux soumis à l'obligation de posséder l'équipement",
    "Uniquement pour les bateaux équipés de l'ASN",
    "Uniquement pour la navigation de plaisance",
    "Pour les bateaux non soumis à l'obligation"
   ],
   "answer": "Pour les bateaux soumis à l'obligation de posséder l'équipement",
   "explanation": "La classe A est prescrite pour les bateaux soumis à l'obligation, même si tous les bâtiments peuvent l'utiliser. La classe B vise les bateaux non soumis, comme la plaisance.",
   "reminder": "Classe A = bateaux obligés ; classe B = plaisance.",
   "source": {
    "page": 34,
    "quote": "La Classe A est prescrite pour les bateaux soumis à l'obligation de posséder l'équipement, mais elle peut être utilisée par tous les bâtiments."
   },
   "category": "navigation-interieure",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 210\" width=\"560\" height=\"210\"><rect x=\"0\" y=\"0\" width=\"560\" height=\"210\" fill=\"#f8fafc\"/><text x=\"280.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">AIS : classe A ou classe B</text><rect x=\"20\" y=\"40\" width=\"250\" height=\"155\" rx=\"8\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"20\" y=\"40\" width=\"250\" height=\"30\" rx=\"8\" fill=\"#dbeafe\" stroke=\"#94a3b8\"/><text x=\"145\" y=\"60\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">Classe A</text><text x=\"32\" y=\"92\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Prescrite pour les bateaux</text><text x=\"32\" y=\"116\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">soumis à l'obligation</text><text x=\"32\" y=\"140\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Peut servir à tous les bâtiments</text><text x=\"32\" y=\"164\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Répétition adaptée à la vitesse</text><text x=\"32\" y=\"188\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">et à la manœuvre</text><rect x=\"290\" y=\"40\" width=\"250\" height=\"155\" rx=\"8\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"290\" y=\"40\" width=\"250\" height=\"30\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#94a3b8\"/><text x=\"415\" y=\"60\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">Classe B</text><text x=\"302\" y=\"92\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Fonctionnalités limitées</text><text x=\"302\" y=\"116\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Bateaux non soumis à l'obligation</text><text x=\"302\" y=\"140\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Navigation de plaisance</text><text x=\"302\" y=\"164\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Émet de manière subordonnée</text><text x=\"302\" y=\"188\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">à intervalles plus longs</text></svg>",
    "placement": "explanation",
    "alt": "Tableau en deux colonnes comparant l'AIS classe A (bateaux soumis à l'obligation, répétition adaptée) et classe B (plaisance, émission subordonnée à intervalles plus longs)."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4043",
   "type": "qcm",
   "question": "En AIS de classe A, en fonction de quoi l'émetteur adapte-t-il la fréquence de répétition de l'émission ?",
   "choices": [
    "De la puissance de l'émetteur",
    "De la vitesse de navigation et de la situation de manœuvre",
    "De la distance à la station terrestre la plus proche",
    "Du nombre de bateaux à proximité"
   ],
   "answer": "De la vitesse de navigation et de la situation de manœuvre",
   "explanation": "Pour la classe A, la fréquence de répétition de l'émission est adaptée à la vitesse de navigation et à la situation de manœuvre.",
   "reminder": "AIS classe A : plus on va vite ou on manœuvre, plus il émet souvent.",
   "source": {
    "page": 34,
    "quote": "L'émetteur adapte la fréquence de répétition de l'émission à la vitesse de navigation et à la situation de manœuvre."
   },
   "category": "navigation-interieure",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q4044",
   "type": "qcm",
   "question": "Par rapport à la classe A, comment émet un AIS de classe B ?",
   "choices": [
    "De manière subordonnée et à des intervalles plus longs",
    "De manière prioritaire et à des intervalles plus courts",
    "Avec une puissance supérieure",
    "Uniquement à la demande d'un centre de trafic"
   ],
   "answer": "De manière subordonnée et à des intervalles plus longs",
   "explanation": "Le manuel indique que la classe B, aux fonctionnalités limitées, émet de manière subordonnée et à des intervalles plus longs que la classe A.",
   "reminder": "Classe B : subordonnée, intervalles plus longs.",
   "source": {
    "page": 34,
    "quote": "Par rapport à la classe A, la classe B émet de manière subordonnée et à des intervalles plus longs."
   },
   "category": "navigation-interieure",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4045",
   "type": "qcm",
   "question": "Avec quelles données un AIS doit-il être programmé avant utilisation ?",
   "choices": [
    "Le numéro de série de l'émetteur et la classe de l'antenne",
    "Le numéro de certificat de l'opérateur et le nom du propriétaire",
    "Le numéro MMSI, l'indicatif d'appel et le nom du bateau, tels qu'ils figurent sur l'autorisation",
    "Le code ATIS, le MID et le port d'attache"
   ],
   "answer": "Le numéro MMSI, l'indicatif d'appel et le nom du bateau, tels qu'ils figurent sur l'autorisation",
   "explanation": "L'AIS doit être programmé avec le MMSI, l'indicatif d'appel et le nom du bateau, exactement comme sur l'autorisation.",
   "reminder": "Programmation AIS : MMSI + indicatif + nom, comme sur l'autorisation.",
   "source": {
    "page": 34,
    "quote": "Pour utiliser un AIS, celui-ci doit être programmé avec le numéro MMSI, l'indicatif d'appel et le nom du bateau tels qu'ils figurent sur l’autorisation."
   },
   "category": "navigation-interieure",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 390 138\" width=\"390\" height=\"138\"><rect x=\"0\" y=\"0\" width=\"390\" height=\"138\" fill=\"#f8fafc\"/><text x=\"195.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e3a8a\">Programmation de l'AIS (comme sur l'autorisation)</text><rect x=\"20.0\" y=\"45\" width=\"110\" height=\"44\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#1e3a8a\"/><text x=\"75.0\" y=\"73\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#0f172a\">MMSI</text><text x=\"75.0\" y=\"108\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">numéro MMSI</text><rect x=\"140.0\" y=\"45\" width=\"110\" height=\"44\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#1e3a8a\"/><text x=\"195.0\" y=\"73\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#0f172a\">Indicatif</text><text x=\"195.0\" y=\"108\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">indicatif d'appel</text><rect x=\"260.0\" y=\"45\" width=\"110\" height=\"44\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#1e3a8a\"/><text x=\"315.0\" y=\"73\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#0f172a\">Nom</text><text x=\"315.0\" y=\"108\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">nom du bateau</text></svg>",
    "placement": "explanation",
    "alt": "Trois cases : numéro MMSI, indicatif d'appel et nom du bateau, tels qu'ils figurent sur l'autorisation."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4046",
   "type": "qcm",
   "question": "Quelle précaution faut-il prendre lors de l'installation d'un appareil AIS ?",
   "choices": [
    "Utiliser la même antenne pour l'AIS et le mariphone",
    "Relier l'AIS au mariphone par une liaison acoustique",
    "Placer l'antenne de l'AIS contre l'antenne du mariphone",
    "Ne pas placer l'antenne de l'AIS à proximité de l'antenne du mariphone"
   ],
   "answer": "Ne pas placer l'antenne de l'AIS à proximité de l'antenne du mariphone",
   "explanation": "Le manuel demande de ne pas installer l'antenne de l'AIS à proximité de celle du mariphone.",
   "reminder": "Antenne AIS : loin de l'antenne VHF.",
   "source": {
    "page": 34,
    "quote": "Lors de l'installation d'un appareil AIS, il faut veiller à ne pas placer l'antenne du AIS à proximité de l'antenne du mariphone."
   },
   "category": "equipements-installations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4047",
   "type": "qcm",
   "question": "Qui peut enregistrer les communications en navigation intérieure, et dans quel but ?",
   "choices": [
    "Personne : l'enregistrement est interdit",
    "Toute station de bateau, à des fins commerciales",
    "Les stations terrestres, à des fins de documentation",
    "Uniquement les bateaux de plaisance, pour leur sécurité"
   ],
   "answer": "Les stations terrestres, à des fins de documentation",
   "explanation": "Le manuel précise que les stations terrestres peuvent enregistrer les communications à des fins de documentation.",
   "reminder": "Enregistrement : par les stations terrestres, pour la documentation.",
   "source": {
    "page": 34,
    "quote": "À des fins de documentation, les communications peuvent être enregistrées par les stations terrestres."
   },
   "category": "navigation-interieure",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4048",
   "type": "qcm",
   "question": "Quel certificat faut-il pour contrôler ou surveiller une station de navire en navigation intérieure ?",
   "choices": [
    "Le certificat restreint d'opérateur radio pour le service radiotéléphonique sur les voies de navigation intérieure",
    "Le certificat LRC",
    "Aucun certificat n'est requis",
    "Le certificat GOC"
   ],
   "answer": "Le certificat restreint d'opérateur radio pour le service radiotéléphonique sur les voies de navigation intérieure",
   "explanation": "Seule une personne titulaire du certificat restreint d'opérateur radio pour le service radiotéléphonique sur les voies de navigation intérieure peut contrôler ou surveiller la station.",
   "reminder": "Station en navigation intérieure : certificat restreint navigation intérieure obligatoire.",
   "source": {
    "page": 34,
    "quote": "Le contrôle ou la surveillance d’une station de navire ne peut être fait que par une personne titulaire d’un certificat restreint d’opérateur radio pour le service radiotéléphonique sur les voies de navigation intérieure."
   },
   "category": "navigation-interieure",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4049",
   "type": "qcm",
   "question": "Par qui le certificat restreint d'opérateur radio pour la navigation intérieure est-il reconnu ?",
   "choices": [
    "Par toutes les administrations qui ont signé l'arrangement Rainwat",
    "Uniquement par les pays riverains du Rhin",
    "Uniquement par l'administration belge",
    "Par tous les pays membres de l'OMI"
   ],
   "answer": "Par toutes les administrations qui ont signé l'arrangement Rainwat",
   "explanation": "Délivré sur la base de l'arrangement Rainwat, ce certificat est reconnu par toutes les administrations signataires de cet arrangement régional.",
   "reminder": "Certificat navigation intérieure : valable chez tous les signataires Rainwat.",
   "source": {
    "page": 34,
    "quote": "Le certificat restreint d’opérateur radio est délivré sur la base des prescriptions définies dans l’arrangement Rainwat et est donc reconnu par toutes les administrations qui ont signé cet arrangement régional."
   },
   "category": "navigation-interieure",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4050",
   "type": "qcm",
   "question": "Dans quelle bande les stations de bateau du service fluvial peuvent-elles participer au service radiotéléphonique maritime ?",
   "choices": [
    "La bande VHF",
    "La bande MF",
    "La bande UHF",
    "La bande HF"
   ],
   "answer": "La bande VHF",
   "explanation": "Le manuel indique que les stations de bateau du service fluvial peuvent participer au service maritime dans la bande VHF.",
   "reminder": "Bateau fluvial : peut participer au service maritime en VHF.",
   "source": {
    "page": 34,
    "quote": "Les stations de bateau du service radiotéléphonique fluvial peuvent participer au service radiotéléphonique maritime dans la bande VHF."
   },
   "category": "navigation-interieure",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4051",
   "type": "qcm",
   "question": "Comment un bateau de navigation intérieure peut-il être équipé du SMDSM ?",
   "choices": [
    "Par l'ajout d'un dispositif ATIS séparé",
    "Par l'activation du canal 16 en double veille",
    "Par la programmation d'un AIS de classe B",
    "Par l'achat d'une station équipée du « CH 70 ASN » ou la transformation autorisée de la station existante"
   ],
   "answer": "Par l'achat d'une station équipée du « CH 70 ASN » ou la transformation autorisée de la station existante",
   "explanation": "Le manuel cite deux possibilités : acheter une station équipée du « CH 70 ASN » (SMDSM) ou faire transformer de manière autorisée la station existante en l'équipant du « CH 70 ASN ».",
   "reminder": "SMDSM à bord d'un bateau fluvial = « CH 70 ASN » (achat ou transformation autorisée).",
   "source": {
    "page": 35,
    "quote": "l’achat d’une station de navire de radiotéléphonie équipée du « CH 70 ASN » (SMDSM) ou • la transformation autorisée de la station de bateau existante en l'équipant du « CH 70 ASN » (SMDSM)"
   },
   "category": "navigation-interieure",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4053",
   "type": "qcm",
   "question": "Quels certificats sont nécessaires pour utiliser des stations de radiotéléphonie équipées du SMDSM ?",
   "choices": [
    "Aucun certificat supplémentaire",
    "Uniquement un certificat ATIS",
    "Uniquement le certificat restreint navigation intérieure",
    "SRC, LRC, ROC ou GOC"
   ],
   "answer": "SRC, LRC, ROC ou GOC",
   "explanation": "Le manuel précise que l'utilisation de stations équipées du SMDSM exige d'autres certificats : SRC, LRC, ROC ou GOC.",
   "reminder": "SMDSM : certificat SRC, LRC, ROC ou GOC.",
   "source": {
    "page": 35,
    "quote": "Pour l’utilisation de stations de radiotéléphonie équipées du SMDSM, d’autres certificats sont nécessaires (SRC, LRC, ROC ou GOC)."
   },
   "category": "navigation-interieure",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 510 120\" width=\"510\" height=\"120\"><rect x=\"0\" y=\"0\" width=\"510\" height=\"120\" fill=\"#f8fafc\"/><text x=\"255.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Certificats exigés pour une station SMDSM</text><rect x=\"20.0\" y=\"45\" width=\"110\" height=\"44\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#1e3a8a\"/><text x=\"75.0\" y=\"73\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#0f172a\">SRC</text><rect x=\"140.0\" y=\"45\" width=\"110\" height=\"44\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#1e3a8a\"/><text x=\"195.0\" y=\"73\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#0f172a\">LRC</text><rect x=\"260.0\" y=\"45\" width=\"110\" height=\"44\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#1e3a8a\"/><text x=\"315.0\" y=\"73\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#0f172a\">ROC</text><rect x=\"380.0\" y=\"45\" width=\"110\" height=\"44\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#1e3a8a\"/><text x=\"435.0\" y=\"73\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#0f172a\">GOC</text></svg>",
    "placement": "explanation",
    "alt": "Quatre cases : SRC, LRC, ROC et GOC."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4054",
   "type": "qcm",
   "question": "Sur un appareil pouvant basculer entre les réglages fluviaux et maritimes, que faut-il activer en navigation fluviale ?",
   "choices": [
    "L'ASN",
    "L'ATIS et l'ASN ensemble",
    "Ni l'ATIS ni l'ASN",
    "L'ATIS"
   ],
   "answer": "L'ATIS",
   "explanation": "Le manuel précise que l'ATIS doit être activé en navigation fluviale, alors que l'ASN doit l'être en mer.",
   "reminder": "Fleuve = ATIS ; mer = ASN.",
   "source": {
    "page": 35,
    "quote": "Pour la navigation fluviale, l'ATIS doit être activé. En mer, l'ASN doit être activé."
   },
   "category": "navigation-interieure",
   "difficulty": "facile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 162\" width=\"560\" height=\"162\"><rect x=\"0\" y=\"0\" width=\"560\" height=\"162\" fill=\"#f8fafc\"/><text x=\"280.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Appareil bi-mode : bon réglage selon la zone</text><rect x=\"20\" y=\"40\" width=\"250\" height=\"107\" rx=\"8\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"20\" y=\"40\" width=\"250\" height=\"30\" rx=\"8\" fill=\"#dbeafe\" stroke=\"#94a3b8\"/><text x=\"145\" y=\"60\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">Navigation fluviale</text><text x=\"32\" y=\"92\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">ATIS activé</text><text x=\"32\" y=\"116\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Réduction de puissance</text><text x=\"32\" y=\"140\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">(ASN interdit)</text><rect x=\"290\" y=\"40\" width=\"250\" height=\"107\" rx=\"8\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"290\" y=\"40\" width=\"250\" height=\"30\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#94a3b8\"/><text x=\"415\" y=\"60\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">En mer</text><text x=\"302\" y=\"92\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">ASN activé</text><text x=\"302\" y=\"116\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">(équipements radio en mer)</text></svg>",
    "placement": "explanation",
    "alt": "Deux colonnes : en navigation fluviale, ATIS activé avec réduction de puissance ; en mer, ASN activé."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4056",
   "type": "qcm",
   "question": "Quels réglages le manuel associe-t-il au mode prévu pour les voies de navigation intérieure sur un appareil bi-mode ?",
   "choices": [
    "L'ATIS et la réduction de puissance",
    "L'AIS de classe A et l'ASN",
    "L'ASN et la pleine puissance",
    "L'ASN et l'ATIS"
   ],
   "answer": "L'ATIS et la réduction de puissance",
   "explanation": "Les réglages pour les voies de navigation intérieure comprennent l'ATIS et la réduction de puissance ; ceux prévus pour la mer comprennent l'ASN.",
   "reminder": "Mode fluvial = ATIS + puissance réduite.",
   "source": {
    "page": 35,
    "quote": "Il existe actuellement sur le marché des appareils qui permettant de basculer entre les réglages prévus pour les voies de navigation intérieure (avec ATIS, réduction de puissance...) et ceux prévus pour l’utilisation d’équipements radioélectriques en mer (comme l’ASN…). L'appareil doit être réglé correctement en fonction de la zone dans laquelle on navigue."
   },
   "category": "equipements-installations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4057",
   "type": "qcm",
   "question": "Pourquoi d'autres prescriptions s'appliquent-elles aux installations fluviales équipées pour l'exploitation du SMDSM ?",
   "choices": [
    "Afin qu'elles soient dispensées de certificat",
    "Afin qu'elles puissent utiliser les canaux 77 et 72",
    "Afin qu'elles puissent émettre l'ATIS en mer",
    "Afin qu'elles puissent être exploitées sur les voies navigables maritimes"
   ],
   "answer": "Afin qu'elles puissent être exploitées sur les voies navigables maritimes",
   "explanation": "Le manuel indique que ces installations fluviales équipées pour le SMDSM sont soumises à d'autres prescriptions afin d'être exploitées sur les voies navigables maritimes.",
   "reminder": "Installation fluviale + SMDSM : prescriptions supplémentaires pour naviguer sur les voies maritimes.",
   "source": {
    "page": 34,
    "quote": "D’autres prescriptions sont applicables aux installations de radiotéléphonie du service radiotéléphonique fluvial équipées pour l’exploitation de SMDSM, afin d’être exploitées sur les voies navigables maritimes."
   },
   "category": "navigation-interieure",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q4058",
   "type": "qcm",
   "question": "Que signifie le sigle CIAC ?",
   "choices": [
    "Code international d'appel de canal",
    "Centre international d'appel côtier",
    "Certificat international d'aptitude à la communication",
    "Code d'identification de l'autorité comptable"
   ],
   "answer": "Code d'identification de l'autorité comptable",
   "explanation": "Le glossaire définit le CIAC comme le Code d'identification de l'autorité comptable.",
   "reminder": "CIAC = Code d'Identification de l'Autorité Comptable.",
   "source": {
    "page": 36,
    "quote": "Code d’identification de l’autorité comptable (CIAC) : Code d’identification des autorités comptables."
   },
   "category": "glossaire",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4059",
   "type": "qcm",
   "question": "Qu'identifie le code CIAC ?",
   "choices": [
    "Le pays d'enregistrement du bateau",
    "L'organisme public ou privé reconnu chargé de la comptabilité pour le règlement des comptes internationaux maritimes",
    "La station côtière qui relaie un appel de détresse",
    "Le titulaire du certificat d'opérateur"
   ],
   "answer": "L'organisme public ou privé reconnu chargé de la comptabilité pour le règlement des comptes internationaux maritimes",
   "explanation": "Le CIAC identifie l'organisme, public ou privé reconnu, chargé de la comptabilité pour le règlement des comptes internationaux maritimes.",
   "reminder": "CIAC : qui paie/facture les communications maritimes internationales.",
   "source": {
    "page": 36,
    "quote": "Ce code identifie l’organisme public ou privé reconnu, chargé de la comptabilité pour le règlement des comptes internationaux maritimes."
   },
   "category": "glossaire",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4060",
   "type": "qcm",
   "question": "À qui le code CIAC est-il communiqué ?",
   "choices": [
    "À l'opérateur d'une station qui établit une liaison de radiocommunication",
    "À tous les bateaux d'un même secteur",
    "Uniquement à l'administration qui délivre le certificat",
    "Au centre de sauvetage le plus proche"
   ],
   "answer": "À l'opérateur d'une station qui établit une liaison de radiocommunication",
   "explanation": "Le glossaire précise que le CIAC est communiqué à l'opérateur de la station qui établit une liaison de radiocommunication.",
   "reminder": "Le CIAC est donné à l'opérateur de la station qui établit la liaison.",
   "source": {
    "page": 36,
    "quote": "Le code est communiqué à l’opérateur d’une station qui établit une liaison de radiocommunication."
   },
   "category": "glossaire",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4061",
   "type": "qcm",
   "question": "Comment le glossaire définit-il l'AIS ?",
   "choices": [
    "Un circuit qui active le haut-parleur au-delà d'un seuil",
    "Un système d'identification automatique des émetteurs radio à bord sur les voies intérieures",
    "Un système de radiolocalisation transmettant la position d'un navire (relevé GPS) vers un système radar à bord ou à terre",
    "Un appel sélectif numérique autorisé uniquement en mer"
   ],
   "answer": "Un système de radiolocalisation transmettant la position d'un navire (relevé GPS) vers un système radar à bord ou à terre",
   "explanation": "Le glossaire définit l'AIS comme un système de radiolocalisation transmettant la position GPS d'un navire vers un radar à bord ou à terre. La deuxième proposition décrit l'ATIS.",
   "reminder": "AIS = position GPS transmise vers un radar.",
   "source": {
    "page": 36,
    "quote": "Système de radiolocalisation permettant de transmettre la position d'un navire (relevé GPS) vers un système radar à bord d'un navire ou à terre."
   },
   "category": "glossaire",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4062",
   "type": "qcm",
   "question": "Dans quels pays la notion de « canal imposé » est-elle principalement utilisée ?",
   "choices": [
    "En France et en Belgique",
    "En Allemagne et en Suisse",
    "En Belgique et aux Pays-Bas",
    "Aux Pays-Bas et en Suisse"
   ],
   "answer": "En Belgique et aux Pays-Bas",
   "explanation": "Le glossaire précise que le canal imposé est principalement utilisé en Belgique et aux Pays-Bas. La Suisse et les Pays-Bas sont cités pour les postes de trafic.",
   "reminder": "Canal imposé : surtout en Belgique et aux Pays-Bas.",
   "source": {
    "page": 36,
    "quote": "Canal de radiotéléphonie utilisé par les postes de trafic et les bateaux pour la communication d'informations concernant la protection de personnes et la sécurité de la navigation (principalement utilisée en Belgique et aux Pays-Bas)."
   },
   "category": "glossaire",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4063",
   "type": "qcm",
   "question": "Pour quels réseaux le canal imposé est-il utilisé simultanément sur un secteur donné ?",
   "choices": [
    "Les réseaux de correspondance publique et bateau-bateau",
    "Les réseaux de radiocommunications de bord et informations nautiques",
    "Les réseaux bateau-bateau et informations nautiques",
    "Les réseaux bateau-autorités portuaires et radiocommunications de bord"
   ],
   "answer": "Les réseaux bateau-bateau et informations nautiques",
   "explanation": "Le canal imposé sert simultanément, sur un secteur donné, aux réseaux bateau-bateau et informations nautiques.",
   "reminder": "Canal imposé = bateau-bateau + informations nautiques sur le même canal.",
   "source": {
    "page": 36,
    "quote": "Le canal imposé est le canal utilisé sur un secteur donné simultanément pour les radiocommunications sur les réseaux bateau-bateau (par exemple pour la détermination de la route à suivre) et informations nautiques."
   },
   "category": "glossaire",
   "difficulty": "difficile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 156\" width=\"460\" height=\"156\"><rect x=\"0\" y=\"0\" width=\"460\" height=\"156\" fill=\"#f8fafc\"/><text x=\"230\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#1e3a8a\">Canal imposé (surtout en Belgique et aux Pays-Bas)</text><rect x=\"40\" y=\"45\" width=\"180\" height=\"44\" rx=\"6\" fill=\"#fde68a\" stroke=\"#1e3a8a\"/><text x=\"130\" y=\"73\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"15\" font-weight=\"bold\" fill=\"#0f172a\">Bateau-bateau</text><text x=\"130\" y=\"108\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">ex. détermination</text><text x=\"130\" y=\"126\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">de la route à suivre</text><rect x=\"240\" y=\"45\" width=\"180\" height=\"44\" rx=\"6\" fill=\"#fde68a\" stroke=\"#1e3a8a\"/><text x=\"330\" y=\"73\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"15\" font-weight=\"bold\" fill=\"#0f172a\">Infos nautiques</text><text x=\"330\" y=\"108\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">même canal, même secteur,</text><text x=\"330\" y=\"126\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">simultanément</text></svg>",
    "placement": "explanation",
    "alt": "Deux cases surlignées : le canal imposé sert simultanément, sur un même secteur, au réseau bateau-bateau (par exemple la route à suivre) et au réseau informations nautiques."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4064",
   "type": "qcm",
   "question": "Selon le glossaire, laquelle de ces communications fait partie des radiocommunications de bord (Intraship) ?",
   "choices": [
    "La communication avec un réseau téléphonique public",
    "Les instructions relatives à la manœuvre des aussières et à l'amarrage",
    "L'information sur l'état des voies navigables",
    "L'attribution d'aires de stationnement par le port"
   ],
   "answer": "Les instructions relatives à la manœuvre des aussières et à l'amarrage",
   "explanation": "Le glossaire inclut dans les radiocommunications de bord les échanges à bord, au sein d'un groupe de bateaux remorqués ou poussés, et les instructions de manœuvre des aussières et d'amarrage.",
   "reminder": "Intraship : à bord, au sein du convoi, aussières et amarrage.",
   "source": {
    "page": 36,
    "quote": "Radiocommunications échangées à bord d'un bateau ou radiocommunications échangées au sein d'un groupe de bateaux, remorqués ou poussés, ainsi que celles concernant les instructions relatives à la manœuvre des aussières et à l'amarrage."
   },
   "category": "glossaire",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4065",
   "type": "qcm",
   "question": "Que sont les « administrations publiques contractantes » ?",
   "choices": [
    "Les administrations membres de l'OMI",
    "Les administrations qui gèrent les ports maritimes",
    "Les administrations qui ont signé la convention SOLAS",
    "Les administrations des pays qui ont signé l'arrangement régional (Rainwat)"
   ],
   "answer": "Les administrations des pays qui ont signé l'arrangement régional (Rainwat)",
   "explanation": "Le glossaire définit les administrations publiques contractantes comme celles des pays signataires de l'arrangement régional Rainwat.",
   "reminder": "Administrations contractantes = signataires de Rainwat.",
   "source": {
    "page": 36,
    "quote": "Les administrations publiques contractantes sont les administrations des pays qui ont signé l'arrangement régional (arrangement Rainwat)."
   },
   "category": "glossaire",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4066",
   "type": "qcm",
   "question": "Quel organisme édite le « Guide de radiocommunication pour la navigation intérieure » ?",
   "choices": [
    "L'OMI",
    "L'UIT",
    "Le Comité Rainwat",
    "La CCNR"
   ],
   "answer": "La CCNR",
   "explanation": "Selon le glossaire, la CCNR édite le « Guide de radiocommunication pour la navigation intérieure ».",
   "reminder": "Le guide de radiocommunication fluviale est édité par la CCNR.",
   "source": {
    "page": 36,
    "quote": "Le CCNR édite un « Guide de radiocommunication pour la navigation intérieure »."
   },
   "category": "glossaire",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4067",
   "type": "qcm",
   "question": "Que signifie le sigle CCNR ?",
   "choices": [
    "Centre de contrôle de la navigation sur le Rhin",
    "Comité de coordination de la navigation régionale",
    "Commission centrale pour la navigation du Rhin",
    "Commission consultative des normes radio"
   ],
   "answer": "Commission centrale pour la navigation du Rhin",
   "explanation": "Le glossaire développe CCNR en Commission centrale pour la navigation du Rhin, une institution internationale traitant les questions de navigation intérieure.",
   "reminder": "CCNR = Commission Centrale pour la Navigation du Rhin.",
   "source": {
    "page": 36,
    "quote": "CCNR (Commission centrale pour la navigation du Rhin)"
   },
   "category": "glossaire",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4068",
   "type": "qcm",
   "question": "Quel est le rôle du Comité Rainwat ?",
   "choices": [
    "Délivrer les certificats d'opérateur",
    "Attribuer les numéros MMSI",
    "Coordonner les sauvetages sur le Rhin",
    "Administrer, harmoniser et optimiser l'arrangement régional"
   ],
   "answer": "Administrer, harmoniser et optimiser l'arrangement régional",
   "explanation": "Le glossaire indique que le Comité Rainwat est établi pour administrer, harmoniser et optimiser l'arrangement régional.",
   "reminder": "Comité Rainwat : administre, harmonise, optimise l'arrangement.",
   "source": {
    "page": 36,
    "quote": "Le Comité Rainwat est établi pour administrer, harmoniser et optimiser l’arrangement régional."
   },
   "category": "glossaire",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4069",
   "type": "qcm",
   "question": "Combien de pays ont signé l'arrangement régional (Rainwat) selon le glossaire ?",
   "choices": [
    "27",
    "12",
    "16",
    "18"
   ],
   "answer": "16",
   "explanation": "Le glossaire précise que 16 pays ont signé l'arrangement régional.",
   "reminder": "Rainwat : 16 pays signataires.",
   "source": {
    "page": 36,
    "quote": "16 pays ont signé l’arrangement régional."
   },
   "category": "glossaire",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 390 174\" width=\"390\" height=\"174\"><rect x=\"0\" y=\"0\" width=\"390\" height=\"174\" fill=\"#f8fafc\"/><text x=\"195.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Arrangement régional Rainwat</text><rect x=\"20.0\" y=\"45\" width=\"110\" height=\"44\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#1e3a8a\"/><text x=\"75.0\" y=\"73\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#0f172a\">Bucarest</text><text x=\"75.0\" y=\"108\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">2012</text><rect x=\"140.0\" y=\"45\" width=\"110\" height=\"44\" rx=\"6\" fill=\"#fde68a\" stroke=\"#1e3a8a\"/><text x=\"195.0\" y=\"73\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#0f172a\">16 pays</text><text x=\"195.0\" y=\"108\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">signataires</text><rect x=\"260.0\" y=\"45\" width=\"110\" height=\"44\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#1e3a8a\"/><text x=\"315.0\" y=\"73\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#0f172a\">Comité</text><text x=\"315.0\" y=\"108\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">administre,</text><text x=\"315.0\" y=\"126\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">harmonise,</text><text x=\"315.0\" y=\"144\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"11\" fill=\"#334155\">optimise</text></svg>",
    "placement": "explanation",
    "alt": "Trois cases : signé à Bucarest en 2012, 16 pays signataires (surligné), un Comité qui administre, harmonise et optimise."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4070",
   "type": "qcm",
   "question": "Selon le glossaire, quelle version de l'arrangement régional est en vigueur et téléchargeable sur le site Rainwat ?",
   "choices": [
    "Arrangement Rainwat Bucarest 2012",
    "Arrangement Rainwat Londres 1974",
    "Arrangement Rainwat Genève 2020",
    "Arrangement Rainwat Strasbourg 2017"
   ],
   "answer": "Arrangement Rainwat Bucarest 2012",
   "explanation": "Le glossaire cite l'Arrangement Rainwat Bucarest 2012 comme la dernière version en vigueur, disponible sur le site Rainwat.",
   "reminder": "Version de référence : Rainwat Bucarest 2012.",
   "source": {
    "page": 36,
    "quote": "La dernière version de l’arrangement régional en vigueur actuellement (Arrangement Rainwat Bucarest 2012) est disponible au téléchargement sur ce site Internet."
   },
   "category": "glossaire",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q4072",
   "type": "qcm",
   "question": "Quel est l'équivalent anglais du sigle SMDSM ?",
   "choices": [
    "GMDSS",
    "ATIS",
    "DSC",
    "SOLAS"
   ],
   "answer": "GMDSS",
   "explanation": "Le glossaire indique que le SMDSM (Système mondial de détresse et de sécurité en mer) se dit GMDSS en anglais. DSC est l'équivalent anglais de l'ASN.",
   "reminder": "SMDSM = GMDSS ; ASN = DSC.",
   "source": {
    "page": 37,
    "quote": "SMDSM (ou GMDSS en anglais) Système mondial de détresse et de sécurité en mer (Global Maritime Distress and Safety System en anglais)"
   },
   "category": "glossaire",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4073",
   "type": "qcm",
   "question": "Selon le glossaire, de quoi l'OMI est-elle responsable ?",
   "choices": [
    "De la sécurité de la navigation",
    "De la coordination internationale des fréquences",
    "De l'arrangement régional Rainwat",
    "De la base de données MARS"
   ],
   "answer": "De la sécurité de la navigation",
   "explanation": "Le glossaire indique que l'OMI est responsable de la sécurité de la navigation. La coordination des fréquences et la base MARS relèvent de l'UIT.",
   "reminder": "OMI = sécurité de la navigation ; UIT = fréquences.",
   "source": {
    "page": 37,
    "quote": "L’OMI est responsable de la sécurité de la navigation."
   },
   "category": "glossaire",
   "difficulty": "facile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 186\" width=\"560\" height=\"186\"><rect x=\"0\" y=\"0\" width=\"560\" height=\"186\" fill=\"#f8fafc\"/><text x=\"280.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">OMI et UIT (glossaire)</text><rect x=\"20\" y=\"40\" width=\"250\" height=\"131\" rx=\"8\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"20\" y=\"40\" width=\"250\" height=\"30\" rx=\"8\" fill=\"#dbeafe\" stroke=\"#94a3b8\"/><text x=\"145\" y=\"60\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">OMI (IMO)</text><text x=\"32\" y=\"92\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Sécurité de la navigation</text><text x=\"32\" y=\"116\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Instrument : convention SOLAS</text><rect x=\"290\" y=\"40\" width=\"250\" height=\"131\" rx=\"8\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"290\" y=\"40\" width=\"250\" height=\"30\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#94a3b8\"/><text x=\"415\" y=\"60\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">UIT (ITU)</text><text x=\"302\" y=\"92\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Coordination des fréquences</text><text x=\"302\" y=\"116\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Normalisation des télécoms</text><text x=\"302\" y=\"140\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Outil : RR</text><text x=\"302\" y=\"164\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Base de données MARS</text></svg>",
    "placement": "explanation",
    "alt": "Comparaison : l'OMI est responsable de la sécurité de la navigation (SOLAS) ; l'UIT coordonne les fréquences, normalise, publie le RR et gère la base MARS."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4074",
   "type": "qcm",
   "question": "Quelle convention le glossaire cite-t-il comme instrument important de l'OMI ?",
   "choices": [
    "Le Règlement des radiocommunications (RR)",
    "La Convention SOLAS",
    "La norme ETSI EN 300 698-1",
    "L'arrangement Rainwat"
   ],
   "answer": "La Convention SOLAS",
   "explanation": "La Convention SOLAS (Safety of Life at Sea) est présentée comme un instrument important de l'OMI ; le RR est l'outil majeur de l'UIT.",
   "reminder": "SOLAS → OMI ; RR → UIT.",
   "source": {
    "page": 37,
    "quote": "La Convention internationale pour la sauvegarde de la vie humaine en mer (Convention SOLAS (Safety of Life at Sea)) est un instrument important de l’OMI."
   },
   "category": "glossaire",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4075",
   "type": "qcm",
   "question": "Que signifie SOLAS ?",
   "choices": [
    "Standard of Life-saving Appliances at Sea",
    "Signal of Location and Search",
    "Safety of Life at Sea",
    "Ship Operating Licence and Service"
   ],
   "answer": "Safety of Life at Sea",
   "explanation": "Le glossaire développe SOLAS en Safety of Life at Sea, la convention internationale pour la sauvegarde de la vie humaine en mer.",
   "reminder": "SOLAS = sauvegarde de la vie humaine en mer.",
   "source": {
    "page": 37,
    "quote": "Convention SOLAS (Safety of Life at Sea)"
   },
   "category": "glossaire",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4076",
   "type": "qcm",
   "question": "De quoi l'UIT est-elle chargée selon le glossaire ?",
   "choices": [
    "De l'administration de l'arrangement Rainwat",
    "De la coordination internationale de l'utilisation des fréquences et de la normalisation des systèmes de télécommunications",
    "De la sécurité de la navigation",
    "De la délivrance des certificats d'opérateur belges"
   ],
   "answer": "De la coordination internationale de l'utilisation des fréquences et de la normalisation des systèmes de télécommunications",
   "explanation": "Le glossaire charge l'UIT de coordonner l'utilisation des fréquences à l'échelle internationale et de normaliser les systèmes de télécommunications.",
   "reminder": "UIT = fréquences et normes de télécommunications.",
   "source": {
    "page": 37,
    "quote": "L’Union internationale des télécommunications est chargée de la coordination de l’utilisation des fréquences à l’échelle internationale et de la normalisation des systèmes de télécommunications."
   },
   "category": "glossaire",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4077",
   "type": "qcm",
   "question": "Quel outil majeur de l'UIT le glossaire cite-t-il ?",
   "choices": [
    "Le Guide de radiocommunication CCNR",
    "Le Règlement des radiocommunications (RR)",
    "La Convention SOLAS",
    "L'arrangement de Bucarest"
   ],
   "answer": "Le Règlement des radiocommunications (RR)",
   "explanation": "Le glossaire présente le Règlement des radiocommunications (RR) comme un outil majeur de l'UIT.",
   "reminder": "RR = outil de l'UIT.",
   "source": {
    "page": 37,
    "quote": "Le Règlement des radiocommunications (RR) est un outil majeur de l’UIT."
   },
   "category": "glossaire",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4078",
   "type": "qcm",
   "question": "Qu'est-ce que la base de données MARS ?",
   "choices": [
    "La base de données mondiale de l'UIT reprenant tous les navires opérant en mer",
    "La base de données des centres de trafic européens",
    "La base de données Rainwat des certificats d'opérateur",
    "La base de données de l'OMI reprenant les bateaux de navigation intérieure"
   ],
   "answer": "La base de données mondiale de l'UIT reprenant tous les navires opérant en mer",
   "explanation": "Le glossaire définit MARS comme la base de données mondiale de l'UIT reprenant tous les navires opérant en mer.",
   "reminder": "MARS = base mondiale UIT des navires en mer.",
   "source": {
    "page": 37,
    "quote": "Base de données mondiale de l’UIT reprenant tous les navires opérant en mer."
   },
   "category": "glossaire",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4079",
   "type": "qcm",
   "question": "Comment le glossaire définit-il le service maritime de radiotéléphonie ?",
   "choices": [
    "Un service réservé aux communications à bord d'un navire",
    "Un service international VHF sur les voies de navigation intérieure",
    "Un service entre stations de navire et réseaux téléphoniques publics",
    "Un service mobile de radiotéléphonie entre stations côtières et stations de navire ou entre stations de navire"
   ],
   "answer": "Un service mobile de radiotéléphonie entre stations côtières et stations de navire ou entre stations de navire",
   "explanation": "Le service maritime de radiotéléphonie relie les stations côtières aux stations de navire, ou les stations de navire entre elles.",
   "reminder": "Service maritime = côtière ↔ navire et navire ↔ navire.",
   "source": {
    "page": 37,
    "quote": "Service mobile de radiotéléphonie entre les stations côtières et les stations de navire ou entre les stations de navire."
   },
   "category": "glossaire",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4080",
   "type": "qcm",
   "question": "Que sont les radiocommunications de correspondance publique ?",
   "choices": [
    "Des radiocommunications entre stations de navire uniquement",
    "Des radiocommunications à bord d'un même bateau",
    "Des radiocommunications entre stations de navire et réseaux de télécommunications publics nationaux",
    "Des radiocommunications entre bateaux et autorités portuaires"
   ],
   "answer": "Des radiocommunications entre stations de navire et réseaux de télécommunications publics nationaux",
   "explanation": "Le glossaire définit la correspondance publique comme les échanges entre stations de navire et réseaux de télécommunications publics nationaux.",
   "reminder": "Correspondance publique = navire ↔ réseau téléphonique public.",
   "source": {
    "page": 37,
    "quote": "Radiocommunications échangées entre les stations de navire et les réseaux de télécommunications publics nationaux."
   },
   "category": "glossaire",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4081",
   "type": "qcm",
   "question": "Que désigne la « procédure d'appel » dans le glossaire ?",
   "choices": [
    "La procédure d'enregistrement des communications",
    "La procédure de programmation de l'ATIS",
    "La procédure d'établissement de liaisons de radiocommunications",
    "La procédure de fin d'une situation de détresse"
   ],
   "answer": "La procédure d'établissement de liaisons de radiocommunications",
   "explanation": "Le glossaire définit la procédure d'appel comme la procédure d'établissement de liaisons de radiocommunications.",
   "reminder": "Procédure d'appel = établir la liaison.",
   "source": {
    "page": 37,
    "quote": "Procédure d’établissement de liaisons de radiocommunications."
   },
   "category": "glossaire",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4082",
   "type": "qcm",
   "question": "Comment le glossaire définit-il une installation radioélectrique ?",
   "choices": [
    "Une station radiotéléphonique à bord d'un navire pouvant être composée de plusieurs émetteurs",
    "Un appareil portatif utilisé sur le canal 15/17",
    "Un émetteur unique fixé à terre",
    "Une antenne et son câble d'alimentation"
   ],
   "answer": "Une station radiotéléphonique à bord d'un navire pouvant être composée de plusieurs émetteurs",
   "explanation": "Selon le glossaire, une installation radioélectrique est une station radiotéléphonique à bord pouvant comporter plusieurs émetteurs.",
   "reminder": "Installation radioélectrique = station de bord, éventuellement plusieurs émetteurs.",
   "source": {
    "page": 37,
    "quote": "Une station radiotéléphonique à bord d’un navire pouvant être composée de plusieurs émetteurs."
   },
   "category": "glossaire",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4083",
   "type": "qcm",
   "question": "Comment le glossaire définit-il la radiotéléphonie pour la navigation intérieure ?",
   "choices": [
    "Un service national de radiotéléphonie HF sur les fleuves",
    "Un service maritime entre stations côtières et navires",
    "Un service international de radiotéléphonie mobile VHF sur les voies de navigation intérieure",
    "Un service de radiolocalisation par GPS"
   ],
   "answer": "Un service international de radiotéléphonie mobile VHF sur les voies de navigation intérieure",
   "explanation": "Le glossaire parle d'un service international de radiotéléphonie mobile VHF sur les voies de navigation intérieure.",
   "reminder": "Radiotéléphonie fluviale = service international VHF mobile.",
   "source": {
    "page": 37,
    "quote": "Service international de radiotéléphonie mobile VHF sur les voies de navigation intérieure."
   },
   "category": "glossaire",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4084",
   "type": "qcm",
   "question": "Dans les radiocommunications d'informations nautiques, quel type de stations les autorités peuvent-elles utiliser ?",
   "choices": [
    "Uniquement des stations mobiles",
    "Soit des stations terrestres fixes, soit des stations mobiles",
    "Uniquement des stations côtières maritimes",
    "Uniquement des stations terrestres fixes"
   ],
   "answer": "Soit des stations terrestres fixes, soit des stations mobiles",
   "explanation": "Pour les informations nautiques, le glossaire précise que les stations des autorités peuvent être fixes à terre ou mobiles. Pour les autorités portuaires, elles devraient si possible être terrestres.",
   "reminder": "Informations nautiques : stations d'autorité fixes ou mobiles.",
   "source": {
    "page": 37,
    "quote": "Les stations des autorités susmentionnées peuvent être soit des stations terrestres fixes, soit des stations mobiles."
   },
   "category": "glossaire",
   "difficulty": "difficile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 186\" width=\"560\" height=\"186\"><rect x=\"0\" y=\"0\" width=\"560\" height=\"186\" fill=\"#f8fafc\"/><text x=\"280.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Stations des autorités (glossaire)</text><rect x=\"20\" y=\"40\" width=\"250\" height=\"131\" rx=\"8\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"20\" y=\"40\" width=\"250\" height=\"30\" rx=\"8\" fill=\"#dbeafe\" stroke=\"#94a3b8\"/><text x=\"145\" y=\"60\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">Informations nautiques</text><text x=\"32\" y=\"92\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Autorités des voies</text><text x=\"32\" y=\"116\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">de navigation intérieure</text><text x=\"32\" y=\"140\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Stations : terrestres fixes</text><text x=\"32\" y=\"164\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">OU mobiles</text><rect x=\"290\" y=\"40\" width=\"250\" height=\"131\" rx=\"8\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"290\" y=\"40\" width=\"250\" height=\"30\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#94a3b8\"/><text x=\"415\" y=\"60\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">Autorités portuaires</text><text x=\"302\" y=\"92\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Autorités des ports intérieurs</text><text x=\"302\" y=\"116\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Stations : si possible</text><text x=\"302\" y=\"140\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">terrestres</text></svg>",
    "placement": "explanation",
    "alt": "Comparaison : pour les informations nautiques, stations d'autorité fixes ou mobiles ; pour les autorités portuaires, si possible des stations terrestres."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4085",
   "type": "qcm",
   "question": "Dans les radiocommunications bateau-autorités portuaires, quel type de stations les autorités devraient-elles utiliser ?",
   "choices": [
    "Si possible des stations terrestres",
    "Obligatoirement des stations mobiles",
    "Des stations côtières maritimes uniquement",
    "Des stations de navire amarrées"
   ],
   "answer": "Si possible des stations terrestres",
   "explanation": "Le glossaire indique que les stations des autorités compétentes pour les ports intérieurs devraient si possible être des stations terrestres.",
   "reminder": "Autorités portuaires : stations terrestres si possible.",
   "source": {
    "page": 38,
    "quote": "Les stations des autorités susmentionnées devraient si possible être des stations terrestres."
   },
   "category": "glossaire",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q4086",
   "type": "qcm",
   "question": "Quelle caractéristique le glossaire attribue-t-il à l'indicatif d'appel d'un navire ou bateau ?",
   "choices": [
    "Il change à chaque voyage",
    "Il est unique au monde",
    "Il est unique dans chaque pays seulement",
    "Il est partagé par tous les bateaux d'un même armateur"
   ],
   "answer": "Il est unique au monde",
   "explanation": "Le glossaire précise que chaque navire ou bateau participant au service maritime ou fluvial possède un indicatif d'appel unique au monde.",
   "reminder": "Indicatif d'appel : unique au monde.",
   "source": {
    "page": 38,
    "quote": "Chaque navire/bateau participant au service radiotéléphonique maritime ou fluvial est doté d’un indicatif d’appel. Cet indicatif est unique au monde."
   },
   "category": "glossaire",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4087",
   "type": "qcm",
   "question": "Que fait le circuit silencieux (squelch) ?",
   "choices": [
    "Il coupe automatiquement l'émetteur après cinq minutes",
    "Il transmet l'identification de la station en fin d'émission",
    "Il réduit la puissance d'émission à 1 watt",
    "Il active le haut-parleur dès qu'un signal de réception dépasse un seuil configurable"
   ],
   "answer": "Il active le haut-parleur dès qu'un signal de réception dépasse un seuil configurable",
   "explanation": "Selon le glossaire, le squelch active le haut-parleur lorsque le signal reçu dépasse un seuil configurable.",
   "reminder": "Squelch : le haut-parleur s'ouvre au-dessus d'un seuil réglable.",
   "source": {
    "page": 38,
    "quote": "Le circuit silencieux (« squelch » en anglais) active le haut-parleur dès qu’un signal de réception dépasse un certain seuil configurable."
   },
   "category": "glossaire",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 170\" width=\"560\" height=\"170\"><rect x=\"0\" y=\"0\" width=\"560\" height=\"170\" fill=\"#f8fafc\"/><text x=\"280.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Circuit silencieux (squelch)</text><text x=\"20\" y=\"65\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">Signal faible (navire lointain)</text><rect x=\"230\" y=\"50\" width=\"50\" height=\"22\" rx=\"3\" fill=\"#93c5fd\" stroke=\"#1e3a8a\"/><text x=\"288\" y=\"66\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">haut-parleur muet</text><text x=\"20\" y=\"105\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">Seuil configurable</text><rect x=\"230\" y=\"90\" width=\"110\" height=\"22\" rx=\"3\" fill=\"#93c5fd\" stroke=\"#1e3a8a\"/><text x=\"20\" y=\"145\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">Signal fort (navire proche)</text><rect x=\"230\" y=\"130\" width=\"190\" height=\"22\" rx=\"3\" fill=\"#93c5fd\" stroke=\"#1e3a8a\"/><text x=\"428\" y=\"146\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">haut-parleur actif</text></svg>",
    "placement": "explanation",
    "alt": "Barres de niveau de signal : un signal faible sous le seuil laisse le haut-parleur muet, un signal fort au-dessus du seuil l'active."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4088",
   "type": "qcm",
   "question": "Quel est l'intérêt du circuit silencieux (squelch) ?",
   "choices": [
    "Empêcher les autres stations d'entendre la conversation",
    "Protéger l'installation contre les coupures de courant",
    "Augmenter la portée de l'émetteur",
    "Éviter de recevoir les émissions de navires trop lointains"
   ],
   "answer": "Éviter de recevoir les émissions de navires trop lointains",
   "explanation": "Le glossaire précise que le squelch évite de recevoir les émissions de navires trop lointains.",
   "reminder": "Squelch = filtre les stations trop lointaines.",
   "source": {
    "page": 38,
    "quote": "Ce système évite de recevoir les émissions de navires trop lointains"
   },
   "category": "glossaire",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4089",
   "type": "qcm",
   "question": "Comment le glossaire définit-il une station de navire ?",
   "choices": [
    "Une station de radiotéléphonie mobile à bord d'un navire non amarré en permanence",
    "Une station à bord d'un navire amarré en permanence",
    "Une station fixe installée sur un quai",
    "Une station côtière qui communique avec les navires"
   ],
   "answer": "Une station de radiotéléphonie mobile à bord d'un navire non amarré en permanence",
   "explanation": "Une station de navire est une station de radiotéléphonie mobile, pour la navigation intérieure ou maritime, à bord d'un navire non amarré en permanence.",
   "reminder": "Station de navire : mobile, à bord d'un navire non amarré en permanence.",
   "source": {
    "page": 38,
    "quote": "Station de radiotéléphonie mobile pour la navigation intérieure ou maritime qui se trouve à bord d'un navire non amarré en permanence."
   },
   "category": "glossaire",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4090",
   "type": "qcm",
   "question": "Que désigne la « puissance apparente rayonnée » ?",
   "choices": [
    "La puissance du signal reçu",
    "La puissance mesurée à la sortie de l'émetteur",
    "La puissance émise par l'antenne",
    "La puissance consommée par l'appareil"
   ],
   "answer": "La puissance émise par l'antenne",
   "explanation": "Le glossaire définit la puissance apparente rayonnée comme la puissance émise par l'antenne, à distinguer de la puissance mesurée à la sortie de l'émetteur.",
   "reminder": "PAR = à l'antenne ; puissance de sortie = à la sortie de l'émetteur.",
   "source": {
    "page": 38,
    "quote": "La puissance émise par l'antenne."
   },
   "category": "glossaire",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 293\" width=\"480\" height=\"293\"><rect x=\"0\" y=\"0\" width=\"480\" height=\"293\" fill=\"#f8fafc\"/><text x=\"240.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Deux puissances à ne pas confondre</text><defs><marker id=\"a\" markerWidth=\"8\" markerHeight=\"8\" refX=\"4\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#1e3a8a\"/></marker></defs><rect x=\"40\" y=\"40\" width=\"400\" height=\"40\" rx=\"6\" fill=\"#e0f2fe\" stroke=\"#0369a1\"/><text x=\"240.0\" y=\"65\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" fill=\"#0f172a\">Émetteur</text><line x1=\"240.0\" y1=\"80\" x2=\"240.0\" y2=\"99\" stroke=\"#1e3a8a\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"40\" y=\"102\" width=\"400\" height=\"40\" rx=\"6\" fill=\"#e0f2fe\" stroke=\"#0369a1\"/><text x=\"240.0\" y=\"127\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" fill=\"#0f172a\">Puissance à la sortie de l'émetteur (mesurée à la sortie)</text><line x1=\"240.0\" y1=\"142\" x2=\"240.0\" y2=\"161\" stroke=\"#1e3a8a\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"40\" y=\"164\" width=\"400\" height=\"40\" rx=\"6\" fill=\"#e0f2fe\" stroke=\"#0369a1\"/><text x=\"240.0\" y=\"189\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" fill=\"#0f172a\">Antenne</text><line x1=\"240.0\" y1=\"204\" x2=\"240.0\" y2=\"223\" stroke=\"#1e3a8a\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"40\" y=\"226\" width=\"400\" height=\"40\" rx=\"6\" fill=\"#e0f2fe\" stroke=\"#0369a1\"/><text x=\"240.0\" y=\"251\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" fill=\"#0f172a\">Puissance apparente rayonnée (émise par l'antenne)</text></svg>",
    "placement": "explanation",
    "alt": "Chaîne émetteur vers antenne : la puissance à la sortie de l'émetteur est mesurée à la sortie, la puissance apparente rayonnée est celle émise par l'antenne."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4092",
   "type": "qcm",
   "question": "Selon le glossaire, qu'est-ce qu'un centre de trafic ?",
   "choices": [
    "Une base de données mondiale des navires",
    "Un organisme qui administre l'arrangement Rainwat",
    "Un centre qui réceptionne notamment les appels provenant de la navigation maritime",
    "Une centrale aux Pays-Bas et en Suisse qui informe sur la situation de la voie navigable"
   ],
   "answer": "Un centre qui réceptionne notamment les appels provenant de la navigation maritime",
   "explanation": "Le glossaire définit le centre de trafic comme un centre qui réceptionne notamment les appels provenant de la navigation maritime ; la centrale aux Pays-Bas et en Suisse qui informe sur la situation de la voie navigable correspond, elle, au poste de trafic.",
   "reminder": "Centre de trafic = navigation maritime ; poste de trafic = Pays-Bas et Suisse.",
   "source": {
    "page": 38,
    "quote": "Centre qui réceptionne notamment les appels provenant de la navigation maritime."
   },
   "category": "glossaire",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 186\" width=\"560\" height=\"186\"><rect x=\"0\" y=\"0\" width=\"560\" height=\"186\" fill=\"#f8fafc\"/><text x=\"280.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Centre de trafic ou poste de trafic</text><rect x=\"20\" y=\"40\" width=\"250\" height=\"131\" rx=\"8\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"20\" y=\"40\" width=\"250\" height=\"30\" rx=\"8\" fill=\"#dbeafe\" stroke=\"#94a3b8\"/><text x=\"145\" y=\"60\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">Centre de trafic</text><text x=\"32\" y=\"92\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Réceptionne notamment les appels</text><text x=\"32\" y=\"116\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">de la navigation maritime</text><rect x=\"290\" y=\"40\" width=\"250\" height=\"131\" rx=\"8\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"290\" y=\"40\" width=\"250\" height=\"30\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#94a3b8\"/><text x=\"415\" y=\"60\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">Poste de trafic</text><text x=\"302\" y=\"92\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Centrale aux Pays-Bas et en Suisse</text><text x=\"302\" y=\"116\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Reçoit les appels (ex. détresse)</text><text x=\"302\" y=\"140\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Informe sur la voie navigable</text><text x=\"302\" y=\"164\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Peut guider le trafic</text></svg>",
    "placement": "explanation",
    "alt": "Comparaison : le centre de trafic reçoit les appels de la navigation maritime ; le poste de trafic, aux Pays-Bas et en Suisse, reçoit les appels, informe et peut guider le trafic."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4093",
   "type": "qcm",
   "question": "Dans quels pays le glossaire situe-t-il les « postes de trafic » ?",
   "choices": [
    "En Belgique et aux Pays-Bas",
    "Aux Pays-Bas et en Suisse",
    "En France et en Suisse",
    "En Allemagne et en Autriche"
   ],
   "answer": "Aux Pays-Bas et en Suisse",
   "explanation": "Le poste de trafic est défini comme une centrale aux Pays-Bas et en Suisse qui réceptionne les appels et informe sur la situation de la voie navigable.",
   "reminder": "Poste de trafic : Pays-Bas et Suisse.",
   "source": {
    "page": 38,
    "quote": "Centrale aux Pays-Bas et en Suisse qui réceptionne notamment les appels provenant de la navigation (par exemple, les appels de détresse) et qui informe la navigation sur la situation de la voie navigable."
   },
   "category": "glossaire",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4094",
   "type": "qcm",
   "question": "Outre la réception des appels, quel rôle le glossaire attribue-t-il au poste de trafic ?",
   "choices": [
    "Programmer les dispositifs ATIS",
    "Informer la navigation sur la situation de la voie navigable, et éventuellement guider le trafic",
    "Délivrer les certificats d'opérateur",
    "Gérer la comptabilité des communications"
   ],
   "answer": "Informer la navigation sur la situation de la voie navigable, et éventuellement guider le trafic",
   "explanation": "Le poste de trafic informe la navigation sur la situation de la voie navigable et peut aussi guider le trafic.",
   "reminder": "Poste de trafic : reçoit les appels, informe et peut guider le trafic.",
   "source": {
    "page": 38,
    "quote": "et qui informe la navigation sur la situation de la voie navigable. Le trafic peut aussi être guidé par le poste de trafic."
   },
   "category": "glossaire",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4095",
   "type": "qcm",
   "question": "Selon le glossaire, à quoi s'applique la notion de « navigation maritime » ?",
   "choices": [
    "Aux voies de navigation intérieure ouvertes aux navires de mer",
    "Aux zones où le règlement de navigation maritime est d'application",
    "À toutes les eaux situées au-delà des écluses",
    "Uniquement à la haute mer"
   ],
   "answer": "Aux zones où le règlement de navigation maritime est d'application",
   "explanation": "Le glossaire définit la navigation maritime comme applicable dans les zones où le règlement de navigation maritime est d'application.",
   "reminder": "Navigation maritime = là où s'applique le règlement de navigation maritime.",
   "source": {
    "page": 38,
    "quote": "Applicable dans les zones où le règlement de navigation maritime est d'application."
   },
   "category": "glossaire",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4096",
   "type": "qcm",
   "question": "Selon le glossaire, que désignent les radiocommunications navire-navire (Intership) ?",
   "choices": [
    "Des radiocommunications à bord d'un seul navire",
    "Des liaisons entre un navire et un réseau public",
    "Des liaisons entre un navire et une station côtière",
    "Des liaisons de radiocommunications entre des stations de navire"
   ],
   "answer": "Des liaisons de radiocommunications entre des stations de navire",
   "explanation": "Le glossaire définit Intership comme les liaisons de radiocommunications entre des stations de navire.",
   "reminder": "Intership = entre navires.",
   "source": {
    "page": 38,
    "quote": "Radiocommunications navire-navire (Intership) Liaisons de radiocommunications entre des stations de navire."
   },
   "category": "glossaire",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4097",
   "type": "qcm",
   "question": "Quelle édition du Règlement des radiocommunications (RR) figure dans les règlements internationaux du manuel ?",
   "choices": [
    "Londres 1974",
    "Genève 1999",
    "Genève 2020",
    "Bucarest 2012"
   ],
   "answer": "Genève 2020",
   "explanation": "La liste des organisations et règlements internationaux mentionne le Règlement des radiocommunications (RR), Genève 2020.",
   "reminder": "RR : Genève 2020.",
   "source": {
    "page": 39,
    "quote": "Règlement des radiocommunications (RR), Genève 2020."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4098",
   "type": "qcm",
   "question": "Où et en quelle année la convention SOLAS a-t-elle été adoptée selon le manuel ?",
   "choices": [
    "Londres, 1999",
    "Bucarest, 2012",
    "Genève, 2020",
    "Londres, 1974"
   ],
   "answer": "Londres, 1974",
   "explanation": "Le manuel cite SOLAS, convention internationale pour la sauvegarde de la vie humaine en mer (Londres, 1974).",
   "reminder": "SOLAS : Londres 1974.",
   "source": {
    "page": 39,
    "quote": "SOLAS, convention internationale pour la sauvegarde de la vie humaine en mer (Londres, 1974)"
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4099",
   "type": "qcm",
   "question": "Quelle loi belge le manuel cite-t-il comme législation nationale sur les communications électroniques ?",
   "choices": [
    "La loi du 29 juin 1964",
    "La loi du 13 novembre 1999",
    "La loi du 17 janvier 2003",
    "La loi du 13 juin 2005"
   ],
   "answer": "La loi du 13 juin 2005",
   "explanation": "La législation nationale reprise est la loi du 13 juin 2005 relative aux communications électroniques. La loi du 17 janvier 2003 concerne le statut du régulateur.",
   "reminder": "Communications électroniques : loi du 13 juin 2005.",
   "source": {
    "page": 39,
    "quote": "LOI DU 13 JUIN 2005 RELATIVE AUX COMMUNICATIONS ÉLECTRONIQUES"
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4100",
   "type": "qcm",
   "question": "Que prévoit l'article 13/1, § 1er de la loi du 13 juin 2005 ?",
   "choices": [
    "Nul ne peut capter des radiocommunications qui ne lui sont pas destinées",
    "Nul ne peut détenir ou utiliser un équipement hertzien sans autorisation de radiocommunications privées ou droit d'utilisation du spectre",
    "La confiscation d'appareils non conformes est toujours prononcée",
    "Le Roi peut imposer la réussite d'un examen pour certaines stations"
   ],
   "answer": "Nul ne peut détenir ou utiliser un équipement hertzien sans autorisation de radiocommunications privées ou droit d'utilisation du spectre",
   "explanation": "L'article 13/1, § 1er interdit de détenir ou d'utiliser un équipement hertzien sans autorisation de radiocommunications privées (article 39) ou droit d'utilisation du spectre (article 18).",
   "reminder": "Art. 13/1 : pas d'équipement hertzien sans autorisation.",
   "source": {
    "page": 39,
    "quote": "Article 13/1, § 1er. Nul ne peut détenir ou utiliser un équipement hertzien sans avoir obtenu une autorisation de radiocommunications privées en vertu de l'article 39 ou un droit d'utilisation du spectre radioélectrique en vertu de l'article 18."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4101",
   "type": "qcm",
   "question": "En vertu de quel article de la loi du 13 juin 2005 est obtenue l'autorisation de radiocommunications privées ?",
   "choices": [
    "L'article 39",
    "L'article 18",
    "L'article 145",
    "L'article 41"
   ],
   "answer": "L'article 39",
   "explanation": "L'article 13/1 renvoie à l'article 39 pour l'autorisation de radiocommunications privées et à l'article 18 pour le droit d'utilisation du spectre.",
   "reminder": "Autorisation privée = art. 39 ; droit d'utilisation du spectre = art. 18.",
   "source": {
    "page": 39,
    "quote": "une autorisation de radiocommunications privées en vertu de l'article 39 ou un droit d'utilisation du spectre radioélectrique en vertu de l'article 18."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q4102",
   "type": "qcm",
   "question": "Quelle dérogation l'article 13/1 prévoit-il à l'obligation d'autorisation ?",
   "choices": [
    "La possession d'un certificat d'opérateur restreint",
    "L'installation de l'appareil à bord d'un bateau étranger",
    "L'utilisation exclusive en cas de détresse",
    "Le respect des conditions d'utilisation d'une autorisation générale visée à l'article 13/2, § 3"
   ],
   "answer": "Le respect des conditions d'utilisation d'une autorisation générale visée à l'article 13/2, § 3",
   "explanation": "Par dérogation, respecter les conditions d'une autorisation générale (article 13/2, § 3) permet de détenir et utiliser un équipement hertzien sans autorisation de radiocommunications privées.",
   "reminder": "Exception : autorisation générale (art. 13/2, § 3) respectée.",
   "source": {
    "page": 39,
    "quote": "Par dérogation à l'alinéa 1er, le respect des conditions d'utilisation d'une autorisation générale visée à l'article 13/2, § 3, permet de détenir et utiliser un équipement hertzien sans avoir obtenu une autorisation de radiocommunications privées"
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q4103",
   "type": "qcm",
   "question": "Selon l'article 39, § 5, à qui le Roi peut-il déléguer l'organisation pratique des examens ?",
   "choices": [
    "À la CCNR",
    "À l'Institut",
    "Au Comité Rainwat",
    "À l'UIT"
   ],
   "answer": "À l'Institut",
   "explanation": "L'article 39, § 5 permet au Roi d'imposer un examen et de déléguer à l'Institut la fixation des conditions et l'organisation pratique de ces examens.",
   "reminder": "Examens radio : imposés par le Roi, organisés par l'Institut.",
   "source": {
    "page": 39,
    "quote": "§ 5. Le Roi peut imposer la réussite d'un examen pour l'utilisation de certaines catégories de stations de radiocommunications. Il peut déléguer à l'Institut la fixation des conditions et l'organisation pratique de ces examens."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4104",
   "type": "qcm",
   "question": "Que l'article 41 interdit-il d'émettre ou de tenter d'émettre ?",
   "choices": [
    "Des messages en langue étrangère",
    "Des signaux d'alarme, d'urgence ou de détresse ou des appels de détresse faux ou trompeurs",
    "Des messages de routine sur le canal 16",
    "Des signaux ATIS en mer"
   ],
   "answer": "Des signaux d'alarme, d'urgence ou de détresse ou des appels de détresse faux ou trompeurs",
   "explanation": "L'article 41, 1° interdit d'émettre ou de tenter d'émettre des signaux d'alarme, d'urgence ou de détresse faux ou trompeurs.",
   "reminder": "Faux appel de détresse = interdit (art. 41).",
   "source": {
    "page": 40,
    "quote": "1° émettre ou tenter d'émettre des signaux d'alarme, d'urgence ou de détresse ou des appels de détresse faux ou trompeurs ;"
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4105",
   "type": "qcm",
   "question": "Que faire d'une radiocommunication qui ne vous est pas destinée et que vous avez reçue involontairement ?",
   "choices": [
    "La noter dans le journal de bord et la communiquer aux tiers concernés",
    "Ne pas la reproduire, ne pas la communiquer, ne pas l'utiliser et ne pas révéler son existence",
    "La transmettre au destinataire prévu",
    "L'utiliser librement puisqu'elle a été reçue sans le vouloir"
   ],
   "answer": "Ne pas la reproduire, ne pas la communiquer, ne pas l'utiliser et ne pas révéler son existence",
   "explanation": "L'article 41, 2° précise que les communications reçues involontairement ne peuvent être ni reproduites, ni communiquées, ni utilisées, et que leur existence même ne peut être révélée, sauf cas prévus par la loi.",
   "reminder": "Message capté par hasard : on se tait, on n'en fait rien.",
   "source": {
    "page": 40,
    "quote": "Si de telles communications sont involontairement reçues, elles ne peuvent être reproduites, ni communiquées à des tiers, ni utilisées à une fin quelconque et leur existence même ne peut être révélée sauf dans les cas imposés ou autorisés par la loi."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4106",
   "type": "qcm",
   "question": "Qui est excepté de l'interdiction de capter des radiocommunications (point 2° de l'article 41) ?",
   "choices": [
    "Les opérateurs des stations côtières",
    "Les officiers de police judiciaire cités à l'article 24 de la loi du 17 janvier 2003",
    "Les titulaires d'un certificat GOC",
    "Les membres du Comité Rainwat"
   ],
   "answer": "Les officiers de police judiciaire cités à l'article 24 de la loi du 17 janvier 2003",
   "explanation": "L'article 41 excepte, pour le point 2°, les officiers de police judiciaire visés à l'article 24 de la loi du 17 janvier 2003.",
   "reminder": "Art. 41 : l'interdiction de capter (point 2°) ne vise pas les officiers de police judiciaire de l'article 24 de la loi du 17 janvier 2003.",
   "source": {
    "page": 39,
    "quote": "À l'exception des officiers de police judiciaire cités à l'article 24 de la loi du 17 janvier 2003 relative au statut du régulateur des secteurs des postes et des télécommunications belges pour ce qui concerne le point 2°"
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q4107",
   "type": "qcm",
   "question": "Quelle amende l'article 145, § 1er prévoit-il notamment pour une infraction à l'article 41 (faux appels, secret des communications) ?",
   "choices": [
    "De 200 à 2 000 euros",
    "De 50 à 100 000 euros",
    "De 500 à 50 000 euros",
    "De 20 à 300 euros"
   ],
   "answer": "De 50 à 100 000 euros",
   "explanation": "L'article 145, § 1er punit d'une amende de 50 à 100 000 euros quiconque enfreint notamment l'article 41.",
   "reminder": "Infraction à l'art. 41 : 50 € à 100 000 €.",
   "source": {
    "page": 40,
    "quote": "Article 145 : § 1er. Est punie d'une amende de 50 euros à 100 000 euros, la personne qui enfreint les articles 15, 32, 33, 35, 41,"
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 250\" width=\"560\" height=\"250\"><rect x=\"0\" y=\"0\" width=\"560\" height=\"250\" fill=\"#f8fafc\"/><text x=\"280.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Amendes de l'article 145 (loi du 13 juin 2005)</text><text x=\"20\" y=\"65\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">§ 1er (art. 41...)</text><rect x=\"230\" y=\"50\" width=\"270\" height=\"22\" rx=\"3\" fill=\"#93c5fd\" stroke=\"#1e3a8a\"/><text x=\"505\" y=\"66\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">50 à 100 000 €</text><text x=\"20\" y=\"105\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">§ 2 (art. 13/1, § 1er)</text><rect x=\"230\" y=\"90\" width=\"60\" height=\"22\" rx=\"3\" fill=\"#93c5fd\" stroke=\"#1e3a8a\"/><text x=\"295\" y=\"106\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">200 à 2 000 €</text><text x=\"20\" y=\"145\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">Fraude (avantage illicite)</text><rect x=\"230\" y=\"130\" width=\"160\" height=\"22\" rx=\"3\" fill=\"#93c5fd\" stroke=\"#1e3a8a\"/><text x=\"395\" y=\"146\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">500 à 50 000 €</text><text x=\"20\" y=\"185\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">§ 3bis (importuner)</text><rect x=\"230\" y=\"170\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#93c5fd\" stroke=\"#1e3a8a\"/><text x=\"265\" y=\"186\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">20 à 300 €</text><text x=\"20\" y=\"225\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">§ 3ter (données art. 126)</text><rect x=\"230\" y=\"210\" width=\"160\" height=\"22\" rx=\"3\" fill=\"#93c5fd\" stroke=\"#1e3a8a\"/><text x=\"395\" y=\"226\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">50 à 50 000 €</text></svg>",
    "placement": "explanation",
    "alt": "Barres comparant les amendes : § 1er 50 à 100 000 euros, § 2 200 à 2 000 euros, fraude 500 à 50 000 euros, § 3bis 20 à 300 euros, § 3ter 50 à 50 000 euros."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4108",
   "type": "qcm",
   "question": "Quelle sanction encourt la personne qui détient ou utilise un équipement hertzien sans autorisation (article 13/1, § 1er) ?",
   "choices": [
    "Une amende de 50 à 100 000 EUR uniquement",
    "Une amende de 20 à 300 EUR et/ou un emprisonnement de quinze jours à deux ans",
    "Une amende de 500 à 50 000 EUR et/ou un emprisonnement d'un à quatre ans",
    "Une amende de 200 à 2 000 EUR et/ou un emprisonnement de huit jours à un an"
   ],
   "answer": "Une amende de 200 à 2 000 EUR et/ou un emprisonnement de huit jours à un an",
   "explanation": "L'article 145, § 2 punit l'infraction à l'article 13/1, § 1er d'une amende de 200 à 2 000 EUR et d'un emprisonnement de huit jours à un an, ou de l'une de ces peines.",
   "reminder": "Sans autorisation (13/1) : 200 à 2 000 € et/ou 8 jours à 1 an.",
   "source": {
    "page": 40,
    "quote": "§ 2. Est punie d'une amende de 200 à 2 000 EUR et d'une peine d'emprisonnement de huit jours à un an ou d'une de ces peines seulement, la personne qui enfreint l'article 13/1, § 1er, et les arrêtés pris en exécution de l'article 16."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q4109",
   "type": "qcm",
   "question": "Quelle peine d'emprisonnement est prévue pour la personne qui réalise frauduleusement des communications électroniques afin d'obtenir un avantage illicite ?",
   "choices": [
    "De quinze jours à deux ans",
    "D'un à quatre ans",
    "De huit jours à un an",
    "De six mois à trois ans"
   ],
   "answer": "D'un à quatre ans",
   "explanation": "L'article 145 punit cette fraude d'une amende de 500 à 50 000 EUR et d'un emprisonnement d'un à quatre ans, ou de l'une de ces peines.",
   "reminder": "Fraude pour avantage illicite : 1 à 4 ans, 500 à 50 000 €.",
   "source": {
    "page": 40,
    "quote": "Est punie d'une amende de 500 à 50 000 EUR et d'une peine d'emprisonnement d'un à quatre ans ou d'une de ces peines seulement : 1° la personne qui réalise frauduleusement des communications électroniques au moyen d'un réseau de communications électroniques afin de se procurer ou de procurer à autrui un avantage illicite ;"
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "difficile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 210\" width=\"560\" height=\"210\"><rect x=\"0\" y=\"0\" width=\"560\" height=\"210\" fill=\"#f8fafc\"/><text x=\"280.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Peines d'emprisonnement de l'article 145</text><text x=\"20\" y=\"65\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">§ 2 (art. 13/1, § 1er)</text><rect x=\"230\" y=\"50\" width=\"70\" height=\"22\" rx=\"3\" fill=\"#93c5fd\" stroke=\"#1e3a8a\"/><text x=\"305\" y=\"66\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">8 jours à 1 an</text><text x=\"20\" y=\"105\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">§ 3bis (importuner)</text><rect x=\"230\" y=\"90\" width=\"130\" height=\"22\" rx=\"3\" fill=\"#93c5fd\" stroke=\"#1e3a8a\"/><text x=\"365\" y=\"106\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">15 jours à 2 ans</text><text x=\"20\" y=\"145\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">§ 3ter (données art. 126)</text><rect x=\"230\" y=\"130\" width=\"170\" height=\"22\" rx=\"3\" fill=\"#93c5fd\" stroke=\"#1e3a8a\"/><text x=\"405\" y=\"146\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">6 mois à 3 ans</text><text x=\"20\" y=\"185\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">Fraude (avantage illicite)</text><rect x=\"230\" y=\"170\" width=\"250\" height=\"22\" rx=\"3\" fill=\"#93c5fd\" stroke=\"#1e3a8a\"/><text x=\"485\" y=\"186\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">1 à 4 ans</text></svg>",
    "placement": "explanation",
    "alt": "Barres comparant les peines de prison : 8 jours à 1 an, 15 jours à 2 ans, 6 mois à 3 ans, et 1 à 4 ans pour la fraude."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4110",
   "type": "qcm",
   "question": "Quelle amende l'article 145, § 3bis prévoit-il pour la personne qui utilise des communications électroniques afin d'importuner son correspondant ?",
   "choices": [
    "De 20 à 300 EUR",
    "De 500 à 50 000 EUR",
    "De 200 à 2 000 EUR",
    "De 50 à 100 000 EUR"
   ],
   "answer": "De 20 à 300 EUR",
   "explanation": "Le § 3bis prévoit une amende de 20 à 300 EUR et un emprisonnement de quinze jours à deux ans, ou l'une de ces peines, pour qui importune son correspondant.",
   "reminder": "Importuner son correspondant : 20 à 300 € et/ou 15 jours à 2 ans.",
   "source": {
    "page": 40,
    "quote": "§ 3bis. Est punie d'une amende de 20 EUR à 300 EUR et d'un emprisonnement de quinze jours à deux ans ou d'une de ces peines seulement la personne qui utilise un réseau ou un service de communications électroniques ou d'autres moyens de communications électroniques afin d'importuner son correspondant ou de provoquer des dommages"
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4111",
   "type": "qcm",
   "question": "Quelle peine d'emprisonnement l'article 145, § 3ter prévoit-il (usage frauduleux des données visées à l'article 126) ?",
   "choices": [
    "De quinze jours à deux ans",
    "De huit jours à un an",
    "D'un à quatre ans",
    "De six mois à trois ans"
   ],
   "answer": "De six mois à trois ans",
   "explanation": "Le § 3ter prévoit une amende de 50 à 50 000 euros et un emprisonnement de six mois à trois ans, ou l'une de ces peines.",
   "reminder": "§ 3ter (données art. 126) : 6 mois à 3 ans.",
   "source": {
    "page": 40,
    "quote": "§ 3ter. Est puni d'une amende de 50 euros à 50 000 euros et d'une peine d'emprisonnement de six mois à trois ans ou d'une de ces peines seulement :"
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q4112",
   "type": "qcm",
   "question": "Que prévoit l'article 145, § 4 pour les appareils ne satisfaisant pas aux conditions des articles 32, 33, 35 et 37 ?",
   "choices": [
    "Ils sont restitués après paiement de l'amende",
    "Leur confiscation est toujours prononcée",
    "Leur confiscation est laissée à l'appréciation du juge",
    "Ils doivent être mis en conformité dans un délai d'un an"
   ],
   "answer": "Leur confiscation est toujours prononcée",
   "explanation": "Selon l'article 145, § 4, la confiscation des appareils non conformes aux articles 32, 33, 35 et 37 est toujours prononcée.",
   "reminder": "Appareil non conforme : confiscation systématique.",
   "source": {
    "page": 40,
    "quote": "§ 4. La confiscation d'appareils ne satisfaisant pas aux conditions prévues aux articles 32, 33, 35 et 37 est toujours prononcée."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4113",
   "type": "qcm",
   "question": "Selon l'article 147, la confiscation des produits et accessoires ayant servi à enfreindre les articles 13/1, § 1er et 41 est-elle prononcée s'ils n'appartiennent pas au condamné ?",
   "choices": [
    "Non, seulement s'ils appartiennent au condamné",
    "Oui, elle est toujours prononcée, même s'ils n'appartiennent pas au condamné",
    "Seulement en cas de récidive",
    "Seulement si le propriétaire y consent"
   ],
   "answer": "Oui, elle est toujours prononcée, même s'ils n'appartiennent pas au condamné",
   "explanation": "L'article 147 prévoit que cette confiscation est toujours prononcée, même si les produits et accessoires n'appartiennent pas au condamné.",
   "reminder": "Art. 147 : confiscation toujours, même si l'objet n'appartient pas au condamné.",
   "source": {
    "page": 40,
    "quote": "La confiscation de produits et accessoires, ayant servi à enfreindre les articles 13/1, § 1er et 41, et les arrêtés pris en exécution de l'article 16 est toujours prononcée, même s'ils n'appartiennent pas au condamné."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4114",
   "type": "qcm",
   "question": "La loi du 29 juin 1964 relative à la suspension, au sursis et à la probation peut-elle s'appliquer à la confiscation prononcée sur base de l'article 147 ?",
   "choices": [
    "Oui, le sursis est toujours possible",
    "Oui, si le condamné n'est pas propriétaire de l'objet",
    "Oui, mais seulement pour une première infraction",
    "Non, son article 8, § 1er n'est pas applicable à cette confiscation"
   ],
   "answer": "Non, son article 8, § 1er n'est pas applicable à cette confiscation",
   "explanation": "Le manuel précise que l'article 8, § 1er de la loi du 29 juin 1964 n'est pas applicable à la confiscation prononcée sur la base de l'article 147.",
   "reminder": "Pas de sursis pour la confiscation de l'art. 147.",
   "source": {
    "page": 40,
    "quote": "L'article 8, § 1er, de la loi du 29 juin 1964 relative à la suspension, au sursis et à la probation, n'est pas applicable à la confiscation prononcée sur la base de cet article."
   },
   "category": "cadre-legal-autorisations",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q4116",
   "type": "qcm",
   "question": "De quel document les exemples de communications de l'annexe sont-ils extraits ?",
   "choices": [
    "De la convention SOLAS (Londres, 1974)",
    "Du Règlement des radiocommunications, Genève 2020",
    "De l'arrangement Rainwat de Bucarest 2012",
    "Du Guide de radiocommunication pour la navigation intérieure CCNR - 2017"
   ],
   "answer": "Du Guide de radiocommunication pour la navigation intérieure CCNR - 2017",
   "explanation": "Le titre de l'annexe indique que les exemples sont extraits du Guide de radiocommunication pour la navigation intérieure CCNR - 2017.",
   "reminder": "Exemples de messages : Guide CCNR 2017.",
   "source": {
    "page": 41,
    "quote": "EXEMPLES DE COMMUNICATIONS (EXTRAITS DU GUIDE DE RADIOCOMMUNICATION POUR LA NAVIGATION INTÉRIEURE CCNR - 2017)"
   },
   "category": "procedures-generales",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4117",
   "type": "qcm",
   "question": "Dans l'exemple de détresse, sur quel canal l'automoteur « Karin » appelle-t-il la centrale de secteur d'Oberwesel ?",
   "choices": [
    "Le canal 10 du réseau bateau-bateau",
    "Le canal 18 du réseau Informations nautiques",
    "Le canal 22 du réseau Informations nautiques",
    "Le canal 16"
   ],
   "answer": "Le canal 18 du réseau Informations nautiques",
   "explanation": "Karin appelle la centrale d'Oberwesel sur le canal 18 du réseau Informations nautiques après une collision.",
   "reminder": "Karin (collision) : canal 18, Informations nautiques, centrale d'Oberwesel.",
   "source": {
    "page": 41,
    "quote": "L'automoteur ordinaire « Karin » appelle la centrale de secteur d'Oberwesel (Oberwesel Revierzentrale) sur le canal 18 du réseau Informations nautiques et demande de l'aide après une collision :"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4118",
   "type": "qcm",
   "question": "Dans l'appel de détresse de « Karin », quel mot suit immédiatement « MAYDAY, MAYDAY, MAYDAY » ?",
   "choices": [
    "THIS IS",
    "PAN PAN",
    "RECEIVED",
    "ALL STATIONS"
   ],
   "answer": "THIS IS",
   "explanation": "L'appel de détresse commence par MAYDAY trois fois, suivi de THIS IS puis du nom du bateau répété trois fois et de l'indicatif FM 1234.",
   "reminder": "Détresse : MAYDAY x3, THIS IS, nom x3, indicatif.",
   "source": {
    "page": 41,
    "quote": "MAYDAY, MAYDAY, MAYDAY THIS IS Automoteur ordinaire Karin, Automoteur ordinaire Karin, Automoteur ordinaire Karin FM 1234"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "facile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 274\" width=\"520\" height=\"274\"><rect x=\"0\" y=\"0\" width=\"520\" height=\"274\" fill=\"#f8fafc\"/><text x=\"260.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Appel de détresse de « Karin »</text><rect x=\"20\" y=\"40\" width=\"480\" height=\"218\" rx=\"8\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><text x=\"40\" y=\"60\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">MAYDAY, MAYDAY, MAYDAY</text><rect x=\"40\" y=\"69\" width=\"440\" height=\"22\" rx=\"4\" fill=\"#fee2e2\" stroke=\"#dc2626\"/><text x=\"260.0\" y=\"86\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"15\" font-weight=\"bold\" fill=\"#dc2626\">?</text><text x=\"40\" y=\"112\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">Automoteur ordinaire Karin (x3)</text><text x=\"40\" y=\"138\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">FM 1234</text><text x=\"40\" y=\"164\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">MAYDAY</text><text x=\"40\" y=\"190\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">Automoteur ordinaire Karin</text><text x=\"40\" y=\"216\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">FM 1234</text><text x=\"40\" y=\"242\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">Avalant près de Mannheim, p.k. 424,30</text></svg>",
    "placement": "question",
    "alt": "Carte de message de détresse de Karin dont la deuxième ligne, juste après MAYDAY répété trois fois, est masquée par un point d'interrogation."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4119",
   "type": "qcm",
   "question": "Combien de fois le nom du bateau est-il prononcé dans la partie appel du message de détresse de « Karin » (après THIS IS) ?",
   "choices": [
    "Une fois",
    "Trois fois",
    "Deux fois",
    "Quatre fois"
   ],
   "answer": "Trois fois",
   "explanation": "Après THIS IS, le nom « Automoteur ordinaire Karin » est répété trois fois, suivi de l'indicatif FM 1234.",
   "reminder": "Appel de détresse : le nom est dit 3 fois.",
   "source": {
    "page": 41,
    "quote": "Automoteur ordinaire Karin, Automoteur ordinaire Karin, Automoteur ordinaire Karin"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4120",
   "type": "qcm",
   "question": "Comment « Karin » indique-t-il sa position dans son message de détresse sur le Rhin ?",
   "choices": [
    "Avalant près de Mannheim, p.k. 424,30",
    "Par sa latitude et sa longitude",
    "Il ne donne pas sa position",
    "Par le relèvement et la distance d'un phare"
   ],
   "answer": "Avalant près de Mannheim, p.k. 424,30",
   "explanation": "Karin indique son sens de marche et sa position par rapport à un lieu et au point kilométrique : avalant près de Mannheim, p.k. 424,30.",
   "reminder": "Sur le fleuve : sens (avalant/montant) + lieu + point kilométrique.",
   "source": {
    "page": 41,
    "quote": "FM 1234 MAYDAY Automoteur ordinaire Karin FM 1234 Avalant près de Mannheim p.k. 424,30"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4121",
   "type": "qcm",
   "question": "Quelle est la nature de la détresse de « Karin » ?",
   "choices": [
    "Un homme tombé par-dessus bord",
    "Une collision avec un automoteur-citerne",
    "Un matelot blessé au bras",
    "Un épais brouillard"
   ],
   "answer": "Une collision avec un automoteur-citerne",
   "explanation": "Karin annonce « Suis entré en collision avec un automoteur-citerne », puis signale que de la cargaison s'écoule et un danger d'incendie.",
   "reminder": "Karin : collision avec un automoteur-citerne.",
   "source": {
    "page": 41,
    "quote": "Suis entré en collision avec un automoteur-citerne"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4122",
   "type": "qcm",
   "question": "Par quelle demande « Karin » termine-t-il son message de détresse ?",
   "choices": [
    "Restez à l'écoute",
    "Suivre les informations ultérieures",
    "Prenez les mesures nécessaires",
    "Interrompre la navigation"
   ],
   "answer": "Prenez les mesures nécessaires",
   "explanation": "Après avoir signalé que de la cargaison s'écoule et le danger d'incendie, Karin conclut par « Prenez les mesures nécessaires ».",
   "reminder": "Karin conclut : « Prenez les mesures nécessaires ».",
   "source": {
    "page": 42,
    "quote": "De la cargaison s'écoule Danger d'incendie Prenez les mesures nécessaires"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4123",
   "type": "qcm",
   "question": "Quel mot la centrale de secteur d'Oberwesel utilise-t-elle pour accuser réception du MAYDAY de « Karin » ?",
   "choices": [
    "MAYDAY RELAY",
    "RECEIVED",
    "ALL STATIONS",
    "SILENCE FINI"
   ],
   "answer": "RECEIVED",
   "explanation": "La réponse de la centrale suit l'ordre : MAYDAY, nom du bateau en détresse, THIS IS, nom de la centrale, RECEIVED, MAYDAY.",
   "reminder": "Accusé de réception de détresse : MAYDAY, nom, THIS IS, station, RECEIVED, MAYDAY.",
   "source": {
    "page": 42,
    "quote": "MAYDAY Automoteur ordinaire Karin THIS IS Oberwesel Revierzentrale RECEIVED MAYDAY"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 222\" width=\"520\" height=\"222\"><rect x=\"0\" y=\"0\" width=\"520\" height=\"222\" fill=\"#f8fafc\"/><text x=\"260.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Accusé de réception de la centrale d'Oberwesel</text><rect x=\"20\" y=\"40\" width=\"480\" height=\"166\" rx=\"8\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><text x=\"40\" y=\"60\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">MAYDAY</text><text x=\"40\" y=\"86\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">Automoteur ordinaire Karin</text><text x=\"40\" y=\"112\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">THIS IS</text><text x=\"40\" y=\"138\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">Oberwesel Revierzentrale</text><text x=\"40\" y=\"164\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">RECEIVED</text><text x=\"40\" y=\"190\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">MAYDAY</text></svg>",
    "placement": "explanation",
    "alt": "Carte de message en six lignes : MAYDAY, Automoteur ordinaire Karin, THIS IS, Oberwesel Revierzentrale, RECEIVED, MAYDAY."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4124",
   "type": "qcm",
   "question": "Dans l'accusé de réception de la centrale d'Oberwesel, combien de fois le nom de « Karin » est-il prononcé ?",
   "choices": [
    "Trois fois",
    "Deux fois",
    "Il n'est pas prononcé",
    "Une fois"
   ],
   "answer": "Une fois",
   "explanation": "Dans sa réponse, la centrale prononce le nom « Automoteur ordinaire Karin » une seule fois, entre MAYDAY et THIS IS.",
   "reminder": "Accusé de réception de détresse : le nom de la station en détresse est dit une fois.",
   "source": {
    "page": 42,
    "quote": "MAYDAY Automoteur ordinaire Karin THIS IS Oberwesel Revierzentrale RECEIVED MAYDAY"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q4125",
   "type": "qcm",
   "question": "Par quelle formule la centrale d'Oberwesel commence-t-elle son message pour informer la navigation de la détresse de « Karin » ?",
   "choices": [
    "MAYDAY (x3), RECEIVED",
    "MAYDAY RELAY (x3), ALL STATIONS (x3)",
    "SECURITE (x3), ALL STATIONS (x3)",
    "PAN PAN (x3), ALL STATIONS (x3)"
   ],
   "answer": "MAYDAY RELAY (x3), ALL STATIONS (x3)",
   "explanation": "Pour relayer la détresse à la navigation, la centrale émet MAYDAY RELAY trois fois puis ALL STATIONS trois fois, puis THIS IS et son nom.",
   "reminder": "Relais de détresse : MAYDAY RELAY x3 + ALL STATIONS x3.",
   "source": {
    "page": 42,
    "quote": "La centrale de secteur d'Oberwesel informe alors la navigation : MAYDAY RELAY, MAYDAY RELAY, MAYDAY RELAY ALL STATIONS, ALL STATIONS, ALL STATIONS"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4126",
   "type": "qcm",
   "question": "Dans le relais de détresse de la centrale d'Oberwesel, sur quel tronçon la navigation est-elle interrompue ?",
   "choices": [
    "Du p.k. 423,00 au p.k. 424,30",
    "Du p.k. 424,30 au p.k. 431,00",
    "Du p.k. 423,00 au p.k. 431,00",
    "Du p.k. 420,00 au p.k. 430,00"
   ],
   "answer": "Du p.k. 423,00 au p.k. 431,00",
   "explanation": "La centrale annonce que la navigation est interrompue jusqu'à nouvel ordre du p.k. 423,00 au p.k. 431,00, la collision ayant eu lieu au p.k. 424,30.",
   "reminder": "Relais Oberwesel : navigation interrompue p.k. 423,00 à 431,00.",
   "source": {
    "page": 43,
    "quote": "La navigation est interrompue jusqu'à nouvel ordre du p.k. 423,00 au p.k. 431,00"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 170\" width=\"560\" height=\"170\"><rect x=\"0\" y=\"0\" width=\"560\" height=\"170\" fill=\"#f8fafc\"/><text x=\"280.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Rhin près de Mannheim (points kilométriques)</text><text x=\"20\" y=\"65\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">Début interruption</text><rect x=\"230\" y=\"50\" width=\"60\" height=\"22\" rx=\"3\" fill=\"#93c5fd\" stroke=\"#1e3a8a\"/><text x=\"295\" y=\"66\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">p.k. 423,00</text><text x=\"20\" y=\"105\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">Lieu de la collision</text><rect x=\"230\" y=\"90\" width=\"120\" height=\"22\" rx=\"3\" fill=\"#93c5fd\" stroke=\"#1e3a8a\"/><text x=\"355\" y=\"106\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">p.k. 424,30</text><text x=\"20\" y=\"145\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">Fin interruption</text><rect x=\"230\" y=\"130\" width=\"260\" height=\"22\" rx=\"3\" fill=\"#93c5fd\" stroke=\"#1e3a8a\"/><text x=\"495\" y=\"146\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">p.k. 431,00</text></svg>",
    "placement": "explanation",
    "alt": "Repères kilométriques : interruption de la navigation du p.k. 423,00 au p.k. 431,00, la collision ayant eu lieu au p.k. 424,30."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4127",
   "type": "qcm",
   "question": "Selon le relais de la centrale d'Oberwesel, quel produit s'écoule de l'automoteur-citerne ?",
   "choices": [
    "De l'essence",
    "De l'huile",
    "Des produits chimiques",
    "Du gazole"
   ],
   "answer": "De l'essence",
   "explanation": "Le message relayé précise que l'automoteur-citerne perd de la cargaison et que de l'essence s'écoule.",
   "reminder": "Oberwesel : l'automoteur-citerne perd de l'essence.",
   "source": {
    "page": 43,
    "quote": "L'automoteur-citerne perd de la cargaison De l'essence s'écoule"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q4128",
   "type": "qcm",
   "question": "Par quelle formule commence le message de la centrale d'Oberwesel annonçant la fin de la situation de détresse ?",
   "choices": [
    "MAYDAY, puis ALL STATIONS (x3)",
    "PAN PAN, puis ALL STATIONS (x3)",
    "MAYDAY RELAY (x3), puis ALL STATIONS (x3)",
    "SECURITE (x3), puis ALL STATIONS (x3)"
   ],
   "answer": "MAYDAY, puis ALL STATIONS (x3)",
   "explanation": "Le message de fin de détresse commence par un seul MAYDAY suivi de ALL STATIONS trois fois, alors que le relais commençait par MAYDAY RELAY trois fois.",
   "reminder": "Fin de détresse : MAYDAY + ALL STATIONS x3 ... SILENCE FINI.",
   "source": {
    "page": 43,
    "quote": "A a fin de la situation de détresse, la centrale de secteur d'Oberwesel informe la navigation comme suit : MAYDAY ALL STATIONS, ALL STATIONS, ALL STATIONS THIS IS"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 234\" width=\"560\" height=\"234\"><rect x=\"0\" y=\"0\" width=\"560\" height=\"234\" fill=\"#f8fafc\"/><text x=\"280.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Relais de détresse et fin de détresse</text><rect x=\"20\" y=\"40\" width=\"250\" height=\"179\" rx=\"8\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"20\" y=\"40\" width=\"250\" height=\"30\" rx=\"8\" fill=\"#dbeafe\" stroke=\"#94a3b8\"/><text x=\"145\" y=\"60\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">Relais (début)</text><text x=\"32\" y=\"92\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">MAYDAY RELAY (x3)</text><text x=\"32\" y=\"116\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">ALL STATIONS (x3)</text><text x=\"32\" y=\"140\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">THIS IS</text><text x=\"32\" y=\"164\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Oberwesel Revierzentrale (x3)</text><text x=\"32\" y=\"188\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Infos sur la détresse</text><rect x=\"290\" y=\"40\" width=\"250\" height=\"179\" rx=\"8\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"290\" y=\"40\" width=\"250\" height=\"30\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#94a3b8\"/><text x=\"415\" y=\"60\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">Fin de détresse</text><text x=\"302\" y=\"92\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">MAYDAY</text><text x=\"302\" y=\"116\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">ALL STATIONS (x3)</text><text x=\"302\" y=\"140\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">THIS IS</text><text x=\"302\" y=\"164\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Oberwesel Revierzentrale (x3)</text><text x=\"302\" y=\"188\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Heure, bateau, indicatif</text><text x=\"302\" y=\"212\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">SILENCE FINI</text></svg>",
    "placement": "explanation",
    "alt": "Comparaison en deux colonnes : le relais commence par MAYDAY RELAY répété trois fois ; la fin de détresse commence par un seul MAYDAY et se termine par SILENCE FINI."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4129",
   "type": "qcm",
   "question": "Par quels mots se termine le message annonçant la fin d'une situation de détresse dans les exemples ?",
   "choices": [
    "SILENCE FINI",
    "OVER",
    "RECEIVED",
    "MAYDAY RELAY"
   ],
   "answer": "SILENCE FINI",
   "explanation": "Les messages de fin de détresse (Oberwesel, Corinna) se terminent par SILENCE FINI.",
   "reminder": "Fin de détresse = SILENCE FINI.",
   "source": {
    "page": 43,
    "quote": "SILENCE FINI"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4130",
   "type": "qcm",
   "question": "Quels éléments figurent dans le message de fin de détresse de la centrale d'Oberwesel juste avant SILENCE FINI ?",
   "choices": [
    "Le nom de l'automoteur-citerne et sa cargaison",
    "L'heure (10 heures 15), le nom du bateau en détresse et son indicatif FM 1234",
    "Le canal de dégagement et la visibilité",
    "La position p.k. 424,30 et la nature de la collision"
   ],
   "answer": "L'heure (10 heures 15), le nom du bateau en détresse et son indicatif FM 1234",
   "explanation": "Avant SILENCE FINI, la centrale donne l'heure (10 heures 15), le nom « Automoteur ordinaire Karin » et l'indicatif FM 1234.",
   "reminder": "Fin de détresse : heure + bateau concerné + indicatif + SILENCE FINI.",
   "source": {
    "page": 43,
    "quote": "Indicatif d’appel de la centrale de secteur Oberwesel 10 heures 15 Automoteur ordinaire Karin Indicatif d’appel FM 1234 SILENCE FINI"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q4131",
   "type": "qcm",
   "question": "Sur quel canal l'automoteur-citerne « Corinna » appelle-t-il les autres bateaux pour signaler un homme à la mer ?",
   "choices": [
    "Le canal 22 du réseau Informations nautiques",
    "Le canal 20",
    "Le canal 10 du réseau bateau-bateau",
    "Le canal 18 du réseau Informations nautiques"
   ],
   "answer": "Le canal 10 du réseau bateau-bateau",
   "explanation": "Corinna appelle d'autres bateaux sur le canal 10 du réseau bateau-bateau pour signaler qu'un homme est tombé par-dessus bord.",
   "reminder": "Corinna (homme à la mer) : canal 10, bateau-bateau.",
   "source": {
    "page": 44,
    "quote": "L'automoteur-citerne « Corinna » appelle comme suit d'autres bateaux sur le canal 10 du réseau bateau-bateau et informe qu'un homme est tombé par-dessus bord"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4132",
   "type": "qcm",
   "question": "Quelle est la nature de la détresse annoncée par « Corinna » ?",
   "choices": [
    "Homme à la mer",
    "Danger d'incendie",
    "Aide médicale sans danger de mort",
    "Collision"
   ],
   "answer": "Homme à la mer",
   "explanation": "Corinna annonce « Homme à la mer » après avoir donné sa position près du p.k. danubien 1501,35.",
   "reminder": "Corinna : homme à la mer.",
   "source": {
    "page": 44,
    "quote": "Avalant près du p.k. danubien 1501,35 Homme à la mer"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4133",
   "type": "qcm",
   "question": "Quelles instructions « Corinna » donne-t-il aux autres bateaux après avoir annoncé un homme à la mer ?",
   "choices": [
    "Interrompre la navigation et suivre les informations ultérieures",
    "Prendre les mesures nécessaires et rester à l'écoute",
    "Quitter le canal 10",
    "Appeler une ambulance"
   ],
   "answer": "Interrompre la navigation et suivre les informations ultérieures",
   "explanation": "Corinna demande d'interrompre la navigation et de suivre les informations ultérieures.",
   "reminder": "Corinna : « Interrompre la navigation », « Suivre les informations ultérieures ».",
   "source": {
    "page": 44,
    "quote": "Interrompre la navigation Suivre les informations ultérieures"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 300\" width=\"520\" height=\"300\"><rect x=\"0\" y=\"0\" width=\"520\" height=\"300\" fill=\"#f8fafc\"/><text x=\"260.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Message de détresse de « Corinna » (canal 10)</text><rect x=\"20\" y=\"40\" width=\"480\" height=\"244\" rx=\"8\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><text x=\"40\" y=\"60\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">MAYDAY, MAYDAY, MAYDAY</text><text x=\"40\" y=\"86\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">THIS IS</text><text x=\"40\" y=\"112\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">Automoteur-citerne Corinna (x3)</text><text x=\"40\" y=\"138\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">OED4711</text><text x=\"40\" y=\"164\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">MAYDAY</text><text x=\"40\" y=\"190\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">Automoteur-citerne Corinna, OED4711</text><text x=\"40\" y=\"216\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">Avalant près du p.k. danubien 1501,35</text><text x=\"40\" y=\"242\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">Homme à la mer</text><rect x=\"40\" y=\"251\" width=\"440\" height=\"22\" rx=\"4\" fill=\"#fee2e2\" stroke=\"#dc2626\"/><text x=\"260.0\" y=\"268\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"15\" font-weight=\"bold\" fill=\"#dc2626\">?</text></svg>",
    "placement": "question",
    "alt": "Carte du message de détresse de Corinna dont la dernière ligne, après « Homme à la mer », est masquée par un point d'interrogation."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4134",
   "type": "qcm",
   "question": "Dans l'exemple « homme à la mer », qui informe la navigation à la fin de la situation de détresse ?",
   "choices": [
    "L'automoteur-citerne Corinna lui-même",
    "La centrale de secteur d'Oberwesel",
    "L'écluse de Hasselt",
    "Le poste de trafic de Dordrecht"
   ],
   "answer": "L'automoteur-citerne Corinna lui-même",
   "explanation": "Dans cet exemple, c'est l'automoteur-citerne Corinna qui informe la navigation de la fin de la situation de détresse.",
   "reminder": "Exemple homme à la mer : c'est l'automoteur-citerne Corinna lui-même qui annonce la fin de la détresse (SILENCE FINI).",
   "source": {
    "page": 44,
    "quote": "À la fin de la situation de détresse, l'automoteur-citerne Corinna informe la navigation comme suit :"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 274\" width=\"520\" height=\"274\"><rect x=\"0\" y=\"0\" width=\"520\" height=\"274\" fill=\"#f8fafc\"/><text x=\"260.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Fin de détresse annoncée par « Corinna »</text><rect x=\"20\" y=\"40\" width=\"480\" height=\"218\" rx=\"8\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><text x=\"40\" y=\"60\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">MAYDAY</text><text x=\"40\" y=\"86\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">ALL STATIONS (x3)</text><text x=\"40\" y=\"112\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">THIS IS</text><text x=\"40\" y=\"138\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">Automoteur-citerne Corinna</text><text x=\"40\" y=\"164\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">OED4711</text><text x=\"40\" y=\"190\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">10 heures 15</text><text x=\"40\" y=\"216\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">Automoteur-citerne Corinna, OED4711</text><text x=\"40\" y=\"242\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">SILENCE FINI</text></svg>",
    "placement": "explanation",
    "alt": "Carte du message de fin de détresse de Corinna : MAYDAY, ALL STATIONS, THIS IS, Corinna, OED4711, 10 heures 15, Corinna, OED4711, SILENCE FINI."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4135",
   "type": "qcm",
   "question": "Sur quel fleuve navigue « Corinna » d'après la position indiquée dans son message ?",
   "choices": [
    "Le Danube",
    "Le Main",
    "Le Rhin",
    "L'Oude Maas"
   ],
   "answer": "Le Danube",
   "explanation": "Corinna se situe « près du p.k. danubien 1501,35 », donc sur le Danube.",
   "reminder": "Corinna : p.k. danubien 1501,35.",
   "source": {
    "page": 44,
    "quote": "Avalant près du p.k. danubien 1501,35"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q4136",
   "type": "qcm",
   "question": "Quel est l'indicatif d'appel de l'automoteur-citerne « Corinna » dans l'exemple ?",
   "choices": [
    "OED4711",
    "OED1147",
    "OS2563",
    "FM 1234"
   ],
   "answer": "OED4711",
   "explanation": "Corinna utilise l'indicatif OED4711 ; OED1147 est celui de Mara et FM 1234 celui de Karin.",
   "reminder": "Corinna = OED4711 ; Mara = OED1147 ; Karin = FM 1234.",
   "source": {
    "page": 44,
    "quote": "OED4711 MAYDAY Automoteur-citerne Corinna OED4711"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q4137",
   "type": "qcm",
   "question": "Quel signal « Mara » utilise-t-il pour demander une aide médicale sans danger de mort ?",
   "choices": [
    "MAYDAY RELAY (x3)",
    "SECURITE (x3)",
    "PAN PAN (x3)",
    "MAYDAY (x3)"
   ],
   "answer": "PAN PAN (x3)",
   "explanation": "Le besoin d'aide médicale sans danger de mort relève des communications d'urgence : Mara utilise PAN PAN répété trois fois.",
   "reminder": "Urgence sans danger de mort = PAN PAN.",
   "source": {
    "page": 45,
    "quote": "L'automoteur ordinaire « Mara » a besoin d'aide médicale à bord (pas de danger de mort) et demande de l'aide à la centrale de secteur de Duisbourg (Duisburg Revierzentrale) sur le canal 22 du réseau Informations nautiques : PAN PAN, PAN PAN, PAN PAN"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4139",
   "type": "qcm",
   "question": "Sur quel canal « Mara » appelle-t-il la centrale de secteur de Duisbourg ?",
   "choices": [
    "Le canal 19 (canal imposé)",
    "Le canal 22 du réseau Informations nautiques",
    "Le canal 10 du réseau bateau-bateau",
    "Le canal 18 du réseau Informations nautiques"
   ],
   "answer": "Le canal 22 du réseau Informations nautiques",
   "explanation": "Mara appelle la centrale de Duisbourg sur le canal 22 du réseau Informations nautiques.",
   "reminder": "Mara (urgence) : canal 22, Duisbourg.",
   "source": {
    "page": 45,
    "quote": "sur le canal 22 du réseau Informations nautiques"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4140",
   "type": "qcm",
   "question": "Dans l'appel d'urgence de « Mara », qu'est-ce qui suit directement « PAN PAN, PAN PAN, PAN PAN » ?",
   "choices": [
    "THIS IS",
    "ALL STATIONS trois fois",
    "Le nom de Mara trois fois",
    "Le nom de la station appelée, Duisburg Revierzentrale, trois fois"
   ],
   "answer": "Le nom de la station appelée, Duisburg Revierzentrale, trois fois",
   "explanation": "Dans l'appel d'urgence, PAN PAN x3 est suivi du nom de la station appelée (Duisburg Revierzentrale x3), puis THIS IS et le nom de Mara. Dans l'appel MAYDAY de Karin, THIS IS suivait directement.",
   "reminder": "PAN PAN x3 → station appelée x3 → THIS IS → mon nom x3.",
   "source": {
    "page": 45,
    "quote": "PAN PAN, PAN PAN, PAN PAN Duisburg Revierzentrale, Duisburg Revierzentrale, Duisburg Revierzentrale THIS IS"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "difficile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 210\" width=\"560\" height=\"210\"><rect x=\"0\" y=\"0\" width=\"560\" height=\"210\" fill=\"#f8fafc\"/><text x=\"280.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Ordre des éléments : détresse ou urgence</text><rect x=\"20\" y=\"40\" width=\"250\" height=\"155\" rx=\"8\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"20\" y=\"40\" width=\"250\" height=\"30\" rx=\"8\" fill=\"#dbeafe\" stroke=\"#94a3b8\"/><text x=\"145\" y=\"60\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">MAYDAY (Karin)</text><text x=\"32\" y=\"92\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">MAYDAY (x3)</text><text x=\"32\" y=\"116\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">THIS IS</text><text x=\"32\" y=\"140\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Karin (x3)</text><text x=\"32\" y=\"164\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">FM 1234</text><rect x=\"290\" y=\"40\" width=\"250\" height=\"155\" rx=\"8\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"290\" y=\"40\" width=\"250\" height=\"30\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#94a3b8\"/><text x=\"415\" y=\"60\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">PAN PAN (Mara)</text><text x=\"302\" y=\"92\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">PAN PAN (x3)</text><text x=\"302\" y=\"116\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Duisburg Revierzentrale (x3)</text><text x=\"302\" y=\"140\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">THIS IS</text><text x=\"302\" y=\"164\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">Mara (x3)</text><text x=\"302\" y=\"188\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">OED1147</text></svg>",
    "placement": "explanation",
    "alt": "Comparaison : dans l'appel MAYDAY de Karin, THIS IS suit directement MAYDAY ; dans l'appel PAN PAN de Mara, la station appelée est nommée trois fois avant THIS IS."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4141",
   "type": "qcm",
   "question": "Quel problème « Mara » signale-t-il dans son message d'urgence ?",
   "choices": [
    "Un matelot blessé, probablement une fracture du bras",
    "Une panne de moteur",
    "Un homme tombé par-dessus bord",
    "Une fuite de cargaison"
   ],
   "answer": "Un matelot blessé, probablement une fracture du bras",
   "explanation": "Mara demande de l'aide médicale pour un matelot blessé, probablement atteint d'une fracture du bras.",
   "reminder": "Mara : matelot blessé, fracture du bras probable.",
   "source": {
    "page": 46,
    "quote": "Demande de l'aide médicale Matelot blessé, probablement fracture du bras"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4142",
   "type": "qcm",
   "question": "Par quelle instruction la centrale de Duisbourg termine-t-elle sa réponse à « Mara » ?",
   "choices": [
    "Interrompre la navigation",
    "Prenez les mesures nécessaires",
    "SILENCE FINI",
    "Restez à l'écoute"
   ],
   "answer": "Restez à l'écoute",
   "explanation": "La centrale répond « J'ai compris », annonce qu'elle appelle une ambulance et qu'elle indiquera où l'ambulance attend, puis conclut par « Restez à l'écoute ».",
   "reminder": "Réponse à l'urgence de Mara : ... « Restez à l'écoute ».",
   "source": {
    "page": 46,
    "quote": "J'ai compris J'appelle une ambulance Je vous informerai du lieu où l'ambulance vous attend Restez à l'écoute"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 300\" width=\"520\" height=\"300\"><rect x=\"0\" y=\"0\" width=\"520\" height=\"300\" fill=\"#f8fafc\"/><text x=\"260.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Réponse de la centrale de Duisbourg à « Mara »</text><rect x=\"20\" y=\"40\" width=\"480\" height=\"244\" rx=\"8\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><text x=\"40\" y=\"60\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">PAN PAN</text><text x=\"40\" y=\"86\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">Automoteur ordinaire Mara (x3)</text><text x=\"40\" y=\"112\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">OED1147</text><text x=\"40\" y=\"138\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">THIS IS</text><text x=\"40\" y=\"164\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">Duisburg Revierzentrale (x3)</text><text x=\"40\" y=\"190\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">J'ai compris</text><text x=\"40\" y=\"216\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">J'appelle une ambulance</text><text x=\"40\" y=\"242\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">Je vous informerai du lieu où l'ambulance vous attend</text><rect x=\"40\" y=\"251\" width=\"440\" height=\"22\" rx=\"4\" fill=\"#fee2e2\" stroke=\"#dc2626\"/><text x=\"260.0\" y=\"268\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"15\" font-weight=\"bold\" fill=\"#dc2626\">?</text></svg>",
    "placement": "question",
    "alt": "Carte de la réponse de Duisbourg à Mara dont la dernière ligne est masquée par un point d'interrogation."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4143",
   "type": "qcm",
   "question": "Par quel mot commence la réponse de la centrale de Duisbourg à l'appel d'urgence de « Mara » ?",
   "choices": [
    "SECURITE",
    "RECEIVED",
    "MAYDAY",
    "PAN PAN"
   ],
   "answer": "PAN PAN",
   "explanation": "La réponse de la centrale commence par PAN PAN, puis le nom de Mara trois fois, son indicatif OED1147, THIS IS et le nom de la centrale.",
   "reminder": "Réponse à une urgence : on reprend PAN PAN.",
   "source": {
    "page": 46,
    "quote": "Réponse de la centrale de secteur de Duisbourg : PAN PAN Automoteur ordinaire Mara, Automoteur ordinaire Mara, Automoteur ordinaire Mara OED1147 THIS IS"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4144",
   "type": "qcm",
   "question": "Sur quel canal le poste de trafic de Dordrecht diffuse-t-il son message de sécurité ?",
   "choices": [
    "Le canal imposé 19 du réseau Informations nautiques",
    "Le canal 20",
    "Le canal 22 du réseau Informations nautiques",
    "Le canal 10 du réseau bateau-bateau"
   ],
   "answer": "Le canal imposé 19 du réseau Informations nautiques",
   "explanation": "Le poste de trafic de Dordrecht avertit la navigation sur le canal imposé 19 du réseau Informations nautiques.",
   "reminder": "Dordrecht (sécurité) : canal imposé 19.",
   "source": {
    "page": 46,
    "quote": "Le poste de trafic de Dordrecht (Dordrecht verkeerspost) avertit la navigation sur le canal imposé 19 du réseau Informations nautiques"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4145",
   "type": "qcm",
   "question": "Par quel signal commence le message de sécurité du poste de trafic de Dordrecht ?",
   "choices": [
    "ALL STATIONS (x3) seul",
    "PAN PAN (x3)",
    "SECURITE (x3)",
    "MAYDAY (x3)"
   ],
   "answer": "SECURITE (x3)",
   "explanation": "Le message de sécurité commence par SECURITE trois fois, suivi de ALL STATIONS trois fois et de THIS IS.",
   "reminder": "Message de sécurité : SECURITE x3, ALL STATIONS x3, THIS IS.",
   "source": {
    "page": 47,
    "quote": "SECURITE, SECURITE, SECURITE ALL STATIONS, ALL STATIONS, ALL STATIONS THIS IS"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "facile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 222\" width=\"520\" height=\"222\"><rect x=\"0\" y=\"0\" width=\"520\" height=\"222\" fill=\"#f8fafc\"/><text x=\"260.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Message du poste de trafic de Dordrecht</text><rect x=\"20\" y=\"40\" width=\"480\" height=\"166\" rx=\"8\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"40\" y=\"43\" width=\"440\" height=\"22\" rx=\"4\" fill=\"#fee2e2\" stroke=\"#dc2626\"/><text x=\"260.0\" y=\"60\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"15\" font-weight=\"bold\" fill=\"#dc2626\">?</text><text x=\"40\" y=\"86\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">ALL STATIONS, ALL STATIONS, ALL STATIONS</text><text x=\"40\" y=\"112\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">THIS IS</text><text x=\"40\" y=\"138\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">Dordrecht verkeerspost (x3)</text><text x=\"40\" y=\"164\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">Épais brouillard dans le secteur de Dordrecht sur l'Oude Maas</text><text x=\"40\" y=\"190\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">Visibilité de 50 m environ</text></svg>",
    "placement": "question",
    "alt": "Carte du message de Dordrecht sur le brouillard, dont la première ligne (le signal d'en-tête) est masquée par un point d'interrogation."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4146",
   "type": "qcm",
   "question": "Quelle visibilité le poste de trafic de Dordrecht annonce-t-il dans son message de sécurité ?",
   "choices": [
    "1 km environ",
    "50 m environ",
    "5 m environ",
    "500 m environ"
   ],
   "answer": "50 m environ",
   "explanation": "Le message signale un épais brouillard dans le secteur de Dordrecht sur l'Oude Maas avec une visibilité d'environ 50 m.",
   "reminder": "Brouillard à Dordrecht : visibilité 50 m.",
   "source": {
    "page": 47,
    "quote": "Épais brouillard dans le secteur de Dordrecht sur l'Oude Maas Visibilité de 50 m environ"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4147",
   "type": "qcm",
   "question": "À qui le poste de trafic de Dordrecht adresse-t-il son message de sécurité ?",
   "choices": [
    "Uniquement à l'automoteur Karin",
    "À toutes les stations (ALL STATIONS)",
    "Uniquement à l'écluse de Birsfelden",
    "Uniquement à la centrale de Duisbourg"
   ],
   "answer": "À toutes les stations (ALL STATIONS)",
   "explanation": "Après SECURITE x3, le message est adressé à ALL STATIONS trois fois, c'est-à-dire à toutes les stations.",
   "reminder": "Message de sécurité général : adressé à ALL STATIONS.",
   "source": {
    "page": 47,
    "quote": "SECURITE, SECURITE, SECURITE ALL STATIONS, ALL STATIONS, ALL STATIONS"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4148",
   "type": "qcm",
   "question": "Quel danger fait l'objet du message de sécurité de Dordrecht ?",
   "choices": [
    "Un épais brouillard sur l'Oude Maas",
    "Une collision au p.k. 424,30",
    "Une manifestation sportive sur le Canal Albert",
    "Un homme tombé par-dessus bord"
   ],
   "answer": "Un épais brouillard sur l'Oude Maas",
   "explanation": "Le message de sécurité du poste de trafic de Dordrecht porte sur un épais brouillard dans le secteur de Dordrecht, sur l'Oude Maas.",
   "reminder": "Dordrecht : brouillard sur l'Oude Maas (SECURITE).",
   "source": {
    "page": 47,
    "quote": "Épais brouillard dans le secteur de Dordrecht sur l'Oude Maas"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4149",
   "type": "qcm",
   "question": "Dans l'exemple de conversation de routine, sur quel canal « Sylvia » contacte-t-il l'écluse de Birsfelden ?",
   "choices": [
    "Le canal 22",
    "Le canal 18",
    "Le canal 20",
    "Le canal 10"
   ],
   "answer": "Le canal 22",
   "explanation": "Sylvia se renseigne sur le canal 22 auprès de l'écluse de Birsfelden pour savoir si l'entrée dans le garage amont est libre.",
   "reminder": "Sylvia ↔ écluse de Birsfelden : canal 22.",
   "source": {
    "page": 47,
    "quote": "L'automoteur-citerne « Sylvia » se renseigne sur le canal 22 auprès de l'écluse de Birsfelden (Birsfelden Schleuse) pour savoir si l'entrée dans le garage amont de l'écluse est libre :"
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4150",
   "type": "qcm",
   "question": "Dans l'exemple de conversation de routine de « Sylvia », combien de fois au plus le nom de l'écluse appelée est-il prononcé ?",
   "choices": [
    "Cinq fois au plus",
    "Une fois exactement",
    "Deux fois exactement",
    "Trois fois au plus"
   ],
   "answer": "Trois fois au plus",
   "explanation": "Dans l'exemple de routine, le nom de l'écluse appelée et celui du bateau appelant sont prononcés « trois fois au plus ».",
   "reminder": "Exemple de routine : noms dits trois fois au plus.",
   "source": {
    "page": 47,
    "quote": "Écluse de Birsfelden (trois fois au plus)"
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 196\" width=\"520\" height=\"196\"><rect x=\"0\" y=\"0\" width=\"520\" height=\"196\" fill=\"#f8fafc\"/><text x=\"260.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Conversation de routine : appel de « Sylvia »</text><rect x=\"20\" y=\"40\" width=\"480\" height=\"140\" rx=\"8\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><text x=\"40\" y=\"60\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">Écluse de Birsfelden (trois fois au plus)</text><text x=\"40\" y=\"86\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">« THIS IS » ou « ICI »</text><text x=\"40\" y=\"112\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">Automoteur-citerne Sylvia (trois fois au plus)</text><text x=\"40\" y=\"138\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">Chargé, avalant près de Grenzach</text><text x=\"40\" y=\"164\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">L'entrée dans le garage de l'écluse est-elle libre ?</text></svg>",
    "placement": "explanation",
    "alt": "Carte de l'appel de routine de Sylvia : écluse de Birsfelden trois fois au plus, THIS IS ou ICI, Sylvia trois fois au plus, position, question."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4151",
   "type": "qcm",
   "question": "Dans les exemples de conversation de routine en français, quel mot peut remplacer « THIS IS » ?",
   "choices": [
    "PARLEZ",
    "VENEZ",
    "ICI",
    "REÇU"
   ],
   "answer": "ICI",
   "explanation": "Les exemples de routine indiquent « THIS IS » ou « ICI ».",
   "reminder": "THIS IS = ICI.",
   "source": {
    "page": 47,
    "quote": "« THIS IS » ou « ICI »"
   },
   "category": "procedures-generales",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4152",
   "type": "qcm",
   "question": "Quelle information « Sylvia » donne-t-il sur sa situation avant de poser sa question à l'écluse ?",
   "choices": [
    "Vide, montant près de Mannheim",
    "Avalant près du p.k. danubien 1501,35",
    "Montant à 500 m à l'aval de l'embouchure du Main",
    "Chargé, avalant près de Grenzach"
   ],
   "answer": "Chargé, avalant près de Grenzach",
   "explanation": "Sylvia indique « Chargé, avalant près de Grenzach » avant de demander si l'entrée dans le garage de l'écluse est libre.",
   "reminder": "Sylvia : chargé, avalant près de Grenzach.",
   "source": {
    "page": 47,
    "quote": "Automoteur-citerne Sylvia (trois fois au plus) Chargé, avalant près de Grenzach L'entrée dans le garage de l'écluse est-elle libre ?"
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4153",
   "type": "qcm",
   "question": "Dans l'accusé de réception de « Sylvia » à l'écluse de Birsfelden, que fait le bateau après « J'ai compris » ?",
   "choices": [
    "Il demande à l'écluse de répéter",
    "Il répète l'information reçue : « L'entrée est libre »",
    "Il donne sa position au point kilométrique",
    "Il termine par SILENCE FINI"
   ],
   "answer": "Il répète l'information reçue : « L'entrée est libre »",
   "explanation": "L'accusé de réception de Sylvia se compose de : Écluse de Birsfelden, THIS IS / ICI, Automoteur-citerne Sylvia, J'ai compris, L'entrée est libre.",
   "reminder": "Accusé de réception : « J'ai compris » + répéter l'info reçue.",
   "source": {
    "page": 48,
    "quote": "Accusé de réception de la station de bateau : Écluse de Birsfelden « THIS IS » ou « ICI » Automoteur-citerne Sylvia J'ai compris L'entrée est libre"
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4154",
   "type": "qcm",
   "question": "Dans la réponse de l'écluse de Birsfelden à « Sylvia », quel nom est prononcé en premier ?",
   "choices": [
    "Automoteur-citerne Sylvia (la station appelante)",
    "Écluse de Birsfelden",
    "THIS IS",
    "ALL STATIONS"
   ],
   "answer": "Automoteur-citerne Sylvia (la station appelante)",
   "explanation": "L'écluse commence par le nom de la station à qui elle répond (Sylvia, trois fois au plus), puis THIS IS / ICI, puis son propre nom.",
   "reminder": "Réponse : nom de l'autre d'abord, puis THIS IS, puis son nom.",
   "source": {
    "page": 48,
    "quote": "L'écluse de Birsfelden répond comme suit : Automoteur-citerne Sylvia (trois fois au plus) « THIS IS » ou « ICI » Écluse de Birsfelden (trois fois au plus) L'entrée est libre"
   },
   "category": "procedures-generales",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q4155",
   "type": "qcm",
   "question": "Sur quel canal l'écluse de Hasselt adresse-t-elle son message à toutes les stations de bateau ?",
   "choices": [
    "Le canal 10",
    "Le canal 19",
    "Le canal 22",
    "Le canal 20"
   ],
   "answer": "Le canal 20",
   "explanation": "L'exemple indique que l'écluse de Hasselt adresse un message sur le canal 20.",
   "reminder": "Écluse de Hasselt : canal 20.",
   "source": {
    "page": 48,
    "quote": "L'écluse de Hasselt (Hasselt sluis) adresse un message sur le canal 20 :"
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4156",
   "type": "qcm",
   "question": "Comment l'écluse de Hasselt commence-t-elle son message général ?",
   "choices": [
    "« PAN PAN », trois fois",
    "Par le nom de chaque bateau présent",
    "« SECURITE », trois fois",
    "« ALL STATIONS » ou « à toutes les stations de bateau », trois fois au plus"
   ],
   "answer": "« ALL STATIONS » ou « à toutes les stations de bateau », trois fois au plus",
   "explanation": "Le message de l'écluse de Hasselt commence par « ALL STATIONS » ou « à toutes les stations de bateau », trois fois au plus.",
   "reminder": "Message général de routine : ALL STATIONS (trois fois au plus).",
   "source": {
    "page": 48,
    "quote": "« ALL STATIONS » ou « à toutes les stations de bateau » (trois fois au plus)"
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4157",
   "type": "qcm",
   "question": "Selon le message de l'écluse de Hasselt, pendant quelle période la navigation sera-t-elle interrompue sur le Canal Albert ?",
   "choices": [
    "De 18.30 à 20.00 heures",
    "De 20.00 à 22.00 heures",
    "De 18.00 à 20.00 heures",
    "De 18.00 à 18.30 heures"
   ],
   "answer": "De 18.00 à 20.00 heures",
   "explanation": "La manifestation sportive commence à 18.30, mais la navigation est interrompue de 18.00 à 20.00 heures.",
   "reminder": "Canal Albert : manifestation dès 18.30, navigation interrompue 18.00-20.00.",
   "source": {
    "page": 49,
    "quote": "Sur le Canal Albert aura lieu à partir de 18.30 heures une manifestation sportive à l'aval de l'écluse. La navigation sera interrompue de 18.00 à 20.00 heures."
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 170\" width=\"560\" height=\"170\"><rect x=\"0\" y=\"0\" width=\"560\" height=\"170\" fill=\"#f8fafc\"/><text x=\"280.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Canal Albert : message de l'écluse de Hasselt</text><text x=\"20\" y=\"65\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">Interruption navigation (début)</text><rect x=\"230\" y=\"50\" width=\"80\" height=\"22\" rx=\"3\" fill=\"#93c5fd\" stroke=\"#1e3a8a\"/><text x=\"315\" y=\"66\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">18.00</text><text x=\"20\" y=\"105\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">Manifestation sportive (début)</text><rect x=\"230\" y=\"90\" width=\"120\" height=\"22\" rx=\"3\" fill=\"#93c5fd\" stroke=\"#1e3a8a\"/><text x=\"355\" y=\"106\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">18.30</text><text x=\"20\" y=\"145\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">Fin interruption</text><rect x=\"230\" y=\"130\" width=\"260\" height=\"22\" rx=\"3\" fill=\"#93c5fd\" stroke=\"#1e3a8a\"/><text x=\"495\" y=\"146\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"12\" fill=\"#0f172a\">20.00</text></svg>",
    "placement": "explanation",
    "alt": "Repères horaires : la navigation est interrompue de 18.00 à 20.00, la manifestation commençant à 18.30."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4158",
   "type": "qcm",
   "question": "Sur quel canal l'automoteur-citerne « Britta » demande-t-il s'il y a de la navigation sur le Rhin ?",
   "choices": [
    "Le canal 18",
    "Le canal 22",
    "Le canal 10",
    "Le canal 20"
   ],
   "answer": "Le canal 10",
   "explanation": "Britta, qui sort du Main, demande sur le canal 10 s'il y a de la navigation sur le Rhin.",
   "reminder": "Britta : canal 10 (bateau-bateau).",
   "source": {
    "page": 49,
    "quote": "L'automoteur-citerne « Britta » sort du Main et demande comme suit sur le canal 10 s'il y a de la navigation sur le Rhin :"
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4159",
   "type": "qcm",
   "question": "Comment « Britta » adresse-t-il son appel ?",
   "choices": [
    "« ALL STATIONS dans le secteur de l'embouchure du Main », trois fois au plus",
    "« Écluse de Hasselt », trois fois au plus",
    "« Automoteur ordinaire Tanja », trois fois au plus",
    "« SECURITE, SECURITE, SECURITE »"
   ],
   "answer": "« ALL STATIONS dans le secteur de l'embouchure du Main », trois fois au plus",
   "explanation": "Britta adresse son appel à toutes les stations dans le secteur de l'embouchure du Main, trois fois au plus.",
   "reminder": "Britta appelle ALL STATIONS dans le secteur de l'embouchure du Main.",
   "source": {
    "page": 49,
    "quote": "« ALL STATIONS dans le secteur de l'embouchure du Main » ou « À toutes les stations de bateau dans le secteur de l'embouchure du Main » (trois fois au plus)"
   },
   "category": "procedures-generales",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q4160",
   "type": "qcm",
   "question": "Quelle question « Britta » pose-t-il aux autres bateaux ?",
   "choices": [
    "L'entrée dans le garage de l'écluse est-elle libre ?",
    "Y a-t-il des montants ou des avalants dans le voisinage ?",
    "Quelle est la visibilité sur l'Oude Maas ?",
    "Pouvez-vous appeler une ambulance ?"
   ],
   "answer": "Y a-t-il des montants ou des avalants dans le voisinage ?",
   "explanation": "Britta, avalant sur le Main à environ 1 km de l'embouchure et voulant monter le Rhin, demande s'il y a des montants ou des avalants dans le voisinage.",
   "reminder": "Britta : « Y a-t-il des montants ou des avalants dans le voisinage ? »",
   "source": {
    "page": 49,
    "quote": "Avalant sur le Main à environ 1 km avant l'embouchure Veux monter le Rhin Y a-t-il des montants ou des avalants dans le voisinage ?"
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4161",
   "type": "qcm",
   "question": "Que répond l'automoteur ordinaire « Tanja » à « Britta » ?",
   "choices": [
    "Montant à 500 m à l'aval de l'embouchure du Main, pas d'autre navigation",
    "L'entrée est libre",
    "J'appelle une ambulance",
    "Avalant près de Mannheim, p.k. 424,30"
   ],
   "answer": "Montant à 500 m à l'aval de l'embouchure du Main, pas d'autre navigation",
   "explanation": "Tanja indique qu'il est montant à 500 m à l'aval de l'embouchure du Main et qu'il n'y a pas d'autre navigation.",
   "reminder": "Tanja : montant à 500 m en aval de l'embouchure, pas d'autre navigation.",
   "source": {
    "page": 50,
    "quote": "Montant à 500 m à l'aval de l'embouchure du Main Pas d'autre navigation"
   },
   "category": "procedures-generales",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 231\" width=\"480\" height=\"231\"><rect x=\"0\" y=\"0\" width=\"480\" height=\"231\" fill=\"#f8fafc\"/><text x=\"240.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Échange Britta / Tanja (canal 10)</text><defs><marker id=\"a\" markerWidth=\"8\" markerHeight=\"8\" refX=\"4\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#1e3a8a\"/></marker></defs><rect x=\"40\" y=\"40\" width=\"400\" height=\"40\" rx=\"6\" fill=\"#e0f2fe\" stroke=\"#0369a1\"/><text x=\"240.0\" y=\"65\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" fill=\"#0f172a\">Britta : ALL STATIONS embouchure du Main ; montants ou avalants ?</text><line x1=\"240.0\" y1=\"80\" x2=\"240.0\" y2=\"99\" stroke=\"#1e3a8a\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"40\" y=\"102\" width=\"400\" height=\"40\" rx=\"6\" fill=\"#e0f2fe\" stroke=\"#0369a1\"/><text x=\"240.0\" y=\"127\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" fill=\"#0f172a\">Tanja : montant à 500 m en aval ; pas d'autre navigation</text><line x1=\"240.0\" y1=\"142\" x2=\"240.0\" y2=\"161\" stroke=\"#1e3a8a\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"40\" y=\"164\" width=\"400\" height=\"40\" rx=\"6\" fill=\"#e0f2fe\" stroke=\"#0369a1\"/><text x=\"240.0\" y=\"189\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" fill=\"#0f172a\">Britta : J'ai compris, merci ; Bonne route</text></svg>",
    "placement": "explanation",
    "alt": "Trois étapes : Britta interroge toutes les stations, Tanja répond qu'il est montant à 500 m en aval sans autre navigation, Britta remercie et souhaite bonne route."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4162",
   "type": "qcm",
   "question": "Par quelle formule l'automoteur-citerne « Britta » termine-t-il son accusé de réception à « Tanja » ?",
   "choices": [
    "« J'ai compris, merci » puis « Bonne route »",
    "« SILENCE FINI »",
    "« Restez à l'écoute »",
    "« RECEIVED, MAYDAY »"
   ],
   "answer": "« J'ai compris, merci » puis « Bonne route »",
   "explanation": "Britta accuse réception par « J'ai compris, merci » et conclut par « Bonne route ».",
   "reminder": "Fin d'échange de routine : « J'ai compris, merci », « Bonne route ».",
   "source": {
    "page": 50,
    "quote": "J'ai compris, merci Bonne route"
   },
   "category": "procedures-generales",
   "difficulty": "facile",
   "kind": "memoire"
  },
  {
   "id": "Q4164",
   "type": "qcm",
   "question": "Selon le schéma « Guidance on distress alerts » de l'annexe, quelle est la première action pour déclencher une alerte de détresse ASN ?",
   "choices": [
    "Annoncer MAYDAY à la voix",
    "Soulever le couvercle (LIFT COVER)",
    "Appuyer sur le bouton rouge DISTRESS",
    "Prendre le combiné (HANDSET)"
   ],
   "answer": "Soulever le couvercle (LIFT COVER)",
   "explanation": "Le schéma indique d'abord LIFT COVER (soulever le couvercle), puis d'appuyer sur le bouton rouge DISTRESS, puis d'utiliser le combiné pour l'appel vocal.",
   "reminder": "Alerte ASN : couvercle, bouton rouge, puis combiné.",
   "source": {
    "page": 51,
    "quote": "LIFT COVER"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "facile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 293\" width=\"480\" height=\"293\"><rect x=\"0\" y=\"0\" width=\"480\" height=\"293\" fill=\"#f8fafc\"/><text x=\"240.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Alerte de détresse ASN (schéma de l'annexe)</text><defs><marker id=\"a\" markerWidth=\"8\" markerHeight=\"8\" refX=\"4\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#1e3a8a\"/></marker></defs><rect x=\"40\" y=\"40\" width=\"400\" height=\"40\" rx=\"6\" fill=\"#e0f2fe\" stroke=\"#0369a1\"/><text x=\"240.0\" y=\"65\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" fill=\"#0f172a\">LIFT COVER : soulever le couvercle</text><line x1=\"240.0\" y1=\"80\" x2=\"240.0\" y2=\"99\" stroke=\"#1e3a8a\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"40\" y=\"102\" width=\"400\" height=\"40\" rx=\"6\" fill=\"#e0f2fe\" stroke=\"#0369a1\"/><text x=\"240.0\" y=\"127\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" fill=\"#0f172a\">PRESS RED BUTTON DISTRESS</text><line x1=\"240.0\" y1=\"142\" x2=\"240.0\" y2=\"161\" stroke=\"#1e3a8a\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"40\" y=\"164\" width=\"400\" height=\"40\" rx=\"6\" fill=\"#e0f2fe\" stroke=\"#0369a1\"/><text x=\"240.0\" y=\"189\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" fill=\"#0f172a\">Maintenir plus de 3 secondes (signal fixe)</text><line x1=\"240.0\" y1=\"204\" x2=\"240.0\" y2=\"223\" stroke=\"#1e3a8a\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"40\" y=\"226\" width=\"400\" height=\"40\" rx=\"6\" fill=\"#e0f2fe\" stroke=\"#0369a1\"/><text x=\"240.0\" y=\"251\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" fill=\"#0f172a\">HANDSET : appel vocal MAYDAY</text></svg>",
    "placement": "explanation",
    "alt": "Organigramme en quatre étapes : soulever le couvercle, appuyer sur le bouton rouge, maintenir plus de 3 secondes jusqu'à indication fixe, puis appel vocal MAYDAY avec le combiné."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4165",
   "type": "qcm",
   "question": "Combien de temps faut-il maintenir le bouton rouge DISTRESS enfoncé selon le schéma de l'annexe ?",
   "choices": [
    "Plus de 10 secondes",
    "Une seconde",
    "Plus de 3 secondes, jusqu'à ce que l'indication sonore et lumineuse devienne fixe",
    "Jusqu'à la réponse d'une station côtière"
   ],
   "answer": "Plus de 3 secondes, jusqu'à ce que l'indication sonore et lumineuse devienne fixe",
   "explanation": "Le schéma demande d'appuyer sur le bouton rouge jusqu'à ce que les indications sonore et lumineuse deviennent fixes, soit plus de 3 secondes.",
   "reminder": "Bouton DISTRESS : plus de 3 secondes.",
   "source": {
    "page": 51,
    "quote": "PRESS RED BUTTON until acoustic and light-indication becomes steady (more than 3 seconds)"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4166",
   "type": "qcm",
   "question": "Après l'alerte ASN, avec quoi le schéma indique-t-il de faire l'appel vocal ?",
   "choices": [
    "La balise EPIRB",
    "L'AIS",
    "Le bouton DISTRESS",
    "Le combiné (HANDSET)"
   ],
   "answer": "Le combiné (HANDSET)",
   "explanation": "Le schéma précise « Use the HANDSET for voice calling » : l'appel vocal MAYDAY se fait au combiné.",
   "reminder": "Après le bouton rouge : MAYDAY vocal au combiné.",
   "source": {
    "page": 51,
    "quote": "Use the HANDSET for voice calling"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4167",
   "type": "qcm",
   "question": "Dans le tableau « Distress and communication frequencies » de l'annexe, quel canal VHF est indiqué pour l'ASN (DSC) ?",
   "choices": [
    "Canal 70",
    "Canal 10",
    "Canal 13",
    "Canal 16"
   ],
   "answer": "Canal 70",
   "explanation": "Le tableau indique, pour la VHF, le canal 70 dans la colonne DSC et le canal 16 dans la colonne Radiotelephony.",
   "reminder": "VHF détresse : DSC canal 70, voix canal 16.",
   "source": {
    "page": 51,
    "quote": "VHF Channel 70 Channel 16"
   },
   "category": "canaux-vhf",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 138\" width=\"560\" height=\"138\"><rect x=\"0\" y=\"0\" width=\"560\" height=\"138\" fill=\"#f8fafc\"/><text x=\"280.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Fréquences de détresse (extrait du tableau)</text><rect x=\"20\" y=\"40\" width=\"250\" height=\"83\" rx=\"8\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"20\" y=\"40\" width=\"250\" height=\"30\" rx=\"8\" fill=\"#dbeafe\" stroke=\"#94a3b8\"/><text x=\"145\" y=\"60\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">DSC (ASN)</text><text x=\"32\" y=\"92\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">VHF : canal 70</text><text x=\"32\" y=\"116\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">MF : 2187,5 kHz</text><rect x=\"290\" y=\"40\" width=\"250\" height=\"83\" rx=\"8\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"290\" y=\"40\" width=\"250\" height=\"30\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#94a3b8\"/><text x=\"415\" y=\"60\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">Radiotéléphonie</text><text x=\"302\" y=\"92\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">VHF : canal 16</text><text x=\"302\" y=\"116\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"13\" fill=\"#0f172a\">MF : 2182 kHz</text></svg>",
    "placement": "explanation",
    "alt": "Comparaison : en DSC, canal 70 en VHF et 2187,5 kHz en MF ; en radiotéléphonie, canal 16 en VHF et 2182 kHz en MF."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4169",
   "type": "qcm",
   "question": "Selon le schéma, quand faut-il mentionner le MMSI dans le message vocal de détresse ?",
   "choices": [
    "Uniquement si la position est inconnue",
    "Toujours, dans tous les cas",
    "Si l'alerte initiale a été envoyée par DSC (ASN)",
    "Jamais, le MMSI n'est utilisé qu'en ASN"
   ],
   "answer": "Si l'alerte initiale a été envoyée par DSC (ASN)",
   "explanation": "Le schéma indique MMSI « if the initial alert is sent by DSC » : on cite le MMSI si l'alerte initiale a été envoyée par ASN.",
   "reminder": "MMSI dans le MAYDAY vocal si l'alerte initiale était ASN.",
   "source": {
    "page": 51,
    "quote": "MMSI (if the initial alert is sent by DSC)"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q4170",
   "type": "qcm",
   "question": "Selon le schéma de l'annexe, comment donner la position si la latitude et la longitude ne sont pas connues ?",
   "choices": [
    "Il ne faut pas donner de position",
    "Par le numéro MMSI",
    "Par rapport à un lieu géographique connu",
    "Par le point kilométrique uniquement"
   ],
   "answer": "Par rapport à un lieu géographique connu",
   "explanation": "Le schéma demande la position en latitude et longitude, ou, si elles ne sont pas connues ou si le temps manque, par rapport à un lieu géographique connu.",
   "reminder": "Position : lat/long, sinon par rapport à un lieu connu.",
   "source": {
    "page": 51,
    "quote": "POSITION given as latitude and longitude or if latitude and longitude are not known or if time is insufficient, in relation to a known geographical location"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "kind": "memoire"
  },
  {
   "id": "Q4171",
   "type": "qcm",
   "question": "Selon le schéma, quels éléments suivent la position dans le message vocal de détresse ?",
   "choices": [
    "Le CIAC et le numéro de certificat",
    "L'heure, le nom de la station côtière et SILENCE FINI",
    "Le canal de travail et la puissance d'émission",
    "La nature de la détresse, le type d'assistance requise et toute autre information utile"
   ],
   "answer": "La nature de la détresse, le type d'assistance requise et toute autre information utile",
   "explanation": "Après la position, le schéma liste NATURE of distress, Kind of ASSISTANCE required et Any other useful INFORMATION.",
   "reminder": "Après la position : nature, assistance demandée, autres infos utiles.",
   "source": {
    "page": 51,
    "quote": "NATURE of distress Kind of ASSISTANCE required Any other useful INFORMATION"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 274\" width=\"520\" height=\"274\"><rect x=\"0\" y=\"0\" width=\"520\" height=\"274\" fill=\"#f8fafc\"/><text x=\"260.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Message vocal après l'alerte ASN (schéma)</text><rect x=\"20\" y=\"40\" width=\"480\" height=\"218\" rx=\"8\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><text x=\"40\" y=\"60\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">MAYDAY</text><text x=\"40\" y=\"86\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">NAME of the VESSEL in distress</text><text x=\"40\" y=\"112\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">CALLSIGN or other IDENTIFICATION</text><text x=\"40\" y=\"138\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">MMSI (if the initial alert is sent by DSC)</text><text x=\"40\" y=\"164\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">POSITION</text><text x=\"40\" y=\"190\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">NATURE of distress</text><text x=\"40\" y=\"216\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">Kind of ASSISTANCE required</text><text x=\"40\" y=\"242\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" font-weight=\"normal\" fill=\"#0f172a\">Any other useful INFORMATION</text></svg>",
    "placement": "explanation",
    "alt": "Carte du message vocal : MAYDAY, nom du navire, indicatif, MMSI si alerte DSC, position, nature de la détresse, assistance requise, autres informations utiles."
   },
   "kind": "memoire"
  },
  {
   "id": "Q4172",
   "type": "qcm",
   "question": "Selon le tableau des fréquences de l'annexe, quel équipement constitue le moyen secondaire d'alerte ?",
   "choices": [
    "L'ATIS",
    "Le combiné VHF",
    "L'AIS",
    "L'EPIRB"
   ],
   "answer": "L'EPIRB",
   "explanation": "Le tableau rappelle « Don't forget your EPIRB is the secondary means of alerting ».",
   "reminder": "EPIRB = moyen d'alerte secondaire.",
   "source": {
    "page": 51,
    "quote": "Don't forget your EPIRB is the secondary means of alerting"
   },
   "category": "detresse-urgence-securite",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q4173",
   "type": "qcm",
   "question": "Dans le tableau des fréquences de détresse de l'annexe, quelle fréquence MF est indiquée pour la radiotéléphonie ?",
   "choices": [
    "2187,5 kHz",
    "4125 kHz",
    "2182 kHz",
    "2174,5 kHz"
   ],
   "answer": "2182 kHz",
   "explanation": "Pour la MF, le tableau donne 2187,5 kHz en DSC, 2182 kHz en radiotéléphonie et 2174,5 kHz en NBDP.",
   "reminder": "MF détresse voix : 2182 kHz.",
   "source": {
    "page": 51,
    "quote": "MF 2187.5 kHz 2182 kHz"
   },
   "category": "frequences-modes",
   "difficulty": "difficile",
   "kind": "memoire"
  },
  {
   "id": "Q4174",
   "type": "qcm",
   "question": "Sur les cartes de l'annexe des zones de navigation, que signifie une zone représentée en noir ?",
   "choices": [
    "ATIS non obligatoire",
    "Navigation interdite",
    "ATIS obligatoire",
    "ASN obligatoire"
   ],
   "answer": "ATIS obligatoire",
   "explanation": "La légende des cartes indique : en noir = ATIS obligatoire, en bleu = ATIS non obligatoire.",
   "reminder": "Cartes ATIS : noir = obligatoire, bleu = non obligatoire.",
   "source": {
    "page": 52,
    "quote": "EN NOIR = ATIS OBLIGATOIRE→ → EN BLEU = ATIS NON OBLIGATOIRE"
   },
   "category": "navigation-interieure",
   "difficulty": "facile",
   "illustration": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 150\" width=\"420\" height=\"150\"><rect x=\"0\" y=\"0\" width=\"420\" height=\"150\" fill=\"#f8fafc\"/><text x=\"210.0\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#1e3a8a\">Légende des cartes « Zones où ATIS est obligatoire »</text><rect x=\"40\" y=\"50\" width=\"60\" height=\"30\" fill=\"#000000\"/><text x=\"115\" y=\"70\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" fill=\"#0f172a\">Noir = ?</text><rect x=\"40\" y=\"95\" width=\"60\" height=\"30\" fill=\"#22d3ee\" stroke=\"#0e7490\"/><text x=\"115\" y=\"115\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"14\" fill=\"#0f172a\">Bleu = ?</text></svg>",
    "placement": "question",
    "alt": "Légende avec un carré noir et un carré bleu, dont la signification est remplacée par un point d'interrogation."
   },
   "kind": "memoire"
  },
  {
   "id": "R001",
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "reasoning_type": "application_regle",
   "question": "Un plaisancier (navigation de plaisance non professionnelle) prépare une sortie à 30 milles nautiques au large de la côte belge. Quel équipement VHF minimum doit-il avoir à bord pour cette zone ?",
   "choices": [
    {
     "id": "A",
     "text": "Un portophone suffit, à condition qu'il figure sur l'autorisation de station.",
     "correct": false,
     "explanation": "Le remplacement d'un appareil fixe par un portable n'est admis que jusqu'à la zone 2 ; à 30 milles, on est en zone 5."
    },
    {
     "id": "B",
     "text": "Une VHF fixe avec ASN, plus un appareil portable supplémentaire.",
     "correct": false,
     "explanation": "Cette double exigence ne vaut que pour les zones 6 et 7 (au-delà de 60 milles nautiques)."
    },
    {
     "id": "C",
     "text": "Une VHF fixe ; un appareil avec ASN est conseillé mais pas obligatoire.",
     "correct": true,
     "explanation": "30 milles = zone 5. À partir de la zone 3, la VHF fixe est obligatoire et l'ASN seulement conseillé ; l'ASN ne devient obligatoire qu'en zones 6 et 7."
    },
    {
     "id": "D",
     "text": "Une VHF fixe avec ASN, obligatoire dès la zone 5.",
     "correct": false,
     "explanation": "L'ASN n'est obligatoire dès la zone 5 que pour la navigation de plaisance organisée professionnellement, ce qui n'est pas le cas ici."
    }
   ],
   "answer": "C",
   "explanation": "Étape 1 : situer la zone. 30 milles nautiques se trouvent entre 6 et 60 milles, donc en zone 5. Étape 2 : appliquer la règle. « À partir de la zone 3 », la VHF fixe est obligatoire et l'ASN conseillé. L'ASN n'est obligatoire qu'en zones 6 et 7 (avec un portable supplémentaire), ou dès la zone 5 pour la plaisance organisée professionnellement. Pour un plaisancier privé en zone 5, le minimum est donc une VHF fixe.",
   "sources": [
    {
     "page": 5,
     "quote": "zone 5 : la zone à partir de 6 milles nautiques jusque 60 milles nautiques"
    },
    {
     "page": 5,
     "quote": "Jusqu’à la zone 2, un appareil VHF fixe peut être remplacé par un appareil portable. À partir de la zone 3, un appareil VHF fixe est obligatoire et un appareil VHF avec ASN est conseillé. Pour les zones 6 et 7, une VHF fixe avec ASN est obligatoire, ainsi qu’un appareil portable supplémentaire."
    },
    {
     "page": 6,
     "quote": "Attention : Si vous organisez de la navigation de plaisance professionnellement, vous devez obligatoirement avoir à bord une VHF fixe avec ASN à partir de la zone 5."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R002",
   "category": "cadre-legal-autorisations",
   "difficulty": "difficile",
   "reasoning_type": "combinaison",
   "question": "Sophie achète un voilier belge d'occasion sur lequel une VHF fixe est déjà installée. Elle souhaite aussi s'équiper d'un portophone. Quelle démarche est conforme au manuel ?",
   "choices": [
    {
     "id": "A",
     "text": "Elle peut utiliser la VHF sous l'autorisation de l'ancien propriétaire, qui reste valable jusqu'à son renouvellement.",
     "correct": false,
     "explanation": "En cas de vente, l'autorisation de station doit être immédiatement renvoyée à l'IBPT : elle ne suit pas le navire."
    },
    {
     "id": "B",
     "text": "Demander l'autorisation dans les 60 jours pour la VHF existante, et n'acheter le portophone qu'une fois l'autorisation reçue.",
     "correct": true,
     "explanation": "Le délai de 60 jours vaut pour l'appareil déjà présent à bord ; tout appareil supplémentaire ne peut être acheté qu'après réception de l'autorisation de station."
    },
    {
     "id": "C",
     "text": "Elle peut acheter le portophone tout de suite, car les appareils portatifs ne doivent pas figurer sur l'autorisation de station.",
     "correct": false,
     "explanation": "L'autorisation doit reprendre tous les moyens de radiocommunications, y compris les stations portatives."
    },
    {
     "id": "D",
     "text": "Le délai de 60 jours couvre aussi le portophone : elle peut l'acheter maintenant et régulariser dans ce délai.",
     "correct": false,
     "explanation": "Le délai de 60 jours concerne seulement l'appareil déjà installé sur le navire acheté ; la règle « achat après réception de l'autorisation » vaut aussi pour tout appareil supplémentaire."
    }
   ],
   "answer": "B",
   "explanation": "Deux règles se combinent. (1) Le navire acheté a déjà un appareil : l'acheteur dispose de 60 jours pour demander son autorisation, l'ancienne autorisation ayant dû être renvoyée à l'IBPT par le vendeur. (2) Le portophone est un appareil supplémentaire : on ne peut l'acheter qu'après réception de l'autorisation de station. Celle-ci doit reprendre tous les moyens de radiocommunication, portatifs compris.",
   "sources": [
    {
     "page": 7,
     "quote": "Vous ne pouvez acheter l’appareil de radiocommunications qu’après réception de l’autorisation de station. Cela vaut également pour tout appareil supplémentaire que vous achetez. Si vous achetez un navire à bord duquel se trouve déjà un appareil, vous disposez d’un délai de 60 jours pour demander votre autorisation."
    },
    {
     "page": 7,
     "quote": "En cas de vente ou de mise hors service du navire, l’autorisation de station doit être immédiatement renvoyée à l’IBPT."
    },
    {
     "page": 7,
     "quote": "L’autorisation de station doit reprendre tous les moyens de radiocommunications présents à bord et donc également les stations portatives."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R003",
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "reasoning_type": "mise_en_situation",
   "question": "Un agent de la police fédérale contrôle un yacht belge en mer et demande à voir l'autorisation de station. Quel comportement du skipper est conforme au manuel ?",
   "choices": [
    {
     "id": "A",
     "text": "Il présente l'original, sur lequel il a lui-même ajouté à la main le portophone acheté récemment.",
     "correct": false,
     "explanation": "Les modifications manuelles de l'autorisation de station sont interdites ; un changement de composition exige une autorisation adaptée."
    },
    {
     "id": "B",
     "text": "Il refuse l'accès à la station radio, car seuls les agents de l'IBPT peuvent contrôler l'installation.",
     "correct": false,
     "explanation": "La police fédérale fait partie des autorités de contrôle, et le titulaire doit toujours permettre l'accès à la station."
    },
    {
     "id": "C",
     "text": "Il présente une photocopie, l'original étant rangé en sécurité à son domicile.",
     "correct": false,
     "explanation": "L'original doit toujours être conservé à bord, et les autorités peuvent en exiger la production immédiate."
    },
    {
     "id": "D",
     "text": "Il présente immédiatement l'original conservé à bord et laisse l'agent accéder à la station.",
     "correct": true,
     "explanation": "L'original doit toujours se trouver à bord et être présenté sur demande, et l'accès à la station doit être facilité."
    }
   ],
   "answer": "D",
   "explanation": "La police fédérale et locale figure parmi les autorités de contrôle. Celles-ci peuvent exiger la production immédiate de l'original de l'autorisation, qui doit toujours être conservé à bord. Le titulaire doit leur permettre d'accéder à la station. Enfin, l'autorisation ne peut pas être modifiée à la main : c'est la permission de détenir l'appareil, et elle reproduit l'état correct de l'équipement.",
   "sources": [
    {
     "page": 6,
     "quote": "L’original de l’autorisation de station doit toujours être conservé à bord du navire et doit être présenté sur demande à tout représentant d’une autorité compétente."
    },
    {
     "page": 9,
     "quote": "Les autorités de contrôle (les officiers de police judiciaire de l’IBPT, la police fédérale et locale, les agents du Service public fédéral Mobilité et Transports, Transport maritime et"
    },
    {
     "page": 10,
     "quote": "Le titulaire d'une autorisation doit toujours permettre aux autorités de contrôle d'accéder à la station et faciliter leur tâche dans toute la mesure de ses moyens."
    },
    {
     "page": 8,
     "quote": "L’autorisation de station est la permission de détenir un appareil. Elle reproduit l’état correct de l’équipement à bord. Les modifications manuelles sont interdites."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R004",
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "reasoning_type": "discrimination",
   "question": "Pendant une croisière, vous captez plusieurs émissions sur votre VHF. Laquelle pouvez-vous rapporter à un tiers sans enfreindre le secret des radiocommunications ?",
   "choices": [
    {
     "id": "A",
     "text": "Un bulletin météorologique diffusé à toutes les stations de navire.",
     "correct": true,
     "explanation": "Les informations adressées « À TOUTES LES STATIONS DE NAVIRE », comme les bulletins météorologiques, ne sont pas soumises au secret."
    },
    {
     "id": "B",
     "text": "Le simple fait qu'un yacht précis a demandé une communication téléphonique via Oostende Radio, sans en dévoiler le contenu.",
     "correct": false,
     "explanation": "Le secret couvre aussi « simplement l'existence » des conversations radiotéléphoniques, pas seulement leur contenu."
    },
    {
     "id": "C",
     "text": "Le contenu d'une conversation entre deux yachts, si votre skipper vous y autorise.",
     "correct": false,
     "explanation": "Seul un juge (d'instruction) peut dispenser de l'obligation du secret, pas le capitaine ou le skipper."
    },
    {
     "id": "D",
     "text": "Une conversation entre deux yachts au sujet d'un équipier malade, puisqu'elle a eu lieu sur un canal public.",
     "correct": false,
     "explanation": "Toute personne ayant connaissance du contenu de conversations radiotéléphoniques est tenue au secret, quel que soit le canal."
    }
   ],
   "answer": "A",
   "explanation": "Le secret couvre le contenu et même l'existence des conversations radiotéléphoniques. Il s'impose à toute personne qui en a connaissance. Seuls font exception les messages « À TOUTES LES STATIONS DE NAVIRE », comme les bulletins météo. Seul un juge (d'instruction) peut lever le secret.",
   "sources": [
    {
     "page": 10,
     "quote": "De même, toutes les personnes qui peuvent avoir connaissance du contenu ou simplement de l’existence de conversations radiotéléphoniques ou de tout autre renseignement obtenu au moyen du service des radiocommunications sont soumises à l’obligation de garder et d’assurer le secret des correspondances"
    },
    {
     "page": 10,
     "quote": "Les informations « À TOUTES LES STATIONS DE NAVIRE » ne sont pas soumises au secret des radiocommunications, par exemple :"
    },
    {
     "page": 10,
     "quote": "les bulletins météorologiques"
    },
    {
     "page": 10,
     "quote": "Seul un juge (d’instruction) peut dispenser de l’obligation du secret des radiocommunications."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R005",
   "category": "cadre-legal-autorisations",
   "difficulty": "moyen",
   "reasoning_type": "application_regle",
   "question": "Lucas a obtenu son certificat VHF en septembre 2021. En 2023, il a déménagé sans communiquer sa nouvelle adresse à l'IBPT et n'a jamais reçu de courrier de rappel. Nous sommes en novembre 2026. Quelle est sa situation ?",
   "choices": [
    {
     "id": "A",
     "text": "Son certificat est toujours valable, puisque l'IBPT ne l'a pas averti de l'échéance.",
     "correct": false,
     "explanation": "Le rappel est un service envoyé 6 semaines avant l'échéance ; son absence ne prolonge pas la validité, limitée à 5 ans."
    },
    {
     "id": "B",
     "text": "Son certificat est valable 10 ans, donc jusqu'en 2031.",
     "correct": false,
     "explanation": "Le manuel indique que le certificat d'opérateur n'est valable que 5 ans."
    },
    {
     "id": "C",
     "text": "Il est expiré ; il doit en demander un nouveau.",
     "correct": true,
     "explanation": "Validité de 5 ans : 2021 + 5 = 2026. L'IBPT ne peut contacter le titulaire que s'il dispose de son adresse correcte."
    },
    {
     "id": "D",
     "text": "Son certificat reste valable tant que l'autorisation de station de son bateau est en ordre.",
     "correct": false,
     "explanation": "Certificat d'opérateur (personne) et autorisation de station (navire) sont deux documents distincts ; la validité du certificat est de 5 ans."
    }
   ],
   "answer": "C",
   "explanation": "Le certificat d'opérateur n'est valable que 5 ans. Obtenu en septembre 2021, il a expiré en septembre 2026. L'IBPT prévient 6 semaines avant l'échéance, mais seulement s'il dispose de l'adresse correcte : le déménagement non signalé explique l'absence de rappel, sans rien changer à l'échéance.",
   "sources": [
    {
     "page": 8,
     "quote": "Le certificat d’opérateur n’est valable que 5 ans. Vous êtes averti 6 semaines avant l’arrivée à échéance de la validité afin de vous permettre de demander un nouveau certificat à temps."
    },
    {
     "page": 9,
     "quote": "Toutefois, nous ne pouvons vous contacter que si nous disposons de votre adresse correcte. Il est donc important que vous communiquiez tout changement d’adresse."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R006",
   "category": "identification-stations",
   "difficulty": "moyen",
   "reasoning_type": "discrimination",
   "question": "Parmi les numéros suivants, lequel peut être un MMSI attribué par l'IBPT à un navire belge et enregistré dans la base de données MARS ?",
   "choices": [
    {
     "id": "A",
     "text": "970051234",
     "correct": false,
     "explanation": "Un numéro commençant par 970 est une identification d'AIS-SART, attribuée par le fabricant : ce n'est pas un MMSI."
    },
    {
     "id": "B",
     "text": "205885000",
     "correct": true,
     "explanation": "Neuf chiffres, commençant par le MID belge 205 suivi de six chiffres : c'est la structure d'un MMSI belge."
    },
    {
     "id": "C",
     "text": "974051234",
     "correct": false,
     "explanation": "Un numéro commençant par 974 identifie un AIS-EPIRB, attribué par le fabricant et non enregistré dans MARS."
    },
    {
     "id": "D",
     "text": "2051234567",
     "correct": false,
     "explanation": "Ce numéro a dix chiffres ; un MMSI est un code de neuf chiffres (205 suivi de six chiffres pour la Belgique)."
    }
   ],
   "answer": "B",
   "explanation": "Un MMSI compte neuf chiffres, et ses trois premiers chiffres (MID) identifient le pays. Pour la Belgique, c'est « 205 » suivi de six chiffres. Les identifications 970 (AIS-SART), 972 (AIS-MOB) et 974 (AIS-EPIRB) ne sont pas des MMSI : le fabricant les attribue et elles ne figurent pas dans la base MARS.",
   "sources": [
    {
     "page": 9,
     "quote": "L'identité dans le service mobile maritime (MMSI, Maritime Mobile Service Identity en anglais) est un code d’identification unique de neuf chiffres, attribué par l’IBPT aux stations de bateau et de navire."
    },
    {
     "page": 9,
     "quote": "Les navires belges sont reconnaissables au code national « 205 » suivi de six chiffres."
    },
    {
     "page": 9,
     "quote": "Les identifications de AIS-SART (970 XX YYYY), AIS-MOB (972 XX YYYY) et AIS-EPIRB (974 XX YYYY) ne sont pas des numéros MMSI, elles ne sont pas attribuées par l’IBPT mais par le fabricant."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R007",
   "category": "identification-stations",
   "difficulty": "moyen",
   "reasoning_type": "mise_en_situation",
   "question": "Un coordinateur de sauvetage reçoit le signal d'un AIS-MOB dont l'identifiant commence par 972. Il cherche ce numéro dans la base de données MARS pour retrouver le navire concerné, sans résultat. Quelle est l'explication ?",
   "choices": [
    {
     "id": "A",
     "text": "La base MARS ne reprend que les bateaux de navigation intérieure.",
     "correct": false,
     "explanation": "La base MARS est la base mondiale de l'UIT qui reprend tous les navires opérant en mer."
    },
    {
     "id": "B",
     "text": "L'IBPT n'a pas encore transmis sa mise à jour mensuelle à l'UIT.",
     "correct": false,
     "explanation": "La mise à jour mensuelle concerne les numéros attribués par les administrations (MMSI) ; un identifiant 972 n'est jamais attribué par l'IBPT."
    },
    {
     "id": "C",
     "text": "Ce sont des numéros attribués par le fabricant, et non des MMSI.",
     "correct": true,
     "explanation": "Le manuel précise que ces numéros ne sont pas des MMSI et ne sont pas enregistrés dans la base MARS."
    },
    {
     "id": "D",
     "text": "Le préfixe 972 est un MID étranger, et MARS ne reprend que les navires belges.",
     "correct": false,
     "explanation": "972 n'est pas présenté comme un MID de pays mais comme le préfixe des AIS-MOB ; MARS est une base mondiale."
    }
   ],
   "answer": "C",
   "explanation": "Les AIS-MOB (972 XX YYYY), comme les AIS-SART et AIS-EPIRB, portent des « numéros d'identification maritime » attribués par le fabricant et non par l'IBPT. Ce ne sont pas des MMSI, ils ne sont donc pas enregistrés dans la base MARS. Celle-ci est la base mondiale de l'UIT et reprend tous les navires opérant en mer.",
   "sources": [
    {
     "page": 9,
     "quote": "Les identifications de AIS-SART (970 XX YYYY), AIS-MOB (972 XX YYYY) et AIS-EPIRB (974 XX YYYY) ne sont pas des numéros MMSI, elles ne sont pas attribuées par l’IBPT mais par le fabricant. Ces numéros sont appelés « numéros d’identification maritime » et ne sont donc pas enregistrés dans la base de données MARS."
    },
    {
     "page": 9,
     "quote": "Les administrations qui attribuent ces numéros sont obligées de transmettre une mise à jour mensuelle à l’UIT."
    },
    {
     "page": 37,
     "quote": "Base de données mondiale de l’UIT reprenant tous les navires opérant en mer."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R008",
   "category": "identification-stations",
   "difficulty": "moyen",
   "reasoning_type": "application_regle",
   "question": "Lequel de ces indicatifs d'appel peut appartenir à une station belge ?",
   "choices": [
    {
     "id": "A",
     "text": "OM4521",
     "correct": false,
     "explanation": "OM précède ONA dans l'ordre alphabétique : cet indicatif est hors de la série attribuée à la Belgique."
    },
    {
     "id": "B",
     "text": "OU1234",
     "correct": false,
     "explanation": "OU suit OTZ : cet indicatif est hors de la série belge."
    },
    {
     "id": "C",
     "text": "205885",
     "correct": false,
     "explanation": "C'est un début de MMSI (MID 205), pas un indicatif d'appel ; l'indicatif est formé à partir d'une série de lettres."
    },
    {
     "id": "D",
     "text": "OS8850",
     "correct": true,
     "explanation": "OS est compris entre ONA et OTZ, la série attribuée à la Belgique par l'UIT."
    }
   ],
   "answer": "D",
   "explanation": "L'UIT attribue des séries de lettres par pays ; la Belgique a reçu la série ONA à OTZ. Un indicatif commençant par OS (ONA ≤ OS… ≤ OTZ) est dans la série. OM est avant ONA, OU après OTZ. Un nombre commençant par 205 relève du MMSI, pas de l'indicatif d'appel.",
   "sources": [
    {
     "page": 9,
     "quote": "L’UIT (Union internationale des télécommunications) attribue des séries de lettres par pays"
    },
    {
     "page": 9,
     "quote": "La série ONA à OTZ a été attribuée à la Belgique."
    },
    {
     "page": 9,
     "quote": "Les navires belges sont reconnaissables au code national « 205 » suivi de six chiffres."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R009",
   "category": "identification-stations",
   "difficulty": "difficile",
   "reasoning_type": "combinaison",
   "question": "Un bateau belge porte l'indicatif d'appel OS2563. Quel est son code ATIS ?",
   "choices": [
    {
     "id": "A",
     "text": "9205192563",
     "correct": true,
     "explanation": "9 (Z) + 205 (MID belge) + 19 (S, deuxième lettre) + 2563 (les 4 chiffres de l'indicatif)."
    },
    {
     "id": "B",
     "text": "2059192563",
     "correct": false,
     "explanation": "Les éléments sont dans le désordre : le code commence toujours par Z = 9, suivi du MID."
    },
    {
     "id": "C",
     "text": "9205152563",
     "correct": false,
     "explanation": "15 correspond à la lettre O, la première lettre de l'indicatif ; X1X2 code la deuxième lettre (S = 19)."
    },
    {
     "id": "D",
     "text": "9192052563",
     "correct": false,
     "explanation": "Le MID doit suivre immédiatement le 9 initial, avant le code de la lettre."
    }
   ],
   "answer": "A",
   "explanation": "Structure du code ATIS : Z MID X1 X2 X3 X4 X5 X6. Z vaut toujours 9. Le MID belge est 205. X1X2 code la deuxième lettre de l'indicatif (A = 01, B = 02…), ici S, la 19e lettre : 19. X3 à X6 sont les 4 chiffres de l'indicatif : 2563. Résultat : 9 205 19 2563 = 9205192563.",
   "sources": [
    {
     "page": 32,
     "quote": "Z MID X1 X2 X3 X4 X5 X6"
    },
    {
     "page": 33,
     "quote": "(Z = toujours 9)"
    },
    {
     "page": 33,
     "quote": "MID = numéro d’identification maritime du pays d’enregistrement du bateau"
    },
    {
     "page": 33,
     "quote": "01 correspond à A,"
    },
    {
     "page": 33,
     "quote": "02 correspond à B,"
    },
    {
     "page": 33,
     "quote": "les 4 chiffres de l’indicatif d’appel"
    },
    {
     "page": 33,
     "quote": "représente la deuxième ou troisième lettre de l'indicatif d'appel, où"
    },
    {
     "page": 9,
     "quote": "Les trois premiers chiffres représentent les chiffres d’identification maritime MID (Maritime Identification Digit). Ils identifient le pays."
    },
    {
     "page": 9,
     "quote": "Les navires belges sont reconnaissables au code national « 205 » suivi de six chiffres."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R010",
   "category": "equipements-installations",
   "difficulty": "moyen",
   "reasoning_type": "mise_en_situation",
   "question": "Agacé par le souffle du haut-parleur, un skipper tourne le bouton SQL bien au-delà du point où le bruit de fond disparaît. Quelle conséquence doit-il craindre ?",
   "choices": [
    {
     "id": "A",
     "text": "Il ne recevra plus les stations faibles, par exemple un navire éloigné qui l'appelle.",
     "correct": true,
     "explanation": "Un squelch mal réglé élimine aussi les signaux faibles : on ne reçoit plus les stations faibles."
    },
    {
     "id": "B",
     "text": "Sa puissance d'émission passe automatiquement en position faible.",
     "correct": false,
     "explanation": "La puissance se règle avec le bouton HI/LO, pas avec le squelch."
    },
    {
     "id": "C",
     "text": "Sa VHF passe en double veille sur le canal 16.",
     "correct": false,
     "explanation": "La double veille s'active avec le bouton DUAL, pas avec le squelch."
    },
    {
     "id": "D",
     "text": "Aucune, le squelch ne règle que le volume du haut-parleur.",
     "correct": false,
     "explanation": "Le volume se règle avec le bouton Volume ; le squelch fixe le seuil à partir duquel les signaux reçus sont transmis."
    }
   ],
   "answer": "A",
   "explanation": "Le squelch (circuit silencieux) fixe le seuil au-dessus duquel les signaux reçus sont transmis au haut-parleur. Réglé trop haut, il coupe aussi les signaux faibles, notamment ceux des navires lointains : « vous ne recevrez plus les stations faibles ». Puissance (HI/LO), double veille (DUAL) et volume ont leurs propres commandes.",
   "sources": [
    {
     "page": 11,
     "quote": "Le squelch (circuit silencieux) permet de définir le seuil à partir duquel les signaux"
    },
    {
     "page": 11,
     "quote": "Si le squelch n’est pas correctement configuré, vous ne recevrez plus les stations faibles."
    },
    {
     "page": 11,
     "quote": "Elle peut être réglée à l’aide du bouton « HI/LO » sur l’appareil."
    },
    {
     "page": 11,
     "quote": "Le bouton « DUAL » permet d’activer la fonction double veille."
    },
    {
     "page": 11,
     "quote": "Le bouton « Volume » permet de régler le volume du haut-parleur intégré ou de"
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R011",
   "category": "equipements-installations",
   "difficulty": "moyen",
   "reasoning_type": "detection_erreur",
   "question": "Laquelle de ces configurations n'est PAS conforme aux puissances de sortie prévues par le manuel ?",
   "choices": [
    {
     "id": "A",
     "text": "Un portophone réglé à 5 W.",
     "correct": false,
     "explanation": "La puissance d'un portatif doit être comprise entre 0,5 et 6 W : 5 W est conforme."
    },
    {
     "id": "B",
     "text": "Une VHF fixe réglée en puissance faible à 1 W pour parler à un navire tout proche.",
     "correct": false,
     "explanation": "La puissance faible d'une station fixe est de 0,5 à 1 W : c'est conforme."
    },
    {
     "id": "C",
     "text": "Un portophone réglé à 10 W pour gagner en portée.",
     "correct": true,
     "explanation": "10 W dépasse le maximum de 6 W fixé pour les équipements portatifs ; cette valeur relève de la plage d'une VHF fixe."
    },
    {
     "id": "D",
     "text": "Un émetteur AIS de 12,5 W.",
     "correct": false,
     "explanation": "La puissance des systèmes AIS ne peut pas dépasser 12,5 W : cette valeur reste dans la limite."
    }
   ],
   "answer": "C",
   "explanation": "Plages du manuel : VHF fixe de 0,5 à 1 W (puissance faible) et de 6 à 25 W (puissance élevée) ; portatif de 0,5 à 6 W ; AIS au maximum 12,5 W. Un portophone à 10 W applique au portatif une valeur réservée à la VHF fixe : c'est la configuration non conforme.",
   "sources": [
    {
     "page": 11,
     "quote": "La puissance de sortie des stations de navire est comprise entre 0,5 à 1 watt (puissance faible) et 6 à 25 watts (puissance élevée)."
    },
    {
     "page": 11,
     "quote": "La puissance de sortie des systèmes AIS ne peut pas dépasser 12,5 watts."
    },
    {
     "page": 11,
     "quote": "La puissance de sortie des équipements VHF portatifs doit être réglée à une valeur comprise entre 0,5 et 6 watts."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R012",
   "category": "equipements-installations",
   "difficulty": "difficile",
   "reasoning_type": "combinaison",
   "question": "Une barge de poussage de 15 m navigue sur une voie intérieure belge. Son patron doit pouvoir écouter en même temps le canal bateau-bateau et celui des informations nautiques. Quelle solution est conforme ?",
   "choices": [
    {
     "id": "A",
     "text": "Un seul mariphone suffit, puisqu'un bateau de moins de 20 m n'est pas un grand bateau.",
     "correct": false,
     "explanation": "Une barge de poussage est un grand bateau quelle que soit sa longueur."
    },
    {
     "id": "B",
     "text": "Un seul mariphone, avec la fonction DUAL activée.",
     "correct": false,
     "explanation": "La double veille (Dual Watch) est interdite sur les voies de navigation intérieure."
    },
    {
     "id": "C",
     "text": "Deux mariphones, dont idéalement au moins un fixe.",
     "correct": true,
     "explanation": "Grand bateau, double veille interdite : il faut deux appareils ; le manuel ne distingue pas fixe et portable pour ce nombre, mais recommande au moins un fixe."
    },
    {
     "id": "D",
     "text": "Un seul mariphone avec la fonction Tri Watch, qui n'est pas visée par l'interdiction.",
     "correct": false,
     "explanation": "Dual Watch et Tri Watch ne sont pas autorisés sur les voies de navigation intérieure."
    }
   ],
   "answer": "C",
   "explanation": "Étape 1 : une barge de poussage est un grand bateau, quelle que soit sa longueur. Étape 2 : sur un grand bateau, il faut écouter deux canaux en même temps. Étape 3 : la double ou triple veille étant interdite en navigation intérieure, il faut deux mariphones. Le manuel ne fait pas de distinction entre fixe et portable pour ce nombre, mais recommande fortement au moins un appareil fixe.",
   "sources": [
    {
     "page": 6,
     "quote": "une barge de poussage, quelle que soit sa longueur."
    },
    {
     "page": 6,
     "quote": "Sur les grands bateaux, l’on doit pouvoir écouter en même temps deux canaux (de bateau à bateau et les informations nautiques). Comme la fonction double veille (Dual Watch) est interdite sur les voies de navigation intérieure, l’achat de deux mariphones est nécessaire pour satisfaire à cette condition."
    },
    {
     "page": 6,
     "quote": "Il n’est fait aucune distinction entre un appareil fixe et/ou un appareil portable pour le nombre de mariphones. Toutefois, il est fortement recommandé d’installer au moins un appareil fixe."
    },
    {
     "page": 12,
     "quote": "Ces systèmes ne sont pas autorisés sur les voies de navigation intérieure."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R013",
   "category": "equipements-installations",
   "difficulty": "moyen",
   "reasoning_type": "detection_erreur",
   "question": "Un propriétaire installe sa VHF et son antenne. Parmi ses choix, lequel est conforme au manuel ?",
   "choices": [
    {
     "id": "A",
     "text": "Il incline l'antenne vers l'arrière, comme sur une voiture de sport, pour réduire la prise au vent.",
     "correct": false,
     "explanation": "L'antenne ne fonctionne correctement qu'en position verticale ; inclinée vers l'arrière, elle ne fonctionnera pas."
    },
    {
     "id": "B",
     "text": "Il fixe l'antenne à 2 m d'un mât métallique qui la dépasse en hauteur.",
     "correct": false,
     "explanation": "L'antenne doit être installée à 4 m au moins de toute masse métallique importante qui la dépasse en hauteur."
    },
    {
     "id": "C",
     "text": "Il relie le mariphone à l'antenne par un câble coaxial de 50 ohms, avec des connexions étanches.",
     "correct": true,
     "explanation": "Le manuel prescrit un câble coaxial de 50 ohms et une connexion étanche du câble et de l'antenne."
    },
    {
     "id": "D",
     "text": "Il installe une rampe d'éclairage LED à 1 m de l'antenne, sans incidence sur la VHF.",
     "correct": false,
     "explanation": "Une installation LED à moins de 4 m de l'antenne est fortement déconseillée : son alimentation perturbe la bande VHF."
    }
   ],
   "answer": "C",
   "explanation": "L'antenne doit être verticale, à au moins 4 m de toute masse métallique plus haute qu'elle, et loin des éclairages LED (pas à moins de 4 m), qui perturbent la bande VHF. La liaison mariphone-antenne se fait par un câble coaxial de 50 ohms, avec des connexions étanches. Seul le câble coaxial de 50 ohms avec connexions étanches respecte ces règles.",
   "sources": [
    {
     "page": 30,
     "quote": "Les antennes doivent être verticales et isolées. Elles doivent être installées à 4 m au moins de toute masse métallique importante qui les dépasse en hauteur."
    },
    {
     "page": 30,
     "quote": "Pour info : l’installation d’éclairage LED à proximité (moins de 4 m) d’une antenne VHF est fortement déconseillée. En effet, l’alimentation des LED provoque des perturbations dans la bande VHF."
    },
    {
     "page": 30,
     "quote": "Votre antenne ne fonctionnera correctement que si elle est positionnée verticalement."
    },
    {
     "page": 30,
     "quote": "Pour relier le mariphone et l'antenne, il convient d’utiliser un câble coaxial d'une impédance de 50 ohms. Une bonne connexion étanche du câble et de l'antenne est nécessaire."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R014",
   "category": "equipements-installations",
   "difficulty": "moyen",
   "reasoning_type": "detection_erreur",
   "question": "Au printemps, un skipper constate que la portée de sa VHF a fortement diminué et que l'appareil fonctionne mal. Il découvre que le connecteur entre le câble et l'antenne n'est plus étanche. Laquelle des explications suivantes est cohérente avec le manuel ?",
   "choices": [
    {
     "id": "A",
     "text": "Le dispositif ATIS activé pendant l'hiver réduit la portée des émissions.",
     "correct": false,
     "explanation": "Le manuel précise que le dispositif ATIS n'a pas d'influence sur les communications."
    },
    {
     "id": "B",
     "text": "Le câble de 50 ohms est inadapté : il faut un câble de télévision de 75 ohms.",
     "correct": false,
     "explanation": "Le manuel prescrit un câble coaxial de 50 ohms pour relier le mariphone et l'antenne."
    },
    {
     "id": "C",
     "text": "L'antenne d'environ 1 m est trop courte ; une antenne beaucoup plus longue rétablirait la portée.",
     "correct": false,
     "explanation": "Une longueur d'environ 1 m est la longueur correcte ; une longueur incorrecte réduit la portée et peut endommager l'appareil."
    },
    {
     "id": "D",
     "text": "L'eau a pénétré dans le câble coaxial, ce qui limite la portée et peut entraîner un dysfonctionnement de l'appareil.",
     "correct": true,
     "explanation": "C'est exactement la conséquence d'une fuite décrite par le manuel."
    }
   ],
   "answer": "D",
   "explanation": "Le manuel décrit précisément ce cas : en cas de fuite, l'eau pénètre dans le câble coaxial, ce qui limite la portée et peut faire mal fonctionner l'appareil. Les autres explications contredisent le manuel : l'ATIS n'a pas d'influence sur les communications, le câble correct fait 50 ohms et la bonne longueur d'antenne est d'environ 1 m.",
   "sources": [
    {
     "page": 30,
     "quote": "En cas de fuite, l'eau pénètre dans le câble coaxial de l’installation, ce qui limite la portée de la transmission et peut entraîner un dysfonctionnement de l'appareil."
    },
    {
     "page": 32,
     "quote": "Le dispositif ATIS n’a pas d’influence sur les communications, ni sur les systèmes de navigation."
    },
    {
     "page": 30,
     "quote": "Pour relier le mariphone et l'antenne, il convient d’utiliser un câble coaxial d'une impédance de 50 ohms."
    },
    {
     "page": 30,
     "quote": "La longueur de l'antenne doit être correcte (environ 1 m) pour transmettre correctement la puissance de l'appareil vers les ondes. Si la longueur n'est pas correcte, la portée sera réduite et, dans le pire des cas, votre appareil pourra être endommagé."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R015",
   "category": "equipements-installations",
   "difficulty": "difficile",
   "reasoning_type": "discrimination",
   "question": "Le propriétaire d'un yacht non-SOLAS naviguant en mer possède une VHF récente qui porte uniquement le marquage « barre à roue ». Cet équipement est-il acceptable à bord ?",
   "choices": [
    {
     "id": "A",
     "text": "Non : un navire non-SOLAS doit obligatoirement porter le marquage CE, comme pour les voies de navigation intérieure.",
     "correct": false,
     "explanation": "Les non-SOLAS relèvent bien de la directive CE, mais le manuel précise qu'il a été convenu d'admettre aussi les équipements « barre à roue »."
    },
    {
     "id": "B",
     "text": "Non : le marquage « barre à roue » est réservé aux appareils de navigation intérieure.",
     "correct": false,
     "explanation": "Le marquage « barre à roue » relève de la directive maritime ; pour la navigation intérieure, c'est un marquage CE avec NBnr et point d'exclamation."
    },
    {
     "id": "C",
     "text": "Oui, mais seulement si l'appareil porte aussi le point d'exclamation indiquant des bandes harmonisées.",
     "correct": false,
     "explanation": "Le point d'exclamation signale au contraire que les bandes de fréquences ne sont pas harmonisées, et il fait partie du marquage CE de navigation intérieure."
    },
    {
     "id": "D",
     "text": "Oui, les équipements « barre à roue » sont admis à bord des non-SOLAS.",
     "correct": true,
     "explanation": "C'est la dérogation explicitement prévue par le manuel pour les navires non-SOLAS."
    }
   ],
   "answer": "D",
   "explanation": "Les navires non-SOLAS opérant en mer relèvent de la directive 1995/5/CE ou 2014/53/UE et portent normalement le même marquage CE que pour les voies intérieures. Mais il a été convenu que les équipements « barre à roue » (directive maritime) peuvent aussi être utilisés à leur bord. L'appareil est donc acceptable.",
   "sources": [
    {
     "page": 13,
     "quote": "Les navires opérant en mer qui ne relèvent pas de la convention SOLAS, sont soumis à la directive 1995/5/CE ou 2014/53/UE et doivent donc porter le même marquage CE que pour les voies de navigation intérieure. Il a cependant été convenu que les équipements portant le marquage « barre à roue » peuvent également être utilisés à bord de navires non-SOLAS."
    },
    {
     "page": 13,
     "quote": "ou un marquage « barre à roue » (directive maritime 96/98/CE ou 2014/90/UE)."
    },
    {
     "page": 13,
     "quote": "Le point d'exclamation indique que les bandes de fréquences ne sont pas harmonisées."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R016",
   "category": "frequences-modes",
   "difficulty": "moyen",
   "reasoning_type": "application_regle",
   "question": "En mer, un voilier a son antenne VHF à 9 m au-dessus de l'eau et appelle un bateau à moteur dont l'antenne est à 4 m. Quelle est la portée théorique de cette liaison selon la formule du manuel ?",
   "choices": [
    {
     "id": "A",
     "text": "Environ 29,25 milles nautiques.",
     "correct": false,
     "explanation": "Ce résultat additionne les hauteurs (9 + 4) au lieu de leurs racines carrées."
    },
    {
     "id": "B",
     "text": "Environ 8,1 milles nautiques.",
     "correct": false,
     "explanation": "Ce résultat prend la racine carrée de la somme des hauteurs (√13) au lieu de la somme des racines."
    },
    {
     "id": "C",
     "text": "Environ 5 milles nautiques.",
     "correct": false,
     "explanation": "Ce résultat oublie le facteur 2,25 de la formule."
    },
    {
     "id": "D",
     "text": "Environ 11,25 milles nautiques.",
     "correct": true,
     "explanation": "2,25 × (√9 + √4) = 2,25 × (3 + 2) = 11,25 milles nautiques."
    }
   ],
   "answer": "D",
   "explanation": "Formule : 2,25 (√T + √R) = distance en milles nautiques, avec T et R les hauteurs des antennes en mètres. √9 = 3 et √4 = 2, donc 2,25 × 5 = 11,25 milles nautiques.",
   "sources": [
    {
     "page": 14,
     "quote": "2,25 (√T + √R) = distance en milles nautiques"
    },
    {
     "page": 14,
     "quote": "(T=émetteur et R=récepteur , ceux-ci donnent la hauteur en mètres des antennes au-dessus de la surface de l’eau)."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R017",
   "category": "frequences-modes",
   "difficulty": "difficile",
   "reasoning_type": "combinaison",
   "question": "Un équipier tient un portophone à environ 1 m au-dessus de l'eau. L'antenne de la station côtière qu'il appelle est à 64 m de hauteur. En appliquant la formule du manuel, quelle est la portée théorique exprimée en kilomètres ?",
   "choices": [
    {
     "id": "A",
     "text": "Environ 37,5 km.",
     "correct": true,
     "explanation": "2,25 × (√1 + √64) = 20,25 milles, soit 20,25 × 1,852 ≈ 37,5 km."
    },
    {
     "id": "B",
     "text": "Environ 20,25 km.",
     "correct": false,
     "explanation": "20,25 est le résultat en milles nautiques ; il faut encore le convertir en kilomètres."
    },
    {
     "id": "C",
     "text": "Environ 10,9 km.",
     "correct": false,
     "explanation": "Ce résultat divise par 1,852 au lieu de multiplier : 1 mille nautique vaut 1852 m."
    },
    {
     "id": "D",
     "text": "Environ 271 km.",
     "correct": false,
     "explanation": "Ce résultat additionne les hauteurs sans racines carrées (2,25 × 65) avant de convertir."
    }
   ],
   "answer": "A",
   "explanation": "Étape 1 : 2,25 × (√1 + √64) = 2,25 × (1 + 8) = 20,25 milles nautiques. Étape 2 : 1 mille nautique = 1852 m, donc 20,25 × 1,852 ≈ 37,5 km.",
   "sources": [
    {
     "page": 14,
     "quote": "2,25 (√T + √R) = distance en milles nautiques"
    },
    {
     "page": 14,
     "quote": "1 mille nautique équivaut à 1852 m"
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R018",
   "category": "frequences-modes",
   "difficulty": "moyen",
   "reasoning_type": "discrimination",
   "question": "L'écran d'un mariphone affiche le canal « 2027 ». À quoi ce canal correspond-il ?",
   "choices": [
    {
     "id": "A",
     "text": "À la partie inférieure de l'ancien canal duplex 27.",
     "correct": false,
     "explanation": "La partie inférieure du canal 27 est désignée par 1027."
    },
    {
     "id": "B",
     "text": "À un canal duplex utilisant deux fréquences pour parler et écouter simultanément.",
     "correct": false,
     "explanation": "Les canaux à 4 chiffres étaient auparavant duplex mais ont été transformés en canaux simplex."
    },
    {
     "id": "C",
     "text": "À la partie supérieure de l'ancien canal 27, devenue simplex.",
     "correct": true,
     "explanation": "2027 désigne la partie supérieure du canal 27 ; ces canaux à 4 chiffres sont d'anciens canaux duplex transformés en canaux simplex."
    },
    {
     "id": "D",
     "text": "Au canal AIS2 de 162,025 MHz.",
     "correct": false,
     "explanation": "L'AIS2 est désigné 88H-AIS2, pas 2027."
    }
   ],
   "answer": "C",
   "explanation": "Certains canaux sont désignés par 4 chiffres : ce sont d'anciens canaux duplex récemment transformés en canaux simplex. Le préfixe 10 désigne la partie inférieure de l'ancien canal (1027), le préfixe 20 sa partie supérieure (2027).",
   "sources": [
    {
     "page": 14,
     "quote": "Cependant, il existe des canaux désignés par 4 chiffres. Il s'agissait auparavant de canaux duplex (voir cidessous) qui ont récemment été transformés en canaux simplex."
    },
    {
     "page": 14,
     "quote": "Exemple : 1027 correspond à la partie inférieure du canal 27, 2027 correspond à la partie"
    },
    {
     "page": 17,
     "quote": "88H-AIS2"
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R019",
   "category": "frequences-modes",
   "difficulty": "moyen",
   "reasoning_type": "discrimination",
   "question": "En communication avec une station côtière, un plaisancier constate qu'il peut parler et entendre son correspondant en même temps, comme au téléphone, sans devoir dire « OVER ». Dans quel mode est-il, et combien de fréquences ce mode utilise-t-il ?",
   "choices": [
    {
     "id": "A",
     "text": "En duplex, avec deux fréquences.",
     "correct": true,
     "explanation": "Un canal duplex se compose de deux fréquences, une par sens, ce qui permet d'écouter et de parler simultanément."
    },
    {
     "id": "B",
     "text": "En simplex, avec une seule fréquence.",
     "correct": false,
     "explanation": "Le simplex utilise une seule fréquence, mais on y parle à tour de rôle en disant systématiquement « OVER »."
    },
    {
     "id": "C",
     "text": "En semi-duplex, avec une seule fréquence.",
     "correct": false,
     "explanation": "Le semi-duplex nécessite deux fréquences, et le manuel ne lui attribue pas la conversation simultanée."
    },
    {
     "id": "D",
     "text": "En duplex, avec une seule fréquence partagée par les deux stations.",
     "correct": false,
     "explanation": "Le duplex est bien le mode simultané, mais il repose sur deux fréquences, une par sens."
    }
   ],
   "answer": "A",
   "explanation": "Seul le duplex permet d'écouter et de parler simultanément. Il utilise deux fréquences : l'une pour l'émission du navire et la réception de la station côtière, l'autre pour le sens inverse. Le semi-duplex utilise aussi deux fréquences ; le simplex n'en utilise qu'une, avec passage de parole par « OVER ».",
   "sources": [
    {
     "page": 15,
     "quote": "Un canal duplex est un canal composé de deux fréquences, l’une réservée à l’émission de la station de navire et la réception de la station côtière et l’autre réservée à l’émission de la station côtière et la réception de la station de navire. Cela permet d’écouter et de parler simultanément."
    },
    {
     "page": 15,
     "quote": "il convient dans ce cas de passer du mode émission au mode réception en utilisant systématiquement « OVER »."
    },
    {
     "page": 15,
     "quote": "Les communications en duplex et en semi-duplex nécessitent deux fréquences. Les communications en simplex font usage d’une seule fréquence."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R020",
   "category": "canaux-vhf",
   "difficulty": "moyen",
   "reasoning_type": "application_regle",
   "question": "En mer, dans les eaux belges, deux familles sur des voiliers différents veulent discuter de leur programme du soir (communication d'ordre social). Quel choix est conforme ?",
   "choices": [
    {
     "id": "A",
     "text": "Le canal 77, à faible puissance (entre 0,5 et 1 watt).",
     "correct": true,
     "explanation": "En mer, seul le canal 77 est autorisé pour les communications sociales, et uniquement à faible puissance."
    },
    {
     "id": "B",
     "text": "Le canal 72, à faible puissance.",
     "correct": false,
     "explanation": "Le canal 72 n'est admis pour les communications sociales qu'en navigation intérieure ; en mer, seul le canal 77 peut être utilisé."
    },
    {
     "id": "C",
     "text": "Le canal 77, en puissance élevée pour être sûr d'être entendu.",
     "correct": false,
     "explanation": "Le canal 77 ne peut être utilisé qu'à faible puissance (entre 0,5 et 1 watt)."
    },
    {
     "id": "D",
     "text": "Le canal 16, en restant brefs.",
     "correct": false,
     "explanation": "Le canal 16 est réservé à la détresse, l'urgence et la sécurité ; il ne sert de canal d'appel navire-navire qu'en dernier ressort."
    }
   ],
   "answer": "A",
   "explanation": "Pour les communications sociales, on utilise les canaux 72 et 77 en navigation intérieure, mais en mer seulement le canal 77. Ce canal ne peut être utilisé qu'à faible puissance (0,5 à 1 W).",
   "sources": [
    {
     "page": 19,
     "quote": "d’utiliser les canaux 72 et 77 pour les communications sociales sur les voies de navigation intérieure. En mer, seul le canal 77 peut être utilisé pour les communications sociales"
    },
    {
     "page": 17,
     "quote": "aux communications sociales entre les navires. Il ne peut être utilisé"
    },
    {
     "page": 17,
     "quote": "qu’à faible puissance (entre 0,5 et 1 watt)."
    },
    {
     "page": 16,
     "quote": "Ce n’est qu’en dernier ressort que ce canal peut être utilisé comme canal d’appel pour les communications navire-navire."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R021",
   "category": "canaux-vhf",
   "difficulty": "moyen",
   "reasoning_type": "discrimination",
   "question": "Dans les eaux territoriales belges, un plaisancier veut contacter un autre voilier pour coordonner leur route d'entrée au port (communication navire-navire). Quel canal doit-il choisir en premier ?",
   "choices": [
    {
     "id": "A",
     "text": "Le canal 08, premier canal navire-navire en Belgique.",
     "correct": true,
     "explanation": "Le tableau des eaux belges désigne le canal 08 comme premier canal « Intership » en Belgique."
    },
    {
     "id": "B",
     "text": "Le canal 06, premier canal navire-navire au niveau international.",
     "correct": false,
     "explanation": "En Belgique, le canal 6 est utilisé par les services de pilotage."
    },
    {
     "id": "C",
     "text": "Le canal 13.",
     "correct": false,
     "explanation": "Le canal 13 ne peut être utilisé que pour la sécurité de la navigation."
    },
    {
     "id": "D",
     "text": "Le canal 16.",
     "correct": false,
     "explanation": "Le canal 16 ne sert de canal d'appel navire-navire qu'en dernier ressort."
    }
   ],
   "answer": "A",
   "explanation": "Dans les eaux belges, le premier canal navire-navire est le 08. Le 06 est bien le premier canal intership au niveau international, mais en Belgique il est utilisé par les services de pilotage. Le 13 est limité à la sécurité de la navigation, et le 16 ne sert d'appel navire-navire qu'en dernier ressort.",
   "sources": [
    {
     "page": 16,
     "quote": "premier canal navire-navire au"
    },
    {
     "page": 16,
     "quote": "niveau international. En Belgique, le canal 6 est utilisé par les services de pilotage."
    },
    {
     "page": 16,
     "quote": "premier canal navire-navire en"
    },
    {
     "page": 16,
     "quote": "Ce canal ne peut être utilisé que pour la sécurité de la navigation."
    },
    {
     "page": 16,
     "quote": "Ce n’est qu’en dernier ressort que ce canal peut être utilisé comme canal d’appel pour les communications navire-navire."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R022",
   "category": "canaux-vhf",
   "difficulty": "moyen",
   "reasoning_type": "application_regle",
   "question": "Un plaisancier belge, habitué aux marinas anglaises, veut appeler la marina de Nieuwpoort sur le canal 37L. Que faut-il en penser ?",
   "choices": [
    {
     "id": "A",
     "text": "C'est correct : le canal 37L est destiné aux communications avec les ports de plaisance.",
     "correct": false,
     "explanation": "Le 37L sert aux ports de plaisance en Angleterre et ne peut être utilisé que dans les eaux territoriales britanniques."
    },
    {
     "id": "B",
     "text": "C'est interdit hors des eaux britanniques ; il doit utiliser le canal 31.",
     "correct": true,
     "explanation": "Le manuel limite le 37L aux eaux britanniques et désigne le 31 comme canal mariphone pour les ports de plaisance."
    },
    {
     "id": "C",
     "text": "C'est admis s'il émet à faible puissance (entre 0,5 et 1 watt).",
     "correct": false,
     "explanation": "La faible puissance ne change rien : le 37L reste limité aux eaux territoriales britanniques."
    },
    {
     "id": "D",
     "text": "Il doit utiliser le canal 77, réservé aux communications avec les ports.",
     "correct": false,
     "explanation": "Le canal 77 est destiné aux communications d'ordre familial et social entre navires, pas aux ports de plaisance."
    }
   ],
   "answer": "B",
   "explanation": "Le canal 37L est utilisé en Angleterre entre les ports de plaisance et la navigation de plaisance, et ne peut donc être utilisé que dans les eaux territoriales britanniques. À Nieuwpoort (eaux belges), le canal prévu pour les ports de plaisance est le 31.",
   "sources": [
    {
     "page": 17,
     "quote": "Ce canal est utilisé en Angleterre pour les communications entre les ports de"
    },
    {
     "page": 17,
     "quote": "plaisance et la navigation de plaisance et ne peut dès lors être utilisé que dans les eaux territoriales britanniques."
    },
    {
     "page": 16,
     "quote": "Canal maritime – canal mariphone pour les communications radio"
    },
    {
     "page": 16,
     "quote": "avec les ports de plaisance"
    },
    {
     "page": 17,
     "quote": "aux communications sociales entre les navires."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R023",
   "category": "canaux-vhf",
   "difficulty": "moyen",
   "reasoning_type": "mise_en_situation",
   "question": "Sur une voie navigable intérieure belge, un incendie se déclare à bord d'un bateau à proximité d'une écluse ; le danger est imminent. Sur quel canal le patron doit-il en principe émettre son signal MAYDAY ?",
   "choices": [
    {
     "id": "A",
     "text": "Sur le canal 16, fréquence de détresse internationale.",
     "correct": false,
     "explanation": "Le canal 16 en premier lieu est la règle en mer ; le manuel précise que des règles différentes s'appliquent en mer et qu'en navigation intérieure on utilise le canal 10 ou le canal imposé."
    },
    {
     "id": "B",
     "text": "Sur le canal 10, ou sur le canal de l'écluse située à proximité (canal imposé).",
     "correct": true,
     "explanation": "En navigation intérieure, le MAYDAY est en principe émis sur le canal 10, sur le canal d'une écluse proche ou sur un canal attribué par le règlement de police."
    },
    {
     "id": "C",
     "text": "Par un appel ASN sur le canal 70.",
     "correct": false,
     "explanation": "L'utilisation de l'ASN n'est pas autorisée sur les voies de navigation intérieure."
    },
    {
     "id": "D",
     "text": "Sur le canal 72, puisque la communication concerne un bateau voisin.",
     "correct": false,
     "explanation": "Le canal 72 est un canal d'ordre familial et social, utilisable seulement à faible puissance."
    }
   ],
   "answer": "B",
   "explanation": "En navigation intérieure, un MAYDAY peut être envoyé en cas de danger imminent (incendie, collision…). Il est en principe émis sur le canal 10, sur le canal d'une écluse proche (canal imposé) ou sur un canal attribué par le règlement général de police. Le canal 16 relève des règles maritimes, et l'ASN est interdit sur les voies intérieures.",
   "sources": [
    {
     "page": 23,
     "quote": "Il est autorisé d’envoyer un signal de détresse (mayday) dans une situation d’urgence (danger imminent, collision, incendie...) sur les voies de navigation intérieure. En principe, le signal de détresse sera émis sur le canal 10, soit sur le canal d’une écluse située à proximité (canal imposé), soit un canal attribué par le règlement général de police. Des règles différentes s'appliquent en mer."
    },
    {
     "page": 17,
     "quote": "autorisée sur les voies de navigation intérieure !"
    },
    {
     "page": 18,
     "quote": "Il ne peut être utilisé qu’à faible puissance (entre 0,5 et 1 watt)."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R024",
   "category": "canaux-vhf",
   "difficulty": "difficile",
   "reasoning_type": "detection_erreur",
   "question": "En mer, un skipper dont la VHF n'a pas de fonction ASN raisonne ainsi : « Le MRCC veille en permanence sur le canal 70, donc en cas de détresse je lancerai mon MAYDAY vocal sur le canal 70. » Où est l'erreur ?",
   "choices": [
    {
     "id": "A",
     "text": "Il n'y a pas d'erreur : le MRCC veillant sur le 70, c'est le canal le plus sûr.",
     "correct": false,
     "explanation": "Le MRCC veille sur l'ASN 70, c'est-à-dire en transmission numérique ; le 70 est toujours bloqué pour la radiotéléphonie."
    },
    {
     "id": "B",
     "text": "L'erreur est seulement d'ordre administratif : il lui faudrait un certificat SMDSM pour parler sur le canal 70.",
     "correct": false,
     "explanation": "Même avec un certificat SMDSM, le canal 70 reste bloqué pour la radiotéléphonie ; il ne sert qu'aux transmissions numériques."
    },
    {
     "id": "C",
     "text": "Il devrait utiliser le canal 67, canal de détresse prioritaire en mer.",
     "correct": false,
     "explanation": "Le 67 est le canal SAR des opérations de recherche et de sauvetage ; c'est le 16 qui doit être utilisé en premier lieu pour la détresse."
    },
    {
     "id": "D",
     "text": "Le 70 est un canal ASN numérique, bloqué en phonie : le MAYDAY vocal se fait sur le 16.",
     "correct": true,
     "explanation": "Le 70 est un canal ASN numérique, bloqué en phonie ; la détresse en radiotéléphonie se fait en premier lieu sur le 16."
    }
   ],
   "answer": "D",
   "explanation": "Le canal 70 est réservé aux transmissions numériques (ASN) du SMDSM et toujours bloqué pour la radiotéléphonie ; il doit même être bloqué sur les mariphones sans ASN. La veille du MRCC sur « ASN 70 » ne concerne donc que les appels numériques. Pour un MAYDAY vocal, c'est le canal 16 qui doit être utilisé en premier lieu ; même après un appel de détresse ASN, la suite se passe sur le 16.",
   "sources": [
    {
     "page": 16,
     "quote": "Canal ASN international : ce canal est réservé aux transmissions"
    },
    {
     "page": 17,
     "quote": "fonction ASN, le canal 70 doit être bloqué. Le canal 70 est toujours bloqué pour la radiotéléphonie."
    },
    {
     "page": 16,
     "quote": "Après un appel de détresse ou un appel d'urgence ASN, il convient de passer au canal 16 pour la suite du traitement."
    },
    {
     "page": 16,
     "quote": "Détresse, urgence et sécurité : la fréquence de détresse"
    },
    {
     "page": 16,
     "quote": "internationale 156,8 MHz (canal 16) doit être utilisée en premier lieu pour l’émission d’appels, de messages et de communications de détresse."
    },
    {
     "page": 16,
     "quote": "Canal international de recherche et de sauvetage (SAR) : ce"
    },
    {
     "page": 28,
     "quote": "Le MRCC assure une veille continue (24/7) sur les canaux VHF 16, 67, ASN 70"
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R025",
   "category": "procedures-generales",
   "difficulty": "moyen",
   "reasoning_type": "detection_erreur",
   "question": "Voici la fin d'une communication avec Oostende Radio : « Oostende Radio, ICI OS1256, merci pour l'information, OVER AND OUT. » Quel élément est incorrect ?",
   "choices": [
    {
     "id": "A",
     "text": "L'emploi de « ICI » avant l'indicatif d'appel.",
     "correct": false,
     "explanation": "Avant de transmettre son identification, il faut justement utiliser les mots ICI ou THIS IS."
    },
    {
     "id": "B",
     "text": "La formule finale « OVER AND OUT ».",
     "correct": true,
     "explanation": "« OVER » appelle une réponse, alors que « OUT » signifie que la communication est terminée : la combinaison est interdite."
    },
    {
     "id": "C",
     "text": "L'identification par l'indicatif d'appel seul, sans le nom du navire.",
     "correct": false,
     "explanation": "L'indicatif d'appel seul est l'un des moyens d'identification admis."
    },
    {
     "id": "D",
     "text": "Le fait de nommer la station appelée avant de s'identifier.",
     "correct": false,
     "explanation": "Le manuel place le nom de la station appelée avant « THIS IS / ICI » et l'identification de l'appelant."
    }
   ],
   "answer": "B",
   "explanation": "Pour terminer, on dit TERMINÉ ou OUT. « OVER AND OUT » est interdit : « OVER » attend une réponse de l'autre partie, alors que « OUT » indique que la communication est terminée. Les autres éléments sont conformes : ICI avant l'identification, indicatif d'appel comme identification, station appelée nommée en premier.",
   "sources": [
    {
     "page": 20,
     "quote": "Le terme « OVER AND OUT » ne peut pas être utilisé parce que lorsqu'on dit « OVER », on attend une réponse de l'autre partie, alors que « OUT » implique justement que la communication est terminée."
    },
    {
     "page": 20,
     "quote": "Avant de transmettre son identification, il faut utiliser les mots ICI ou THIS IS."
    },
    {
     "page": 19,
     "quote": "l’indicatif d’appel de la station ;"
    },
    {
     "page": 26,
     "quote": "Nom de la station appelée (répété jusqu’à trois fois) ;"
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R026",
   "category": "procedures-generales",
   "difficulty": "moyen",
   "reasoning_type": "application_regle",
   "question": "Le skipper du voilier OS1256 vient de réparer sa VHF et veut vérifier qu'elle fonctionne avec Oostende Radio. Quelle façon de procéder est conforme ?",
   "choices": [
    {
     "id": "A",
     "text": "Sur le canal 16, où il est certain d'être entendu, il émet « OS1256 test » pendant 10 secondes.",
     "correct": false,
     "explanation": "Les essais n'ont pas leur place dans le trafic ordinaire, et certainement pas sur le canal 16."
    },
    {
     "id": "B",
     "text": "Sur le canal de travail de Oostende Radio, il émet un signal continu de 30 secondes pour laisser le temps de régler l'appareil.",
     "correct": false,
     "explanation": "Les signaux d'essai doivent être réduits au minimum et ne pas dépasser 10 secondes."
    },
    {
     "id": "C",
     "text": "Sur le canal 7, alors qu'une conversation est en cours, il glisse rapidement son essai pour ne pas la gêner.",
     "correct": false,
     "explanation": "Les essais ne peuvent être effectués que lorsqu'aucune autre communication n'est en cours ; il faut de plus parler lentement."
    },
    {
     "id": "D",
     "text": "Sur le canal 7, sans trafic en cours : « Oostende Radio, ICI OS1256, en essai, Over ».",
     "correct": true,
     "explanation": "Ce schéma reprend l'exemple du manuel sur le canal de travail de Oostende Radio : bref, hors trafic en cours, avec l'identification et les mots « en essai »."
    }
   ],
   "answer": "D",
   "explanation": "Les essais : jamais sur le canal 16 ; seulement quand aucune autre communication n'est en cours ; au minimum et sans dépasser 10 secondes ; avec le nom de la station et les mots « en essai », prononcés lentement et distinctement. L'exemple du manuel sur le canal 7 de Oostende Radio suit exactement ce schéma.",
   "sources": [
    {
     "page": 26,
     "quote": "Ces communications n’ont pas leur place dans le trafic ordinaire, et certainement pas sur le canal 16. Ces essais ne peuvent donc être effectués que lorsqu'aucune autre communication n'est en cours."
    },
    {
     "page": 26,
     "quote": "Lorsqu'il est nécessaire pour une station de transmettre des signaux tests, ceux-ci doivent être réduits au minimum et ne doivent pas dépasser 10 secondes."
    },
    {
     "page": 27,
     "quote": "Le nom de la station et les mots « en essai » doivent être prononcés lentement et distinctement."
    },
    {
     "page": 27,
     "quote": "Exemple (sur le canal de travail de Oostende radio 7) :"
    },
    {
     "page": 27,
     "quote": "Oostende Radio Oostende Radio ICI OS1256 En essai Over"
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R027",
   "category": "procedures-generales",
   "difficulty": "difficile",
   "reasoning_type": "application_regle",
   "question": "Un bateau belge navigue sur une voie intérieure allemande, couverte par un règlement général de police. Son patron, francophone, appelle une péniche néerlandaise qui navigue à proximité, sans difficulté de compréhension particulière. Quelle langue doit-il utiliser ?",
   "choices": [
    {
     "id": "A",
     "text": "Le néerlandais, langue du bateau appelé.",
     "correct": false,
     "explanation": "La langue du navire appelé est la règle en navigation maritime, pas en navigation intérieure."
    },
    {
     "id": "B",
     "text": "L'anglais, obligatoirement comme première langue.",
     "correct": false,
     "explanation": "L'anglais comme première langue ne s'applique que lorsqu'aucun règlement général de police n'est d'application."
    },
    {
     "id": "C",
     "text": "L'allemand, langue du pays où l'on navigue.",
     "correct": true,
     "explanation": "Entre stations de bateau en navigation intérieure, on utilise la langue du pays où le bateau navigue."
    },
    {
     "id": "D",
     "text": "Le français, langue de l'appelant.",
     "correct": false,
     "explanation": "Aucune règle du manuel ne retient la langue de l'appelant."
    }
   ],
   "answer": "C",
   "explanation": "En navigation intérieure, entre stations de bateau, on utilise la langue du pays où le bateau navigue, ici l'Allemagne. La règle « anglais en première langue » ne vaut qu'en l'absence de règlement général de police, ce qui n'est pas le cas. La « langue du navire appelé » est une règle de navigation maritime.",
   "sources": [
    {
     "page": 20,
     "quote": "Pour les communications échangées entre les stations de bateau, il est fait usage de la langue du pays dans lequel le bateau concerné navigue."
    },
    {
     "page": 20,
     "quote": "Lorsqu’aucun « Règlement général de police pour la navigation sur les eaux intérieures » n’est d’application, les dispositions suivantes s’appliquent :"
    },
    {
     "page": 20,
     "quote": "Pour les communications échangées entre les stations de navire, il est fait usage de la langue du pays du navire appelé ou de l’anglais."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R028",
   "category": "procedures-generales",
   "difficulty": "moyen",
   "reasoning_type": "discrimination",
   "question": "En mer, un yacht belge appelle un cargo allemand pour une communication navire-navire. Quelle(s) langue(s) le manuel autorise-t-il ?",
   "choices": [
    {
     "id": "A",
     "text": "Le néerlandais ou le français, langues du pays de l'appelant.",
     "correct": false,
     "explanation": "En maritime navire-navire, c'est la langue du pays du navire appelé qui compte, pas celle de l'appelant."
    },
    {
     "id": "B",
     "text": "L'allemand ou l'anglais.",
     "correct": true,
     "explanation": "Entre stations de navire en mer, on utilise la langue du pays du navire appelé (ici l'allemand) ou l'anglais."
    },
    {
     "id": "C",
     "text": "La langue du pays dont les eaux sont traversées.",
     "correct": false,
     "explanation": "C'est un raisonnement propre à la navigation intérieure, pas la règle maritime."
    },
    {
     "id": "D",
     "text": "Uniquement l'anglais.",
     "correct": false,
     "explanation": "L'anglais est une option, mais la langue du pays du navire appelé est également admise."
    }
   ],
   "answer": "B",
   "explanation": "Navigation maritime, communication entre stations de navire : langue du pays du navire appelé ou anglais. Le navire appelé est allemand : l'allemand ou l'anglais.",
   "sources": [
    {
     "page": 20,
     "quote": "Pour les communications échangées entre les stations de navire, il est fait usage de la langue du pays du navire appelé ou de l’anglais."
    },
    {
     "page": 20,
     "quote": "Pour les communications échangées entre les stations de bateau, il est fait usage de la langue du pays dans lequel le bateau concerné navigue."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R029",
   "category": "procedures-generales",
   "difficulty": "moyen",
   "reasoning_type": "combinaison",
   "question": "Oostende Radio a demandé à votre navire de réduire sa puissance d'émission et de veiller sur un canal déterminé. Peu après, une voie d'eau met votre navire en danger et vous jugez nécessaire d'appeler à l'aide sur un autre canal, en puissance élevée. Que prévoit le manuel ?",
   "choices": [
    {
     "id": "A",
     "text": "Vous devez d'abord obtenir l'accord de la station côtière avant de changer de canal ou de puissance.",
     "correct": false,
     "explanation": "Le manuel autorise la dérogation en cas de danger ; la station côtière est informée par la suite, pas consultée au préalable."
    },
    {
     "id": "B",
     "text": "Vous pouvez quitter le canal, mais vous devez garder la puissance réduite demandée par la station côtière.",
     "correct": false,
     "explanation": "La réduction de puissance figure, comme la veille sur un canal déterminé, parmi les instructions de la station côtière ; l'exception en cas de danger vaut pour ses instructions, sans distinction."
    },
    {
     "id": "C",
     "text": "Vous pouvez déroger aux deux instructions, sans aucune autre obligation, puisque le danger prime.",
     "correct": false,
     "explanation": "La dérogation est permise, mais la station côtière doit en être informée par la suite."
    },
    {
     "id": "D",
     "text": "Vous pouvez déroger aux deux instructions, puis vous devez en informer la station côtière.",
     "correct": true,
     "explanation": "Réduction de puissance et veille sur un canal déterminé sont deux instructions de la station côtière ; en cas de danger, on peut y déroger, à condition d'en informer ensuite la station côtière."
    }
   ],
   "answer": "D",
   "explanation": "Étape 1 : identifier les deux demandes. La réduction de la puissance de sortie et la veille sur un canal déterminé figurent toutes deux parmi les exemples d'instructions de la station côtière, qu'il convient normalement de respecter. Étape 2 : appliquer l'exception. En cas de danger, il peut être dérogé aux instructions de la station côtière, sans distinction entre elles ; la station côtière doit en être informée par la suite. Il n'y a donc ni accord préalable à obtenir, ni dispense d'information a posteriori.",
   "sources": [
    {
     "page": 19,
     "quote": "Dans le cadre de liaisons de radiocommunications avec une station côtière, il convient de respecter les instructions de cette dernière."
    },
    {
     "page": 19,
     "quote": "la réduction de la puissance de sortie de la station de navire ;"
    },
    {
     "page": 19,
     "quote": "la veille sur un canal déterminé."
    },
    {
     "page": 19,
     "quote": "En cas de danger, il peut être dérogé aux instructions de la station côtière. La station côtière doit en être informée par la suite."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R030",
   "category": "procedures-generales",
   "difficulty": "moyen",
   "reasoning_type": "application_regle",
   "question": "La liaison est mauvaise et Oostende Radio ne comprend pas votre indicatif d'appel OS1256. Comment devez-vous le transmettre ?",
   "choices": [
    {
     "id": "A",
     "text": "OSCAR SIERRA TWELVE FIFTY-SIX",
     "correct": false,
     "explanation": "Les nombres doivent être transmis chiffre par chiffre, pas regroupés."
    },
    {
     "id": "B",
     "text": "OSCAR SIERRA UNAONE BISSOTWO PANTAFIVE SOXISIX",
     "correct": true,
     "explanation": "Chaque lettre est remplacée par son mot de code (O = Oscar, S = Sierra) et chaque chiffre est transmis séparément avec son mot de code."
    },
    {
     "id": "C",
     "text": "OSCAR SUGAR UNAONE BISSOTWO PANTAFIVE SOXISIX",
     "correct": false,
     "explanation": "Le mot de code de la lettre S est SIERRA, pas SUGAR."
    },
    {
     "id": "D",
     "text": "OSCAR SIERRA UNAONE BISSOTWO SOXISIX PANTAFIVE",
     "correct": false,
     "explanation": "Les mots de code sont corrects, mais l'ordre des deux derniers chiffres est inversé (on transmettrait 1265)."
    }
   ],
   "answer": "B",
   "explanation": "En cas de difficulté de compréhension, on épelle selon la table : O = Oscar, S = Sierra. On transmet les nombres chiffre par chiffre : 1 = UNAONE, 2 = BISSOTWO, 5 = PANTAFIVE, 6 = SOXISIX, dans l'ordre de l'indicatif.",
   "sources": [
    {
     "page": 21,
     "quote": "En cas de difficulté de compréhension, il est recommandé d’épeler les mots à transmettre conformément à la table d’épellation ci-après, et de transmettre les nombres chiffre par chiffre."
    },
    {
     "page": 21,
     "quote": "Oscar"
    },
    {
     "page": 21,
     "quote": "Sierra"
    },
    {
     "page": 22,
     "quote": "UNAONE"
    },
    {
     "page": 22,
     "quote": "BISSOTWO"
    },
    {
     "page": 22,
     "quote": "PANTAFIVE"
    },
    {
     "page": 22,
     "quote": "SOXISIX"
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R031",
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "reasoning_type": "discrimination",
   "question": "Un navire tombe en panne de moteur par un vent de force 5, dans une zone de trafic maritime. Une heure plus tard, toujours en panne, il est pris dans la tempête et dérive vers la côte : il risque de s'échouer. Quel type de communication doit-il émettre à ce stade ?",
   "choices": [
    {
     "id": "A",
     "text": "PAN PAN (urgence), puisque la cause reste la même panne de moteur.",
     "correct": false,
     "explanation": "PAN PAN correspond à la panne par vent de force 5 en zone de trafic, sans danger imminent ; la tempête et le risque d'échouement créent un danger imminent, qui relève de la détresse."
    },
    {
     "id": "B",
     "text": "SÉCURITÉ, pour avertir les autres navires d'un danger pour la navigation.",
     "correct": false,
     "explanation": "La communication de sécurité correspond à la panne par temps calme en zone à faible trafic, ou à un avertissement nautique ou météorologique important ; ici, le navire lui-même est en danger imminent."
    },
    {
     "id": "C",
     "text": "MAYDAY (détresse).",
     "correct": true,
     "explanation": "Panne par temps de tempête avec risque d'échouement : c'est l'exemple de détresse du manuel, une situation de danger imminent nécessitant une aide immédiate."
    },
    {
     "id": "D",
     "text": "MAYDAY RELAY, pour qu'une autre station diffuse l'alerte.",
     "correct": false,
     "explanation": "Le MAYDAY RELAY est le relais d'un appel de détresse par une station qui n'est pas elle-même en détresse ; le navire en danger émet lui-même un MAYDAY."
    }
   ],
   "answer": "C",
   "explanation": "Le manuel illustre l'ordre de priorité par trois pannes : par vent de force 5 dans une zone de trafic maritime, PAN PAN ; par temps de tempête avec risque d'échouement, MAYDAY ; par temps calme dans une zone à faible trafic, SÉCURITÉ. La situation a évolué du premier cas vers le deuxième : il y a désormais un danger imminent nécessitant une aide immédiate, ce qui définit la détresse. Le navire émet donc lui-même un MAYDAY ; le MAYDAY RELAY est réservé à une station qui n'est pas elle-même en détresse.",
   "sources": [
    {
     "page": 22,
     "quote": "Un navire est en panne par temps de tempête et risque de s’échouer, il émet une communication de détresse (MAYDAY)."
    },
    {
     "page": 22,
     "quote": "Un navire est en panne par un vent de force 5 dans une zone de trafic maritime, il émet une communication d’urgence (PAN PAN)."
    },
    {
     "page": 22,
     "quote": "Un navire est en panne par temps calme dans une zone à faible trafic maritime, il émet une communication de sécurité (SECURITY)."
    },
    {
     "page": 23,
     "quote": "Une situation de détresse est une situation de danger imminent pour une personne ou un navire, nécessitant une aide immédiate."
    },
    {
     "page": 23,
     "quote": "Le relais d'un appel de détresse émis en radiotéléphonie par une station qui n’est pas ellemême en détresse doit prendre la forme suivante :"
    },
    {
     "page": 25,
     "quote": "Un message de sécurité est un message contenant un avertissement nautique important ou un avertissement météorologique important."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R032",
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "reasoning_type": "discrimination",
   "question": "Parmi les situations suivantes, laquelle justifie l'envoi d'un appel MAYDAY plutôt que d'un autre type de message ?",
   "choices": [
    {
     "id": "A",
     "text": "Un équipier a une forte fièvre, mais sa vie n'est pas en danger.",
     "correct": false,
     "explanation": "Une maladie sans danger pour la vie relève des communications d'urgence (PAN PAN)."
    },
    {
     "id": "B",
     "text": "Un incendie à bord se propage et menace le navire, qui a besoin d'une aide immédiate.",
     "correct": true,
     "explanation": "La détresse est une situation de danger imminent pour une personne ou un navire, qui nécessite une aide immédiate."
    },
    {
     "id": "C",
     "text": "Le navire s'est échoué sur un banc de sable, sans fuite de cargaison ni danger imminent.",
     "correct": false,
     "explanation": "Le manuel cite justement l'échouement sans fuite de cargaison comme exemple de communication d'urgence."
    },
    {
     "id": "D",
     "text": "Vous souhaitez avertir tous les navires d'un avis de tempête important.",
     "correct": false,
     "explanation": "Un avertissement météorologique important fait l'objet d'un message de sécurité."
    }
   ],
   "answer": "B",
   "explanation": "Détresse (MAYDAY) : danger imminent nécessitant une aide immédiate. Urgence (PAN PAN) : sécurité de l'équipage ou du navire en jeu sans danger de mort ni danger imminent, par exemple une maladie ou un échouement sans fuite de cargaison. Sécurité : avertissement nautique ou météorologique important. Seul l'incendie qui se propage répond à la définition de la détresse.",
   "sources": [
    {
     "page": 23,
     "quote": "Une situation de détresse est une situation de danger imminent pour une personne ou un navire, nécessitant une aide immédiate."
    },
    {
     "page": 25,
     "quote": "Les communications d’urgence concernent une situation dans laquelle doivent être transmis des messages traitant de la sécurité de l'équipage ou du navire, tels que des maladies de personnes sans que leur vie ne soit en danger, ou des dommages aux navires sans qu'il y ait danger imminent (par exemple, un échouement sans fuite de cargaison)."
    },
    {
     "page": 25,
     "quote": "Un message de sécurité est un message contenant un avertissement nautique important ou un avertissement météorologique important."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R033",
   "category": "detresse-urgence-securite",
   "difficulty": "difficile",
   "reasoning_type": "detection_erreur",
   "question": "Le yacht « Albatros » (indicatif OS4411) a entendu un appel de détresse du voilier « Mistral », resté sans réponse. Il décide de le relayer à toutes les stations. Quelle formulation de l'appel de relais est correcte ?",
   "choices": [
    {
     "id": "A",
     "text": "MAYDAY ×3 – ICI – Mistral ×3 – indicatif du Mistral",
     "correct": false,
     "explanation": "C'est la forme de l'appel de détresse émis par le navire en détresse lui-même ; une station qui relaie doit utiliser MAYDAY RELAY et s'identifier elle-même."
    },
    {
     "id": "B",
     "text": "MAYDAY RELAY ×3 – ALL STATIONS ×3 – ICI – Albatros ×3 – OS4411",
     "correct": true,
     "explanation": "C'est la structure du relais : signal MAYDAY RELAY, destinataires, ICI, puis le nom et l'indicatif de la station relais."
    },
    {
     "id": "C",
     "text": "MAYDAY RELAY ×3 – ALL STATIONS ×3 – ICI – Mistral ×3 – indicatif du Mistral",
     "correct": false,
     "explanation": "Après ICI, c'est la station relais (Albatros) qui s'identifie, pas le navire en détresse."
    },
    {
     "id": "D",
     "text": "PAN PAN ×3 – ALL STATIONS ×3 – ICI – Albatros ×3 – OS4411",
     "correct": false,
     "explanation": "PAN PAN est le signal d'urgence ; le relais d'un appel de détresse utilise MAYDAY RELAY."
    }
   ],
   "answer": "B",
   "explanation": "Le relais par une station qui n'est pas elle-même en détresse se compose ainsi : « MAYDAY RELAY » répété trois fois ; « ALL STATIONS » (ou le nom de la station côtière) répété trois fois ; « THIS IS » ou « ICI » ; le nom de la station relais répété trois fois ; puis son indicatif. Un message de détresse suit, qui reprend dans la mesure du possible les informations de l'appel initial. C'est donc l'Albatros, station relais, qui s'identifie après ICI, et non le Mistral.",
   "sources": [
    {
     "page": 23,
     "quote": "Le relais d'un appel de détresse émis en radiotéléphonie par une station qui n’est pas ellemême en détresse doit prendre la forme suivante :"
    },
    {
     "page": 23,
     "quote": "le signal de détresse « MAYDAY RELAY » [prononcé m’aider relais], répété trois"
    },
    {
     "page": 23,
     "quote": "les mots « ALL STATIONS » ou le nom de la station côtière, selon le cas, répété"
    },
    {
     "page": 23,
     "quote": "le nom de la station relais, répété trois fois ; • l’indicatif d'appel ou toute autre identification de la station relais."
    },
    {
     "page": 24,
     "quote": "Cet appel est suivi d’un message de détresse lequel, dans la mesure du possible, reprend les informations contenues dans l'appel de détresse ou le message de détresse initial."
    },
    {
     "page": 23,
     "quote": "Le signal de détresse « MAYDAY » [prononcé m’aider], répété trois fois ;"
    },
    {
     "page": 25,
     "quote": "Le signal d'urgence « PAN PAN », répété trois fois ;"
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R034",
   "category": "detresse-urgence-securite",
   "difficulty": "difficile",
   "reasoning_type": "application_regle",
   "question": "En mer, le voilier « Mistral » (OS1111) lance un appel de détresse navire-navire. Vous êtes à proximité à bord de l'« Albatros » (OS4411). Quelle formulation d'accusé de réception est correcte ?",
   "choices": [
    {
     "id": "A",
     "text": "MAYDAY – Albatros OS4411 – ICI – Mistral OS1111 – RECEIVED – MAYDAY",
     "correct": false,
     "explanation": "Les identités sont inversées : on nomme d'abord la station qui émet l'appel (Mistral), puis, après ICI, la station qui accuse réception (Albatros)."
    },
    {
     "id": "B",
     "text": "MAYDAY RELAY – Mistral OS1111 – ICI – Albatros OS4411 – RECEIVED",
     "correct": false,
     "explanation": "MAYDAY RELAY sert à relayer un appel, pas à en accuser réception ; l'accusé de réception se termine par MAYDAY."
    },
    {
     "id": "C",
     "text": "MAYDAY – Mistral OS1111 – ICI – Albatros OS4411 – RECEIVED – MAYDAY",
     "correct": true,
     "explanation": "C'est l'ordre prévu : MAYDAY, station en détresse, ICI, station qui accuse réception, RECEIVED, MAYDAY."
    },
    {
     "id": "D",
     "text": "MAYDAY – Mistral OS1111 – ICI – Albatros OS4411 – SILENCE FINI",
     "correct": false,
     "explanation": "SILENCE FINI annonce la fin de la communication de détresse ; l'accusé de réception utilise RECEIVED ou REÇU."
    }
   ],
   "answer": "C",
   "explanation": "En navigation navire-navire, toute station proche doit accuser réception de l'appel de détresse. Ordre : le signal « MAYDAY » ; le nom et l'indicatif de la station qui émet l'appel ; « THIS IS » ou « ICI » ; le nom et l'indicatif de la station qui accuse réception ; « RECEIVED » ou « REÇU » ; « MAYDAY ».",
   "sources": [
    {
     "page": 24,
     "quote": "En ce qui concerne les communications navire-navire, l'appel de détresse doit faire l'objet d'un accusé de réception par toute station de navire se trouvant à proximité."
    },
    {
     "page": 24,
     "quote": "Le nom suivi de l’indicatif d’appel ou de toute autre identification de la station qui émet l’appel ;"
    },
    {
     "page": 24,
     "quote": "Le nom et l’indicatif d'appel ou toute autre identification de la station qui accuse réception ;"
    },
    {
     "page": 24,
     "quote": "Le mot « RECEIVED » ou « REÇU » ; • Le signal de détresse « MAYDAY »."
    },
    {
     "page": 25,
     "quote": "Les mots « SILENCE FINI »."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R035",
   "category": "detresse-urgence-securite",
   "difficulty": "difficile",
   "reasoning_type": "mise_en_situation",
   "question": "Un bateau en détresse lance son appel sur une liaison navire-autorité portuaire. Votre bateau, tout proche, l'entend. Une minute passe sans aucun accusé de réception de l'autorité portuaire. Que devez-vous faire ?",
   "choices": [
    {
     "id": "A",
     "text": "Continuer à attendre, car seule l'autorité portuaire peut accuser réception sur ce type de liaison.",
     "correct": false,
     "explanation": "Passé une minute sans accusé de réception, une station de navire doit prendre la communication de détresse."
    },
    {
     "id": "B",
     "text": "Prendre en charge la communication de détresse.",
     "correct": true,
     "explanation": "C'est exactement la règle prévue pour les communications navire-autorité portuaire après une minute sans réponse."
    },
    {
     "id": "C",
     "text": "Vous auriez dû accuser réception immédiatement, sans laisser à l'autorité portuaire le temps de répondre.",
     "correct": false,
     "explanation": "Sur une liaison navire-autorité portuaire, il faut d'abord attendre l'accusé de réception de l'autorité portuaire ; l'accusé immédiat par toute station proche est la règle des liaisons navire-navire."
    },
    {
     "id": "D",
     "text": "Imposer le silence radio avec « SILENCE FINI ».",
     "correct": false,
     "explanation": "« SILENCE FINI » met fin à une communication de détresse ; le silence s'impose avec « SILENCE MAYDAY »."
    }
   ],
   "answer": "B",
   "explanation": "La règle d'accusé de réception dépend du type de liaison. Informations nautiques : c'est la station côtière qui accuse réception. Navire-autorité portuaire : on attend l'accusé de réception de l'autorité, et si rien n'arrive dans la minute, une station de navire doit prendre la communication de détresse. Navire-navire : toute station proche accuse réception.",
   "sources": [
    {
     "page": 24,
     "quote": "En ce qui concerne les communications navire-autorité portuaire, il faut attendre un accusé de réception de l'autorité portuaire. Si, dans l'intervalle d'une minute, aucun accusé de réception n'est transmis, une station de navire doit prendre la communication de détresse."
    },
    {
     "page": 24,
     "quote": "En ce qui concerne les communications navire-navire, l'appel de détresse doit faire l'objet d'un accusé de réception par toute station de navire se trouvant à proximité."
    },
    {
     "page": 24,
     "quote": "Les mots « SILENCE MAYDAY » [prononcé silence m’aider] ;"
    },
    {
     "page": 25,
     "quote": "Les mots « SILENCE FINI »."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R036",
   "category": "detresse-urgence-securite",
   "difficulty": "difficile",
   "reasoning_type": "discrimination",
   "question": "Une communication de détresse est en cours et le silence radio a été imposé par « SILENCE MAYDAY ». Vous entendez ensuite sur la même fréquence un message qui se termine par le mot « PRUDENCE ». Que pouvez-vous faire désormais ?",
   "choices": [
    {
     "id": "A",
     "text": "Un trafic restreint, la détresse continuant.",
     "correct": true,
     "explanation": "Le signal « PRUDENCE » introduit l'autorisation d'un trafic restreint de radiocommunications."
    },
    {
     "id": "B",
     "text": "Reprendre toutes vos communications normales, car la détresse est terminée.",
     "correct": false,
     "explanation": "La reprise des communications normales est annoncée par « SILENCE FINI », dans le message de fin de la communication de détresse."
    },
    {
     "id": "C",
     "text": "Rien : le silence radio total reste en vigueur.",
     "correct": false,
     "explanation": "« PRUDENCE » assouplit justement le silence en autorisant un trafic restreint."
    },
    {
     "id": "D",
     "text": "Accuser réception du message en répondant « RECEIVED ».",
     "correct": false,
     "explanation": "« RECEIVED » sert à accuser réception d'un appel de détresse ; le manuel ne demande pas de répondre au message PRUDENCE."
    }
   ],
   "answer": "A",
   "explanation": "Trois signaux à distinguer : « SILENCE MAYDAY » impose le silence radio ; « PRUDENCE » autorise un trafic restreint pendant que la détresse continue ; « SILENCE FINI », transmis par la station qui a demandé le silence, annonce que la communication de détresse est terminée. Après « PRUDENCE », seul un trafic restreint est permis.",
   "sources": [
    {
     "page": 24,
     "quote": "Tant qu'elles n'ont pas reçu un message leur indiquant qu'elles peuvent reprendre les communications radiotéléphoniques normales, il est interdit à toutes les stations qui ont connaissance de cette demande de silence radio, et qui ne sont pas elles-mêmes en détresse, d'émettre sur les fréquences sur lesquelles ont lieu les communications de détresse."
    },
    {
     "page": 24,
     "quote": "L’autorisation d’un trafic restreint de radiocommunications est introduite par le signal"
    },
    {
     "page": 24,
     "quote": "« PRUDENCE »."
    },
    {
     "page": 25,
     "quote": "La station qui a demandé le silence radio doit faire transmettre un message indiquant que la communication de détresse est terminée."
    },
    {
     "page": 25,
     "quote": "Les mots « SILENCE FINI »."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R037",
   "category": "detresse-urgence-securite",
   "difficulty": "moyen",
   "reasoning_type": "detection_erreur",
   "question": "Le voilier « Mistral » (OS1111) a repéré un conteneur dérivant sur une route de navigation et veut en avertir tous les navires. Quel début de message est conforme au manuel ?",
   "choices": [
    {
     "id": "A",
     "text": "PAN PAN ×3 – ALL STATIONS ×3 – ICI – Mistral ×3 – OS1111",
     "correct": false,
     "explanation": "PAN PAN est réservé à l'urgence (sécurité de l'équipage ou du navire) ; un avertissement nautique relève du message de sécurité."
    },
    {
     "id": "B",
     "text": "SÉCURITÉ – puis directement le message, sans identification.",
     "correct": false,
     "explanation": "Le signal SÉCURITÉ se répète trois fois et doit être suivi des destinataires, de ICI et de l'identification de la station appelante."
    },
    {
     "id": "C",
     "text": "MAYDAY RELAY ×3 – ALL STATIONS ×3 – ICI – Mistral ×3 – OS1111",
     "correct": false,
     "explanation": "MAYDAY RELAY sert à relayer un appel de détresse, ce qui n'est pas le cas ici."
    },
    {
     "id": "D",
     "text": "SÉCURITÉ ×3 – ALL STATIONS ×3 – ICI – Mistral ×3 – OS1111",
     "correct": true,
     "explanation": "Un avertissement nautique important fait l'objet d'un message de sécurité, avec le signal SÉCURITÉ répété trois fois et l'identification complète."
    }
   ],
   "answer": "D",
   "explanation": "Un conteneur à la dérive est un avertissement nautique important : on émet un message de sécurité. Sa forme : « SÉCURITÉ » répété trois fois ; « ALL STATIONS » répété trois fois ; « THIS IS » ou « ICI » ; le nom de la station appelante répété trois fois ; son indicatif. Après cette annonce en anglais, le message lui-même peut se poursuivre dans la langue locale.",
   "sources": [
    {
     "page": 25,
     "quote": "Un message de sécurité est un message contenant un avertissement nautique important ou un avertissement météorologique important."
    },
    {
     "page": 26,
     "quote": "le signal de sécurité « SÉCURITÉ » [prononcé sécurité], répété trois fois ; • le nom de la station appelée ou l’appel « ALL STATIONS » répété trois fois ; • les mots « THIS IS » ou « ICI » ;"
    },
    {
     "page": 26,
     "quote": "le nom de la station appelante, répété trois fois ; • l’indicatif d'appel ou toute autre identification."
    },
    {
     "page": 25,
     "quote": "Les communications d’urgence concernent une situation dans laquelle doivent être transmis des messages traitant de la sécurité de l'équipage ou du navire"
    },
    {
     "page": 26,
     "quote": "Le message de sécurité lui-même peut se poursuivre dans la langue locale après l'annonce (en anglais)."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R038",
   "category": "navigation-maritime",
   "difficulty": "moyen",
   "reasoning_type": "mise_en_situation",
   "question": "En mer, un voilier non astreint est réglé sur le canal 8 avec la fonction double veille activée. Un navire lance un appel de 40 secondes sur le canal 16. Comment se comporte le mariphone ?",
   "choices": [
    {
     "id": "A",
     "text": "Il reste positionné sur le canal 16 pendant toute la durée de la transmission.",
     "correct": true,
     "explanation": "Le manuel précise que, lorsqu'une transmission est détectée, le poste reste sur le 16 pendant toute sa durée."
    },
    {
     "id": "B",
     "text": "Il reste sur le canal 8 et ne capte le 16 que quelques centièmes de seconde toutes les 2,5 secondes : l'appel arrive haché.",
     "correct": false,
     "explanation": "Ce balayage ne vaut qu'en l'absence de transmission ; dès qu'une transmission est détectée sur le 16, le poste y reste."
    },
    {
     "id": "C",
     "text": "Il ne bascule sur le canal 16 que si l'utilisateur appuie sur la touche 16.",
     "correct": false,
     "explanation": "La double veille positionne automatiquement le poste sur le 16, quel que soit son réglage."
    },
    {
     "id": "D",
     "text": "Cette situation ne peut pas se produire : la double veille n'est permise qu'en navigation intérieure.",
     "correct": false,
     "explanation": "La double veille n'est interdite qu'en navigation intérieure ; le manuel décrit justement son fonctionnement en mer, pour l'écoute du canal 16."
    }
   ],
   "answer": "A",
   "explanation": "Le manuel présente la double veille, interdite en navigation intérieure, comme le moyen d'écouter le canal 16 autant que possible. Le poste se positionne sur le canal 16 pendant quelques centièmes de seconde toutes les 2,5 secondes, quel que soit son réglage. Lorsqu'une transmission est détectée, il reste sur le canal 16 pendant toute la durée de la transmission : l'appel de 40 secondes est donc reçu en entier.",
   "sources": [
    {
     "page": 27,
     "quote": "il est cependant conseillé de le faire autant que possible en activant la fonction double veille (ce système est interdit en navigation intérieure)."
    },
    {
     "page": 27,
     "quote": "Le poste se positionne alors sur le canal 16 pendant quelques centièmes de secondes toutes les 2,5 secondes, quel que soit son réglage. Lorsqu’une transmission est détectée, il reste positionné sur le canal 16 pendant toute la durée de la transmission."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R039",
   "category": "navigation-maritime",
   "difficulty": "moyen",
   "reasoning_type": "combinaison",
   "question": "À 15 milles d'Ostende, un équipier se blesse gravement et doit être évacué. Le voilier est équipé d'une VHF sans fonction ASN. Quelle démarche est conforme au manuel ?",
   "choices": [
    {
     "id": "A",
     "text": "Appeler Oostende Radio sur son canal de travail 7, puisque cette station diffuse les informations de sécurité maritime.",
     "correct": false,
     "explanation": "Oostende Radio transmet des informations de sécurité maritime pour le compte du MRCC, mais ne traite pas les incidents."
    },
    {
     "id": "B",
     "text": "Appeler le MRCC Oostende sur le canal 16, sur lequel il assure une veille continue.",
     "correct": true,
     "explanation": "Le MRCC coordonne l'assistance et l'évacuation médicales, et il veille en continu sur le canal 16, utilisable en phonie avec une VHF sans ASN."
    },
    {
     "id": "C",
     "text": "Appeler le MRCC Oostende en phonie sur le canal 70, sur lequel il assure une veille continue.",
     "correct": false,
     "explanation": "Le MRCC veille le 70 en ASN : ce canal est toujours bloqué pour la radiotéléphonie et doit être bloqué sur un mariphone sans ASN."
    },
    {
     "id": "D",
     "text": "Appeler le CROSS Gris-Nez, centre de coordination compétent pour la côte belge.",
     "correct": false,
     "explanation": "Le manuel cite le CROSS Gris-Nez comme centre français ; en Belgique, le centre de coordination et de sauvetage est le MRCC Oostende."
    }
   ],
   "answer": "B",
   "explanation": "Étape 1 : choisir l'organisme. En Belgique, le MRCC Oostende est le premier point de contact pour tous les incidents en mer et il est chargé de la coordination de l'assistance et de l'évacuation médicales. Oostende Radio ne traite pas les incidents, et le CROSS Gris-Nez est le centre français. Étape 2 : choisir le canal. Le MRCC veille en continu sur les canaux VHF 16, 67 et ASN 70, mais le canal 70 est toujours bloqué pour la radiotéléphonie et doit être bloqué sur un mariphone sans ASN. L'appel se fait donc sur le canal 16.",
   "sources": [
    {
     "page": 27,
     "quote": "Le Centre de coordination et de sauvetage maritimes (MRCC) à Ostende est le premier point de contact pour tous les incidents en mer."
    },
    {
     "page": 28,
     "quote": "chargé de la coordination de l’assistance et de l’évacuation médicales ;"
    },
    {
     "page": 28,
     "quote": "Le MRCC assure une veille continue (24/7) sur les canaux VHF 16, 67, ASN 70"
    },
    {
     "page": 28,
     "quote": "Oostende Radio transmet des informations sur la sécurité maritime (MSI) pour la navigation maritime pour le compte du MRCC ; il s’agit notamment de bulletins météorologiques et d’alertes météo. Oostende Radio ne traite pas les incidents."
    },
    {
     "page": 28,
     "quote": "France : CROSS Gris-Nez"
    },
    {
     "page": 27,
     "quote": "Exemple (sur le canal de travail de Oostende radio 7) :"
    },
    {
     "page": 16,
     "quote": "Pour les mariphones non équipés de la"
    },
    {
     "page": 17,
     "quote": "fonction ASN, le canal 70 doit être bloqué. Le canal 70 est toujours bloqué pour la radiotéléphonie."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R040",
   "category": "navigation-maritime",
   "difficulty": "moyen",
   "reasoning_type": "detection_erreur",
   "question": "Un plaisancier veut téléphoner à un numéro à terre via Oostende Radio (correspondance publique). Laquelle de ses idées est conforme au manuel ?",
   "choices": [
    {
     "id": "A",
     "text": "Il suffit de donner son indicatif d'appel ; la communication sera facturée à l'adresse figurant sur l'autorisation de station.",
     "correct": false,
     "explanation": "Il faut un abonnement auprès d'une autorité comptable, identifiée par un code CIAC à donner lors de chaque communication."
    },
    {
     "id": "B",
     "text": "Ce service n'existe plus en Belgique.",
     "correct": false,
     "explanation": "En Belgique, Oostende Radio offre toujours ce service."
    },
    {
     "id": "C",
     "text": "Le code CIAC est communiqué une seule fois, lors de la souscription de l'abonnement.",
     "correct": false,
     "explanation": "Le CIAC doit être spécifié lors de chaque communication, comme dans l'exemple où l'appelant donne son code d'identification."
    },
    {
     "id": "D",
     "text": "Il doit avoir souscrit un abonnement auprès d'une autorité comptable et indiquer le code CIAC lors de chaque communication.",
     "correct": true,
     "explanation": "C'est la condition d'accès au service de correspondance publique décrite par le manuel."
    }
   ],
   "answer": "D",
   "explanation": "Oostende Radio offre toujours la correspondance publique en Belgique. Pour y accéder, il faut souscrire un abonnement auprès d'une autorité comptable. Celle-ci est identifiée par un code (CIAC) à indiquer lors de chaque communication, comme dans l'exemple : « Mon code d'identification est bravo-echo-two-one ».",
   "sources": [
    {
     "page": 28,
     "quote": "En Belgique, Oostende Radio offre toujours ce service. Pour avoir accès à ce service, il faut souscrire un abonnement auprès d’une autorité comptable. Cette autorité est identifiée par un code (CIAC), qui doit être spécifié lors de chaque communication."
    },
    {
     "page": 29,
     "quote": "Mon code d’identification est bravo-echo-two-one"
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R041",
   "category": "navigation-interieure",
   "difficulty": "moyen",
   "reasoning_type": "application_regle",
   "question": "Sur la Meuse, un patron garde le commutateur d'émission enfoncé pendant 12 minutes (émission longue), puis le relâche. Quand son installation transmet-elle le signal ATIS ?",
   "choices": [
    {
     "id": "A",
     "text": "Uniquement au début de l'émission.",
     "correct": false,
     "explanation": "Le signal ATIS est transmis à la fin de chaque émission, pas au début."
    },
    {
     "id": "B",
     "text": "Uniquement au relâchement du commutateur, après 12 minutes.",
     "correct": false,
     "explanation": "En cas d'émission longue, le signal est aussi transmis toutes les cinq minutes pendant l'émission."
    },
    {
     "id": "C",
     "text": "Jamais : l'ATIS n'est transmis qu'avec un appel ASN.",
     "correct": false,
     "explanation": "C'est l'inverse : l'ATIS n'est pas transmis lors d'un appel ASN, et l'ASN est interdit en navigation intérieure."
    },
    {
     "id": "D",
     "text": "Toutes les 5 minutes, et au relâchement du commutateur.",
     "correct": true,
     "explanation": "Le signal est émis à la fin de chaque émission et, pour les émissions longues, toutes les cinq minutes."
    }
   ],
   "answer": "D",
   "explanation": "L'installation ATIS génère automatiquement le signal d'identification à la fin de chaque émission, au relâchement du commutateur. En cas d'émission longue, il est aussi transmis toutes les cinq minutes. Pour 12 minutes, cela donne environ à 5 et 10 minutes, puis au relâchement.",
   "sources": [
    {
     "page": 32,
     "quote": "L’installation ATIS génère automatiquement le signal d’identification de la station. Ce signal est transmis à la fin de chaque émission (relâchement du commutateur d’émission). En cas d'émissions longues, le signal ATIS est transmis toutes les cinq minutes."
    },
    {
     "page": 32,
     "quote": "le signal ATIS n’est pas transmis lors d’un appel ASN"
    },
    {
     "page": 32,
     "quote": "Rappel : L’utilisation de l’ASN est interdite sur les voies de navigation intérieure."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R042",
   "category": "navigation-interieure",
   "difficulty": "difficile",
   "reasoning_type": "combinaison",
   "question": "Le patron du bateau A possède un portophone équipé d'ATIS et mentionné sur l'autorisation de station de A. Il veut le prêter à un ami, titulaire d'un certificat d'opérateur, pour l'utiliser à bord du bateau B sur une voie intérieure belge. Que faut-il en penser ?",
   "choices": [
    {
     "id": "A",
     "text": "C'est permis, puisque l'ami est titulaire d'un certificat d'opérateur.",
     "correct": false,
     "explanation": "Le certificat ne suffit pas : l'appareil doit figurer sur l'autorisation de station, et son code ATIS est lié au bateau A."
    },
    {
     "id": "B",
     "text": "C'est permis si l'ami reprogramme l'ATIS avec le code du bateau B.",
     "correct": false,
     "explanation": "L'utilisateur ne peut ni déconnecter ni reprogrammer le dispositif ATIS."
    },
    {
     "id": "C",
     "text": "Non : l'ATIS du portophone reste celui du bateau A.",
     "correct": true,
     "explanation": "Le code ATIS est indissociable du bateau A : le portophone transmettrait l'identité de A depuis B. De plus, il ne figure pas sur l'autorisation de B."
    },
    {
     "id": "D",
     "text": "C'est permis à condition de n'utiliser le portophone qu'à quai.",
     "correct": false,
     "explanation": "Le portophone ne peut être utilisé qu'à bord du navire, jamais à quai sans autorisation spécifique."
    }
   ],
   "answer": "C",
   "explanation": "Un portophone n'est autorisé que s'il figure sur l'autorisation de station et si son utilisateur a un certificat. En navigation intérieure, il doit être équipé d'ATIS, et ce code est indissociable du bateau auquel il a été attribué. L'utilisateur ne peut pas reprogrammer l'ATIS. Utilisé à bord de B, le portophone de A transmettrait une fausse identification et ne serait pas couvert par l'autorisation de B.",
   "sources": [
    {
     "page": 12,
     "quote": "l’appareil doit être mentionné sur l’autorisation de station ;"
    },
    {
     "page": 12,
     "quote": "le portophone doit toujours être équipé d’ATIS sur les voies de navigation intérieure, conformément à l’arrangement Rainwat. Le code ATIS est indissociable du bateau auquel il a été attribué ;"
    },
    {
     "page": 32,
     "quote": "Il n’est pas possible pour l’utilisateur de déconnecter ou de reprogrammer le dispositif ATIS."
    },
    {
     "page": 12,
     "quote": "l’appareil portable ne peut être utilisé qu’à bord du navire, jamais à quai"
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R043",
   "category": "navigation-interieure",
   "difficulty": "difficile",
   "reasoning_type": "mise_en_situation",
   "question": "Un bateau belge possède un appareil qui permet de basculer entre les réglages prévus pour la navigation intérieure et ceux prévus pour la mer. Il quitte une voie intérieure pour naviguer en mer. Quel réglage est conforme au manuel ?",
   "choices": [
    {
     "id": "A",
     "text": "Garder l'ATIS activé en mer et ne jamais activer l'ASN, interdit partout.",
     "correct": false,
     "explanation": "L'ASN n'est interdit que sur les voies de navigation intérieure ; en mer, il doit être activé."
    },
    {
     "id": "B",
     "text": "ATIS sur la voie intérieure, ASN en mer avec un certificat SMDSM.",
     "correct": true,
     "explanation": "Le manuel impose l'ATIS en navigation fluviale et l'ASN en mer ; l'utilisation de l'ASN requiert un certificat SMDSM."
    },
    {
     "id": "C",
     "text": "Activer l'ASN dès la voie intérieure, pour être prêt en cas de détresse.",
     "correct": false,
     "explanation": "L'utilisation de l'ASN est interdite sur les voies de navigation intérieure."
    },
    {
     "id": "D",
     "text": "Activer l'ASN en mer avec le seul certificat restreint VHF, sans autre certificat.",
     "correct": false,
     "explanation": "Pour les stations équipées du SMDSM, d'autres certificats sont nécessaires (SRC, LRC, ROC ou GOC)."
    }
   ],
   "answer": "B",
   "explanation": "L'appareil doit être réglé selon la zone de navigation : en navigation fluviale l'ATIS doit être activé, en mer l'ASN. L'ASN est interdit sur les voies intérieures, et son utilisation exige un certificat SMDSM (SRC, LRC, ROC ou GOC).",
   "sources": [
    {
     "page": 35,
     "quote": "L'appareil doit être réglé correctement en fonction de la zone dans laquelle on navigue. Pour la navigation fluviale, l'ATIS doit être activé. En mer, l'ASN doit être activé."
    },
    {
     "page": 35,
     "quote": "Pour l’utilisation de stations de radiotéléphonie équipées du SMDSM, d’autres certificats sont nécessaires (SRC, LRC, ROC ou GOC)."
    },
    {
     "page": 32,
     "quote": "Rappel : L’utilisation de l’ASN est interdite sur les voies de navigation intérieure."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R044",
   "category": "navigation-interieure",
   "difficulty": "moyen",
   "reasoning_type": "discrimination",
   "question": "Sur une voie intérieure, un patron contacte par radio les autorités d'un port intérieur pour se faire attribuer une aire de stationnement. De quel type de communication s'agit-il, et avec quel mode d'exploitation ?",
   "choices": [
    {
     "id": "A",
     "text": "Informations nautiques, en duplex ou semi-duplex.",
     "correct": false,
     "explanation": "Les informations nautiques concernent les autorités chargées de l'exploitation des voies navigables (état des voies, orientation du trafic), pas l'attribution d'aires de stationnement dans un port."
    },
    {
     "id": "B",
     "text": "Bateau-bateau (intership), en simplex.",
     "correct": false,
     "explanation": "Les communications intership relient des stations de bateau entre elles, pas un bateau et une autorité portuaire."
    },
    {
     "id": "C",
     "text": "Bateau-autorités portuaires, en simplex.",
     "correct": true,
     "explanation": "L'attribution d'aires de stationnement est l'exemple type des communications bateau-autorités portuaires, exploitées en simplex avec réduction automatique de la puissance à 1 W maximum."
    },
    {
     "id": "D",
     "text": "Correspondance publique, en duplex.",
     "correct": false,
     "explanation": "La correspondance publique relie les navires aux réseaux de télécommunications publics, pas aux autorités portuaires."
    }
   ],
   "answer": "C",
   "explanation": "Le manuel décrit les communications bateau-autorités portuaires comme des liaisons entre stations de bateau et stations terrestres des autorités portuaires, par exemple pour l'attribution d'aires de stationnement. Leur mode d'exploitation est le simplex, avec réduction automatique de la puissance à 1 watt maximum. Les informations nautiques concernent d'autres autorités et un autre objet.",
   "sources": [
    {
     "page": 32,
     "quote": "Établissement de liaisons de radiocommunications entre les stations de bateau et les stations terrestres des autorités portuaires, par exemple pour l’attribution d’aires de stationnement ou pour la navigation dans les ports."
    },
    {
     "page": 32,
     "quote": "Simplex. Réduction automatique de la puissance d’émission à maximum 1 watt."
    },
    {
     "page": 31,
     "quote": "Établissement de liaisons de radiocommunications entre les stations de bateau et les stations terrestres des autorités chargées de l’exploitation des voies navigables, par exemple pour l'échange d'informations sur l'état des voies navigables, le conseil et l’orientation du trafic."
    },
    {
     "page": 37,
     "quote": "Radiocommunications échangées entre les stations de navire et les réseaux de télécommunications publics nationaux."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R045",
   "category": "glossaire",
   "difficulty": "moyen",
   "reasoning_type": "discrimination",
   "question": "En Suisse, une centrale reçoit les appels de la navigation, y compris les appels de détresse, informe les bateaux sur la situation de la voie navigable et peut guider le trafic. Selon le glossaire du manuel, comment s'appelle-t-elle ?",
   "choices": [
    {
     "id": "A",
     "text": "Un poste de trafic.",
     "correct": true,
     "explanation": "Le poste de trafic est défini comme une centrale aux Pays-Bas et en Suisse qui reçoit les appels (y compris de détresse), informe sur la situation de la voie navigable et peut guider le trafic."
    },
    {
     "id": "B",
     "text": "Un centre de trafic.",
     "correct": false,
     "explanation": "Le glossaire définit le centre de trafic comme un centre qui réceptionne notamment les appels provenant de la navigation maritime."
    },
    {
     "id": "C",
     "text": "Un MRCC.",
     "correct": false,
     "explanation": "Le MRCC est le centre de coordination et de sauvetage maritimes, comme celui d'Ostende pour les incidents en mer."
    },
    {
     "id": "D",
     "text": "Une station de navire.",
     "correct": false,
     "explanation": "Une station de navire est une station mobile à bord d'un navire non amarré en permanence, pas une centrale à terre."
    }
   ],
   "answer": "A",
   "explanation": "Le glossaire distingue le centre de trafic, qui réceptionne les appels de la navigation maritime, et le poste de trafic, une centrale aux Pays-Bas et en Suisse. Ce dernier reçoit les appels de la navigation, y compris de détresse, informe sur la situation de la voie navigable et peut guider le trafic. La description correspond au poste de trafic.",
   "sources": [
    {
     "page": 38,
     "quote": "Centrale aux Pays-Bas et en Suisse qui réceptionne notamment les appels provenant de la navigation (par exemple, les appels de détresse) et qui informe la navigation sur la situation de la voie navigable. Le trafic peut aussi être guidé par le poste de trafic."
    },
    {
     "page": 38,
     "quote": "Centre qui réceptionne notamment les appels provenant de la navigation maritime."
    },
    {
     "page": 27,
     "quote": "Le Centre de coordination et de sauvetage maritimes (MRCC) à Ostende est le premier point de contact pour tous les incidents en mer."
    },
    {
     "page": 38,
     "quote": "Station de radiotéléphonie mobile pour la navigation intérieure ou maritime qui se trouve à bord d'un navire non amarré en permanence."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R046",
   "category": "glossaire",
   "difficulty": "moyen",
   "reasoning_type": "discrimination",
   "question": "Un technicien mesure 25 W avec un wattmètre branché directement à la sortie de la VHF, avant le câble. Un collègue s'intéresse plutôt à la puissance effectivement émise par l'antenne. Quels termes du glossaire désignent respectivement ces deux grandeurs ?",
   "choices": [
    {
     "id": "A",
     "text": "Puissance à la sortie de l'émetteur, puis puissance apparente rayonnée.",
     "correct": true,
     "explanation": "Le glossaire définit la puissance à la sortie de l'émetteur comme celle mesurée à la sortie de l'émetteur, et la puissance apparente rayonnée comme celle émise par l'antenne."
    },
    {
     "id": "B",
     "text": "Puissance apparente rayonnée, puis puissance à la sortie de l'émetteur.",
     "correct": false,
     "explanation": "C'est l'inverse : la mesure à la sortie de l'appareil est la puissance à la sortie de l'émetteur, et la puissance émise par l'antenne est la puissance apparente rayonnée."
    },
    {
     "id": "C",
     "text": "Puissance à la sortie de l'émetteur dans les deux cas.",
     "correct": false,
     "explanation": "La puissance émise par l'antenne a son propre terme : la puissance apparente rayonnée."
    },
    {
     "id": "D",
     "text": "Puissance élevée (HI), puis puissance faible (LO).",
     "correct": false,
     "explanation": "HI et LO sont des réglages de l'appareil, pas des grandeurs mesurées à des endroits différents."
    }
   ],
   "answer": "A",
   "explanation": "Glossaire : la « puissance à la sortie de l'émetteur » est mesurée à la sortie de l'émetteur, ce qui correspond au wattmètre placé avant le câble. La « puissance apparente rayonnée » est la puissance émise par l'antenne.",
   "sources": [
    {
     "page": 38,
     "quote": "Puissance de l'émetteur mesurée à la sortie de l’émetteur."
    },
    {
     "page": 38,
     "quote": "La puissance émise par l'antenne."
    },
    {
     "page": 11,
     "quote": "Elle peut être réglée à l’aide du bouton « HI/LO » sur l’appareil."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R047",
   "category": "glossaire",
   "difficulty": "moyen",
   "reasoning_type": "discrimination",
   "question": "Dans un convoi poussé, le patron du pousseur donne par radio à un matelot sur la barge de tête des instructions pour la manœuvre des aussières et l'amarrage. De quel type de radiocommunication s'agit-il selon le glossaire ?",
   "choices": [
    {
     "id": "A",
     "text": "De radiocommunications navire-navire (intership), puisque deux bateaux sont concernés.",
     "correct": false,
     "explanation": "Les communications au sein d'un groupe de bateaux remorqués ou poussés sont expressément rangées dans les radiocommunications de bord."
    },
    {
     "id": "B",
     "text": "De radiocommunications d'informations nautiques.",
     "correct": false,
     "explanation": "Les informations nautiques relient les bateaux aux stations des autorités compétentes pour les voies de navigation intérieure."
    },
    {
     "id": "C",
     "text": "De radiocommunications de bord (intraship).",
     "correct": true,
     "explanation": "Le glossaire range dans l'intraship les communications au sein d'un groupe de bateaux remorqués ou poussés, et celles qui concernent la manœuvre des aussières et l'amarrage."
    },
    {
     "id": "D",
     "text": "De radiocommunications bateau-autorités portuaires.",
     "correct": false,
     "explanation": "Aucune autorité portuaire n'intervient ici ; il s'agit d'une communication interne au convoi."
    }
   ],
   "answer": "C",
   "explanation": "Le glossaire définit les radiocommunications de bord (intraship) comme celles échangées à bord d'un bateau ou au sein d'un groupe de bateaux remorqués ou poussés, y compris les instructions pour la manœuvre des aussières et l'amarrage. Bien que deux bateaux soient physiquement concernés, le convoi poussé relève donc de l'intraship.",
   "sources": [
    {
     "page": 36,
     "quote": "Radiocommunications échangées à bord d'un bateau ou radiocommunications échangées au sein d'un groupe de bateaux, remorqués ou poussés, ainsi que celles concernant les instructions relatives à la manœuvre des aussières et à l'amarrage."
    },
    {
     "page": 37,
     "quote": "Liaisons de radiocommunications entre les stations de bateau et les stations des autorités qui sont compétentes pour les services sur les voies de navigation intérieure."
    }
   ],
   "kind": "raisonnement"
  },
  {
   "id": "R048",
   "category": "glossaire",
   "difficulty": "moyen",
   "reasoning_type": "application_regle",
   "question": "Une péniche-logement est amarrée en permanence à un quai et dispose d'une installation VHF. Selon la définition du glossaire, cette installation est-elle une « station de navire » ?",
   "choices": [
    {
     "id": "A",
     "text": "Non, car la définition vise une station à bord d'un navire non amarré en permanence.",
     "correct": true,
     "explanation": "La station de navire est une station mobile à bord d'un navire non amarré en permanence ; la péniche-logement amarrée en permanence ne remplit pas cette condition."
    },
    {
     "id": "B",
     "text": "Oui, toute station de radiotéléphonie installée à bord d'un bateau est une station de navire.",
     "correct": false,
     "explanation": "La définition ajoute une condition : le navire ne doit pas être amarré en permanence."
    },
    {
     "id": "C",
     "text": "Non, car une station de navire doit être fixe et non mobile.",
     "correct": false,
     "explanation": "La définition parle au contraire d'une station de radiotéléphonie mobile."
    },
    {
     "id": "D",
     "text": "Oui, dès lors qu'elle dispose d'un indicatif d'appel.",
     "correct": false,
     "explanation": "L'indicatif d'appel n'entre pas dans la définition de la station de navire ; c'est l'amarrage permanent qui exclut la qualification."
    }
   ],
   "answer": "A",
   "explanation": "Le glossaire définit la station de navire comme une station de radiotéléphonie mobile, pour la navigation intérieure ou maritime, qui se trouve à bord d'un navire non amarré en permanence. Une péniche-logement amarrée en permanence ne remplit pas ce critère.",
   "sources": [
    {
     "page": 38,
     "quote": "Station de radiotéléphonie mobile pour la navigation intérieure ou maritime qui se trouve à bord d'un navire non amarré en permanence."
    }
   ],
   "kind": "raisonnement"
  }
 ]
};
