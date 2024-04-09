import React from 'react'
import { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import MainContent from './MainContent'
import Header from './Header'
import MyComponent from './MyComponent'
import Photos from './Photos'
import Joke from './Joke'
import Map from './Map'
import Products from './Products'
import ClassComponents from './ClassComponents'
import EventHandling from './EventHandling'
import ChangingState from './ChangingState'
import LifeCycle from './LifeCycle'
import ConditionalRenderingPractice from './ConditionalRenderingPractice'
import FetchData from './FetchData'
import PracticeForm from './PracticeForm'
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
      <Map/>
      <Photos/>
      <Products/>
      <ClassComponents/>
      <EventHandling/>
      <ChangingState/>
      <LifeCycle/>
      <ConditionalRenderingPractice/>
      <FetchData/>
      <PracticeForm/>
    </>
  )
}

export default App
