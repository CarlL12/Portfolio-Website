import { experienceList } from "../data/experienceList";
import FadeInOnScroll from "./FadeInOnScroll";

export const Experience = () => {
  return (
    <FadeInOnScroll>
      <section className="experience" id="experience">
        <h3 className="section-title">Experience</h3>
        {experienceList.map((expCard, index) => (
          <div key={index} className="exp-card">
            <p>{expCard.date}</p>
            <div className="text">
              <h5>{expCard.title}</h5>
              {expCard.description.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
              <div className="technical-btn-list">
                {expCard.techStack.map((tech, index) => (
                  <button key={index} className="btn-green">
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </FadeInOnScroll>
  );
};
