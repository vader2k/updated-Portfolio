import {About, Contact, Hero, Navbar, Work, Writing, Footer} from './components'
import Experience from './components/Experience'

const App = () => {
  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Experience/>
        <Work/>
        <Writing/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App