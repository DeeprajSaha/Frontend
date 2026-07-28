import React, { useContext } from "react";
import { MyStore } from "../Context/MyContex";
import { FaArrowRight, FaBoxOpen, FaTruck } from "react-icons/fa6";
import { useNavigate } from "react-router";

const Hero = () => {
  const { users } = useContext(MyStore);

  const username = users?.[0]?.name || "Guest";

  const navigate = useNavigate();

  return (
    <section className="mx-auto max-w-7xl px-5 mt-6 font-sans">
      <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-indigo-50/50 shadow-2xl shadow-slate-200/50">
        
        {/* Decorative Background Glows */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-indigo-600/10 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative z-10 grid gap-12 p-8 md:p-12 lg:grid-cols-2 lg:p-16 items-center">
          {/* Left Side */}
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Welcome Back,
            </h1>

            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-indigo-600 sm:text-5xl lg:text-6xl">
              {username}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed font-medium text-slate-600 sm:text-lg">
              Discover thousands of products from electronics, fashion,
              jewellery, and much more at the best prices.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/shop")}
                className="flex items-center gap-2.5 rounded-xl cursor-pointer bg-indigo-600 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/20 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-indigo-600/20"
              >
                Shop Now
                <FaArrowRight size={14} />
              </button>

              <button
                onClick={() => navigate("/shop")}
                className="rounded-xl border border-slate-200 cursor-pointer bg-white px-7 py-3.5 text-sm font-bold text-slate-700 transition-all duration-200 hover:border-indigo-300 hover:bg-slate-50 hover:text-indigo-600 focus:outline-none"
              >
                Explore Products
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-5">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/40 transition duration-300 hover:-translate-y-1">
              <FaBoxOpen className="mb-4 text-3xl text-indigo-600" />

              <h2 className="text-3xl font-extrabold text-slate-900">
                20+
              </h2>

              <p className="mt-1 text-sm font-semibold text-slate-500">
                Products
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/40 transition duration-300 hover:-translate-y-1">
              <FaTruck className="mb-4 text-3xl text-emerald-500" />

              <h2 className="text-3xl font-extrabold text-slate-900">
                Free
              </h2>

              <p className="mt-1 text-sm font-semibold text-slate-500">
                Shipping
              </p>
            </div>

            <div className="relative col-span-2 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-500 p-8 shadow-lg shadow-indigo-500/20">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>

              <h2 className="relative z-10 text-2xl font-extrabold text-white sm:text-3xl">
                Best Deals Everyday
              </h2>

              <p className="relative z-10 mt-2 text-sm leading-relaxed font-medium text-indigo-50">
                Shop smarter with amazing discounts, fast delivery, and trusted
                products all in one place.
              </p>

              <button
                onClick={() => navigate("/shop")}
                className="relative z-10 mt-6 rounded-xl cursor-pointer bg-white px-6 py-3 text-xs font-bold text-indigo-600 transition duration-200 hover:bg-slate-50 hover:shadow-md active:scale-[0.98]"
              >
                Start Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;