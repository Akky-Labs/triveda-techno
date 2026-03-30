"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function AIAnalyticsServicePage() {
    return (
        <ServicePageTemplate
            id="ai-analytics"
            tag="AI & Analytics"
            title="Unlock the Power of Data & AI"
            gradientText="for Smarter Decisions"
            description="We leverage artificial intelligence and advanced analytics to help businesses automate processes, gain actionable insights, and drive smarter decision-making."
            whatWeDo={[
                "AI & Machine Learning Solutions",
                "Predictive Analytics & Forecasting",
                "Business Intelligence Dashboards",
                "Data Engineering & Warehousing",
                "AI-Powered Automation (RPA)",
                "Chatbots & Conversational AI"
            ]}
            businessImpact={[
                "Data-driven decision making",
                "Reduced manual effort through automation",
                "Improved forecasting accuracy",
                "Enhanced customer experience"
            ]}
        />
    );
}
