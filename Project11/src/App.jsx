import React, { useContext, useEffect, useState } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { MyStore } from "./Context/MyContex";
import axios from "axios";
import CartScreen from "./pages/CartScreen";
import About from "./pages/About";
import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import MainLayout from "./pages/MainLayout";

const App = () => {
    let { setProductsData } = useContext(MyStore);

    const getProductsData = async () => {
        try {
            let res = await axios.get("https://fakestoreapi.com/products");

            setProductsData(res.data);
        } catch (error) {
            console.log("Error in api ", error);
        }
    };

    useEffect(() => {
        getProductsData();
    }, []);

    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route element={<MainLayout />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/cart" element={<CartScreen />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
