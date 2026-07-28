import React, { useContext } from "react";
import { FaBoxOpen, FaArrowTrendUp, FaStar, FaTags } from "react-icons/fa6";
import { MyStore } from "../Context/MyContex";

const StatCard = () => {
    let { uniqueCategories, cartItems, totalPrice, totalItems } = useContext(MyStore);

    const stats = [
        {
            id: 1,
            icon: <FaBoxOpen />,
            value: totalItems,
            title: "Cart Items",
            subtitle: "In your bag",
            bgColor: "bg-emerald-50",
            iconColor: "text-emerald-500",
        },
        {
            id: 2,
            icon: <FaArrowTrendUp />,
            value: `$ ${totalPrice}`,
            title: "Cart Value",
            subtitle: "Ready to checkout",
            bgColor: "bg-indigo-50",
            iconColor: "text-indigo-600",
        },
        {
            id: 3,
            icon: <FaStar />,
            value: "5",
            title: "Top Products",
            subtitle: "Highly rated",
            bgColor: "bg-amber-50",
            iconColor: "text-amber-500",
        },
        {
            id: 4,
            icon: <FaTags />,
            value: uniqueCategories.length,
            title: "Categories",
            subtitle: "To explore",
            bgColor: "bg-violet-50",
            iconColor: "text-violet-500",
        },
    ];

    return (
        <div className="mx-auto max-w-7xl px-5 mt-10 font-sans">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((item) => (
                    <div
                        key={item.id}
                        className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-100 hover:shadow-2xl hover:shadow-slate-200/60"
                    >
                        <div className="flex items-center gap-5">
                            <div
                                className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl shadow-inner ${item.bgColor}`}
                            >
                                <span className={item.iconColor}>
                                    {item.icon}
                                </span>
                            </div>

                            <div>
                                <h2 className="text-3xl font-extrabold text-slate-900">
                                    {item.value}
                                </h2>

                                <h3 className="mt-1 text-lg font-bold text-slate-700">
                                    {item.title}
                                </h3>

                                <p className="text-sm font-medium text-slate-500">
                                    {item.subtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatCard;