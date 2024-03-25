import React from 'react'
import { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import MainContent from './MainContent'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Navbar/>
      <MainContent/>
      <Footer/>
    </>
  )
}

export default App
