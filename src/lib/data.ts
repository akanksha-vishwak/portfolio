// src/lib/data.ts

// ===== Types =====
export type Experience = {
  role: string;
  company: string;
  period: string; // e.g. "2024 – Present"
  summary: string;
  highlights?: string[];
  tags?: string[];
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
    role: "Independent Data Scientist / ML Engineer",
    company: "Freelance",
    period: "Jan 2025 – Present",
    summary:
      "Hands-on ML/LLM work for SMBs and startups: automation, RAG, analytics dashboards.",
    highlights: [
      "LLM multi-agent WhatsApp CRM; automated follow-ups and triage",
      "RAG assistant on WHO/NHS guidance for pediatric meal plans",
    ],
    tags: ["Python", "LLMs", "LangChain", "FastAPI", "Postgres", "Azure"],
  },
  {
    role: "Research Data Scientist (ESG/FinTech)",
    company: "Level E Research",
    period: "2022 – 2023",
    summary:
      "Designed ESG-aware signals and automated investment/risk reporting; mentored junior DS.",
    highlights: [
      "Integrated ESG signals into factor models",
      "Automated reporting pipelines; reduced manual effort",
    ],
    tags: ["NLP", "Time-series", "MLOps", "GitLab CI", "Snowflake"],
  },
  {
    role: "Researcher (Long-Lived Particle ML Analysis)",
    company: "CERN / University of Edinburgh",
    period: "2019 – 2022",
    summary:
      "Built GPU-optimized ML pipelines for particle-physics analyses at scale.",
    highlights: [
      "RNN-based pipeline for LLP analysis",
      "CUDA/GPU training and production readiness",
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
