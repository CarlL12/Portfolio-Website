
import AboutMe from "./components/Aboutme"
import { Experience } from "./components/Experience"
import { Header } from "./components/Header"
import { Projects } from "./components/Projects"


function App() {

  return (
    <>
    <div className="container">
      <Header></Header>
      <div className="main-content">
        <AboutMe></AboutMe>
        <Experience></Experience>
        <Projects></Projects>
      </div>
    </div>
    </>
  )
}

export default App
