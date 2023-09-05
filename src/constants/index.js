import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  // carrent,
  triviapp,
  cocktail,
  dijkstra,
  tripguide,
  threejs,
  kermitlabs,
  Skytop,
  TawkitAI,
  atai,
  dom,
  will,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Next.js Developer",
    company_name: "Kermit Labs",
    icon: kermitlabs,
    // iconBg: "#383E56",
    iconBg: "white",
    date: "March 2023 - Present",
    points: [
      "Leveraged Next.js to build a high-performance, server-rendered web application that achieved a 40% improvement in page load times, ensuring seamlessly responsive layouts for mobile, tablet, and desktop devices.",
      "Implemented styled-components to create a cohesive, easily maintainable styling system, resulting in a 20% reduction in codebase size and ensuring 98% UI update success rate for a consistently polished appearance throughout the application.",
      "Utilized React hooks to efficiently manage local component states, leading to a 30% reduction in state-related bugs, significantly reducing the complexity of state management and streamlining the development process.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Skytop Strategies",
    icon: Skytop,
    iconBg: "#E6DEDD",
    date: "November 2022 - March 2023",
    points: [
      "Developed and maintained the website's React.js front-end, ensuring smooth functionality and user experience on over 20 web pages.",
      "Integrated the React.js front-end with the WordPress back-end, enabling seamless content management and data transfer.",
      "Utilized 12 WordPress plugins and themes to customize the website's back-end functionality and appearance.",
      "Ensured the website is responsive and mobile-friendly, using CSS and other web design best practices to optimize its layout across devices.",
      "Conducted regular testing and debugging to identify and resolve any issues, ensuring the website is secure, stable, and up-to-date."
    ],
  },
  {
    title: "Web Developer",
    company_name: "TawkitAI",
    icon: TawkitAI,
    // iconBg: "#383E56",
    iconBg: "darkGrey",
    date: "April 2022 - October 2022",
    points: [
      "Produced visual elements of Tawkit web application by translating UI/UX design Figma wireframes into code while producing high quality, reusable markup using HTML and CSS.",
      "Refactored existing code to simplify modification, streamline readability, and significantly reduce technical debt while optimizing existing code to improve efficiency.",
      "Fixed over 20 bugs in Tawkit’s Typescript source code.",
      "Collaborated with 2 senior software engineers, receiving guidance and mentorship, resulting in the development of new skills and strategies.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      'Tani is highly professional, motivated, and responsive. He stands by his commitments, is very willing to learn and grow his expertise, and doesn\'t back down upon hitting snags and difficulties. He shows a lot of promise and will be a strong asset on any team.',
    name: "Atai Barkai",
    designation: "CEO",
    company: "TawkitAI",
    image: atai,
  },
  {
    testimonial:
      "I worked with Tani on a software project at Flatiron. His technical expertise is impressive, and he excels at problem-solving and delivering top-notch code. Tani is also a dedicated and collaborative team player, and his enthusiasm for his work is infectious.",
    name: "Dominick Ugas ",
    designation: "Software Engineer",
    company: "Buster",
    image: dom,
  },
  {
    testimonial:
      "During my tenure as Tani's manager, I was consistently impressed by his ability to problem solve and work through technical challenges. Tani's curiosity, resilience, and commitment to excellence made him a terrific software engineer and a pleasure to work with.",
    name: "Will Mosto",
    designation: "Director of Engineering",
    company: "Skytop Strategies",
    image: will,
  },
];

const projects = [
  {
    name: "Cocktail MixMaster",
    description:
      "All-in-one web app search engine designed for cocktail enthusiasts, bartenders, and anyone looking to master the art of mixology.",
    tags: [
      {
        name: "vanillajs",
        color: "blue-text-gradient",
      },
      {
        name: "json",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: cocktail,
    source_code_link: "https://github.com/tanikaye/cocktailSearchEngine",
    demo_link: "https://tanikaye.github.io/cocktailSearchEngine/"
  },
  {
    name: "TriviApp",
    description:
      "Dynamic trivia web application with option to select between 3 difficulty levels and 24 category levels.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: triviapp,
    source_code_link: "https://github.com/tanikaye/triviaAppProject",
    demo_link: "https://ojtriv.onrender.com/Registration"
  },
  {
    name: "Pathfinding Visualizer",
    description:
      "A pathfinding visualizer showcasing Dijkstra's algorithm for finding the shortest path on  an interactive grid-based map.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "graphtheory",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dijkstra,
    source_code_link: "https://github.com/tanikaye/my-site",
    demo_link: "https://my-site-pathfinder.vercel.app/"
  },
];

export { services, technologies, experiences, testimonials, projects };