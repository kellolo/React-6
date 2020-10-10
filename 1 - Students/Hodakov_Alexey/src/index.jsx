import React from "react";
import ReactDom from "react-dom";
import "./layout/styles/style.css";

import Header from "./components/header/Header.jsx";
import Main from "./components/main/main.jsx";
import Footer from "./components/footer/Footer.jsx";

const app = document.querySelector("#app");

ReactDom.render(
  <div className="container">
    <Header />
    <Main />
    <Footer />
  </div>,
  app
);
