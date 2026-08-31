/**
 * Representative content for the HP Petrochemicals redesign concept.
 *
 * Figures and descriptions are drawn from public HPCL disclosures about the
 * Rajasthan Refinery (HRRL, Pachpadra) dual-feed cracker & petrochemical
 * complex and the Visakh refinery propylene-derivative project. This is an
 * unofficial demo and not an official HPCL communication.
 */

import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  FlaskConical,
  Factory,
  Leaf,
  Recycle,
  ShieldCheck,
  Sparkles,
  Truck,
  Beaker,
  Layers,
  Droplets,
  Wind,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

/**
 * Lightweight in-page navigation for this single page. This concept upgrades
 * only the HP Petrochemicals page view — it does not reproduce the full
 * hindustanpetroleum.com site header / mega-menu.
 */
export const NAV: NavItem[] = [
  { label: "Overview", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Complexes", href: "#segments" },
  { label: "Applications", href: "#applications" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Newsroom", href: "#news" },
  { label: "Contact", href: "#contact" },
];

export const HERO_STATS: { value: string; label: string }[] = [
  { value: "2.4 MMTPA", label: "Planned petrochemical capacity" },
  { value: "₹74,000 Cr", label: "Rajasthan Refinery investment" },
  { value: "9 MMTPA", label: "Integrated refining throughput" },
  { value: "18+", label: "Polymer & chemical grades planned" },
];

export const TRUST_MARKERS: string[] = [
  "Maharatna PSU",
  "Fortune Global 500",
  "Integrated refinery-petrochemical model",
  "UNIPOL™ & Gas-Phase PP technology",
  "Pan-India logistics network",
];

export type Pillar = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export const PILLARS: Pillar[] = [
  {
    icon: Factory,
    title: "Refinery-integrated",
    body: "Petrochemical units are built directly into HPCL's refineries, converting our own naphtha, off-gas and propylene into higher-value polymers and chemicals.",
  },
  {
    icon: FlaskConical,
    title: "Full-slate portfolio",
    body: "Polyethylene, polypropylene, MEG, butene-1 and aromatics such as benzene and toluene — feedstock for packaging, textiles, automotive and infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable supply",
    body: "Backed by a Maharatna balance sheet, a nationwide pipeline and terminal network, and decades of hydrocarbon logistics experience.",
  },
  {
    icon: Leaf,
    title: "Built for the transition",
    body: "Designs incorporate energy-efficient crackers, water recycling, lower flaring and a roadmap toward circular and bio-based polymers.",
  },
];

export type ProductCategory = {
  id: string;
  name: string;
  tagline: string;
  icon: LucideIcon;
  products: {
    name: string;
    code: string;
    description: string;
    uses: string[];
  }[];
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "polymers",
    name: "Polymers",
    tagline: "Polyolefins for packaging, pipes, fibre and moulded goods",
    icon: Boxes,
    products: [
      {
        name: "Polypropylene",
        code: "PP — Homopolymer / RCP / ICP",
        description:
          "Two gas-phase PP lines with a combined ~1,000 KTA capacity and the flexibility to swing between homopolymer, random copolymer and impact copolymer grades.",
        uses: ["Rigid packaging", "Woven sacks & raffia", "Automotive compounds", "Non-woven fabric"],
      },
      {
        name: "Polyethylene",
        code: "HDPE / LLDPE (incl. mLLDPE)",
        description:
          "Swing plants on UNIPOL™ PE technology producing HDPE and LLDPE — including metallocene LLDPE — across a broad density and melt-index range.",
        uses: ["Films & liners", "Blow-moulded containers", "Pressure pipe", "Cable insulation"],
      },
      {
        name: "Butene-1",
        code: "Comonomer grade",
        description:
          "A dedicated butene-1 unit supplying high-purity comonomer for in-house polyethylene production and merchant sale.",
        uses: ["PE comonomer", "Specialty polymers", "Chemical synthesis"],
      },
    ],
  },
  {
    id: "intermediates",
    name: "Chemical Intermediates",
    tagline: "Glycols and derivatives for polyester, coolant and industry",
    icon: Beaker,
    products: [
      {
        name: "Mono-Ethylene Glycol",
        code: "MEG",
        description:
          "Ethylene-derived MEG for the polyester value chain, with di- and tri-ethylene glycol as co-products.",
        uses: ["PET resin & polyester fibre", "Engine coolant / antifreeze", "Heat-transfer fluids"],
      },
      {
        name: "Butadiene",
        code: "1,3-Butadiene",
        description:
          "Extracted from the mixed C4 stream of the cracker for synthetic-rubber and resin manufacturers.",
        uses: ["Synthetic rubber (SBR / PBR)", "ABS resins", "Nylon intermediates"],
      },
    ],
  },
  {
    id: "aromatics",
    name: "Aromatics",
    tagline: "BTX building blocks for resins, fibres and solvents",
    icon: FlaskConical,
    products: [
      {
        name: "Benzene",
        code: "Motor-fuel & industrial grade",
        description:
          "Recovered from reformate and pyrolysis gasoline as a precursor for a wide range of downstream chemicals.",
        uses: ["Styrene / polystyrene", "Phenol & acetone", "Nylon (caprolactam)"],
      },
      {
        name: "Toluene",
        code: "Nitration & commercial grade",
        description:
          "High-purity toluene for solvent, adhesive and downstream chemical applications.",
        uses: ["Paints & coatings solvent", "TDI for polyurethanes", "Octane blending"],
      },
    ],
  },
];

export type Segment = {
  icon: LucideIcon;
  name: string;
  location: string;
  status: string;
  description: string;
  highlights: string[];
};

export const SEGMENTS: Segment[] = [
  {
    icon: Factory,
    name: "Rajasthan Refinery — Dual-Feed Cracker & Petrochemical Complex",
    location: "Pachpadra, Barmer, Rajasthan",
    status: "Under commissioning",
    description:
      "A 9 MMTPA refinery integrated with a dual-feed (naphtha + gas) cracker, designed to yield about 2.4 MMTPA of petrochemicals including polyethylene, polypropylene, benzene, toluene and butadiene.",
    highlights: [
      "~1,000 KTA polyethylene (HDPE + LLDPE swing plants)",
      "~1,000 KTA polypropylene (2 gas-phase lines)",
      "BTX aromatics recovery & butadiene extraction",
      "A 50:50 joint venture — HPCL Rajasthan Refinery Ltd (HRRL)",
    ],
  },
  {
    icon: Layers,
    name: "Visakh Refinery Petrochemical Project",
    location: "Visakhapatnam, Andhra Pradesh",
    status: "Development",
    description:
      "A propylene-derivative petrochemical project bolted onto the modernised Visakh refinery, converting refinery-grade propylene into polypropylene and downstream chemicals for the eastern and southern markets.",
    highlights: [
      "Refinery FCC propylene as feedstock",
      "Polypropylene and specialty derivatives",
      "Coastal logistics for export & coastal movement",
      "Feeds the fast-growing southern India polymer demand",
    ],
  },
  {
    icon: Truck,
    name: "Marketing, Logistics & Customer Solutions",
    location: "Pan-India",
    status: "Operating",
    description:
      "A dedicated polymer marketing organisation, technical service labs and a distributor network that reach converters across every region using HPCL's existing pipeline, rail and road infrastructure.",
    highlights: [
      "Application-development & grade-selection support",
      "Bagged and bulk despatch options",
      "Digital order & dispatch tracking",
      "Co-located with HPCL retail & lubricants supply chain",
    ],
  },
];

export type Application = {
  icon: LucideIcon;
  sector: string;
  copy: string;
  materials: string[];
};

export const APPLICATIONS: Application[] = [
  {
    icon: Boxes,
    sector: "Packaging & FMCG",
    copy: "Lightweight, food-safe films, caps, closures and rigid containers that cut material use while protecting product shelf life.",
    materials: ["PP homopolymer", "HDPE", "LLDPE"],
  },
  {
    icon: Droplets,
    sector: "Water & Infrastructure",
    copy: "Corrosion-free pressure pipe, drainage systems and geomembranes for irrigation, gas and city water networks.",
    materials: ["PE 100 grade HDPE", "PP-R"],
  },
  {
    icon: Truck,
    sector: "Automotive & Mobility",
    copy: "Impact copolymer compounds for bumpers, battery trays and under-the-hood parts that reduce vehicle weight.",
    materials: ["PP impact copolymer", "Butadiene rubber"],
  },
  {
    icon: Layers,
    sector: "Textiles & Fibre",
    copy: "MEG and polyester intermediates plus PP staple fibre for apparel, home textiles and technical non-wovens.",
    materials: ["MEG", "PP fibre grade"],
  },
  {
    icon: Wind,
    sector: "Agriculture",
    copy: "Mulch and greenhouse film, woven sacks and crop-protection packaging engineered for Indian field conditions.",
    materials: ["LLDPE", "PP raffia"],
  },
  {
    icon: Sparkles,
    sector: "Consumer & Healthcare",
    copy: "Clarified random-copolymer for housewares and medical devices that need clarity, sterilisability and toughness.",
    materials: ["PP random copolymer", "mLLDPE"],
  },
];

export type Sustain = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export const SUSTAINABILITY: Sustain[] = [
  {
    icon: Recycle,
    title: "Circularity roadmap",
    body: "Design-for-recycling grades, mono-material structures and participation in India's Extended Producer Responsibility framework for plastics.",
  },
  {
    icon: Droplets,
    title: "Water stewardship",
    body: "Zero-liquid-discharge philosophy, treated-effluent reuse and rainwater harvesting at the Rajasthan complex — critical in a water-scarce region.",
  },
  {
    icon: Wind,
    title: "Lower-carbon operations",
    body: "High-efficiency cracker furnaces, flare-gas recovery, renewable power sourcing and a green-hydrogen evaluation for process heat.",
  },
  {
    icon: Leaf,
    title: "Community & biodiversity",
    body: "Skill development, local employment and green-belt afforestation around plant sites under HPCL's CSR programme.",
  },
];

export const NEWS: { date: string; tag: string; title: string; blurb: string }[] = [
  {
    date: "Aug 2026",
    tag: "Projects",
    title: "Rajasthan Refinery moves into staged commissioning",
    blurb:
      "Pre-commissioning of the cracker and polymer units progresses as HPCL targets first petrochemical output from the Pachpadra complex.",
  },
  {
    date: "Jul 2026",
    tag: "Market",
    title: "Polymer marketing team expands technical-service network",
    blurb:
      "New application-development labs planned in the north and west to support converters ahead of first sales.",
  },
  {
    date: "Jun 2026",
    tag: "Sustainability",
    title: "Circular-polymer partnerships under evaluation",
    blurb:
      "HPCL is assessing mechanical and advanced-recycling collaborations to complement virgin polymer grades.",
  },
];

export const ABOUT_HPCL = {
  summary:
    "Hindustan Petroleum Corporation Limited (HPCL) is a Maharatna Central Public Sector Enterprise and a Fortune Global 500 company, majority-owned through Oil and Natural Gas Corporation (ONGC).",
  paragraphs: [
    "HPCL operates a nationwide downstream energy business: refineries at Mumbai, Visakhapatnam and — through joint ventures — at Bathinda and Pachpadra, together with a vast marketing infrastructure of retail outlets, LPG distributors, aviation fuel stations, lubricant plants and cross-country pipelines.",
    "Petrochemicals are a strategic growth vector for the Corporation. By integrating cracker and derivative units with existing refineries, HPCL aims to raise the value captured from every barrel of crude while supporting the Government of India's push for self-reliance (Aatmanirbhar Bharat) in polymers and chemicals.",
    "The company's petrochemical ambitions are anchored by the Rajasthan Refinery (HRRL) at Pachpadra and a propylene-derivative project at Visakhapatnam, positioning HPCL to serve India's rising per-capita polymer demand from domestic capacity.",
  ],
  facts: [
    { label: "Status", value: "Maharatna PSU" },
    { label: "Sector", value: "Integrated downstream energy" },
    { label: "Refineries", value: "Mumbai · Visakh · JV: Bathinda, Pachpadra" },
    { label: "Listing", value: "BSE · NSE (subsidiary of ONGC)" },
  ],
  icon: Factory,
};
