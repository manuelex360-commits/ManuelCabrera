import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./style/index.css";

import App from "./App.tsx";

import { BrowserRouter } from "react-router-dom";

import { MovieProvider } from "./components/MovieContex.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MovieProvider>
        <App />
      </MovieProvider>
    </BrowserRouter>
  </StrictMode>
);