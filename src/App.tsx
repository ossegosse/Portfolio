
import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"
import { About } from "./components/About/About"
import { Footer } from "./components/Footer/Footer"
import { Projects } from "./components/Projects/Projects"

function App() {
  

  return (
    <div className="bg-gradient-to-r from-black/95 to-black/85 text-white flex flex-col">
    <Header />
    <Hero />
    <About />
    <Projects />
    <Footer />
    </div>  
  )
}

export default App
