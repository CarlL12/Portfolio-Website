const AboutMe = () => {
  const techKnowledgeList = [
    { text: "JavaScript" },
    { text: ".NET" },
    { text: "TypeScript" },
    { text: "ASP.NET" },
    { text: "C#" },
    { text: "HTML" },
    { text: "CSS" },
    { text: "Azure" },
    { text: "React" },
    { text: "Umbraco" },
    { text: "SQL" },
    { text: "NOSQL" },
    { text: "Blazor" },
    { text: "Aurelia" },
  ];

  return (
    <section className="about-me" id="aboutme">
      <h3 className="section-title">About me</h3>
      <p>
        I’m a developer passionate about building scalable and maintainable
        applications. I enjoy working at the intersection of backend and
        frontend, ensuring that systems are not only functional but also
        efficient and well-structured. My focus is on creating solutions that
        enable rapid development without compromising on quality.
      </p>
      <p>
        Currently, I’m an intern at Hogia, where I’m working with micro
        frontends to improve modularity, enable independent deployments, and
        reduce dependencies within large systems. My work involves technologies
        like .NET, TypeScript, and Microsoft Azure, with a strong emphasis on
        performance and maintainability.
      </p>
      <p>
        During my education, I have deepened my knowledge in full-stack
        development, working with C#, ASP.NET, Blazor, SQL, NoSQL, React, and
        more. I’m also actively exploring new technologies and refining my
        skills through various projects, including developing trading strategies
        on TradingView’s platform.
      </p>
      <p>
        In my spare time, I enjoy gaming, experimenting with new coding
        concepts, and continuously improving my workflow.
      </p>
      <div className="technical-knowledge">
        <h3>Technical knowledge</h3>
        <div className="technical-btn-list">
          {techKnowledgeList.map((item) => (
            <button className="btn-green">{item.text}</button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
