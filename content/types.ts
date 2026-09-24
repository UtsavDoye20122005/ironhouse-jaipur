export type DayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type HourSlot = {
  label: string;
  start: string;
  end: string;
};

export type DayHours = {
  day: DayIndex;
  label: string;
  slots: HourSlot[];
};

export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type NavItem = {
  href: string;
  label: string;
};

export type ClassType =
  | "Strength"
  | "HIIT"
  | "CrossFit"
  | "Yoga"
  | "Zumba"
  | "MMA";

export type Intensity = "Low" | "Moderate" | "High" | "Peak";

export type GymClass = {
  id: string;
  name: string;
  type: ClassType;
  blurb: string;
  durationMin: number;
  intensity: Intensity;
  whatToBring: string;
};

export type Trainer = {
  id: string;
  name: string;
  role: string;
  specialisation: string;
  certifications: string[];
  years: number;
  philosophy: string;
  image: SiteImage;
};

export type ScheduleSlot = {
  id: string;
  day: DayIndex;
  start: string;
  classId: string;
  trainerId: string;
  spotsLeft: number;
  spotsTotal: number;
};

export type BillingCycle = "monthly" | "quarterly" | "annual";

export type MembershipTier = {
  id: string;
  name: string;
  tagline: string;
  popular: boolean;
  joiningFee: number;
  prices: Record<BillingCycle, number>;
  included: string[];
  notIncluded: string[];
};

export type Review = {
  name: string;
  locality: string;
  rating: number;
  quote: string;
  tenure: string;
};

export type Transformation = {
  name: string;
  duration: string;
  focus: string;
  before: SiteImage;
  after: SiteImage;
};

export type Facility = {
  id: string;
  title: string;
  copy: string;
  icon: "dumbbell" | "shower" | "flame" | "car" | "store" | "users" | "wind" | "timer";
};

export type FaqItem = {
  q: string;
  a: string;
};

export type PageSeo = {
  path: string;
  title: string;
  description: string;
};
