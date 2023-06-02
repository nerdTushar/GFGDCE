import React from "react";
import {BsFacebook, BsInstagram, BsGithub, BsDiscord } from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';

// import {SiGeeksforgeeks} from 'react-icons/si';

const FooterSection = () => {
  return (
    <>
      <footer className="footer">
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center"> 
              <p className="mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-gfgmaincolor sm:text-4xl">
                WHAT WE DO?
              </p>
            <br/>
              <p className="mt-2 text-center text-base font-bold text-black ">
              We provide opportunities to the students to participate in various interesting and fun events that helps in building their personality, improving their coding skills, & their overall development.
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid  md:grid-cols-2 md:gap-x-28 md:gap-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gfgmaincolor text-white">
                      <svg
                        className="h-6 w-6 bg-gfgmaincolor"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      Webinars
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-black ">
                    Webinars on a veriety of domains starting from coding till UI/UX development covering all technologies and industries are organised regularly.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gfgmaincolor text-white">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      Coding Competetions
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-black ">
                    Various Coding Competitions at College and National Level.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gfgmaincolor text-white">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-black">
                      Hackthons
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-black ">
                    We organise various hackthons both online and offline regularly.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gfgmaincolor text-white">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-black">
                      Doubt Sessions
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-black ">
                    Doubt sessions are organised on a regular basis for students who are learning new technologies with great intrest, our community is dedicated towars overall growth of every student.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className=" flex md:flex-row flex-col footer md:h-24 h-full md:gap-0 gap-6 py-4 bg-gfgmaincolor">
          <div className="font-semibold text-white self-center md:ml-28 md:px-0 px-2 text-xl">
            <h1 className="md:text-left text-center">READY TO DEVELOP YOURSELF?</h1>
            <h1 className="md:text-left text-center">JOIN OUR DISCORD COMMUNITY TODAY.</h1>
          </div>
          <div className="border-0 flex self-center md:ml-20 space-x-4">


          <div className='flex justify-between items-center'>
      <div className='flex justify-between flex-[1]'>
     
          <div className='flex gap-14 items-center text-4xl md:ml-24'>
          <BsFacebook className='fill-white hover:fill-[#0a66c2] '/>
          <BsInstagram className='fill-white hover:fill-[#d62976]  '/>
           <FaLinkedinIn className='fill-white  hover:fill-[#0a66c2]'/>
           <BsGithub className='fill-white hover:fill-[#000000]'/>
           
          </div>
           {/* <SiGeeksforgeeks className='fill-white text-7xl mr-10' /> */}
           </div>
      </div>

            
         </div>
         <div className="border-0 flex self-center md:ml-36 space-x-6">
          <div className="flex flex-[1] justify-between">
            <button className="border-2 bg-[#ece9e9] hover:bg-[#ffffff] self-center py-2.5 animate-pulse shadow-2xl shadow-[#070f07] px-7 rounded-full text-gfgmaincolor font-semibold">
            <BsDiscord className='fill-black flex-col inline-flex'/><h2 className="flex-col inline-flex  ml-2">Join Discord</h2>
            </button>         
          </div>
          </div>
      </div>
      <div>
        
      </div>


        
      </footer>
    </>
  );
};

export default FooterSection;
