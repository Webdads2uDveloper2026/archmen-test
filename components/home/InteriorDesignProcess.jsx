"use client";

import React from "react";
import {
    MessageCircle,
    Palette,
    ClipboardCheck,
    Hammer,
    KeyRound,
} from "lucide-react";

const processSteps = [
    {
        icon: MessageCircle,
        title: "Talk to Our Expert",
        day: "Day 1-2",
        description:
            "We sit down, understand your space, your budget and honestly, how you actually live day to day.",
    },
    {
        icon: Palette,
        title: "Brainstorming & 3D Design",
        day: "Day 3-7",
        description:
            "We'll work out a proper quote once we've had the free consultation. We go back and forth on the 3D design until it feels right to you.",
    },
    {
        icon: ClipboardCheck,
        title: "Final Proposal & Material Selection",
        day: "Day 8-10",
        description:
            "Materials, finishes, final costing, all locked in here. No guesswork left once production starts.",
    },
    {
        icon: Hammer,
        title: "Installation",
        day: "Day 11-45",
        description:
            "Production and on site work happen in phases, so the site stays organised and the timeline holds.",
    },
    {
        icon: KeyRound,
        title: "Handover",
        day: "Day 46",
        description:
            "One last walkthrough to check everything's right and then the keys are yours.",
    },
];

const InteriorDesignProcess = () => {
    return (
        <section className="w-full bg-white py-14">
            <div className=" px-4">

                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-[#131d3b] md:text-4xl">
                        Our Interior Design Process
                    </h2>
                </div>

                <div className="relative">

                    <div className="absolute left-[10%] right-[10%] top-[31px] hidden h-px bg-[#4dbc15] lg:block" />

                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
                        {processSteps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <div
                                    key={index}
                                    className="relative flex flex-col items-center text-center"
                                >
                                    <div className="relative z-10 mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-[#f2d98b] bg-[#fffaf0]">
                                        <Icon
                                            size={30}
                                            strokeWidth={1.7}
                                            className="text-[#333]"
                                        />
                                    </div>

                                    <h3 className="min-h-[30px] text-base font-bold leading-6 text-[#222]">
                                        {step.title}
                                    </h3>

                                    <p className="mt-1 text-sm font-semibold text-[#4dbc15]">
                                        {step.day}
                                    </p>

                                    <p className="mt-3 max-w-[210px] text-sm leading-6 text-gray-600">
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteriorDesignProcess;