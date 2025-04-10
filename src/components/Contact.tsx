import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FadeInOnScroll from "./FadeInOnScroll";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="text-center mb-4">Contact me</h2>
      <p className="text-center mb-5">
        Feel free to reach out for any inquiries, collaborations, or just to say
        hello! I’m always open to new opportunities and would love to hear from
        you.
      </p>
      <a href="mailto:carllindqvist93@gmail.com">
        <button className="contact-btn">
          Get in Touch <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
        </button>
      </a>
    </section>
  );
};
