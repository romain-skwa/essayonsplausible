const felines = [
  {
    slug: "lion",
    name: "Lion",
    headline: "Le lion, figure emblématique des grandes plaines africaines",
    teaser:
      "Le lion vit en groupe, chasse souvent en coordination et reste l'un des félins les plus observés dans les savanes.",
    habitat: "Savanes, prairies ouvertes et zones semi-arides d'Afrique.",
    facts: [
      "Le lion est l'un des rares félins vraiment sociaux.",
      "Une troupe regroupe souvent plusieurs femelles apparentées.",
      "Le rugissement d'un lion peut porter sur plusieurs kilomètres.",
    ],
    sections: [
      "Le lion passe une grande partie de la journée à se reposer, surtout pendant les heures les plus chaudes. Son activité augmente souvent au lever et au coucher du soleil.",
      "Dans une troupe, les lionnes assurent l'essentiel de la chasse, tandis que les mâles défendent le territoire contre les rivaux.",
    ],
  },
  {
    slug: "tigre",
    name: "Tigre",
    headline: "Le tigre, un chasseur solitaire des forêts et des marais",
    teaser:
      "Le tigre est le plus grand des félins actuels. Il évolue seul sur de vastes territoires où il avance avec discrétion.",
    habitat: "Forêts tropicales, mangroves, zones boisées et herbes hautes d'Asie.",
    facts: [
      "Chaque tigre possède un motif de rayures unique.",
      "Le tigre nage volontiers et traverse parfois de longues distances dans l'eau.",
      "Il chasse surtout à l'affût, avec une attaque brève et puissante.",
    ],
    sections: [
      "Contrairement au lion, le tigre mène une vie solitaire. Il marque son territoire et évite autant que possible les confrontations inutiles.",
      "Sa puissance lui permet de capturer de grandes proies, mais ses tentatives de chasse ne réussissent pas à chaque fois.",
    ],
  },
  {
    slug: "jaguar",
    name: "Jaguar",
    headline: "Le jaguar, prédateur massif des forêts d'Amérique",
    teaser:
      "Le jaguar est compact, musclé et parfaitement adapté aux milieux denses. Il combine discrétion, force et aisance dans l'eau.",
    habitat: "Forêts tropicales, zones humides et bords de rivières d'Amérique latine.",
    facts: [
      "Le jaguar est un excellent nageur.",
      "Sa mâchoire est particulièrement puissante pour un félin.",
      "Il fréquente volontiers les zones proches de l'eau.",
    ],
    sections: [
      "Le pelage du jaguar présente des rosettes sombres, souvent plus larges que celles du léopard. Cette robe lui offre un camouflage efficace dans les forêts.",
      "Il peut chasser aussi bien au sol que près des rivières, où il profite d'une grande variété de proies.",
    ],
  },
  {
    slug: "puma",
    name: "Puma",
    headline: "Le puma, un félin adaptable présent dans des milieux variés",
    teaser:
      "Le puma n'a ni rayures ni rosettes à l'âge adulte, mais il compense par une remarquable capacité d'adaptation à des environnements très différents.",
    habitat:
      "Montagnes, forêts, déserts et zones broussailleuses des Amériques.",
    facts: [
      "Le puma peut vivre dans des environnements très contrastés.",
      "Il est capable de bonds impressionnants.",
      "Son pelage uniforme favorise la discrétion dans de nombreux paysages.",
    ],
    sections: [
      "Le puma possède une large répartition géographique. On le rencontre depuis le Canada jusqu'au sud de l'Amérique du Sud.",
      "Souple et opportuniste, il adapte ses déplacements et ses habitudes de chasse aux ressources disponibles autour de lui.",
    ],
  },
  {
    slug: "leopard",
    name: "Léopard",
    headline: "Le léopard, un maître du camouflage et de l'agilité",
    teaser:
      "Le léopard se distingue par son élégance, sa souplesse et sa faculté à évoluer aussi bien au sol que dans les arbres.",
    habitat: "Forêts, savanes, zones rocheuses et régions broussailleuses d'Afrique et d'Asie.",
    facts: [
      "Le léopard grimpe facilement aux arbres.",
      "Il peut mettre sa proie à l'abri en hauteur.",
      "Sa robe tachetée l'aide à se fondre dans des décors variés.",
    ],
    sections: [
      "Très discret, le léopard est souvent difficile à observer. Il privilégie les déplacements silencieux et les approches prudentes.",
      "Son adaptabilité explique sa présence dans des habitats très différents, depuis les savanes jusqu'aux zones plus boisées.",
    ],
  },
];

const articles = new Set(["le", "la", "les", "l"]);

export function normalizeAnimalQuery(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replaceAll(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replaceAll(/['’]/g, " ")
    .replaceAll(/[^a-z\s]/g, " ")
    .trim()
    .replaceAll(/\s+/g, " ");
}

export function stripLeadingArticle(value) {
  const words = normalizeAnimalQuery(value).split(" ").filter(Boolean);

  if (words.length > 1 && articles.has(words[0])) {
    return words.slice(1).join(" ");
  }

  return words.join(" ");
}

export function findFelineByQuery(query) {
  const normalizedQuery = stripLeadingArticle(query);

  return (
    felines.find((feline) => stripLeadingArticle(feline.name) === normalizedQuery) ??
    null
  );
}

export function getFelineBySlug(slug) {
  return felines.find((feline) => feline.slug === slug) ?? null;
}

export { felines };
