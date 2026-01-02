import {
  Brain,
  Shield,
  Rocket,
  Target,
  Zap,
  Globe,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  highlights: string[];
  benefits: string[];
  frameworks?: string[];
  featured?: boolean;
  stats?: { value: string; label: string };
}

export const services: Service[] = [
  {
    slug: "ai-strategy-transformation",
    title: "AI Strategy & Enterprise Transformation",
    shortTitle: "AI Strategy",
    description:
      "Unlock competitive advantage with AI. We guide executives through AI adoption—from strategy to implementation—delivering measurable ROI and sustainable innovation.",
    longDescription:
      "Our AI Strategy & Enterprise Transformation service helps forward-thinking organizations harness artificial intelligence to drive growth, efficiency, and competitive differentiation. We work directly with C-suite executives to develop pragmatic AI roadmaps, identify high-impact use cases, and build the organizational capabilities needed for successful AI adoption. From generative AI implementation to intelligent automation, we turn AI potential into business reality.",
    icon: Brain,
    highlights: [
      "GenAI Implementation",
      "AI Roadmap",
      "Use Case Discovery",
      "ROI Optimization",
    ],
    benefits: [
      "C-suite AI strategy workshops and executive alignment",
      "Identify and prioritize high-ROI AI opportunities",
      "Vendor-agnostic technology selection and architecture",
      "Build internal AI capabilities and governance frameworks",
      "Measure and communicate AI value to stakeholders",
      "De-risk AI investments with proven implementation methodologies",
    ],
    featured: true,
    stats: { value: "40%", label: "Avg. efficiency gain" },
  },
  {
    slug: "cyber-resilience-advisory",
    title: "Cyber Resilience & Executive Risk Advisory",
    shortTitle: "Cyber Resilience",
    description:
      "Board-level cybersecurity advisory that translates technical risk into business language. Build resilience that protects reputation, revenue, and stakeholder trust.",
    longDescription:
      "Our Cyber Resilience & Executive Risk Advisory service provides strategic cybersecurity guidance at the board and executive level. We help leaders understand cyber risk in business terms, make informed investment decisions, and build organizational resilience against sophisticated threats. Our advisory approach ensures cybersecurity becomes a business enabler rather than a cost center.",
    icon: Shield,
    highlights: [
      "Board Advisory",
      "Risk Quantification",
      "Incident Readiness",
      "CISO-as-a-Service",
    ],
    benefits: [
      "Translate technical risk into board-ready business language",
      "Quantify cyber risk in financial terms for investment decisions",
      "Build executive confidence in security posture",
      "Prepare leadership for cyber incidents with tabletop exercises",
      "Fractional CISO support for growing organizations",
      "Benchmark against peers and industry standards",
    ],
    frameworks: [
      "NIST CSF 2.0",
      "ISO 27001",
      "ACSC Essential 8",
      "SOC 2",
    ],
    stats: { value: "72h", label: "Response time SLA" },
  },
  {
    slug: "digital-acceleration",
    title: "Digital Acceleration & Cloud Excellence",
    shortTitle: "Digital Acceleration",
    description:
      "Accelerate your digital journey with strategic cloud adoption, modern workplace transformation, and technology optimization that delivers immediate business value.",
    longDescription:
      "Our Digital Acceleration & Cloud Excellence service fast-tracks your organization's digital capabilities. We combine strategic vision with hands-on expertise to modernize infrastructure, optimize cloud investments, and enable agile ways of working. Whether you're migrating to cloud, optimizing existing environments, or building modern workplace capabilities, we deliver outcomes that matter.",
    icon: Rocket,
    highlights: [
      "Cloud Strategy",
      "M365 Optimization",
      "Modern Workplace",
      "Cost Optimization",
    ],
    benefits: [
      "Strategic cloud roadmaps aligned to business objectives",
      "Maximize ROI from Microsoft 365 and Azure investments",
      "Enable secure, productive hybrid work environments",
      "Reduce cloud waste with FinOps best practices",
      "Accelerate time-to-value for digital initiatives",
      "Build scalable foundations for AI and automation",
    ],
    stats: { value: "30%", label: "Avg. cost reduction" },
  },
  {
    slug: "strategic-technology-advisory",
    title: "Strategic Technology Advisory",
    shortTitle: "Tech Advisory",
    description:
      "Independent technology counsel for critical decisions. From M&A due diligence to vendor negotiations, we provide the expertise executives need to make confident technology investments.",
    longDescription:
      "Our Strategic Technology Advisory service provides independent, expert guidance for your most critical technology decisions. We serve as trusted advisors to executives navigating complex technology landscapes—whether evaluating acquisitions, selecting strategic vendors, or optimizing technology investments. Our vendor-agnostic approach ensures recommendations are always in your best interest.",
    icon: Target,
    highlights: [
      "M&A Due Diligence",
      "Vendor Advisory",
      "IT Strategy",
      "Investment Analysis",
    ],
    benefits: [
      "Independent technology due diligence for M&A transactions",
      "Strategic vendor selection and contract negotiation support",
      "Technology investment analysis and business case development",
      "IT strategy development aligned to corporate objectives",
      "Expert witness and dispute resolution support",
      "Technology transformation program oversight",
    ],
    stats: { value: "$50M+", label: "Deals advised" },
  },
  {
    slug: "intelligent-automation",
    title: "Intelligent Automation & Process Excellence",
    shortTitle: "Automation",
    description:
      "Transform operations with AI-powered automation. From RPA to intelligent workflows, we identify and implement automation opportunities that scale across your enterprise.",
    longDescription:
      "Our Intelligent Automation & Process Excellence service helps organizations achieve operational excellence through strategic automation. We combine process expertise with cutting-edge automation technologies—including AI, RPA, and intelligent workflows—to eliminate manual work, reduce errors, and free your teams to focus on high-value activities. Our approach ensures automation initiatives deliver sustained business value.",
    icon: Zap,
    highlights: [
      "AI Automation",
      "Process Mining",
      "RPA Strategy",
      "Workflow Intelligence",
    ],
    benefits: [
      "Identify high-impact automation opportunities across operations",
      "Implement AI-powered document processing and analysis",
      "Build scalable automation centers of excellence",
      "Integrate automation with existing enterprise systems",
      "Measure and optimize automation ROI continuously",
      "Upskill teams to maintain and extend automation capabilities",
    ],
    stats: { value: "10x", label: "Process speedup" },
  },
  {
    slug: "asia-pacific-expansion",
    title: "Asia-Pacific Technology Expansion",
    shortTitle: "APAC Expansion",
    description:
      "Navigate APAC's complex technology landscape with confidence. Local expertise across regulatory compliance, market entry, and regional partnership strategies.",
    longDescription:
      "Our Asia-Pacific Technology Expansion service helps organizations succeed in the region's dynamic markets. With deep expertise across Australia, Hong Kong, Singapore, and Greater China, we guide technology expansion strategies, navigate complex regulatory environments, and build sustainable regional operations. Our local presence and relationships accelerate your APAC success.",
    icon: Globe,
    highlights: [
      "Market Entry",
      "Regulatory Navigation",
      "Regional Strategy",
      "Local Partnerships",
    ],
    benefits: [
      "Navigate data sovereignty and privacy regulations across APAC",
      "Technology market entry strategy and partner selection",
      "Regional compliance including China PIPL, PDPA, and Privacy Act",
      "Local vendor ecosystem navigation and relationship building",
      "Cross-border data architecture and cloud strategy",
      "Cultural and business practice advisory for regional success",
    ],
    frameworks: [
      "China PIPL",
      "Hong Kong Cybersecurity",
      "PDPA Singapore",
      "Australia Privacy Act",
    ],
    stats: { value: "15+", label: "Years APAC experience" },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
