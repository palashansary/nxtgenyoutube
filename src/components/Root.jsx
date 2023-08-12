import Header from "./Header";
import { Outlet } from "react-router-dom";

import React from "react";

const Root = () => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
