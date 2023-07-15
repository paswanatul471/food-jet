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
      <div className="px-20">
        <div className="my-12">
          <div className="flex justify-between">
          <p className="order-first text-4xl font-semibold">Popular Recipes Of The Week</p>
          <span className="text-green-800 font-semibold text-2xl">
            <a href="#">see more</a>
          </span>
          </div>
          
          <p className="my-3 text-[#888888] text-2xl">Our most popular recipes of this week</p>
        </div>

        <div className="">
          <div className="flex flex-row sm:flex-row space-x-5">
            <div className="">
              <img
                src={img1}
                className="h-[18rem] rounded-xl   hover:-translate-y-1 hover:scale-110  duration-300 hover:rounded-none"
                alt="Please wait"
              />
              <h1 className="text-3xl font-bold">Fried Beans</h1>
              <span className="text-xl">By Garry Don</span>
            </div>
            <div className="">
              <img
                src={img2}
                className="h-[18rem] rounded-xl hover:h-[18.3rem] hover:rounded-none"
                alt="Please wait"
              />
              <h1 className="text-3xl font-bold">Cheesy Chips</h1>
              <span className="text-xl">By Charie Laos</span>
            </div>
            <div className="">
              <img
                src={img3}
                className="h-[18rem] rounded-xl hover:h-[19rem] hover:rounded-none"
                alt="Please wait"
              />
              <h1 className="text-3xl font-bold">Creamy Pancake</h1>
              <span className="text-xl">By Luise De</span>
            </div>
          </div>
          <div className="my-10">
            <div className="grid grid-cols-3 space-x-5 ">
              <div className="">
                <img
                  src={img4}
                  className="h-[18rem] rounded-xl hover:h-[19rem] hover:rounded-none"
                  alt="Please wait"
                />
                <h1 className="text-3xl font-bold">Coated Onion</h1>
                <span className="text-xl">By AJ </span>
              </div>
              <div className="">
                <img
                  src={img5}
                  className="h-[18rem] rounded-xl hover:h-[19rem] hover:rounded-none"
                  alt="Please wait"
                />
                <h1 className="text-3xl font-bold">Vegan Soup</h1>
                <span className="text-xl">By Jennifer Lay</span>
              </div>
              <div className="">
                <img
                  src={img6}
                  className="h-[18rem] rounded-xl hover:h-[19rem] hover:rounded-none"
                  alt="Please wait"
                />
                <h1 className="text-3xl font-bold">Juicy Noodles</h1>
                <span className="text-xl">By Smith Jhon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dishes;
