import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCoffee, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FadeInOnScroll from "../custom-hooks/fadeInOnScroll";
import { useRef } from "react";
import { useInView } from "motion/react";

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <section className="projects" id="projects">
      <FadeInOnScroll>
        <h3 className="section-title">Projects</h3>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <div className="project-card">
          <p>EC Utbildning</p>
          <div className="text">
            <h5>JavaScript Backend project</h5>
            <p>
              In the JavaScript BackEnd course, we built a web app using Blazor
              where users could order courses. We implemented user management
              with Identity and connected microservices via Azure Service Bus.
            </p>
            <p>
              We also created Azure Functions for specific tasks and a
              Backoffice system to manage users and courses. A highlight was the
              SignalR-powered chat for real-time communication between users and
              admins.
            </p>
            <p>
              The project gave us hands-on experience with modern tech and
              showed how backend systems and cloud services like Azure can work
              together in scalable solutions.
            </p>

            <div className="technical-btn-list">
              <button className="btn-green">Blazor</button>
              <button className="btn-green">ASP.NET</button>
              <button className="btn-green">.NET</button>
              <button className="btn-green">C#</button>
              <button className="btn-green">Azure</button>
            </div>
            <div className="social-media">
              <a
                href="https://github.com/orgs/goteborg-win23-jsbackend/repositories?"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <div className="project-card">
          <p>EC Utbildning</p>
          <div className="text">
            <h5>Data storage project </h5>
            <p>
              In this project, I modeled two databases—one for products and one
              for contacts—using SQL Express and Entity Framework Core.
            </p>
            <p>
              I used Code First for the contact database and Database First for
              the product database. A generic repository in a console app
              enabled consistent and reusable CRUD operations.
            </p>
            <p>
              To ensure code quality and functionality, I wrote unit tests with
              xUnit.
            </p>

            <div className="technical-btn-list">
              <button className="btn-green">.NET</button>
              <button className="btn-green">C#</button>
              <button className="btn-green">SQL</button>
            </div>
            <div className="social-media">
              <a
                href="https://github.com/CarlL12/LocalDatabaseProject"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <div className="project-card">
          <p>Personal Projects</p>
          <div className="text">
            <p
              ref={ref}
              className={`text-center text-lg mt-4 ${
                isInView ? "typewriter" : "opacity-0"
              }`}
            >
              Brewing something awesome <FontAwesomeIcon icon={faCoffee} />{" "}
              Please stand by...
            </p>
            <div className="technical-btn-list"></div>
            <div className="social-media d-flex justify-content-center">
              <FontAwesomeIcon icon={faSpinner} spinPulse size="6x" />
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};
