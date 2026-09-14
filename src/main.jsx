import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import PremiumCursor from "./components/PremiumCursor.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import BackToTop from "./components/BackToTop.jsx";
import CommandPalette from "./components/CommandPalette.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <CartProvider>
          <LoadingScreen />
          <PremiumCursor />
          <ScrollProgress />
          <App />
          <BackToTop />
          <CommandPalette />
          <ToastContainer
            position="top-right"
            autoClose={2200}
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
            theme="colored"
            toastClassName="!rounded-2xl !font-sans !shadow-xl"
          />
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);