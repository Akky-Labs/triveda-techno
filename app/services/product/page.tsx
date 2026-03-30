"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function ProductServicePage() {
    return (
        <ServicePageTemplate
            id="product"
            tag="Product"
            title="Building Scalable Digital Products"
            gradientText="from Idea to Growth"
            description="At Triveda Technologies, we help businesses transform ideas into powerful digital products. From initial concept to full-scale deployment, we focus on building solutions that are scalable, user-centric, and aligned with business goals."
            whatWeDo={[
                "Product Strategy & Roadmapping",
                "MVP Development (0 → 1 Launch)",
                "UI/UX Design & Prototyping",
                "Full-Stack Product Development",
                "Product Scaling & Optimization",
                "Performance & Conversion Optimization"
            ]}
            businessImpact={[
                "Faster time-to-market",
                "Scalable architecture from day one",
                "Higher user engagement & retention",
                "Reduced development risks"
            ]}
        />
    );
}
