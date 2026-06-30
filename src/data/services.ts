import { business, brandName, citiesLabel } from "@/data/business";

export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  navTitle: string;
  parentCategorySlug: string | null;
  description: string;
  cardDescription: string;
  iconUrl: string;
  iconAlt: string;
  image: string;
  imageAlt: string;
  about: string;
  why: string;
  signsYouNeed: string;
  options: string;
  localContext: string;
  whatToExpect: string;
  whyChooseUs: string;
  benefits: string[];
  process: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

const serviceIconBase = "https://c.animaapp.com/mial13ktyN5Jkh/assets";
const brand = brandName();
const cities = citiesLabel();
const { assets } = business;

export const services: ServicePage[] = [
  {
    slug: "timber-panel-fencing",
    title: "Timber Panel Fencing",
    shortTitle: "Timber Panel Fencing",
    navTitle: "Timber Panels",
    parentCategorySlug: "timber-panel-fencing-falkirk-stirling",
    description: `Timber panel fencing installation in ${cities} and ${business.region}. Pressure-treated posts and panels, close-board designs and full old fence removal. Free quotes from ${brand}.`,
    cardDescription: `Classic timber panel fencing with posts dug to depth and pressure-treated timber throughout. Installed across ${cities} and surrounding areas.`,
    iconUrl: "https://c.animaapp.com/mhqqhnhjBr0jWt/assets/670f922acd8bf79374aa2c10_service-01.svg",
    iconAlt: "Timber panel fencing icon",
    image: assets.gallery[0],
    imageAlt: `Timber panel fence installed by ${brand} in ${business.primaryCity}`,
    about: `${brand} installs timber panel fencing for homes and gardens across ${business.region}. A standard 6ft fence uses posts dug 2ft into the ground and set in concrete, with 150mm pressure-treated timber slats for maximum weather resistance. Old fencing can be removed and cleared away as part of the job, so there is nothing left on site for you to sort out.`,
    why: `Timber panel fencing is the most popular choice for garden privacy across Central Scotland. It is affordable, effective and — when installed correctly with deep posts and pressure-treated timber — it lasts well even in Scottish weather. The team focuses on doing it once, doing it right.`,
    signsYouNeed: `Rotting posts, leaning panels or gaps in your fence are signs it is time to replace rather than patch. If posts are no longer sitting level or panels are splitting and warping, repeated repairs will cost more in the long run than a full replacement. A leaning fence can also be a safety concern, particularly with children or pets in the garden.`,
    options: `${brand} can install a full new run of timber panel fencing, replace individual panels or sections, or remove old fencing entirely and start from scratch with new posts and panels. Heights from 4ft to 6ft are available, and the team can advise on the most practical option for your boundary and budget. Old fence removal and disposal is included when a full replacement is being carried out.`,
    localContext: `Properties across ${cities} and ${business.region} often have varying ground conditions — from sandy soil near the River Forth to clay-heavy ground further inland. ${brand} assesses each site before quoting and uses appropriate post depths and concrete to ensure stability. If you are searching for timber fencing near ${business.primaryCity} or ${business.secondaryCity}, the team works across the full Central Belt service area.`,
    whatToExpect: `When you contact ${brand}, the team will discuss the fence length, height and style you need. A visit can be arranged to measure up and provide a clear written quote. On the day of installation, old fencing is removed first if needed, then posts are dug and set in concrete, panels are fitted and the site is left tidy. No mess is left behind.`,
    whyChooseUs: `${brand} offers free quotes, fast turnaround and a clean finish on every job. The team covers ${cities} and the surrounding Central Belt towns, and takes pride in leaving every site tidy and the customer happy. Customers value the no-shortcuts approach — posts are always dug to proper depth and pressure-treated timber is used throughout.`,
    benefits: [
      "Posts dug 2ft deep and set in concrete for long-term stability.",
      "Pressure-treated timber throughout for Scottish weather resistance.",
      "Old fence removal and disposal included with full replacements.",
      `Free quotes across ${cities} and surrounding Central Belt towns.`,
    ],
    process: [
      "Discuss fence length, height and style — arrange a site visit if needed.",
      "Remove old fencing and clear the area ready for new posts.",
      "Dig posts to depth, set in concrete and allow to cure.",
      "Fit panels neatly and leave the site clean and tidy.",
    ],
    faq: [
      {
        question: "How deep should fence posts be dug?",
        answer: `${brand} digs posts to a minimum of 2ft (600mm) depth for a 6ft fence and sets them in concrete for long-lasting stability.`,
      },
      {
        question: "Can you remove my old fence as well?",
        answer: `Yes. Old fence removal and disposal is included when a full replacement fence is being installed. There is nothing extra to arrange.`,
      },
      {
        question: `Do you offer timber panel fencing near me in ${business.primaryCity} or ${business.secondaryCity}?`,
        answer: `Yes. ${brand} provides timber panel fencing across ${cities} and ${business.region}. Contact us with your location for a free quote.`,
      },
      {
        question: "What timber is used — is it pressure treated?",
        answer: "Yes. All timber used by the team is pressure treated, which extends the lifespan of the fence significantly in wet Scottish conditions.",
      },
    ],
  },
  {
    slug: "slatted-fence-installation",
    title: "Slatted Fence Installation",
    shortTitle: "Slatted Fencing",
    navTitle: "Slatted Fencing",
    parentCategorySlug: "timber-panel-fencing-falkirk-stirling",
    description: `Modern slatted fence installation in ${cities} and ${business.region}. Contemporary horizontal designs for gardens and outdoor spaces. Free quotes from ${brand}.`,
    cardDescription: `Modern horizontal slatted fence designs installed across ${cities}. Clean lines and contemporary styling with the same quality workmanship.`,
    iconUrl: `${serviceIconBase}/670f922a6c5c1d8102612221_service-02.svg`,
    iconAlt: "Slatted fencing icon",
    image: assets.gallery[1],
    imageAlt: `Slatted fence installation by ${brand}`,
    about: `${brand} installs modern slatted fencing for customers who want a cleaner, more contemporary look for their garden or outdoor space. Horizontal slatted designs use the same quality pressure-treated timber and deep post installation as standard panels, but give a more modern aesthetic that works well with newer builds and landscaped gardens.`,
    why: `Slatted fencing has become increasingly popular across Central Scotland as homeowners look for something more distinctive than a standard panel fence. The horizontal layout creates a sleek finish that lets some light through while still providing a clear boundary and good privacy at close range.`,
    signsYouNeed: `If your existing fence looks dated, provides poor privacy or simply no longer reflects the style of your property, slatted fencing can be a worthwhile upgrade. It is also a good option if you want to define a boundary without the solid wall effect of a traditional panel fence.`,
    options: `${brand} can install full slatted fence runs or combine slatted sections with standard panels where budget allows. Slat spacing can be adjusted to suit the level of privacy required, and heights up to 6ft are available. The team can advise on the most practical design for your boundary.`,
    localContext: `Modern slatted fencing suits the newer housing developments across ${business.primaryCity}, ${business.secondaryCity} and surrounding towns in ${business.region}. If you are searching for contemporary fencing near ${business.primaryCity} or ${business.secondaryCity}, ${brand} can provide a free quote and discuss the best slatted design for your plot.`,
    whatToExpect: `${brand} will discuss your preferred slatting style and spacing before quoting. Old fencing can be removed and disposed of as part of the installation. Posts are dug to depth and set in concrete, and slatted sections are fitted neatly. The site is left clean and tidy.`,
    whyChooseUs: `${brand} brings the same quality workmanship to slatted fencing as to all other fence types — no shortcuts on post depth or timber quality. Free quotes are available across ${cities}.`,
    benefits: [
      "Modern horizontal slatted designs for a contemporary garden look.",
      "Pressure-treated timber and deep post installation throughout.",
      "Adjustable slat spacing to suit your privacy requirements.",
      `Free quotes and fast turnaround across ${cities}.`,
    ],
    process: [
      "Discuss slatted design, height and slat spacing requirements.",
      "Remove old fencing and prepare the ground for new posts.",
      "Set posts in concrete and allow to cure before fitting slats.",
      "Install slats evenly and leave the site clean with a neat finish.",
    ],
    faq: [
      {
        question: "Can you install horizontal slatted fencing?",
        answer: `Yes. ${brand} installs modern horizontal slatted fences across ${cities} and ${business.region}. Free quotes available.`,
      },
      {
        question: "Can the slat spacing be customised?",
        answer: "Yes. Slat spacing can be adjusted to suit your preference for privacy versus light and airflow.",
      },
      {
        question: `Do you fit slatted fencing near ${business.primaryCity} or ${business.secondaryCity}?`,
        answer: `Yes. ${brand} covers ${cities} and the wider ${business.region} service area for slatted fence installation. Get in touch for a free quote.`,
      },
    ],
  },
  {
    slug: "palisade-fencing",
    title: "Palisade Fencing",
    shortTitle: "Palisade Fencing",
    navTitle: "Palisade",
    parentCategorySlug: "security-fencing-falkirk-stirling",
    description: `Palisade fencing installation in ${cities} and ${business.region}. Domestic and commercial security fencing from ${brand}. Free quotes.`,
    cardDescription: `Palisade fencing for domestic gardens and commercial premises across ${cities}. A strong visible deterrent with professional installation.`,
    iconUrl: `${serviceIconBase}/670f922a0e27a271e441091e_service-03.svg`,
    iconAlt: "Palisade fencing icon",
    image: assets.gallery[2],
    imageAlt: `Palisade security fence installed by ${brand}`,
    about: `${brand} installs palisade fencing for customers who need a boundary that is secure and looks the part. Palisade fencing is built from vertical steel pales set on horizontal rails, giving a strong, visually clear deterrent for both domestic gardens and commercial or industrial sites. The team handles full installation from groundworks through to the finished fence.`,
    why: `When a timber panel fence is not enough, palisade fencing offers a step up in security without the cost of a full steel perimeter. It is widely used on commercial and industrial sites across Central Scotland and is increasingly popular for domestic properties where intruder deterrence is a priority.`,
    signsYouNeed: `If your property has experienced break-ins, your current fence is easy to climb or damage, or you need a boundary for a commercial yard or industrial site, palisade fencing is worth considering. It provides a clear physical and visual deterrent and requires minimal maintenance once installed.`,
    options: `${brand} can install standard domestic palisade fencing for garden boundaries or full commercial-grade perimeter fencing for larger sites. Pales can be supplied in D-section, W-section or flat profiles. The team can advise on the most appropriate height and specification for your site and budget.`,
    localContext: `Businesses and homeowners across ${cities} and ${business.region} use palisade fencing for security perimeters. Whether you need to secure a commercial yard in ${business.primaryCity} or a domestic boundary in ${business.secondaryCity}, ${brand} can provide a free quote and handle the full installation.`,
    whatToExpect: `${brand} will visit the site to assess the boundary and discuss the appropriate palisade specification. A clear written quote is provided before work starts. On the day of installation, posts are set and rails fitted before the pales are secured in place. The finished fence is checked for alignment and the site left tidy.`,
    whyChooseUs: `${brand} provides free quotes, reliable installation and a clean finish on all palisade projects. The team has experience with both domestic and commercial security fencing across ${business.region}.`,
    benefits: [
      "Palisade fencing for domestic gardens and commercial sites.",
      "Strong visible deterrent with professional installation.",
      "Choice of pale profiles to suit your security requirements.",
      `Free quotes and site visits across ${cities} and ${business.region}.`,
    ],
    process: [
      "Visit the site to assess boundary and discuss palisade specification.",
      "Provide a clear written quote before any work begins.",
      "Set posts, fit rails and secure pales in place.",
      "Check alignment and leave the site clean and tidy.",
    ],
    faq: [
      {
        question: "Do you install palisade fencing for domestic properties?",
        answer: `Yes. ${brand} installs palisade fencing for both domestic gardens and commercial sites across ${cities} and ${business.region}.`,
      },
      {
        question: "What types of palisade pale are available?",
        answer: "D-section, W-section and flat pales are available. The team can advise on the best profile for your security requirements.",
      },
      {
        question: `Do you install palisade fencing near ${business.primaryCity} or ${business.secondaryCity}?`,
        answer: `Yes. ${brand} covers ${cities} and the wider Central Scotland service area for palisade fencing. Contact us for a free quote.`,
      },
    ],
  },
  {
    slug: "commercial-fencing",
    title: "Commercial Fencing",
    shortTitle: "Commercial Fencing",
    navTitle: "Commercial",
    parentCategorySlug: "security-fencing-falkirk-stirling",
    description: `Commercial and industrial fencing across ${cities} and ${business.region}. Full perimeter solutions for yards, sites and business premises. Free quotes from ${brand}.`,
    cardDescription: `Commercial perimeter fencing for yards, industrial sites and business premises across ${cities}. Palisade, panel and security fencing.`,
    iconUrl: `${serviceIconBase}/670f922a6c5c1d8102612221_service-02.svg`,
    iconAlt: "Commercial fencing icon",
    image: assets.gallery[3],
    imageAlt: `Commercial perimeter fencing by ${brand}`,
    about: `${brand} provides commercial fencing solutions for businesses, landlords and property managers across ${business.region}. From securing a yard or car park to fencing a full industrial perimeter, the team handles the groundworks, installation and finishing to a commercial standard.`,
    why: `A secure, professional-looking perimeter matters for commercial properties. It deters unauthorised access, defines site boundaries clearly, and can help with insurance requirements. ${brand} works efficiently to minimise disruption to your operation.`,
    signsYouNeed: `If your current commercial fencing is failing, being breached or simply not providing adequate deterrence, a replacement or upgrade is worth considering. Businesses that store equipment, vehicles or stock outside particularly benefit from a well-secured perimeter.`,
    options: `${brand} can install palisade fencing, close-board panel fencing or a combination depending on the security level required. For larger commercial sites, a site survey is arranged to assess the boundary and recommend the most cost-effective solution.`,
    localContext: `Commercial properties across ${business.primaryCity}, ${business.secondaryCity} and the wider Central Belt regularly need perimeter fencing solutions. ${brand} works with business owners, property managers and developers across ${business.region} to deliver commercial fencing on time and within budget.`,
    whatToExpect: `${brand} will arrange a site visit to assess the commercial boundary and discuss security requirements. A written quote is provided. Work is planned to minimise disruption and the site is left tidy on completion.`,
    whyChooseUs: `${brand} brings a professional approach to commercial fencing with free site surveys, clear pricing and reliable installation. The team has completed commercial projects across ${cities}.`,
    benefits: [
      "Commercial perimeter fencing for yards, sites and business premises.",
      "Free site survey and written quote before work begins.",
      "Minimal disruption to your operation during installation.",
      `Reliable installation across ${cities} and ${business.region}.`,
    ],
    process: [
      "Arrange a site visit to assess the commercial boundary.",
      "Provide a written quote with clear scope and pricing.",
      "Schedule installation to minimise disruption to your business.",
      "Complete the perimeter fencing and leave the site tidy.",
    ],
    faq: [
      {
        question: "Do you provide fencing for commercial sites?",
        answer: `Yes. ${brand} installs commercial and industrial perimeter fencing across ${cities} and ${business.region}. Free site surveys available.`,
      },
      {
        question: "Can you fence a full yard or industrial site perimeter?",
        answer: `Yes. ${brand} handles full perimeter fencing for yards, car parks and industrial sites. Contact us to arrange a site visit.`,
      },
      {
        question: `Do you cover commercial fencing near ${business.primaryCity}?`,
        answer: `Yes. ${brand} provides commercial fencing across ${cities} and surrounding areas. Get in touch for a free site survey and quote.`,
      },
    ],
  },
  {
    slug: "bespoke-gate-installation",
    title: "Bespoke Gate Installation",
    shortTitle: "Gate Installation",
    navTitle: "Gates",
    parentCategorySlug: "gates-falkirk-stirling",
    description: `Bespoke gate installation in ${cities} and ${business.region}. Timber, slatted and matching gate designs built and fitted by ${brand}. Free quotes.`,
    cardDescription: `Bespoke gates built and fitted to match your fence. Garden gates, side gates and entrance gates across ${cities} and ${business.region}.`,
    iconUrl: "https://c.animaapp.com/mhqqhnhjBr0jWt/assets/670f922acd8bf79374aa2c10_service-01.svg",
    iconAlt: "Gate installation icon",
    image: assets.gallery[3],
    imageAlt: `Bespoke gate built and fitted by ${brand}`,
    about: `${brand} builds and installs bespoke gates to complement new and existing fencing across ${business.region}. Each gate is measured on site, built to match the fence style and hung level and square for a clean, secure finish. Whether you need a simple garden gate or a larger entrance gate, the team can help.`,
    why: `A gate that matches your fence makes the whole boundary look finished. More importantly, a well-hung gate that closes properly provides real security and keeps children and pets safely in the garden. ${brand} builds gates to last, using the same pressure-treated timber and quality ironmongery throughout.`,
    signsYouNeed: `If your existing gate is warping, sagging on its hinges, failing to close properly or simply looks out of place with your new fence, a replacement bespoke gate is the answer. Getting the gate replaced at the same time as the fence means the styles match and the ironmongery is consistent.`,
    options: `${brand} builds timber panel gates, horizontal slatted gates and close-board gates to match most fence styles. Sizes range from a standard 3ft garden gate to wider entrance gates. Gates can be fitted with a range of latches, bolts and hinges depending on the required security level.`,
    localContext: `Customers across ${cities} and ${business.region} often want a gate that has been built specifically for their opening rather than an off-the-shelf product. ${brand} builds each gate to the exact width and height needed and fits it on site so it hangs correctly and closes securely.`,
    whatToExpect: `${brand} will measure the opening and discuss the gate style, height and ironmongery before quoting. The gate is then built and brought to site for fitting. Posts are checked for plumb before hanging and the gate is adjusted until it closes cleanly and securely.`,
    whyChooseUs: `${brand} builds bespoke gates that are made to fit and made to last. Free quotes are available across ${cities} and all gates are fitted with quality ironmongery as standard.`,
    benefits: [
      "Bespoke gates built to match your fence style and exact opening.",
      "Quality ironmongery fitted as standard — latches, bolts and hinges.",
      "Gates hung level and square on site for a clean, secure close.",
      `Free quotes across ${cities} and ${business.region}.`,
    ],
    process: [
      "Measure the opening and discuss gate style, height and ironmongery.",
      "Build the gate to the exact dimensions required.",
      "Check posts for plumb and hang the gate on site.",
      "Adjust until the gate closes cleanly and leaves the site tidy.",
    ],
    faq: [
      {
        question: "Can you build a gate to match my existing fence?",
        answer: `Yes. ${brand} builds bespoke gates to match most fence styles, including timber panel, slatted and close-board designs.`,
      },
      {
        question: "What sizes of gate can you install?",
        answer: "Gates from a standard 3ft garden gate up to larger entrance gates can be built and fitted. Contact the team with your opening width for a quote.",
      },
      {
        question: `Do you install gates near ${business.primaryCity} or ${business.secondaryCity}?`,
        answer: `Yes. ${brand} provides bespoke gate installation across ${cities} and ${business.region}. Free quotes available.`,
      },
      {
        question: "Is old gate removal included?",
        answer: "Yes. Old gate removal and disposal can be included in the quote where needed.",
      },
    ],
  },
  {
    slug: "fence-removal",
    title: "Fence Removal",
    shortTitle: "Fence Removal",
    navTitle: "Fence Removal",
    parentCategorySlug: "fence-removal-repair-falkirk-stirling",
    description: `Old fence removal and disposal across ${cities} and ${business.region}. Included with full replacement fencing from ${brand}. Standalone removal also available.`,
    cardDescription: `Old fence removal and disposal included with full replacement installs. Standalone removal also available across ${cities}.`,
    iconUrl: `${serviceIconBase}/670f922a0e27a271e441091e_service-03.svg`,
    iconAlt: "Fence removal icon",
    image: assets.gallery[1],
    imageAlt: `Fence removal service by ${brand}`,
    about: `${brand} includes old fence removal in all full fence replacement quotes, so there is nothing left on site for the customer to deal with. The old fence, posts and any concrete bases are cleared away and the area left ready for new installation. Standalone fence removal is also available for customers who need a cleared boundary without a replacement.`,
    why: `Getting rid of an old fence yourself is time-consuming and often awkward, particularly when posts are set in concrete. Having the team remove the old fence as part of the installation saves you the hassle and means the project is completed in a single visit.`,
    signsYouNeed: `If you have an old fence that needs to come out before new fencing can go in, or if you simply want a boundary cleared to improve access or light in the garden, a fence removal service is the most straightforward solution.`,
    options: `Fence removal is included as standard when ${brand} is installing a replacement fence. For customers who want the old fence removed without a replacement, standalone removal can be arranged. Post removal and concrete base extraction are included.`,
    localContext: `Properties across ${cities} and ${business.region} often have old wooden fencing that has been in place for many years. ${brand} can assess the condition of the old fence, remove it efficiently and dispose of the materials properly.`,
    whatToExpect: `When fence removal is included in a replacement installation, it takes place at the start of the job before new posts are dug. For standalone removal, the team will clear the fence, posts and any concrete bases and take everything away. The site is left tidy and ready for whatever comes next.`,
    whyChooseUs: `${brand} makes fence removal straightforward. It is included in full replacements at no extra cost and standalone removal is available with a free quote. There is no need to arrange a skip or do any of the work yourself.`,
    benefits: [
      "Old fence removal included with all full replacement installations.",
      "Post removal and concrete base extraction included.",
      "Standalone removal available for clearances without replacement.",
      "All materials taken away and the area left tidy.",
    ],
    process: [
      "Agree the scope of removal — full fence, posts and concrete bases.",
      "Remove old panels and clear any debris from the site.",
      "Extract old posts and concrete bases where present.",
      "Leave the area tidy and ready for new fencing or landscaping.",
    ],
    faq: [
      {
        question: "Is old fence removal included when you install a new fence?",
        answer: `Yes. ${brand} includes old fence removal and disposal in all full replacement fence quotes. There is nothing extra to arrange.`,
      },
      {
        question: "Can you remove a fence without installing a replacement?",
        answer: `Yes. Standalone fence removal is available. Contact ${brand} with the fence length and type for a free quote.`,
      },
      {
        question: `Do you offer fence removal near ${business.primaryCity}?`,
        answer: `Yes. ${brand} provides fence removal across ${cities} and ${business.region}. Get in touch for a free quote.`,
      },
    ],
  },
  {
    slug: "fence-repair",
    title: "Fence Repair",
    shortTitle: "Fence Repair",
    navTitle: "Fence Repair",
    parentCategorySlug: "fence-removal-repair-falkirk-stirling",
    description: `Fence repairs in ${cities} and ${business.region}. Storm damage, broken posts, loose panels and replacement sections. Free quotes from ${brand}.`,
    cardDescription: `Storm damage, loose panels, broken posts and replacement sections handled across ${cities} and ${business.region}. Free quotes.`,
    iconUrl: `${serviceIconBase}/670f922a6c5c1d8102612221_service-02.svg`,
    iconAlt: "Fence repair icon",
    image: assets.gallery[4],
    imageAlt: `Fence repair work completed by ${brand}`,
    about: `${brand} handles fence repairs for customers across ${business.region} who have storm damage, broken or leaning posts, loose panels or sections that need replacing. A focused repair can often restore a fence to full working order without the cost of a full replacement. The team will advise honestly on whether repair or replacement is the better option for your fence.`,
    why: `Not all fence problems need a full replacement. If posts are still sound and only one or two panels are damaged, a repair is faster, less disruptive and more cost-effective. ${brand} carries out repairs as neatly as new installations, matching materials as closely as possible.`,
    signsYouNeed: `Storm damage is the most common reason for fence repairs in Central Scotland. High winds can bring down panels and pull posts loose from the ground. If posts are leaning but still have sound concrete bases, they can sometimes be re-set. If individual panels are broken or warped, they can be replaced without disturbing the rest of the fence.`,
    options: `${brand} can replace individual panels, re-set leaning posts, replace broken posts entirely, or repair a complete section of fence that has come down in a storm. For larger areas of damage, full replacement may be more cost-effective, and the team will advise on the most practical option.`,
    localContext: `Scottish weather means fence damage is a regular occurrence across ${cities} and ${business.region}. If you need fence repairs after a storm or have noticed gradual deterioration, ${brand} can assess the damage and provide a free repair quote.`,
    whatToExpect: `${brand} will inspect the fence damage, identify the cause and recommend repair or replacement based on the condition of the existing posts and panels. A clear quote is provided before work starts. Repairs are carried out neatly and old materials cleared away where agreed.`,
    whyChooseUs: `${brand} gives honest advice on repair versus replacement with no unnecessary upselling. Free quotes are available across ${cities} and repairs are completed with the same standard of workmanship as new installations.`,
    benefits: [
      "Storm damage, broken posts and loose panels all handled.",
      "Honest advice on whether repair or replacement is the better option.",
      "Replacement sections matched to existing fence style where possible.",
      `Free quotes and fast response across ${cities} and ${business.region}.`,
    ],
    process: [
      "Inspect the fence damage and assess the condition of posts and panels.",
      "Advise on repair or replacement based on what makes most sense.",
      "Carry out the agreed repairs or section replacements.",
      "Clear away old materials and leave the area tidy.",
    ],
    faq: [
      {
        question: "Can you repair storm-damaged fencing?",
        answer: `Yes. ${brand} assesses storm damage and carries out practical repairs or section replacements across ${cities} and ${business.region}.`,
      },
      {
        question: "Can you re-set a leaning fence post?",
        answer: "In some cases yes, if the post is still sound but has shifted in the ground. The team will assess the post condition before recommending re-setting or replacement.",
      },
      {
        question: `Do you repair fences near ${business.primaryCity} or ${business.secondaryCity}?`,
        answer: `Yes. ${brand} provides fence repairs across ${cities} and the wider ${business.region} service area. Contact us for a free quote.`,
      },
      {
        question: "How quickly can you respond to storm damage?",
        answer: `${brand} aims to respond to enquiries as quickly as possible. Contact us with photos of the damage and your location in ${business.region} for a fast quote.`,
      },
    ],
  },
  {
    slug: "free-quotes",
    title: "Free Quotes",
    shortTitle: "Free Quotes",
    navTitle: "Free Quotes",
    parentCategorySlug: null,
    description: `Request a free fencing quote from ${brand} across ${cities} and ${business.region}. Timber panels, gates, palisade fencing and more.`,
    cardDescription: `Call or message ${brand} to discuss your fencing project and get a free no-obligation quote across ${cities} and ${business.region}.`,
    iconUrl: "https://c.animaapp.com/mhqqhnhjBr0jWt/assets/670f922acd8bf79374aa2c10_service-01.svg",
    iconAlt: "Free quote icon",
    image: assets.gallery[5],
    imageAlt: `Fencing work completed by ${brand} in ${business.region}`,
    about: `If you are not sure where to start, call or message ${brand} with a few details about the work. The team can discuss your fencing options, confirm your area is covered and arrange a visit or quote. There is no obligation to proceed.`,
    why: "A quick conversation helps clarify what type of fencing suits your boundary, what the likely cost range is, and whether a site visit is needed before a firm price can be given.",
    signsYouNeed: "If you know fencing work is needed but are unsure of the scope, specification or cost, a free no-obligation quote is the best first step. Photos of the existing boundary and your approximate location help the team respond quickly.",
    options: `${brand} quotes for all services — timber panel fencing, slatted fencing, palisade and security fencing, gates and fence removal and repair. You can call, message through the contact form or email. No-obligation quotes help you compare options before committing to any work.`,
    localContext: `${brand} covers ${cities} and towns across ${business.region} including Larbert, Denny, Bonnybridge, Polmont, Grangemouth, Linlithgow and surrounding areas. If you are nearby, get in touch to confirm coverage.`,
    whatToExpect: "Send a message or call with the fencing work you need. Share photos of the existing boundary if helpful. The team will discuss the job, confirm coverage and arrange a visit or written quote.",
    whyChooseUs: `Free quotes with no pressure, clear next steps and local fencing service across ${cities}. Customers value the honest approach before committing to any work.`,
    benefits: [
      "Free no-obligation quotes for all fencing services.",
      "Clear advice before any work begins.",
      `Local service across ${cities} and ${business.region}.`,
      "Quick response — send photos for a faster quote.",
    ],
    process: [
      "Call or message with the fencing work you need.",
      "Share photos or details of the boundary or damage if helpful.",
      "Arrange a site visit or written quote where required.",
      "Agree the work, timing and practical details before starting.",
    ],
    faq: [
      {
        question: "What details should I send to get a fencing quote?",
        answer: "A short description of the work, your approximate location and photos of the boundary or damage are most helpful.",
      },
      {
        question: "Which areas do you quote in?",
        answer: `${brand} covers ${cities} and surrounding areas including Larbert, Denny, Bonnybridge, Polmont, Grangemouth and Linlithgow across ${business.region}.`,
      },
      {
        question: "Is there any obligation with a free quote?",
        answer: `No. ${brand} provides free no-obligation quotes. You are under no pressure to proceed after receiving a price.`,
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
