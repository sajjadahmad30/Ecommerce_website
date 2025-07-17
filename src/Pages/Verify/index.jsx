import React from 'react'
import otpImage from "../../assets/images/otpImg.png"
import OtpBox from '../../components/otpBox'
import { Button } from '@mui/material'


const Verify = () => {

  
  return (
    <section className='section !py-10'>
            <div className="container">
                <div className="card shadow-md w-[400px] !m-auto !rounded-md bg-white !p-5 !px-10">
                    <div className="text-center flex items-center justify-center">
                        <img src={otpImage} width="80" />
                    </div>
                    <h3 className='!text-[18px] !text-black !font-[600] !text-center !mt-1'>Verify OTP</h3>
               
                <p className='text-center !mt-0 !mb-4'>OTP send to <span className='text-[#ff5252] font-bold'>sajjadahmad5578@gmail.com</span></p>

                <OtpBox/>
               
                                 
                </div>
            </div>
        </section>
  )
}

export default Verify
