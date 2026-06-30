/** Central business config — single source of truth for NAP, SEO, assets, and schema. */

export type BusinessAddress = {
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
  postalCode?: string;
  streetAddress?: string;
};

export type BusinessAssets = {
  hero: string;
  logo: string;
  about: string;
  gallery: [string, string, string, string, string, string];
};

export type OpeningHoursSpec = {
  dayOfWeek: string[];
  opens: string;
  closes: string;
};

export type BusinessConfig = {
  businessName: string;
  alternateName: string;
  tagline: string;
  gbpCategory: string;
  phone: string;
  phoneDisplay: string;
  phoneLocal: string;
  /** Set to enable client-side tracking number swap; null = canonical everywhere */
  trackingPhone: string | null;
  trackingPhoneLocal: string | null;
  email: string;
  siteUrl: string;
  facebookUrl: string;
  googleMapsUrl: string;
  whatsappUrl: string | null;
  primaryCity: string;
  secondaryCity: string;
  region: string;
  geoRegion: string;
  address: BusinessAddress;
  mapCenter: [number, number];
  serviceAreaPolygon: [number, number][];
  assets: BusinessAssets;
  serviceTypes: string[];
  openingHours: OpeningHoursSpec[];
  /** Google Analytics measurement ID — empty string to disable */
  googleAnalyticsId: string;
  /** Google Ads conversion ID — empty string to disable */
  googleAdsId: string;
};

export const business: BusinessConfig = {
  businessName: "Central Scotland Fencing",
  alternateName: "Central Scotland Fencing",
  tagline: "Expert fencing installation and repairs across Central Scotland. Free quotes.",
  gbpCategory: "Fencing Contractor",

  phone: "+447454033896",
  phoneDisplay: "+44 7454 033896",
  phoneLocal: "07454 033896",
  trackingPhone: null,
  trackingPhoneLocal: null,

  email: "central.maintenance25@gmail.com",
  siteUrl: "https://www.centralscotlandfencing.co.uk",
  facebookUrl: "https://www.facebook.com/share/1MXd1zuNVt/",
  googleMapsUrl: "https://www.google.com/maps?q=56.00740000,-3.75332000",
  whatsappUrl: null,

  primaryCity: "Falkirk",
  secondaryCity: "Stirling",
  region: "Central Scotland",
  geoRegion: "GB-SCT",

  address: {
    streetAddress: "Falkirk Road",
    addressLocality: "Falkirk",
    addressRegion: "Central Scotland",
    addressCountry: "GB",
    postalCode: "FK2 9",
  },

  mapCenter: [56.0074, -3.7533],
  serviceAreaPolygon: [
    [56.16, -3.95],
    [56.16, -3.59],
    [55.97, -3.59],
    [55.97, -3.95],
    [56.16, -3.95],
  ],

  assets: {
    hero: "/central-scotland-fencing-hero.jpg",
    logo: "/central-scotland-fencing-logo.png",
    about: "/central-scotland-fencing-about.jpg",
    gallery: [
      "/central-scotland-fencing-gal-01.jpg",
      "/central-scotland-fencing-gal-02.jpg",
      "/central-scotland-fencing-gal-03.jpg",
      "/central-scotland-fencing-gal-04.jpg",
      "/central-scotland-fencing-gal-05.jpg",
      "/central-scotland-fencing-gal-06.jpg",
    ],
  },

  serviceTypes: [
    "Timber panel fencing installation",
    "Slatted and close-board fencing",
    "Palisade and security fencing",
    "Bespoke gate installation",
    "Fence removal and disposal",
    "Fence repairs and replacement sections",
    "Free quotes",
  ],

  openingHours: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],

  googleAnalyticsId: "",
  googleAdsId: "",
};

export const SITE_URL = business.siteUrl;

export const absoluteUrl = (path = ""): string => {
  if (!path) return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

export const truncateMeta = (text: string, maxLength = 155): string => {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxLength) return cleaned;
  return `${cleaned.slice(0, maxLength - 1).replace(/[\s,.;:-]+$/, "")}…`;
};

export const brandName = () => business.alternateName;

export const citiesLabel = () => `${business.primaryCity} & ${business.secondaryCity}`;

export const homepageTitle = () =>
  `${business.alternateName} | Fencing Services in ${citiesLabel()}`;

export const homepageDescription = () =>
  truncateMeta(
    `${business.alternateName} provides expert fencing installation and repairs across ${citiesLabel()} and ${business.region}. Timber panels, gates, palisade fencing and more. Free quotes.`,
  );

export const homepageH1 = () => `Fencing Services in ${citiesLabel()}`;

export const defaultKeywords = () =>
  `fencing ${business.primaryCity}, fencing contractor ${business.secondaryCity}, ${business.alternateName}, free quote`;

export const defaultOgImageAlt = () =>
  `${business.alternateName} fencing services in ${citiesLabel()}`;

export const schemaImages = (): string[] => [
  absoluteUrl(business.assets.logo),
  absoluteUrl(business.assets.hero),
  absoluteUrl(business.assets.about),
  ...business.assets.gallery.map((path) => absoluteUrl(path)),
];
