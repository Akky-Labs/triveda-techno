"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

// Layout & Global Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import DigitalEcosystem from "@/components/DigitalEcosystem";
import { SectionDivider } from "@/components/ScrollEffects";
import AboutImageTrail from "@/components/AboutImageTrail";

// Modular Sub-components
import { AboutHero } from "@/components/about/AboutHero";
import { AboutEdge } from "@/components/about/AboutEdge";
import { LeadershipSection } from "@/components/about/LeadershipSection";
import { PhilosophySection } from "@/components/about/PhilosophySection";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { TrustSection } from "@/components/about/TrustSection";

/**
 * AboutPage Component
 * 
 * This is the root page for the "/about" route. It follows a modular architecture 
 * to ensure scalability and ease of maintenance.
 * 
 * Architecture Principles followed:
 * - Separation of concerns: Data is moved to constants, UI is broken into sub-components.
 * - Responsive first Design.
 * - Smooth motion orchestration with GSAP & Framer Motion.
 */
export default function AboutPage() {
    /**
     * Handles scrolling to the contact section from sub-pages
     */
    const navigateToContact = () => {
        window.location.href = '/#contact';
    };

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300 selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
            {/* Global background effects */}
            <DigitalEcosystem />
            
            <SmoothScroll>
                <Navbar />
                
                <main className="pt-20">
                    <AboutHero />
                    <SectionDivider />
                    <AboutEdge />
                    <LeadershipSection />
                    <PhilosophySection />
                    <MissionVisionSection />
                    <TrustSection />
                    
                    <SectionDivider />

                    {/* Closing Section with Team Interaction */}
                    <AboutImageTrail />

                    <section className="px-4 py-24 md:py-32 text-center bg-background border-t border-border">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-black font-heading tracking-tight mb-8">
                                Team <span className="text-indigo-500">Triveda</span>
                            </h2>
                            <button 
                                onClick={navigateToContact}
                                className="inline-flex items-center gap-3 px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-3xl font-bold text-lg transition-all shadow-2xl shadow-indigo-500/20 active:scale-95"
                            >
                                Start Your Journey With Us <ArrowRight size={22} />
                            </button>
                        </div>
                    </section>
                </main>
                
                <Footer />
            </SmoothScroll>
        </div>
    );
}
