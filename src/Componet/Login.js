import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mobileproduct from "./Mobileproduct";
import Navbar from "./Navbar";
import Product from "./Product";

export default function Login() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/product" element={<Product/>} />
          <Route path="/mobileproduct" element={<Mobileproduct/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
