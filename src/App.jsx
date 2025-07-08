import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/HomeSlider'
import ProductListing from './Pages/ProductListing'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
        <BrowserRouter>
           <Header/>
            <Routes>
                <Route path='/' exact={true} element={<Home/>}/>
                <Route path='/productListing' exact={true} element={<ProductListing/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App
