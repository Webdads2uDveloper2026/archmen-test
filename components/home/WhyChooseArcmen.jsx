"use client";

import React from "react";
import {
    Award,
    ShieldCheck,
    Clock3,
    IndianRupee,
    Droplets,
    Globe2,
    CreditCard,
    Users,
} from "lucide-react";

const reasons = [
    {
        icon: Award,
        title: "25+ Years of Experience",
        description:
            "With over 25 years of experience in Chennai, we deliver quality interior design solutions with expertise and reliability.",
    },
    {
        icon: Clock3,
        title: "45-Day Installation",
        description:
            "Our experienced execution team aims to complete full-home interior installation within 45 days.",
    },
    {
        icon: ShieldCheck,
        title: "15-Year Material Warranty",
        description:
            "We provide a 15-year material warranty with reliable after-sales support after project completion.",
    },
    {
        icon: IndianRupee,
        title: "Competitive Pricing",
        description:
            "We provide transparent and competitive pricing without unexpected costs during your project.",
    },
    {
        icon: Droplets,
        title: "Waterproof Plywood",
        description:
            "We use waterproof and termite-resistant plywood for durable furniture and cabinets suitable for Chennai's climate.",
    },
    {
        icon: Users,
        title: "2000+ Happy Clients",
        description:
            "More than 2000 clients have trusted Arcmen for their homes, apartments and residential interior projects.",
    },
    {
        icon: CreditCard,
        title: "0% EMI Option",
        description:
            "Manage your interior project cost with our convenient 0% EMI option and flexible monthly payments.",
    },
    {
        icon: Globe2,
        title: "International Brand Partnerships",
        description:
            "We work with trusted international brands for hardware, laminates, fittings and appliances.",
    },
];

const WhyChooseArcmen = () => {
    return (
        <section className="w-full bg-white py-12 md:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">

                <div className="mb-10 text-center">
                    <p className="mb-2 text-sm font-medium  text-[#4dbc15]">
                        Innovative ideas, stylish designs
                    </p>

                    <h2 className="text-3xl font-bold text-[#555] md:text-4xl">
                        Why to Choose Us?
                    </h2>

                    <div className="mx-auto mt-3 h-[3px] w-10 bg-[#4dbc15]" />
                </div>

                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
                    {reasons.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="mb-4 flex h-[75px] w-[75px] items-center justify-center">
                                    <Icon
                                        size={58}
                                        strokeWidth={1.4}
                                        className="text-[#4dbc15]"
                                    />
                                </div>

                                <h3 className="mb-2 text-base font-semibold text-[#555]">
                                    {item.title}
                                </h3>

                                <p className="max-w-[260px] text-sm leading-5 text-[#888]">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseArcmen;