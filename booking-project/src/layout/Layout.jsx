import React from "react";
import NavigationBar from "../components/navigation/NavigationBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavigationBar/>
      <Outlet/>
    </div>
  );
};

export default Layout;
