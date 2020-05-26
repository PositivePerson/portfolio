import {Project} from './project-template';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "QuaranTime",
    img: "quaranTime.jpg",
    link: "https://quarantimer.now.sh/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
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
      ],
    prColor: "#2d221e"
  },
  {
    id: 2,
    name: "YelpCamp",
    img: "yelpcamp.png",
    link: "https://fun-riding.herokuapp.com/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
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
        "jQuery",
        "HTML",
        "CSS",
        "Bootstrap",
        "Semantic",
        "MongoDB"
      ],
    prColor: "#8398b9"
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
      ],
    prColor: "#31b0ad"
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
      ],
    prColor: "#dfd4e0"
  },
  {
    id: 5,
    name: "CircleSite",
    img: "circlesv2.png",
    link: "https://positiveperson.github.io/CircleSite/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
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
        "jQuery",
        "HTML",
        "CSS"
      ],
    prColor: "#333"
  }
]
