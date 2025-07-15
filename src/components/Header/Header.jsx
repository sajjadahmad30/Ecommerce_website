import { Link } from 'react-router-dom'
import logo from "../../assets/logos/logo.png"
import Serach from '../Search'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';
import { useContext } from 'react';
import { MyContext } from '../../App';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));


const Header = () => {

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

        <div className="col2 w-[45%]">
          <Serach/>
        </div>

        <div className="col3 w-[30%] flex items-center justify-center">
          <ul className='flex items-center justify-end gap-6 w-full'>
            <li className=''> 
              <Link to="/login" className='link transition font-[500] text-[15px]'>Login</Link> /  <Link to="/register" className='link transition font-[500] text-[15px]'>Register</Link>
            </li>
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
