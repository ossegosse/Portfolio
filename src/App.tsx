
import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"
import { About } from "./components/About/About"
import { Footer } from "./components/Footer/Footer"

function App() {
  

  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <Hero />
    <About />
    <Footer />
    </div>  
  )
}

export default App
