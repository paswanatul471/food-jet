import React from "react";
import img1 from "../assets/beans.jpg";
import img2 from "../assets/chips.jpg";
import img3 from "../assets/creamy.jpg";
import img4 from "../assets/momos.jpg";
import img5 from "../assets/salad.jpg";
import img6 from "../assets/noodles.jpg";

function Dishes() {
  return (
    <>
      <div className="px-20 max-sm:px-2 max-md:px-2 my-10">
        <div className="my-12">
          <div className="flex justify-between ">
            <p className="order-first text-4xl font-semibold">
              Popular Recipes Of The Week
            </p>
            <span className="text-green-800 font-semibold text-2xl">
              <a href="#">see more</a>
            </span>
          </div>

          <p className="my-3 text-[#888888] text-2xl">
            Our most popular recipes of this week
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans max-sm:text-center max-md:text-center">
          <div className="overflow-hidden">
            <img src={img1} alt="Please wait" className="w-[90%] transition ease-in-out delay-150 max-sm:w-full max-md:w-full h-80 rounded-xl hover:scale-110 hover:-translate-y-1 " />
            <h1 className="text-2xl font-bold mt-2">Fried Beans</h1>
            <span className="text-gray-600">By Garry Don</span>
          </div>
          <div  className="overflow-hidden">
            <img src={img2} alt="Please wait" className="w-[90%] transition ease-in-out delay-150 max-sm:w-full max-md:w-full h-80 rounded-xl hover:scale-110 hover:-translate-y-1 " />
            <h1 className="text-xl font-bold mt-2">Cheesy Chips</h1>
            <span className="text-gray-600">By Charie Laos</span>
          </div>
          <div  className="overflow-hidden">
            <img src={img3} alt="Please wait" className="w-[90%] transition ease-in-out delay-150 max-sm:w-full max-md:w-full h-80 rounded-xl hover:scale-110 hover:-translate-y-1 " />
            <h1 className="text-xl font-bold mt-2">Creamy Pancake</h1>
            <span className="text-gray-600">By Luise De</span>
          </div>
          <div  className="overflow-hidden">
            <img src={img4} alt="Please wait" className="w-[90%] transition ease-in-out delay-150 max-sm:w-full max-md:w-full h-80 rounded-xl hover:scale-110 hover:-translate-y-1 " />
            <h1 className="text-xl font-bold mt-2">Coated Onion</h1>
            <span className="text-gray-600">By AJ</span>
          </div>
          <div  className="overflow-hidden">
            <img src={img5} alt="Please wait" className="w-[90%] transition ease-in-out delay-150 max-sm:w-full max-md:w-full h-80 rounded-xl hover:scale-110 hover:-translate-y-1 " />
            <h1 className="text-xl font-bold mt-2">Vegan Soup</h1>
            <span className="text-gray-600">By Jennifer Lay</span>
          </div>
          <div  className="overflow-hidden">
            <img src={img6} alt="Please wait" className="w-[90%] transition ease-in-out delay-150 max-sm:w-full max-md:w-full h-80 rounded-xl hover:scale-110 hover:-translate-y-1 " />
            <h1 className="text-xl font-bold mt-2">Juicy Noodles</h1>
            <span className="text-gray-600">By Smith Jhon</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dishes;
