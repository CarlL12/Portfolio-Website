import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBoxOpen,
  faCoffee,
  faHardHat,
  faPersonDigging,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
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

      <div className="project-card">
        <p>EC Utbildning</p>
        <div className="text">
          <h5>Data storage project </h5>
          <p>
            In this project, I modeled two databases—one for products and
            another for contacts. To streamline database management, I utilized
            SQL Express as the server and implemented Entity Framework Core.
          </p>
          <p>
            For building the contact database, I opted for the Code First
            approach, while I employed the Database First approach for the
            product database. To enhance data access and manipulation with
            consistency, I implemented a generic repository within a console
            app. This allowed for uniform and reusable codebase for various CRUD
            operations on the databases.
          </p>
          <p>
            In order to validate the correctness and intended functionality of
            the project's logic,testing was carried out using xUnit. This
            testing ensured the quality and reliability of the code
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

      <div className="project-card">
        <p>Personal Projects</p>
        <div className="text">
          <h5> </h5>
          <p>
            Code is brewing – please stand by{" "}
            <FontAwesomeIcon icon={faCoffee} />
          </p>
          <div className="technical-btn-list"></div>
          <div className="social-media d-flex justify-content-center">
            <FontAwesomeIcon icon={faSpinner} spinPulse size="6x" />
          </div>
        </div>
      </div>
    </section>
  );
};
