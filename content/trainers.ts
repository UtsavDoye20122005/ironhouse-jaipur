import type { Trainer } from "./types";

const u = (id: string, w = 900, h = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const trainers: Trainer[] = [
  {
    id: "vikram",
    name: "Vikram Rathore",
    role: "Head coach",
    specialisation: "Powerlifting & Olympic lifts",
    certifications: ["NASM-CPT", "K11 Level 2", "ACE-CPT"],
    years: 11,
    philosophy: "If the bar path is ugly, the ego is louder than the work.",
    image: {
      src: u("photo-1571019614242-c5c5dee9f50b"),
      alt: "Coach Vikram Rathore coaching a barbell session on the Ironhouse floor",
      width: 900,
      height: 1200,
    },
  },
  {
    id: "ananya",
    name: "Ananya Sharma",
    role: "Mobility lead",
    specialisation: "Yoga & hip restoration",
    certifications: ["ACE Health Coach", "K11 Yoga"],
    years: 8,
    philosophy: "Strong hips keep Jaipur knees in the game past 40.",
    image: {
      src: u("photo-1518611012118-696072aa579a"),
      alt: "Coach Ananya Sharma mid-lunge on a dark gym floor",
      width: 900,
      height: 1200,
    },
  },
  {
    id: "rohan",
    name: "Rohan Meena",
    role: "Engineer of the WOD",
    specialisation: "CrossFit programming",
    certifications: ["NASM-CPT", "K11 Strength"],
    years: 7,
    philosophy: "Scale the load. Don't scale the honesty.",
    image: {
      src: u("photo-1583454110551-21f2fa2afe61"),
      alt: "Coach Rohan Meena bracing under a squat bar",
      width: 900,
      height: 1200,
    },
  },
  {
    id: "priya",
    name: "Priya Khandelwal",
    role: "Conditioning",
    specialisation: "HIIT & sled work",
    certifications: ["ACE-CPT", "NASM-CPT"],
    years: 6,
    philosophy: "Your engine is built on days you wanted to skip the bike.",
    image: {
      src: u("photo-1574680096145-d05b474e2155"),
      alt: "Coach Priya Khandelwal training with a barbell in low light",
      width: 900,
      height: 1200,
    },
  },
  {
    id: "imran",
    name: "Imran Khan",
    role: "Combat",
    specialisation: "MMA fundamentals",
    certifications: ["K11 Combat", "ACE-CPT"],
    years: 9,
    philosophy: "Pad work first. Sparring is a privilege you earn with control.",
    image: {
      src: u("photo-1549719386-74dfcbf7dbed"),
      alt: "Coach Imran Khan wrapping hands before an MMA session",
      width: 900,
      height: 1200,
    },
  },
  {
    id: "sneha",
    name: "Sneha Joshi",
    role: "Rhythm floor",
    specialisation: "Zumba & group energy",
    certifications: ["ACE Group Fitness", "K11"],
    years: 5,
    philosophy: "If you can laugh and still hit the beat, you will come back tomorrow.",
    image: {
      src: u("photo-151796387427-ea74dc6dfe68"),
      alt: "Coach Sneha Joshi leading a high-energy group class",
      width: 900,
      height: 1200,
    },
  },
];
