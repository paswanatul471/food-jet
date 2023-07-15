import React from 'react'
import Header from './Components/app/Header'
import Home from './Components/app/Home'
import Dishes from './Components/app/Dishes'
import Recipes from './Components/app/Recipes'
import Footer from './Components/app/Footer'

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Dishes/>
      <Recipes/>
      <Footer/>
    </div>
  )
}

export default App