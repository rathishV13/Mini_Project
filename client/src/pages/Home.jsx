import React from 'react'
import Announcement from '../components/Announcement'
import Catergories from '../components/Catergories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Items from '../components/Items'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Catergories/>
        <Items/>
        <Footer/>
    </div>
  )
}

export default Home