import React, { useState } from 'react'

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaRegMinusSquare } from 'react-icons/fa';
import { FaRegSquarePlus } from 'react-icons/fa6';
const CategoryCollapse = () => {
    const [submenuIndex, setSubmenuIndex] = useState(null);
        const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);
    
        const toggleDrawer = (newOpen) => () => {
          props.setIsOpenCategoryPanel(newOpen)
        };
    
        const openSubmenu = (index)=>{
            if(submenuIndex === index){
                setSubmenuIndex(null);
            }else{
                setSubmenuIndex(index)
            }
        }
    
        const openInnerSubmenu = (index)=>{
            if(innerSubmenuIndex === index){
                setInnerSubmenuIndex(null);
            }else{
                setInnerSubmenuIndex(index)
            }
        }
  return (
    <>
    
            <div className="scroll">
                <ul className='w-full'>
                    <li className='list-none flex flex-col items-center relative'>
                        <Link to="/" className='w-full'>
                        <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] flex !capitalize'>Fashion</Button>
                        </Link>
                        {
                            submenuIndex === 0 ?  <FaRegMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openSubmenu(0)}/>
                            :
                            <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openSubmenu(0)}/>
                       
                        }
                       
    
                            {
                                submenuIndex === 0 && (
                                    <ul className='submenu w-full !pl-3'>
                                    <li className='list-none ralative'>
                                    <Link to="/">
                                       <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] flex !capitalize'>Appear</Button>
                                    </Link>
                                    {
                            innerSubmenuIndex === 0 ?  <FaRegMinusSquare className='absolute top-[45px] right-[15px] cursor-pointer' onClick={()=>openInnerSubmenu(0)}/>
                            :
                            <FaRegSquarePlus className='absolute  top-[45px] right-[15px] cursor-pointer' onClick={()=>openInnerSubmenu(0)}/>
                       
                        }
                        
            
                                    {
                                        innerSubmenuIndex === 0 && (
                                            <ul className='inner_submenu w-full !pl-3'>
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
                                        )
                                    }
                                
                            
                                    </li>
                                </ul>
                                )
                            }
    
                       
                    </li>
    
    
    
                    {/* second category  */}
                    <li className='list-none flex flex-col items-center relative'>
                        <Link to="/" className='w-full'>
                        <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] flex !capitalize'>Outerwear</Button>
                        </Link>
                        {
                            submenuIndex === 1 ?  <FaRegMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openSubmenu(1)}/>
                            :
                            <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openSubmenu(1)}/>
                       
                        }
                       
    
                            {
                                submenuIndex === 1 && (
                                    <ul className='submenu  w-full !pl-3'>
                                    <li className='list-none ralative'>
                                    <Link to="/">
                                       <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] flex !capitalize'>Wooden Chair</Button>
                                    </Link>
                                    {
                            innerSubmenuIndex === 1 ?  <FaRegMinusSquare className='absolute top-[45px] right-[15px] cursor-pointer' onClick={()=>openInnerSubmenu(1)}/>
                            :
                            <FaRegSquarePlus className='absolute top-[45px] right-[15px] cursor-pointer' onClick={()=>openInnerSubmenu(1)}/>
                       
                        }
                        
                        {
                                    innerSubmenuIndex === 1 && (
                                        <ul className='inner_submenu w-full !pl-3'>
                                        <li className='list-none ralative !mb-1'>
                                               <Link to={"/"} className='link w-full !text-left !justify-start !px-6 !text-[14px] !capitalize'>
                                               Sneakers Shoes</Link>
                                            </li> 
                                            <li className='list-none ralative !mb-1'>
                                               <Link to={"/"} className='link w-full !text-left !justify-start !px-6 !text-[14px] !capitalize'>Purse</Link>
                                            </li> 
                                            <li className='list-none ralative !mb-1'>
                                               <Link to={"/"} className='link w-full !text-left !justify-start !px-6 !text-[14px] !capitalize'>Xbox Controller</Link>
                                            </li> 
                                            <li className='list-none ralative !mb-1'>
                                               <Link to={"/"} className='link w-full !text-left !justify-start !px-6 !text-[14px] !capitalize'>Caps</Link>
                                            </li> 
                                        </ul>
                                        )
                                    }
                                
                            
                                    </li>
                                </ul>
                                )
                            }
    
                       
                    </li>
                </ul>
            </div>
    </>
  )
}

export default CategoryCollapse
