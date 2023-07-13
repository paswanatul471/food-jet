import React from "react";
import { TbChefHat } from "react-icons/tb";
import { AiOutlineSearch, AiOutlineWoman } from "react-icons/ai";

function Header() {
  return (
    <>
      <nav className="flex bg-[#295846] text-white px-5 py-5">
        <div className="flex">
          <div className="flex justify-start">
            <TbChefHat />
          </div>
          <div className="flex text-center mx-60">
            <ul className="flex justify-around space-x-4">
              <li>Recips</li>
              <li>Shopping List</li>
              <li>Article</li>
              <li>Manage</li>
            </ul>
          </div>
          <div className="flex ml-30 justify-center">
            <input type="text" placeholder="search..." />
            <div className="flex space-x-3 mx-2">
              <AiOutlineSearch />
              <AiOutlineWoman />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
