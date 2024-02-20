import React from "react";
import Sidebar from "./sidebar/sidebar";
import Products from "./products/products";

const Main: React.FC = () => {
  return (
    <div className="flex gap-2 flex-col md:flex-row ">
      <div>
        <Sidebar />
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
};

export default Main;
