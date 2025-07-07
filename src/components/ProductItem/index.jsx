import React from 'react'
import "../ProductItem/style.css"
import man11 from "../../assets/images/fashionImages/fourthWomen1.jpg"
import man1 from "../../assets/images/fashionImages/fourthWomen2.jpg"
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Button  from '@mui/material/Button'
import { IoGitCompareOutline } from 'react-icons/io5'
import { MdZoomOutMap } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';

const ProductItem = () => {
  return (
    <div className='productItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)] '>
        <div className="group imgWrapper w-[100%]  overflow-hidden rounded-md relative">
            <Link to={"/"}> 
               <div className="img !h-[220px]  overflow-hidden ">
               <img src={man11} alt="" className='w-full'/>
               <img src={man1} alt="" className='w-full transition-all duration-700 top-0 left-0 opacity-0 group-hover:opacity-100 absolute'/>
               </div>
            </Link>
            <span className='discount flex items-center absolute top-[10px] left-[10px] z-50 bg-[#ff5252] text-white rounded-md !p-1 text-[12px] font-[500]'>10%</span>

          
          <div className="actions !absolute top-[-200px] !right-[5px] z-50 flex items-center !gap-4 !flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
          <Tooltip title="View Product Details" placement="left-start">
            <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black !bg-white hover:!bg-[#ff5252] hover:!text-white group'>
               <MdZoomOutMap className='!text-black text-[18px] group-hover:text-white hover:!text-white'/>
            </Button>
            </Tooltip>

            <Tooltip title="Compare" placement="left-start">
            <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black !bg-white hover:!bg-[#ff5252] hover:!text-white group'>
               <IoGitCompareOutline className='!text-black text-[18px] group-hover:text-white hover:!text-white'/>
            </Button>
            </Tooltip>

          <Tooltip title="Favorit" placement="left-start">
            <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black !bg-white hover:!bg-[#ff5252] hover:!text-white group'>
               <FaRegHeart className='!text-black text-[18px] group-hover:text-white hover:!text-white'/>
            </Button>
            </Tooltip>
          </div>

        </div>
        
        <div className="info !p-3 !py-5 bg-[#f1f1f1] ">
            <h1 className='text-[13px]'><Link to={"/"}  className='link transition-all'>RARE RABBIT</Link></h1>
            <h3 className=' text-[13px] title !mt-1 !mb-1 font-[500] text-[#000]'><Link to={"/"} className='link transition-all'>Men Alias-N Regular Fit Spread Collar ShirtSGHWSRHSFDHFDH</Link></h3>
            
         <Rating name="size-small" defaultValue={4} size="small" readOnly />

         <div className="flex items-center gap-4">
            <span className='oldPrice line-through text-gray-500 text-[15px] font-[500]'>$58.00</span>
            <span className='price text-[#ff5252] font-[600] text-[15px]'>$55.23</span>
         </div>
        </div>


    </div>
  )
}

export default ProductItem
