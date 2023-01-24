import React from 'react'
import About from './About'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Nav from './Nav'
import Testimonials from './Testimonials'

const Homepage = () => {
  return (
    <>
      <Nav />
      <Header />
      <Main />
      <Testimonials />
      <About />
      <Footer />
    </>
  )
}

export default Homepage