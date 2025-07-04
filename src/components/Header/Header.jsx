import { Link } from 'react-router-dom'
import logo from "../../assets/logos/logo.png"
import Serach from '../Search'

const Header = () => {
  return (
   <header>
    <div className="top-strip py-2">
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


    <div className="header py-2">
      <div className="container flex items-center justify-between">
        <div className="col1 w-[25%]">
          <Link to="/" className='logo'>
            <img src={logo} alt="Logo" className='h-24'/>
          </Link>
        </div>

        <div className="col2 w-[45%]">
          <Serach/>
        </div>

        <div className="col3 w-[30%]"></div>
      </div>
    </div>
   </header>
  )
}

export default Header
