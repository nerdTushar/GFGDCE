import React,{useState} from "react";
import { NavLink } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { SiGeeksforgeeks } from "react-icons/si";
import { AiOutlineClose } from "react-icons/ai";
import {FaUser} from 'react-icons/fa';
import {useDispatch,useSelector} from 'react-redux';
import {logoutUser} from '../actions/userAction';

const Header = () => {

  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
  const userState = useSelector(state => state.loginUserReducer);
  const {currentUser} = userState;

  return (
    <>
      <div className="flex justify-between items-center pt-4">
        <div className="flex justify-between w-9/12">
          <div className="bg-gfgmaincolor flex w-full justify-between rounded-r-full items-center shadow-lg shadow-mainpara">
            <div className="flex md:gap-14 gap-5 items-center md:text-4xl text-2xl md:ml-24 ml-5">
              <BsFacebook className="fill-white hover:fill-[#0a66c2] " />
              <BsInstagram className="fill-white hover:fill-[#d62976]  " />
              <FaLinkedinIn className="fill-white hover:fill-[#0a66c2]" />
              <BsGithub className="fill-white hover:fill-black " />
            </div>
            <SiGeeksforgeeks className="fill-white md:text-7xl text-5xl md:mr-10 mr-5" />
          </div>
        </div>
        <div>
         
          <div className="flex relative">
    {!menu && (
      <BiMenuAltRight className="md:text-7xl text-6xl fill-gfgmaincolor hover:fill-black cursor-pointer" onClick={() => setMenu(true)} />
    )}
    {menu && ( 
          <ul
            className="z-10 bg-black/70 fixed -top-0 -right-2 p-3 md:w-[20vw] w-[70vw] h-screen shadow-md list-none
            flex flex-col justify-start items-center rounded-md text-white animate-slide-in"
          >
            <li className="text-3xl w-full my-4"><AiOutlineClose className='stroke-2 cursor-pointer' onClick={() => setMenu(false)} /></li>

            {currentUser ? (
              <>
                 <div className="flex flex-col items-center my-4 justify-center gap-6">
                    <div className="bg-white rounded-full border-2 border-solid border-gfgmaincolor shadow-md shadow-white/30 overflow-hidden scale-150">
                    <FaUser className="fill-gfgmaincolor text-3xl"/>
                    </div>
                    <h1 className="text-xl text-white">{currentUser.name}</h1>
                 </div>
              </>
            ) : null}
            
            <NavLink to='/' end
               className={({ isActive }) => isActive ? 'text-[#35b6b4] font-black' : null }
            >
            <li className='my-4 text-2xl mx-4 font-semibold cursor-pointer hover:text-[#35b6b4]'>Home</li>
            </NavLink>
            <NavLink to='/events' end
               className={({ isActive }) => isActive ? 'text-[#35b6b4] font-black' : null }
            >
            <li className='my-4 text-2xl mx-4 font-semibold cursor-pointer hover:text-[#35b6b4]'>Events</li>
            </NavLink>
            
            {currentUser ? (
              <>

              <NavLink to='/account' end
               className={({ isActive }) => isActive ? 'text-[#35b6b4] font-black' : null }
            >
            <li className='my-4 text-2xl mx-4 font-semibold cursor-pointer hover:text-[#35b6b4]'>Account</li>
            </NavLink>
        
            <li className='my-4 text-2xl mx-4 font-semibold cursor-pointer hover:text-[#35b6b4]'
            onClick={() => {dispatch(logoutUser())}}>Log out</li>
            
              </>
            ) : (
              <NavLink to='/login' end
               className={({ isActive }) => isActive ? 'text-[#35b6b4] font-black' : null }
            >
            <li className='my-4 text-2xl mx-4 font-semibold cursor-pointer hover:text-[#35b6b4]'>Log in</li>
            </NavLink>
            )}
          </ul>
        )}
    </div> 

        </div>
      </div>
    </>
  );
};

export default Header;
