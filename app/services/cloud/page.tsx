"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function CloudServicePage() {
    return (
        <ServicePageTemplate
            id="cloud"
            tag="Cloud Services"
            title="Scalable, Secure & High-Performance"
            gradientText="Cloud Infrastructure"
            description="We help businesses migrate, manage, and optimize their infrastructure on the cloud, ensuring high availability, security, and scalability."
            whatWeDo={[
                "Cloud Migration & Deployment",
                "Cloud Architecture Design",
                "DevOps & CI/CD Setup",
                "Infrastructure Optimization",
                "Security & Compliance",
                "Monitoring & Performance Management"
            ]}
            businessImpact={[
                "Reduced infrastructure cost",
                "High system availability & scalability",
                "Faster deployment cycles",
                "Enhanced security & reliability"
            ]}
        />
    );
}
