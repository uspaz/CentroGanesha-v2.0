import AboutMe from './components/About/AboutMe'
import Benefits from './components/Origin/Benefits'
import Contact from './components/Contact/Contact'
import Footer from './components/Another/Footer'
import Header from './components/Another/Header'
import Origin from './components/Origin/Origin'
import Sections from './components/Another/Sections'
import Services from './components/Services/Services'
import Testimonials from './components/Testimonials'
import Title from './components/Title'


function App() {
  return (
    <>
      <Header />
      <main className='w-full h-auto text-center'>
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
      </main>
      
    </>
  )
}

export default App
