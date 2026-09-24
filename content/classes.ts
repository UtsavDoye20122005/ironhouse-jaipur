import type { GymClass } from "./types";

export const classes: GymClass[] = [
  {
    id: "iron-hour",
    name: "Iron Hour",
    type: "Strength",
    blurb:
      "Barbell compounds. You squat, hinge, press. We count. No playlist louder than the plates.",
    durationMin: 60,
    intensity: "High",
    whatToBring: "Flat shoes, chalk if you own it, 1 litre water, a towel that has seen work.",
  },
  {
    id: "squat-club",
    name: "Squat Club",
    type: "Strength",
    blurb:
      "Back squat, front squat, pause work. Three racks. No talking through someone else's set.",
    durationMin: 60,
    intensity: "Peak",
    whatToBring: "Knee sleeves if you use them, belt, water.",
  },
  {
    id: "olympic-lifts",
    name: "Olympic Lifts",
    type: "Strength",
    blurb:
      "Hang power clean and jerk progressions. Small groups. Vikram will not let you yank the bar.",
    durationMin: 60,
    intensity: "High",
    whatToBring: "Olympic lifting shoes or a stable flat sole. Wrist wraps optional.",
  },
  {
    id: "engine-hiit",
    name: "Engine HIIT",
    type: "HIIT",
    blurb:
      "Assault bike, rower, floor. 40 on / 20 off. You will hate minute nine. That is the point.",
    durationMin: 45,
    intensity: "Peak",
    whatToBring: "Trainers with grip, a spare shirt, water.",
  },
  {
    id: "box-blast",
    name: "Box Blast",
    type: "HIIT",
    blurb:
      "Bag rounds mixed with sled pushes. Priya runs the clock. You do not negotiate with the clock.",
    durationMin: 45,
    intensity: "High",
    whatToBring: "Wraps if you have them, indoor shoes, water.",
  },
  {
    id: "the-wod",
    name: "The WOD",
    type: "CrossFit",
    blurb:
      "Daily programmed piece. Scaled or RX. Whiteboard goes up at 4:50 PM. No late scalers after 5.",
    durationMin: 60,
    intensity: "Peak",
    whatToBring: "Grips, tape, shoes you can jump in, water.",
  },
  {
    id: "sunrise-yoga",
    name: "Sunrise Yoga",
    type: "Yoga",
    blurb:
      "Hips and breath before the city wakes. Ananya keeps it quiet. Phones stay in the locker.",
    durationMin: 60,
    intensity: "Low",
    whatToBring: "Mat if you have one. We have extras. Bare feet.",
  },
  {
    id: "power-yoga",
    name: "Power Yoga",
    type: "Yoga",
    blurb:
      "Stronger holds, longer plank. Still yoga. Still no talking in savasana.",
    durationMin: 60,
    intensity: "Moderate",
    whatToBring: "Mat, water, clothes you can move in.",
  },
  {
    id: "zumba-night",
    name: "Zumba Night",
    type: "Zumba",
    blurb:
      "Sneha's Saturday room is loud on purpose. You will sweat. You will not be graded.",
    durationMin: 45,
    intensity: "Moderate",
    whatToBring: "Court shoes, water. Leave jewellery at home.",
  },
  {
    id: "mma-fundamentals",
    name: "MMA Fundamentals",
    type: "MMA",
    blurb:
      "Stance, clinch, pad work. Imran does not teach cinematic spinning kicks on week one.",
    durationMin: 60,
    intensity: "High",
    whatToBring: "16oz gloves if you own them, mouthguard, clean indoor shoes.",
  },
  {
    id: "spar-lab",
    name: "Spar Lab",
    type: "MMA",
    blurb:
      "Controlled rounds. Headgear on. Consent before every pair. This is not a street fight.",
    durationMin: 60,
    intensity: "Peak",
    whatToBring: "Headgear, 16oz gloves, mouthguard, shin guards.",
  },
];

export const classTypeOrder: GymClass["type"][] = [
  "Strength",
  "HIIT",
  "CrossFit",
  "Yoga",
  "Zumba",
  "MMA",
];
