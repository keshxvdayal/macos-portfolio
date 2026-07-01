import type {
  NavLink,
  NavIcon,
  DockApp,
  TechStackItem,
  Social,
  PhotoLink,
  GalleryItem,
  Location,
  WindowConfig,
} from './types';

export const navLinks: NavLink[] = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

export const navIcons: NavIcon[] = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

export const dockApps: DockApp[] = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "calendar",
    name: "Calendar",
    icon: "calendar.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: false,
  },
];

export const techStack: TechStackItem[] = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Shadcn UI", "CSS"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Express", "Golang Gin", "NestJS",],
  },
  {
    category: "DevOps",
    items: ["k8s", "Helm", "FluxCD", "GitHub Actions", "Docker Swarm"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Neovim"],
  },
];

export const socials: Social[] = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/keshxvdayal",
  },
  {
    id: 2,
    text: "Portfolio",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://xiaopengye.kkcloud.org",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/keshav-dayal/",
  },
];

export const photosLinks: PhotoLink[] = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  }
];

export const gallery: GalleryItem[] = [
  {
    id: 1,
    img: "/images/gal1.png",
  }
];

const WORK_LOCATION: Location = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    {
      id: 5,
      name: "Among Us",
      icon: "/images/amongusimg.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "AmongUs.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "I created this website for a Hackathon Organized at Microsoft Office. I managed to get 5000+ views in 1 week. This website is built using React, Tailwind CSS and hosted on Vercel.",
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/keshxvdayal/amongUsTheme-Site/",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://among-us-theme-site.vercel.app/",
          position: "top-32 left-20",
        },
        {
          id: 4,
          name: "amongus.png",
          icon: "/images/amongus.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/amongusimg.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },
    {
      id: 6,
      name: "PrepWise",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "PrepWise.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Built a full-stack mock interview platform where an AI voice agent conducts interviews based on role, level, and tech stack. Integrated Google Gemini for automated feedback with detailed scoring across key competencies. Features Firebase authentication, personal dashboard, and responsive UI using Next.js and Tailwind CSS"
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/keshxvdayal/A.I.-Interview",
          position: "top-20 left-20",
        },
        {
          id: 3,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://a-i-interview.vercel.app/",
          position: "top-32 left-20",
        },
        {
          id: 4,
          name: "prepwiseicon.png",
          icon: "/images/prepwiseicon.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/prepwiseicon.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 left-5",
        // },
      ],
    },
    {
      id: 7,
      name: "Peanuts",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Peanuts.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Traditional coding platforms fail to provide an engaging and interactive learning experience, resulting in disengagement, slow skill development, and limited opportunities for connection and career growth among developers. How can a platform be designed to offer a comprehensive, community-driven, and competitive environment that fosters immersive learning, skill mastery, and career advancement for developers of all levels?"
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/keshxvdayal/PEANUTS",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://https://peanuts-93k9.onrender.com/",
          position: "top-32 left-20",
        },
        {
          id: 4,
          name: "peanuts.png",
          icon: "/images/peanuts.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/peanuts.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },
    {
      id: 8,
      name: "Machine Minds",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 right-10",
      windowPosition: "top-[5vh] right-10",
      children: [
        {
          id: 1,
          name: "MachineMInds.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Traditional methods of learning machine learning models are often perceived as tedious and challenging. This can result in a lack of motivation and engagement, hindering the learning process. Machine Minds is a game-based learning platform for machine learning concepts that solves these problems."
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/keshxvdayal/machine-minds",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/keshxvdayal/machine-minds",
          position: "top-32 left-20",
        },
      ],
    },
    {
      id: 9,
      name: "Algabay ReDesign",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-32 right-10",
      windowPosition: "top-[15vh] right-10",
      children: [
        {
          id: 1,
          name: "Algabay.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Redesigned a website for a startup using Spline, React and Tailwind for a better UI"
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/keshxvdayal/algabay",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://algabay-design.vercel.app/",
          position: "top-32 left-20",
        },
      ],
    },
    {
      id: 10,
      name: "Builder Sage",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-10",
      windowPosition: "top-[25vh] right-10",
      children: [
        {
          id: 1,
          name: "BuilderSage.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Converted a Figma Design into a Web App"
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/keshxvdayal/Baby-Formula-Calculator-UI",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://baby-formula-calculator-ui.vercel.app/",
          position: "top-32 left-20",
        },
      ],
    },
    {
      id: 11,
      name: "Satej E-Commerce",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 right-96",
      windowPosition: "top-[5vh] right-96",
      children: [
        {
          id: 1,
          name: "Satej.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Created an E-Commerce Website for a company named Satej Innovations"
          ],
        },
        {
          id: 2,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://satejinnovations.com/",
          position: "top-32 left-20",
        },
      ],
    },
    {
      id: 12,
      name: "E-Commerce",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-32 right-96",
      windowPosition: "top-[15vh] right-96",
      children: [
        {
          id: 1,
          name: "Ecommerce.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Created an E-Commerce Website"
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/keshxvdayal/e-commerce",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://e-commerce-plum-kappa.vercel.app/",
          position: "top-32 left-20",
        },
      ],
    },
    {
      id: 13,
      name: "Admin Dashboard",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-96",
      windowPosition: "top-[25vh] right-96",
      children: [
        {
          id: 1,
          name: "AdminDash.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Created an Admin Dashboard"
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/keshxvdayal/ADMIN-DASHBOARD/tree/main",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://admin-dashboard-nine-liard.vercel.app/",
          position: "top-32 left-20",
        },
      ],
    },
    {
      id: 14,
      name: "Stock Management",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-96",
      windowPosition: "top-[5vh] left-96",
      children: [
        {
          id: 1,
          name: "StockTool.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A Stock Management Tool"
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/keshxvdayal/STOCK-MARKET-MANAGEMENT-TOOL",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://stock-market-management-tool.vercel.app/",
          position: "top-32 left-20",
        },
      ],
    },
    {
      id: 15,
      name: "Conference App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-32 left-96",
      windowPosition: "top-[15vh] left-96",
      children: [
        {
          id: 1,
          name: "Conference.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A Conference Application built using TypeScript and Tailwind where you can Create Meetings, Join Meetings, Invite your Friends, Record Your Meetings and Schedule Your Meeting"
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/keshxvdayal/CONFERENCE",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://conference-ten-black.vercel.app/",
          position: "top-32 left-20",
        },
      ],
    },
    {
      id: 16,
      name: "Alumni Association",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-96",
      windowPosition: "top-[25vh] left-96",
      children: [
        {
          id: 1,
          name: "Alumni.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Created Alumni Association Website for my college"
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/keshxvdayal/aasc-client",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://aasc-client-dev.vercel.app/",
          position: "top-32 left-20",
        },
      ],
    },
    {
      id: 17,
      name: "ENACTUS",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-72 left-5",
      windowPosition: "top-[35vh] left-5",
      children: [
        {
          id: 1,
          name: "ENACTUS.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Created website for my college society"
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/keshxvdayal/OFFICIAL-ENACTUS",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://enactusmsi.vercel.app/",
          position: "top-32 left-20",
        },
      ],
    },
    {
      id: 18,
      name: "Tinder Swiper",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-72 left-80",
      windowPosition: "top-[35vh] left-80",
      children: [
        {
          id: 1,
          name: "Swiper.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Created a Tinder Swiper using React as a Task from Internship"
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/keshxvdayal/TINDER-SWIPER",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://tinder-swiper.vercel.app/",
          position: "top-32 left-20",
        },
      ],
    },
    {
      id: 19,
      name: "Website Design",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-72 right-80",
      windowPosition: "top-[35vh] right-80",
      children: [
        {
          id: 1,
          name: "Design.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Created an UI/UX Design for SIH (Smart India Hackathon)"
          ],
        },
        {
          id: 2,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://drive.google.com/file/d/13SFPYi5SpriUkjixA0mfOav7CH-tiafk/view?usp=sharing",
          position: "top-32 left-20",
        },
      ],
    },
    {
      id: 20,
      name: "Image Editor Pro",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-72 right-10",
      windowPosition: "top-[35vh] right-10",
      children: [
        {
          id: 1,
          name: "ImageEditor.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Created an Image Editor Pro using React for an internship assignment"
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/keshxvdayal/IMAGE-EDITOR",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://image-editor-pro-app.vercel.app/",
          position: "top-32 left-20",
        },
      ],
    },
    {
      id: 21,
      name: "Food Company",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 right-96",
      windowPosition: "top-[45vh] left-5",
      children: [
        {
          id: 1,
          name: "FoodCompany.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Practicing front-end by cloning a Food-company UI/UX Design"
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/keshxvdayal/FOOD-DELIVERY",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://food-company-app.vercel.app/",
          position: "top-32 left-20",
        },
      ],
    },
    {
      id: 22,
      name: "Blog Page CMS",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-32 right-96",
      windowPosition: "top-[45vh] left-80",
      children: [
        {
          id: 1,
          name: "BlogCMS.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Created a Blog page Content Management System"
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/keshxvdayal/Blog-page",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://enactusmsi-blog.vercel.app/",
          position: "top-32 left-20",
        },
      ],
    },
    {
      id: 23,
      name: "3D & Video",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-96",
      windowPosition: "top-[45vh] right-80",
      children: [
        {
          id: 1,
          name: "3D.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Practicing 3D Modeling and Video Editing to get better day by day"
          ],
        },
        {
          id: 2,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://my.spline.design/roomrelaxingcopy-1f96e1784f9665e01b3e96b52e688169/",
          position: "top-32 left-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION: Location = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/Xiaopeng.png",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/Xiaopeng-2.png",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/Xiaopeng-3.png",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/Xiaopeng.png",
      description: [
        "Hey! I'm Xiaopeng 👋, a software engineer who's just as comfortable spinning up cloud infra as building snappy frontends.",
        "I specialize in React, Next.js, Golang, Python, and have a soft spot for Kubernetes, whether in the cloud or tangled up in my homelab with Proxmox VE.",
        "Turning messy, complex data into slick dashboards and intuitive visualizations is my jam—bonus points if I get to sneak in some AI magic.",
        "When I'm not pushing code, I'm probably tinkering with my homelab setup, binge-watching DevOps tutorials I swore I needed, or impulse-ordering Raspberry Pi accessories at 1AM 😅.",
      ],
    },
  ],
};

const RESUME_LOCATION: Location = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION: Location = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    // {
    //   id: 1,
    //   name: "trash1.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-10 left-10",
    //   imageUrl: "/images/trash-1.png",
    // },
    // {
    //   id: 2,
    //   name: "trash2.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-40 left-80",
    //   imageUrl: "/images/trash-2.png",
    // },
  ],
};

export const locations: Record<string, Location> = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

export const INITIAL_Z_INDEX = 1000;

export const WINDOW_CONFIG: WindowConfig = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
  calendar: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
};
