import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCoffee, faMugHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FadeInOnScroll from "./FadeInOnScroll";
import { useRef, useState } from "react";
import { projectsList } from "../data/projectList";
import { brewingMessagesList } from "../data/brewingMessagesList";
import { motion } from "motion/react";

export const Projects = () => {
  const [index, setIndex] = useState(0);

  const handleNextMessage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % brewingMessagesList.length);
  };

  return (
    <section className="projects" id="projects">
      <FadeInOnScroll>
        <h3 className="section-title">Projects</h3>
      </FadeInOnScroll>

      {projectsList.map((project, index) => (
        <FadeInOnScroll>
          <div key={index} className="project-card">
            <p>{project.isPrivate ? "Personal Projects" : "EC Utbildning"}</p>
            <div className="text">
              <h5>{project.title}</h5>
              {project.description.map((text) => (
                <p>{text}</p>
              ))}
              <div className="technical-btn-list">
                {project.techStack.map((tech) => (
                  <button className="btn-green">{tech}</button>
                ))}
              </div>
              <div className="social-media">
                <a href="" target="_blank">
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
              {brewingMessagesList[index]}
              <FontAwesomeIcon icon={faCoffee} />{" "}
            </motion.p>
            <div className="technical-btn-list"></div>
            <div className="social-media d-flex justify-content-start">
              <FontAwesomeIcon
                onClick={handleNextMessage}
                className="cursor-pointer"
                icon={faMugHot}
                beatFade
                size="4x"
              />
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};
