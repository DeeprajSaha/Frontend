import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import NavBar from "../components/NavBar";
import { MyStore } from "../Context/MyContex";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const Shop = () => {
    let {
        isCartOpen,
        selectedCategory,
        setSelectedCategory,
        productsData,
        cartItems,
        search,
        setSearch,uniqueCategories
    } = useContext(MyStore);

    const filteredProducts = productsData.filter((product) => {
        const matchCategory =
            selectedCategory === "all" || product.category === selectedCategory;

        const matchSearch = product.title
            .toLowerCase()
            .includes(search.toLowerCase());

        return matchCategory && matchSearch;
    });

    return (
        <div className="min-h-screen bg-slate-100">

            <div className="max-w-7xl mx-auto px-5 py-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900">
                            Explore Products
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Browse through our premium collection.
                        </p>
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-96">
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                        <input
                            type="text"
                            placeholder="Search products..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap gap-3 mb-8">
                    <button
                        onClick={() => setSelectedCategory("all")}
                        className={`px-4 py-2 rounded-lg ${
                            selectedCategory === "all"
                                ? "bg-sky-600 text-white"
                                : "bg-white"
                        }`}
                    >
                        All
                    </button>

                    {uniqueCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-lg ${
                                selectedCategory === category
                                    ? "bg-sky-600 text-white"
                                    : "bg-white"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                {/* Product Count */}
                <p className="text-gray-600 mb-6">
                    Showing
                    <span className="font-bold text-sky-600">
                        {" "}
                        {filteredProducts.length}{" "}
                    </span>
                    products
                </p>

                {/* Products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredProducts.map((elem) => {
                        const isInCart = cartItems.find(
                            (item) => item.id === elem.id,
                        );

                        return (
                            <ProductCard
                                key={elem.id}
                                product={elem}
                                isInCart={isInCart}
                            />
                        );
                    })}
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="bg-white rounded-2xl shadow-md py-20 mt-10 text-center">
                        <h2 className="text-3xl font-bold">
                            No Products Found
                        </h2>

                        <p className="text-gray-500 mt-3">
                            Try searching with a different keyword.
                        </p>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default Shop;
