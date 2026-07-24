import React, { useContext, useState } from "react";
import {
    FaShoppingBag,
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaShieldAlt,
    FaTruck,
    FaTags,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { MyStore } from "./Context/MyContex";

const Login = () => {
    let { user, setUser, setScreen } = useContext(MyStore);
    const [showPassword, setShowPassword] = useState(false);

    let { register, handleSubmit, reset } = useForm();

    const submitFunction = (userData) => {
        if (
            userData.email === user[0].email &&
            userData.password === user[0].password
        ) {
            setScreen("home");
            localStorage.setItem("screen", "home");
            reset();
        }
        console.log("Login successfull");
    };

    return (
        <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-6 py-10">
            <div className="w-full max-w-6xl overflow-hidden rounded-3xl bg-slate-800 shadow-2xl lg:grid lg:grid-cols-2">
                {/* LEFT SIDE */}
                <div className="hidden lg:flex flex-col justify-center bg-linear-to-br from-indigo-700 to-indigo-900 p-14 text-white">
                    <div className="mb-10 flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                            <FaShoppingBag className="text-3xl" />
                        </div>

                        <h1 className="text-4xl font-bold">SkyMart</h1>
                    </div>

                    <h2 className="text-5xl font-bold leading-tight">
                        Welcome Back!
                    </h2>

                    <p className="mt-6 text-lg text-indigo-100">
                        Sign in and continue shopping with exclusive offers,
                        fast delivery and secure checkout.
                    </p>

                    <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-4">
                            <FaTruck className="text-2xl" />
                            <span>Fast & Free Delivery</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaShieldAlt className="text-2xl" />
                            <span>100% Secure Payments</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaTags className="text-2xl" />
                            <span>Exclusive Daily Deals</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="bg-slate-900 p-10 lg:p-14">
                    <div className="mb-10 text-center">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 lg:hidden">
                            <FaShoppingBag className="text-2xl text-white" />
                        </div>

                        <h2 className="text-4xl font-bold text-white">Login</h2>

                        <p className="mt-2 text-slate-400">
                            Login to your account
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit(submitFunction)}
                        className="space-y-6"
                    >
                        {/* Email */}

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Email
                            </label>

                            <div className="flex items-center rounded-lg border border-slate-700 bg-slate-800 px-4 focus-within:border-indigo-500">
                                <FaEnvelope className="text-slate-400" />

                                <input
                                    {...register("email")}
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-transparent px-3 py-3 text-white outline-none placeholder:text-slate-500"
                                />
                            </div>
                        </div>

                        {/* Password */}

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Password
                            </label>

                            <div className="flex items-center rounded-lg border border-slate-700 bg-slate-800 px-4 focus-within:border-indigo-500">
                                <FaLock className="text-slate-400" />

                                <input
                                    {...register("password")}
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    className="w-full bg-transparent px-3 py-3 text-white outline-none placeholder:text-slate-500"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="text-slate-400 hover:text-white"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        {/* Remember */}

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 text-slate-300">
                                <input
                                    type="checkbox"
                                    className="accent-indigo-600"
                                />
                                Remember me
                            </label>

                            <button
                                type="button"
                                className="text-indigo-400 hover:text-indigo-300"
                            >
                                Forgot Password?
                            </button>
                        </div>

                        {/* Button */}

                        <button className="w-full cursor-pointer rounded-lg bg-indigo-600 py-3 text-lg font-semibold text-white transition hover:bg-indigo-700">
                            Login
                        </button>

                        <p className="text-center text-slate-400">
                            Don't have an account?
                            <span
                                onClick={() => setScreen("register")}
                                className="ml-2 cursor-pointer font-semibold text-indigo-400 hover:text-indigo-300"
                            >
                                Register
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
