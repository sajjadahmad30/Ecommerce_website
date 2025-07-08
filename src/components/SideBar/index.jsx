import React, { useState } from 'react'
import "../SideBar/style.css"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Collapse } from 'react-collapse';
import Button from '@mui/material/Button';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const SideBar = () => {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
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
    </aside>
  )
}

export default SideBar
