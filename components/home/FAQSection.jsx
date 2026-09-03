"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How much does interior design cost in Chennai?",
        answer:
            "Honestly, it depends on your home's size and the finishes you go with. We'll give you a proper quote after the free consultation.",
    },
    {
        question: "Do you offer EMI options?",
        answer:
            "Yes. 0% EMI, so you can spread the cost out without paying extra for the convenience.",
    },
    {
        question: "How long does a full home interior take?",
        answer:
            "Usually 45 days for installation, once the design and materials are finalised.",
    },
    {
        question: "Do you provide a warranty?",
        answer:
            "Every project comes with a 15 year material warranty and our team stays reachable for after sales support.",
    },
    {
        question: "Can I see a 3D design before work begins?",
        answer:
            "Yes, always. You'll walk through a full 3D preview before we touch a single wall.",
    },
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-[#f7f7f7] py-14 md:py-20">
            <div className="mx-auto max-w-4xl px-4">
                <div className="mb-10 text-center">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#4dbc15]">
                        FAQ
                    </p>

                    <h2 className="text-3xl font-bold text-[#131d3b] md:text-4xl">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className={`overflow-hidden rounded-lg border bg-white transition-all duration-300 ${isOpen
                                        ? "border-[#4dbc15] shadow-md"
                                        : "border-gray-200"
                                    }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleFAQ(index)}
                                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-base font-semibold text-[#131d3b] md:text-lg">
                                        {faq.question}
                                    </span>

                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4dbc15] text-white">
                                        {isOpen ? (
                                            <Minus size={18} />
                                        ) : (
                                            <Plus size={18} />
                                        )}
                                    </span>
                                </button>

                                {isOpen && (
                                    <div className="border-t border-gray-100 px-5 pb-5 pt-4 md:px-6">
                                        <p className="text-base leading-7 text-gray-600">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;