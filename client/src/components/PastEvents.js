import React from 'react';
import pastevents from '../Pastevents-data';
import PastEventCard from './PastEventCard';

const PastEvents = () => {
  return (
    <>
      <div className='flex justify-center'>
        <div className='container'>
        <h1 className='text-gfgmaincolor font-black text-6xl text-center md:my-24 my-14'>Past Events</h1>
        <div className='flex md:flex-row flex-col flex-wrap justify-center items-center md:gap-x-20 gap-y-10 md:gap-y-14 px-12 md:px-20'>
    
          {pastevents && pastevents.map(pastevent => (
            <PastEventCard key={pastevent.id} pasteventdata={pastevent} />
          ))}
          
        </div>
        </div>
    </div>
    </>
  )
}

export default PastEvents
