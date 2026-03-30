"use client";

import React from "react";
import { CheckCircle2, Target } from "lucide-react";
import { GlowCard } from "@/components/GlowCard";

/**
 * CaseStudyItem Component
 * Renders a full-width section detailed into Context, Problem, Strategy, and Results for a specific case study.
 */
export const CaseStudyItem = ({ study }: { study: any }) => {
    return (
        <section className="relative group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                <div className="lg:col-span-12">
                    {/* Header Tags */}
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <Tag study={study} />
                        {study.relevance && (
                            <span className="px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-indigo-500 text-white animate-pulse">
                                {study.relevance}
                            </span>
                        )}
                    </div>

                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 md:mb-8 leading-tight max-w-5xl">
                        {study.title}
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
                        {/* Context & Problem Segment */}
                        <div className="lg:col-span-1 space-y-10">
                            <div>
                                <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-4">Context</h3>
                                <p className="text-lg text-foreground/80 leading-relaxed italic">{study.context}</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                                    <span className="text-red-500">❗</span> The Problem
                                </h3>
                                <ul className="space-y-3">
                                    {study.problem.map((p: string, i: number) => (
                                        <li key={i} className="flex gap-3 text-base text-muted-foreground border-l-2 border-red-500/30 pl-4 py-1">
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Strategy Segment */}
                        <div className="lg:col-span-1">
                            <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                                <span className="text-indigo-500">💡</span> Solution Approach
                            </h3>
                            <div className="space-y-6">
                                {study.solutionSteps.map((step: any, i: number) => (
                                    <SolutionStep key={i} step={step} index={i} />
                                ))}
                            </div>
                        </div>

                        {/* Impact & Outcome Segment */}
                        <div className="lg:col-span-1">
                            <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                                <span className="text-cyan-500">📈</span> Results
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                                {study.results.map((result: any, i: number) => (
                                    <GlowCard key={i} className="p-5 flex items-center gap-4 bg-background/40 shadow-sm">
                                        <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 shrink-0">
                                            <result.icon size={20} />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-black text-foreground">{result.value}</p>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{result.label}</p>
                                        </div>
                                    </GlowCard>
                                ))}
                            </div>
                            <TakeawayCard study={study} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Tag = ({ study }: { study: any }) => (
    <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border shadow-sm ${
        study.color === 'indigo' ? 'border-indigo-500/20 bg-indigo-500/5 text-indigo-400' :
        study.color === 'cyan' ? 'border-cyan-500/20 bg-cyan-500/5 text-cyan-400' :
        'border-blue-500/20 bg-blue-500/5 text-blue-400'
    }`}>
        {study.tag}
    </span>
);

const SolutionStep = ({ step, index }: { step: any; index: number }) => (
    <div className="relative pl-10 group">
        <div className="absolute left-0 top-0 h-6 w-6 rounded-full border border-indigo-500/30 bg-indigo-500/5 flex items-center justify-center text-[10px] font-bold group-hover:bg-indigo-500 group-hover:text-white transition-all shadow-sm">
            {index + 1}
        </div>
        <h4 className="font-bold text-foreground mb-1">{step.title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
    </div>
);

const TakeawayCard = ({ study }: { study: any }) => (
    <div className="mt-10 p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 relative overflow-hidden group shadow-md hover:shadow-xl transition-all">
        <div className="absolute top-0 right-0 p-4 opacity-5">
            <CheckCircle2 size={100} />
        </div>
        <h4 className="text-xs font-black uppercase tracking-widest text-indigo-400 mb-3 flex items-center gap-2">
            <Target size={14} /> Key Takeaway
        </h4>
        <p className="text-base font-bold leading-tight">{study.takeaway}</p>
    </div>
);
