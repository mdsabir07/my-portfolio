import Experiences from "./components/Experiences/Experiences"
import Educations from "./components/Educations/Educations"
import Skills from "./components/Skills/Skills"
import AboutMe from "./components/AboutMe/AboutMe"
import DesignationIntro from "./components/DesignationIntro/DesignationIntro"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <>
      <Navbar/>
      <DesignationIntro />
      <AboutMe />
      <Skills />
      <Educations />
      <Experiences />
      <Footer />
    </>
  )
}

export default App
