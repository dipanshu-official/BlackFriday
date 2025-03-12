import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Nav from '../components/Nav'
import TrackOrder from '../components/TrackOrder'
import Footer from '../components/Footer'
import TrackOrderDetail from '../components/TrackOrderDetail'


const TrackOrderPage = () => {
  return (
    <div>
        <Navbar />
        <Nav />
        <TrackOrder/>
        <Footer/>

    </div>
  )
}

export default TrackOrderPage