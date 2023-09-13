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
  space,
  starbucks,
  bookstore,
  rescue,
  shopify,
  threejs
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About"
  },
  {
    id: "work",
    title: "Work"
  },
  {
    id: "contact",
    title: "Contact"
  }
];

const services = [
  {
    title: "WordPress Developer",
    icon: web
  },
  {
    title: "React JS Developer",
    icon: mobile
  },
  {
    title: "Ruby on Rail Developer",
    icon: backend
  },
  {
    title: "Content Creator",
    icon: creator
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html
  },
  {
    name: "CSS 3",
    icon: css
  },
  {
    name: "JavaScript",
    icon: javascript
  },
  {
    name: "TypeScript",
    icon: typescript
  },
  {
    name: "React JS",
    icon: reactjs
  },
  {
    name: "Redux Toolkit",
    icon: redux
  },
  {
    name: "Tailwind CSS",
    icon: tailwind
  },
  {
    name: "Node JS",
    icon: nodejs
  },
  {
    name: "MongoDB",
    icon: mongodb
  },
  {
    name: "Three JS",
    icon: threejs
  },
  {
    name: "git",
    icon: git
  },
  {
    name: "figma",
    icon: figma
  },
  {
    name: "docker",
    icon: docker
  }
];

const experiences = [
  {
    title: "Mentor",
    company_name: "MICROVERSE",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - present",
    points: [
      "Mentored 10 junior web developers, providing technical support through code reviews.",
      "Collaborated with 5 team members to propose improvements to code organization, showcasing strong communication and teamwork skills.",
      "Participating in code reviews and providing constructive feedback to other developers."
    ]
  },
  {
    title: "WordPress Developer",
    company_name: "Freelance",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sept 2018 - Jan 2023",
    points: [
      "Built websites with a huge focus on user experience.",
      "Consistently ensured on-time project delivery to meet or exceed project deadlines.",
      "Implementing responsive design and ensuring cross-browser compatibility."
    ]
  }
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
  //     "Participating in code reviews and providing constructive feedback to other developers."
  //   ]
  // }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg"
  }
];

const projects = [
  {
    name: "Bookstore",
    description:
      "React App where users can track their reading progress, add books.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "CSS",
        color: "green-text-gradient"
      },
      {
        name: "API",
        color: "pink-text-gradient"
      }
    ],
    image: bookstore,
    source_code_link: "https://github.com/Jolak5/Bookstore",
    live_project: "https://book-store-eamv.onrender.com/"
  },
  {
    name: "Rescue Earth",
    description: "React App where users can easily check covid 19 stats.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "restapi",
        color: "green-text-gradient"
      },
      {
        name: "css",
        color: "pink-text-gradient"
      }
    ],
    image: rescue,
    source_code_link: "https://github.com/Jolak5/to-do-list",
    live_project: "https://jolak5.github.io/to-do-list/dist/index.html"
  },
  {
    name: "Space Traveler",
    description:
      "React App where users can easily book and cancle private rocket reservations",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient"
      },
      {
        name: "CSS",
        color: "green-text-gradient"
      },
      {
        name: "RestAPI",
        color: "pink-text-gradient"
      }
    ],
    image: space,
    source_code_link: "https://github.com/Jolak5/space-traveler-hub",
    live_project: "https://space-mission-409j.onrender.com/"
  }
];

export { services, technologies, experiences, testimonials, projects };
