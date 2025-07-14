import React, { useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import ProductZoom from '../../components/ProductZoom'; 
import Rating  from '@mui/material/Rating';
import Button from '@mui/material/Button';
import userImage from "../../assets/images/userImage.png"
import TextField from '@mui/material/TextField';
import ProductsSlider from '../../components/ProductsSlider';
import ProductDetailsComponent from '../../components/ProductDetails';


const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
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
        <div className="productContent w-[60%] !pr-10 !pl-10">
          <ProductDetailsComponent/>
        </div>
      </div>


      <div className="container !pt-10">
        <div className="flex items-center gap-8 !mb-5">
          <span className={`link !text-[17px] cursor-pointer !font-[500] ${activeTab===0 && "text-[#ff2525]"}`} onClick={()=> setActiveTab(0)}>Description</span>
          <span className={`link !text-[17px] cursor-pointer !font-[500] ${activeTab===1 && "text-[#ff2525]"}`} onClick={()=> setActiveTab(1)}>Product</span>
          <span className={`link !text-[17px] cursor-pointer !font-[500] ${activeTab===2 && "text-[#ff2525]"}`} onClick={()=> setActiveTab(2)}>Reviews(5)</span>
        </div>

        {
          activeTab === 0 && (
            <div className="shadow-md w-full !py-5 !px-8 rounded-md">
          <p>The possibility of buying from anywhere, at any time and from multiple devices has favoured the rise of online shopping in our country. But online sales are not homogeneous in both men and women, which is why we have ventured to review how men and women buy online.</p>
          <h4 className='font-[600]'>LightWeight Design </h4>
          <p>Navigating the world of sales can be tricky. We've rounded up the best sales content to help you and your team on the path to victory. Explore our hand-picked sales, marketing and CRM resources for tips on winning more deals, reeling in leads and making the most of Pipedrive.</p>
          <h4 className='font-[600]'>Free Shipping and Return</h4>
          <p>we offer free shipping for product on order above $50 and offer free delivery for all order in US</p>
          <h4 className='font-[600]'>Money Back Gurantee</h4>
          <p>we gurantee our products and you could get back all your money anytime you want in a 30 days.</p>
          <h4 className='font-[600]'>Online Support</h4>
          <p>You will get 24 hour suport with this purchase product and you can return it within 30 days for an exchange.</p>
        </div>
          )
        }



      {
        activeTab === 1 && (
            <div className="shadow-md w-full !py-5 !px-8 rounded-md">
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="!px-6 !py-3">
                              Stand up
                            </th>
                            <th scope="col" class="!px-6 !py-3">
                                Folded (w/ wheels)
                            </th>
                            <th scope="col" class="!px-6 !py-3">
                                Folded (w/ wheels)
                            </th>
                            <th scope="col" class="!px-6 !py-3">
                                Door Pass Through 
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td class="!px-6 !py-4 !font-[500]">
                                35″L x 24″W x 37-45″H(front to back wheel)
                            </td>
                            <td class="!px-6 !py-4 !font-[500]">
                              32.5″L x 18.5″W x 16.5″H
                            </td>
                            <td class="!px-6 !py-4 !font-[500]">  	
                              32.5″L x 24″W x 18.5″H
                            </td>
                            <td class="!px-6 !py-4 !font-[500]">  	
                              23
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td class="!px-6 !py-4 !font-[500]">
                                35″L x 24″W 
                            </td>
                            <td class="!px-6 !py-4 !font-[500]">
                              32.5″W x 36.5″H
                            </td>
                            <td class="!px-6 !py-4 !font-[500]">  	
                              24″W x 18.5″H
                            </td>
                            <td class="!px-6 !py-4 !font-[500]">  	
                              43
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td class="!px-6 !py-4 !font-[500]">
                                35″X x 14″W x 17-45″W
                            </td>
                            <td class="!px-6 !py-4 !font-[500]">
                              32.5″L x 16.5″H
                            </td>
                            <td class="!px-6 !py-4 !font-[500]">  	
                              22.5″L x 24″W
                            </td>
                            <td class="!px-6 !py-4 !font-[500]">  	
                              33
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td class="!px-6 !py-4 !font-[500]">
                                25″L x 20″W x 27-41″H
                            </td>
                            <td class="!px-6 !py-4 !font-[500]">
                              12.2″L x 12.5″W x 16.5″W
                            </td>
                            <td class="!px-6 !py-4 !font-[500]">  	
                              42.5″X x 34″W x 38.2″M
                            </td>
                            <td class="!px-6 !py-4 !font-[500]">  	
                              13
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td class="!px-6 !py-4 !font-[500]">
                                25″M x 34″XL x 27-42″L
                            </td>
                            <td class="!px-6 !py-4 !font-[500]">
                              48.5″W x 12.5″H
                            </td>
                            <td class="!px-6 !py-4 !font-[500]">  	
                              3 x 18.5″H
                            </td>
                            <td class="!px-6 !py-4 !font-[500]">  	
                              35
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>

        )
      }



      {
        activeTab === 2 && (
          <div className="shadow-md w-[80%] !py-5 !px-8 rounded-md">
          <div className="productReviewsContainer w-full">
            <h2 className='!text-[18px] font-[600]'>Customer questions & answers</h2>
            <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden !mt-5 !pr-12">
              <div className="review !pb-5 !pt-5 !border-b !border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                <div className="info w-[60%] flex items-center gap-3">
                  <div className="img w-[80px] h-[80px] overflow-hidden rounded-full !mt-4">
                    <img src={userImage} className="w-full" />
                  </div>

                  <div className="w-[80%]">
                    <h4 className='text-[16px] font-[600]'>Sajjad Ahmad</h4>
                    <h2 className='text-[13px] !mb-0'>2025/07/14</h2>
                    <p className=' !mt-0 !mb-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, quis. Deserunt, nam dolore. Animi accusantium repellat ipsam eaque similique. Voluptatibus ipsam quasi enim delectus iste? Laboriosam ex atque perferendis voluptatum. </p>
                  </div>

                </div>
                <Rating name='size-small' defaultValue={4} readOnly/>
              </div>
              <div className="review !pb-5 !pt-5 !border-b !border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                <div className="info w-[60%] flex items-center gap-3">
                  <div className="img w-[80px] h-[80px] overflow-hidden rounded-full !mt-4">
                    <img src={userImage} className="w-full" />
                  </div>

                  <div className="w-[80%]">
                    <h4 className='text-[16px] font-[600]'>Sajjad Ahmad</h4>
                    <h2 className='text-[13px] !mb-0'>2025/07/14</h2>
                    <p className=' !mt-0 !mb-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, quis. Deserunt, nam dolore. Animi accusantium repellat ipsam eaque similique. Voluptatibus ipsam quasi enim delectus iste? Laboriosam ex atque perferendis voluptatum. </p>
                  </div>

                </div>
                <Rating name='size-small' defaultValue={4} readOnly/>
              </div>
              <div className="review !pb-5 !pt-5 !border-b !border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                <div className="info w-[60%] flex items-center gap-3">
                  <div className="img w-[80px] h-[80px] overflow-hidden rounded-full !mt-4">
                    <img src={userImage} className="w-full" />
                  </div>

                  <div className="w-[80%]">
                    <h4 className='text-[16px] font-[600]'>Sajjad Ahmad</h4>
                    <h2 className='text-[13px] !mb-0'>2025/07/14</h2>
                    <p className=' !mt-0 !mb-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, quis. Deserunt, nam dolore. Animi accusantium repellat ipsam eaque similique. Voluptatibus ipsam quasi enim delectus iste? Laboriosam ex atque perferendis voluptatum. </p>
                  </div>

                </div>
                <Rating name='size-small' defaultValue={4} readOnly/>
              </div>
              <div className="review !pb-5 !pt-5 !border-b !border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                <div className="info w-[60%] flex items-center gap-3">
                  <div className="img w-[80px] h-[80px] overflow-hidden rounded-full !mt-4">
                    <img src={userImage} className="w-full" />
                  </div>

                  <div className="w-[80%]">
                    <h4 className='text-[16px] font-[600]'>Sajjad Ahmad</h4>
                    <h2 className='text-[13px] !mb-0'>2025/07/14</h2>
                    <p className=' !mt-0 !mb-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, quis. Deserunt, nam dolore. Animi accusantium repellat ipsam eaque similique. Voluptatibus ipsam quasi enim delectus iste? Laboriosam ex atque perferendis voluptatum. </p>
                  </div>

                </div>
                <Rating name='size-small' defaultValue={4} readOnly/>
              </div>
            </div>

            <br />

            <div className="reviewForm bg-[#fafafa] !p-4 rounded-md">
                <h2 className='text-[18px] font-[600]'>Add a Review</h2>
                <form action="" className='w-full !mt-5'>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Write a review..."
                    multiline
                    className='textfield w-full'
                    rows={4}
                  />
                  <br /><br />
                  <Rating name="size-small" defaultValue={3} />
                  <div className="flex items-center !mt-5">
                    <Button className='btn-org'>Submit Review</Button>
                  </div>
                </form>
            </div>
          </div>
          </div>
        )
      }
      </div>


      <div className="container !mt-8">
        <h2 className='text-[20px] font-[600]'>Related Products</h2>
        <ProductsSlider items={5}/>
      </div>
   </section>

    </> 
     )
}

export default ProductDetails
