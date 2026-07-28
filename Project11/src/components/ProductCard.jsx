import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { MyStore } from "../Context/MyContex";

const ProductCard = ({ product, isInCart }) => {
    let { setCartItems, incrementQuantity, decrementQuantity } =
        useContext(MyStore);

    const addToCart = () => {
        setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
        alert("Product added into cart....");
    };

    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
            {/* Image */}
            <div className="h-64 bg-gray-100 flex items-center justify-center p-5 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
            </div>

            {/* Content */}
            <div className="p-4">
                {/* Category */}
                <p className="text-xs text-blue-600 uppercase font-semibold mb-2">
                    {product.category}
                </p>

                {/* Title */}
                <h2 className="text-lg font-semibold line-clamp-2 h-14">
                    {product.title}
                </h2>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-3">
                    <div className="flex items-center text-yellow-400">
                        <FaStar />
                    </div>

                    <span className="text-sm font-medium">
                        {product.rating.rate}
                    </span>

                    <span className="text-sm text-gray-500">
                        ({product.rating.count} Reviews)
                    </span>
                </div>

                {/* Price */}
                <h3 className="text-2xl font-bold text-green-600 mt-3">
                    ${product.price}
                </h3>

                {/* Button */}
                {isInCart ? (
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => decrementQuantity(product.id)}
                            className="w-9 h-9 rounded-lg cursor-pointer bg-gray-200 hover:bg-gray-300 text-xl"
                        >
                            -
                        </button>

                        <span className="text-lg font-semibold">
                            {isInCart.quantity}
                        </span>

                        <button
                            onClick={() => incrementQuantity(product.id)}
                            className="w-9 h-9 rounded-lg cursor-pointer bg-gray-200 hover:bg-gray-300 text-xl"
                        >
                            +
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={addToCart}
                        className="w-full mt-4 cursor-pointer bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                    >
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
