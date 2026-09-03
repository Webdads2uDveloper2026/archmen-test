"use client";
import React, { useState } from "react";
import {
    Sofa,
    BedDouble,
    Layers3,
    CookingPot,
} from "lucide-react";

const services = [
    {
        title: "Living Room & Foyer Design",
        icon: Sofa,
        content:
            "The first thing guests see. We keep it warm and lived-in, not something that looks staged for a photoshoot.",
    },
    {
        title: "Bedroom & Wardrobe Design",
        icon: BedDouble,
        content:
            "Practical storage designed around your lifestyle by our Interior Designers in Chennai.",
    },
    {
        title: "False Ceiling Design",
        icon: Layers3,
        content:
            "A bit of layering, some cove lighting and suddenly a flat ceiling has depth without feeling low or boxed in.",
    },
    {
        title: "Kitchen Appliances & Fittings",
        icon: CookingPot,
        content:
            "We help pick appliances that fit your kitchen's actual layout, not just whatever looked good in a brochure.",
    },
];

const HomeDesignServices = () => {
    const [activeTab, setActiveTab] = useState(0);

    const ActiveIcon = services[activeTab].icon;

    return (
        <section className="w-full bg-white py-12 md:py-16">
            <div className="mx-auto max-w-7xl px-4">

                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-[#131d3b] md:text-4xl">
                        Home Design, All Under One Roof
                    </h2>
                </div>

                <div className="overflow-hidden border border-[#222] bg-white">

                    <div className="flex w-full overflow-x-auto border-b border-[#333] scrollbar-hide">
                        {services.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <button
                                    key={service.title}
                                    type="button"
                                    onClick={() => setActiveTab(index)}
                                    className={`flex min-w-[200px] flex-1 items-center justify-center gap-2 whitespace-nowrap border-b-4 px-4 py-4 text-sm font-medium transition-all duration-300 md:text-base ${activeTab === index
                                            ? "border-[#4dbc15] bg-[#f8f8f8] text-[#131d3b]"
                                            : "border-transparent text-[#333] hover:bg-[#f8f8f8]"
                                        }`}
                                >
                                    <Icon
                                        size={20}
                                        strokeWidth={1.8}
                                        className={
                                            activeTab === index
                                                ? "text-[#4dbc15]"
                                                : "text-[#555]"
                                        }
                                    />

                                    {service.title}
                                </button>
                            );
                        })}
                    </div>

                    <div className="min-h-[230px] px-6 py-10 md:px-12 md:py-12">
                        <div
                            key={activeTab}
                            className="flex min-h-[170px] flex-col justify-center"
                        >
                            <div className="mb-5 flex items-center gap-4">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#4dbc15]">
                                    <ActiveIcon
                                        size={28}
                                        strokeWidth={1.7}
                                        className="text-white"
                                    />
                                </div>

                                <h3 className="text-xl font-semibold text-[#131d3b] md:text-2xl">
                                    {services[activeTab].title}
                                </h3>
                            </div>

                            <p className="max-w-3xl text-base leading-7 text-[#444] md:text-lg">
                                {services[activeTab].content}
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default HomeDesignServices;