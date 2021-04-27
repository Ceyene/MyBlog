import React from "react";
import Header from "./header";

const Container = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main className="main">{children}</main>
    </div>
  );
};

export default Container;
