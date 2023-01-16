import { atom } from "jotai";

export const workoutAtom = atom([
  {
    name: "bla",
    description: "bladescription",
    sets: 5,
    repetitions: 3,
    duration: 10,
    breaktime: 90,
  },
  {
    name: "blubb",
    sets: 3,
    repetitions: 3,
    duration: 15,
    breaktime: 120,
  },
]);
