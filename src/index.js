// import index from "./js/index";
import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import store from "./js/store";
console.log(store)
const root = document.getElementById("root")

const DomElement = createRoot(root)
DomElement.render(
    <App {...store}/>
    // <App print="hello world"/>
)