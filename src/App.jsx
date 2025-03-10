import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Product from './components/Product'
import Hero from './components/Hero'
import List from './components/List'
import BestFile from './components/BestFile'
import Newsletter from './components/Newsletter'

const App = () => {
  return (
    <div className=''>
      <Header/>
      <Navbar/>
      <Nav/>
      <Hero/>
      <List/>
      <BestFile/>
      <Newsletter/>
      <Footer/>
      {/* <Product/> */}
    </div>
  )
}

export default App