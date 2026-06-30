import { business, brandName } from "@/data/business";
import { categories } from "@/data/categories";

export type LocationFaq = {
  question: string;
  answer: string;
};

export type LocationPage = {
  slug: string;
  name: string;
  shortName?: string;
  title: string;
  description: string;
  intro: string;
  nearby: string[];
  locationFaqs: LocationFaq[];
};

const brand = brandName();
const categoryNames = categories.map((c) => c.name).join(", ");

const makeLocationFaqs = (name: string): LocationFaq[] => [
  {
    question: `Do you cover fencing in ${name}?`,
    answer: `Yes. ${brand} provides ${categoryNames.toLowerCase()} in ${name} and nearby areas. Get in touch to confirm availability for your property.`,
  },
  {
    question: `What fencing services do you carry out in ${name}?`,
    answer: `${brand} helps customers in ${name} with ${categoryNames.toLowerCase()} and related fencing work.`,
  },
  {
    question: `How do I get a fencing quote in ${name}?`,
    answer: `Contact ${brand} by phone or through the contact form with a brief description of the fencing work and your location in ${name}. Photos are helpful. Free quotes are available.`,
  },
  {
    question: `Do you serve areas near ${name}?`,
    answer: `Yes. ${brand} covers ${name} and surrounding towns across ${business.region}. If you are nearby, get in touch and we can confirm coverage.`,
  },
  {
    question: `Is there a fencing contractor near ${name}?`,
    answer: `Yes. ${brand} is a local fencing contractor serving ${name} and nearby areas with free quotes across ${business.region}.`,
  },
];

const locationEntries = [
  {
    slug: "falkirk",
    name: "Falkirk",
    description: `${brand} provides fencing installation and repairs in Falkirk. Timber panels, gates, palisade fencing and fence removal from a trusted local contractor.`,
    intro: `For customers in Falkirk, ${brand} provides reliable fencing installation and repair work to a high standard with free quotes. From timber panel fences and bespoke gates to palisade security fencing, the team leaves every site clean and the customer satisfied.`,
    nearby: ["Larbert", "Grangemouth", "Polmont", "Bonnybridge"],
  },
  {
    slug: "stirling",
    name: "Stirling",
    description: `${brand} provides fencing services in Stirling and nearby areas. Timber fencing, gates, palisade and fence repairs with free quotes.`,
    intro: `${brand} helps homeowners and businesses in Stirling with expert fencing installation and repairs. Whether you need timber panels, a bespoke gate or palisade security fencing, the team provides free quotes and a clean, professional finish on every job.`,
    nearby: ["Bannockburn", "Bridge of Allan", "Alloa", "Larbert"],
  },
  {
    slug: "larbert",
    name: "Larbert",
    description: `Fencing installation and repairs in Larbert by ${brand}. Timber panels, gates and security fencing with free quotes.`,
    intro: `${brand} provides fencing services to customers in Larbert, covering timber panel installation, bespoke gates, palisade fencing and fence repairs. Free quotes and a clean finish on every job.`,
    nearby: ["Falkirk", "Stirling", "Stenhousemuir", "Grangemouth"],
  },
  {
    slug: "denny",
    name: "Denny",
    description: `${brand} provides fencing services in Denny. Timber panels, gates, security fencing and repairs with free quotes across the local area.`,
    intro: `Customers in Denny can rely on ${brand} for quality fencing installation and repairs. The team covers timber panel fencing, modern slatted designs, bespoke gates and fence removal.`,
    nearby: ["Falkirk", "Bonnybridge", "Stirling", "Larbert"],
  },
  {
    slug: "bonnybridge",
    name: "Bonnybridge",
    description: `Fencing installation and repairs in Bonnybridge by ${brand}. Timber panels, gates and palisade fencing with free quotes.`,
    intro: `${brand} installs and repairs fencing in Bonnybridge, covering timber panel fencing, slatted designs, gates and security fencing. Free quotes available with no obligation.`,
    nearby: ["Denny", "Falkirk", "Larbert", "Grangemouth"],
  },
  {
    slug: "polmont",
    name: "Polmont",
    description: `${brand} provides fencing services in Polmont. Timber panels, bespoke gates, palisade fencing and fence removal with free quotes.`,
    intro: `Homeowners and businesses in Polmont can get free fencing quotes from ${brand}. The team covers timber panel and slatted fence installation, bespoke gates and old fence removal.`,
    nearby: ["Falkirk", "Grangemouth", "Linlithgow", "Bonnybridge"],
  },
  {
    slug: "grangemouth",
    name: "Grangemouth",
    description: `Fencing services in Grangemouth by ${brand}. Domestic and commercial fencing, gates and palisade security fencing with free quotes.`,
    intro: `${brand} provides fencing installation and repairs in Grangemouth for both domestic and commercial customers. Services include timber panel fencing, palisade security fencing, bespoke gates and fence removal.`,
    nearby: ["Falkirk", "Polmont", "Larbert", "Bonnybridge"],
  },
  {
    slug: "linlithgow",
    name: "Linlithgow",
    description: `${brand} provides fencing services in Linlithgow. Timber panels, gates and security fencing with free quotes for homes and businesses.`,
    intro: `Customers in Linlithgow can arrange a free fencing quote from ${brand}. The team installs timber panel fencing, modern slatted designs, bespoke gates and palisade security fencing.`,
    nearby: ["Polmont", "Falkirk", "Bo'ness", "Grangemouth"],
  },
  {
    slug: "alloa",
    name: "Alloa",
    description: `Fencing installation and repairs in Alloa by ${brand}. Timber panels, gates, palisade fencing and fence removal with free quotes.`,
    intro: `${brand} covers Alloa for fencing installation and repairs, including timber panel fencing, slatted designs, bespoke gate installation and palisade security fencing. Free quotes available.`,
    nearby: ["Stirling", "Bannockburn", "Bridge of Allan", "Larbert"],
  },
  {
    slug: "bannockburn",
    name: "Bannockburn",
    description: `${brand} provides fencing services in Bannockburn. Timber panels, bespoke gates, security fencing and repairs with free quotes.`,
    intro: `Bannockburn customers can get a free fencing quote from ${brand}. Services include timber panel and close-board fencing, bespoke gates, palisade security fencing and old fence removal.`,
    nearby: ["Stirling", "Bridge of Allan", "Alloa", "Denny"],
  },
  {
    slug: "bridge-of-allan",
    name: "Bridge of Allan",
    description: `Fencing installation and repairs in Bridge of Allan by ${brand}. Timber panels, gates and security fencing with free quotes.`,
    intro: `${brand} provides fencing installation and repairs in Bridge of Allan for homes and businesses. From timber panel fencing to bespoke gates and palisade security fencing, all work comes with a free quote.`,
    nearby: ["Stirling", "Bannockburn", "Alloa", "Denny"],
  },
  {
    slug: "bo-ness",
    name: "Bo'ness",
    shortName: "Bo'ness",
    description: `Fencing services in Bo'ness by ${brand}. Timber panels, gates, palisade fencing and fence removal with free quotes.`,
    intro: `${brand} installs and repairs fencing in Bo'ness, covering timber panel fencing, slatted designs, bespoke gates and fence removal. Free quotes available for homes and businesses.`,
    nearby: ["Falkirk", "Grangemouth", "Linlithgow", "Polmont"],
  },
];

export const locations: LocationPage[] = locationEntries.map((location) => ({
  ...location,
  title: `Fencing Services in ${location.name} | ${brand}`,
  locationFaqs: makeLocationFaqs(location.name),
}));

export const getNearbyLocationLinks = (location: LocationPage) =>
  location.nearby
    .map((name) => locations.find((item) => item.name === name))
    .filter((item): item is LocationPage => Boolean(item));

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);
