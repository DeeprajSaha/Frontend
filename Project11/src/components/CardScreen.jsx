import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import { MyStore } from "../context/MyContext";

const CartScreen = () => {
    let { cartItems } = useContext(MyStore);

    return (
        <div className="h-screen text-6xl gap-5 flex flex-col">
            {cartItems.map((elem) => {
                return <CartItem key={elem.id} product={elem} />;
            })}
        </div>
    );
};

export default CartScreen;