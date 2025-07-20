import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/HomeSlider'
import ProductListing from './Pages/ProductListing'
import Footer from './components/Footer'
import ProductDetails from './Pages/ProductDetails'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ProductZoom from './components/ProductZoom'
import { MdClose } from 'react-icons/md'
import ProductDetailsComponent from './components/ProductDetails'
import Login from './Pages/Login'
import Register from './Pages/Register'
import CartPage from './Pages/Cart'
import Verify from './Pages/Verify'

import toast, { Toaster } from 'react-hot-toast';
import ForgotPassword from './Pages/ForgotPassword'
import Checkout from './Pages/Checkout'
import MyAccount from './Pages/MyAccount'
import MyListPage from './Pages/MyListPage'


const MyContext = createContext();

const App = () => {
   const [openProductDetailModel, setOpenProductDetailModel] = useState(false);
   const [maxWidth, setMaxWidth] = useState('lg');
   const [fullWidth, setFullWidth] = useState(true);
   const [isLogin, setIsLogin] = useState(true);

   const [openCartPanel, setOpenCartPanel] = useState(false);

  const handleCloseProductDetailModel = () => {
    setOpenProductDetailModel(false);
  };


  const toggleCartPanel = (newOpen) =>()=>{
      setOpenCartPanel(newOpen);
  }

  const openAlertBox = (status,msg)=>{
    if(status==="success"){
      toast.success(msg)
    }else{
      toast.error(msg)
    }
  }

  const values= {
    setOpenProductDetailModel,
    setOpenCartPanel,
    toggleCartPanel,
    openCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin
  }

  return (
    <>
        <BrowserRouter>
          <MyContext.Provider value={values}>
           <Header/>
            <Routes>
                <Route path='/' exact={true} element={<Home/>}/>
                <Route path='/productListing' exact={true} element={<ProductListing/>}/>
                <Route path='/productDetails/:id' exact={true} element={<ProductDetails/>}/>
                <Route path='/login' exact={true} element={<Login/>}/>
                <Route path='/register' exact={true} element={<Register/>}/>
                <Route path='/cart' exact={true} element={<CartPage/>}/>
                <Route path='/verify' exact={true} element={<Verify/>}/>
                <Route path='/forgot-password' exact={true} element={<ForgotPassword/>}/>
                <Route path='/checkout' exact={true} element={<Checkout/>}/>
                <Route path='/my-account' exact={true} element={<MyAccount/>}/>
                <Route path='/my-list' exact={true} element={<MyListPage/>}/>
            </Routes>
            <Footer/>
          </MyContext.Provider>
        </BrowserRouter>


        <Toaster/>

         <Dialog
        open={openProductDetailModel}
        fullWidth={fullWidth}
        maxWidth= {maxWidth}
        onClose={handleCloseProductDetailModel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='productDetailModel'
      >
      
        <DialogContent>
          <div className="flex items-center w-full productDetailModelContainer relative">
            <Button className='!w-[40px] !h-[40px] !text-[#000] !rounded-full !min-w-[40px] !absolute !bg-[#f1f1f1] !top-[15px] !right-[15px]' onClick={handleCloseProductDetailModel}><MdClose className='text-[20px]'/></Button>
            <div className="col1 w-[40%] !px-3">
              <ProductZoom/>
            </div>

            <div className="col2 w-[60%] !px-8 !py-8 !pr-16 productContent ">
              <ProductDetailsComponent/>
            </div>
          </div>
        </DialogContent>
      </Dialog>


        
    </>
  )
}

export default App
export {MyContext}
