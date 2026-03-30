"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function MarketingServicePage() {
    return (
        <ServicePageTemplate
            id="marketing"
            tag="Digital Marketing"
            title="Driving Growth with Performance"
            gradientText="Driven Marketing"
            description="We help businesses acquire, engage, and convert customers through data-driven digital marketing strategies focused on measurable outcomes."
            whatWeDo={[
                "Performance Marketing (Google, Meta, LinkedIn)",
                "Search Engine Optimization (SEO)",
                "Social Media Marketing",
                "Marketing Automation",
                "Conversion Rate Optimization (CRO)",
                "Funnel & Growth Analytics"
            ]}
            businessImpact={[
                "Increased customer acquisition",
                "Higher ROI on marketing spend",
                "Improved conversion rates",
                "Stronger brand presence"
            ]}
        />
    );
}
