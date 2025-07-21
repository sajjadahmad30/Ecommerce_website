import React, { useState } from 'react'
import AccountSideBar from '../../components/AccountSideBar'
import Button from '@mui/material/Button'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import Badge from '../../components/Badge'
import sajjadImg from "../../assets/images/sajjad.jpeg"

const Orders = () => {

const [isOpenOrderdProduct, setIsOpenOrderdProduct] = useState(null);

const isShowOrderdProduct = (index) => {
  if (isOpenOrderdProduct === index) {
    setIsOpenOrderdProduct(null); 
  } else {
    setIsOpenOrderdProduct(index);
  }
};

  return (
      <section className='!py-10 w-full'>
        <div className="container flex gap-5">
            <div className="col1 w-[20%]">
               <AccountSideBar/>
            </div>

            <div className="col2 w-[80%]">
                  <div className="shadow-md rounded-md bg-white">

                    <div className="!py-2 !px-3 border-b border-[rgba(0,0,0,0.1)]">
                         <h2 className='font-[600]'>My Orders</h2>
                     <p className='!mt-0'>There are <span className='font-bold text-[#ff5252]'>2</span>  orders</p>


                    <div class="relative overflow-x-auto !mt-5">
                      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                  <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                                  &nbsp;
                                  </th>
                                  <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                                    Order Id
                                  </th>
                                  <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                                      Payment Id
                                  </th>
                                  <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                                      Products
                                  </th>
                                  <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                                      Name 
                                  </th>
                                  <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                                      Phone Number 
                                  </th>
                                  <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                                      Address 
                                  </th>
                                  <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                                      Pincode 
                                  </th>
                                  <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                                      Total Amount 
                                  </th>
                                  <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                                      Email 
                                  </th>
                                  <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                                      User Id 
                                  </th>
                                  <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                                      Order Status
                                  </th>
                                  <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                                      Date
                                  </th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                  <td class="!px-6 !py-4 !font-[500]">
                                   <Button  className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[hsl(0,0%,95%)]' onClick={()=>isShowOrderdProduct(0)}>
                                    {
                                      isOpenOrderdProduct === 0 ?  <FaAngleUp className='!text-[16px] text-[rgba(0,0,0,0.7)]'/> : <FaAngleDown className='!text-[16px] text-[rgba(0,0,0,0.7)]'/>
                                    }

                                   </Button>
                                  </td>
                                  <td class="!px-6 !py-4 !font-[500]">
                                    2
                                  </td>
                                  <td class="!px-6 !py-4 !font-[500]">  	
                                   234
                                  </td>
                                  <td class="!px-6 !py-4 !font-[500]">  	
                                    Lapto
                                  </td> 
                                  <td class="!px-6 !py-4 !font-[500]">  	
                                    Sajja
                                  </td> 
                                     <td class="!px-6 !py-4 !font-[500]">  	

                                    4302942342
                                  </td> 
                                     <td class="!px-6 !py-4 !font-[500]">  	

                                    peshawar
                                  </td> 
                                     <td class="!px-6 !py-4 !font-[500]">  	

                                    25000
                                  </td> 
                                     <td class="!px-6 !py-4 !font-[500]">  	

                                    123000
                                  </td> 
                                     <td class="!px-6 !py-4 !font-[500]">  	

                                    Sajjad@gmail.com
                                  </td> 
                                     <td class="!px-6 !py-4 !font-[500]">  	

                                    <span className='text-[#ff5252]'>Sajjad 1232</span>
                                  </td> 
                                     <td class="!px-6 !py-4 !font-[500]">  	
                                     <Badge status="delivered"/>
                                  </td> 
                                     <td class="!px-6 !py-4 !font-[500]">  	

                                     20/07/2025
                                  </td> 
                              </tr>


                            {
                              isOpenOrderdProduct === 0 && (
                                 <tr>
                                <td className='!pl-20 ' colSpan={"9"}>
                                 <div class="relative overflow-x-auto !mt-5">
                                  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                          <tr>
                                              <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                                                  Product Id
                                              </th>
                                              <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                                                  Product Title
                                              </th>
                                              <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                                                  Image 
                                              </th>
                                              <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                                                  Quantity
                                              </th>
                                              <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                                                  Price 
                                              </th>
                                              <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                                                  Sub Total 
                                              </th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                              <td class="!px-6 !py-4 !font-[500]">
                                                2
                                              </td>
                                              <td class="!px-6 !py-4 !font-[500]">  	
                                              New Design 2025
                                              </td>
                                              <td class="!px-6 !py-4 !font-[500]">  	
                                               <img src={sajjadImg} className="w-[40px] h-[40px] object-cover rounded-md" />
                                              </td> 
                                              <td class="!px-6 !py-4 !font-[500]">  	
                                                2
                                              </td> 
                                                <td class="!px-6 !py-4 !font-[500]">  	
                                                120
                                              </td> 
                                                <td class="!px-6 !py-4 !font-[500]">  	
                                                 3000
                                              </td> 
                                          </tr>

                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                              <td class="!px-6 !py-4 !font-[500]">
                                                2
                                              </td>
                                              <td class="!px-6 !py-4 !font-[500]">  	
                                              New Design 2025
                                              </td>
                                              <td class="!px-6 !py-4 !font-[500]">  	
                                               <img src={sajjadImg} className="w-[40px] h-[40px] object-cover rounded-md" />
                                              </td> 
                                              <td class="!px-6 !py-4 !font-[500]">  	
                                                2
                                              </td> 
                                                <td class="!px-6 !py-4 !font-[500]">  	
                                                120
                                              </td> 
                                                <td class="!px-6 !py-4 !font-[500]">  	
                                                 3000
                                              </td> 
                                          </tr>

                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                              <td class="!px-6 !py-4 !font-[500]">
                                                2
                                              </td>
                                              <td class="!px-6 !py-4 !font-[500]">  	
                                              New Design 2025
                                              </td>
                                              <td class="!px-6 !py-4 !font-[500]">  	
                                               <img src={sajjadImg} className="w-[40px] h-[40px] object-cover rounded-md" />
                                              </td> 
                                              <td class="!px-6 !py-4 !font-[500]">  	
                                                2
                                              </td> 
                                                <td class="!px-6 !py-4 !font-[500]">  	
                                                120
                                              </td> 
                                                <td class="!px-6 !py-4 !font-[500]">  	
                                                 3000
                                              </td> 
                                          </tr>

                                      </tbody>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                              )
                            }



                            {/* second product  */}
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                  <td class="!px-6 !py-4 !font-[500]">
                                   <Button  className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[hsl(0,0%,95%)]' onClick={()=>isShowOrderdProduct(1)}>
                                    {
                                      isOpenOrderdProduct === 1 ?  <FaAngleUp className='!text-[16px] text-[rgba(0,0,0,0.7)]'/> : <FaAngleDown className='!text-[16px] text-[rgba(0,0,0,0.7)]'/>
                                    }

                                   </Button>
                                  </td>
                                  <td class="!px-6 !py-4 !font-[500]">
                                    2
                                  </td>
                                  <td class="!px-6 !py-4 !font-[500]">  	
                                   234
                                  </td>
                                  <td class="!px-6 !py-4 !font-[500]">  	
                                    Lapto
                                  </td> 
                                  <td class="!px-6 !py-4 !font-[500]">  	
                                    Sajja
                                  </td> 
                                     <td class="!px-6 !py-4 !font-[500]">  	

                                    4302942342
                                  </td> 
                                     <td class="!px-6 !py-4 !font-[500]">  	

                                    peshawar
                                  </td> 
                                     <td class="!px-6 !py-4 !font-[500]">  	

                                    25000
                                  </td> 
                                     <td class="!px-6 !py-4 !font-[500]">  	

                                    123000
                                  </td> 
                                     <td class="!px-6 !py-4 !font-[500]">  	

                                    Sajjad@gmail.com
                                  </td> 
                                     <td class="!px-6 !py-4 !font-[500]">  	

                                    <span className='text-[#ff5252]'>Sajjad 1232</span>
                                  </td> 
                                     <td class="!px-6 !py-4 !font-[500]">  	
                                     <Badge status="delivered"/>
                                  </td> 
                                     <td class="!px-6 !py-4 !font-[500]">  	

                                     20/07/2025
                                  </td> 
                              </tr>


                            {
                              isOpenOrderdProduct === 1 && (
                                 <tr>
                                <td className='!pl-20 ' colSpan={"9"}>
                                 <div class="relative overflow-x-auto !mt-5">
                                  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                          <tr>
                                              <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                                                  Product Id
                                              </th>
                                              <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                                                  Product Title
                                              </th>
                                              <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                                                  Image 
                                              </th>
                                              <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                                                  Quantity
                                              </th>
                                              <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                                                  Price 
                                              </th>
                                              <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                                                  Sub Total 
                                              </th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                              <td class="!px-6 !py-4 !font-[500]">
                                                2
                                              </td>
                                              <td class="!px-6 !py-4 !font-[500]">  	
                                              New Design 2025
                                              </td>
                                              <td class="!px-6 !py-4 !font-[500]">  	
                                               <img src={sajjadImg} className="w-[40px] h-[40px] object-cover rounded-md" />
                                              </td> 
                                              <td class="!px-6 !py-4 !font-[500]">  	
                                                2
                                              </td> 
                                                <td class="!px-6 !py-4 !font-[500]">  	
                                                120
                                              </td> 
                                                <td class="!px-6 !py-4 !font-[500]">  	
                                                 3000
                                              </td> 
                                          </tr>

                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                              <td class="!px-6 !py-4 !font-[500]">
                                                2
                                              </td>
                                              <td class="!px-6 !py-4 !font-[500]">  	
                                              New Design 2025
                                              </td>
                                              <td class="!px-6 !py-4 !font-[500]">  	
                                               <img src={sajjadImg} className="w-[40px] h-[40px] object-cover rounded-md" />
                                              </td> 
                                              <td class="!px-6 !py-4 !font-[500]">  	
                                                2
                                              </td> 
                                                <td class="!px-6 !py-4 !font-[500]">  	
                                                120
                                              </td> 
                                                <td class="!px-6 !py-4 !font-[500]">  	
                                                 3000
                                              </td> 
                                          </tr>

                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                              <td class="!px-6 !py-4 !font-[500]">
                                                2
                                              </td>
                                              <td class="!px-6 !py-4 !font-[500]">  	
                                              New Design 2025
                                              </td>
                                              <td class="!px-6 !py-4 !font-[500]">  	
                                               <img src={sajjadImg} className="w-[40px] h-[40px] object-cover rounded-md" />
                                              </td> 
                                              <td class="!px-6 !py-4 !font-[500]">  	
                                                2
                                              </td> 
                                                <td class="!px-6 !py-4 !font-[500]">  	
                                                120
                                              </td> 
                                                <td class="!px-6 !py-4 !font-[500]">  	
                                                 3000
                                              </td> 
                                          </tr>

                                      </tbody>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                              )
                            }
                            
                             
                          </tbody>
                      </table>
                    </div>
                     
                    </div>
                </div>
            </div>
        </div>
     </section>
  )
}

export default Orders
