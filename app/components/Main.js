import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";

const Main = props => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Main;