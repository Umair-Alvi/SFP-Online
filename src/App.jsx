import { useState } from 'react'
import Header from './component/header/Header'
import Home from './pages/Home'

import './App.css'
import Heading from './component/Heading/Heading'
import Card from './component/card/Card'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
         {/* <Header /> */}
        <main>
        <Outlet  />
        </main>
      {/* <Header />
      <Home /> */}
     
    </>
  )
}

export default App
