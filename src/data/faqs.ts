import { brandName, business, citiesLabel } from "@/data/business";

export type FaqItem = {
  question: string;
  answer: string;
};

const brand = brandName();
const cities = citiesLabel();

export const homepageFaqs: FaqItem[] = [
  {
    question: "Do you offer free fencing quotes?",
    answer: `Yes. ${brand} provides free no-obligation quotes for all fencing work. Call or message with details of your project and the team will get back to you promptly.`,
  },
  {
    question: "What areas do you cover?",
    answer: `${brand} covers ${cities} and surrounding areas including Larbert, Denny, Bonnybridge, Polmont, Grangemouth, Linlithgow, Alloa, Bannockburn, Bridge of Allan and Bo'ness across ${business.region}.`,
  },
  {
    question: "What fencing services do you provide?",
    answer: `${brand} installs timber panel fencing, close-board and slatted fencing, palisade and security fencing, and bespoke gates. The team also handles fence removal and repairs including storm damage.`,
  },
  {
    question: "Do you remove old fencing?",
    answer: `Yes. Old fence removal and disposal is included in all full replacement installation quotes. There is nothing for the customer to organise — the old fence leaves with the team.`,
  },
  {
    question: "How do I get started?",
    answer: `Call ${brand} on ${business.phoneLocal} or use the contact form with a brief description of the fencing work and your location. Photos of the existing boundary are helpful and speed up the quoting process.`,
  },
];

export const buildFaqSchema = (faqs: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
