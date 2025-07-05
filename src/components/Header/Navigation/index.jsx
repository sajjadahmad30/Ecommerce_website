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
   <nav className='!py-3'>
    <div className="container flex items-center justify-end gap-6">
        <div className="col_1 w-[20%] ">
            <Button className='!text-black gap-2 w-full' onClick={openCategoryPanel}><RiMenu2Fill className='text-[18px]'/>Shop By Categories
            <LiaAngleDownSolid className='text-[13px] font-bold ml-auto'/></Button>
        </div>

        <div className="col_2 w-[65%]">
            <ul className='flex items-center gap-2'>
                <li className='list-none'>
                    <Link to="/" className='link transition text-[14px] font-[500]'>
                    <Button className='link transition !font-[400] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>
                    Home
                    </Button></Link>
                </li>
                <li className='list-none'>
                    <Link to="/" className='link transition text-[14px] font-[500]'>
                    <Button className='link transition !font-[400] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Fashion</Button></Link>
                </li>
                <li className='list-none'>
                    <Link to="/" className='link transition text-[14px] font-[500]'>
                    <Button className='link transition !font-[400] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Electronics</Button></Link>
                </li>
                <li className='list-none'>
                    <Link to="/" className='link transition text-[14px] font-[500]'>
                    <Button className='link transition !font-[400] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Bags</Button></Link>
                </li>
                <li className='list-none'>
                    <Link to="/" className='link transition text-[14px] font-[500]'>
                      <Button className='link transition !font-[400] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Footwear</Button></Link>
                </li>
                <li className='list-none'>
                    <Link to="/" className='link transition text-[14px] font-[500]'>
                      <Button className='link transition !font-[400] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Groceries</Button></Link>
                </li>
                <li className='list-none'>
                    <Link to="/" className='link transition text-[14px] font-[500]'>
                      <Button className='link transition !font-[400] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Beauty</Button></Link>
                </li>
                <li className='list-none'>
                    <Link to="/" className='link transition text-[14px] font-[500]'>
                      <Button className='link transition !font-[400] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Wellness</Button></Link>
                </li>
                <li className='list-none'>
                    <Link to="/" className='link transition text-[14px] font-[500]'>
                      <Button className='link transition !font-[400] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Jewellery</Button></Link>
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
