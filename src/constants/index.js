// import {DaneCroninPhotography, UNCCharlotte, FullCycle  } from "../assets/images";
import {
    // ReactMC,
    contact,
    css,
    // PicMe,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    // ECommerce,
    react,
    redux,
    sass,
    tailwindcss
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },

    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
 
];

export const experiences = [
    {
        title: "Photographer",
        company_name: "Dane Cronin Photography",
        // icon: DaneCroninPhotography,
        iconBg: "#accbe1",
        date: "March 2008 - Current",
        points: [
            "Owned and operated photography business specializing in cycling photography and interior and architectural design photography.",
           
        ],
    },
    {
        title: "Full-Stack Developer Certificate",
        company_name: "UNC Charlotte",
        // icon: UNCCharlotte,
        iconBg: "#fbc3bc",
        date: "June 2022 - Dec 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with other developers to create high-quality projects.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Buyer",
        company_name: "Full Cycle",
        // icon: FullCycle,
        iconBg: "#b7e4c7",
        points: [
            "Worked as a buyer for three store locations and managed all inventory",
            "Collaborated with owner to setup and establish online store.",
            
        ],
    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/DaneCronin',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/DaneCronin',
    }
];

export const projects = [
    {
        // iconUrl: ECommerce,
        theme: 'btn-back-red',
        name: 'ECommerce',
        description: 'Developed a web application for users to sign up, add items to a shopping cart and checkout using Stripe API.',
        link: 'https://github.com/DaneCronin/ECommerce',
    },
   
    {
        // iconUrl: MineCraft,
        theme: 'btn-back-blue',
        name: 'MineCraft',
        description: 'Designed and built a social app where users can sign up, build a world in a MineCraft type environment and save a rendering of the world to post and share.',
        link: 'https://github.com/DaneCronin/ReactMC',
    },
   
    {
        // iconUrl: PicMe,
        theme: 'btn-back-black',
        name: 'PicMe',
        description: 'Developed a web application for users to sign up, login and make posts for other users to like and comment.',
        link: 'https://github.com/DaneCronin/PicMe',
    },
   
];