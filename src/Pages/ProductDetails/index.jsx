import React, { useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import ProductZoom from '../../components/ProductZoom'; 
import Rating  from '@mui/material/Rating';
import Button from '@mui/material/Button';
import QtyBox from '../../components/QtyBox';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { IoGitCompareOutline } from 'react-icons/io5';


const ProductDetails = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);
  return (
    <>
    <div className='!py-5'>
      <div className="container">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/" className='link transition'>
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/"
          className='link transition'
        >
          Fashion
        </Link>
        <Link
          underline="hover"
          color="inherit"
          className='link transition !text-[14px]'
        >
          Cropped Satin Bomber Jacket
        </Link>
      </Breadcrumbs>
      </div>
    </div>

   <section className='bg-white !py-5'>
   <div className="container flex gap-8 items-center">
        <div className="productZoomContainer w-[40%]">
          <ProductZoom/>
        </div>
        <div className="productContent w-[60%] !pr-10">
          <h1 className='text-[24px] font-[600] !mb-2'>Chikankari Woven Kurta</h1>
          <div className="flex items-center gap-3">
            <span className='text-gray-400 !text-[13px]'>Brands: <span className='font-[500] text-black opacity-75'>House of the Chikankari</span></span>
            <Rating name='size-small' defaultValue={4} size='small' readOnly/>
            <span className='cursor-pointer text-[13px]'>Review (5)</span>
          </div>

          <div className="flex items-center gap-4 !mt-4">
            <span className='oldPrice line-through text-gray-500 text-[20px] font-[500]'>
              $58.00
            </span>
            <span className='price  text-[#ff2525] text-[20px] font-[600]'>
              $50.00
            </span>
            <span className='text-[14px]'>Available In Stock: <span className='text-green-600 text-[14px] font-bold'>157 Items</span></span>
          </div>


          <p className='!mt-3 !pr-10 !mb-5'>This site all of the garmats and male and female things are amet consectetur adipisicing elit. Reprehenderit temporibus ullam sed suscipit perspiciatis, facilis aliquam voluptas. Labore distinctio velit tenetur fugiat fugit dolore, eveniet, corporis aut natus laborum provident.</p>

          
          <div className="flex items-center gap-3">
            <span className='text-[16px]'>Size:</span>
            <div className="flex items-center gap-1 actions">
              <Button className={`${productActionIndex === 0 ? "!bg-[#ff2525] !text-white" : ""}`} onClick={()=> setProductActionIndex(0)}>S</Button>
              <Button className={`${productActionIndex === 1 ? "!bg-[#ff2525] !text-white" : ""}`} onClick={()=> setProductActionIndex(1)}>M</Button>
              <Button className={`${productActionIndex === 2 ? "!bg-[#ff2525] !text-white" : ""}`} onClick={()=> setProductActionIndex(2)}>L</Button>
              <Button className={`${productActionIndex === 3 ? "!bg-[#ff2525] !text-white" : ""}`} onClick={()=> setProductActionIndex(3)}>XL</Button>
            </div>
          </div>

          <p className='text-[14px] !mt-4 !mb-2'>Free Shopping (Est. Delivery Time 2-3 Days</p>
          <div className="flex items-center  gap-4 ">
            <div className="qtyBoxWrapper w-[70px] ">
              <QtyBox/>
            </div>
            <Button className='btn-org flex gap-2'><MdOutlineShoppingCart className='text-[22px]'/> Add to Cart</Button>
          </div>


         <div className="flex items-center gap-4 !mt-4">
            <span className='flex gap-2 cursor-pointer font-[500] link items-center !text-[15px]'><FaRegHeart className='text-[18px]'/> Add To WishList</span>
            <span className='flex gap-2 cursor-pointer font-[500] link items-center !text-[15px]'><IoGitCompareOutline className='text-[18px]'/> Add To WishList</span>
        </div>

        </div>
      </div>
   </section>

    </> 
     )
}

export default ProductDetails
