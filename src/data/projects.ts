export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Smart QR Restaurant Menu System",
    description:
      "A full-stack web app allowing restaurants to manage digital menus and receive orders via QR codes. Built with Next.js, Firebase, and Tailwind CSS.",
    image: "/imgs/qr-restaurant.png",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "QR Code", "MongoDB"],
    links: {
      github: "https://github.com/Ameenijaz/DINE_QR_WEB_APP",
      live: "",
    },
  },
  {
    id: 2,
    title: "OTT Streaming App",
    description:
      "A React Native-based mobile and TV app offering movies, live streaming, and seasons with secure user login and facial verification.",
    image: "/imgs/ott-app.png",
    tags: ["React Native", "Firebase", "Live Streaming", "Face Detection"],
    links: {
      github: "https://github.com/SonderBluOfficial/SonderBlu_Web",
      live: "",
    },
  },
  {
    id: 3,
    title: "Food Ordering App",
    description:
      "This is a mobile application built using React Native for ordering food from various restaurants.",
    image: "/imgs/food-app.png",
    tags: [
      "React Native",
      "React Navigation",
      "Redux",
      "Axios",
      "Firebase",
      "Stripe",
    ],
    links: {
      github: "https://github.com/reilukuljetus/customer-app",
      live: "",
    },
  },
  // {
  //   id: 4,
  //   title: "Portfolio with Admin CMS",
  //   description:
  //     "A dynamic portfolio site built with Next.js 13+ and Sanity CMS to manage content in real-time with elegant animations and modern UI.",
  //   image: "/imgs/portfolio.png",
  //   tags: ["Next.js 13", "Sanity CMS", "Tailwind CSS", "Framer Motion"],
  //   links: {
  //     github: "https://github.com/Sameer447/nextjs-portfolio",
  //     live: "https://sameer-portfolio.vercel.app/",
  //   },
  // },
];
