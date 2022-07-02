import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Fspec from "Fspec";

// Soft UI Context Provider
import { SoftUIControllerProvider } from "context";

ReactDOM.render(
  <BrowserRouter>
    <SoftUIControllerProvider>
      <Fspec />
    </SoftUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
