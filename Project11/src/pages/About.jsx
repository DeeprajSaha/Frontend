import React, { useContext } from "react";
import {
    FaShoppingBag,
    FaTruck,
    FaShieldAlt,
    FaHeadset,
} from "react-icons/fa";
import NavBar from "../components/NavBar";
import { MyStore } from "../Context/MyContex";

const About = () => {

    const {setScreen} = useContext(MyStore);

    const features = [
        {
            id: 1,
            icon: <FaShoppingBag />,
            title: "Quality Products",
            description:
                "We offer a wide collection of premium products across electronics, fashion, jewellery, and more.",
        },
        {
            id: 2,
            icon: <FaTruck />,
            title: "Fast Delivery",
            description:
                "Quick and reliable shipping ensures your orders reach you safely and on time.",
        },
        {
            id: 3,
            icon: <FaShieldAlt />,
            title: "Secure Shopping",
            description:
                "Your payments and personal information are protected with industry-standard security.",
        },
        {
            id: 4,
            icon: <FaHeadset />,
            title: "24/7 Support",
            description:
                "Our customer support team is always available to help with your questions.",
        },
    ];

    return (
        <div className="min-h-screen bg-slate-100">
            {/* Hero */}
            <section className="bg-slate-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-5 text-center">
                    <h1 className="text-5xl font-bold">
                        About SkyMart
                    </h1>

                    <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto leading-8">
                        SkyMart is your trusted online shopping destination,
                        offering high-quality products at affordable prices.
                        Our goal is to make online shopping simple, secure,
                        and enjoyable for everyone.
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="max-w-7xl mx-auto px-5 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1674027392887-751d6396b710?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="About SkyMart"
                            className="rounded-3xl shadow-xl"
                        />
                    </div>

                    <div>
                        <h2 className="text-4xl font-bold">
                            Our Story
                        </h2>

                        <p className="mt-6 text-gray-600 leading-8">
                            SkyMart was created with one mission—to provide
                            customers with a seamless shopping experience.
                            From everyday essentials to the latest gadgets,
                            we carefully select products that combine quality,
                            affordability, and style.
                        </p>

                        <p className="mt-5 text-gray-600 leading-8">
                            We believe shopping should be easy, fast, and
                            enjoyable. That's why we continuously improve
                            our platform to serve customers better.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="max-w-7xl mx-auto px-5 pb-20">
                <div className="text-center">
                    <h2 className="text-4xl font-bold">
                        Why Choose Us
                    </h2>

                    <p className="text-gray-500 mt-4">
                        Everything you need for a better shopping experience.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center text-3xl">
                                {feature.icon}
                            </div>

                            <h3 className="text-2xl font-semibold mt-6">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600 mt-4 leading-7">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Statistics */}
            <section className="bg-sky-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-5 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                    <div>
                        <h2 className="text-5xl font-bold">20+</h2>
                        <p className="mt-2">Products</p>
                    </div>

                    <div>
                        <h2 className="text-5xl font-bold">500+</h2>
                        <p className="mt-2">Happy Customers</p>
                    </div>

                    <div>
                        <h2 className="text-5xl font-bold">4.9★</h2>
                        <p className="mt-2">Average Rating</p>
                    </div>

                    <div>
                        <h2 className="text-5xl font-bold">24/7</h2>
                        <p className="mt-2">Customer Support</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto text-center px-5">
                    <h2 className="text-4xl font-bold">
                        Start Shopping Today
                    </h2>

                    <p className="text-gray-600 mt-5 text-lg">
                        Discover amazing products, great deals, and an
                        effortless shopping experience with SkyMart.
                    </p>

                    <button onClick={() => setScreen("shop")} className="mt-8 bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-xl font-semibold transition">
                        Explore Products
                    </button>
                </div>
            </section>
        </div>
    );
};

export default About;