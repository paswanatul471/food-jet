import React from 'react'
import Header from './Components/app/Header'
import Home from './Components/app/Home'
import Dishes from './Components/app/Dishes'
import Recipes from './Components/app/Recipes'
import Footer from './Components/app/Footer'
import Review from './Components/app/Review.Jsx'

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Dishes/>
      <Recipes/>
      <Footer/>
      <Review/>
    </div>
  )
}

export default App