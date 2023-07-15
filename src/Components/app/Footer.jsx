import React from "react";
import { TbChefHat } from "react-icons/tb";
import { HiOutlineMailOpen } from "react-icons/hi";

function Footer() {
  return (
    <>
      <div className="bg-[#295846]">
        <div className="grid grid-cols-2 px-20 font-sans">
          <div className="my-14">
            <div className="flex justify-start text-white text-2xl items-center my-10">
              <TbChefHat />
              <h2 className="mx-2">FooDJeT</h2>
            </div>
            <div className="w-[40%]">
              <p className="text-white">
                Discover 1000+ recipes at your home with the best recipe
                possible. Help you to find the easiest way to cook.
              </p>
            </div>
          </div>
          <div className="my-14">
            <div>
              <div className="flex justify-start text-white text-2xl items-center my-10">
                <HiOutlineMailOpen />
                <h2 className="mx-2">Sign up for our newsletter</h2>
              </div>
              <div>
                <div className="mb-5">
                  <input
                    className="py-3 w-80 rounded-md"
                    type="email"
                    placeholder="Your emai address"
                  />
                  <button className="bg-green-700 text-white hover:bg-white hover:text-green-700 py-3 px-8 ml-28 rounded-md  font-semibold font-sans ">
                    Submit
                  </button>
                </div>

                <div className="grid grid-cols-3 border-t-[3px] border-[#5f8274]">
                  <div className="my-10 mr-10">
                    <h2 className="text-2xl text-white my-5">Menu</h2>
                    <div>
                      <ul className="text-white">
                        <li>Home</li>
                        <li>Recipes</li>
                        <li>Shopping List</li>
                        <li>Article</li>
                        <li>Manage</li>
                      </ul>
                    </div>
                  </div>
                  <div className="m-10">
                    <h2 className="text-2xl text-white my-5">Help</h2>
                    <div>
                      <ul className="text-white">
                        <li>Privacy and Policy</li>
                        <li>Terms of Use</li>
                      </ul>
                    </div>
                  </div>
                  <div className="m-10">
                    <h2 className="text-2xl text-white my-5">Social</h2>
                    <div>
                      <ul className="text-white">
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Facebook</li>
                        <li>YouTube</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
