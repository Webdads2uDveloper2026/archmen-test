"use client";

import React from "react";
import {
    Blinds,
    Wallpaper,
    Layers3,
    Grid3X3,
    Paintbrush,
} from "lucide-react";

const services = [
    {
        icon: Blinds,
        title: "Curtains & Blinds",
        description:
            "From sheer fabric to full blackout blinds, picked to match your room's light and your need for privacy.",
    },
    {
        icon: Wallpaper,
        title: "Wallpaper Design",
        description:
            "A textured or printed wallpaper can change a whole wall's feel, without the long-term commitment of repainting later.",
    },
    {
        icon: Layers3,
        title: "Flooring Solutions",
        description:
            "Vitrified tiles, natural stone, wood look finishes, we help you land on something that suits both your budget and daily wear.",
    },
    {
        icon: Grid3X3,
        title: "CNC & Wall Panelling",
        description:
            "Custom CNC panels add texture to a wall or TV unit that paint alone just can't achieve.",
    },
    {
        icon: Paintbrush,
        title: "Wall Paintings & Textures",
        description:
            "Sometimes it's a subtle texture, sometimes a full mural. Either way, it turns a blank wall into something worth looking at.",
    },
];

const OtherInteriorServices = () => {
    return (
        <section
            className="relative w-full bg-cover bg-center bg-fixed py-16 md:py-20"
            style={{
                backgroundImage:
                    "url('https://res.cloudinary.com/dpflidsbg/image/upload/v1735028042/arcmen/contact/contact-banner.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-black/65" />
            <div className="relative z-10  px-4">
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#4dbc15]">
                        Brands We Work With
                    </p>

                    <h2 className="text-3xl font-bold text-white md:text-4xl">
                        Brands We Work With
                    </h2>

                    <p className="mt-4 text-base leading-7 text-gray-200 md:text-lg">
                        We only bring in brands we'd actually put in our own
                        homes. Durability isn't something we compromise on.
                    </p>
                </div>

                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold text-white md:text-4xl">
                        Other Interior Services We Offer
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={index}
                                className="group flex min-h-[330px] flex-col items-center rounded-xl border border-white/20 bg-white px-6 py-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                            >
                                <div className="mb-6 flex h-15 w-15 p-1 items-center justify-center rounded-full bg-[#4dbc15] transition-transform duration-300 group-hover:scale-110">
                                    <Icon
                                        size={30}
                                        strokeWidth={1.7}
                                        className="text-white"
                                    />
                                </div>

                                <h3 className="mb-4 text-xl font-bold leading-7 text-[#131d3b]">
                                    {service.title}
                                </h3>

                                <p className="text-base  text-gray-600">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default OtherInteriorServices;