import { services, type ServicePage } from "@/data/services";
import { business, brandName, citiesLabel } from "@/data/business";

export type LocationServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceCategory = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  localParagraph: string;
  image: string;
  imageAlt: string;
  serviceSlugs: string[];
  /** Matrix page SEO fields — used by locationServices.ts */
  matrixTitleSuffix: string;
  serviceNameLower: string;
  contractorPhrase: string;
  nearMePhrase: string;
  metaTemplate: (displayName: string) => string;
  introTemplate: (town: string) => string;
  localTemplate: (town: string, nearby: string[]) => string;
  bodyTemplate: (town: string) => string;
  faqTemplates: (town: string) => LocationServiceFaq[];
};

const brand = brandName();
const cities = citiesLabel();
const { assets, region } = business;

export const categories: ServiceCategory[] = [
  {
    slug: "timber-panel-fencing-falkirk-stirling",
    name: "Timber & Panel Fencing",
    title: `Timber & Panel Fencing in ${cities}`,
    description: `Timber panel and slatted fence installation across ${cities} and ${region}. Pressure-treated timber, close-board and modern slatted designs with free quotes.`,
    intro: `${brand} installs timber panel fencing, close-board fencing and modern slatted designs for homes and gardens across ${region}. All posts are dug to depth and set in concrete for long-lasting results, with pressure-treated timber used throughout for weather resistance.`,
    localParagraph: `Properties across ${cities} and the surrounding Central Belt towns benefit from quality timber fencing that stands up to Scottish weather. Whether you need a traditional 6ft panel fence for privacy or a contemporary slatted design, ${brand} works locally and can advise on the best option for your plot.`,
    image: assets.gallery[0],
    imageAlt: `Timber panel fence installed by ${brand} in ${business.primaryCity}`,
    serviceSlugs: ["timber-panel-fencing", "slatted-fence-installation"],
    matrixTitleSuffix: "Timber & Panel Fencing",
    serviceNameLower: "timber panel fencing",
    contractorPhrase: "fencing contractor",
    nearMePhrase: "fencing contractors near me",
    metaTemplate: (displayName) =>
      `Timber panel and slatted fencing in ${displayName} by ${brand}. Pressure-treated timber, close-board and modern designs. Free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} installs timber panel fencing and slatted designs in ${town}. Whether you need a new privacy fence, replacement panels or a full garden boundary, jobs are completed with posts dug to depth and pressure-treated timber throughout.`,
    localTemplate: (town, nearby) =>
      `Properties in ${town} often need fencing that can handle wind and rain from the Central Belt. If you are looking for a fencing contractor near ${town}, ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `From full fence installations to panel replacements, ${brand} helps customers in ${town} with timber fencing solutions that last. Old fencing can be removed and disposed of as part of the job. Contact ${brand} for a free quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you install timber fencing in ${town}?`,
        answer: `Yes. ${brand} installs timber panel and slatted fencing in ${town} and nearby areas. Free quotes are available.`,
      },
      {
        question: `Can you replace damaged fence panels in ${town}?`,
        answer: `Yes. ${brand} handles panel replacements and section repairs in ${town}. Send photos for a faster quote.`,
      },
      {
        question: `How do I get a fencing quote in ${town}?`,
        answer: `Call ${brand} or use the contact form with a brief description of the work and your location in ${town}. There is no obligation to proceed.`,
      },
    ],
  },
  {
    slug: "security-fencing-falkirk-stirling",
    name: "Security & Palisade Fencing",
    title: `Security & Palisade Fencing in ${cities}`,
    description: `Palisade and security fencing across ${cities} and ${region}. Domestic gardens to full commercial perimeters. Free quotes from ${brand}.`,
    intro: `${brand} installs palisade fencing and security boundary solutions for both domestic gardens and commercial properties across ${region}. Built to deter and last, palisade fencing provides a strong visible deterrent without sacrificing appearance.`,
    localParagraph: `Businesses and homeowners across ${cities} often need perimeter security that goes beyond a standard timber panel. ${brand} supplies and installs palisade fencing suited to commercial yards, industrial sites and domestic boundaries where security is the priority.`,
    image: assets.gallery[2],
    imageAlt: `Palisade security fencing installed by ${brand}`,
    serviceSlugs: ["palisade-fencing", "commercial-fencing"],
    matrixTitleSuffix: "Security Fencing",
    serviceNameLower: "security fencing",
    contractorPhrase: "fencing contractor",
    nearMePhrase: "security fencing near me",
    metaTemplate: (displayName) =>
      `Palisade and security fencing in ${displayName} by ${brand}. Domestic and commercial installations. Free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} installs palisade and security fencing in ${town} for homes, commercial premises and industrial sites. If you need a boundary that says "keep out", ${brand} can help with a free quote.`,
    localTemplate: (town, nearby) =>
      `Commercial sites and domestic properties in ${town} benefit from palisade fencing that provides real deterrence. If you are searching for a security fencing contractor near ${town}, ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `${brand} handles palisade installations and commercial perimeter fencing in ${town}. Whether it is a small domestic boundary or a full industrial site, work is completed with solid posts and professional finishing. Contact ${brand} for a free quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you install palisade fencing in ${town}?`,
        answer: `Yes. ${brand} installs palisade and security fencing in ${town} for domestic and commercial customers. Free quotes available.`,
      },
      {
        question: `Can you fence a commercial site in ${town}?`,
        answer: `Yes. ${brand} handles full commercial perimeter fencing in ${town} and surrounding areas. Get in touch to discuss your requirements.`,
      },
      {
        question: `How do I get a security fencing quote in ${town}?`,
        answer: `Contact ${brand} with details of the site and required boundary. Photos or a site plan help us respond quickly with a quote for ${town}.`,
      },
    ],
  },
  {
    slug: "gates-falkirk-stirling",
    name: "Gates",
    title: `Bespoke Gates in ${cities}`,
    description: `Bespoke gate installation and fitting across ${cities} and ${region}. Timber, slatted and matching gate designs built and fitted by ${brand}.`,
    intro: `${brand} builds and fits bespoke gates to complement new and existing fencing across ${region}. From simple garden gates to larger driveway gates, each gate is measured, built and hung on site for a precise fit and clean finish.`,
    localParagraph: `Customers across ${cities} often want a gate that matches their fence style and provides genuine security. ${brand} can build a matching gate in timber or slatted design and fit it to your posts so the whole boundary looks the part.`,
    image: assets.gallery[3],
    imageAlt: `Bespoke gate installed by ${brand}`,
    serviceSlugs: ["bespoke-gate-installation"],
    matrixTitleSuffix: "Gate Installation",
    serviceNameLower: "gate installation",
    contractorPhrase: "gate installer",
    nearMePhrase: "gate installation near me",
    metaTemplate: (displayName) =>
      `Bespoke gate installation in ${displayName} by ${brand}. Timber and slatted designs built and fitted. Free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} builds and installs bespoke gates in ${town}. Whether you need a garden gate, a side gate or a larger entrance gate, each one is measured and fitted for a clean, secure finish.`,
    localTemplate: (town, nearby) =>
      `Properties in ${town} benefit from a gate that matches the fence and sits level and secure. If you are looking for a gate installer near ${town}, ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `From garden gates to larger entrance gates, ${brand} designs, builds and fits bespoke gates in ${town}. Each gate is hung on-site for the right fit and finish. Contact ${brand} for a free gate installation quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you install gates in ${town}?`,
        answer: `Yes. ${brand} builds and installs bespoke gates in ${town} to match your fencing. Free quotes available.`,
      },
      {
        question: `Can you match a gate to my existing fence in ${town}?`,
        answer: `Yes. ${brand} can build a gate in a matching style and material to complement your existing fence in ${town}.`,
      },
      {
        question: `How do I get a gate installation quote in ${town}?`,
        answer: `Contact ${brand} with details of the opening width and fence style. Photos help us quote quickly for ${town}.`,
      },
    ],
  },
  {
    slug: "fence-removal-repair-falkirk-stirling",
    name: "Fence Removal & Repair",
    title: `Fence Removal & Repair in ${cities}`,
    description: `Old fence removal, storm damage repairs and replacement sections across ${cities} and ${region}. Included in your fencing quote from ${brand}.`,
    intro: `${brand} handles old fence removal, storm damage repairs and replacement sections across ${region}. Removal of your old fence is included in full installation quotes, so there is nothing to organise separately — it leaves with the team.`,
    localParagraph: `Scottish weather takes its toll on fencing across ${cities}. Whether storm damage has brought down panels or posts, or you simply have tired old fencing that needs clearing, ${brand} can assess the damage and recommend repair or full replacement — whichever makes more sense for your property.`,
    image: assets.gallery[1],
    imageAlt: `Fence repair and removal by ${brand}`,
    serviceSlugs: ["fence-removal", "fence-repair"],
    matrixTitleSuffix: "Fence Removal & Repair",
    serviceNameLower: "fence removal and repair",
    contractorPhrase: "fencing contractor",
    nearMePhrase: "fence repair near me",
    metaTemplate: (displayName) =>
      `Fence removal and repair in ${displayName} by ${brand}. Storm damage, old fence clearance and replacement sections. Free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} provides fence removal and repair services in ${town}. Whether you need storm damage fixed, sections replaced or an old fence cleared away, the team can help with a free quote.`,
    localTemplate: (town, nearby) =>
      `Fence damage from wind and rain is common across ${town} and the wider Central Belt. If you need a fencing contractor for repairs near ${town}, ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `From clearing an old fence to repairing storm damage, ${brand} handles all aspects of fence removal and repair in ${town}. Old materials are taken away and the area left tidy. Contact ${brand} for a free quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you remove old fencing in ${town}?`,
        answer: `Yes. ${brand} removes and disposes of old fencing in ${town}. Removal is included when a full replacement fence is being installed.`,
      },
      {
        question: `Can you repair storm-damaged fencing in ${town}?`,
        answer: `Yes. ${brand} assesses storm damage and recommends practical repairs or replacement sections in ${town}. Free quotes available.`,
      },
      {
        question: `How do I get a fence repair quote in ${town}?`,
        answer: `Call ${brand} or send photos of the damage with your location in ${town}. We will advise on repair versus replacement and provide a free quote.`,
      },
    ],
  },
];

export const getCategoryBySlug = (slug: string) =>
  categories.find((category) => category.slug === slug);

export const getCategoryForService = (serviceSlug: string) =>
  categories.find((category) => category.serviceSlugs.includes(serviceSlug));

export const getServicesForCategory = (category: ServiceCategory): ServicePage[] =>
  category.serviceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is ServicePage => Boolean(service));

export const getRelatedServices = (serviceSlug: string): ServicePage[] => {
  const category = getCategoryForService(serviceSlug);
  if (!category) return [];
  return getServicesForCategory(category).filter((service) => service.slug !== serviceSlug);
};

export const getFormServiceOptions = (): string[] => [
  ...categories.map((category) => category.name),
  ...services.filter((service) => service.slug !== "free-quotes").map((service) => service.shortTitle),
  "Other / Not Sure",
];
