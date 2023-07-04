import {
  web,
  mobile,
  backend,
  udemy,
  uniatlantico,
  fcc,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  threejs,
  git,
  parallax,
  openIA,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "User Experience",
    icon: backend,
  },
];
const experiences = [
  {
    title: "Chemical Pharmacist.",
    company_name: "Universidad del Atlántico",
    iconBg: "#ffff",
    date: "2012-2017",
    points: [
      "After studying pharmacy and working in the field I switched my interest to IT.",
      "My education has not only provided me with a solid foundation in my chosen field of study but has also helped me develop critical thinking and problem-solving skills that are essential to success in any profession.",
    ],
    icon: uniatlantico,
  },
  {
    title: "Web Development Basics: HTML, CSS & JS.",
    company_name: "Udemy",
    iconBg: "#E6DEDD",
    date: "Jun 2021",
    points: [
      "I started this path a few years after moved to Croatia (Yes, I live in this beatifull country)",
      "I watched YouTube tutorials and took courses with top instructors to expand my skills and gain valuable insights in web development.",
    ],
    icon: udemy,
    learned: ["HTML 5"],
  },
  {
    title: "Immersing into the web development: React Js & Node Js.",
    company_name: "Udemy",
    iconBg: "#E6DEDD",
    date: "Sept 2021 - 2022",
    points: [
      "After gaining confidence in my JavaScript skills, I embraced React Js as the next step in my journey",
      "With a clear goal in mind, I set my sights on becoming a full stack developer. To accomplish this, I embarked on the path of learning Node.js. Recognizing its importance in server-side JavaScript development",
    ],
    icon: udemy,
    learned: "React JS",
  },
  {
    title: "Fundamentals and more Tech.",
    company_name: "FreeCodeCamp / Udemy / Three Journey ",
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Since I am an enthusiastic about criptocurrency I started to look into Blockchain development with Solidity",
      "Currently, my primary focus in the learning process lies in mastering the fundamentals. With a fresh perspective, I am meticulously reviewing everything from scratch. By approaching the basics with a renewed mindset, I aim to deepen my understanding and solidify the core principles.",
      "I also want to keep moving forward and approach new technologies such as Tailwind css and ThreeJs",
    ],
    icon: fcc,
    learned: "Three JS",
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];
const projects = [
  {
    name: "Dall-E 2.0",
    description:
      "The web page uses DALL-E to create random and unique images. The user-friendly interface allows users to easily generate and explore these captivating visuals.",
    tags: [
      {
        name: "Next",
        color: "blue-text",
      },
      {
        name: "mongodb",
        color: "green-text",
      },
      {
        name: "restAPI",
        color: "green-text",
      },
    ],
    image: openIA,
    github_link: "https://github.com/aelt95/DALL-E-Project",
    live_link: "https://dall-e-app-aelt.netlify.app/",
  },
  {
    name: "Parallax",
    description:
      "The web page showcases an eye-catching parallax effect that captivates visitors. The background elements move at different speeds, creating a visually stunning and immersive experience.",
    tags: [
      {
        name: "react",
        color: "blue-text",
      },
      {
        name: "css",
        color: "pink-text",
      },
    ],
    image: parallax,
    github_link:
      "https://github.com/aelt95/parallex-effect/tree/master/parallax-effect",
    live_link: "https://parallex-effect-aelt.netlify.app/",
  },
];
export { navLinks, services, experiences, technologies, projects };
