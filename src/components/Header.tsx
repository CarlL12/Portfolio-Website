import {
  faGithub,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import useActiveSection from "../custom-hooks/useActiveSections";

export const Header = () => {
  const activeSection = useActiveSection();
  const links = [
    { id: "aboutme", text: "ABOUT" },
    { id: "experience", text: "EXPERIENCE" },
    { id: "projects", text: "PROJECTS" },
    { id: "contact", text: "CONTACT" },
  ];
  return (
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
        {links.map((link, index) => (
          <motion.a
            key={link.id}
            href={`#${link.id}`}
            className={
              "header-link " + (activeSection === link.id ? "active" : "")
            }
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + 0.2 * index, duration: 0.5 }}
          >
            {link.text}
          </motion.a>
        ))}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="btn-green"
          href="/CV.pdf"
          download="CV.pdf"
        >
          Resume
        </motion.a>
      </div>
      <motion.div
        className="social-media"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
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
      </motion.div>
    </header>
  );
};
