
import { useState } from "react";
import "./App.css";

import ids from "./assets/ids.jpg";
import workout from "./assets/workout.PNG";
import jwt from "./assets/jwt.PNG";
import userPost from "./assets/user-post.PNG";
import shoe from "./assets/shoe.PNG";
import AiLanding from "./assets/ai-landing.PNG";
import chess from "./assets/chess.PNG";
import library from "./assets/library.PNG";
import qr from "./assets/qr.PNG";
import random from "./assets/random.PNG";
import logo from "./assets/logo.png";
import fidha from "./assets/me.jpg";
import fidha2 from "./assets/me1.jpg";

const projects = [
  {
    title: "AI Intrusion Detection System",
    category: "Python · Django · Flutter · MySQL · CNN",
    description:
      "A cybersecurity application that uses a CNN-based model to identify suspicious network activity and helps monitor attacks through security logs and blocked IP records. Built to support the detection and prevention of malicious network behavior.",
    image: ids,
    link: "#contact",
  },
  {
    title: "Workout Buddy — Personal Fitness Tracker",
    category: "MongoDB · Express · React · Node.js",
    description:
      "A full-stack fitness application designed to help users organize and manage their workouts. It brings workout information and tracking features together in an intuitive interface, making fitness routines easier to manage.",
    image: workout,
    link: "https://illustrious-fenglisu-084df5.netlify.app/",
  },
  {
    title: "SecureAuth — JWT Authentication System",
    category: "React · Express · Node.js · JWT",
    description:
      "A full-stack authentication application featuring user registration and login with JSON Web Tokens. It demonstrates frontend and backend integration, authentication flows, and access control for protected application routes.",
    image: jwt,
    link: "https://creative-frangollo-697f57.netlify.app/",
  },
   {
    title: "UserPost — User & Post Management Platform",
    category: "MongoDB · Express · React · Node.js",
    description:
      "A MERN-stack application for managing user information and posts in one place. The project demonstrates structured data handling and the integration of a React interface with a Node.js and Express backend.",
    image: userPost,
    link: "https://sprightly-gnome-d13c33.netlify.app/",
  },
   {
    title: "SoleSpace — Online Shoe Store",
    category: "React · JavaScript · CSS",
    description:
      "A modern shoe-shopping interface featuring product-focused layouts and an organized browsing experience. Designed to demonstrate reusable React components, interactive UI elements, and responsive e-commerce design.",
    image: shoe,
    link: "https://deft-daffodil-d86e49.netlify.app/",
  },
   {
    title: "AI Workspace Landing Page",
    category: "HTML5 · Tailwind CSS",
    description:
      "A contemporary landing page concept for an AI-powered workspace, featuring a polished hero section, clear content hierarchy, and modern styling. Built to demonstrate responsive web design and the presentation of a digital product.",
    image: AiLanding,
    link: "https://genuine-crisp-4156fa.netlify.app/",
  },
  {
    title: "React Chessboard — Interactive Chess UI",
    category: "React · JavaScript · CSS",
    description:
      "An interactive chessboard built with React to demonstrate component-based UI development and state management. The board provides a visual environment for chess pieces and move interactions.",
    image:  chess,
    link: "https://transcendent-youtiao-664cc8.netlify.app/",
  },
  {
    title: "Greenwood Public Library — Library Website",
    category: "HTML5 · Tailwind CSS",
    description:
      "A clean, responsive website concept for a public library, designed to present library information and create an accessible browsing experience. The project highlights layout design, styling, and responsive frontend development.",
    image: library,
    link: "https://animated-kheer-2492b6.netlify.app/",
  },
  {
    title: "QuickQR — QR Code Generator",
    category: "HTML · CSS · JavaScript",
    description:
      "A lightweight utility that turns user-provided information into a QR code. Designed to make QR code creation straightforward through a simple input interface and clear results.",
    image: qr,
    link: "https://fidhat26.github.io/my-allprojects/QrCode/",
  },
   {
    title: "Random User Generator — Dynamic Profile Explorer",
    category: "HTML · CSS · JavaScript · API",
    description:
      "A web application that generates random user profiles for an interactive browsing experience. It demonstrates working with dynamic data, displaying profile information, and updating the interface with user details.",
    image:  random,
    link: "https://fidhat26.github.io/my-allprojects/Random/",
  },
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "jQuery",
  "React.js",
  "Tailwind CSS",
  "Bootstrap",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Git",
  "GitHub",
  "REST APIs",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="navbar">
       
      <a className="logo" href="#home" onClick={closeMenu}>
        <span className="logo-mark">
          <img src={logo} alt="Fidha logo" />
        </span>
        <span>
          Fathima Fidha<span className="logo-dot"></span>
        </span>
      </a>


        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["Home", "About", "Projects", "Skills", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
              >
                {item}
              </a>
            )
          )}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's Talk <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        {/* HOME */}
        <section className="hero section" id="home">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="eyebrow-line" />
              FULL STACK DEVELOPER
            </span>

            <h1>
              Hello, I'm
              <br />
              <span className="serif-name">Fathima Fidha</span>
            </h1>

            <p className="hero-description">
              I build modern, responsive and meaningful web
              experiences using creative design and clean code.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                Explore My Work <span>↗</span>
              </a>
              <a href="#contact" className="button button-outline">
                Contact Me
              </a>
            </div>

            <div className="hero-note">
              <span className="status-dot" />
              Open to opportunities
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-blob" />
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />

            
            <div className="portrait-frame">
              <img
                src={fidha}
                alt="Fathima Fidha"
              />
            </div>


            <div className="floating-card">
              <span className="floating-icon">✳</span>
              <div>
                <strong>Creative Developer</strong>
                <span>Turning ideas into reality</span>
              </div>
            </div>

            <span className="hero-star star-one">✳</span>
            <span className="hero-star star-two">✦</span>
          </div>

          <a className="scroll-cue" href="#about">
            <span /> SCROLL TO EXPLORE
          </a>
        </section>

        {/* ABOUT */}
        <section className="about section" id="about">
          <div className="section-heading">
            <span className="eyebrow">A LITTLE ABOUT ME</span>
            <h2>More than just <span>code.</span></h2>
          </div>

          <div className="about-grid">
            <div className="about-visual">
              <div className="about-circle" />
              <img
                src={fidha2}
                alt="Your portrait"
              />
              <div className="about-stamp">CURIOUS BY NATURE ✳</div>
            </div>

            <div className="about-copy">
              <span className="small-label">WHO I AM</span>
              <h3>
                I love turning
                <br />
                <span>ideas into experiences.</span>
              </h3>
              <p>
                I'm a Computer Science graduate and aspiring Full Stack
                Developer passionate about building modern, responsive,
                and user-friendly web applications.
              </p>
              <p>
                I enjoy transforming ideas into meaningful digital
                experiences through clean code, thoughtful design, and
                problem-solving. With a growing foundation in React,
                JavaScript, Node.js, Express, and MongoDB, I'm
                continuously exploring new technologies and strengthening
                my development skills through hands-on projects.
              </p>
              <p>
                I'm always eager to learn, take on new challenges, and
                collaborate on projects that turn creative ideas into
                impactful solutions.
              </p>

              <div className="about-facts">
                <div>
                  <strong>React</strong>
                  <span>Frontend</span>
                </div>
                <div>
                  <strong>MERN</strong>
                  <span>Full stack</span>
                </div>
                <div>
                  <strong>Always</strong>
                  <span>Learning</span>
                </div>
              </div>

              <a
                href="/resume.pdf"
                className="button button-primary"
                target="_blank"
                rel="noreferrer"
              >
                View My Resume <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects section" id="projects">
          <div className="section-heading centered">
            <span className="eyebrow">SELECTED WORK</span>
            <h2>Things I've <span>built.</span></h2>
            <p>A few projects that showcase my skills and creativity.</p>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article
                className={`project-card ${
                  index % 2 === 1 ? "reverse" : ""
                }`}
                key={project.title}
              >
                <a
                  href={project.link}
                  className="project-image"
                  aria-label={`View ${project.title}`}
                >
                  <img src={project.image} alt={project.title} />
                  <span className="image-arrow">↗</span>
                </a>

                <div className="project-info">
                  <span className="project-number">
                    PROJECT 0{index + 1}
                  </span>
                  <span className="project-category">
                    {project.category}
                  </span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a className="text-link" href={project.link}>
                    View Project <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills section" id="skills">
          <div className="section-heading centered">
            <span className="eyebrow">MY TOOLKIT</span>
            <h2>Skills & <span>technologies.</span></h2>
            <p>Technologies I use to bring ideas to life.</p>
          </div>

          <div className="skills-panel">
            <div className="skills-intro">
              <span className="skills-symbol">✳</span>
              <h3>Built with curiosity.<br />Powered by code.</h3>
              <p>
                My toolkit keeps growing as I learn, experiment
                and build real-world projects.
              </p>
            </div>

            <div className="skill-tags">
              {skills.map((skill, index) => (
                <span
                  className="skill-tag"
                  style={{ "--delay": `${index * 45}ms` }}
                  key={skill}
                >
                  <span className="skill-check">✦</span>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact section" id="contact">
          <div className="contact-heading">
            <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
            <h2>Let's make something <span>great.</span></h2>
            <p>
              Have an opportunity, an idea or just want to say hello?
              I'd love to hear from you.
            </p>
            <a
              className="contact-email"
              href="mailto:fathimafidhat313@gmail.com"
            >
              fathimafidhat313@gmail.com <span>↗</span>
            </a>
          </div>

          <form
            className="contact-form"
            action="https://formsubmit.co/your.email@example.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="New portfolio message"
            />
            <input
              type="hidden"
              name="_captcha"
              value="true"
            />

            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />

            <label htmlFor="contact-message">Your message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="4"
              placeholder="Tell me about your idea..."
              required
            />

            <button type="submit" className="button button-primary">
              Send Message <span>↗</span>
            </button>
          </form>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          
        <a className="logo footer-logo" href="#home">
          <span className="logo-mark">
            <img src={logo} alt="Fidha logo" />
          </span>
          <span>
            Fathima Fidha<span className="logo-dot">.</span>
          </span>
        </a>

          <p>Thoughtfully built. Passionately coded.</p>

          <div className="social-links">
            <a href="https://github.com/fidhat26"
               target="_blank" rel="noreferrer">GH</a>
            <a href="https://www.linkedin.com/in/fathima-fidhat/"
               target="_blank" rel="noreferrer">IN</a>
            <a href="mailto:fathimafidhat313@gmail.com">@</a>
            <a  href="https://app.netlify.com/teams/fathimafidhat313/projects" 
               target="_blank" rel="noreferrer" aria-label="Netlify" title="Netlify"> N</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Fathima Fidha</span>
          <a href="#home">Back to top ↑</a>
          <span>Made with care & a little purple.</span>
        </div>
      </footer>
    </>
  );
}

export default App;
