import {
  faGithub,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import useActiveSection from "../custom-hooks/useActiveSections";

const HeaderAboutMe = () => {
  const activeSection = useActiveSection();

  const links = [
    { id: "aboutme", text: "ABOUT" },
    { id: "experience", text: "EXPERIENCE" },
    { id: "projects", text: "PROJECTS" },
    { id: "contact", text: "CONTACT" },
  ];

  const techKnowledgeList = [
    { text: "JavaScript" },
    { text: ".NET" },
    { text: "TypeScript" },
    { text: "ASP.NET" },
    { text: "C#" },
    { text: "HTML" },
    { text: "CSS" },
    { text: "Azure" },
    { text: "React" },
    { text: "Umbraco" },
    { text: "SQL" },
    { text: "NOSQL" },
    { text: "Blazor" },
    { text: "Aurelia" },
  ];

  return (
    <div className="header-about-me">
      <header>
        <div className="header-title">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Carl Lindqvist
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Fullstack Developer
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            I develop scalable and maintainable web solutions, combining
            performance with great user experience
          </motion.p>
        </div>
        <div className="links">
          {links.map((link) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              className={
                "header-link " + (activeSection === link.id ? "active" : "")
              }
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {link.text}
            </motion.a>
          ))}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="btn-green"
            href="/CV.pdf"
            download="CV.pdf"
          >
            Resume
          </motion.a>
        </div>
        <div className="social-media">
          <a href="https://github.com/CarlL12" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
          </a>
          <a href="https://www.linkedin.com/in/lindqvist-carl/" target="_blank">
            <FontAwesomeIcon
              href="https://www.linkedin.com/in/lindqvist-carl/"
              icon={faLinkedin}
              size="2x"
            ></FontAwesomeIcon>
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faGoogle}
              size="2x"
              target="_blank"
            ></FontAwesomeIcon>
          </a>
        </div>
      </header>
      <section className="about-me" id="aboutme">
        <h3 className="section-title">About me</h3>
        <p>
          I’m a developer passionate about building scalable and maintainable
          applications. I enjoy working at the intersection of backend and
          frontend, ensuring that systems are not only functional but also
          efficient and well-structured. My focus is on creating solutions that
          enable rapid development without compromising on quality.
        </p>
        <p>
          Currently, I’m an intern at Hogia, where I’m working with micro
          frontends to improve modularity, enable independent deployments, and
          reduce dependencies within large systems. My work involves
          technologies like .NET, TypeScript, and Microsoft Azure, with a strong
          emphasis on performance and maintainability.
        </p>
        <p>
          During my education, I have deepened my knowledge in full-stack
          development, working with C#, ASP.NET, Blazor, SQL, NoSQL, React, and
          more. I’m also actively exploring new technologies and refining my
          skills through various projects, including developing trading
          strategies on TradingView’s platform.
        </p>
        <p>
          In my spare time, I enjoy gaming, experimenting with new coding
          concepts, and continuously improving my workflow.
        </p>
        <div className="technical-knowledge">
          <h3>Technical knowledge</h3>
          <div className="technical-btn-list">
            {techKnowledgeList.map((item) => (
              <button className="btn-green">{item.text}</button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeaderAboutMe;
