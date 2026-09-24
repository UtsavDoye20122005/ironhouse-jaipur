import type { DayHours, NavItem } from "./types";

export const site = {
  name: "Ironhouse Strength Co.",
  shortName: "Ironhouse",
  city: "Jaipur",
  legalName: "Ironhouse Strength Co. Jaipur",
  tagline: "Heavy iron. Honest coaching. Vaishali Nagar.",
  description:
    "Strength gym in Vaishali Nagar, Jaipur. Split morning and evening hours, programmed classes, and coaches who actually lift.",
  url: "https://ironhouse-jaipur.vercel.app",
  locale: "en_IN",
  phoneDisplay: "+91 98290 44118",
  phoneTel: "+919829044118",
  whatsapp: "919829044118",
  whatsappMessage:
    "Hi Ironhouse, I train in Jaipur and want to book a free trial this week.",
  email: "train@ironhousejaipur.in",
  address: {
    line1: "Plot 14, First Floor, Amrapali Marg",
    line2: "Near Amrapali Circle, Vaishali Nagar",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302021",
    full: "Plot 14, First Floor, Amrapali Marg, Near Amrapali Circle, Vaishali Nagar, Jaipur 302021",
  },
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Amrapali%20Circle%20Vaishali%20Nagar%20Jaipur&t=&z=16&ie=UTF8&iwloc=&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Amrapali%20Circle%20Vaishali%20Nagar%20Jaipur%20302021",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Ironhouse%20Strength%20Co%20Vaishali%20Nagar%20Jaipur",
  timezone: "Asia/Kolkata",
  hoursNote:
    "Floor shuts 11 AM to 4 PM. Equipment gets wiped. Staff eat. You should too.",
  hours: [
    {
      day: 1,
      label: "Monday",
      slots: [
        { label: "Morning", start: "05:30", end: "11:00" },
        { label: "Evening", start: "16:00", end: "22:30" },
      ],
    },
    {
      day: 2,
      label: "Tuesday",
      slots: [
        { label: "Morning", start: "05:30", end: "11:00" },
        { label: "Evening", start: "16:00", end: "22:30" },
      ],
    },
    {
      day: 3,
      label: "Wednesday",
      slots: [
        { label: "Morning", start: "05:30", end: "11:00" },
        { label: "Evening", start: "16:00", end: "22:30" },
      ],
    },
    {
      day: 4,
      label: "Thursday",
      slots: [
        { label: "Morning", start: "05:30", end: "11:00" },
        { label: "Evening", start: "16:00", end: "22:30" },
      ],
    },
    {
      day: 5,
      label: "Friday",
      slots: [
        { label: "Morning", start: "05:30", end: "11:00" },
        { label: "Evening", start: "16:00", end: "22:30" },
      ],
    },
    {
      day: 6,
      label: "Saturday",
      slots: [
        { label: "Morning", start: "06:00", end: "11:00" },
        { label: "Evening", start: "16:00", end: "21:30" },
      ],
    },
    {
      day: 0,
      label: "Sunday",
      slots: [
        { label: "Morning", start: "06:00", end: "12:00" },
        { label: "Evening", start: "16:00", end: "20:00" },
      ],
    },
  ] satisfies DayHours[],
  social: {
    instagram: "https://www.instagram.com/ironhousejaipur",
    facebook: "https://www.facebook.com/ironhousejaipur",
    youtube: "https://www.youtube.com/@ironhousejaipur",
  },
  credit: "Website by Utsav Doye",
  mapsIframeTitle: "Map of Ironhouse Strength Co. in Vaishali Nagar, Jaipur",
} as const;

export const nav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/classes", label: "Classes" },
  { href: "/memberships", label: "Memberships" },
  { href: "/trainers", label: "Trainers" },
  { href: "/trial", label: "Free Trial" },
];

export const ui = {
  skipToContent: "Skip to content",
  call: "Call",
  whatsapp: "WhatsApp",
  freeTrial: "Free Trial",
  bookClass: "Book this class",
  getDirections: "Get directions",
  openNow: "Open now",
  closed: "Closed",
  opensAt: "Opens",
  closesAt: "Closes",
  seeAllReviews: "See all reviews on Google",
  menu: "Menu",
  closeMenu: "Close menu",
  allTypes: "All types",
  allTrainers: "All coaches",
  matchingClasses: "classes on the board",
  spotsLeft: "spots left",
  duration: "Duration",
  intensity: "Intensity",
  coach: "Coach",
  bring: "Bring",
  today: "Today",
  monthly: "Monthly",
  quarterly: "Quarterly",
  annual: "Annual",
  mostPopular: "Most walked",
  joiningFee: "Joining fee",
  included: "On the floor",
  notIncluded: "Not in this tier",
  saveAmount: "Save",
  savePercent: "Save",
  yearSuffix: "yrs",
  visitGym: "Walk in",
  hoursHeading: "Hours",
  contactHeading: "Talk to the floor",
  addressHeading: "Find us",
  quickLinks: "Jump",
  socialHeading: "Follow the work",
  pageFallbackTitle: "Ironhouse Strength Co. · Jaipur",
} as const;
