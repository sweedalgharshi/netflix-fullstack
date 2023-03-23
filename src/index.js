import { createRoot } from "react-dom/client";
import React from "react";

import App from "./App";

const el = document.getElementById("root");

const root = createRoot(el);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
