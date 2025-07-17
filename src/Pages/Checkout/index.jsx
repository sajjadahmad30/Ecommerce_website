import TextField from '@mui/material/TextField'
import React from 'react'
import img from "../../assets/images/fashionImages/thirdWomen1.jpg"
import { Button } from '@mui/material'
import { BsFillBagCheckFill } from 'react-icons/bs'

const Checkout = () => {
  return (
    <section className='!py-10'> 
        <div className="container flex gap-5">
            <div className="leftCol w-[70%]">
                <div className="card bg-white shadow-md !p-5 rounded-md">
                    <h1 className='font-[600]'>Billing Details</h1>

                    <form action="" className='!mt-5 w-full'>
                        <div className="flex items-center gap-5 !mb-5">
                            <div className="col w-[50%]">
                                <TextField className='w-full' label='Full Name' variant='outlined' size='small'></TextField>
                            </div>
                            <div className="col w-[50%] !mt-5">
                                <TextField className='w-full' type='email' label='Email' variant='outlined' size='small'></TextField>
                            </div>
                        </div>
                        <h5 className='font-[500] text-[14px] !mb-3'>Street address *</h5>
                        <div className="flex items-center gap-5 !mb-5">
                            <div className="col w-[100%]">
                                <TextField className='w-full' label='House Number and Street Name' variant='outlined' size='small'></TextField>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 !mb-5">
                            <div className="col w-[100%]">
                                <TextField className='w-full' label='Apartment, suit, unit etc.(optional)' variant='outlined' size='small'></TextField>
                            </div>
                        </div>
                          <h5 className='font-[500] text-[14px] !mb-3'>Town/City *</h5>
                        <div className="flex items-center gap-5 !mb-5">
                            <div className="col w-[100%]">
                                <TextField className='w-full' label='City' variant='outlined' size='small'></TextField>
                            </div>
                        </div>
                          <h5 className='font-[500] text-[14px] !mb-3'>State/Country *</h5>
                        <div className="flex items-center gap-5 !mb-5">
                            <div className="col w-[100%]">
                                <TextField className='w-full' label='State' variant='outlined' size='small'></TextField>
                            </div>
                        </div>
                          <h5 className='font-[500] text-[14px] !mb-3'>Postalcode/ZIP *</h5>
                        <div className="flex items-center gap-5 !mb-5">
                            <div className="col w-[100%]">
                                <TextField className='w-full' label='ZIP Code' variant='outlined' size='small'></TextField>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 !mb-5">
                            <div className="col w-[100%]">
                                <TextField className='w-full' label='Phone No' variant='outlined' size='small'></TextField>
                            </div>
                            <div className="col w-[100%]">
                                <TextField className='w-full' label='Email Address' variant='outlined' size='small'></TextField>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="rightCol w-[30%]">
                <div className="card shadow-md bg-white !p-5 rounded-md">
                    <h2 className='font-[600] !mb-4'>Your Order</h2>
                    <div className="flex items-center justify-between !py-3 border-t border-b border-[rgba(0,0,0,0.2)]">
                        <span className='text-[14px] font-[600]'>Product</span>
                        <span className='text-[14px] font-[600]'>Subtotal</span>
                    </div>
                    
                <div className="scroll max-h-[250px]  !mb-5 overflow-y-scroll overflow-x-hidden !pr-2">
                <div className="flex items-center justify-between !py-2">
                    <div className="part1 flex items-center gap-3">
                        <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                            <img src={img} className="w-full transition-all group-hover:scale-105" />
                        </div>
                        <div className="info">
                            <h4 className='font-[600] !text-[13px]'>A-line Kurti With sh... X 1</h4>
                            <span className='!text-[13px]'>Qty: 1</span>
                        </div>
                    </div>
                    <span className='text-[14px] font-[600]'>₹1240.00</span>
                </div>

                
                <div className="flex items-center justify-between !py-2">
                    <div className="part1 flex items-center gap-3">
                        <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                            <img src={img} className="w-full transition-all group-hover:scale-105" />
                        </div>
                        <div className="info">
                            <h4 className='font-[600] !text-[13px]'>A-line Kurti With sh... X 1</h4>
                            <span className='!text-[13px]'>Qty: 1</span>
                        </div>
                    </div>
                    <span className='text-[14px] font-[600]'>₹1240.00</span>
                </div>


                <div className="flex items-center justify-between !py-2">
                    <div className="part1 flex items-center gap-3">
                        <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                            <img src={img} className="w-full transition-all group-hover:scale-105" />
                        </div>
                        <div className="info">
                            <h4 className='font-[600] !text-[13px]'>A-line Kurti With sh... X 1</h4>
                            <span className='!text-[13px]'>Qty: 1</span>
                        </div>
                    </div>
                    <span className='text-[14px] font-[600]'>₹1240.00</span>
                </div>


                <div className="flex items-center justify-between !py-2">
                    <div className="part1 flex items-center gap-3">
                        <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                            <img src={img} className="w-full transition-all group-hover:scale-105" />
                        </div>
                        <div className="info">
                            <h4 className='font-[600] !text-[13px]'>A-line Kurti With sh... X 1</h4>
                            <span className='!text-[13px]'>Qty: 1</span>
                        </div>
                    </div>
                    <span className='text-[14px] font-[600]'>₹1240.00</span>
                </div>


                <div className="flex items-center justify-between !py-2">
                    <div className="part1 flex items-center gap-3">
                        <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                            <img src={img} className="w-full transition-all group-hover:scale-105" />
                        </div>
                        <div className="info">
                            <h4 className='font-[600] !text-[13px]'>A-line Kurti With sh... X 1</h4>
                            <span className='!text-[13px]'>Qty: 1</span>
                        </div>
                    </div>
                    <span className='text-[14px] font-[600]'>₹1240.00</span>
                </div>


                <div className="flex items-center justify-between !py-2">
                    <div className="part1 flex items-center gap-3">
                        <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                            <img src={img} className="w-full transition-all group-hover:scale-105" />
                        </div>
                        <div className="info">
                            <h4 className='font-[600] !text-[13px]'>A-line Kurti With sh... X 1</h4>
                            <span className='!text-[13px]'>Qty: 1</span>
                        </div>
                    </div>
                    <span className='text-[14px] font-[600]'>₹1240.00</span>
                </div>
               </div>


               <Button className='btn-org btn-lg w-full flex  gap-2 items-center '><BsFillBagCheckFill className='text-[20px]'/> Checkout</Button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Checkout
