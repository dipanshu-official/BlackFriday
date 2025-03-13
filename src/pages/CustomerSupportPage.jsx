import React from 'react'
import Navbar from '../components/Navbar'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import HelpCenter from '../components/HelpCenter'
import Assist from '../components/Assist'
import PopularTopics from '../components/PopularTopics'
import ContactUs from '../components/ContactUs'

const CustomerSupportPage = () => {
  return (
    <div>
        <Navbar />
        <Nav />
        <HelpCenter/>
        <Assist/>
        <PopularTopics/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default CustomerSupportPage