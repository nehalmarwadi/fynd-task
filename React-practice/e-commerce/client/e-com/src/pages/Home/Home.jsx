import React from 'react'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'

const Home = () => {
  return (
    <div>
      <div className="home">
        <Slider/>
        <FeaturedProducts type="Featured"/>
        <Categories/>
        <FeaturedProducts type="Trending"/>
        <Contact/>
      </div>
    </div>
  )
}

export default Home
