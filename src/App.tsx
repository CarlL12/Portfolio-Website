import AboutMe from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <div className="container content">
        <Header/>
        <div className="main-content">
          <AboutMe/>
          <Experience/>
          <Projects/>
        </div>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
