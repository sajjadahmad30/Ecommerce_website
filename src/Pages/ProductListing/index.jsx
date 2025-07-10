import "../../index.css"
import React, { useState } from 'react'
import SideBar from '../../components/SideBar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductItem from '../../components/ProductItem';
import Button from '@mui/material/Button';
import { IoGridSharp } from 'react-icons/io5';
import { LuMenu } from 'react-icons/lu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProductItemListView from '../../components/ProductItemListView';
import Pagination from '@mui/material/Pagination';

const ProductListing = () => {
  const [itemView, setItemView] = useState("grid");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className='!py-5'>
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
      </Breadcrumbs>
      </div>
       

      <div className="bg-white  !p-2 !mt-4">
      <div className="container flex gap-3">
            <div className="sidebarWrapper w-[20%] h-full bg-white">
                <SideBar/>
            </div>

            <div className="rightContent w-[80%] !py-3">

              <div className="flex items-center justify-between w-full !p-2 !mb-4 bg-[#f1f1f1] rounded-md ">
                <div className="col1 flex items-center itemViewActions">
                  <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !text-[#000] !rounded-full ${itemView === "list" && "active"}`}
                  onClick={()=>{setItemView('list')}}>
                    <LuMenu className='!text-[rgba(0,0,0,0.7)]'/>
                  </Button>
                  <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !text-[#000] !rounded-full ${itemView === "grid" && "active"}`}
                   onClick={()=>{setItemView('grid')}}>
                    <IoGridSharp className='!text-[rgba(0,0,0,0.7)]'/>
                  </Button>

                  <span className='!text-[14px] !font-[500px] !pl-3 text-[rgba(0,0,0,0.7)]'>There are 28 products</span>

                </div>

                <div className="col2 !ml-auto flex items-center justify-end gap-3 !pr-4">
                  <span className='!text-[14px] !font-[500px] !pl-3 text-[rgba(0,0,0,0.7)]'>Sort By</span>

                  <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    className='!bg-white !text-[#000] !text-[12px] !capitalize !border-1 !border-[#000]'
                  >
                    Sales Highest to Lowest 
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                      list: {
                        'aria-labelledby': 'basic-button',
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose} className=' !text-[#000] !text-[13px] !capitalize'>Relevence</MenuItem>
                    <MenuItem onClick={handleClose} className=' !text-[#000] !text-[13px] !capitalize'>Name A to Z</MenuItem>
                    <MenuItem onClick={handleClose} className=' !text-[#000] !text-[13px] !capitalize'>Name Z to A</MenuItem>
                    <MenuItem onClick={handleClose} className=' !text-[#000] !text-[13px] !capitalize'>Price low to high</MenuItem>
                    <MenuItem onClick={handleClose} className=' !text-[#000] !text-[13px] !capitalize'>Price high to low</MenuItem>
                  </Menu>
          
                </div>
              </div>

              <div className={`grid ${itemView === "grid" ? " grid-cols-4 md:grid-cols-4" : " grid-cols-1 md:grid-cols-1 "} gap-4`}>
               {
                itemView === "grid" ?
                <>
                 <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                </>
                :
                <>
                <ProductItemListView/>
                <ProductItemListView/>
                <ProductItemListView/>
                <ProductItemListView/>
                <ProductItemListView/>
                <ProductItemListView/>
                <ProductItemListView/>
                <ProductItemListView/>
                <ProductItemListView/>
                <ProductItemListView/>
                <ProductItemListView/>
                </>
               }
              </div>

              <div className="flex items-center justify-center !mt-10">
              <Pagination count={10} showFirstButton showLastButton />
              </div>

            </div>
        </div>
      </div>
       
    </section>
  )
}

export default ProductListing
