import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App"
import "./cd.css"
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/app/store";


ReactDOM.createRoot(document.getElementById("root")).render(
  
  <>
    <BrowserRouter>
      <Provider store={store}>
        <NavBar />
       
        <App />
      </Provider>
    </BrowserRouter>
  </>
)