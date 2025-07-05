import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IoClose } from "react-icons/io5";
import { Button } from '@mui/material';
import { FaRegSquarePlus } from "react-icons/fa6";
import "../Navigation/style.css"
import { Link, Links } from 'react-router-dom';

const CategoryPanel = (props) => {

    const toggleDrawer = (newOpen) => () => {
      props.setIsOpenCategoryPanel(newOpen)
    };
  
    const DrawerList = (
      <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
        <h3 className='!p-3 !text-[16px] !font-[500] flex justify-between items-center'>Shop By Categories <IoClose className='cursor-pointer text-[20px]' onClick={toggleDrawer(false)}/></h3>

        <div className="scroll">
            <ul className='w-full'>
                <li className='list-none flex justify-between items-center relative'>
                    <Link to="/" className='w-full'>
                    <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] flex !capitalize'>Fashion</Button>
                    </Link>
                    <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer'/>

                    <ul className='submenu absolute top-[100%] left-0 w-full !pl-3'>
                        <li className='list-none ralative'>
                        <Link to="/">
                           <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] flex !capitalize'>Appear</Button>
                        </Link>
                           <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer'/>


                    
                    <ul className='submenu absolute top-[100%] left-0 w-full !pl-3'>
                        <li className='list-none ralative !mb-1'>
                           <Link to={"/"} className='link w-full !text-left !justify-start !px-6 !text-[14px] !capitalize'>Smart Tablet</Link>
                        </li> 
                        <li className='list-none ralative !mb-1'>
                           <Link to={"/"} className='link w-full !text-left !justify-start !px-6 !text-[14px] !capitalize'>crepe T-Shir</Link>
                        </li> 
                        <li className='list-none ralative !mb-1'>
                           <Link to={"/"} className='link w-full !text-left !justify-start !px-6 !text-[14px] !capitalize'>Leather Watch</Link>
                        </li> 
                        <li className='list-none ralative !mb-1'>
                           <Link to={"/"} className='link w-full !text-left !justify-start !px-6 !text-[14px] !capitalize'>Rolling Diamond</Link>
                        </li> 
                    </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        
      </Box>
    );
  

  return (
  <>
      <Drawer open={props.isOpenCategoryPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
  </>
  )
}

export default CategoryPanel
