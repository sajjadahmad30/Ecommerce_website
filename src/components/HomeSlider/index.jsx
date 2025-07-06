import React from 'react'
import HomeSlider from '../../Pages/Home'
import HomeCatSlider from '../HomeCatSlider/HomeCatSlider'
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from '../AdsBannerSlider';

const Home = () => {
  return (
    <div>
     <HomeSlider/>
     <HomeCatSlider/>

     <section className='!py-16 !bg-white !mt-5'>
      <div className="container">
        <div className="freeShipping border-2 border-[#ff5252] !px-3 !p-4 w-full flex items-center justify-between rounded-md !mb-7">
        
         <div className="col1  flex items-center gap-4">
         <FaShippingFast className='text-[50px]'/>
         <span className='text-[20px] font-[600] uppercase'>Free Shipping</span>
         </div>

          <div className="col2">
            <p className='mb-0 font-[500]'>Free Delivery Now on your First order and over $200</p>
          </div>

          <div className="col3">
            <p className='text-[25px] font-bold'>-Only $200*</p>
          </div>

        </div>

        {/* AdsBannerSlider imported here */}
        <AdsBannerSlider items={4}/>
      </div>
     </section>
     <br /><br /><br /><br />
    </div>
  )
}

export default Home
