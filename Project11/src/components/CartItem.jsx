import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { MyStore } from "../Context/MyContex";

const CartItem = ({ product }) => {
    let { incrementQuantity, decrementQuantity,deleteProducts } = useContext(MyStore);

    return (
        <div className="flex items-center gap-6 bg-white p-5 rounded-xl shadow-md">
            {/* Product Image */}
            <div className="w-28 h-28 bg-gray-100 rounded-lg flex items-center justify-center">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-20 h-20 object-contain"
                />
            </div>

            {/* Product Details */}
            <div className="flex-1">
                <h2 className="text-lg font-semibold line-clamp-2">
                    {product.title}
                </h2>

                <p className="text-gray-500 text-sm mt-1">{product.category}</p>

                <p className="text-2xl font-bold text-blue-600 mt-3">
                    ${product.price}
                </p>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-3">
                <button
                    onClick={() => decrementQuantity(product.id)}
                    className="w-9 h-9 rounded-lg bg-gray-200 cursor-pointer hover:bg-gray-300 text-xl"
                >
                    -
                </button>

                <span className="text-lg font-semibold">
                    {product.quantity}
                </span>

                <button
                    onClick={() => incrementQuantity(product.id)}
                    className="w-9 h-9 rounded-lg bg-gray-200 cursor-pointer hover:bg-gray-300 text-xl"
                >
                    +
                </button>
            </div>

            {/* Remove */}
            <button className="text-red-500 cursor-pointer hover:text-red-700 text-xl">
                <FaTrash onClick={() => deleteProducts(product.id)} />
            </button>
        </div>
    );
};

export default CartItem;
