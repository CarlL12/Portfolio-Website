import FadeInOnScroll from "../custom-hooks/fadeInOnScroll";

export const Experience = () => {
  return (
    <FadeInOnScroll>
      <section className="experience" id="experience">
        <h3 className="section-title">Experience</h3>
        <div className="exp-card">
          <p>2024 - PRESENT</p>
          <div className="text">
            <h5>Intership Hogia</h5>
            <p>
              Currently, I’m an intern at Hogia, where I’m working with micro
              frontends to improve modularity, enable independent deployments,
              and reduce dependencies within large systems. My work involves
              technologies like .NET, TypeScript, and Microsoft Azure, with a
              strong emphasis on performance and maintainability.
            </p>
            <div className="technical-btn-list">
              <button className="btn-green">React</button>
              <button className="btn-green">.NET</button>
              <button className="btn-green">C#</button>
              <button className="btn-green">Azure</button>
              <button className="btn-green">TypeScript</button>
              <button className="btn-green">Aurelia</button>
              <button className="btn-green">SQL</button>
              <button className="btn-green">NOSQL</button>
            </div>
          </div>
        </div>
      </section>
    </FadeInOnScroll>
  );
};
