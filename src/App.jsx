import AboutMe from './components/AboutMe'
import Benefits from './components/Benefits'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Origin from './components/Origin'
import Sections from './components/Sections'
import Services from './components/Services'
import Slider from './components/Slider'
import Testimonials from './components/Testimonials'
import Title from './components/Title'

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Title />
      <Sections>
        <Origin />
      </Sections>
      <Benefits />
      <Sections>
        <AboutMe />
      </Sections>
      <Services />
      <Sections>
        <Contact />
      </Sections>
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
