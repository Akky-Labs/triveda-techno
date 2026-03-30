"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { TRUST_REASONS } from "@/constants/aboutData";

/**
 * TrustSection Component
 * Highlights value props that foster long-term partnerships and client trust.
 */
export const TrustSection = () => {
    return (
        <section className="px-4 py-24 md:py-36 bg-background">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight flex items-center justify-center gap-4">
                        <ShieldCheck className="text-indigo-500" /> Why Clients Trust Us
                    </h2>
                </div>
                
                <div className="space-y-4">
                    {TRUST_REASONS.map((reason, i) => (
                        <TrustReasonItem key={i} reason={reason} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TrustReasonItem = ({ reason, index }: { reason: any, index: number }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="flex items-center gap-6 p-6 rounded-3xl bg-card border border-border group hover:bg-linear-to-r hover:from-card hover:to-indigo-500/5 transition-all shadow-sm"
    >
        <div className="h-12 w-12 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-inner">
            <reason.icon className="text-indigo-500" size={24} />
        </div>
        <p className="text-lg md:text-xl font-semibold">{reason.title}</p>
    </motion.div>
);
