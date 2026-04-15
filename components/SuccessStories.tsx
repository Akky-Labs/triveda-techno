"use client";
// Refreshing component to resolve import issues

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { TextReveal } from "./ScrollEffects";

const STORIES = [
    {
        id: 1,
        title: "Global Fintech Scale-up",
        description: "We engineered a robust, low-latency transaction engine that handles millions of requests daily, ensuring 99.99% uptime for a leading fintech player in Europe.",
        image: "/images/success1.png",
        tags: ["Fintech", "Cloud Native", "Architecture"]
    },
    {
        id: 2,
        title: "AI-Driven Healthcare Platform",
        description: "Developing a cutting-edge AI diagnostics tool that helped healthcare providers improve patient outcome tracking by 40% using specialized predictive analytics.",
        image: "/images/success2.png",
        tags: ["AI & Data", "Healthcare", "Analytics"]
    },
    {
        id: 3,
        title: "Enterprise Retail Ecosystem",
        description: "Transforming a legacy supply chain into a modern, cloud-native architecture. Resulted in real-time visibility across 500+ global locations.",
        image: "/images/success3.png",
        tags: ["Retail", "Digital Transformation", "Scale"]
    }
];

export default function SuccessStories() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % STORIES.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + STORIES.length) % STORIES.length);
        setIsAutoPlaying(false);
    };

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    return (
        <section id="success-stories" className="relative z-10 border-t border-border bg-background py-20 md:py-32 overflow-hidden">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                <div className="mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold font-heading text-foreground tracking-tighter">
                        <TextReveal text="Our Success" />{" "}
                        <TextReveal text="Stories" gradient />
                    </h2>
                    <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                        Witness the tangible impact of our technology solutions across diverse industries worldwide.
                    </p>
                </div>

                <div className="relative">
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.1}
                        onDragEnd={(e, { offset, velocity }) => {
                            if (offset.x > 100 || (offset.x > 50 && velocity.x > 500)) {
                                prevSlide();
                            } else if (offset.x < -100 || (offset.x < -50 && velocity.x < -500)) {
                                nextSlide();
                            }
                        }}
                    >
                        {/* Image Side - Order 1 on mobile, Order 1 on desktop */}
                        <div className="relative aspect-4/3 md:aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-white/5 order-1 cursor-grab active:cursor-grabbing">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={STORIES[currentIndex].image}
                                    src={STORIES[currentIndex].image}
                                    alt={STORIES[currentIndex].title}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.6, ease: "circOut" }}
                                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                                />
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
                            
                            {/* Swipe Hint for mobile */}
                            <div className="absolute inset-x-0 bottom-4 flex justify-center md:hidden pointer-events-none">
                                <span className="text-[10px] text-white/60 uppercase tracking-widest bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                                    Swipe to explore
                                </span>
                            </div>
                        </div>

                        {/* Text Side - Order 2 on mobile, Order 2 on desktop */}
                        <div className="flex flex-col justify-center order-2 w-full max-w-full overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={STORIES[currentIndex].id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="space-y-5 md:space-y-7"
                                >
                                    <div className="flex flex-wrap gap-2">
                                        {STORIES[currentIndex].tags.map(tag => (
                                            <span key={tag} className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-2xl md:text-5xl font-extrabold text-foreground leading-[1.1] tracking-tight wrap-break-word">
                                        {STORIES[currentIndex].title}
                                    </h3>
                                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                        {STORIES[currentIndex].description}
                                    </p>
                                </motion.div>
                            </AnimatePresence>

                            {/* Controls - Dots at the bottom */}
                            <div className="mt-10 md:mt-14 flex items-center justify-center md:justify-start gap-8">
                                <div className="flex gap-2.5">
                                    {STORIES.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => {
                                                setCurrentIndex(idx);
                                                setIsAutoPlaying(false);
                                            }}
                                            className={`h-1.5 transition-all duration-300 rounded-full ${currentIndex === idx ? "w-10 bg-indigo-500" : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                                            aria-label={`Go to slide ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                                <div className="hidden md:flex gap-3">
                                    <button
                                        onClick={prevSlide}
                                        className="p-2.5 rounded-xl border border-border bg-card/50 hover:bg-accent transition-colors"
                                    >
                                        <ArrowLeft size={18} />
                                    </button>
                                    <button
                                        onClick={() => {
                                            nextSlide();
                                            setIsAutoPlaying(false);
                                        }}
                                        className="p-2.5 rounded-xl border border-border bg-card/50 hover:bg-accent transition-colors"
                                    >
                                        <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
