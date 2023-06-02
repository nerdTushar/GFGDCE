import React from 'react'

const HeroSection = () => {

  const ScrollDown = () => {
    window.scrollTo({top:1500,behavior:"smooth"});
  }
    
  return (
    <div className='relative h-[75vh] bg-black md:mt-12 mt-10 '>
      {/* <video src='Videos/smoke1.mp4' autoPlay={true} loop muted className='absolute top-0 left-0 w-full h-full object-cover'/> */}
      <div className=' md:py-24 py-3 flex justify-center absolute top-0 left-0' >
        <div className='md:flex-[0.9]  flex md:flex-row flex-col justify-between items-center' >
           <div className='  flex flex-col md:w-1/2 gap-7 md:px-0 px-4 md:items-start items-center'>
           <h1 className='md:text-6xl text-3xl md:text-left text-center font-black text-gradient leading-tight'>GFG Student Chapter Dronacharya College of Engineering </h1>
           <p className=' text-gradient md:text-left text-center '>A Community of geeks for the geeks by the geeks.</p>
           <button className='bg-gfgmaincolor md:w-1/4 w-1/2 p-3 md:mt-4 shadow-black shadow-sm rounded-full transition ease-in-out delay-20 
              hover:-translate-y-1 hover:scale-110  duration-300 text-white' onClick={ScrollDown}>MEET OUR TEAM</button>
           </div>
           <div className=' md:w-1/2 w-full md:p-0 p-4 overflow-hidden rounded-3xl md:shadow-[#dcd8d8]  md:shadow-md'>
           <video className='w-full rounded-3xl shadow-[#dcd8d8]  shadow-md' src='Videos/coder.mp4' autoPlay={true} loop muted alt='codeman' />
        </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
