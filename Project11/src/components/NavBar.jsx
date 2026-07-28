import React, { useContext, useState } from "react";
import { MyStore } from "../Context/MyContex";
import { FaShoppingCart, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router";

const NavBar = () => {
    const { users, setUsers, cartItems } = useContext(MyStore);

    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);

    const username = users?.[0]?.name || "Guest";

    const handleLogout = () => {
        localStorage.removeItem("loggedInUser");
        setUsers(null);
        navigate("/");
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md font-sans transition-all duration-300">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    
                    {/* Logo */}
                    <h1
                        onClick={() => navigate("/home")}
                        className="cursor-pointer text-3xl font-extrabold tracking-tight text-indigo-600 drop-shadow-sm transition hover:text-indigo-700"
                    >
                        SkyMart
                    </h1>

                    {/* Desktop Menu */}
                    <div className="hidden items-center gap-10 font-bold text-slate-600 lg:flex">
                        <button
                            onClick={() => navigate("/home")}
                            className="cursor-pointer transition-colors duration-200 hover:text-indigo-600"
                        >
                            Home
                        </button>

                        <button
                            onClick={() => navigate("/shop")}
                            className="cursor-pointer transition-colors duration-200 hover:text-indigo-600"
                        >
                            Shop
                        </button>

                        <button
                            onClick={() => navigate("/about")}
                            className="cursor-pointer transition-colors duration-200 hover:text-indigo-600"
                        >
                            About
                        </button>
                    </div>

                    {/* Desktop Right (User, Cart, Logout) */}
                    <div className="hidden items-center gap-4 lg:flex">
                        
                        {/* User Profile */}
                        <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 shadow-sm transition hover:bg-white hover:shadow-md">
                            <FaUserCircle className="text-3xl text-indigo-500" />
                            <div className="text-left">
                                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                    Welcome
                                </p>
                                <p className="text-sm font-bold text-slate-800">
                                    {username}
                                </p>
                            </div>
                        </div>

                        {/* Cart Button */}
                        <button
                            onClick={() => navigate("/cart")}
                            className="relative flex cursor-pointer items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-indigo-600/20 transition duration-300 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/30 active:scale-[0.98]"
                        >
                            <FaShoppingCart size={16} />
                            Cart
                            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
                                {cartItems?.length || 0}
                            </span>
                        </button>

                        {/* Logout Button */}
                        <button
                            onClick={handleLogout}
                            className="cursor-pointer rounded-xl bg-rose-50 px-5 py-2.5 text-sm font-bold text-rose-600 transition duration-300 hover:bg-rose-100 hover:text-rose-700 active:scale-[0.98]"
                        >
                            Logout
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="p-2 text-2xl text-slate-600 transition hover:text-indigo-600 lg:hidden focus:outline-none"
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {menuOpen && (
                    <div className="animate-in slide-in-from-top-4 fade-in space-y-4 border-t border-slate-100 bg-white/95 py-6 lg:hidden">
                        
                        <button 
                            onClick={() => { navigate("/home"); setMenuOpen(false); }}
                            className="block w-full rounded-lg px-4 py-2 text-left text-lg font-bold text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                        >
                            Home
                        </button>

                        <button 
                            onClick={() => { navigate("/shop"); setMenuOpen(false); }}
                            className="block w-full rounded-lg px-4 py-2 text-left text-lg font-bold text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                        >
                            Shop
                        </button>

                        <button 
                            onClick={() => { navigate("/about"); setMenuOpen(false); }}
                            className="block w-full rounded-lg px-4 py-2 text-left text-lg font-bold text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                        >
                            About
                        </button>

                        <div className="mx-4 my-4 h-px bg-slate-100"></div>

                        {/* Mobile User Profile */}
                        <div className="flex items-center gap-3 px-4 pb-4">
                            <FaUserCircle className="text-4xl text-indigo-500" />
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Welcome</p>
                                <p className="text-base font-bold text-slate-800">{username}</p>
                            </div>
                        </div>

                        {/* Mobile Action Buttons */}
                        <div className="flex flex-col gap-3 px-4">
                            <button
                                onClick={() => { navigate("/cart"); setMenuOpen(false); }}
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3.5 text-sm font-bold text-white shadow-md shadow-indigo-600/20 active:scale-[0.98]"
                            >
                                <FaShoppingCart size={16} />
                                Cart ({cartItems?.length || 0})
                            </button>

                            <button
                                onClick={() => { handleLogout(); setMenuOpen(false); }}
                                className="w-full rounded-xl bg-rose-50 py-3.5 text-sm font-bold text-rose-600 active:scale-[0.98]"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;