import React from 'react'
import Navbar from './componenet/Navbar/Navbar'
import Hero from './componenet/Hero/Hero'
import Ins_Crousel from './componenet/Crousel/Ins_Crousel'
import Contact from './componenet/Contact/Contact'
import Footer from './componenet/Footer/Footer'
import About from './componenet/About/About'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Ins_Crousel/>
      <About/>
      <Contact/>
      <Footer/>
     
    </div>
  )
}

export default App
