import Button  from '@mui/material/Button'
import { BiSupport } from 'react-icons/bi'
import {  BsWallet2 } from 'react-icons/bs'
import {  IoChatboxOutline } from 'react-icons/io5'
import { LiaGiftSolid, LiaShippingFastSolid } from 'react-icons/lia'
import { PiKeyReturnLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa'
import { AiOutlineYoutube } from 'react-icons/ai'
import paypalImage from "../../assets/images/paymentCard/payfal.jpg"
import visaImage from "../../assets/images/paymentCard/visa.jpg"
import AmazonImage from "../../assets/images/paymentCard/amazon.jpg"
import bicoinImage from "../../assets/images/paymentCard/bitcoin.jpg"


import Drawer from '@mui/material/Drawer';
import { IoCloseSharp } from 'react-icons/io5'
import imageWomen1 from "../../assets/images/fashionImages/secondWomen1.jpg"
import CartPanel from '../../components/CartPanel/index'
import { useContext } from 'react'
import { MyContext } from '../../App'

const Footer = () => {
    
    const context = useContext(MyContext);
  return (
  <>
    <footer className='!py-6 bg-[#fafafa]'>
        <div className="container">
            <div className="flex items-center justify-center gap-2 !pb-8 !py-8">
                <div className="col flex items-center flex-col justify-center group w-[15%]">
                    <LiaShippingFastSolid className='text-[50px] text-center transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1'/>
                    <h3 className='!text-[16px] !font-[600] !mt-3'>Free Shipping</h3>
                    <p className='!text-[12px] !font-[500]'>For all orders over $100</p>
                </div>
                <div className="col flex items-center flex-col justify-center group w-[15%]">
                    <PiKeyReturnLight className='text-[50px] text-center transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1'/>
                    <h3 className='!text-[16px] !font-[600] !mt-3'>30 Days Returns</h3>
                    <p className='!text-[12px] !font-[500]'>For an Exchange Products</p>
                </div>
                <div className="col flex items-center flex-col justify-center group w-[15%]">
                    <BsWallet2 className='text-[50px] text-center transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1'/>
                    <h3 className='!text-[16px] !font-[600] !mt-3'>Secured Payment</h3>
                    <p className='!text-[12px] !font-[500]'>Payment Cards Accepted</p>
                </div>
                <div className="col flex items-center flex-col justify-center group w-[15%]">
                    <LiaGiftSolid className='text-[50px] text-center transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1'/>
                    <h3 className='!text-[16px] !font-[600] !mt-3'>Special Gifts</h3>
                    <p className='!text-[12px] !font-[500]'>Our first Product order</p>
                </div>
                <div className="col flex items-center flex-col justify-center group w-[15%]">
                    <BiSupport className='text-[50px] text-center transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1'/>
                    <h3 className='!text-[16px] !font-[600] !mt-3'>Supported 24/7</h3>
                    <p className='!text-[12px] !font-[500]'>Contact Us AnyTime</p>
                </div>
            </div>
            <hr /> <br />

            <div className="footer flex justify-center gap-3 !py-8">
                <div className="part1 w-[22%] border-r !border-gray-300">
                    <h1 className='text-[20px] font-[600] !mb-4'>Contact Us</h1>
                    <p className='text-[13px] font-[400] !pb-4' >ClassyShop - Mega Super Store <br/> 507-Union Trade Center Peshawar </p>
                    <Link to="/" className='link text-[13px]'><a href="mailto:sajjadahmad5578@gmail.com">sajjadahmad5578@gmail.com</a> </Link>
                    <span className='text-[22px] font-[600] text-[#ff5252] block !mt-3 !mb-4'>03014898897</span>

                    <div className="flex items-center !gap-4 ">
                        <IoChatboxOutline className='text-[40px] text-[#ff5252]'/>
                        <span className='text-[16px] font-[600]'>Online Chat <br /> Get Expert Help</span>
                    </div>
                </div>

                <div className="part2 w-[40%] flex">
                    <div className="part2_col1 w-[50%] !pl-8">
                        <h2 className='text-[20px] font-[600] mb-4'>Products</h2>
                        <ul className='lisst'>
                            <li className='list-none w-full  text-[14px] !mb-2'><Link to={"/"} className='link'>Price Drop</Link></li>
                            <li className='list-none w-full  text-[14px] !mb-2'><Link to={"/"} className='link'>New Products</Link></li>
                            <li className='list-none w-full  text-[14px] !mb-2'><Link to={"/"} className='link'>Best Sales</Link></li>
                            <li className='list-none w-full  text-[14px] !mb-2'><Link to={"/"} className='link'>Contact Us</Link></li>
                            <li className='list-none w-full  text-[14px] !mb-2'><Link to={"/"} className='link'>Sitemap</Link></li>
                            <li className='list-none w-full  text-[14px] !mb-2'><Link to={"/"} className='link'>Stores</Link></li>
                        </ul>
                    </div>
                    <div className="part2_col2 w-[50%]">
                        <h2 className='text-[20px] font-[600] mb-4'>Our Company</h2>
                        <ul className='lisst'>
                            <li className='list-none w-full  text-[14px] !mb-2'><Link to={"/"} className='link'>Delivery</Link></li>
                            <li className='list-none w-full  text-[14px] !mb-2'><Link to={"/"} className='link'>Legal Notice</Link></li>
                            <li className='list-none w-full  text-[14px] !mb-2'><Link to={"/"} className='link'>Terms and Condition of Use</Link></li>
                            <li className='list-none w-full  text-[14px] !mb-2'><Link to={"/"} className='link'>About Us</Link></li>
                            <li className='list-none w-full  text-[14px] !mb-2'><Link to={"/"} className='link'>Secure Payment</Link></li>
                            <li className='list-none w-full  text-[14px] !mb-2'><Link to={"/"} className='link'>Login</Link></li>
                        </ul>
                    </div>

                </div>
                
                <div className="part3 w-[25%] flex flex-col">
                    <h1 className='text-[20px] font-[600] !mb-4'>Subscribe To Newsletter</h1>
                    <p className='text-[13px] font-[400] !pb-4' >Subscribe to our latest newsletter to get<br/> news about special discount</p>
                    
                    <form action="" className='w-full'>
                    <input type="email" name="" id="" className='border !p-2 w-full outline-none !mb-4 focus:border-[rgba(0,0,0,0.3)] rounded-sm border-[rgba(0,0,0,0.2)]' placeholder='Your Email Adress...' />
                    <Button className='btn-org'>Subscribe</Button>
                    <FormControlLabel className=' !mt-2' control={<Checkbox defaultChecked />}  label="I agree to the terms and conditions and the privacy policy" />
                    </form>
                </div>

            </div>

        </div>
    </footer>


    <div className="bottomStrip border-t border-[rgba(0,0,0,0.1)] bg-white !py-3">
        <div className="container flex items-center justify-between">
            <ul className='flex items-center gap-2 '>
                <li className='list-none'>
                    <Link to={"/"} target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] hover:text-white transition-all'> 
                    <FaFacebookF className='text-[20px] hover:text-white'/></Link>
                </li>
                <li className='list-none'>
                    <Link to={"/"} target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] hover:text-white transition-all'> 
                    <AiOutlineYoutube className='text-[20px] hover:text-white'/></Link>
                </li>
                <li className='list-none'>
                    <Link to={"/"} target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] hover:text-white transition-all'> 
                    <FaPinterestP className='text-[20px] hover:text-white'/></Link>
                </li>
                <li className='list-none'>
                    <Link to={"/"} target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] hover:text-white transition-all'> 
                    <FaInstagram className='text-[20px] hover:text-white'/></Link>
                </li>
            </ul>

            <p className='text-[13px] text-center !mb-0'> &copy; 2025 - Ecommerce software by Sajjad Ahmad</p>

            <div className="flex items-center gap-1">
                <img src={paypalImage} className="h-[40px] cursor-pointer  border" />
                <img src={visaImage} className="h-[40px] cursor-pointer border" />
                <img src={AmazonImage} className="h-[40px] cursor-pointer border" />
                <img src={bicoinImage} className="h-[40px] cursor-pointer border" />
            </div>
        </div>
    </div>


    <Drawer 
        open={context.openCartPanel} 
        onClose={context.toggleCartPanel(false)} 
        anchor='right'
        className=' cartPanel'
        >
         <div className="flex items-center justify-between !py-3 !px-4 gap-3 border-b border-[rgba(0,0,0,0.1)]">
           <h4 className='font-[600]'>Shopping Cart(1) </h4><IoCloseSharp onClick={context.toggleCartPanel(false)} className='text-[20px] cursor-pointer'/>
         </div>

        <CartPanel/>
         
      </Drawer>
  </>
  )
}

export default Footer
