import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Product from './components/Product'
import Hero from './components/Hero'
import List from './components/List'

const App = () => {
  return (
    <div className=''>
      <Header/>
      <Navbar/>
      <Nav/>
      <Hero/>
      <List/>
      <Footer/>
      {/* <Product/> */}
    </div>
  )
}

export default App