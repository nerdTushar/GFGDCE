import React from 'react';
import {AiFillPlayCircle} from 'react-icons/ai';

const PastEventCard = ({pasteventdata}) => {
  return (
    <>
      <div className='flex flex-col border-2 border-gfgmaincolor shadow-lg md:w-1/4 w-full h-min rounded-3xl'>
        <div className='h-60 flex justify-center border-2 border-white rounded-t-3xl overflow-hidden'>
           <img className='w-full' src={pasteventdata.eventprofile} alt='not valid' />
        </div>
        <h1 className='text-gfgmaincolor font-black text-xl px-8 py-4'>{pasteventdata.eventname}</h1>
        <div className='flex flex-row items-between px-8 py-4'>
          <div className='w-2/3 flex flex-col gap-2'>
            <h1>{pasteventdata.eventdate}</h1>
            <h1>{pasteventdata.eventinfo}</h1>
          </div>
          <div className='w-1/3 flex items-end justify-end'>
            <AiFillPlayCircle className='text-6xl cursor-pointer hover:fill-gfgmaincolor' />
          </div>
        </div>
      </div>
    </>
  )
}

export default PastEventCard
