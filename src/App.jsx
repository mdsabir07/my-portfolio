import Experiences from "./components/Experiences/Experiences"
import Educations from "./components/Educations/Educations"
import Skills from "./components/Skills/Skills"
import AboutMe from "./components/AboutMe/AboutMe"
import DesignationIntro from "./components/DesignationIntro/DesignationIntro"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import ContactInfo from "./components/ContactInfo/ContactInfo"
import ProjectCarousel from "./components/Projects/ProjectCard/ProjectCarousel"

function App() {

  return (
    <>
      <Navbar />
      <main className="pt-20 sm:pt-22">
        <DesignationIntro />
        <AboutMe />
        <Skills />
        <Educations />
        <Experiences />
        <ProjectCarousel />
        <ContactInfo />
      </main>
      <Footer />
    </>
  )
}

export default App
