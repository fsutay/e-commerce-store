import React, { useState } from "react";
import Colors from "./colors/colors";
import Categories from "./categories/categories";
import Prices from "./price/prices";
import Sort from "./sort/sort";
const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className=" py-4 px-6 border-b-2 md:flex md:w-56 md:pl-5  md:gap-8 md:flex-col  md:h-screen md:border-r-2">
      <div className="hidden md:block">
        <Colors />
        <Categories />
        <Prices />
        <Sort />
      </div>
      <div className="flex gap-10 md:hidden">
        <span onClick={openModal}>Filters</span>
        <Sort />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center md:hidden">
          <div className="relative bg-white p-8 rounded-lg w-96">
            <button className="absolute top-0 right-0 p-2" onClick={closeModal}>
              X
            </button>
            <h2 className="text-xl font-semibold mb-4">Modal Başlığı</h2>
            <Colors />
            <Categories />
            <Prices />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
