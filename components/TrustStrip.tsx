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
         <section className="relative z-20 px-4 py-12 md:py-20 bg-background overflow-hidden">
             {/* Subltle ambient glow behind the section */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
             
             <div className="max-w-7xl mx-auto">
                 <motion.div
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-100px" }}
                     transition={{ duration: 0.8, ease: "circOut" }}
                     className="group relative bg-card/40 backdrop-blur-2xl border border-border/60 hover:border-indigo-500/30 rounded-[2.5rem] p-8 md:px-12 md:py-14 shadow-2xl shadow-indigo-500/5 transition-all duration-500"
                 >
                     <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16">
                         <div className="shrink-0 text-center lg:text-left">
                             <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-4 flex items-center justify-center lg:justify-start gap-2">
                                 <span className="h-1 w-8 bg-indigo-500/40 rounded-full" />
                                 Trusted Excellence
                             </h2>
                             <p className="text-2xl md:text-3xl font-black text-foreground max-w-[340px] leading-tight tracking-tighter">
                                 Trusted by growing businesses across industries
                             </p>
                         </div>
 
                         <div className="hidden lg:block h-20 w-px bg-linear-to-b from-transparent via-border/80 to-transparent" />
 
                         <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-4 w-full">
                             {TRUST_STATS.map((stat, index) => (
                                 <motion.div
                                     key={stat.label}
                                     initial={{ opacity: 0, scale: 0.9 }}
                                     whileInView={{ opacity: 1, scale: 1 }}
                                     viewport={{ once: true }}
                                     transition={{ delay: index * 0.1, duration: 0.6 }}
                                     whileHover={{ y: -5 }}
                                     className="flex flex-col items-center lg:items-start group/item transition-all duration-300"
                                 >
                                     <div className="flex items-center gap-2.5 mb-2">
                                         <div className="p-2 rounded-lg bg-indigo-500/5 group-hover/item:bg-indigo-500/10 transition-colors">
                                             {stat.icon}
                                         </div>
                                         <span className="text-3xl md:text-4xl font-black text-foreground tracking-tighter">
                                             {stat.value}
                                         </span>
                                     </div>
                                     <p className="text-[10px] md:text-[11px] font-bold text-muted-foreground uppercase tracking-widest text-center lg:text-left leading-tight">
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
