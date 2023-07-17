import React from "react";
import food from "../assets/hero-image.jpg";

function Home() {
  return (
    <>
      <div className="flex flex-col sm:flex-row bg-[#295846] px-20 py-10 max-sm:px-3 max-md:px-3">
        <div className="order-2 sm:order-1 sm:w-1/2 p-4">
          <h1 className="text-white text-7xl font-bold max-sm:text-xl max-md-2xl max-lg-text-3xl max-xl:text-7xl max-md:text-center mb-4 font-">
            The Easiest Way To Make Your Meal
          </h1>
          <p className="text-white my-8 max-md:text-center mb-4 text-2xl max-sm:text-xl">
            Discover 1000+ recipes at your home with the best recipe possible.{" "}
            {/* <br /> */}
            Help you find the easiest way to cook.
          </p>
          <button
            type="button"
            className="py-3 px-8 mt-10 bg-green-700 text-white hover:bg-white hover:text-green-700 rounded-lg"
          >
            Explore Recipes
          </button>
        </div>
        <div className="order-1 sm:order-2 sm:w-1/2">
          <img src={food} alt="Please Wait" className="w-full" />
        </div>
      </div>
    </>
  );
}

export default Home;
