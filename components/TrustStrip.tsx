"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Users2, Rocket } from "lucide-react";

const TRUST_STATS = [
    { 
        label: "Projects Delivered", 
        value: "50+", 
        icon: <Rocket className="w-5 h-5 text-indigo-500" /> 
    },
    { 
        label: "Industries Served", 
        value: "10+", 
        icon: <ShieldCheck className="w-5 h-5 text-cyan-500" /> 
    },
    { 
        label: "Client Satisfaction", 
        value: "95%", 
        icon: <Users2 className="w-5 h-5 text-indigo-500" /> 
    },
    { 
        label: "End-to-End Execution", 
        value: "Elite", 
        icon: <CheckCircle2 className="w-5 h-5 text-cyan-500" /> 
    },
];

export default function TrustStrip() {
    return (
        <section className="relative z-20 px-4 py-12 md:py-20 bg-background">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="bg-card/40 backdrop-blur-2xl border border-border/50 rounded-3xl p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                        <div className="shrink-0 text-center md:text-left">
                            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-500 mb-2">
                                Trusted Excellence
                            </h2>
                            <p className="text-xl md:text-2xl font-semibold text-foreground max-w-[280px]">
                                Trusted by growing businesses across industries
                            </p>
                        </div>

                        <div className="h-px w-full md:h-16 md:w-px bg-border/50" />

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 w-full">
                            {TRUST_STATS.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="flex flex-col gap-1"
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        {stat.icon}
                                        <span className="text-2xl md:text-3xl font-black text-foreground">
                                            {stat.value}
                                        </span>
                                    </div>
                                    <p className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
