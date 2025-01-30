
import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"
import { About } from "./components/About/About"
import { Footer } from "./components/Footer/Footer"

function App() {
  

  return (
    <div className="bg-gradient-to-r from-black/95 to-black/85 text-white flex flex-col min-h-screen">
    <Header />
    <Hero />
    <About />
    <Footer />
    </div>  
  )
}

export default App
