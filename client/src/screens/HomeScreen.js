import React from 'react'
import CoreTeam from '../components/CoreTeam'
import EventSlider from '../components/EventSlider'
import ExtendedTeam from '../components/ExtendedTeam'
import HeroSection from '../components/HeroSection'
import Header from '../components/Header';
import FooterSection from '../components/FooterSection';

const HomeScreen = () => {
  return (
    <div className=' bg-gradient-to-r from-[#838181] via-[#fffcfc] to-[#dfdddd]'>
      <Header />
      <HeroSection />
      <EventSlider />
      <CoreTeam />
      <ExtendedTeam /> 
      <FooterSection/> 
    </div>
  )
}

export default HomeScreen
