import React from 'react'
import { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import MainContent from './MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <MainContent/>
      <Footer/>
    </>
  )
}

export default App
