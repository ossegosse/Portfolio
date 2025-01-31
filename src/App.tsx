
import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"
import { About } from "./components/About/About"
import { Footer } from "./components/Footer/Footer"
import { Projects } from "./components/Projects/Projects"
import { Contact } from "./components/Contact/Contact"

function App() {
  

  return (
    <div className="text-white flex flex-col">
    <Header />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </div>  
  )
}

export default App
