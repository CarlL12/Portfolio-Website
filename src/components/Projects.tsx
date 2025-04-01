import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h3 className="section-title">Projects</h3>
      <div className="project-card">
        <p>EC Utbildning</p>
        <div className="text">
          <h5>JavaScript Backend project</h5>
          <p>
            In the JavaScript BackEnd course, we worked on a project where we
            built a web application using Blazor for our framework. The app
            allowed users to order courses and included features like user
            management with Identity for authentication and authorization.
          </p>
          <p>
            We also used Azure Service Bus to connect different microservices
            and built several Azure Functions to handle specific tasks.As part
            of the project, we developed a Backoffice system for managing users,
            courses, and other administrative tasks. One of the most exciting
            parts was implementing a chat function with SignalR, enabling real
            time communication between app users and administrators in the
            Backoffice for support.
          </p>
          <p>
            This project gave us hands-on experience with modern technologies
            and showed us how backend systems and cloud services like Azure can
            work together to create scalable and efficient solutions.
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
    </section>
  );
};
