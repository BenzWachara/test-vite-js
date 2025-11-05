import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "@pages/AboutPage.tsx";
import Navbar from "@components/Navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/test-vite-js">
      <Navbar />
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<>Contact Page</>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
