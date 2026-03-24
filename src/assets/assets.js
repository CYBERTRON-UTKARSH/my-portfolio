import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaPython, FaFire, FaLaptopCode, FaNodeJs, FaStripe,  FaDatabase, FaVuejs, FaCloud, FaRobot } from 'react-icons/fa';
import { SiVercel } from "react-icons/si"; 

import profileImg from './sumit.jpeg';
import projectImg1 from './Screenshot(34).png';
import projectImg2 from './project2.avif';
import projectImg3 from './Screenshot(35).png';
import projectImg4 from './Screenshot(36).png';
import projectImg5 from './Screenshot(37).png';
import projectImg6 from './Screenshot(38).png';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'JavaScript', 'React.js']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express.js']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'NoSQL']
  },
  {
    title: 'Python Development',
    icon: FaPython,
    description: 'Python development is used to build software, websites, and automation tools easily and efficiently.',
    tags: ['Python', 'NumPy', 'library', 'Fuction']
  },
  {
    title: 'Vercel',
    icon: SiVercel,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['Meta', 'Environment', 'Git']
  },
  {
    title: 'VPS Hostinger',
    icon: FaLaptopCode,
    description: 'Deployed MERN Stack Web based app on the virtual private server on the hostinger platform uding the linux machine and pm2 and Ubuntu operating system',
    tags: ['MERN Stack', 'Node.js', 'Backend Development', 'VPS Deployment', 'Cloud / Hosting', 'Linux / Ubuntu']
  }
];

export const projects = [
  {
    id: 1,
    title: "Vander Engines Website for USA",
    description: "A complete full stack website for the engines and transmissions",
    image: projectImg1,
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "https://vanderengines.com/",
    // code: "https://pokemon-card-app-alpha.vercel.app/",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: projectImg2,
    tech: ["React.js", "REST API", "Tailwind CSS" ,"Node Js", "Express Js"],
    icons: [FaVuejs, FaFire, FaCloud, FaDatabase],
    demo: "https://e-commerce-frontend-1q7359rqv-anas-projects-8cb9ba05.vercel.app",
    // code: "https://github.com/anaskhan08274-alt/E-Commerce-Frontend",
  },
  {
    id: 3,
    title: "SS TECH CRM",
    description: "A complete CRM for the sales agent has been developed and implement Ring Central software in it and fetched from the mail",
    image: projectImg3,
    tech: ["HTML", "CSS", "JAVASRCIPT", "React.js", "Tailwind CSS", "Express.js", "Node JS", "MySQL"],
    icons: [FaReact, FaDatabase],
    demo: "https://sstechcrm.com/",
    // code: "https://github.com/anaskhan08274-alt/response",
  },
  {
    id: 4,
    title: "Vander Engines Transmissions Website for USA",
    description: "A complete full stack lead generation website for the Engines and Transmissions over 40+ make and models in the usa .",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS", "Express.js", "Node.js", "Mysql", "HTML", "CSS", "JavaScript"],
    icons: [FaReact, FaCloud],
    demo: "https://vanderenginestransmissions.com/",
    code: "https://github.com/anaskhan08274-alt/Portfolio",
  },
  {
    id: 5,
    title: "SS TECH SERVICES ",
    description: "A complete company portfolio website for the usa client for the IT Services and Ecommerce Bussiness.",
    image: projectImg5,
    tech: ["HTML", "CSS", "JavaScript", "React js ", "Node js", "Express js"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "https://sstechservices.net/",
    code: "https://github.com/anaskhan08274-alt/Adding-machine",
  },
  {
    id: 6,
    title: "USA AUTO PARTS WEBSITE",
    description: "A complete full stack lead generation website for the auto parts build in HTML CSS JAVASCRIPT PHP AND MYSQL WITH BOOTSTRAP.",
    image: projectImg6,
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MYSQL", "BootStrap"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "https://usaauto-parts.com/",
    code: "https://github.com/anaskhan08274-alt/Random-img-genrate",
  },
];

export const workData = [
  {
    role: "Full Stack Developer",
    company: "Hanumant Technology / SS Technolody.",
    duration: "3+ Years",
    description:
      "Full Stack Developer with experience building scalable web applications using front-end and back-end technologies.",
    color: "purple"
  },
  
];


