// src/lib/data.ts

// ===== Types =====
export type Experience = {
  slug: string;                       
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights?: string[];
  tags?: string[];
  details?: string[];                
  links?: { label: string; href: string }[]; 
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: number | string;
  tags: string[];
  contentHtml: string; // rendered via dangerouslySetInnerHTML
  links?: { demo?: string; repo?: string };
};

export type Education = {
  degree: string;
  institution: string;
  period: string;    
  location?: string;
  details?: string[]; 
};

export type Publication = {
  slug: string;
  title: string;
  venue?: string;        // journal / conference
  date?: string;         // ISO like "2024-08-16"
  authorsShort?: string; // e.g., "A. Vishwakarma et al."
  tags?: string[];
  links?: { doi?: string; arxiv?: string; url?: string; slides?: string; code?: string };
};

export type Skills = Record<string, string[]>;

// ===== Contact (used in Home + Contact pages) =====
export const CONTACT = {
  email: "akanksha.vishwak@gmail.com",
  linkedin: "https://www.linkedin.com/in/avishwak/",
  github: "https://github.com/akanksha-vishwak", 
  location: "Boston, MA",                
  phone: "",                               
};

// ===== Experience (used by <ExperienceTimeline/>) =====
export const experiences: Experience[] = [
  {
    slug: "freelance-ds-ml-2025",
    role: "Independent Data Scientist / ML Engineer",
    company: "Freelance",
    period: "2025",
    summary:
      "Built LLM automations and a RAG nutrition assistant for SMB/startup clients.",
    highlights: [
      "WhatsApp CRM multi-agent automations (~80% workload reduction)",
      "RAG assistant on WHO/NHS content (+40% parent engagement)",
    ],
    details: [
      "Designed tool-using agents for triage, templated replies, and human handoff.",
      "Shipped FastAPI services with auth, logging, and evaluation harnesses.",
      "Implemented retrieval evals (coverage/groundedness) and feedback loop.",
    ],
    tags: ["LLMs", "Agents", "RAG", "Python", "LangChain", "FastAPI", "Postgres"],
  },
  {
    slug: "level-e-research-2022-2023",
    role: "Research Data Scientist (ESG/FinTech)",
    company: "Level E Research",
    period: "2022 – 2023",
    summary:
      "Integrated ESG signals into factor models and automated reporting; mentored DS team.",
    highlights: ["~+5% over S&P 500 baseline (backtests)", "−70% manual reporting effort"],
    details: [
      "Built NLP/time-series features; productionized backtests and risk reports.",
      "Set up GitLab CI for data/ML workflows and artifact versioning.",
      "Partnered with PMs to translate signals into portfolio impact.",
    ],
    tags: ["NLP", "Time-series", "MLOps", "GitLab CI", "Snowflake"],
  },
  {
    slug: "edinburgh-cern-2019-2022",
    role: "Postdoctoral Research Fellow",
    company: "University of Edinburgh / CERN (ATLAS)",
    period: "2019 – 2022",
    summary:
      "Prepared ATLAS for HL-LHC; simulation optimization and ML analysis for LLP searches.",
    highlights: [
      "Improved detector geometry → ~19% CPU reduction",
      "Collaborated with NVIDIA on GPU strategy",
    ],
    details: [
      "Developed/optimized ML methods (incl. RNNs) for particle classification (~20% accuracy gain).",
      "Organized cross-disciplinary workshops; co-supervised two PhD students.",
      "Media outreach & expert interview on AI in physics; GPU-accelerated training pipelines.",
      "Tools: Python, C++, ROOT, CUDA, RNNs, Athena, Git, GRID, Jupyter, HPC.",
    ],
    links: [
      { label: "ACAT talk", href: "https://indico.cern.ch/event/1330797/contributions/5801194/" },
    ],
    tags: ["PyTorch", "CUDA", "HPC", "Physics"],
  },
];

// ===== Skills (used by <SkillsGrid/>) =====
export const skills: Skills = {
  "Languages": ["Python", "SQL", "C++", "Bash"],
  "ML/AI": [
    "PyTorch",
    "TensorFlow",
    "scikit-learn",
    "Hugging Face",
    "LangChain",
    "XGBoost",
  ],
  "Data & Cloud": ["Postgres", "MongoDB", "Snowflake", "Spark", "AWS", "Azure"],
  "MLOps & Apps": ["MLflow", "FastAPI", "Docker", "Streamlit"],
  "Visualization": ["Tableau", "Power BI", "Plotly"],
};

// ===== Projects (used by /projects and cards on Home) =====
export const projects: Project[] = [
  {
    slug: "llm-whatsapp-agents",
    title: "LLM Agents for WhatsApp Business",
    subtitle: "Automating SMB lead triage & support",
    year: 2025,
    tags: ["LLMs", "Agents", "WhatsApp", "Automation"],
    contentHtml: `
      <p><strong>Problem.</strong> SMBs were losing leads to slow follow-ups and repetitive support.</p>
      <p><strong>Solution.</strong> Multi-agent system orchestrating tools for triage, templated replies, and human handoff via WhatsApp Business API.</p>
      <ul>
        <li>~80% reduction in manual workload (internal estimate)</li>
        <li>Stack: Python · FastAPI · LangChain · Postgres</li>
      </ul>
    `,
    links: { demo: "#" },
  },
  {
    slug: "babynutriai-rag",
    title: "BabyNutriAI — Pediatric Nutrition RAG",
    subtitle: "Evidence-based meal plans from WHO/NHS guidance",
    year: 2025,
    tags: ["RAG", "Healthcare", "LLMs"],
    contentHtml: `
      <p>Parents needed trustworthy guidance tailored to age and preferences.</p>
      <p>Built a retrieval-augmented pipeline with domain-specific chunking and guardrails.</p>
      <ul>
        <li>Observed +engagement in a pilot cohort</li>
        <li>Stack: Python · FAISS · FastAPI · Azure OpenAI</li>
      </ul>
    `,
    links: { demo: "#" },
  },
  {
    slug: "llp-ml-pipeline",
    title: "LLP Analysis — RNN Pipeline at CERN",
    subtitle: "End-to-end pipeline for long-lived-particle searches",
    year: 2022,
    tags: ["PyTorch", "RNN", "CUDA", "HPC"],
    contentHtml: `
      <p>GPU-optimized sequence models processing high-volume detector data; production-ready training/inference.</p>
    `,
  },
];

// ===== Blog (used by /blog) =====
export const blogPosts = [
  {
    slug: "data-sci-portfolio-checklist",
    title: "A Recruiter-Friendly Data Science Portfolio Checklist",
    date: "2025-08-01",
    tag: "Career",
    excerpt:
      "What hiring managers scan first, and how to optimize your portfolio for clarity and impact.",
    contentHtml: `
      <p>Keep the hero lean, show outcomes, and link to live demos. Recruiters skim first, then dive.</p>
    `,
  },
  {
    slug: "rag-evals-practical",
    title: "Practical RAG Evaluations: From NDCG to Human-in-the-Loop",
    date: "2025-07-15",
    tag: "LLMs",
    excerpt:
      "Metrics that correlate with user trust, plus a lightweight feedback loop.",
    contentHtml: `
      <p>Beyond exact match: retrieval coverage and groundedness matter for user trust.</p>
    `,
  },
];

export const education: Education[] = [
  {
    degree: "PhD, Particle Physics",
    institution: "University of Edinburgh",
    period: "2015 – 2019",
    location: "Edinburgh, UK",
    details: [
      "Research focus: ML pipelines for long-lived particle searches",
      "Collaborated with CERN; GPU-accelerated training and inference",
    ],
  },
  {
    degree: "Integrated M.Sc., Physics",
    institution: "—",
    period: "2010 – 2015",
    location: "",
    details: [
      "Foundations in statistics, numerical methods, and scientific computing",
    ],
  },
];

export const publications: Publication[] = [
  {
    slug: "atlas-geant4-sim-optimizations-2024",
    title: "ATLAS Geant4 Simulation Optimizations",
    date: "2024-08-16",
    authorsShort: "A. Vishwakarma et al.",
    tags: ["peer-reviewed"],
    links: { url: "#" } // drop DOI/arXiv here when ready
  },
  {
    slug: "optimizing-atlas-geant4-2023",
    title: "Optimizing the ATLAS Geant4 detector simulation software",
    date: "2023-03-13",
    authorsShort: "A. Vishwakarma et al.",
    links: { url: "#" }
  },
  {
    slug: "tau-reco-run2-run3-2022",
    title: "Tau Reconstruction in Run2 and Run3",
    date: "2022-09-15",
    authorsShort: "A. Vishwakarma et al.",
    links: { url: "#" }
  },
  {
    slug: "ttbar-xsec-heavy-flavour-jets-jhep-2019",
    title:
      "Measurements of fiducial and differential cross-sections of tt production with additional heavy-flavour jets in pp collisions at √s = 13 TeV with the ATLAS detector",
    venue: "JHEP",
    date: "2019-04-04",
    authorsShort: "ATLAS Collaboration (incl. A. Vishwakarma)",
    tags: ["peer-reviewed"],
    links: { doi: "#", arxiv: "#" }
  },
  {
    slug: "top-quark-xsec-proc-2019",
    title: "Measurements of top quark production cross-section at ATLAS",
    venue: "Nuclear and Particle Physics Proceedings",
    date: "2019-02-20",
    authorsShort: "ATLAS Collaboration (incl. A. Vishwakarma)",
    links: { doi: "#" }
  },
  {
    slug: "hh-to-ggbb-prd-2016",
    title:
      "Search for two Higgs bosons in final states containing two photons and two bottom quarks in proton-proton collisions at 8 TeV",
    venue: "Physical Review D",
    date: "2016-09-29",
    authorsShort: "ATLAS Collaboration (incl. A. Vishwakarma)",
    tags: ["peer-reviewed"],
    links: { doi: "#" }
  }
];