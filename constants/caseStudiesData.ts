import { 
    Target, 
    Rocket, 
    TrendingUp, 
    Search,
    Cpu,
    Users,
    BrainCircuit,
    Globe,
    Cloud,
    ShieldCheck
} from "lucide-react";

export const CASE_STUDIES = [
    {
        id: "d2c-growth",
        tag: "D2C eCommerce Growth",
        relevance: "HIGHLY RELEVANT FOR YOU",
        title: "Driving 32% Conversion Uplift for a D2C Brand Through Funnel Optimization",
        context: "A fast-growing D2C brand was struggling with low website conversion rates and high cart abandonment, despite strong traffic from paid channels.",
        problem: [
            "High drop-offs during checkout",
            "Poor mobile experience",
            "Lack of visibility into user behavior",
            "Inefficient retargeting"
        ],
        solutionSteps: [
            { title: "Funnel Diagnosis", desc: "Implemented detailed event tracking (GA4 + funnel analytics). Identified drop-off points across checkout journey." },
            { title: "Conversion Optimization", desc: "Redesigned checkout UX (mobile-first). Reduced friction and introduced trust signals." },
            { title: "Experimentation", desc: "Ran A/B tests on CTA placements, pricing display, and layout." },
            { title: "Retargeting Optimization", desc: "Integrated WhatsApp & email retargeting flows for abandoned carts." }
        ],
        results: [
            { label: "Conversion Rate", value: "32% Uplift", icon: TrendingUp },
            { label: "Revenue", value: "25% Increase", icon: Target },
            { label: "Cart Abandonment", value: "18% Reduction", icon: Search },
            { label: "Checkout Speed", value: "Faster Completion", icon: Rocket }
        ],
        takeaway: "Data-driven funnel optimization can unlock massive revenue without increasing traffic.",
        color: "indigo"
    },
    {
        id: "ai-automation",
        tag: "AI AUTOMATION FOR OPERATIONS",
        title: "Reducing Operational Cost by 40% Using AI-Powered Automation",
        context: "A mid-sized enterprise was facing inefficiencies due to manual processes across operations and customer handling.",
        problem: [
            "Heavy dependency on manual workflows",
            "High operational cost",
            "Delays in response time",
            "Low scalability"
        ],
        solutionSteps: [
            { title: "Process Mapping", desc: "Identified repetitive workflows across departments and mapped automation opportunities." },
            { title: "AI Implementation", desc: "Built AI-driven automation workflows using rule-based + ML systems." },
            { title: "System Integration", desc: "Integrated APIs across CRM and backend systems for seamless data flow." },
            { title: "Smart Assist Systems", desc: "Implemented chatbot for handling routine queries, reducing human dependency." }
        ],
        results: [
            { label: "Operational Cost", value: "40% Reduction", icon: Cpu },
            { label: "Execution Speed", value: "60% Faster", icon: Rocket },
            { label: "Team Productivity", value: "Significantly Improved", icon: Users },
            { label: "Decision Making", value: "Data-Driven", icon: BrainCircuit }
        ],
        takeaway: "AI is not just innovation — it’s a direct lever for cost efficiency and scalability.",
        color: "cyan"
    },
    {
        id: "saas-launch",
        tag: "SaaS PRODUCT DEVELOPMENT (0 → 1)",
        title: "Building a Scalable SaaS Platform from Scratch Serving 10,000+ Users",
        context: "A startup wanted to launch a SaaS product but lacked technical expertise and scalable architecture.",
        problem: [
            "No product architecture",
            "Undefined roadmap",
            "Scalability concerns",
            "Limited technical resources"
        ],
        solutionSteps: [
            { title: "Product Strategy", desc: "Defined product roadmap and prioritized MVP features for rapid launch." },
            { title: "Architecture Design", desc: "Designed scalable, cloud-based modular architecture for future-readiness." },
            { title: "Full-Stack Development", desc: "API-first approach using modern frontend and backend stacks." },
            { title: "Deployment & Scaling", desc: "Cloud deployment with performance optimization for 10k+ users." }
        ],
        results: [
            { label: "Launch Status", value: "Successful MVP", icon: Globe },
            { label: "Active Users", value: "10,000+ Onboarded", icon: Users },
            { label: "Performance", value: "High Uptime", icon: Cloud },
            { label: "Growth", value: "Scalability Ready", icon: ShieldCheck }
        ],
        takeaway: "Strong product thinking + scalable tech = successful SaaS launch",
        color: "blue"
    }
];
