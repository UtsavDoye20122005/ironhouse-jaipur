import type { DayIndex, ScheduleSlot } from "./types";

function s(
  id: string,
  day: DayIndex,
  start: string,
  classId: string,
  trainerId: string,
  spotsLeft: number,
  spotsTotal = 16,
): ScheduleSlot {
  return { id, day, start, classId, trainerId, spotsLeft, spotsTotal };
}

export const weekDays: { index: DayIndex; short: string; full: string }[] = [
  { index: 1, short: "Mon", full: "Monday" },
  { index: 2, short: "Tue", full: "Tuesday" },
  { index: 3, short: "Wed", full: "Wednesday" },
  { index: 4, short: "Thu", full: "Thursday" },
  { index: 5, short: "Fri", full: "Friday" },
  { index: 6, short: "Sat", full: "Saturday" },
  { index: 0, short: "Sun", full: "Sunday" },
];

export const timetableTimes = [
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
] as const;

export const schedule: ScheduleSlot[] = [
  s("mon-0600", 1, "06:00", "sunrise-yoga", "ananya", 9, 18),
  s("mon-0700", 1, "07:00", "iron-hour", "vikram", 4, 12),
  s("mon-0800", 1, "08:00", "engine-hiit", "priya", 6, 14),
  s("mon-0900", 1, "09:00", "olympic-lifts", "vikram", 3, 8),
  s("mon-1700", 1, "17:00", "the-wod", "rohan", 5, 16),
  s("mon-1800", 1, "18:00", "mma-fundamentals", "imran", 7, 12),
  s("mon-1900", 1, "19:00", "zumba-night", "sneha", 11, 20),
  s("mon-2000", 1, "20:00", "squat-club", "vikram", 2, 10),

  s("tue-0600", 2, "06:00", "iron-hour", "vikram", 5, 12),
  s("tue-0700", 2, "07:00", "power-yoga", "ananya", 8, 16),
  s("tue-0800", 2, "08:00", "the-wod", "rohan", 6, 16),
  s("tue-1000", 2, "10:00", "engine-hiit", "priya", 10, 14),
  s("tue-1700", 2, "17:00", "box-blast", "priya", 4, 12),
  s("tue-1800", 2, "18:00", "olympic-lifts", "vikram", 3, 8),
  s("tue-1900", 2, "19:00", "mma-fundamentals", "imran", 6, 12),
  s("tue-2100", 2, "21:00", "spar-lab", "imran", 2, 8),

  s("wed-0600", 3, "06:00", "sunrise-yoga", "ananya", 12, 18),
  s("wed-0700", 3, "07:00", "squat-club", "vikram", 3, 10),
  s("wed-0800", 3, "08:00", "box-blast", "priya", 7, 12),
  s("wed-0900", 3, "09:00", "the-wod", "rohan", 8, 16),
  s("wed-1700", 3, "17:00", "iron-hour", "vikram", 5, 12),
  s("wed-1800", 3, "18:00", "zumba-night", "sneha", 9, 20),
  s("wed-1900", 3, "19:00", "power-yoga", "ananya", 10, 16),
  s("wed-2000", 3, "20:00", "mma-fundamentals", "imran", 4, 12),

  s("thu-0600", 4, "06:00", "engine-hiit", "priya", 6, 14),
  s("thu-0700", 4, "07:00", "iron-hour", "vikram", 4, 12),
  s("thu-0800", 4, "08:00", "sunrise-yoga", "ananya", 11, 18),
  s("thu-1000", 4, "10:00", "olympic-lifts", "vikram", 2, 8),
  s("thu-1700", 4, "17:00", "the-wod", "rohan", 6, 16),
  s("thu-1800", 4, "18:00", "box-blast", "priya", 5, 12),
  s("thu-1900", 4, "19:00", "spar-lab", "imran", 1, 8),
  s("thu-2000", 4, "20:00", "squat-club", "vikram", 3, 10),

  s("fri-0600", 5, "06:00", "power-yoga", "ananya", 9, 16),
  s("fri-0700", 5, "07:00", "the-wod", "rohan", 7, 16),
  s("fri-0800", 5, "08:00", "iron-hour", "vikram", 4, 12),
  s("fri-0900", 5, "09:00", "engine-hiit", "priya", 8, 14),
  s("fri-1700", 5, "17:00", "mma-fundamentals", "imran", 6, 12),
  s("fri-1800", 5, "18:00", "zumba-night", "sneha", 13, 20),
  s("fri-1900", 5, "19:00", "olympic-lifts", "vikram", 4, 8),
  s("fri-2100", 5, "21:00", "box-blast", "priya", 5, 12),

  s("sat-0700", 6, "07:00", "the-wod", "rohan", 3, 16),
  s("sat-0800", 6, "08:00", "iron-hour", "vikram", 2, 12),
  s("sat-0900", 6, "09:00", "zumba-night", "sneha", 8, 20),
  s("sat-1000", 6, "10:00", "sunrise-yoga", "ananya", 10, 18),
  s("sat-1700", 6, "17:00", "mma-fundamentals", "imran", 5, 12),
  s("sat-1800", 6, "18:00", "engine-hiit", "priya", 6, 14),
  s("sat-1900", 6, "19:00", "squat-club", "vikram", 4, 10),

  s("sun-0700", 0, "07:00", "sunrise-yoga", "ananya", 14, 18),
  s("sun-0800", 0, "08:00", "power-yoga", "ananya", 12, 16),
  s("sun-0900", 0, "09:00", "the-wod", "rohan", 9, 16),
  s("sun-1000", 0, "10:00", "zumba-night", "sneha", 11, 20),
  s("sun-1700", 0, "17:00", "iron-hour", "vikram", 7, 12),
  s("sun-1800", 0, "18:00", "box-blast", "priya", 8, 12),
];
