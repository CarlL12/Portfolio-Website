import { motion } from "motion/react";

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
      <motion.h3
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        About me
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        {" "}
        I’m a developer passionate about building scalable and maintainable
        applications. I enjoy working at the intersection of backend and
        frontend, ensuring that systems are not only functional but also
        efficient and well-structured. My focus is on creating solutions that
        enable rapid development without compromising on quality.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        {" "}
        Currently, I’m an intern at Hogia, where I’m working with micro
        frontends to improve modularity, enable independent deployments, and
        reduce dependencies within large systems. My work involves technologies
        like .NET, TypeScript, and Microsoft Azure, with a strong emphasis on
        performance and maintainability.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        {" "}
        During my education, I have deepened my knowledge in full-stack
        development, working with C#, ASP.NET, Blazor, SQL, NoSQL, React, and
        more. I’m also actively exploring new technologies and refining my
        skills through various projects, including developing trading strategies
        on TradingView’s platform.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        {" "}
        In my spare time, I enjoy gaming, experimenting with new coding
        concepts, and continuously improving my workflow.
      </motion.p>

      <div className="technical-knowledge">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          Technical knowledge
        </motion.h3>
        <div className="technical-btn-list">
          {techKnowledgeList.map((item, index) => (
            <motion.button
              key={item.text}
              className="btn-green"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 + 0.1 * index, duration: 0.6 }}
            >
              {item.text}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
