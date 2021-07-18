import { Project } from './project-template';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "QuaranTime",
    img: "quaranTime.jpg",
    link: "https://quarantimer.now.sh/",
    description: ["Quarantime", "created due to situation on the world", "Many countries had to close institutions like schools. On this website you could e.g. watch timers relative to that", "Also I placed there general information based on research that might help people in taking better decisions in this time."],
    tools:
      [
        "Javascript",
        "jQuery",
        "HTML5",
        "CSS3",
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
    description: ["YelpCamp - app that allows to create accounts", "Post images with description, put comments, edit etc.", "Thanks to databases it saves everything", "Passwords are protected so remains stored with safety. "],
    tools:
      [
        "Javascript",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Ejs",
        "MongoDB",
        "Express"
      ]
  },
  // {
  //   id: 3,
  //   name: "TodoPage",
  //   img: "TodoPage.png",
  //   link: "https://positiveperson.github.io/To-Do-List/",
  //   description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."],
  //   tools:
  //     [
  //       "Javascript",
  //       "jQuery",
  //       "HTML5",
  //       "CSS3"
  //     ]
  // },
  // {
  //   id: 3,
  //   name: "MuseumOfCandy",
  //   img: "CandyPage.png",
  //   link: "https://positiveperson.github.io/MuseumOfCandy/",
  //   description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."],
  //   tools:
  //     [
  //       "HTML5",
  //       "CSS3",
  //       "Bootstrap"
  //     ]
  // },
  {
    id: 3,
    name: "CircleSite",
    img: "circlesv2.png",
    link: "https://positiveperson.github.io/CircleSite/",
    description: ["Turn on sound.", " Click different keys and watch what happen", "Project created with Javascript in 98%", "Inspiration: patatap."],
    tools:
      [
        "Javascript",
        "Howler",
        "Paper",
        "HTML5",
        "CSS3"
      ]
   },
  {
    id: 4,
    name: "Kittypedia",
    img: "kittypedia.png",
    link: "https://kittypedia.vercel.app/",
    description: ["Kittypedia", " Many kitties will appear there", "They render randomly from database of thousands of cats", "All created using react context for API in Next.js structure"],
    tools:
      [
        "Next",
        "Javascript",
        "React",
        "Jsx",
        "CSS3",
        "Styled-components",
        "Framer-motion",
        "Axios"
      ]
   },
  {
    id: 5,
    name: "Turn the light on",
    img: "turn_the_light_on.png",
    link: "https://turn-the-lights-on.vercel.app/",
    description: ["React game", "Find the switch hidden in darkness and turn it on!", "As soon as you start the game timer will start marking milliseconds", "After that - slider above let you manage amount of light on the page.", "Good luck!"],
    tools:
      //     {
      //       Javascript: true,
      //       jQuery: true,
      //       HTML5: true,
      //       CSS3: true,
      //       Bootstrap: true,
      //       Semantic: true,
      //       Angular: false,
      //       React: false,
      //       MongoDB: false,
      //       Hawler: true,
      //       PaperScript: true
      //     }
      [
        "React",
        "Materialize-css",
        "Styled-components",
        "Javascript",
        "Jsx",
        "CSS3"
      ]
   }
]
