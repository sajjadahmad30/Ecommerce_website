import React from 'react'
import imageWomen1 from "../../assets/images/fashionImages/womenImg1.jpg"
import { MdOutlineDeleteOutline } from 'react-icons/md'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const CartPanel = () => {
  return (
    <>
    <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden !py-3 !px-4">
          <div className="cartItem flex items-center w-full gap-4 border-b border-[rgba(0,0,0,0.1)] !pb-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
        <Link to="/product/2433" className='block group'>
              <img src={imageWomen1} className="w-full group-hover:scale-105" />
              </Link>
            </div>
            <div className="info w-[70%] !pr-5 relative">
              <h4 className='font-[500] text-[13px]'><Link to='/product/2342' className='link'>A-Line Kurti with Sharrara and Dupatta</Link></h4>
              <p className='flex items-center gap-5 !mt-2 !mb-2'>
               <span> Qty : <span>2</span></span>
               <span className='text-[#ff5252] font-bold'> Price : $35</span>
              </p>
              <MdOutlineDeleteOutline className='absolute !top-[10px] !right-[10px] !text-[20px] link transition-all'/>
            </div>

          </div>

          
          <div className="cartItem flex items-center w-full gap-4 border-b border-[rgba(0,0,0,0.1)] !pb-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
        <Link to="/product/2433" className='block group'>
              <img src={imageWomen1} className="w-full group-hover:scale-105" />
              </Link>
            </div>
            <div className="info w-[70%] !pr-5 relative">
              <h4 className='font-[500] text-[13px]'><Link to='/product/2342' className='link'>A-Line Kurti with Sharrara and Dupatta</Link></h4>
              <p className='flex items-center gap-5 !mt-2 !mb-2'>
               <span> Qty : <span>2</span></span>
               <span className='text-[#ff5252] font-bold'> Price : $35</span>
              </p>
              <MdOutlineDeleteOutline className='absolute !top-[10px] !right-[10px] !text-[20px] link transition-all'/>
            </div>

          </div>

          <div className="cartItem flex items-center w-full gap-4 border-b border-[rgba(0,0,0,0.1)] !pb-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
        <Link to="/product/2433" className='block group'>
              <img src={imageWomen1} className="w-full group-hover:scale-105" />
              </Link>
            </div>
            <div className="info w-[70%] !pr-5 relative">
              <h4 className='font-[500] text-[13px]'><Link to='/product/2342' className='link'>A-Line Kurti with Sharrara and Dupatta</Link></h4>
              <p className='flex items-center gap-5 !mt-2 !mb-2'>
               <span> Qty : <span>2</span></span>
               <span className='text-[#ff5252] font-bold'> Price : $35</span>
              </p>
              <MdOutlineDeleteOutline className='absolute !top-[10px] !right-[10px] !text-[20px] link transition-all'/>
            </div>

          </div>


          <div className="cartItem flex items-center w-full gap-4 border-b border-[rgba(0,0,0,0.1)] !pb-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
        <Link to="/product/2433" className='block group'>
              <img src={imageWomen1} className="w-full group-hover:scale-105" />
              </Link>
            </div>
            <div className="info w-[70%] !pr-5 relative">
              <h4 className='font-[500] text-[13px]'><Link to='/product/2342' className='link'>A-Line Kurti with Sharrara and Dupatta</Link></h4>
              <p className='flex items-center gap-5 !mt-2 !mb-2'>
               <span> Qty : <span>2</span></span>
               <span className='text-[#ff5252] font-bold'> Price : $35</span>
              </p>
              <MdOutlineDeleteOutline className='absolute !top-[10px] !right-[10px] !text-[20px] link transition-all'/>
            </div>

          </div>

    </div>
<br />

    <div className="bottomSection absolute bottom-[10px] w-full">
    <div className="bottominfo w-full !border-t !border-[rgba(0,0,0,0.1)] !py-3 !px-4 flex items-center justify-between flex-col">
     <div className="flex items-center justify-between w-full">
        <span className='text-[14px] font-[600]'>1 item</span>
     <span className='text-[#ff5252] font-bold'>$75.00</span>
     </div>
     <div className="flex items-center justify-between w-full">
        <span className='text-[14px] font-[600]'>Shipping</span>
     <span className='text-[#ff5252] font-bold'>$7.00</span>
     </div>
    </div>


    <div className="bottominfo w-full !border-t !border-[rgba(0,0,0,0.1)] !py-3 !px-4 flex items-center justify-between flex-col">
     <div className="flex items-center justify-between w-full">
        <span className='text-[14px] font-[600]'>Total (Tax excl.)</span>
     <span className='text-[#ff5252] font-bold'>$95.00</span>
     </div>

     <div className="flex items-center justify-between w-full gap-3 !mt-3">
       <Link to="/cart" className="w-[50%]"> <Button className='btn-org btn-lg w-full'>View Cart</Button></Link>
       <Link to="/checkout" className="w-[50%]"> <Button className='btn-org btn-lg w-full'>Checkout</Button></Link>
     </div> 
    </div>
    </div>
    </>
  )
}

export default CartPanel
