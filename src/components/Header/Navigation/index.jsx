import  Button  from '@mui/material/Button'
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { MdRocketLaunch } from "react-icons/md";
import CategoryPanel from './CategoryPanel';
import { useState } from 'react';


const Navigation = () => {
    const [isOpenCategoryPanel, setIsOpenCategoryPanel] = useState(false);
    const openCategoryPanel = () => {
    setIsOpenCategoryPanel(true);
    }
  return (
  <>
   <nav className=''>
    <div className="container flex items-center justify-end gap-6">
        <div className="col_1 w-[20%] ">
            <Button className='!text-black gap-2 w-full' onClick={openCategoryPanel}><RiMenu2Fill className='text-[18px]'/>Shop By Categories
            <LiaAngleDownSolid className='text-[13px] font-bold ml-auto'/></Button>
        </div>

        <div className="col_2 w-[62%]">
            <ul className='flex items-center nav'>
                <li className='list-none'>
                    <Link to="/" className='link transition text-[14px] font-[500]'>
                    <Button className='link transition !font-[400] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>
                    Home
                    </Button></Link>
                </li>
                <li className='list-none relative'>
                    <Link to="/productListing" className='link transition text-[14px] font-[500]'>
                    <Button className='link transition !font-[400] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-1'>Fashion</Button></Link>

                
                <div className="submenu absolute top-[120%] left-0 min-w-[160px] bg-white shadow-md opacity-0 transition-all">
                    <ul className=''>
                        <li className='list-none w-full'>
                          <Link to="/" className='w-full'>
                          <Button className='!text-[rgba(0,0,0,0.8)] rounded-none !text-left !justify-start w-full'>Men</Button>

        {/* Submenu inside the men  */}
                 <div className="submenu absolute top-[0%] left-[120%] min-w-[160px] bg-white shadow-md opacity-0 transition-all">
                    <ul className=''>
                        <li className='list-none w-full'>
                          <Link to="/" className='w-full'>
                          <Button className='!text-[rgba(0,0,0,0.8)] rounded-none !text-left !justify-start w-full'>T-shirt</Button>
                          </Link>
                        </li>
                        <li className='list-none w-full'>
                            <Link to="/" className='w-full'>
                          <Button className='!text-[rgba(0,0,0,0.8)] !rounded-none !text-left !justify-start w-full'>Jeans</Button>
                          </Link>
                        </li>
                        <li className='list-none w-full'>
                            <Link to="/" className='w-full'>
                          <Button className='!text-[rgba(0,0,0,0.8)] !rounded-none !text-left !justify-start w-full'>Footwear</Button>
                        </Link> 
                        </li>
                        <li className='list-none'>
                            <Link to="/" className='w-full'>
                          <Button className='!text-[rgba(0,0,0,0.8)] rounded-none !text-left !justify-start w-full'>Pents</Button>
                          </Link>
                        </li>
                        <li className='list-none w-full'>
                            <Link to="/" className='w-full'>
                          <Button className='!text-[rgba(0,0,0,0.8)] !rounded-none !text-left !justify-start w-full'>Watch</Button>
                          </Link>
                        </li>
                    </ul> 
                </div>
            
                          </Link>
                        </li>
                        <li className='list-none w-full'>
                            <Link to="/" className='w-full'>
                          <Button className='!text-[rgba(0,0,0,0.8)] !rounded-none !text-left !justify-start w-full'>Women</Button>
                          </Link>
                        </li>
                        <li className='list-none w-full'>
                            <Link to="/" className='w-full'>
                          <Button className='!text-[rgba(0,0,0,0.8)] !rounded-none !text-left !justify-start w-full'>kids</Button>
                        </Link> 
                        </li>
                        <li className='list-none'>
                            <Link to="/" className='w-full'>
                          <Button className='!text-[rgba(0,0,0,0.8)] rounded-none !text-left !justify-start w-full'>Girls</Button>
                          </Link>
                        </li>
                        <li className='list-none w-full'>
                            <Link to="/" className='w-full'>
                          <Button className='!text-[rgba(0,0,0,0.8)] !rounded-none !text-left !justify-start w-full'>Boys</Button>
                          </Link>
                        </li>
                    </ul> 
                </div>

                </li>
                <li className='list-none'>
                    <Link to="/" className='link transition text-[14px] font-[500]'>
                    <Button className='link transition !font-[400] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>Electronics</Button></Link>
                </li>
                <li className='list-none'>
                    <Link to="/" className='link transition text-[14px] font-[500]'>
                    <Button className='link transition !font-[400] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>Bags</Button></Link>
                </li>
                <li className='list-none'>
                    <Link to="/" className='link transition text-[14px] font-[500]'>
                      <Button className='link transition !font-[400] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]!py-4'>Footwear</Button></Link>
                </li>
                <li className='list-none'>
                    <Link to="/" className='link transition text-[14px] font-[500]'>
                      <Button className='link transition !font-[400] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]!py-4'>Groceries</Button></Link>
                </li>
                <li className='list-none'>
                    <Link to="/" className='link transition text-[14px] font-[500]'>
                      <Button className='link transition !font-[400] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]!py-4'>Beauty</Button></Link>
                </li>
                <li className='list-none'>
                    <Link to="/" className='link transition text-[14px] font-[500]'>
                      <Button className='link transition !font-[400] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]!py-4'>Wellness</Button></Link>
                </li>
                <li className='list-none'>
                    <Link to="/" className='link transition text-[14px] font-[500]'>
                      <Button className='link transition !font-[400] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]!py-4'>Jewellery</Button></Link>
                </li>
            </ul>
        </div>

        <div className="col-3 w-[20%]">
            <p className='text-[15px] font-[500] flex items-center mb-0 mt-0 gap-1'><MdRocketLaunch/>Free International Delivery</p>
        </div>
    </div>
   </nav>


    {/* Category panel Component */}
    <CategoryPanel isOpenCategoryPanel={isOpenCategoryPanel} setIsOpenCategoryPanel={setIsOpenCategoryPanel}/> 
  </>
  )
}

export default Navigation
