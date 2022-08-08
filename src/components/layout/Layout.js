//import React, { Component } from "react";
import c from "./layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={c.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
