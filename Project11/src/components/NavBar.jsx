import React, { useContext } from "react";
import { MyStore } from "../Context/MyContex";

const NavBar = () => {
    let { user, setScreen } = useContext(MyStore);

    console.log(user);

    const handleLogout = () => {
        setScreen("login");
        localStorage.setItem("screen", "login");
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="bg-white shadow-md px-10 py-4 flex justify-between items-center">
                {/* Logo */}
                <div>
                    <h2 className="text-3xl font-bold text-sky-600">SkyMart</h2>
                </div>

                {/* Navigation Links */}
                <div className="flex items-center gap-8 text-gray-700 font-medium">
                    <a
                        href="#"
                        className="hover:text-sky-600 transition duration-300"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="hover:text-sky-600 transition duration-300"
                    >
                        Shop
                    </a>
                    <a
                        href="#"
                        className="hover:text-sky-600 transition duration-300"
                    >
                        About
                    </a>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    {/* User */}
                    <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                        <div className="w-9 h-9 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold">
                            {user[0].name?.charAt(0).toUpperCase()}
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Welcome</p>
                            <p className="font-semibold">{user[0].name}</p>
                        </div>
                    </div>

                    {/* Cart */}
                    <button className="bg-sky-600 cursor-pointer text-white px-5 py-2 rounded-lg hover:bg-sky-700 transition">
                        🛒 Cart
                    </button>

                    {/* Logout */}
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 cursor-pointer text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
