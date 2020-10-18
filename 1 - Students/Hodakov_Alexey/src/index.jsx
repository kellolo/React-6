import React from "react";
import ReactDom from "react-dom";
import "./layout/styles/style.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { StylesProvider } from "@material-ui/core/styles";

import Header from "./components/header/Header.jsx";
import Main from "./components/main/main.jsx";
import Footer from "./components/footer/Footer.jsx";

const app = document.querySelector("#app");

ReactDom.render(
  <StylesProvider>
    <div className="wrap">
      <Header />
      <Main />
      <Footer />
    </div>
  </StylesProvider>,
  app
);
