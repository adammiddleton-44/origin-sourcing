import { TrendingDown, Clock, Building2, Package, Leaf, Shield, LucideIcon } from "lucide-react";

export interface CaseStudyResult {
  label: string;
  value: string;
  icon: LucideIcon;
  context?: string;
}

export interface CaseStudyPhase {
  title: string;
  duration: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  image: string;
  // Summary content (for listing page)
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  testimonial: string;
  // Extended content (for detail page)
  fullChallenge: string[];
  fullSolution: string[];
  keyMetrics: CaseStudyResult[];
  timeline: CaseStudyPhase[];
  clientQuote: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  relatedServices: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "fmcg-manufacturer",
    client: "Major FMCG Manufacturer",
    industry: "Food & Beverage",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=60",
    challenge: "A leading food manufacturer was experiencing rising packaging costs and struggling with supplier reliability issues that were impacting production schedules.",
    solution: "We conducted a comprehensive packaging audit, renegotiated contracts with key suppliers, and implemented a dual-sourcing strategy to reduce risk and improve competitive positioning.",
    results: [
      { label: "Cost Savings", value: "£310K", icon: TrendingDown },
      { label: "Timeline", value: "6 months", icon: Clock },
      { label: "Suppliers Optimized", value: "12", icon: Building2 },
    ],
    testimonial: "Origin Sourcing transformed our packaging procurement. The savings exceeded our expectations and the new supplier relationships are much stronger.",
    fullChallenge: [
      "This leading UK food manufacturer had grown rapidly over the past five years, but their packaging procurement hadn't kept pace with their expansion.",
      "They were experiencing packaging cost inflation of 15% year-on-year, significantly above market rates, eroding margins on their core product lines.",
      "Supply reliability had become a critical issue, with three production stoppages in the previous year due to packaging material shortages costing them over £150K in lost revenue.",
      "Their procurement team was stretched thin, managing relationships with over 20 suppliers with no clear strategy for consolidation or negotiation leverage."
    ],
    fullSolution: [
      "We began with a comprehensive packaging audit, analysing spend across all categories, mapping supplier relationships, and identifying opportunities for consolidation.",
      "Our analysis revealed that 65% of their spend was concentrated with just 5 suppliers, but they weren't leveraging this volume for better pricing.",
      "We developed a category management strategy, consolidating corrugated packaging with two strategic partners while implementing a dual-sourcing approach for critical materials.",
      "Contract renegotiations secured fixed pricing for 24 months with volume-based rebates, protecting them from market volatility while delivering immediate savings.",
      "We implemented a supplier performance dashboard to track delivery reliability, quality metrics, and cost trends in real-time."
    ],
    keyMetrics: [
      { label: "Annual Cost Savings", value: "£310K", icon: TrendingDown, context: "22% reduction in total packaging spend" },
      { label: "Project Timeline", value: "6 months", icon: Clock, context: "From initial audit to full implementation" },
      { label: "Suppliers Optimised", value: "12", icon: Building2, context: "Consolidated from 22 to 10 strategic partners" },
      { label: "Delivery Reliability", value: "99.2%", icon: Package, context: "Up from 87% pre-engagement" },
    ],
    timeline: [
      { title: "Discovery & Audit", duration: "4 weeks", description: "Comprehensive spend analysis, supplier mapping, and opportunity identification" },
      { title: "Strategy Development", duration: "3 weeks", description: "Category management strategy and supplier consolidation plan" },
      { title: "Supplier Negotiations", duration: "8 weeks", description: "Contract renegotiations with key suppliers and new partner onboarding" },
      { title: "Implementation", duration: "6 weeks", description: "Process changes, system updates, and team training" },
      { title: "Optimisation", duration: "Ongoing", description: "Performance monitoring and continuous improvement" },
    ],
    clientQuote: {
      quote: "Origin Sourcing transformed our packaging procurement from a cost centre into a competitive advantage. The savings exceeded our expectations, but more importantly, we now have supplier relationships built on partnership rather than transaction. The risk reduction alone was worth the investment.",
      author: "Sarah Mitchell",
      role: "Head of Procurement",
      company: "Major FMCG Manufacturer"
    },
    relatedServices: ["procurement", "audit", "supply-chain"]
  },
  {
    id: "retail-chain",
    client: "National Retail Chain",
    industry: "Retail",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60",
    challenge: "A major UK retailer needed to achieve EPR compliance while reducing their environmental impact and managing costs across 200+ product lines.",
    solution: "We developed a comprehensive EPR compliance strategy, redesigned packaging specifications for key product lines, and established new supplier partnerships focused on sustainable materials.",
    results: [
      { label: "Cost Savings", value: "£185K", icon: TrendingDown },
      { label: "Timeline", value: "9 months", icon: Clock },
      { label: "SKUs Optimized", value: "200+", icon: Building2 },
    ],
    testimonial: "Their expertise in EPR compliance was invaluable. We're now fully compliant and have actually reduced costs in the process.",
    fullChallenge: [
      "With Extended Producer Responsibility (EPR) regulations coming into force, this national retail chain faced a significant compliance challenge across their extensive own-brand product range.",
      "Their packaging portfolio included over 200 SKUs with varying materials, many of which would attract high EPR fees under the new regulations.",
      "Initial estimates suggested EPR compliance could cost them over £400K annually if no changes were made to their packaging specifications.",
      "Additionally, consumer pressure for sustainable packaging was mounting, with social media campaigns targeting retailers using excessive plastic packaging."
    ],
    fullSolution: [
      "We conducted a full packaging material audit, categorising every SKU by material type, weight, and recyclability to calculate projected EPR liabilities.",
      "Our analysis identified 45 high-priority SKUs that represented 70% of their projected EPR costs, allowing us to focus efforts where they would have the greatest impact.",
      "We worked with their product development team to redesign packaging specifications, switching from hard-to-recycle materials to widely recycled alternatives.",
      "For their fresh produce range, we introduced compostable packaging options that eliminated EPR fees entirely while improving brand perception.",
      "We established new supplier partnerships with sustainable packaging specialists, negotiating competitive pricing based on consolidated volumes across the range."
    ],
    keyMetrics: [
      { label: "Net Cost Savings", value: "£185K", icon: TrendingDown, context: "After accounting for material switches" },
      { label: "Project Timeline", value: "9 months", icon: Clock, context: "Full range compliance achieved" },
      { label: "SKUs Optimised", value: "200+", icon: Package, context: "Complete own-brand range reviewed" },
      { label: "Plastic Reduction", value: "34%", icon: Leaf, context: "Across all packaging by weight" },
    ],
    timeline: [
      { title: "Compliance Assessment", duration: "6 weeks", description: "Full packaging audit and EPR liability modelling" },
      { title: "Prioritisation", duration: "2 weeks", description: "Impact analysis and high-priority SKU identification" },
      { title: "Specification Redesign", duration: "12 weeks", description: "Material switches and packaging redesign" },
      { title: "Supplier Sourcing", duration: "8 weeks", description: "New supplier identification and contract negotiation" },
      { title: "Rollout", duration: "8 weeks", description: "Phased implementation across product range" },
    ],
    clientQuote: {
      quote: "Their expertise in EPR compliance was invaluable. What could have been a significant cost burden actually became an opportunity to improve our sustainability credentials while reducing costs. We're now fully compliant and leading our sector on sustainable packaging.",
      author: "James Richardson",
      role: "Sustainability Director",
      company: "National Retail Chain"
    },
    relatedServices: ["epr", "sustainability", "procurement"]
  },
  {
    id: "pharmaceutical",
    client: "Pharmaceutical Company",
    industry: "Healthcare",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=60",
    challenge: "A pharmaceutical company faced supply chain disruptions and needed to diversify their packaging supplier base while maintaining strict quality standards.",
    solution: "We conducted supplier qualification assessments, developed a risk-weighted supplier portfolio, and implemented a robust quality management system for packaging procurement.",
    results: [
      { label: "Cost Savings", value: "£220K", icon: TrendingDown },
      { label: "Timeline", value: "12 months", icon: Clock },
      { label: "New Suppliers", value: "8", icon: Building2 },
    ],
    testimonial: "The supply chain transformation has made our business much more resilient. We can now respond quickly to demand changes without quality concerns.",
    fullChallenge: [
      "This mid-sized pharmaceutical company had experienced significant supply chain disruptions during 2020-2022, with their primary packaging supplier unable to meet demand during critical periods.",
      "As a regulated industry, switching suppliers isn't straightforward – each new supplier requires extensive qualification, validation, and regulatory approval processes.",
      "They had become over-reliant on a single supplier for 80% of their primary packaging, creating unacceptable risk for their operation.",
      "Quality incidents had also increased, with three batch recalls in the previous year traced back to packaging material defects."
    ],
    fullSolution: [
      "We developed a comprehensive supplier diversification strategy, identifying potential new suppliers across Europe and establishing clear qualification criteria.",
      "Our team conducted detailed capability assessments of 15 potential suppliers, evaluating not just quality systems but also financial stability, capacity, and disaster recovery plans.",
      "We implemented a risk-weighted supplier portfolio model, ensuring no single supplier would represent more than 40% of any critical packaging category.",
      "A robust quality management system was developed specifically for packaging procurement, including enhanced incoming inspection protocols and supplier audit programmes.",
      "We managed the regulatory submission process for new suppliers, ensuring all documentation met MHRA requirements for manufacturing site changes."
    ],
    keyMetrics: [
      { label: "Annual Cost Savings", value: "£220K", icon: TrendingDown, context: "Through competitive tendering and negotiation" },
      { label: "Project Timeline", value: "12 months", icon: Clock, context: "Including full regulatory approval" },
      { label: "New Qualified Suppliers", value: "8", icon: Building2, context: "Across primary and secondary packaging" },
      { label: "Quality Incidents", value: "Zero", icon: Shield, context: "Post-implementation batch recalls" },
    ],
    timeline: [
      { title: "Risk Assessment", duration: "4 weeks", description: "Current state analysis and risk mapping" },
      { title: "Supplier Identification", duration: "6 weeks", description: "Market research and potential supplier long-listing" },
      { title: "Capability Assessment", duration: "10 weeks", description: "On-site audits and qualification assessments" },
      { title: "Regulatory Submissions", duration: "16 weeks", description: "Documentation preparation and MHRA engagement" },
      { title: "Validation & Onboarding", duration: "12 weeks", description: "Process validation and production qualification" },
    ],
    clientQuote: {
      quote: "The supply chain transformation has made our business much more resilient. We can now respond quickly to demand changes without quality concerns. The rigorous approach to supplier qualification has also improved our overall quality performance – we haven't had a single packaging-related incident since implementation.",
      author: "Dr. Amanda Chen",
      role: "VP Operations",
      company: "Pharmaceutical Company"
    },
    relatedServices: ["supply-chain", "audit", "procurement"]
  },
];

export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudies.find((cs) => cs.id === id);
};
