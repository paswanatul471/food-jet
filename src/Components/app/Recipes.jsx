import React from "react";

function Recipes() {
  return (
    <>
      <div className="flex items-center justify-center bg-[url('https://cdn.pixabay.com/photo/2017/09/22/19/48/tomato-2776824_1280.jpg')] h-[30rem] ">
        <div className="bg-white py-5 px-14 rounded-xl w-[60%]">
          <h2 className="font-sans text-3xl font-semibold my-5">
            50+ Quick and Easy Breakfast Recipes to Start Your Day Off Right.
          </h2>
          <p className="text-2xl text-[#888888] text-center py-1 ">
            Find the perfect food ideas to start your day with the quick and
            easiest way.
          </p>
          <div className="flex justify-center">
          <button className="bg-green-900 text-white hover:bg-white hover:text-green-950 hover:border border-green-900 py-2 px-10 my-3 rounded-lg text-xl ">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipes;
