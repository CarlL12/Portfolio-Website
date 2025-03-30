import { Experience } from "./components/Experience"
import HeaderAboutMe from "./components/HeaderAboutMe"
import { Projects } from "./components/Projects"


function App() {

  return (
    <>
    <div className="container">
      <HeaderAboutMe></HeaderAboutMe>
      <Experience></Experience>
      <Projects></Projects>

    </div>
    </>
  )
}

export default App
