"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function TechnologyServicePage() {
    return (
        <ServicePageTemplate
            id="technology"
            tag="Technology Solutions"
            title="Robust, Scalable & Enterprise-Grade"
            gradientText="Technology Solutions"
            description="We design and develop high-performance systems tailored to complex business needs. Our technology solutions are built with scalability, security, and long-term sustainability in mind."
            whatWeDo={[
                "Custom Software Development",
                "Web Application Development",
                "Mobile App Development (Android & iOS)",
                "API Development & Integration",
                "Legacy System Modernization",
                "Enterprise Application Development"
            ]}
            businessImpact={[
                "Improved operational efficiency",
                "Seamless system integration",
                "Reduced technical debt",
                "Future-ready infrastructure"
            ]}
        />
    );
}
