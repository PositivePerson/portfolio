import { Project } from './project-template';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "QuaranTime",
    img: "quaranTime.jpg",
    link: "https://quarantimer.now.sh/",
    description: " Quarantime - created due to situation on the world. Many countries had to close institutions like schools. On this website you could e.g. watch timers relative to that. Also I placed there general information based on research that might help people in taking better decisions in this time.",
    tools:
      // {
      //   Javascript: true,
      //   jQuery: true,
      //   HTML: true,
      //   CSS: true,
      //   Bootstrap: true,
      //   Semantic: true,
      //   Angular: true,
      //   React: false,
      //   MongoDB: false,
      //   Hawler: false,
      //   PaperScript: false
      // }
      [
        "Javascript",
        "jQuery",
        "HTML",
        "CSS",
        "Bootstrap",
        "Semantic",
        "Angular"
      ]
  },
  {
    id: 2,
    name: "YelpCamp",
    img: "yelpcamp.png",
    link: "https://fun-riding.herokuapp.com/",
    description: "YelpCamp - app that allows to create accounts, post images with description, put comments, edit etc. Thanks to databases it saves everything; Passwords are protected so remains stored with safety. ",
    tools:
      // {
      //   Javascript: true,
      //   jQuery: true,
      //   HTML: true,
      //   CSS: true,
      //   Bootstrap: true,
      //   Semantic: true,
      //   Angular: false,
      //   React: false,
      //   MongoDB: true,
      //   Hawler: false,
      //   PaperScript: false
      // }
      [
        "Javascript",
        "HTML",
        "CSS",
        "Bootstrap",
        "Ejs",
        "MongoDB",
        "Express"
      ]
  },
  {
    id: 3,
    name: "TodoPage",
    img: "TodoPage.png",
    link: "https://positiveperson.github.io/To-Do-List/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    tools:
      // {
      //   Javascript: true,
      //   jQuery: true,
      //   HTML: true,
      //   CSS: true,
      //   Bootstrap: true,
      //   Semantic: false,
      //   Angular: false,
      //   React: false,
      //   MongoDB: false,
      //   Hawler: false,
      //   PaperScript: false
      // }
      [
        "Javascript",
        "jQuery",
        "HTML",
        "CSS"
      ]
  },
  {
    id: 4,
    name: "MuseumOfCandy",
    img: "CandyPage.png",
    link: "https://positiveperson.github.io/MuseumOfCandy/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    tools:
      //     {
      //       Javascript: false,
      //       jQuery: false,
      //       HTML: true,
      //       CSS: true,
      //       Bootstrap: true,
      //       Semantic: false,
      //       Angular: false,
      //       React: false,
      //       MongoDB: false,
      //       Hawler: false,
      //       PaperScript: false
      //     }
      [
        "HTML",
        "CSS",
        "Bootstrap"
      ]
  },
  {
    id: 5,
    name: "CircleSite",
    img: "circlesv2.png",
    link: "https://positiveperson.github.io/CircleSite/",
    description: "Turn on sound. Click different keys and watch what happen; Project created with Javascript in 98%. Inspiration: patatap.",
    tools:
      //     {
      //       Javascript: true,
      //       jQuery: true,
      //       HTML: true,
      //       CSS: true,
      //       Bootstrap: true,
      //       Semantic: true,
      //       Angular: false,
      //       React: false,
      //       MongoDB: false,
      //       Hawler: true,
      //       PaperScript: true
      //     }
      [
        "Javascript",
        "Howler",
        "Paper.js",
        "HTML",
        "CSS"
      ]
  }
]
