import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext.jsx";
import { ThemeProvider } from "./context/theme.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </ThemeProvider>
  </BrowserRouter>
);
