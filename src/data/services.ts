import { Package, Leaf, GitBranch, TrendingDown, Search, Shield, LucideIcon } from "lucide-react";

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: ServiceFeature[];
  process: ProcessStep[];
  benefits: string[];
  accentColor: string;
}

export const services: Service[] = [
  {
    id: "procurement",
    icon: Package,
    title: "Packaging Procurement",
    shortDescription: "Strategic sourcing and supplier management to reduce costs while maintaining quality and reliability across your packaging portfolio.",
    fullDescription: "Our packaging procurement service takes a strategic approach to sourcing and supplier management. We leverage our extensive industry network and market knowledge to identify the best suppliers, negotiate favorable terms, and establish robust supply agreements that deliver sustained value.",
    features: [
      {
        title: "Supplier Identification & Qualification",
        description: "Comprehensive market analysis to identify and vet suppliers that meet your quality, capacity, and sustainability requirements."
      },
      {
        title: "Competitive Tendering Management",
        description: "End-to-end management of tender processes, ensuring fair competition and optimal outcomes."
      },
      {
        title: "Contract Negotiation",
        description: "Expert negotiation of terms, pricing structures, and service level agreements to protect your interests."
      },
      {
        title: "Supplier Performance Monitoring",
        description: "Ongoing supplier assessment and performance tracking to ensure consistent quality and delivery."
      }
    ],
    process: [
      { step: 1, title: "Discovery", description: "We analyze your current procurement landscape, spend patterns, and pain points." },
      { step: 2, title: "Strategy", description: "Develop a tailored procurement strategy aligned with your business objectives." },
      { step: 3, title: "Execution", description: "Manage the sourcing process, from RFQ to contract finalization." },
      { step: 4, title: "Optimization", description: "Continuous monitoring and improvement of supplier relationships." }
    ],
    benefits: [
      "Average cost savings of 20-35%",
      "Reduced supplier risk",
      "Improved quality consistency",
      "Streamlined procurement processes"
    ],
    accentColor: "from-primary to-primary/70",
  },
  {
    id: "epr",
    icon: Leaf,
    title: "EPR Compliance",
    shortDescription: "Navigate Extended Producer Responsibility regulations with confidence. We ensure your packaging meets all UK environmental obligations.",
    fullDescription: "Extended Producer Responsibility regulations are becoming increasingly complex. Our EPR compliance service helps you navigate these requirements efficiently, ensuring full compliance while minimizing costs. We stay ahead of regulatory changes so you don't have to.",
    features: [
      {
        title: "Regulatory Requirement Analysis",
        description: "Thorough assessment of applicable EPR regulations and their implications for your business."
      },
      {
        title: "Packaging Data Collection & Reporting",
        description: "Accurate data gathering and submission to meet regulatory reporting requirements."
      },
      {
        title: "Compliance Strategy Development",
        description: "Strategic planning to achieve and maintain compliance cost-effectively."
      },
      {
        title: "Producer Responsibility Scheme Selection",
        description: "Evaluation and selection of the most suitable compliance scheme for your needs."
      }
    ],
    process: [
      { step: 1, title: "Assessment", description: "Evaluate your current compliance status and identify gaps." },
      { step: 2, title: "Data Gathering", description: "Collect and organize packaging data for reporting." },
      { step: 3, title: "Scheme Selection", description: "Identify and enroll in the appropriate compliance scheme." },
      { step: 4, title: "Ongoing Compliance", description: "Manage reporting cycles and regulatory updates." }
    ],
    benefits: [
      "Full regulatory compliance",
      "Avoid penalties and fines",
      "Optimized compliance costs",
      "Future-proofed strategy"
    ],
    accentColor: "from-accent to-accent/70",
  },
  {
    id: "supply-chain",
    icon: GitBranch,
    title: "Supply Chain Transformation",
    shortDescription: "End-to-end optimization of your packaging supply chain, from supplier diversification to logistics efficiency improvements.",
    fullDescription: "Transform your packaging supply chain into a competitive advantage. We analyze every link in your supply chain, identify inefficiencies, and implement improvements that reduce costs, increase resilience, and improve service levels.",
    features: [
      {
        title: "Supply Chain Mapping & Analysis",
        description: "Complete visibility of your packaging supply chain, including all tiers and touchpoints."
      },
      {
        title: "Risk Assessment & Mitigation",
        description: "Identify vulnerabilities and develop strategies to protect against disruption."
      },
      {
        title: "Logistics Optimization",
        description: "Streamline transportation, warehousing, and distribution for maximum efficiency."
      },
      {
        title: "Inventory Management Improvement",
        description: "Right-size inventory levels to balance service and working capital."
      }
    ],
    process: [
      { step: 1, title: "Map", description: "Create a comprehensive view of your current supply chain." },
      { step: 2, title: "Analyze", description: "Identify inefficiencies, risks, and improvement opportunities." },
      { step: 3, title: "Design", description: "Develop the optimal future-state supply chain model." },
      { step: 4, title: "Implement", description: "Execute changes with minimal disruption to operations." }
    ],
    benefits: [
      "Reduced supply chain costs",
      "Improved resilience",
      "Better service levels",
      "Lower working capital"
    ],
    accentColor: "from-primary via-primary/80 to-accent",
  },
  {
    id: "cost",
    icon: TrendingDown,
    title: "Cost Optimization",
    shortDescription: "Identify and realize savings opportunities across your packaging spend through detailed analysis and strategic recommendations.",
    fullDescription: "Unlock hidden savings in your packaging spend. Our cost optimization service goes beyond simple price negotiations to address the full spectrum of cost drivers, from specifications and materials to processes and logistics.",
    features: [
      {
        title: "Spend Analysis & Benchmarking",
        description: "Detailed analysis of your packaging spend compared to industry benchmarks."
      },
      {
        title: "Value Engineering",
        description: "Optimize packaging design to reduce costs without compromising functionality."
      },
      {
        title: "Specification Optimization",
        description: "Review and rationalize specifications to eliminate over-engineering."
      },
      {
        title: "Total Cost of Ownership Analysis",
        description: "Look beyond purchase price to understand the full cost picture."
      }
    ],
    process: [
      { step: 1, title: "Data Collection", description: "Gather comprehensive spend and specification data." },
      { step: 2, title: "Analysis", description: "Identify savings opportunities across all cost categories." },
      { step: 3, title: "Prioritization", description: "Rank opportunities by value and ease of implementation." },
      { step: 4, title: "Realization", description: "Implement changes and track savings delivery." }
    ],
    benefits: [
      "Typical savings of 20-35%",
      "Improved specifications",
      "Better supplier terms",
      "Sustainable cost reductions"
    ],
    accentColor: "from-accent to-primary/70",
  },
  {
    id: "audit",
    icon: Search,
    title: "Packaging Audit",
    shortDescription: "Comprehensive assessment of your current packaging operations to identify opportunities for improvement and cost reduction.",
    fullDescription: "Our packaging audit provides a comprehensive, independent assessment of your current packaging operations. We examine every aspect from procurement to sustainability, delivering a clear roadmap for improvement with prioritized recommendations.",
    features: [
      {
        title: "Current State Assessment",
        description: "Thorough review of packaging operations, suppliers, specifications, and processes."
      },
      {
        title: "Gap Analysis",
        description: "Identify gaps between current performance and best practice standards."
      },
      {
        title: "Improvement Roadmap",
        description: "Prioritized recommendations with clear implementation steps."
      },
      {
        title: "Implementation Support",
        description: "Hands-on assistance to execute improvement initiatives."
      }
    ],
    process: [
      { step: 1, title: "Scope", description: "Define audit scope and success criteria." },
      { step: 2, title: "Investigate", description: "Gather data through interviews, site visits, and document review." },
      { step: 3, title: "Analyze", description: "Assess findings against best practices and benchmarks." },
      { step: 4, title: "Report", description: "Deliver actionable recommendations and roadmap." }
    ],
    benefits: [
      "Clear improvement priorities",
      "Independent perspective",
      "Quick wins identified",
      "Long-term strategy"
    ],
    accentColor: "from-primary/80 to-accent/80",
  },
  {
    id: "sustainability",
    icon: Shield,
    title: "Sustainability Strategy",
    shortDescription: "Develop and implement sustainable packaging strategies that meet regulatory requirements and consumer expectations.",
    fullDescription: "Sustainability is no longer optional in packaging. We help you develop and implement strategies that reduce environmental impact, meet regulatory requirements, satisfy customer demands, and often reduce costs too.",
    features: [
      {
        title: "Sustainability Assessment",
        description: "Evaluate your current packaging portfolio against sustainability criteria."
      },
      {
        title: "Material Alternatives Evaluation",
        description: "Identify and test sustainable material alternatives for your applications."
      },
      {
        title: "Circularity Strategy",
        description: "Develop strategies for recyclability, reuse, and closed-loop systems."
      },
      {
        title: "Carbon Footprint Reduction",
        description: "Measure and reduce the carbon impact of your packaging."
      }
    ],
    process: [
      { step: 1, title: "Baseline", description: "Assess current environmental impact and sustainability performance." },
      { step: 2, title: "Goals", description: "Define clear sustainability targets aligned with your commitments." },
      { step: 3, title: "Strategy", description: "Develop a practical roadmap to achieve your goals." },
      { step: 4, title: "Execute", description: "Implement changes and track progress against targets." }
    ],
    benefits: [
      "Reduced environmental impact",
      "Regulatory compliance",
      "Enhanced brand reputation",
      "Often reduces costs"
    ],
    accentColor: "from-accent via-accent/80 to-primary",
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};
