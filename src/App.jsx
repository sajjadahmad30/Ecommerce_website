import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/HomeSlider'

const App = () => {
  return (
    <div>
        <BrowserRouter>
           <Header/>
            <Routes>
                <Route path='/' exact={true} element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
