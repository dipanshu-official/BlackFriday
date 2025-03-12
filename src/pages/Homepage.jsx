import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Product from '../components/Product'
import Hero from '../components/Hero'
import List from '../components/List'
import BestFile from '../components/BestFile'
import Newsletter from '../components/Newsletter'
import LatestNews from '../components/LatestNews'
import Mackbook from '../components/Mackbook'
import Xiaomi from '../components/Xiaomi'
import Category from '../components/Category'
import BestFeature from '../components/BestFeature'
import ComputerAccessories from '../components/ComputerAccessories'


const Homepage = () => {
    return (
        <div>
            <Header/>
            <Navbar />
            <Nav />
            <Hero />
            <List />
            <BestFile />
            <Category />
            <BestFeature />
            <Xiaomi />
            <ComputerAccessories />
            <Mackbook />
            <Product />
            <LatestNews />
            <Newsletter />
            <Footer />

        </div>
    )
}

export default Homepage