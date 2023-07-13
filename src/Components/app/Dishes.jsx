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
      <div>
        <div className="flex">
          <p className="order-first">Popular Recipes Of The Week</p>
          <span className="self-end">
            <a href="#">see more</a>
          </span>
        </div>

        <div className="">
          <div className="grid grid-cols-3 space-x-5">
            <div className="">
              <img
                src={img1}
                className="h-[18rem] rounded-xl hover:h-[19rem] hover:rounded-none"
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
          <div className="mx-10">
            <div className="grid grid-cols-3 space-x-5 py-10">
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
