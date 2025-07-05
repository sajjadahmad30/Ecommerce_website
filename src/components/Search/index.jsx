import React from 'react'
import "../Search/style.css"
import Button from '@mui/material/Button';
import { FaSearch } from "react-icons/fa";

const Serach = () => {
  return (
    <div className='searchBox w-[100%] !h-[50px] bg-[#e5e5e5] rounded-[5px] relative'>
      <input type="text" className="w-full h-full focus:outline-none !p-2 !text-[15px]" id="" placeholder='Search for products... ' />
      
      <Button className='!absolute top-[5px] right-[5px] z-50 !w-[35px] !min-w-[37px] h-[37px] !rounded-full !text-black'><FaSearch className='text-[#2a2a2a] text-[22px]'/></Button>
    </div> 
  )
}

export default Serach
