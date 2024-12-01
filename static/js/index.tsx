import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import "./assets/effects/glitch.css";
import "./assets/effects/glitchbutton.css";
import "./assets/effects/sakura/sakura.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
