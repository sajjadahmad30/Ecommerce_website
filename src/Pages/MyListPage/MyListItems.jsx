import React, { useState } from 'react'

import BagImg from "../../assets/images/bagPic.webp"
import { Link } from 'react-router-dom'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GoTriangleDown } from 'react-icons/go';
import Rating from '@mui/material/Rating';
import { IoCloseSharp } from 'react-icons/io5';
import { Button } from '@mui/material';

const MyListItems = (props) => {

  return (
     <div className="cartItem w-full !p-3 flex items-center gap-4 !pb-5 border-b broder-[rgba(0,0,0,0.1)]">
      <div className="img w-[20%] rounded-md overflow-hidden" >
          <Link to="/product/2342" className='group'>
              <img src={BagImg} className="!w-full group-hover:scale-105 transition-all"/>
          </Link>
      </div>
      <div className="info w-[80%] relative">
          <IoCloseSharp className='cursor-pointer absolute text-[22px] top-[0px] right-[15px] link transition-all'/>
          <span className='text-[13px]'> Sangria</span>
          <h3 className='text-[16px] font-[600] '><Link className='link'>A-line Kurti with sharrara and Dupatta</Link></h3>

          <Rating name='size-small' defaultValue={4} size='small' readOnly/>
          

          <div className="flex items-center gap-4 !mt-3 !mb-2">
              <span className='price text-black text-[14px] font-[600]'>$62.00</span>
              <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>$64.93</span>
              <span className='price  text-[#ff5252] text-[14px] font-[600]'>55% OFF</span>
          </div>

          <Button className='btn-org btn-sm'>Add To Cart</Button>
      </div>
  </div>
  )
}

export default MyListItems
