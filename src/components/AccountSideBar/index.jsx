import React from 'react'
import sajjadImg from "../../assets/images/sajjad.jpeg"
import { FaCloudUploadAlt, FaRegUser } from "react-icons/fa";
import Button from "@mui/material/Button"
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const AccountSideBar = () => {
  return (
    <div className="card bg-white shadow-md rounded-md sticky top-[10px]">
                       <div className="w-full !p-3 flex items-center justify-center flex-col">
                           <div className="!w-[110px] !h-[110px] !rounded-full overflow-hidden !mb-4 relative group">
                               <img src={sajjadImg} alt="" className='w-full h-full object-cover' />
                               <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
                                   <FaCloudUploadAlt className='text-[#fff] text-[22px]'/>
                                   <input type="file" className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' />
                               </div>
                           </div>
   
                           <h3 className='font-[600]'>Sajjad Ahmad </h3>
                           <h6 className='font-[500] !text-[13px]'>sajjadahmad5578@gmail.com</h6>
                       </div>
                       
                       <ul className='list-none !pb-5 bg-[#f1f1f1] myAccountTabs'>
                           <li className='w-full'>
                               <NavLink to="/my-account" exact={true} activeClassName="isActive">
                               <Button className='w-full flex !px-5 !py-2 !capitalize !text-[rgba(0,0,0,0.8)] gap-2 !text-left !items-center  !justify-start !rounded-none' ><FaRegUser className='!text-[15px]'/> My Profile</Button>
                               </NavLink>
                           </li>
                           <li className='w-full'>
                               <NavLink to="/my-list" exact={true} activeClassName="isActive">
                               <Button className='flex !px-5 !py-2 !capitalize !text-[rgba(0,0,0,0.8)] gap-2 !text-left   !justify-start w-full !rounded-none' ><IoMdHeartEmpty className='!text-[15px]'/> My List</Button>
                               </NavLink>
                           </li>
                           <li className='w-full'>
                               <NavLink to="/my-orders" exact={true} activeClassName="isActive">
                               <Button className='flex !px-5 !py-2 !capitalize !text-[rgba(0,0,0,0.8)] gap-2 !text-left   !justify-start w-full !rounded-none' ><IoBagCheckOutline className='!text-[15px]'/> My Orders</Button>
                               </NavLink>
                           </li>
                           <li className='w-full'>
                               <NavLink to="/logout" exact={true} activeClassName="isActive">
                               <Button className='flex !px-5 !py-2 !capitalize !text-[rgba(0,0,0,0.8)] gap-2 !text-left   !justify-start w-full !rounded-none' ><IoIosLogOut className='!text-[15px]'/>Logout</Button>
                               </NavLink>
                           </li>
                       </ul>
   
                   </div>
  )
}

export default AccountSideBar
