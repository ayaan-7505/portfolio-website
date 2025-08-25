import Canvas3D from "./sections/Canvas3D";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import type { EducationItem } from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import type { Project } from "./components/Projects";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import type { ContactInfo } from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css"

/**
 * Resume data (filled from your PDF)
 * You can later move this into src/data/resumeData.ts if you prefer.
 */
const resume = {
  name: "Ayaan Ahmad Siddiqui",
  role: "Computer Engineering Undergrad | Full-Stack Developer",
  summary:
    "Computer Engineering undergrad at Jamia Millia Islamia with a passion for learning new technologies. Keen interest in full-stack web development and data structures & algorithms. Proficient in C/C++, Python, JavaScript, and more. A hardworking individual ready to tackle challenges and contribute to real-world projects.",
  contact: {
    email: "ayaanahmadsiddiqui12a@gmail.com",
    phone: "7505858487",
    location: "New Delhi, Delhi, India",
    linkedin: "http://www.linkedin.com/in/ayaan-ahmad-siddiqui-46ba41255",
    github: "https://github.com/ayaan-7505",
    leetcode: "https://leetcode.com/u/_ayaan7/",
    gfg: "https://www.geeksforgeeks.org/user/ayaanahmzodp/",
  } as ContactInfo,
  education: [
    {
      institution: "Jamia Millia Islamia, Faculty of Engineering and Technology",
      degree: "B.Tech in Computer Engineering",
      duration: "Oct 2022 – Jun 2026",
      gpa: "8.62/10",
    },
    {
      institution: "Montfort Inter College, Lucknow",
      degree: "Intermediate (PCM)",
      duration: "2019 – 2021",
      score: "96%",
    },
    {
      institution: "Montfort Inter College, Lucknow",
      degree: "High School",
      duration: "2017 – 2019",
      score: "90%",
    },
  ] as EducationItem[],
  skills: [
    "C",
    "C++",
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
    "React.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "MongoDB",
    "MySQL",
    "Docker",
    "Linux",
    "Git & GitHub",
  ],
  projects: [
    {
      title: "MyRenter",
      description:
        "Broker-free real estate platform built with MERN, Firebase, and JWT token. Owners list estates for rent/sale, users acquire listings directly.",
      github: "https://github.com/ayaan-7505/MyRenter",
    },
    {
      title: "Realtime Chat App",
      description:
        "Real-time chat app (MERN) with JWT auth, Daisy-UI, Zustand for state, and Socket.io for messaging.",
      github: "https://github.com/ayaan-7505/chat-app",
    },
    {
      title: "Snake Game",
      description:
        "Classic Snake using C++ and SFML with smooth graphics, responsive controls, and score tracking.",
      github: "https://github.com/ayaan-7505/snake-game",
    },
  ] as Project[],
  certificates: [
    {
      name: "Affective Computing",
      link: "https://drive.google.com/file/d/1qQg6zxQOnvBURJbComchdCMFM6wsQ6Yq/view?usp=drive_link"
    },
    {
      name: "Cloud Computing",
      link: "https://drive.google.com/file/d/1qRKaehJNQQ5MusqUJmlXRtjuau_iRONF/view?usp=drive_link"
    },
    {
      name: "Oracle Cloud Infrastructure AI Foundations",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=CCBA36E6CA59C48F11B5214722FE58F25F85A162869AF9320B964AE2B4776E2C"
    }
  ],
  achievements: [
    "Achieved 4th position in the department during the first year",
    "Solved 500+ coding problems across LeetCode & GeeksforGeeks",
  ],
};

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Canvas3D /> {/* Should be first child */}
      <div className="relative z-10"> {/* Wrap content to place above canvas */}
        <Navbar />
        <main>
          <Hero
            name={resume.name}
            role={resume.role}
            summary={resume.summary}
            links={{
              github: resume.contact.github,
              linkedin: resume.contact.linkedin,
              leetcode: resume.contact.leetcode!,
              gfg: resume.contact.gfg!,
            }}
          />
          <About summary={resume.summary} />
          <Education items={resume.education} />
          <Skills skills={resume.skills} />
          <Projects items={resume.projects} />
          <Certificates items={resume.certificates} />
          <Achievements items={resume.achievements} />
          <Contact info={resume.contact} />
        </main>
        <Footer />
      </div>
    </div>
  );
}


