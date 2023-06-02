import React from 'react';
import coremembers from '../Coreteam-data';
import CoreProfileCard from './CoreProfileCard';

const CoreTeam = () => {
  return (
    <div className='flex justify-center'>
        <div className='container'>
        <h1 className='text-gfgmaincolor font-black md:text-6xl text-4xl text-center md:my-24 my-14'>CORE TEAM</h1>
        <div className='flex md:flex-row flex-col flex-wrap justify-center items-center md:gap-x-20 gap-y-10 md:gap-y-14 px-12 md:px-20'>
    
          {coremembers && coremembers.map(member => (
            <CoreProfileCard key={member.id} coredata={member} />
          ))}
          
        </div>
        </div>
    </div>
  )
}

export default CoreTeam
