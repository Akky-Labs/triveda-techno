"use client";

import React from "react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/ScrollEffects";

/**
 * CaseStudyHero Component
 * The entry point for the Case Studies page, setting the context of business impact.
 */
export const CaseStudyHero = () => {
    return (
        <section className="relative px-4 py-24 md:py-32 text-center overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                    Our Impact
                </motion.div>
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-black font-heading tracking-tighter leading-none mb-6 md:mb-8">
                    <TextReveal text="Delivering Measurable" /> <br className="hidden md:block" />
                    <TextReveal text="Business Impact" gradient />
                </h1>
                <p className="max-w-2xl mx-auto text-xl text-muted-foreground leading-relaxed">
                    Real stories of how we've helped businesses design, build, and scale world-class technology solutions.
                </p>
            </div>
        </section>
    );
};
