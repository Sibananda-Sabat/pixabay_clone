import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PixapayState from "./context/PixapayState.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PixapayState>
      <App />
    </PixapayState>
  </StrictMode>
);
