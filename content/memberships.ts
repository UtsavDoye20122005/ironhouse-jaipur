import type { BillingCycle, MembershipTier } from "./types";

export const billingCycles: { id: BillingCycle; label: string; months: number }[] = [
  { id: "monthly", label: "Monthly", months: 1 },
  { id: "quarterly", label: "Quarterly", months: 3 },
  { id: "annual", label: "Annual", months: 12 },
];

export const memberships: MembershipTier[] = [
  {
    id: "floor",
    name: "Floor",
    tagline: "You know what you are doing. Come in, train, leave.",
    popular: false,
    joiningFee: 1000,
    prices: { monthly: 1800, quarterly: 4800, annual: 16000 },
    included: [
      "Full access to the lifting floor, both sessions",
      "Six racks, two platforms, dumbbells to 50 kg",
      "Locker, shower, towel",
      "One form check a month with a coach on the floor",
    ],
    notIncluded: [
      "Booked classes",
      "Programming written for you",
      "Guest passes",
    ],
  },
  {
    id: "floor-classes",
    name: "Floor + Classes",
    tagline: "The floor, plus anything on the timetable with a spot in it.",
    popular: true,
    joiningFee: 1000,
    prices: { monthly: 2800, quarterly: 7500, annual: 26000 },
    included: [
      "Everything in Floor",
      "Every class on the board — strength, HIIT, WOD, yoga, Zumba, MMA",
      "Book up to three classes at a time",
      "One guest pass a month",
      "Quarterly strength retest with a coach",
    ],
    notIncluded: [
      "Programming written for you",
      "Spar Lab without a coach signing you off",
    ],
  },
  {
    id: "coached",
    name: "Coached",
    tagline: "Your programme, your numbers, someone watching them.",
    popular: false,
    joiningFee: 0,
    prices: { monthly: 6500, quarterly: 18000, annual: 62000 },
    included: [
      "Everything in Floor + Classes",
      "A written block, updated every four weeks",
      "Two one-to-one sessions a month",
      "Video review of your main lifts",
      "Direct line to your coach between sessions",
    ],
    notIncluded: [
      "Diet plans — we will send you to someone who actually does that",
    ],
  },
];

export const membershipNotes = [
  "Prices are in rupees and include GST.",
  "The joining fee is one time and covers your first assessment and a floor induction.",
  "Freeze once a year for up to 30 days, no charge, no reason needed.",
  "Cancel with 30 days' notice. We will not put you through a retention call.",
  "Students and anyone training with a parent get 10% off. Bring the ID.",
];
