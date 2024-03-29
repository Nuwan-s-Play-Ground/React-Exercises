import React from 'react'
import { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import MainContent from './MainContent'
import Header from './Header'
import MyComponent from './MyComponent'
import Photos from './Photos'
import Joke from './Joke'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Navbar/>
      <MyComponent/>
      <MainContent/>
      <Footer/>
      <Joke
      question="What is your name?"
      answer="My Name is Nuwan"/>
      <Photos/>
    </>
  )
}

export default App
