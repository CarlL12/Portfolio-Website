import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import useActiveSection from "../custom-hooks/useActiveSections";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { headerLinks } from "../data/headerLinks";

export const Header = () => {
  const activeSection = useActiveSection();

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
        {headerLinks.map((link, index) => (
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
          className="btn-green-cv d-flex align-items-center gap-1"
          href="/Carl-Lindqvist-CV.pdf"
          download="Carl-Lindqvist-CV.pdf"
        >
          <FontAwesomeIcon className="me-2" icon={faFileAlt} size="2x" />
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
