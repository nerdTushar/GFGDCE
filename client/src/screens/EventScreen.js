import React from 'react'
import FooterSection from '../components/FooterSection'
import Header from '../components/Header'
import OnGoingEvents from '../components/OnGoingEvents'
import PastEvents from '../components/PastEvents'

const EventScreen = () => {
  return (
    <>
      <Header />
      <div className='flex justify-center mt-10'>
        <img className='w-full h-full' src='../images/eventbanner.png' alt='not valid'/>
      </div>
      <div>
        <OnGoingEvents />
      </div>
      <div>
        <PastEvents />
      </div>
      <FooterSection /> 
    </>
  )
}

export default EventScreen
