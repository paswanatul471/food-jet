import React from 'react'
import Home from './Components/app/Home'
import Dishes from './Components/app/Dishes'
import Recipes from './Components/app/Recipes'
import Footer from './Components/app/Footer'
import Pheader from './Components/app/Pheader'
// import Review from './Components/app/Review'



function App() {
  return (
    <div>
      <Pheader/>
      <Home/>
      <Dishes/>
      {/* <Review/> */}
      <Recipes/>
      <Footer/>
      
    </div>
  )
}

export default App