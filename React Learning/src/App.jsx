import React from 'react'
import { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import MainContent from './MainContent'
import Header from './Header'
import MainContent from './MainContent'
import MyComponent from './MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Navbar/>
      <MyComponent/>
      <MainContent/>
      <Footer/>
    </>
  )
}

export default App
