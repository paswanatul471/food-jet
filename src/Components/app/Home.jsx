import React from 'react'
import food from "../assets/hero-image.jpg"

function Home() {
  return (
    <>
        <div className="grid grid-cols-2 bg-[#295846] py-10 px-20 justify-center items-center max-md-flex max-md:justify-center max-md:items-center">
            <div className='my-16 max-md:-mb-20 '>
                <h1 className="text-white text-7xl font-bold max-sm:text-xl max-md-2xl max-lg-text-3xl max-xl:text-7xl max-md:text-center">
                The Easiest Way To Make Your Meal
                </h1>
                <p className='text-white my-8 max-md:text-center'>
                Discover 1000+ recipes at your home with the best recipe possible. <br />Help you to find the easiest way to cook.
                </p>
                <button type='button' className='py-2 px-5 bg-green-700 text-white hover:bg-white hover:text-green-700 rounded-lg'>Explore Recipes</button>
            </div>
            <div className='mb-4 max-md:-mt-96'>
                <img className='max-md:w-48' src={food} alt="Please Wait" />
            </div>
        </div>
    </>
  )
}

export default Home