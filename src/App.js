import React from "react";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import "./Styles/SideBar.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import NewProduct from "./Pages/NewProduct";
import EditProduct from "./Pages/EditProduct";

const App = () => {
  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-2 SideBar">
          <SideBar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:ID" element={<ProductDetails />} />
            <Route path="/newproduct" element={<NewProduct />} />
            <Route path="/editproduct/:ID" element={<EditProduct />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
