import React, { useContext } from "react";
import { MyStore } from "../Context/MyContex";
import CartItem from "../components/CartItem";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router";

const CartScreen = () => {
    const { cartItems, setScreen, totalPrice, totalItems } = useContext(MyStore);

    const navigate = useNavigate();

    // Empty Cart
    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
                <h1 className="text-4xl font-bold text-gray-700">
                    Your Cart is Empty 🛒
                </h1>

                <p className="text-gray-500 mt-3">
                    Looks like you haven't added anything yet.
                </p>

                <button
                    onClick={() => navigate("/shop")}
                    className="mt-8 bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg"
                >
                    Continue Shopping
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-5 py-10">
                {/* Left Side */}
                <div className="lg:col-span-2 space-y-5">
                    <h1 className="text-3xl font-bold">Shopping Cart</h1>

                    {cartItems.map((item) => (
                        <CartItem key={item.id} product={item} />
                    ))}
                </div>

                {/* Right Side */}
                <div className="bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-28">
                    <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                    <div className="flex justify-between mb-4">
                        <span>Total Items</span>
                        <span>{totalItems}</span>
                    </div>

                    <div className="flex justify-between mb-4">
                        <span>Subtotal</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between mb-4">
                        <span>Shipping</span>
                        <span className="text-green-600">Free</span>
                    </div>

                    <hr className="my-5" />

                    <div className="flex justify-between text-xl font-bold">
                        <span>Total</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>

                    <button className="w-full mt-8 bg-sky-600 cursor-pointer hover:bg-sky-700 text-white py-3 rounded-xl font-semibold transition">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartScreen;
