import React, { useContext } from 'react'
import "../ProductItemListView/style.css"
import man1 from "../../assets/images/fashionImages/manImg1.jpg"
import man from "../../assets/images/fashionImages/manImg.jpg"
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Button  from '@mui/material/Button'
import { IoGitCompareOutline } from 'react-icons/io5'
import { MdOutlineShoppingCart, MdZoomOutMap } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import { MyContext } from '../../App'

const ProductItemListView = () => {
   
      const context = useContext(MyContext);
  return (
    <div className='productItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)] flex items-center'>
        <div className="group imgWrapper !w-[25%]  overflow-hidden !rounded-md  relative">
            <Link to={"/"}> 
               <div className="img !h-[220px]  overflow-hidden ">
               <img src={man1} alt="" className='w-full'/>
               <img src={man} alt="" className='w-full transition-all duration-700 top-0 left-0 opacity-0 group-hover:opacity-100 absolute'/>
               </div>
            </Link>
            <span className='discount flex items-center absolute top-[10px] left-[10px] z-50 bg-[#ff5252] text-white !rounded-md !p-1 text-[12px] font-[500]'>10%</span>

          
          <div className="actions !absolute top-[-200px] !right-[5px] z-50 flex items-center !gap-4 !flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
          <Tooltip title="View Product Details" placement="left-start">
            <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black !bg-white hover:!bg-[#ff5252] hover:!text-white group' onClick={()=> context.setOpenProductDetailModel(true)}>
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
        
        <div className="info !p-3 !px-8 !py-5 w-[75%] ">
            <h1 className='text-[15px]'><Link to={"/"}  className='link transition-all'>RARE RABBIT</Link></h1>
            <h3 className=' text-[18px] title !mt-1 !mb-3 font-[500] text-[#000]'><Link to={"/"} className='link transition-all'>Men Alias-N Regular Fit Spread Collar ShirtSGHWSRHSFDHFDH</Link></h3>

            <p className='text-[14px] !mb-3'>Explore a modern selection of white shirts for men at FITTED. Cover all bases with casual overshirts, oxfords, lightweight safari styles for brighter days</p>
            
         <Rating name="size-small" defaultValue={4} size="small" readOnly />

         <div className="flex items-center gap-4">
            <span className='oldPrice line-through text-gray-500 text-[15px] font-[500]'>$58.00</span>
            <span className='price text-[#ff5252] font-[600] text-[15px]'>$55.23</span>
         </div>

         <div className="!mt-3">
         <Button className='btn-org flex gap-2 '> <MdOutlineShoppingCart className='text-[20px]'/> Add to Cart</Button>
         </div>

        </div>


    </div>
  )
}

export default ProductItemListView
