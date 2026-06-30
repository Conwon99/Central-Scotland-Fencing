import { business, brandName } from "@/data/business";

export type ProjectPage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  details: string;
  highlights: string[];
  serviceType: string;
  location: string;
  image: string;
  imageAlt: string;
};

const brand = brandName();
const { assets } = business;

export const projects: ProjectPage[] = [
  {
    slug: "6ft-timber-fence-and-gate-falkirk",
    title: "6ft Timber Fence with Bespoke Gate in Falkirk",
    description: `6ft timber fence and bespoke gate installation in Falkirk by ${brand}. Pressure-treated timber slats with posts dug 2ft deep for long-term stability.`,
    intro: `A full garden boundary replacement in Falkirk, including a new 6ft privacy fence and a bespoke matching gate built and fitted on site.`,
    details: `${brand} removed the customer's old failing fence before digging new posts to 2ft depth and setting them in concrete. 150mm pressure-treated timber slats were used throughout for maximum weather resistance. A bespoke gate was built to match the fence style, hung level on site and fitted with quality ironmongery. The finished fence provides full garden privacy and a secure gate entry. The old fence, posts and concrete bases were cleared away completely as part of the job, leaving the garden tidy and ready to use. The customer was happy with the clean finish and the speed of the installation from start to completion.`,
    highlights: [
      "Full old fence removal and disposal included",
      "Posts dug 2ft deep and set in concrete",
      "150mm pressure-treated timber slats throughout",
      "Bespoke gate built and hung on site to match fence",
    ],
    serviceType: "Timber Panel Fencing & Gates",
    location: "Falkirk",
    image: assets.gallery[0],
    imageAlt: `6ft timber fence and bespoke gate installed by ${brand} in Falkirk`,
  },
  {
    slug: "slatted-fence-stirling",
    title: "Modern Slatted Fence Installation in Stirling",
    description: `Contemporary horizontal slatted fence installation in Stirling by ${brand}. Modern design with pressure-treated timber and deep post installation.`,
    intro: `A contemporary slatted fence installation for a customer in Stirling who wanted a cleaner, more modern boundary for their rear garden.`,
    details: `${brand} installed a full run of horizontal slatted fencing along the rear boundary of a domestic property in Stirling. The customer had seen slatted designs on newer properties nearby and wanted a contemporary look that was different from a standard panel fence. New posts were dug to depth and set in concrete before the horizontal slats were fitted at even spacing for a clean, uniform finish. The slatted design allows some airflow while still providing a clear garden boundary. Old fencing from the previous owner was removed and taken away as part of the job. The finished result complemented the landscaping the customer had recently carried out in the garden.`,
    highlights: [
      "Contemporary horizontal slatted design",
      "Pressure-treated timber throughout",
      "Old fence removed and cleared",
      "Clean, uniform slat spacing for a modern finish",
    ],
    serviceType: "Slatted Fencing",
    location: "Stirling",
    image: assets.gallery[1],
    imageAlt: `Modern slatted fence installed by ${brand} in Stirling`,
  },
  {
    slug: "palisade-security-fencing-grangemouth",
    title: "Palisade Security Fencing in Grangemouth",
    description: `Commercial palisade security fencing in Grangemouth by ${brand}. Full perimeter installation for a commercial yard with professional finishing.`,
    intro: `A commercial palisade fencing project in Grangemouth, providing a full perimeter security boundary for a business yard.`,
    details: `${brand} was contacted by a business in Grangemouth that needed a proper security perimeter around their yard. The existing boundary was a low timber fence that provided no real deterrence. The team installed full-height palisade fencing around the yard perimeter, with posts set in concrete and rails fitted before the pales were secured in place. A palisade vehicle access gate was also installed to complete the secure boundary. The finished palisade fence provides a strong visual deterrent and a significant improvement on the previous timber boundary. The business owner was satisfied with the professional installation and the minimal disruption to operations during the installation period.`,
    highlights: [
      "Full commercial yard perimeter palisade installation",
      "Matching palisade vehicle access gate included",
      "Posts set in concrete with professional rail and pale fixing",
      "Minimal disruption to business operations during installation",
    ],
    serviceType: "Security & Palisade Fencing",
    location: "Grangemouth",
    image: assets.gallery[2],
    imageAlt: `Palisade security fencing installed by ${brand} in Grangemouth`,
  },
  {
    slug: "storm-damage-fence-repair-polmont",
    title: "Storm Damage Fence Repair in Polmont",
    description: `Storm damage fence repair and panel replacement in Polmont by ${brand}. Posts re-set, damaged panels replaced and old materials cleared.`,
    intro: `A storm damage repair job in Polmont where high winds had brought down a section of garden fencing, leaving the property exposed.`,
    details: `Following a period of high winds, a customer in Polmont contacted ${brand} after a section of their garden fence had come down overnight. The team assessed the damage and found that two posts had been pulled loose from the ground while others were still sound and secure. The loose posts were extracted and replaced with new ones dug to proper depth and set in concrete. Several panels were also damaged beyond repair and were replaced with matching pressure-treated timber panels. The old damaged panels and post sections were taken away as part of the repair job, leaving the garden boundary secure and tidy. The customer was pleased with how quickly the team responded and how neatly the repair was completed.`,
    highlights: [
      "Storm damage assessed and practical repair recommended",
      "Loose posts replaced and re-set in concrete",
      "Damaged panels replaced with matching timber panels",
      "Old damaged materials cleared away and garden boundary secured",
    ],
    serviceType: "Fence Repair",
    location: "Polmont",
    image: assets.gallery[3],
    imageAlt: `Storm damage fence repair completed by ${brand} in Polmont`,
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
