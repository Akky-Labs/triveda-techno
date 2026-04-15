"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Send, Mail, Phone, CheckCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import {
    ScaleOnScroll,
    StaggerContainer,
    StaggerItem,
    TextReveal,
    FloatingCard,
    SectionDivider,
} from "./ScrollEffects";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);


        const SERVICE_ID = "service_prkg3yk";
        const TEMPLATE_ID = "template_g93hqt9";
        const PUBLIC_KEY = "E__8EZ_r_S9Q5evhn";

        try {
            const templateParams = {
                first_name: formData.firstName,
                last_name: formData.lastName,
                phone: formData.mobile,
                email: formData.email,
                message: formData.message,
            };

            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

            setIsSent(true);
            setFormData({ firstName: "", lastName: "", mobile: "", email: "", message: "" });

            // Optional: Auto-reset success message after 5 seconds
            setTimeout(() => setIsSent(false), 5000);

        } catch (error) {
            console.error("EmailJS Error:", error);
            alert("Oops! Something went wrong. Please try again or contact us via WhatsApp.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="relative z-10 overflow-hidden bg-background px-4 py-16 md:px-6 md:py-20 border-t border-border"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(99,102,241,0.08),transparent)]" />

            <div className="relative mx-auto max-w-6xl">
                {/* CTA Banner */}
                <ScaleOnScroll>
                    <motion.div
                        className="mb-10 overflow-hidden rounded-3xl border border-indigo-500/20 bg-linear-to-br from-indigo-600/10 via-card to-blue-600/5 p-10 md:p-14 text-center backdrop-blur-xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-5 tracking-tighter">
                            <TextReveal text="Let’s Build Something" />{" "}
                            <TextReveal text="Great Together" gradient />
                        </h2>
                        <p className="mx-auto max-w-xl text-lg text-muted-foreground mb-8 font-sans">
                            Have a project in mind or looking to scale your business with technology? Get in touch with our team.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                            <a
                                href="mailto:care@trivedatechnologies.com"
                                className="flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 transition-all hover:bg-accent hover:border-indigo-500/30"
                            >
                                <Mail size={16} className="text-indigo-400" />
                                care@trivedatechnologies.com
                            </a>
                            <div
                                className="flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 transition-all"
                            >
                                <Phone size={16} className="text-indigo-400" />
                                +91 9973243422
                            </div>
                            <a
                                href="https://wa.me/919973243422?text=Hi%20Triveda%20Technologies,%20I'm%20interested%20in%20your%20services."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 transition-all hover:bg-accent hover:border-emerald-500/30 text-emerald-500/90"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4 fill-current"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                +91 9973243422
                            </a>
                        </div>
                    </motion.div>
                </ScaleOnScroll>

                {/* Contact Form */}
                <div className="mx-auto max-w-2xl">
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-bold font-heading text-foreground tracking-tight">Get in Touch</h3>
                        <p className="mt-3 text-muted-foreground font-sans">
                            Fill out the form below and our team will get back to you within 24
                            hours.
                        </p>
                    </div>

                    <StaggerContainer className="space-y-5" staggerDelay={0.1}>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <StaggerItem className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-foreground/80">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.firstName}
                                        onChange={(e) =>
                                            setFormData({ ...formData, firstName: e.target.value })
                                        }
                                        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 backdrop-blur-sm transition-all focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-foreground/80">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.lastName}
                                        onChange={(e) =>
                                            setFormData({ ...formData, lastName: e.target.value })
                                        }
                                        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 backdrop-blur-sm transition-all focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
                                        placeholder="Doe"
                                    />
                                </div>
                            </StaggerItem>

                            <StaggerItem className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-foreground/80">
                                        Mobile Number
                                    </label>
                                    <input
                                        type="tel"
                                        value={formData.mobile}
                                        onChange={(e) =>
                                            setFormData({ ...formData, mobile: e.target.value })
                                        }
                                        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 backdrop-blur-sm transition-all focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-foreground/80">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 backdrop-blur-sm transition-all focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </StaggerItem>

                            <StaggerItem>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-foreground/80">
                                        How can we help?
                                    </label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value })
                                        }
                                        rows={4}
                                        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 backdrop-blur-sm transition-all focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30 resize-none"
                                        placeholder="Tell us about your project requirements..."
                                    />
                                </div>
                            </StaggerItem>

                            <StaggerItem>
                                <button
                                    type="submit"
                                    disabled={isSubmitting || isSent}
                                    className={`group flex w-full items-center justify-center gap-2.5 rounded-2xl px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-300 active:scale-[0.99] ${isSent
                                        ? "bg-emerald-500 shadow-emerald-500/20"
                                        : "bg-linear-to-r from-indigo-600 to-blue-600 shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:scale-[1.01]"
                                        } ${isSubmitting ? "opacity-90 cursor-not-allowed" : ""}`}
                                >
                                    {isSubmitting ? (
                                        <Loader2 size={18} className="animate-spin" />
                                    ) : isSent ? (
                                        <CheckCircle size={18} />
                                    ) : (
                                        <Send size={18} />
                                    )}

                                    {isSubmitting ? "Sending..." : isSent ? "Message Sent!" : "Send Message"}

                                    {!isSubmitting && !isSent && (
                                        <ArrowRight
                                            size={16}
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                    )}
                                </button>

                                <AnimatePresence>
                                    {isSent && (
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="mt-4 text-center text-sm font-medium text-emerald-500"
                                        >
                                            Thank you! We've received your message and will get back to you soon.
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </StaggerItem>
                        </form>
                    </StaggerContainer>
                </div>
            </div>

            <div className="mt-16">
                <SectionDivider />
            </div>
        </section>
    );
}
