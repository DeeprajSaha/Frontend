import React, { useContext } from "react";
import { FaLaptop, FaShirt } from "react-icons/fa6";
import { FaGem } from "react-icons/fa";
import { MyStore } from "../Context/MyContex";
import { useNavigate } from "react-router";

const CategorySection = () => {
    const {
        productsData,
        uniqueCategories,
        selectedCategory,
        setSelectedCategory,
    } = useContext(MyStore);

    const categoryIcons = {
        electronics: <FaLaptop />,
        jewelery: <FaGem />,
        "men's clothing": <FaShirt />,
        "women's clothing": <FaShirt />,
    };

    const categoryColors = {
        electronics: "bg-sky-100 text-sky-500",
        jewelery: "bg-yellow-100 text-yellow-500",
        "men's clothing": "bg-blue-100 text-blue-500",
        "women's clothing": "bg-pink-100 text-pink-500",
    };

const navigate = useNavigate();

    return (
        <section className="max-w-7xl mx-auto px-5 mt-16">
            {/* Heading */}
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-black">
                    Shop by Category
                </h2>

                <button
                    onClick={() => navigate("/shop")}
                    className="text-sky-400 cursor-pointer hover:text-sky-300 font-semibold"
                >
                    View All →
                </button>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {uniqueCategories.map((category) => (
                    <div
                        key={category}
                        onClick={() => {
                            (setSelectedCategory(category), navigate("/shop"));
                        }}
                        className="bg-white rounded-3xl p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300 cursor-pointer"
                    >
                        {/* Icon */}
                        <div
                            className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto ${
                                categoryColors[category]?.split(" ")[0]
                            }`}
                        >
                            <span
                                className={`text-3xl ${
                                    categoryColors[category]?.split(" ")[1]
                                }`}
                            >
                                {categoryIcons[category]}
                            </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-center mt-6 capitalize">
                            {category}
                        </h3>

                        {/* Item Count */}
                        <p className="text-center text-gray-500 mt-2">
                            {
                                productsData.filter(
                                    (product) => product.category === category,
                                ).length
                            }{" "}
                            Items
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategorySection;
