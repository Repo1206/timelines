document.addEventListener("DOMContentLoaded", () => {

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
      title: "Iron Man 2",
      released: 2010,
      takesPlace: 2010,
      description: "",
      universe: "MCU",
      phase: "1",
    },
    {
      title: "Thor",
      released: 2011,
      takesPlace: 2011,
      description: "",
      universe: "MCU",
      phase: "1",
    },
    {
      title: "Captain America: The First Avenger",
      released: 2011,
      takesPlace: 1942,
      description: "",
      universe: "MCU",
      phase: "1",
    },
    {
      title: "The Avengers",
      released: 2012,
      takesPlace: 2012,
      description: "",
      universe: "MCU",
      phase: "1",
    },
    {
      title: "Iron Man 3",
      released: 2013,
      takesPlace: 2012,
      description: "",
      universe: "MCU",
      phase: "2",
    },
    {
      title: "Thor: The Dark World",
      released: 2013,
      takesPlace: 2013,
      description: "",
      universe: "MCU",
      phase: "2",
    },
    // {
    //   title: "Captain America: The Winter Soldier",
    //   released: 2014,
    //   takesPlace: 2014,
    //   description: "",
    //   universe: "MCU",
    //   phase: "2",
    // },
    // {
    //   title: "Guardians of the Galaxy",
    //   released: 2014,
    //   takesPlace: 2014,
    //   description: "",
    //   universe: "MCU",
    //   phase: "2",
    // },
    // {
    //   title: "Avengers: Age of Ultron",
    //   released: 2015,
    //   takesPlace: 2015,
    //   description: "",
    //   universe: "MCU",
    //   phase: "2",
    // },
    // {
    //   title: "Ant-Man",
    //   released: 2015,
    //   takesPlace: 2015,
    //   description: "",
    //   universe: "MCU",
    //   phase: "2",
    // },
    // {
    //   title: "Captain America: Civil War",
    //   released: 2016,
    //   takesPlace: 2016,
    //   description: "",
    //   universe: "MCU",
    //   phase: "3",
    // },
    // {
    //   title: "Doctor Strange",
    //   released: 2016,
    //   takesPlace: 2016,
    //   description: "",
    //   universe: "MCU",
    //   phase: "3",
    // },
    // {
    //   title: "Guardians of the Galaxy Vol. 2",
    //   released: 2017,
    //   takesPlace: 2014,
    //   description: "",
    //   universe: "MCU",
    //   phase: "3",
    // },
    // {
    //   title: "Spider-Man: Homecoming",
    //   released: 2017,
    //   takesPlace: 2017,
    //   description: "",
    //   universe: "MCU",
    //   phase: "3",
    // },
    // {
    //   title: "Thor: Ragnarok",
    //   released: 2017,
    //   takesPlace: 2017,
    //   description: "",
    //   universe: "MCU",
    //   phase: "3",
    // },
    // {
    //   title: "Black Panther",
    //   released: 2018,
    //   takesPlace: 2016,
    //   description: "",
    //   universe: "MCU",
    //   phase: "3",
    // },
    // {
    //   title: "Avengers: Infinity War",
    //   released: 2018,
    //   takesPlace: 2018,
    //   description: "",
    //   universe: "MCU",
    //   phase: "3",
    // },
    // {
    //   title: "Ant-Man and The Wasp",
    //   released: 2018,
    //   takesPlace: 2018,
    //   description: "",
    //   universe: "MCU",
    //   phase: "3",
    // },
    // {
    //   title: "Captain Marvel",
    //   released: 2019,
    //   takesPlace: 1995,
    //   description: "",
    //   universe: "MCU",
    //   phase: "3",
    // },
    // {
    //   title: "Avengers: Endgame",
    //   released: 2019,
    //   takesPlace: 2023,
    //   description: "",
    //   universe: "MCU",
    //   phase: "3",
    // },
    // {
    //   title: "Spider-Man: Far From Home",
    //   released: 2019,
    //   takesPlace: 2024,
    //   description: "",
    //   universe: "MCU",
    //   phase: "3",
    // },
    // {
    //   title: "Black Widow",
    //   released: 2021,
    //   takesPlace: 2016,
    //   description: "",
    //   universe: "MCU",
    //   phase: "4",
    // },
    // {
    //   title: "Shang-Chi and the Legend of the Ten Rings",
    //   released: 2021,
    //   takesPlace: 2023,
    //   description: "",
    //   universe: "MCU",
    //   phase: "4",
    // },
    // {
    //   title: "Eternals",
    //   released: 2021,
    //   takesPlace: 2023,
    //   description: "",
    //   universe: "MCU",
    //   phase: "4",
    // },
    // {
    //   title: "Spider-Man: No Way Home",
    //   released: 2021,
    //   takesPlace: 2024,
    //   description: "",
    //   universe: "MCU",
    //   phase: "4",
    // },
    // {
    //   title: "Doctor Strange in the Multiverse of Madness",
    //   released: 2022,
    //   takesPlace: 2023,
    //   description: "",
    //   universe: "MCU",
    //   phase: "4",
    // },
    // {
    //   title: "Black Panther: Wakanda Forever",
    //   released: 2023,
    //   takesPlace: 2025,
    //   description: "",
    //   universe: "MCU",
    //   phase: "4",
    // },








    // {
    //   title: "Agent Carter (season 1)",
    //   released: "January 2015 – February 2015",
    //   takesPlace: "1946",
    //   description: "",
    //   universe: "MCU",
    //   phase: "1",
    // },
    // {
    //   title: "Agent Carter (season 2)",
    //   released: "January 2016 – February 2016",
    //   takesPlace: "1947",
    //   description: "",
    //   universe: "MCU",
    //   phase: "1",
    // },
    // {
    //   title: "Agents of SHIELD (season 1, eps 1-7)",
    //   released: "September 2013 – May 2014",
    //   takesPlace: "2013",
    //   description: "",
    //   universe: "MCU",
    //   phase: "2",
    // },
    // {
    //   title: "Agents of SHIELD (season 1, eps 8-16)",
    //   released: "September 2013 – May 2014",
    //   takesPlace: "2013",
    //   description: "",
    //   universe: "MCU",
    //   phase: "2",
    // },
    // {
    //   title: "Agents of SHIELD (season 1, eps 17-22)",
    //   released: "September 2013 – May 2014",
    //   takesPlace: "2013",
    //   description: "",
    //   universe: "MCU",
    //   phase: "2",
    // },
    // {
    //   title: "Agents of SHIELD (season 2, eps 1-10)",
    //   released: "September 2014 – May 2015",
    //   takesPlace: "2014",
    //   description: "",
    //   universe: "MCU",
    //   phase: "2",
    // },
    // {
    //   title: "Agents of SHIELD (season 2, eps 11-19)",
    //   released: "September 2014 – May 2015",
    //   takesPlace: "2015",
    //   description: "",
    //   universe: "MCU",
    //   phase: "2",
    // },
    // {
    //   title: "Agents of SHIELD (season 2, eps 20-22)",
    //   released: "September 2014 – May 2015",
    //   takesPlace: "2015",
    //   description: "",
    //   universe: "MCU",
    //   phase: "2",
    // },
    // {
    //   title: "Agents of SHIELD (season 3, eps 1-10)",
    //   released: "September 2015 – May 2016",
    //   takesPlace: "2015",
    //   description: "",
    //   universe: "MCU",
    //   phase: "2",
    // },
    // {
    //   title: "Agents of SHIELD (season 3, eps 11-19)",
    //   released: "September 2015 – May 2016",
    //   takesPlace: "2016",
    //   description: "",
    //   universe: "MCU",
    //   phase: "2",
    // },
    // {
    //   title: "Agents of SHIELD (season 3, eps 20-22)",
    //   released: "September 2015 – May 2016",
    //   takesPlace: "2016",
    //   description: "",
    //   universe: "MCU",
    //   phase: "3",
    // },
    // {
    //   title: "Agents of SHIELD (season 4, eps 1-6)",
    //   released: "September 2016 – May 2017",
    //   takesPlace: "2016",
    //   description: "",
    //   universe: "MCU",
    //   phase: "3",
    // },
    // {
    //   title: "Agents of SHIELD (season 4, eps 7-8)",
    //   released: "September 2016 – May 2017",
    //   takesPlace: "2017",
    //   description: "",
    //   universe: "MCU",
    //   phase: "3",
    // },
    // {
    //   title: "Agents of SHIELD: Slingshot (season 1, eps 1-6)",
    //   released: "December 2016",
    //   takesPlace: "2016",
    //   description: "",
    //   universe: "MCU",
    //   phase: "3",
    // },
    // {
    //   title: "Agents of SHIELD (season 4, eps 9-22)",
    //   released: "December 2016",
    //   takesPlace: "2016",
    //   description: "",
    //   universe: "MCU",
    //   phase: "3",
    // },
    // {
    //   title: "Agents of SHIELD (season 5, eps 1-10) – allowing for time travel craziness",
    //   released: "December 2017 – May 2018",
    //   takesPlace: "2017",
    //   description: "",
    //   universe: "MCU",
    //   phase: "3",
    // },
    // {
    //   title: "Agents of SHIELD (season 5, eps 11-18)",
    //   released: "December 2018",
    //   takesPlace: "2018",
    //   description: "",
    //   universe: "MCU",
    //   phase: "3",
    // },
    // {
    //   title: "Agents of SHIELD (season 6) – takes place in Endgame's five-year time jump",
    //   released: "December 2019",
    //   takesPlace: "2023",
    //   description: "",
    //   universe: "MCU",
    //   phase: "4",
    // },
    // {
    //   title: "Agents of SHIELD (season 7) – takes place in Endgame's five-year time jump",
    //   released: "December 2020",
    //   takesPlace: "2023",
    //   description: "",
    //   universe: "MCU",
    //   phase: "4",
    // },
    // {
    //   title: "Runaways (season 3) – seems to take place post-Snap mostly",
    //   released: "December 2019",
    //   takesPlace: "2023",
    //   description: "",
    //   universe: "MCU",
    //   phase: "4",
    // },
    // {
    //   title: "Loki (season 1) (allowing for timey-wimey, alternate timeline weirdness)",
    //   released: "June 2021 – July 2021",
    //   takesPlace: "alternate timelines",
    //   description: "",
    //   universe: "MCU",
    //   phase: "4",
    // },
    // {
    //   title: "Loki (season 2)",
    //   released: "October 2023",
    //   takesPlace: "alternate timelines",
    //   description: "",
    //   universe: "MCU",
    //   phase: "4",
    // },
    // {
    //   title: "What If...?",
    //   released: "August 2021 – October 2021",
    //   takesPlace: "alternate realities",
    //   description: "",
    //   universe: "MCU",
    //   phase: "4",
    // },
    // {
    //   title: "WandaVision",
    //   released: "January 2021 – March 2021",
    //   takesPlace: "alternate reality (Wanda's creation)",
    //   description: "",
    //   universe: "MCU",
    //   phase: "4",
    // },
    // {
    //   title: "The Falcon and the Winter Soldier",
    //   released: "March 2021 – April 2021",
    //   takesPlace: "2023",
    //   description: "",
    //   universe: "MCU",
    //   phase: "4",
    // },
    // {
    //   title: "Hawkeye",
    //   released: "November 2021 – December 2021",
    //   takesPlace: "2024",
    //   description: "",
    //   universe: "MCU",
    //   phase: "4",
    // },
    // {
    //   title: "Moon Knight (season 1)",
    //   released: "March 2022 – May 2022",
    //   takesPlace: "2023",
    //   description: "",
    //   universe: "MCU",
    //   phase: "4",
    // },
  ];

  // Sort the marvel array by either takesPlace or released property
  // To sort by takesPlace (chronological order), use 'a.takesPlace - b.takesPlace'
  // To sort by released (release order), use 'a.released - b.released'
  const sortedMarvel = marvel.sort((a, b) => a.takesPlace - b.takesPlace);

  const orders = sortedMarvel.map((marvel) => ({
    title: marvel.title,
    takesPlace: marvel.takesPlace,
    released: marvel.released,
    phase: marvel.phase,
  }));

  const chronologicalOrder = [...orders];
  const releaseOrder = [...orders].sort((a, b) => a.released - b.released);

  const button = document.querySelector('.sort');
  const container = document.querySelector('.items-container');

  // Set the initial order to releaseOrder or chronologicalOrder
  let currentOrder = chronologicalOrder; //can define this based on logic

  console.log("Chronological Order:", chronologicalOrder);
  console.log("Release Order:", releaseOrder);


  // Select the container element

  // An array to hold the created timeline items
  const timelineItems = [];

  // Define the timeline data (can use an array to store timeline data)
  const timelineData = [];

  // Iterate through the marvel data and generate the timeline data
  marvel.forEach((movie) => {
    timelineData.push({
      year: movie.takesPlace,
      event: `${movie.title} (Takes Place: ${movie.takesPlace}, Released: ${movie.released})`,
    });
  });

  // Function to create a timeline item element
  function createTimelineItem(item) {
    const timelineItem = document.createElement('div');
    timelineItem.classList.add('single-item');

    const eventElement = document.createElement('span');
    eventElement.textContent = item.event;

    timelineItem.appendChild(eventElement);

    timelineItem.addEventListener('click', () => {
      timelineItem.classList.toggle('active');
    });

    return timelineItem;
  }

  // Create the initial timeline based on the current order
  timelineData.forEach((item) => {
    const timelineItem = createTimelineItem(item);
    timelineItems.push(timelineItem);
    container.appendChild(timelineItem);
  });
  console.log(currentOrder)



  // Create the initial timeline based on the current order
  currentOrder.forEach(item => {
    const timelineItem = createTimelineItem(item);
    timelineItems.push(timelineItem);
    container.appendChild(timelineItem);
  });

  // Handle the click event on the "sort" button

  button.addEventListener('click', () => {
    if (currentOrder === releaseOrder) {
      currentOrder = chronologicalOrder;
      document.querySelector('.order').textContent = 'Chronological Order';
    } else {
      currentOrder = releaseOrder;
      document.querySelector('.order').textContent = 'Release Order';
    }
    // Remove the existing items from the container
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // Re-append the sorted items based on the current order
    timelineItems.sort((a, b) => {
      const eventA = a.textContent;
      const eventB = b.textContent;
      const itemA = currentOrder.find(item => eventA.includes(item.event));
      const itemB = currentOrder.find(item => eventB.includes(item.event));
      return currentOrder.indexOf(itemA) - currentOrder.indexOf(itemB);
    });

    timelineItems.forEach(timelineItem => {
      container.appendChild(timelineItem);
    });
  });
})