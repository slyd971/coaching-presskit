import type { CoachBranding } from "@/lib/branding";

export type CtaLink = {
  label: string;
  href: string;
};

export type HeroStat = {
  value: string;
  label: string;
};

export type Offer = {
  name: string;
  audience: string;
  price: string;
  description: string;
  features: string[];
  cta: CtaLink;
  highlight?: string;
};

export type Transformation = {
  name: string;
  metric: string;
  timeframe: string;
  quote: string;
  imageBefore?: string;
  imageAfter?: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  result: string;
};

export type SocialLink = {
  label: string;
  handle: string;
  href: string;
  metric: string;
};

export type VideoItem = {
  id: string;
  title: string;
  subtitle?: string;
  type: "local" | "youtube" | "vimeo" | "embed";
  src?: string;
  embedUrl?: string;
  thumbnail?: string;
  featured?: boolean;
  duration?: string;
  category?: string;
  autoplayPreview?: boolean;
};

export type CoachData = {
  identity: {
    name: string;
    title: string;
    location: string;
    tagline: string;
    labels: string[];
  };
  branding: CoachBranding;
  hero: {
    variant: "image" | "video";
    badge?: string;
    title: string;
    subtitle: string;
    primaryCta: CtaLink;
    secondaryCta?: CtaLink;
    image?: string;
    video?: VideoItem;
    stats: HeroStat[];
  };
  stats: HeroStat[];
  story: {
    eyebrow: string;
    title: string;
    summary: string;
    paragraphs: string[];
    highlights: string[];
    portrait?: string;
  };
  method: {
    title: string;
    subtitle: string;
    pillars: Array<{
      title: string;
      description: string;
      tag: string;
    }>;
  };
  offers: {
    title: string;
    subtitle: string;
    items: Offer[];
  };
  transformations: {
    title: string;
    subtitle: string;
    items: Transformation[];
  };
  videos: {
    enabled?: boolean;
    title: string;
    subtitle: string;
    items: VideoItem[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Testimonial[];
  };
  socialLinks: {
    title: string;
    subtitle: string;
    items: SocialLink[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  cta: {
    title: string;
    body: string;
    primary: CtaLink;
    secondary?: CtaLink;
  };
  contact: {
    title: string;
    subtitle: string;
    email?: string;
    phone?: string;
    instagram?: string;
    website?: string;
    availability?: string;
  };
  gallery: string[];
  sections?: Partial<Record<
    | "socialProof"
    | "about"
    | "method"
    | "offers"
    | "results"
    | "videos"
    | "testimonials"
    | "social"
    | "faq"
    | "cta"
    | "contact",
    boolean
  >>;
};

export const coachData: CoachData = {
  identity: {
    name: "Matteo Renaud",
    title: "Coach transformation, force & recomposition",
    location: "Paris 8e / Coaching privé & hybride",
    tagline: "Retrouver une ligne athlétique et une discipline durable.",
    labels: ["Coaching privé", "Transformation corporelle", "Suivi nutrition"],
  },
  branding: {
    primary: "#f3c56b",
    secondary: "#8a6cff",
    accent: "#73f0c2",
    background: "#090909",
    surface: "rgba(255,255,255,0.06)",
    surfaceStrong: "rgba(255,255,255,0.12)",
    text: "#f6f1e8",
    mutedText: "rgba(246,241,232,0.7)",
    border: "rgba(255,255,255,0.12)",
    glow: "rgba(243,197,107,0.25)",
    gradientStart: "#161616",
    gradientEnd: "#0b0d14",
  },
  hero: {
    variant: "video",
    badge: "Coaching privé pour profils exigeants",
    title: "Un corps plus sec, plus fort, plus stable en 90 jours.",
    subtitle:
      "J'accompagne des entrepreneurs, dirigeants et indépendants qui veulent transformer leur physique avec un cadre précis, un suivi réel et une méthode tenable.",
    primaryCta: {
      label: "Réserver un appel découverte",
      href: "mailto:matteo@renaud-conditioning.com",
    },
    secondaryCta: {
      label: "Voir les transformations",
      href: "#results",
    },
    image: "/images/hero-main.jpg",
    video: {
      id: "hero-reel",
      title: "Matteo en séance",
      subtitle: "Coaching privé, démonstrations et accompagnement terrain",
      type: "local",
      src: "/videos/coaching-1.mp4",
      thumbnail: "/images/hero-main.jpg",
      featured: true,
      autoplayPreview: true,
    },
    stats: [
      { value: "140+", label: "clients accompagnés" },
      { value: "9 ans", label: "de coaching terrain" },
      { value: "94%", label: "de suivi poursuivi au-dela de 3 mois" },
    ],
  },
  stats: [
    { value: "4,9/5", label: "avis clients verifiés" },
    { value: "1:1", label: "niveau de suivi" },
    { value: "24h", label: "retour max aux check-ins" },
    { value: "3", label: "formats de coaching" },
  ],
  story: {
    eyebrow: "A propos",
    title: "Un coaching construit pour ceux qui n'ont plus le temps d'improviser.",
    summary:
      "Ancien rugbyman puis préparateur physique en studio privé, Matteo a construit une méthode pensée pour les agendas chargés et les objectifs esthétiques sérieux.",
    paragraphs: [
      "Pendant plusieurs années, Matteo a accompagné des chefs d'entreprise, avocats, consultants et créateurs qui voulaient enfin sortir du cycle motivation, relachement, reprise. Son travail consiste a remettre de la structure sans rendre la transformation envahissante.",
      "Chaque programme repose sur des standards simples, une execution propre et une lecture fine du quotidien du client. L'objectif n'est pas seulement de perdre du gras ou reprendre du muscle, mais de retrouver une sensation nette de controle et d'elan.",
    ],
    highlights: [
      "Bilan initial complet : habitudes, niveau physique, contraintes et objectifs",
      "Programmation entrainement + nutrition adaptee au rythme de vie reel",
      "Suivi chaque semaine avec retours, ajustements et priorites claires",
    ],
    portrait: "/images/coach-portrait.jpg",
  },
  method: {
    title: "Une methode simple, exigeante et suffisamment claire pour tenir dans la vraie vie.",
    subtitle:
      "Le coaching repose sur trois piliers : clarifier, executer, ajuster. Pas de surcharge, pas de gadget, pas d'effet sprint sans lendemain.",
    pillars: [
      {
        tag: "01",
        title: "Clarifier",
        description:
          "On fixe des objectifs lisibles, un cadre nutritionnel tenable et un rythme d'entrainement compatible avec ton agenda.",
      },
      {
        tag: "02",
        title: "Executer",
        description:
          "Chaque seance a une intention claire. Tu sais quoi faire, comment progresser et ou mettre l'effort pour des resultats visibles.",
      },
      {
        tag: "03",
        title: "Ajuster",
        description:
          "Les check-ins servent a corriger vite, maintenir l'adherence et continuer a avancer meme quand les semaines deviennent chargees.",
      },
    ],
  },
  offers: {
    title: "Trois formats d'accompagnement selon ton niveau d'engagement et de disponibilite.",
    subtitle:
      "Le fond reste le meme : un cadre clair, du suivi et une progression visible. Ce qui change, c'est la proximite du coaching.",
    items: [
      {
        name: "Reset 6 semaines",
        audience: "Reprise en main rapide",
        price: "690 EUR",
        description:
          "Pour repartir sur des bases propres, retrouver du rythme et relancer rapidement la silhouette et l'energie.",
        features: [
          "Programme sur 6 semaines",
          "Cadre nutrition simple",
          "1 point d'ajustement par semaine",
        ],
        cta: {
          label: "Postuler",
          href: "mailto:matteo@renaud-conditioning.com?subject=Reset%206%20semaines",
        },
      },
      {
        name: "Transformation Signature",
        audience: "Accompagnement prive 1:1",
        price: "1 490 EUR / mois",
        description:
          "Le format le plus complet pour une recomposition physique visible avec pilotage serre, corrections et suivi continu.",
        features: [
          "Programmation sur mesure",
          "Suivi nutrition + feedback video",
          "Check-ins et ajustements continus",
        ],
        cta: {
          label: "Reserver un appel",
          href: "mailto:matteo@renaud-conditioning.com?subject=Transformation%20Signature",
        },
        highlight: "Le plus choisi",
      },
      {
        name: "Executive Conditioning",
        audience: "Dirigeants et emplois du temps charges",
        price: "Sur candidature",
        description:
          "Pour retrouver de l'energie, de la posture et une condition physique solide sans alourdir davantage des semaines deja intenses.",
        features: [
          "Organisation hybride salle / hotel / deplacement",
          "Focus recuperation, sommeil et adherence",
          "Acces direct a Matteo",
        ],
        cta: {
          label: "En discuter",
          href: "mailto:matteo@renaud-conditioning.com?subject=Executive%20Conditioning",
        },
      },
    ],
  },
  transformations: {
    title: "Des transformations concretes, visibles et surtout tenues dans le temps.",
    subtitle:
      "Chaque progression combine evolution physique, regain d'energie et retour a une routine stable.",
    items: [
      {
        name: "Hugo, 37 ans",
        metric: "-11 kg et posture complètement relancée",
        timeframe: "16 semaines",
        quote:
          "J'ai arrete de repartir de zero tous les quinze jours. Tout etait plus simple a suivre.",
        imageBefore: "/images/result-hugo-before.jpg",
        imageAfter: "/images/result-hugo-after.jpg",
      },
      {
        name: "Sarah, 31 ans",
        metric: "Silhouette redessinée + énergie stable",
        timeframe: "12 semaines",
        quote:
          "Je savais enfin quoi faire chaque semaine, meme pendant les periodes de rush.",
        imageBefore: "/images/result-sarah-before.jpg",
        imageAfter: "/images/result-sarah-after.jpg",
      },
      {
        name: "Mehdi, 42 ans",
        metric: "+5 kg de masse maigre et niveau physique retrouvé",
        timeframe: "20 semaines",
        quote:
          "Le coaching m'a redonne de la structure, pas seulement a la salle mais dans mon quotidien.",
        imageBefore: "/images/result-mehdi-before.jpg",
        imageAfter: "/images/result-mehdi-after.jpg",
      },
    ],
  },
  videos: {
    enabled: true,
    title: "Trois apercus du terrain, du coaching et de l'intensite des seances.",
    subtitle:
      "Des extraits courts pour comprendre le ton des seances, la qualite des consignes et le niveau d'exigence du suivi.",
    items: [
      {
        id: "v1",
        title: "Session force bas du corps",
        subtitle: "Travail de force, placements et intensite sur la seance",
        type: "local",
        src: "/videos/coaching-1.mp4",
        thumbnail: "/images/video-lower-body.jpg",
        duration: "01:24",
        category: "Training",
      },
      {
        id: "v2",
        title: "Analyse technique squat",
        subtitle: "Corrections de posture, amplitude et rythme d'execution",
        type: "local",
        src: "/videos/coaching-1.mp4",
        thumbnail: "/images/video-squat.jpg",
        duration: "03:12",
        category: "Coaching",
      },
      {
        id: "v3",
        title: "Circuit conditioning client",
        subtitle: "Bloc cardio-metabolique, relances et gestion de l'effort",
        type: "local",
        src: "/videos/coaching-1.mp4",
        thumbnail: "/images/video-conditioning.jpg",
        duration: "00:58",
        category: "Conditioning",
      },
    ],
  },
  testimonials: {
    title: "Ce que disent les clients une fois le cadre en place.",
    subtitle:
      "Quelques retours de clients qui cherchaient un coaching plus serieux, plus clair et plus durable.",
    items: [
      {
        name: "Lucie M.",
        role: "Fondatrice de studio creatif",
        quote:
          "Je voulais retrouver une silhouette nette sans y passer ma vie. Le coaching a ete exigeant mais tres lisible.",
        result: "-8 kg en 10 semaines",
      },
      {
        name: "Arthur T.",
        role: "CEO SaaS",
        quote:
          "J'avais besoin d'un systeme, pas d'un coup de boost. Matteo m'a donne ce cadre.",
        result: "+4 séances régulières par semaine maintenues sur 5 mois",
      },
      {
        name: "Ines D.",
        role: "Consultante independante",
        quote:
          "Le niveau de detail change tout. Je me sentais suivie de pres sans avoir l'impression d'etre surchargee.",
        result: "Tour de taille -9 cm",
      },
    ],
  },
  socialLinks: {
    title: "Contenus, presence en ligne et signaux de confiance.",
    subtitle:
      "Matteo partage des conseils concrets, des extraits de seances et des points de progression de ses clients au fil des semaines.",
    items: [
      {
        label: "Instagram",
        handle: "@matteo.renaud.coaching",
        href: "https://instagram.com",
        metric: "42k abonnes",
      },
      {
        label: "YouTube",
        handle: "Matteo Renaud Coaching",
        href: "https://youtube.com",
        metric: "95k vues / mois",
      },
      {
        label: "LinkedIn",
        handle: "Matteo Renaud",
        href: "https://linkedin.com",
        metric: "Audience dirigeante et cadres",
      },
    ],
  },
  faq: {
    title: "Questions fréquentes",
    subtitle:
      "Les questions qui reviennent le plus souvent avant de rejoindre l'accompagnement.",
    items: [
      {
        question: "Le coaching se fait-il uniquement en presentiel ?",
        answer:
          "Non. La majorite des clients sont suivis en format hybride avec une partie en salle et une partie a distance selon le planning et le lieu de vie.",
      },
      {
        question: "Faut-il deja avoir un bon niveau pour commencer ?",
        answer:
          "Pas du tout. Le coaching s'adresse autant aux personnes en reprise qu'aux profils deja reguliers qui veulent franchir un cap sans se disperser.",
      },
      {
        question: "Combien de temps faut-il pour voir des resultats ?",
        answer:
          "Les premiers changements se voient souvent dans les trois a quatre premieres semaines si le cadre est respecte. Les transformations les plus nettes se construisent ensuite sur 12 semaines et plus.",
      },
    ],
  },
  cta: {
    title: "Si tu veux reprendre le controle de ton physique, on peut en parler serieusement.",
    body:
      "L'appel permet de faire le point sur ton objectif, ton niveau actuel, ce qui te bloque aujourd'hui et le format d'accompagnement le plus adapte.",
    primary: {
      label: "Demander un appel",
      href: "mailto:matteo@renaud-conditioning.com",
    },
    secondary: {
      label: "Voir Instagram",
      href: "https://instagram.com",
    },
  },
  contact: {
    title: "Contact",
    subtitle:
      "Pour une candidature, un appel decouverte ou une demande de coaching prive a Paris.",
    email: "matteo@renaud-conditioning.com",
    phone: "+33 6 12 34 56 78",
    instagram: "@matteo.renaud.coaching",
    website: "https://renaud-conditioning.com",
    availability: "Candidatures ouvertes pour les demarrages de mai",
  },
  gallery: [
    "/images/hero-right-photo.jpg",
    "/images/gallery-02.jpg",
    "/images/gallery-03.jpg",
  ],
  sections: {
    socialProof: true,
    about: true,
    method: true,
    offers: true,
    results: true,
    videos: true,
    testimonials: true,
    social: true,
    faq: true,
    cta: true,
    contact: true,
  },
};
