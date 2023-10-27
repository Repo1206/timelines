const marvel = [
  {
    title: "Ironman",
    released: 2008,
    takesPlace: 2008,
    description: "",
    universe: "MCU",
    phase: "1",
  },
  {
    title: "The incredible hulk",
    released: 2008,
    takesPlace: 2008,
    description: "",
    universe: "MCU",
    phase: "1",
  },
  {
    title: "Thor",
    released: 2008,
    takesPlace: 2008,
    description: "",
    universe: "MCU",
    phase: "1",
  },
  {
    title: "Captian Marvel",
    released: 2017,
    takesPlace: 1995,
    description: "",
    universe: "MCU",
    phase: "3",
  },
];

const order = marvel.map((marvel) => marvel.takesPlace);
const titles = marvel.map((marvel) => marvel.title);
const releaseDate = marvel.map((marvel) => marvel.released);
const watchOrder = marvel.map((marvel) => ({
  title: marvel.title,
  takesPlace: marvel.takesPlace,
}));

const chronologicalOrder = watchOrder.sort();
console.log(order);
console.log(titles);
console.log(releaseDate);
console.log(watchOrder);
