import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {
    FaUser,
    FaEnvelope,
    FaLock,
    FaShoppingBag,
    FaEye,
    FaEyeSlash,
} from "react-icons/fa";
import { MyStore } from "../Context/MyContex";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
    let { users, setUsers } = useContext(MyStore);

    let {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const password = watch("password");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();

    const formData = (data) => {
        const userExists = users?.some((user) => user.email === data.email);
        if (userExists) {
            toast.error("An account with this email already exists!");
            return;
        }

        let arr = [...users, data];

        setUsers(arr);

        localStorage.setItem("users", JSON.stringify(arr));
        navigate("/");

        reset();
    };

    return (
        <div className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-4 py-10 font-sans text-slate-800">
            {/* React Hot Toast Container */}
            <Toaster position="top-center" reverseOrder={false} />

            {/* Background Soft Blurs */}
            <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-indigo-600/10 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

            <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center justify-center">
                <div className="grid w-full overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl shadow-slate-200/50 lg:grid-cols-2">
                    {/* Left Side (Kept vibrant for a premium contrast) */}
                    <div className="hidden flex-col justify-center bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-500 p-14 lg:flex relative overflow-hidden">
                        {/* Decorative Circle */}
                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

                        <div className="relative z-10 mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 shadow-inner backdrop-blur-lg">
                            <FaShoppingBag className="text-4xl text-white" />
                        </div>

                        <h1 className="relative z-10 text-5xl font-extrabold leading-tight text-white drop-shadow-sm">
                            Join
                            <br />
                            SkyMart
                        </h1>

                        <p className="relative z-10 mt-6 text-lg leading-8 text-indigo-50">
                            Discover premium products, seamless shopping and
                            exclusive deals with the next generation shopping
                            experience.
                        </p>

                        <div className="relative z-10 mt-14 grid grid-cols-3 gap-6">
                            <div>
                                <h3 className="text-3xl font-bold text-white">
                                    20K+
                                </h3>
                                <p className="mt-1 font-medium text-indigo-100">
                                    Customers
                                </p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white">
                                    10K+
                                </h3>
                                <p className="mt-1 font-medium text-indigo-100">
                                    Products
                                </p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white">
                                    24/7
                                </h3>
                                <p className="mt-1 font-medium text-indigo-100">
                                    Support
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side (Modern Light Form) */}
                    <div className="flex items-center justify-center bg-white p-6 sm:p-12">
                        <div className="w-full max-w-md">
                            {/* Mobile Logo */}
                            <div className="mb-8 text-center lg:hidden">
                                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 shadow-lg shadow-indigo-500/30">
                                    <FaShoppingBag className="text-2xl text-white" />
                                </div>
                                <h2 className="text-3xl font-extrabold text-slate-800">
                                    SkyMart
                                </h2>
                            </div>

                            <div className="mb-8 text-center lg:text-left">
                                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                                    Create Account
                                </h2>
                                <p className="mt-2 font-medium text-slate-500">
                                    Start your shopping journey today.
                                </p>
                            </div>

                            <form
                                onSubmit={handleSubmit(formData)}
                                className="space-y-5"
                            >
                                {/* Name Input */}
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        Full Name
                                    </label>
                                    <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-4 transition-all duration-200 focus-within:border-indigo-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-500/10 hover:border-slate-300">
                                        <FaUser className="text-slate-400" />
                                        <input
                                            {...register("name", {
                                                required: "Name is required",
                                            })}
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-transparent px-4 py-3.5 font-medium text-slate-800 outline-none placeholder:text-slate-400"
                                        />
                                    </div>
                                    {errors.name && (
                                        <p className="mt-1.5 text-sm font-medium text-red-500">
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        Email Address
                                    </label>
                                    <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-4 transition-all duration-200 focus-within:border-indigo-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-500/10 hover:border-slate-300">
                                        <FaEnvelope className="text-slate-400" />
                                        <input
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                    message:
                                                        "Enter a valid email",
                                                },
                                            })}
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full bg-transparent px-4 py-3.5 font-medium text-slate-800 outline-none placeholder:text-slate-400"
                                        />
                                    </div>
                                    {errors.email && (
                                        <p className="mt-1.5 text-sm font-medium text-red-500">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                {/* Password Input */}
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        Password
                                    </label>
                                    <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-4 transition-all duration-200 focus-within:border-indigo-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-500/10 hover:border-slate-300">
                                        <FaLock className="text-slate-400" />
                                        <input
                                            {...register("password", {
                                                required:
                                                    "Password is required",
                                                pattern: {
                                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/,
                                                    message:
                                                        "Must contain uppercase, lowercase, number & special character",
                                                },
                                            })}
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="Enter password"
                                            className="w-full bg-transparent px-4 py-3.5 font-medium text-slate-800 outline-none placeholder:text-slate-400"
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            className="p-1 text-slate-400 transition hover:text-indigo-600 focus:outline-none"
                                        >
                                            {showPassword ? (
                                                <FaEyeSlash size={18} />
                                            ) : (
                                                <FaEye size={18} />
                                            )}
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <p className="mt-1.5 text-sm font-medium text-red-500">
                                            {errors.password.message}
                                        </p>
                                    )}
                                </div>

                                {/* Confirm Password Input */}
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        Confirm Password
                                    </label>
                                    <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-4 transition-all duration-200 focus-within:border-indigo-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-500/10 hover:border-slate-300">
                                        <FaLock className="text-slate-400" />
                                        <input
                                            {...register("cnfpassword", {
                                                required:
                                                    "Confirm Password is required",
                                                validate: (value) =>
                                                    value === password ||
                                                    "Passwords do not match",
                                            })}
                                            type={
                                                showConfirmPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="Confirm password"
                                            className="w-full bg-transparent px-4 py-3.5 font-medium text-slate-800 outline-none placeholder:text-slate-400"
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowConfirmPassword(
                                                    !showConfirmPassword,
                                                )
                                            }
                                            className="p-1 text-slate-400 transition hover:text-indigo-600 focus:outline-none"
                                        >
                                            {showConfirmPassword ? (
                                                <FaEyeSlash size={18} />
                                            ) : (
                                                <FaEye size={18} />
                                            )}
                                        </button>
                                    </div>
                                    {errors.cnfpassword && (
                                        <p className="mt-1.5 text-sm font-medium text-red-500">
                                            {errors.cnfpassword.message}
                                        </p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl bg-indigo-600 py-3.5 font-bold text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/25 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-indigo-600/20"
                                >
                                    Create Account
                                </button>

                                {/* Divider */}
                                <div className="flex items-center gap-4 py-2">
                                    <div className="h-px flex-1 bg-slate-200"></div>
                                    <span className="text-sm font-semibold text-slate-400">
                                        OR
                                    </span>
                                    <div className="h-px flex-1 bg-slate-200"></div>
                                </div>

                                {/* Login Redirect */}
                                <p className="text-center font-medium text-slate-600">
                                    Already have an account?
                                    <button
                                        type="button"
                                        onClick={() => navigate("/")}
                                        className="ml-2 font-bold text-indigo-600 transition duration-200 hover:text-indigo-700 hover:underline underline-offset-4"
                                    >
                                        Sign In
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

export default Register;
