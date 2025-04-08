import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCoffee, faMugHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FadeInOnScroll from "./FadeInOnScroll";
import { useRef } from "react";
import { useInView } from "motion/react";
import { projectsList } from "../data/projectList";

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
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
          <div className="text">
            <p className="text-center">Personal Projects</p>
            <p
              ref={ref}
              className={`text-center text-lg mt-4 ${
                isInView ? "typewriter" : "opacity-0"
              }`}
            >
              No projects here *yet* — but something’s brewing...{" "}
              <FontAwesomeIcon icon={faCoffee} />{" "}
            </p>
            <div className="technical-btn-list"></div>
            <div className="social-media d-flex justify-content-center">
              <FontAwesomeIcon icon={faMugHot} beatFade size="4x" />
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};
