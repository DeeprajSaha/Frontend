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
import { MyStore } from "./Context/MyContex";

const Register = () => {
    let { user, setUser, setScreen } = useContext(MyStore);
    let {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const formData = (data) => {
        let arr = [...user, data];

        setUser(arr);
        localStorage.setItem("user", JSON.stringify(arr));

        reset();
    };

    return (
        <div className="bg-[#0f172a] py-12 h-screen">
            <div className="mx-auto w-full max-w-md">
                {/* Logo */}
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 shadow-lg">
                        <FaShoppingBag className="text-2xl text-white" />
                    </div>

                    <h1 className="text-4xl font-bold text-white">SkyMart</h1>

                    <p className="mt-2 text-slate-400">
                        Create your shopping account
                    </p>
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8 shadow-2xl">
                    <form
                        onSubmit={handleSubmit(formData)}
                        className="space-y-5"
                    >
                        {/* Full Name */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Full Name
                            </label>

                            <div className="flex items-center rounded-lg border border-slate-600 bg-slate-900 px-4 focus-within:border-indigo-500">
                                <FaUser className="text-slate-400" />

                                <input
                                    {...register("name", {
                                        required: "Name is required",
                                    })}
                                    type="text"
                                    placeholder="Full name"
                                    className="w-full bg-transparent px-3 py-3 text-white outline-none placeholder:text-slate-500"
                                />
                            </div>
                            {errors.name && (
                                <p className="text-red-500">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Email
                            </label>

                            <div className="flex items-center rounded-lg border border-slate-600 bg-slate-900 px-4 focus-within:border-indigo-500">
                                <FaEnvelope className="text-slate-400" />

                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message:
                                                "Please enter a valid email",
                                        },
                                    })}
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full bg-transparent px-3 py-3 text-white outline-none placeholder:text-slate-500"
                                />
                            </div>
                            {errors.name && (
                                <p className="text-red-500">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Password
                            </label>

                            <div className="flex items-center rounded-lg border border-slate-600 bg-slate-900 px-4 focus-within:border-indigo-500">
                                <FaLock className="text-slate-400" />

                                <input
                                    {...register("password", {
                                        required: "Password is required",
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                                            message:
                                                "Password must contain an uppercase letter, lowercase letter, number, and special character",
                                        },
                                        minLength: {
                                            value: 6,
                                            message:
                                                "Minimum 6 characters required",
                                        },
                                    })}
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
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
                            {errors.password && (
                                <p className="text-red-500">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Confirm Password
                            </label>

                            <div className="flex items-center rounded-lg border border-slate-600 bg-slate-900 px-4 focus-within:border-indigo-500">
                                <FaLock className="text-slate-400" />

                                <input
                                    {...register("cnfpassword", {
                                        required:
                                            "Confirm Password is required",
                                    })}
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Confirm password"
                                    className="w-full bg-transparent px-3 py-3 text-white outline-none placeholder:text-slate-500"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword,
                                        )
                                    }
                                    className="text-slate-400 hover:text-white"
                                >
                                    {showConfirmPassword ? (
                                        <FaEyeSlash />
                                    ) : (
                                        <FaEye />
                                    )}
                                </button>
                            </div>
                            {errors.cnfpassword && (
                                <p className="text-red-500">
                                    {errors.cnfpassword.message}
                                </p>
                            )}
                        </div>

                        {/* Button */}
                        <button className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700">
                            Create Account
                        </button>

                        {/* Footer */}
                        <p className="text-center text-sm text-slate-400">
                            Already have an account?
                            <span
                                onClick={() => setScreen("login")}
                                className="ml-2 cursor-pointer font-semibold text-indigo-400 hover:text-indigo-300"
                            >
                                Sign In
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
