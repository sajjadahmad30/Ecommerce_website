import React, { useState } from 'react'
import "../SideBar/style.css"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Collapse } from 'react-collapse';
import Button from '@mui/material/Button';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';

const SideBar = () => {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
  const [isOpenAvailFilter, setIsOpenAvailFilter] = useState(true);
  const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true);
  return (
    <aside className='sidebar !py-5'>
        <div className="box">
            <h3 className='w-full !pr-2 !mb-3 text-[16px] font-[600] flex items-center'>Shop by Category 
              <Button  onClick={()=>setIsOpenCategoryFilter(!isOpenCategoryFilter)} className='!w-[30px] !h-[30px] !min-w-[30px] !ml-auto !rounded-full !text-black'>
                {
                  isOpenCategoryFilter ? <FaAngleUp/> : <FaAngleDown/>
                }
              </Button></h3>
            <Collapse isOpened={isOpenCategoryFilter}>
            <div className="scroll !px-4 relative -left-[13px]"> 
             <FormControlLabel control={<Checkbox size="small"/>} className='w-full'  label="Fashion" />
             <FormControlLabel control={<Checkbox size="small"/>} className='w-full'  label="Electronics" />
             <FormControlLabel control={<Checkbox size="small"/>} className='w-full'  label="Bags" />
             <FormControlLabel control={<Checkbox size="small"/>} className='w-full'  label="Footwear" />
             <FormControlLabel control={<Checkbox size="small"/>} className='w-full'  label="Groceries" />
             <FormControlLabel control={<Checkbox size="small"/>} className='w-full'  label="Beauty" />
             <FormControlLabel control={<Checkbox size="small"/>} className='w-full'  label="Wellness" />
             <FormControlLabel control={<Checkbox size="small"/>} className='w-full'  label="Jewellery" />
            </div>
            </Collapse>
        </div>


        <div className="box">
            <h3 className='w-full !pr-2 !mb-3 text-[16px] font-[600] flex items-center'>Availability 
              <Button  onClick={()=>setIsOpenAvailFilter(!isOpenAvailFilter)} className='!w-[30px] !h-[30px] !min-w-[30px] !ml-auto !rounded-full !text-black'>
                {
                  isOpenAvailFilter ? <FaAngleUp/> : <FaAngleDown/>
                }
              </Button></h3>
            <Collapse isOpened={isOpenAvailFilter}>
            <div className="scroll !px-4 relative -left-[13px]"> 
             <FormControlLabel control={<Checkbox size="small"/>} className='w-full'  label="Available (17)" />
             <FormControlLabel control={<Checkbox size="small"/>} className='w-full'  label="In Stock (10)" />
             <FormControlLabel control={<Checkbox size="small"/>} className='w-full'  label="Not Available (17)" />
            </div>
            </Collapse>
        </div>



        <div className="box">
            <h3 className='w-full !pr-2 !mb-3 text-[16px] font-[600] flex items-center'>Size 
              <Button  onClick={()=>setIsOpenSizeFilter(!isOpenSizeFilter)} className='!w-[30px] !h-[30px] !min-w-[30px] !ml-auto !rounded-full !text-black'>
                {
                  isOpenSizeFilter ? <FaAngleUp/> : <FaAngleDown/>
                }
              </Button></h3>
            <Collapse isOpened={isOpenSizeFilter}>
            <div className="scroll !px-4 relative -left-[13px]"> 
             <FormControlLabel control={<Checkbox size="small"/>} className='w-full'  label="Large (5)" />
             <FormControlLabel control={<Checkbox size="small"/>} className='w-full'  label="Small (12)" />
             <FormControlLabel control={<Checkbox size="small"/>} className='w-full'  label="Medium (19)" />
             <FormControlLabel control={<Checkbox size="small"/>} className='w-full'  label="XL (16)" />
             <FormControlLabel control={<Checkbox size="small"/>} className='w-full'  label="XXL (8)" />
            </div>
            </Collapse>
        </div>


        <div className="box !mt-4">
            <h3 className='w-full !pr-5 !mb-3 text-[16px] font-[600] flex items-center'>Filter By Price </h3>
            <RangeSlider/>
            <div className="d-flex !pt-4 !pb-2 priceRange">
              <span className='!text-[13px]'>
                From: <strong className='text-dark'>RS:{100}</strong>
              </span>
              <span className='!ml-10 !text-[13px]'>
                From: <strong className='text-dark'>RS:{5000}</strong>
              </span>
            </div>
        </div>


        <div className="box !mt-4">
            <h3 className='w-full !pr-5 !mb-3 text-[16px] font-[600] flex items-center'>Filter By Rating</h3>

            <div className="rating flex flex-col w-full cursor-pointer gap-1">
            <Rating name="size-small" defaultValue={4} size="small" className='cursor-pointer'  readOnly />
            <Rating name="size-small" defaultValue={5} size="small" className='cursor-pointer' readOnly />
            <Rating name="size-small" defaultValue={2} size="small" className='cursor-pointer' readOnly />
            <Rating name="size-small" defaultValue={4} size="small" className='cursor-pointer'  readOnly />
            </div>
        </div>


        
    </aside>
  )
}

export default SideBar
