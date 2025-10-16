import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ correct import
import App from "./App.jsx";
import { StoreProvider } from "./store/StoreContext"; // ✅ import StoreProvider
const CartProvider = StoreProvider; // ✅ alias for clarity
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
