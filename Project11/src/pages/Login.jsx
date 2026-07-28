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
import { MyStore } from "../Context/MyContex";
import { useNavigate } from "react-router";

const Login = () => {
    let { users, setUsers, setScreen } = useContext(MyStore);
    const [showPassword, setShowPassword] = useState(false);

    let { register, handleSubmit, reset } = useForm();

    const navigate = useNavigate();

    const submitFunction = (userData) => {
        const loggedInUser = users.find(
            (u) =>
                u.email === userData.email && u.password === userData.password,
        );

        if (loggedInUser) {
            localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

            alert("Login Successful");
            navigate("/home");
            reset();
        } else {
            alert("Invalid Email or Password");
        }
    };

    return (
        <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-4 py-4 font-sans text-slate-800">
            {/* Background Soft Blurs */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-indigo-600/10 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative mx-auto flex w-full max-w-6xl items-center justify-center">
                <div className="grid w-full overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl shadow-slate-200/50 lg:grid-cols-2">
                    {/* Left Side */}
                    <div className="relative hidden flex-col justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-500 p-10 lg:flex">
                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

                        <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 shadow-inner backdrop-blur-lg">
                            <FaShoppingBag className="text-3xl text-white" />
                        </div>

                        <h1 className="relative z-10 text-4xl font-extrabold leading-tight text-white drop-shadow-sm">
                            Welcome
                            <br />
                            Back!
                        </h1>

                        <p className="relative z-10 mt-4 text-base leading-relaxed text-indigo-50">
                            Sign in to continue your shopping journey and access
                            premium products, exclusive discounts and fast
                            checkout.
                        </p>

                        <div className="relative z-10 mt-10 space-y-5">
                            <div className="flex items-center gap-4">
                                <div className="rounded-xl bg-white/20 p-3 shadow-inner">
                                    <FaTruck className="text-lg text-white" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white">
                                        Fast Delivery
                                    </h3>
                                    <p className="text-xs font-medium text-indigo-100">
                                        Delivered to your doorstep.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="rounded-xl bg-white/20 p-3 shadow-inner">
                                    <FaShieldAlt className="text-lg text-white" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white">
                                        Secure Payment
                                    </h3>
                                    <p className="text-xs font-medium text-indigo-100">
                                        Encrypted payment protection.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="rounded-xl bg-white/20 p-3 shadow-inner">
                                    <FaTags className="text-lg text-white" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white">
                                        Daily Offers
                                    </h3>
                                    <p className="text-xs font-medium text-indigo-100">
                                        Save more every day.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center justify-center bg-white p-6 sm:p-8">
                        <div className="w-full max-w-md">
                            {/* Mobile Logo */}
                            <div className="mb-4 text-center lg:hidden">
                                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 shadow-md shadow-indigo-500/20">
                                    <FaShoppingBag className="text-xl text-white" />
                                </div>
                                <h2 className="text-2xl font-extrabold text-slate-800">
                                    SkyMart
                                </h2>
                            </div>

                            <div className="mb-5 text-center lg:text-left">
                                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                                    Login
                                </h2>
                                <p className="mt-1 text-sm font-medium text-slate-500">
                                    Welcome back! Please login to continue.
                                </p>
                            </div>

                            <form
                                onSubmit={handleSubmit(submitFunction)}
                                className="space-y-4"
                            >
                                {/* Email Address */}
                                <div>
                                    <label className="mb-1 block text-xs font-semibold text-slate-700">
                                        Email Address
                                    </label>

                                    <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3.5 transition-all duration-200 focus-within:border-indigo-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-500/10 hover:border-slate-300">
                                        <FaEnvelope className="text-xs text-slate-400" />

                                        <input
                                            {...register("email")}
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full bg-transparent px-3 py-2.5 text-sm font-medium text-slate-800 outline-none placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>

                                {/* Password */}
                                <div>
                                    <label className="mb-1 block text-xs font-semibold text-slate-700">
                                        Password
                                    </label>

                                    <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3.5 transition-all duration-200 focus-within:border-indigo-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-500/10 hover:border-slate-300">
                                        <FaLock className="text-xs text-slate-400" />

                                        <input
                                            {...register("password")}
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="Enter password"
                                            className="w-full bg-transparent px-3 py-2.5 text-sm font-medium text-slate-800 outline-none placeholder:text-slate-400"
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            className="p-1 text-slate-400 transition hover:text-indigo-600 focus:outline-none"
                                        >
                                            {showPassword ? (
                                                <FaEyeSlash size={16} />
                                            ) : (
                                                <FaEye size={16} />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Options */}
                                <div className="flex items-center justify-between text-xs font-medium">
                                    <label className="flex cursor-pointer items-center gap-2 text-slate-500 hover:text-slate-700">
                                        <input
                                            type="checkbox"
                                            className="h-3.5 w-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                        Remember me
                                    </label>

                                    <button
                                        type="button"
                                        className="font-bold text-indigo-600 hover:text-indigo-700 hover:underline underline-offset-2"
                                    >
                                        Forgot Password?
                                    </button>
                                </div>

                                {/* Login Submit */}
                                <button
                                    type="submit"
                                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/20 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-indigo-600/20"
                                >
                                    Login
                                </button>

                                {/* Divider */}
                                <div className="flex items-center gap-3 py-1">
                                    <div className="h-px flex-1 bg-slate-200"></div>

                                    <span className="text-xs font-semibold text-slate-400">
                                        OR
                                    </span>

                                    <div className="h-px flex-1 bg-slate-200"></div>
                                </div>

                                {/* Register Link */}
                                <p className="text-center text-xs font-medium text-slate-600">
                                    Don't have an account?
                                    <button
                                        type="button"
                                        onClick={() => navigate("/register")}
                                        className="ml-1.5 font-bold text-indigo-600 transition duration-200 hover:text-indigo-700 hover:underline underline-offset-4"
                                    >
                                        Register
                                    </button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;