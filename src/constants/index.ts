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
    id: 2,
    name: "About",
    type: "about",
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
    img: "/images/wifi.png",
  },
  {
    id: 2,
    img: "/images/search.png",
  },
  {
    id: 3,
    img: "/images/user.png",
  },
  {
    id: 4,
    img: "/images/mode.png",
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
    link: "https://keshavdayalportfolio.vercel.app/",
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
      icon: "/images/folder.png",
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
          image: "/images/amongusimg.png",
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
          image: "/images/prep.png",
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
          image: "/images/peanuts.png",
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
          image: "/images/mm.png",
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
          image: "/images/algabay.png",
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
      name: "Baby Formula UI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-10",
      windowPosition: "top-[25vh] right-10",
      children: [
        {
          id: 1,
          name: "babyformula.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          image: "/images/babyformula.png",
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
          image: "/images/satejinnovations.png",
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
          image: "/images/ecom.png",
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
          image: "/images/stock.png",
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
          image: "/images/allumni.png",
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
          image: "/images/swipe.png",
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
          image: "/images/editor.png",
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
          image: "/images/foodui.png",
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
          image: "/images/blog.png",
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
          image: "/images/3d.png",
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
    {
      id: 24,
      name: "Oomraa",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-72 right-96",
      windowPosition: "top-[45vh] right-96",
      children: [
        {
          id: 1,
          name: "Oomraa.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          image: "/images/oomra.png",
          description: [
            "Yoga AI Coach a local macOS desktop app that watches you hold a plank and gives real-time spoken corrections when your form breaks down. Runs entirely on-device using MediaPipe Pose for skeleton tracking and Gradium TTS for voice feedback. Analyzes hip alignment, head position, and body angle against configurable sensitivity presets, with a companion Vercel-hosted web app for browser-based sessions."
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/keshxvdayal/oomraa",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://oomraa.vercel.app/",
          position: "top-32 left-20",
        },
      ],
    },
    {
      id: 25,
      name: "Talent Headhunter Bot",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-92 left-5",
      windowPosition: "top-[55vh] left-5",
      children: [
        {
          id: 1,
          name: "Headhunter.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "An MVP built in 7 days that monitors Telegram groups via Telethon to identify potential candidates using activity, keyword, and influence scoring. Generates AI-powered outreach drafts with an LLM and persona JSON, requiring manual approval before any DM is sent. Includes reply tracking and a simple password-protected dashboard."
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/keshxvdayal/headhunter",
          position: "top-10 right-20",
        },
      ],
    },
    {
      id: 26,
      name: "AglaStep",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-92 left-80",
      windowPosition: "top-[55vh] left-80",
      children: [
        {
          id: 1,
          name: "AglaStep.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A professional Next.js 15 authentication system built with TypeScript, featuring custom auth with JSON file storage, bcryptjs password hashing, and JWT-based sessions with HTTP-only cookies. Includes a Google Classroom-style collapsible sidebar, protected routes via middleware, and a profile page with Recharts-powered data visualization."
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/keshxvdayal/aglastep",
          position: "top-10 right-20",
        },
      ],
    },
    {
      id: 27,
      name: "Environmental Ethics",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-92 right-80",
      windowPosition: "top-[55vh] right-80",
      children: [
        {
          id: 1,
          name: "EnvironmentalEthics.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          image: "/images/ethics.png",
          description: [
            "A project exploring environmental ethics."
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/keshxvdayal/environmental-ethics",
          position: "top-10 right-20",
        },

        {
          id: 3,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://environmental-ethics-psi.vercel.app/",
          position: "top-32 left-20",
        }
      ],
    },
    {
      id: 28,
      name: "Warehouse Management System",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-92 right-10",
      windowPosition: "top-[55vh] right-10",
      children: [
        {
          id: 1,
          name: "Warehouse.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A full-stack, AI-powered inventory management and analytics platform for SKU mapping, sales data cleaning, dashboarding, and natural language analytics. Built with a React frontend (drag-and-drop uploader, auth, AI chat widget), FastAPI backend, Baserow as a no-code database, and Gemini AI for text-to-SQL querying. Supports combo product handling, regex-based SKU validation, and a live public dashboard."
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/keshxvdayal/Warehouse-Management-System",
          position: "top-10 right-20",
        },
      ],
    },
    {
      id: 29,
      name: "Task Management",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-112 left-5",
      windowPosition: "top-[65vh] left-5",
      children: [
        {
          id: 1,
          name: "TaskManagement.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A modern, full-stack task management application built with Next.js 14, featuring real-time updates, dark/light mode, and NextAuth.js authentication. Supports task assignment, due dates, priorities, and progress tracking, backed by Prisma ORM and PostgreSQL, with a dashboard for analytics and performance metrics built using Shadcn/ui and React Query."
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/keshxvdayal/Task-Management",
          position: "top-10 right-20",
        },
      ],
    },
    {
      id: 30,
      name: "Link Analytics Dashboard",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-112 left-80",
      windowPosition: "top-[65vh] left-80",
      children: [
        {
          id: 1,
          name: "LinkAnalytics.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A full-stack URL shortener and analytics dashboard built as a mini Bitly clone (Micro-SaaS). Lets users create shortened links with custom aliases and expiration dates, then track total clicks, device/browser breakdown, and clicks over time via interactive charts. Features JWT-based auth, async click logging with MongoDB, QR code generation, and dashboard search/pagination. Built with React, Redux Toolkit, Node.js, Express, and MongoDB."
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/keshxvdayal/Url-shortner",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://url-shortner-alpha-orpin.vercel.app/",
          position: "top-32 left-20",
        },
      ],
    },
    {
      id: 31,
      name: "Avensis '25",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-112 right-80",
      windowPosition: "top-[65vh] right-80",
      children: [
        {
          id: 1,
          name: "Avensis.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          image: "/images/avensis.png",
          description: [
            "The official website for Avensis '25, a college fest/event I led end-to-end from planning and design to development and launch. The site handled registrations, event info, and schedules for 2000+ participants, built to be fast, responsive, and easy to navigate under high traffic during the event window."
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/keshxvdayal/avensis-25-website",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://avensis-25.vercel.app/",
          position: "top-32 left-20",
        },
      ],
    },
    {
      id: 32,
      name: "AI Content Generator",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-112 right-10",
      windowPosition: "top-[65vh] right-10",
      children: [
        {
          id: 1,
          name: "AIContent.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "An AI-powered content generation app built with Next.js and TypeScript, designed to help users quickly generate written content using AI. Built on the Next.js App Router with optimized font loading via next/font."
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/keshxvdayal/A.I.-Content",
          position: "top-10 right-20",
        },
      ],
    },
    {
      id: 33,
      name: "WhatsApp Bot",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-132 left-5",
      windowPosition: "top-[75vh] left-5",
      children: [
        {
          id: 1,
          name: "WhatsappBot.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A WhatsApp automation bot with a mix of group-management and productivity features. Supports tagging the entire group with a simple @all keyword (without manually tagging every member), scheduling messages to send at a future time, and adding/removing bots or group members programmatically. Also includes: auto-reply for common queries, welcome/farewell messages for new or leaving members, poll creation directly in chat, spam/link filtering to keep groups clean, and a reminder system for recurring tasks or events."
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/keshxvdayal/Whatsapp-Bot",
          position: "top-10 right-20",
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
      icon: "/images/img.jpeg",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/img.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/img.jpeg",
      description: [
        "Hey! I'm Keshav Dayal 👋, Software Developer with 4+ years of experience designing and shipping scalable",
        "web applications, distributed systems, and AI-powered tools. Comfortable across the stack from crafting",
        "responsive React and Next.js frontends to architecting Python backends with Flask and Django, containerizing",
        "with Docker, and working with PostgreSQL at scale. Has worked across federated cloud infrastructure, open-source",
        "research platforms, and developer tooling, with a track record of contributing to international research ecosystems and production-grade products.",
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
