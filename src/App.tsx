import AboutMe from "./components/Aboutme";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <div className="container content">
        <Header></Header>
        <div className="main-content">
          <AboutMe></AboutMe>
          <Experience></Experience>
          <Projects></Projects>
        </div>
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;
