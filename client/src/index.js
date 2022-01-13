import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import cooper from "./images/cooper.jpg";

ReactDOM.render(
  <React.StrictMode>
    <center class="p-3 mb-2 bg-primary text-white">Mr.Cooper Player</center>
    <div><img src={cooper} alt="cooper player" width="400" height="250"></img></div>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)