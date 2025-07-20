import { Link } from 'react-router-dom'
import logo from "../../assets/logos/logo.png"
import Serach from '../Search'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoBagCheckOutline, IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart, FaRegistered, FaRegUser } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';
import { useContext, useState } from 'react';
import { MyContext } from '../../App';
import Button from '@mui/material/Button';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoIosLogOut, IoMdHeartEmpty } from 'react-icons/io';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));


const Header = () => {

 const [anchorEl, setAnchorEl] =useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const context = useContext(MyContext);
  return (
   <header className='bg-white'>
    <div className="top-strip py-2 border-t-[1px] border-b-[1px] border-gray-200 ">
      <div className="container">
        <div className="flex items-center justify-between">

          <div className="col1 w-[50%]">
            <p className='text-[14px] font-[500]'>Get up to 50% off new season styles, limited time only.</p>
          </div>

          <div className="col2 flex items-center justify-end">
            <ul className='flex gap-4'>
              <li className='list-none'>
                <Link to="/help-center" className='link text-[13px] font-[500] transition'>Help Center</Link>
              </li>
              <li className='list-none'>
                <Link to="/order-tracking" className='link text-[13px] font-[500] transition'>Order Tracking </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>


    <div className="header py-3 border-b-[1px] border-gray-200">
      <div className="container flex items-center justify-between">
        <div className="col1 w-[25%]">
          <Link to="/" className='logo'>
            <img src={logo} alt="Logo" className='h-24'/>
          </Link>
        </div>

        <div className="col2 w-[40%]">
          <Serach/>
        </div>

        <div className="col3 w-[35%] flex items-center justify-center">
          <ul className='flex items-center justify-end gap-6 w-full'>
            {
              context.isLogin === false ?
               <li className=''> 
              <Link to="/login" className='link transition font-[500] text-[15px]'>Login</Link> /  <Link to="/register" className='link transition font-[500] text-[15px]'>Register</Link>
            </li>
            :
          <>
            <Button className="myAccount !text-[#000] flex items-center gap-3 cursor-pointer" onClick={handleClick}>
              <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[#f1f1f1]'><FaRegUser className='!text-[15px] !text-[rgba(0,0,0,0.7)]'/></Button>

              <div className="info flex flex-col">
                <h4 className='!font-[600] !text-[13px] !capitalize text-left '>Sajjad Ahmad</h4>
                <span className='!font-[400] !text-[12px] capitalize text-left'>sajjadahmad@gmail.com</span>
              </div>
            </Button>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&::before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <Link to="my-account" className='w-full block'>
              <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
                <FaRegUser className='text-[18px]'/><Link to="/my-account"   className='text-[14px]'> My Account</Link>
              </MenuItem>
              </Link>
              <Link>
              <MenuItem onClick={handleClose} className='fle gap-2'>
                <IoBagCheckOutline className='text-[18px]'/><Link to="/orders"   className='text-[14px]'> Orders</Link>
              </MenuItem>
              </Link>
              <Link>
              <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
                <IoMdHeartEmpty className='text-[18px]'/><Link to="/my-list" className='text-[14px]'> My List</Link>
              </MenuItem>
              </Link>
              <Link>
              <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
                <IoIosLogOut  className='text-[18px]'/><Link to="/logout"  className='text-[14px]'> Logout</Link>
              </MenuItem>
              </Link>
            </Menu>
          </>

            }
           
            <li>
            <Tooltip title="Cart">
            <IconButton aria-label="cart" onClick={()=>context.setOpenCartPanel(true)}>
              <StyledBadge badgeContent={4} color="secondary">
                <MdOutlineShoppingCart />
              </StyledBadge>
            </IconButton>
            </Tooltip>
            </li>

            <li>
            <Tooltip title="Wishlist">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="secondary">
                <FaRegHeart />
              </StyledBadge>
            </IconButton>
            </Tooltip>
            </li>

            <li>
            <Tooltip title="Compare">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="secondary">
                <IoGitCompareOutline />
              </StyledBadge>
            </IconButton>
            </Tooltip>
            </li>
           
          </ul>
        </div>
      </div>
    </div>

    {/* Navigation */}
      <Navigation/>
   </header>
  )
}

export default Header
