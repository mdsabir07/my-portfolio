import Experiences from "./components/Experiences/Experiences"
import Educations from "./components/Educations/Educations"
import Skills from "./components/Skills/Skills"
import AboutMe from "./components/AboutMe/AboutMe"
import DesignationIntro from "./components/DesignationIntro/DesignationIntro"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import ProjectCard from "./components/Projects/ProjectCard/ProjectCard"
import ContactInfo from "./components/ContactInfo/ContactInfo"

function App() {

  return (
    <>
      <Navbar />
      <main className="pt-20 sm:pt-24">
        <DesignationIntro />
        <AboutMe />
        <Skills />
        <Educations />
        <Experiences />
        <ProjectCard />
        <ContactInfo />
      </main>
      <Footer />
    </>
  )
}

export default App
