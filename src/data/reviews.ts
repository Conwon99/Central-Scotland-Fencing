/** Total reviews — MUST match visible review count on site (schema + reviews page). */
export const TOTAL_REVIEW_COUNT = 0;

export type CustomerReview = {
  name: string;
  meta: string;
  time: string;
  initial: string;
  initialBg: string;
  text: string;
};

export const reviews: CustomerReview[] = [];
