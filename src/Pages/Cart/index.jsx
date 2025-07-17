import React, { useState } from 'react'
import { IoBagCheckSharp, IoCloseSharp } from 'react-icons/io5'

import Button from '@mui/material/Button';
import CartItems from './CartItems';


const CartPage = () => {
    
  return (
   <div className="section !py-10 !pb-10">
        <div className="container w-[80%] max-w-[80%] flex gap-5">
            <div className="leftPart w-[70%]">
               
                <div className="shadow-md rounded-md bg-white">

                    <div className="!py-2 !px-3 border-b border-[rgba(0,0,0,0.1)]">
                         <h2 className='font-[600]'>Your Cart</h2>
                     <p className='!mt-0'>There are <span className='font-bold text-[#ff5252]'>2</span>  products in your cart</p>
                    </div>

                <CartItems size="S" qty="1"/>
                <CartItems size="S" qty="1"/>
                <CartItems size="S" qty="1"/>
                <CartItems size="S" qty="1"/>
                <CartItems size="S" qty="1"/>
                <CartItems size="S" qty="1"/>
                   
                </div>
            </div>

            <div className="rightPart w-[30%]">
                <div className="shadow-md rounded-md bg-white !p-5">
                    <h3 className='font-[600] !pb-2'>Cart Totals</h3>
                    <hr />
                    <p className='flex items-center justify-between'>
                        <span className='text-[14px] font-[500]'>Subtotal</span>
                        <span className='text-[#ff5252] font-bold'>₹34,343.00</span>
                    </p>
                    <p className='flex items-center justify-between'>
                        <span className='text-[14px] font-[500]'>Shipping</span>
                        <span className=' font-bold'>Free</span>
                    </p>
                    <p className='flex items-center justify-between'>
                        <span className='text-[14px] font-[500]'>Estimate for</span>
                        <span className=' font-bold'>Pakistan</span>
                    </p>
                    <p className='flex items-center justify-between'>
                        <span className='text-[14px] font-[500]'>Total</span>
                        <span className=' font-bold'>₹3,300.00</span>
                    </p>

                    <Button className='btn-org btn-lg flex gap-2 w-full '><IoBagCheckSharp className='text-[20px]'/> Checkout</Button>
                </div>
            </div>
        </div>
   </div>
  )
}

export default CartPage
