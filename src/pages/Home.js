import React from 'react'
import About from '../sections/AboutUs/About'
import Mentors from '../sections/Mentors/Mentors'
import Test from '../sections/Testimonials/Testimonials'
import Header from '../sections/Hero/Header'
import PastRes1 from '../sections/Past/PastRes1'
import PastRes2 from '../sections/Past/PastRes2'
import PastRes3 from '../sections/Past/PastRes3'
import Package from '../sections/Packages/Package'


const Home = () => {
  return (
    <>
    <Header/>
    <PastRes1/>
    <PastRes2/>
    <PastRes3/>
    <Package/>
    <Mentors/>
    <Test/>
    <About/>

    </>
  )
}

export default Home