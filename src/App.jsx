import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Achievements from "./components/Achievements"
import Contact from "./components/Contact"
import ScrollToTop from "./components/ScrollToTop"
import Reveal from "./components/Reveal"
import Footer from "./components/Footer"

function App() {
    return (
        <>
            <Navbar />

            <Hero />

            <Reveal>
                <About />
            </Reveal>

            <Reveal>
                <Skills />
            </Reveal>

            <Reveal>
                <Projects />
            </Reveal>

            <Reveal>
                <Education />
            </Reveal>

            <Reveal>
                <Achievements />
            </Reveal>

            <Reveal>
                <Contact />
            </Reveal>

            <Footer />

            <ScrollToTop />
        </>
    )
}

export default App