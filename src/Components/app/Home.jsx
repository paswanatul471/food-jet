import React from 'react'
import food from "../assets/hero-image.jpg"

function Home() {
  return (
    <>
        <div className="grid grid-cols-2 bg-[#295846] py-10 px-20">
            <div className='my-16'>
                <h1 className="text-white text-7xl font-bold">
                The Easiest Way To Make Your Meal
                </h1>
                <p className='text-white my-8'>
                Discover 1000+ recipes at your home with the best recipe possible. <br />Help you to find the easiest way to cook.
                </p>
                <button type='button' className='py-2 px-5 bg-green-700 text-white hover:bg-white hover:text-green-700 rounded-lg'>Explore Recipes</button>
            </div>
            <div>
                <img src={food} alt="Please Wait" />
            </div>
        </div>
    </>
  )
}

export default Home