import React from "react";
import { TbChefHat } from "react-icons/tb";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiLogoFacebook} from "react-icons/bi";
import { MdFoodBank,MdArticle,MdOutlineManageAccounts} from "react-icons/md";
import {AiOutlineInstagram,AiOutlineTwitter,AiFillYoutube,AiOutlineHome,AiOutlineShopping} from "react-icons/ai"

function Footer() {
  return (
    <>
      <div className="bg-[#295846]">
        <div className="flex max-sm:flex-col px-20 font-sans max-sm:px-2 max-md:px-2">
          <div className="my-14">
            <div className="flex justify-start text-white text-2xl items-center my-10 max-sm:px-5 max-sm:my-5">
              <TbChefHat />
              <h2 className="mx-2 ">FooDJeT</h2>
            </div>
            <div className="w-[40%] max-sm:w-[100%] max-md:w-[100%] max-sm:px-5 max-sm:text-start max-sm:items-center ">
              <p className="text-white">
                Discover 1000+ recipes at your home with the best recipe
                possible. Help you to find the easiest way to cook.
              </p>
            </div>
          </div>
          <div className="my-14 max-sm:px-2">
            <div>
              <div className="flex justify-start text-white text-2xl items-center max-sm-flex my-10 max-sm:my-2   max-sm:px-4">
                <HiOutlineMailOpen />
                <h2 className="mx-2">Sign up for our newsletter</h2>
              </div>
              <div className="max-sm:px-5 max-sm:my-5">
                <div className="mb-5 flex max-sm:flex max-md:flex">
                  <input
                    className="py-3 w-80 rounded-md max-sm:w-44"
                    type="email"
                    placeholder="Your emai address"
                  />
                  <button className="bg-green-700 text-white hover:bg-white hover:text-green-700 py-3 px-8 ml-28 rounded-md  font-semibold font-sans max-sm:px-5 max-sm:ml-5">
                    Submit
                  </button>
                </div>

                <div className="grid grid-cols-3 border-t-[3px] border-[#5f8274]">
                  <div className="my-10 mr-10">
                    <h2 className="text-2xl text-white my-5">Menu</h2>
                    <div>
                      <ul className="text-[#b5b1b1] space-y-2">
                        <li className="hover:text-green-400"><a href="/" className="flex items-center text-center "><AiOutlineHome className="mr-[2px] text-[1.5rem]"/> Home</a></li>
                        <li className="hover:text-green-400"><a href="/" className="flex items-center text-center "><MdFoodBank className="mr-[2px] text-[1.5rem]"/>Recipes</a></li>
                        <li className="hover:text-green-400"><a href="/" className="flex items-center text-center "><AiOutlineShopping className="mr-[2px] text-[1.5rem]"/>Shopping List</a></li>
                        <li className="hover:text-green-400"><a href="/" className="flex items-center text-center "><MdArticle className="mr-[2px] text-[1.5rem]"/>Article</a></li>
                        <li className="hover:text-green-400"><a href="/" className="flex items-center text-center "><MdOutlineManageAccounts className="mr-[2px] text-[1.5rem]"/>Manage</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="m-10">
                    <h2 className="text-2xl text-white my-5">Help</h2>
                    <div>
                      <ul className="text-[#b5b1b1] space-y-2">
                        <li className="hover:text-green-400"><a href="/" >Privacy and Policy</a></li>
                        <li className="hover:text-green-400"><a href="/" >Terms of Use</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="m-10">
                    <h2 className="text-2xl text-white my-5">Social</h2>
                    <div>
                      <ul className="text-[#b5b1b1] space-y-2">
                        <li className="hover:text-green-400 "><a href="/" className="flex items-center text-center "><AiOutlineInstagram className="mr-[2px] text-[1.5rem]"/>Instagram</a></li>
                        <li className="hover:text-green-400"><a href="/" className="flex items-center text-center "><AiOutlineTwitter className="mr-[2px] text-[1.5rem]"/>Twitter</a></li>
                        <li className="hover:text-green-400"><a href="/"className="flex items-center text-center "><BiLogoFacebook className="mr-[2px] text-[1.5rem]"/>Facebook</a></li>
                        <li className="hover:text-green-400"><a href="/"className="flex items-center text-center "><AiFillYoutube className="mr-[2px] text-[1.5rem]"/>YouTube</a></li>
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
