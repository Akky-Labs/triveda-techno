"use client";

import React from "react";
import { Target, Compass } from "lucide-react";

/**
 * MissionVisionSection Component
 * Visualizing the core goals and long-term aspirations of the organization.
 */
export const MissionVisionSection = () => {
    return (
        <section className="px-4 py-24 md:py-36 bg-indigo-500/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">
                    <VisionCard 
                        icon={Target}
                        title="Our Mission"
                        desc="To empower businesses with scalable, intelligent, and future-ready technology solutions."
                        colorClass="text-indigo-500"
                    />
                    <VisionCard 
                        icon={Compass}
                        title="Our Vision"
                        desc="To become a trusted global partner for digital transformation, AI innovation, and growth acceleration."
                        colorClass="text-cyan-500"
                        showIconBg
                    />
                </div>
            </div>
        </section>
    );
};

interface VisionCardProps {
    icon: any;
    title: string;
    desc: string;
    colorClass: string;
    showIconBg?: boolean;
}

const VisionCard = ({ icon: Icon, title, desc, colorClass, showIconBg }: VisionCardProps) => (
    <div className="p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-background border border-border shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all">
        {showIconBg && (
            <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                <Icon size={150} />
            </div>
        )}
        <Icon className={`${colorClass} mb-6 mx-auto md:mx-0 transition-transform group-hover:scale-110`} size={48} />
        <h3 className={`text-[10px] md:text-xs font-mono tracking-[0.3em] ${colorClass} mb-4 uppercase`}>
            {title}
        </h3>
        <p className="text-xl md:text-3xl font-bold leading-tight">
            {desc}
        </p>
    </div>
);
