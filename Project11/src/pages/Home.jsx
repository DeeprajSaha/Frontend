import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import StatCard from "../components/StatCard";
import ProductCard from "../components/ProductCard";
import { MyStore } from "../Context/MyContex";
import CategorySection from "../components/CategorySection";
import Footer from "../components/Footer";

const Home = () => {
    let { isCartOpen, productsData,cartItems } = useContext(MyStore);
    return (
        <div className="min-h-screen bg-slate-100 flex flex-col gap-10">
            <Hero />
            <StatCard />
            <CategorySection/>
            <Footer/>
        </div>
    );
};

export default Home;
