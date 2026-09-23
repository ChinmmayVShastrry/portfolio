/**
 * ════════════════════════════════════════════════════════════════
 *  SITE CONTENT — the only file you need to edit
 * ════════════════════════════════════════════════════════════════
 *  Everything visible on the site (name, bio, skills, projects,
 *  experience, testimonials, socials, SEO tags) lives here.
 *  Components read from this file — you never need to touch them.
 *
 *  Built from the AI Engineer résumé (Aug 2026).
 *  Positioned for Data Analyst / Data Scientist / AI Engineer roles.
 *  Anything marked  // TODO  still needs your attention.
 * ════════════════════════════════════════════════════════════════
 */

import {
  Bot,
  Database,
  BrainCircuit,
  BarChart3,
  Rocket,
  CandlestickChart,
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

/* ────────────────────────────────────────────────
 *  SEO / social sharing tags (used in app/layout.js)
 * ──────────────────────────────────────────────── */
export const siteMeta = {
  title: "Chinmmay V Shastrry — AI / GenAI Engineer",
  description:
    "AI/GenAI Engineer in Bengaluru building hybrid RAG pipelines, agentic LLM workflows, and deep-learning systems — with five years in financial markets behind the technical decisions.",
  url: "https://chinmayshastryportfolio.vercel.app",
  // 1200×630 preview card shown when the site is shared on LinkedIn,
  // X, WhatsApp etc. Regenerate it if the name or tagline changes.
  ogImage: "/images/og.png",
  keywords: [
    "AI Engineer",
    "GenAI Engineer",
    "Data Scientist",
    "Data Analyst",
    "Machine Learning",
    "RAG",
    "LLM",
    "LangChain",
    "Bengaluru",
  ],
};

/* ────────────────────────────────────────────────
 *  Profile / hero section
 * ──────────────────────────────────────────────── */
export const profile = {
  name: "Chinmmay V Shastrry",
  location: "Bengaluru, India",
  email: "chinmay.v.shastry@gmail.com",

  // Cities you're open to working in — shown in the hero and in Contact.
  // Recruiters filter hard on location, which is why it appears twice.
  openToCities: ["Bengaluru", "Hyderabad", "Pune"],

  // Small pulsing badge at the top of the hero.
  // Set to "" to hide it (e.g. once you've accepted a role).
  availability: "Available to join immediately",

  // The typing/rotating tagline in the hero. These deliberately span
  // all three role families you're targeting.
  roles: [
    "AI / GenAI Engineer",
    "Data Scientist",
    "Data Analyst",
    "RAG & LLM Systems Builder",
  ],

  // One-liner under the tagline
  intro:
    "I build RAG systems, LLM applications and machine-learning models, and I came to them after five years managing investment portfolios. Finance and AI is the intersection I want to keep working in.",

  // Résumé download link (file lives in /public). Set to "" to hide the button.
  resumeUrl: "/Chinmmay_V_Shastrry_Resume.pdf",
};

/* ────────────────────────────────────────────────
 *  Navbar links — each href must match a section id
 * ──────────────────────────────────────────────── */
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Why Me", href: "#why" },
  { label: "What I Do", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/* ────────────────────────────────────────────────
 *  About section
 * ──────────────────────────────────────────────── */
export const about = {
  photo: "/images/profile.jpg",
  photoAlt: "Portrait of Chinmmay V Shastrry",

  // Each string renders as its own paragraph
  bio: [
    "I'm Chinmmay V Shastrry, an AI engineer in Bengaluru. Before this I ran my own financial practice for about five years — portfolio management for a client list that passed fifty, an AngelOne sub-brokership, ITR filing, and a Tata AIA insurance agency. Whatever the client needed, basically. A lot of it came down to sitting with someone until they were comfortable placing their own order and setting a stop loss, which is good training for explaining complicated things to people who are nervous.",
    "In January 2025 I moved into technology. I don't think of it as leaving finance — I still think in it — I just wanted better tools for the problems I'd already spent five years on. It was early enough that AI wasn't the noise it is now, which in hindsight I'm glad about.",
    "I did the DataMites AI engineering programme at their Marathahalli branch, then an eight-month internship at Rubixe from October 2025 to June 2026, building computer vision and NLP systems — including a sign-language recogniser that reached 99.87% accuracy across 24 gestures. From there I worked forward through transformers into LLMs, RAG, and now agentic systems, which is where most of my own projects sit. Three are live and you can click through from this page.",
    "None of it came easily at first. Coming from finance, the coding environment took about a year and a half before it felt genuinely comfortable, and the concepts underneath it — machine learning, deep learning, transformers, retrieval, agents — took real work to get straight.",
    "What I got from that stretch is a realistic sense of what learning something hard actually costs, and I've kept paying it. Right now I'm building agentic AI applications while working through MCP, FastAPI, Flask, Docker and Kubernetes — the bigger build is a multi-agent, multi-layer trading bot, which puts finance and AI in the same project. I still check the markets most mornings.",
  ],

  // Quick facts / stats shown next to the bio
  stats: [
    { value: "5+", label: "Years in financial markets" },
    { value: "10+", label: "AI/ML projects built" },
    { value: "50+", label: "Clients advised" },
    { value: "3", label: "AI programmes & certifications" },
  ],
};

/* ────────────────────────────────────────────────
 *  "Why should you hire me?" section
 *  Keep these honest and specific — vague strengths ("hard worker",
 *  "team player") are the fastest way to lose a reader.
 * ──────────────────────────────────────────────── */
export const whyHireMe = {
  eyebrow: "Why Me",
  title: "Why should you hire me?",
  blurb: "Fair question. Here's the honest version.",
  reasons: [
    {
      title: "I bring a domain most AI engineers don't have",
      body: "Five years of managing real client money — portfolio management, a sub-brokership, an insurance agency — means nobody has to explain what a drawdown is, why a compliance document can't be loosely paraphrased, or what an analyst actually does all day. If your problem touches money, I've already lived in it.",
    },
    {
      title: "I've actually shipped things",
      body: "Three of my projects are live right now with public links, and the code is on GitHub. You can click through and judge them yourself before we ever get on a call.",
    },
    {
      title: "I can explain the complicated part",
      body: "I spent years telling clients why their portfolio moved, to people who were anxious and didn't speak the jargon. That turns out to be the same skill as explaining a model's output to whoever has to sign off on it.",
    },
    {
      title: "I adapt, and I've already proved it once",
      body: "I came into this from finance with no coding background and no CS degree, and I'm now shipping AI systems. So when a stack has something I haven't used, it's a ramp-up I've done before. Right now that's MCP, FastAPI, Docker and Kubernetes, in my own time.",
    },
  ],
};

/* ────────────────────────────────────────────────
 *  "What I Do" service cards
 *  icon: any icon imported from lucide-react at the top of this file
 * ──────────────────────────────────────────────── */
export const services = [
  {
    icon: Bot,
    title: "GenAI & LLM Engineering",
    description:
      "Agentic workflows, prompt and context engineering, and multi-model pipelines built with LangChain, LangGraph, and the major provider APIs.",
  },
  {
    icon: Database,
    title: "RAG & Retrieval Systems",
    description:
      "Hybrid retrieval that combines BM25 with dense semantic search and CrossEncoder reranking. I use RAGAS scores to check the retrieval is actually improving.",
  },
  {
    icon: BrainCircuit,
    title: "Machine & Deep Learning",
    description:
      "End-to-end pipelines across NLP and computer vision — CNNs, transfer learning, and gradient boosting, owned from preprocessing to evaluation.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Insight",
    description:
      "Feature engineering, time-series work and cohort analysis, plus dashboards in Power BI and Tableau that are built to answer a question someone actually asked.",
  },
  {
    icon: Rocket,
    title: "Deployment & Delivery",
    description:
      "Getting models in front of real users — Streamlit Cloud, Gradio, and HuggingFace Spaces, with caching, retries, and logging that hold up in use.",
  },
  {
    icon: CandlestickChart,
    title: "Finance × AI",
    description:
      "Equity markets, derivatives and portfolio risk, learned over five years of managing real money for clients. It means I can read a finance problem before I start modelling it.",
  },
];

/* ────────────────────────────────────────────────
 *  Skills, grouped by category.
 *  `note` renders as a small caption under the group.
 * ──────────────────────────────────────────────── */
export const skillGroups = [
  {
    title: "Languages & Data",
    items: ["Python", "SQL", "Pandas", "NumPy", "SciPy"],
  },
  {
    title: "GenAI & LLM",
    items: [
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "OpenAI API",
      "Anthropic Claude API",
      "Google Gemini API",
      "Groq API",
      "OpenRouter",
      "Omniroute",
      "HuggingFace",
      "Ollama",
      "Gemma",
      "NVIDIA Nemotron",
      "Prompt Engineering",
      "Agentic Workflows",
      "Multimodal Extraction",
    ],
  },
  {
    title: "Retrieval & Vector Search",
    items: [
      "RAG",
      "FAISS",
      "ChromaDB",
      "Pinecone",
      "BM25",
      "CrossEncoder Reranking",
      "Semantic Chunking",
      "Hybrid Search",
      "RAGAS Evaluation",
    ],
  },
  {
    title: "Machine Learning & Deep Learning",
    items: [
      "scikit-learn",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "XGBoost",
      "Random Forest",
      "CNN",
      "Transfer Learning",
      "SHAP",
    ],
  },
  {
    title: "Analysis, Visualization & BI",
    items: [
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Power BI",
      "Tableau",
      "Feature Engineering",
      "Time Series",
      "Cohort Analysis",
    ],
  },
  {
    title: "Deployment & Tooling",
    items: [
      "Streamlit",
      "Streamlit Cloud",
      "Gradio",
      "HuggingFace Spaces",
      "Git",
      "GitHub",
      "REST APIs",
      "AWS EC2 / SageMaker",
    ],
  },
  {
    title: "AI-Assisted Development",
    items: [
      "Claude",
      "Claude Code",
      "Cowork",
      "OpenAI Codex",
      "Cursor",
      "Antigravity",
      "GitHub Copilot",
      "Gemini CLI",
    ],
    note: "Claude, Claude Code and Cowork are my daily drivers; I've worked across the rest of the agentic-coding landscape too.",
  },
];

/* Currently learning — shown as a separate, clearly-labelled group.
   Keeping this honest and visible reads as momentum, and it's the
   first thing to promote into skillGroups once you've shipped with it. */
export const learning = {
  title: "Currently growing into",
  note: "Actively building with these right now — listed here rather than above until they're in something I've shipped.",
  items: [
    "FastAPI",
    "Flask",
    "MCP (Model Context Protocol)",
    "Pydantic / Structured Outputs",
    "System Design",
    "Docker",
    "Kubernetes",
    "MLflow",
    "GitHub Actions",
  ],
};

/* ────────────────────────────────────────────────
 *  Projects
 *  - liveUrl / sourceUrl: set to "" to hide that button
 *  - featured: true adds a small badge on the card
 * ──────────────────────────────────────────────── */
export const projects = [
  {
    featured: true,
    title: "StoxAI — Indian Market Research",
    description:
      "Research assistant for Nifty 250 stocks, commodities and indices. Pulls live price data and financial news, runs LLM sentiment analysis across it, and answers follow-up questions through a tool-calling chatbot that can compare assets in plain English. Built as a research companion, so it surfaces catalysts and risks and leaves the call to the investor.",
    image: "/images/projects/finance-assistant.svg",
    alt: "StoxAI Indian market research assistant preview",
    tags: ["LLM", "Finance", "Tool Calling", "GPT-4o-mini", "Streamlit"],
    liveUrl: "https://stoxai-market.streamlit.app/",
    sourceUrl: "https://github.com/ChinmayShastry/StoxAI",
  },
  {
    featured: true,
    title: "RAG Atlas — Interactive RAG Explainer",
    description:
      "A walkthrough of six RAG architectures — naive, advanced, agentic, multi-hop, graph and hierarchical — run against the same corpus and question so the architecture is the only thing that changes. Nothing is simulated: real chunking, 1536-dimension embeddings, cosine ranking, a cross-encoder, streamed generation, and a second model grading the first.",
    image: "/images/projects/rag-atlas.svg",
    alt: "RAG Atlas interactive RAG explainer preview",
    tags: ["RAG", "Architectures", "Evaluation", "Guardrails", "Embeddings"],
    liveUrl: "https://rag-atlas-learn.vercel.app",
    sourceUrl: "https://github.com/ChinmayShastry/rag-atlas",
  },
  {
    title: "DocChat AI — Hybrid RAG",
    description:
      "Document intelligence combining BM25 keyword retrieval, dense semantic search, and CrossEncoder reranking — lifting RAGAS context precision from ~78% to 100% on the evaluation set. Multi-document support with token-level streaming.",
    image: "/images/projects/docchat.svg",
    alt: "DocChat AI hybrid RAG project preview",
    tags: ["RAG", "LangChain", "FAISS", "BM25", "Reranking"],
    liveUrl: "https://docchat-ai.streamlit.app",
    sourceUrl: "https://github.com/ChinmayShastry/docchat-ai",
  },
  {
    // `status` renders an "in progress" badge instead of the Featured one.
    // Remove it and add liveUrl/sourceUrl once the repo is public.
    status: "In progress",
    title: "Multi-Agent Trading System",
    description:
      "A layered multi-agent system for market analysis — separate agents handling market data, signal generation, risk checks and execution logic, coordinated rather than run as one monolith. This is the build where the finance background and the agentic AI work meet.",
    image: "/images/projects/trading-bot.svg",
    alt: "Multi-agent trading system project preview",
    tags: ["Agentic AI", "Multi-Agent", "Finance", "Python"],
    liveUrl: "",
    sourceUrl: "",
  },
  {
    title: "AI Résumé Analyzer",
    description:
      "ATS-style résumé scoring with skill-gap analysis powered by sentence-transformers, plus AI rewriting suggestions. Multi-step reasoning (parse → extract → analyse → output) produces role-specific feedback through a live scoring dashboard.",
    image: "/images/projects/resume-analyzer.svg",
    alt: "AI résumé analyzer project preview",
    tags: ["NLP", "Sentence Transformers", "ATS", "Agentic AI", "Streamlit"],
    liveUrl: "https://resume-aianalyzer.streamlit.app/",
    sourceUrl: "https://github.com/ChinmayShastry/ai-resume-analyzer",
  },
  {
    title: "DocuMind — Enterprise RAG",
    description:
      "A RAG assistant built for documents where a wrong answer has consequences: product manuals and HR/compliance policy. Answers are drawn only from the source documents and cite the exact page, role-based access controls what each user can retrieve, and every query is logged for audit.",
    image: "/images/projects/enterprise-rag.svg",
    alt: "DocuMind enterprise RAG system preview",
    tags: ["RAG", "RBAC", "ChromaDB", "Audit Trail", "OpenAI"],
    liveUrl: "",
    sourceUrl: "https://github.com/ChinmayShastry/enterprise-rag-system",
  },
  {
    title: "Pneumonia Detection from X-Rays",
    description:
      "Chest X-ray classification comparing a from-scratch CNN against VGG16 and ResNet50 transfer learning. ResNet50 came out best at 88% accuracy and 0.95 AUC. The more useful finding was that the scratch CNN's apparently perfect 1.00 sensitivity came from flagging almost every image positive, at 0.00 specificity — which is why the models are scored on sensitivity and specificity separately rather than accuracy alone.",
    image: "/images/projects/computer-vision.svg",
    alt: "Pneumonia detection from chest X-rays project preview",
    tags: ["TensorFlow", "Transfer Learning", "ResNet50", "Medical Imaging"],
    liveUrl: "",
    sourceUrl: "https://github.com/ChinmayShastry/pneumonia-classification",
  },
  {
    title: "Machine Learning From Scratch",
    description:
      "K-Nearest Neighbours and linear regression implemented from first principles in NumPy — gradient descent, loss tracking and feature scaling written by hand, then benchmarked against scikit-learn to confirm the implementations were correct. Built to understand the mechanics underneath the libraries.",
    image: "/images/projects/ml-from-scratch.svg",
    alt: "Machine learning from scratch project preview",
    tags: ["NumPy", "Gradient Descent", "scikit-learn", "Fundamentals"],
    liveUrl: "",
    sourceUrl: "https://github.com/ChinmayShastry/knn-from-scratch",
  },
  {
    title: "Classical ML & Analytics",
    description:
      "A run of applied machine-learning projects across business and NLP problems: customer transaction prediction, Portuguese bank marketing response, employee performance analysis, flight price prediction, fake-news detection and Twitter sentiment classification.",
    image: "/images/projects/predictive-modeling.svg",
    alt: "Classical machine learning and analytics projects preview",
    tags: ["XGBoost", "Classification", "EDA", "NLP", "Pandas"],
    liveUrl: "",
    sourceUrl: "https://github.com/ChinmayShastry?tab=repositories",
  },
];

/* ────────────────────────────────────────────────
 *  Experience / education timeline (newest first)
 *  type: "work" | "education" | "certification"  (picks the icon)
 * ──────────────────────────────────────────────── */
export const timeline = [
  {
    type: "work",
    title: "AI Engineer Intern",
    org: "Rubixe AI Solutions",
    period: "Oct 2025 — Jun 2026",
    location: "Bengaluru, India",
    description:
      "Built and deployed end-to-end ML pipelines across computer vision and NLP, delivering three production-style systems. Handled the full model lifecycle from preprocessing through training, tuning and evaluation, and wrote the technical documentation covering performance, business impact and deployment.",
  },
  {
    type: "education",
    title: "Fintech Programme",
    org: "IIM Bangalore (IIMBx)",
    period: "2025 — Sep 2026 (expected)",
    location: "Online",
    // TODO: this isn't on your current résumé — either add it there or
    // remove this entry, so the two documents agree.
    description:
      "Deepening financial domain expertise — fintech strategy, market structure, and the commercial side of applied AI.",
  },
  {
    type: "certification",
    title: "AI Engineer Certifications",
    org: "NASSCOM · IABAC",
    period: "2026",
    location: "India",
    description:
      "Independently accredited AI Engineer certifications from NASSCOM and IABAC, validating applied machine learning and GenAI competency.",
  },
  {
    type: "education",
    title: "AI Engineer Professional Program",
    org: "DataMites",
    period: "2025",
    location: "Bengaluru, India",
    description:
      "Intensive offline professional programme covering the applied AI engineering stack — from classical machine learning through deep learning and deployment.",
  },
  {
    type: "education",
    title: "Bachelor of Commerce (B.Com)",
    org: "Gulbarga University",
    period: "Graduated Feb 2025",
    location: "India",
    description:
      "Graduated with 81.43% — financial accounting, corporate finance, and quantitative analysis.",
  },
  {
    type: "work",
    title: "Portfolio Manager & Financial Advisor",
    org: "Independent / Freelance",
    period: "2019 — 2024",
    location: "Bengaluru, India",
    description:
      "Ran an independent practice built around portfolio management — equity and derivatives for 50+ clients, using fundamental and technical analysis alongside options strategy. Held an AngelOne sub-brokership and a Tata AIA insurance agency alongside it, and handled market consultation, ITR filing, and teaching clients the practical side of trading (placing orders, stop losses, targets). Built Python and Excel workflows to screen positions and track downside risk.",
  },
];

/* ────────────────────────────────────────────────
 *  Beyond Work — the music section.
 *  Set `beyondWork = null` to hide the section entirely.
 * ──────────────────────────────────────────────── */
export const beyondWork = {
  eyebrow: "Beyond Work",
  title: "Twelve years of Hindustani classical",
  paragraphs: [
    "I've been learning Hindustani classical vocal for twelve years, with the same Guruji throughout, and I'm still learning — it isn't the kind of thing that finishes.",
    "For about two and a half years I taught it as well. A hundred-odd students came through, the youngest four years old and the oldest sixty-five. You learn quickly that the same idea needs a completely different explanation for each person.",
  ],
  stats: [
    { value: "12", label: "Years learning" },
    { value: "100+", label: "Students taught" },
    { value: "4–65", label: "Age range taught" },
  ],
};

/* ────────────────────────────────────────────────
 *  Testimonials — currently OFF
 *
 *  The section is hidden while this array is empty, which is the
 *  right default: no testimonials reads as neutral, placeholder
 *  ones read as unfinished.
 *
 *  To switch it back on, add real quotes in this shape:
 *
 *    { quote: "…", name: "Priya Sharma", role: "Team Lead, Rubixe" }
 *
 *  Good people to ask: your Rubixe manager, your DataMites mentor,
 *  or a long-standing advisory client.
 * ──────────────────────────────────────────────── */
export const testimonials = [];

/* ────────────────────────────────────────────────
 *  Contact section + social links
 * ──────────────────────────────────────────────── */
export const contact = {
  headline: "Let's talk",
  blurb:
    "I'm looking for roles in AI engineering, data science and data analysis. If you're working on something where finance and AI overlap, I'd particularly like to hear about it.",

  // Formspree form ID — submissions arrive in your email inbox.
  // Manage the form (or change the target address) at https://formspree.io
  formspreeId: "xjybowdg",

  socials: [
    {
      label: "GitHub",
      href: "https://github.com/ChinmayShastry",
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/chinmayshastry/",
      icon: Linkedin,
    },
    {
      label: "X / Twitter",
      href: "https://x.com/ChinmayShastry",
      icon: Twitter,
    },
    {
      label: "Email",
      href: "mailto:chinmay.v.shastry@gmail.com",
      icon: Mail,
    },
  ],
};
