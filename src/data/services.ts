import { Package, Truck, ClipboardCheck, Shield, LucideIcon } from "lucide-react";

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
    id: "purchasing",
    icon: Package,
    title: "Packaging Purchasing",
    shortDescription: "Strategic sourcing and supplier management to reduce costs while maintaining quality and reliability across your packaging portfolio.",
    fullDescription: "Our packaging purchasing service takes a strategic approach to sourcing and supplier management. We leverage our extensive industry network and market knowledge to identify the best suppliers, negotiate favorable terms, and establish robust supply agreements that deliver sustained value.",
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
      { step: 1, title: "Discovery", description: "We analyse your current purchasing landscape, spend patterns, and pain points." },
      { step: 2, title: "Strategy", description: "Develop a tailored purchasing strategy aligned with your business objectives." },
      { step: 3, title: "Execution", description: "Manage the sourcing process, from RFQ to contract finalization." },
      { step: 4, title: "Optimisation", description: "Continuous monitoring and improvement of supplier relationships." }
    ],
    benefits: [
      "Average cost savings of 20-50%",
      "Reduced supplier risk",
      "Improved quality consistency",
      "Streamlined purchasing processes"
    ],
    accentColor: "from-primary to-primary/70",
  },
  {
    id: "3pl",
    icon: Truck,
    title: "3PL Integration & Logistics",
    shortDescription: "Capture direct procurement savings without warehouse investment through strategic 3PL partnerships for multi-site operations.",
    fullDescription: "Transitioning to direct manufacturer procurement doesn't require owning a warehouse. By partnering with the right third-party logistics (3PL) provider, you get the cost benefits of direct procurement—20-50% savings—without capital investment in warehousing infrastructure.",
    features: [
      {
        title: "Strategic 3PL Partner Selection",
        description: "Identify partners whose capabilities, cost structure, and technology align with your specific operational requirements."
      },
      {
        title: "Multi-Product Consolidation",
        description: "Leverage 3PL infrastructure for packaging, food, beverages, and marketing materials—reducing delivery complexity."
      },
      {
        title: "Contract Negotiation & Setup",
        description: "Negotiate storage rates, pick/pack fees, shipping terms, and service level agreements."
      },
      {
        title: "Performance Monitoring & Optimization",
        description: "Ongoing cost tracking, delivery performance metrics, and continuous improvement initiatives."
      }
    ],
    process: [
      { step: 1, title: "Discovery", description: "Analyse logistics setup, delivery requirements, and identify 3PL requirements based on volume." },
      { step: 2, title: "Strategy", description: "Develop selection criteria, evaluate providers, and design optimal logistics infrastructure." },
      { step: 3, title: "Execution", description: "Negotiate contracts, implement processes, and transition to direct procurement fulfilment." },
      { step: 4, title: "Optimisation", description: "Monitor performance, optimise costs, and expand to additional product categories." }
    ],
    benefits: [
      "No capital investment required",
      "Flexible & scalable capacity",
      "Multi-product consolidation",
      "Transparent cost structure"
    ],
    accentColor: "from-accent to-accent/70",
  },
  {
    id: "packaging-development",
    icon: ClipboardCheck,
    title: "Packaging Development",
    shortDescription: "End-to-end packaging development support for new products and rebrands, from factory selection and press pass sign-offs to brand alignment across substrates.",
    fullDescription: "Launching a new product or rebranding existing packaging? The stakes are high—wrong materials, color mismatches, or production issues create costly delays, returns, and brand damage. I provide end-to-end packaging development support with 15+ years of production expertise.",
    features: [
      {
        title: "Factory & Equipment Selection",
        description: "Production capability assessment, machinery suitability evaluation, quality control process review, and factory site visits."
      },
      {
        title: "Press Pass Sign-Offs & Production Oversight",
        description: "On-site attendance during press approvals, color matching verification, material specification confirmation, and print quality assessment."
      },
      {
        title: "Brand Alignment Across Substrates",
        description: "Color consistency management, substrate coordination, finish specification, and multi-packaging type coordination."
      },
      {
        title: "Packaging Design & Specification Audits",
        description: "Material optimization analysis, dimensional efficiency review, print complexity assessment, and cost-benefit recommendations."
      }
    ],
    process: [
      { step: 1, title: "Discovery", description: "Understand packaging requirements, brand standards, product specifications, and timeline constraints." },
      { step: 2, title: "Strategy", description: "Identify optimal factory partners, develop production specifications, and establish quality checkpoints." },
      { step: 3, title: "Execution", description: "Manage factory coordination, attend press approvals, verify brand alignment, and oversee production." },
      { step: 4, title: "Optimisation", description: "Conduct packaging audits, identify cost-saving opportunities, and refine specifications for future runs." }
    ],
    benefits: [
      "Risk mitigation through expert oversight",
      "Internal resource relief",
      "Brand consistency assurance",
      "Cost optimisation through audits"
    ],
    accentColor: "from-primary to-accent",
  },
  {
    id: "sustainability",
    icon: Shield,
    title: "Sustainability & EPR Compliance",
    shortDescription: "EPR compliance, plastic tax mitigation, and sustainable packaging strategy for UK food operators.",
    fullDescription: "Extended Producer Responsibility (EPR) and plastic tax regulations have transformed UK packaging compliance—creating both financial obligations and strategic opportunities. I help multi-site food operators navigate these requirements while minimizing costs: EPR fee optimization, plastic tax mitigation, material alternative evaluation, and long-term sustainability strategy.",
    features: [
      {
        title: "EPR Compliance Management",
        description: "Packaging data collection systems, material classification, fee calculation, and regulatory reporting processes."
      },
      {
        title: "Plastic Tax Mitigation",
        description: "Recycled content verification, material alternative evaluation, and cost-benefit analysis."
      },
      {
        title: "Sustainable Material Evaluation",
        description: "Alternative material identification, functional performance testing, and supplier qualification."
      },
      {
        title: "Circular Economy Strategy",
        description: "Packaging design for recyclability, reuse systems, and lifecycle impact analysis."
      },
      {
        title: "Sustainability Reporting",
        description: "Carbon footprint calculation, supply chain traceability, and third-party certification support."
      }
    ],
    process: [
      { step: 1, title: "Discovery", description: "Audit your current packaging portfolio, assess regulatory exposure, and identify compliance gaps." },
      { step: 2, title: "Strategy", description: "Develop EPR reporting processes, evaluate material alternatives, and create sustainability roadmap." },
      { step: 3, title: "Execution", description: "Implement data collection systems, establish supplier verification, and ensure regulatory compliance." },
      { step: 4, title: "Optimisation", description: "Monitor regulatory changes, refine strategies, and continuously improve compliance processes." }
    ],
    benefits: [
      "Regulatory Compliance Confidence",
      "EPR & Plastic Tax Cost Optimisation",
      "Material Transition Guidance",
      "Competitive Sustainability Positioning"
    ],
    accentColor: "from-accent via-accent/80 to-primary",
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};
