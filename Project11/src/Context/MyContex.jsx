import { createContext, useEffect, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem("users")) || [],
    );

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("loggedInUser")),
    );

    const [isCartOpen, setIsCartOpen] = useState(false);

    const [productsData, setProductsData] = useState([]);

    const uniqueCategories = [
        ...new Set(productsData.map((product) => product.category)),
    ];

    const [selectedCategory, setSelectedCategory] = useState("all");

    const [cartItems, setCartItems] = useState(() => {
        return JSON.parse(localStorage.getItem("savePro")) || [];
    });

    useEffect(() => {
        localStorage.setItem("savePro", JSON.stringify(cartItems));
    }, [cartItems]);

    const incrementQuantity = (id) => {
        setCartItems((prev) => {
            return prev.map((val) => {
                return val.id === id
                    ? { ...val, quantity: val.quantity + 1 }
                    : val;
            });
        });
    };

    const decrementQuantity = (id) => {
        setCartItems((prev) => {
            return prev.map((val) => {
                return val.id === id
                    ? {
                          ...val,
                          quantity:
                              val.quantity > 1
                                  ? val.quantity - 1
                                  : val.quantity,
                      }
                    : val;
            });
        });
    };

    const deleteProducts = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const totalPrice = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    const totalItems = cartItems.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    const [search, setSearch] = useState("");

    return (
        <MyStore.Provider
            value={{
                users,
                setUsers,
                isCartOpen,
                setIsCartOpen,
                cartItems,
                setCartItems,
                productsData,
                setProductsData,
                uniqueCategories,
                incrementQuantity,
                decrementQuantity,
                selectedCategory,
                setSelectedCategory,
                totalPrice,
                totalItems,
                search,
                setSearch,
                deleteProducts,
            }}
        >
            {children}
        </MyStore.Provider>
    );
};
