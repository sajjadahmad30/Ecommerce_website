import React from 'react'
import ChairImages from "../../assets/images/BlogItemImages/ChairsAndRoom.webp"
import { IoTimeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
const BlogItem = () => {
  return (
   <div className="blogItem group">
    <div className="imgWrapper w-full rounded-md overflow-hidden cursor-pointer relative">
        <img src={ChairImages} className="w-full transition-all group-hover:scale-105 group-hover:rotate-1" />
        <span className='flex items-center justify-center text-white opacity-100 absolute !bottom-[15px] !right-[15px] z-50 bg-[#ff5252] rounded-md !p-1 !px-2 text-[11px] font-[500] uppercase gap-1'>
            <IoTimeOutline className='!text-[16px]'/> 7 July 2025
        </span>
    </div>
    <div className="info !py-4">
        <h2 className='text-black font-[600] !text-[14px] '>
            <Link className='link'>Herman Miller now offers plant-based leather on its iconic lounge</Link>
        </h2>
        <p className='text-[rgba(0,0,0,0.8)] font-[400] !text-[13px] !mb-2'>Its carbon footprint might be smaller, but the price isn’t. The two-piece set still starts at $6,395...</p>
        <Link to={"/"} className='link font-[500] hover:underline flex items-center gap-1'>Read More <IoIosArrowForward/></Link>
    </div>
   </div>
  )
}

export default BlogItem
