import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FadeInOnScroll from "./FadeInOnScroll";
import { useState } from "react";
import { projectsList } from "../data/projectList";
import { loadingMessagesList } from "../data/loadingMessagesList";
import { motion } from "motion/react";

export const Projects = () => {
  const [index, setIndex] = useState(0);

  const handleNextMessage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % loadingMessagesList.length);
  };

  return (
    <section className="projects" id="projects">
      <FadeInOnScroll>
        <h3 className="section-title">Projects</h3>
      </FadeInOnScroll>

      {projectsList.map((project, index) => (
        <FadeInOnScroll key={index}>
          <div className="project-card">
            <p>{project.isPrivate ? "Personal Projects" : "EC Utbildning"}</p>
            <div className="text">
              <h5>{project.title}</h5>
              {project.description.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
              <div className="technical-btn-list">
                {project.techStack.map((tech, index) => (
                  <button key={index} className="btn-green">
                    {tech}
                  </button>
                ))}
              </div>
              <div className="social-media">
                <a href={project.gitHubLink} target="_blank">
                  <FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
                </a>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      ))}

      <FadeInOnScroll>
        <div className="project-card">
          <p className="text-center">Personal Projects</p>
          <div className="text">
            <motion.p
              key={index}
              className="text-lg italic"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              {loadingMessagesList[index]}{" "}
            </motion.p>
            <div className="technical-btn-list"></div>
            <div className="social-media coffemug">
              <FontAwesomeIcon
                onClick={handleNextMessage}
                className="cursor-pointer"
                icon={faSpinner}
                spinPulse
                size="4x"
              />
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};
