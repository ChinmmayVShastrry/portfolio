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

import { Github, Linkedin, Twitter, Mail } from "lucide-react";

/* ────────────────────────────────────────────────
 *  SEO / social sharing tags (used in app/layout.js)
 * ──────────────────────────────────────────────── */
export const siteMeta = {
  title: "Chinmmay V Shastrry — AI / GenAI Engineer",
  description:
    "AI/GenAI Engineer in Bengaluru building hybrid RAG pipelines, agentic LLM workflows and deep-learning systems, with five years in financial markets behind the technical decisions.",
  url: "https://chinmmayportfolio.vercel.app",
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
  email: "chinmmayvshastrry@gmail.com",

  // Cities you're open to working in — shown in the hero and in Contact.
  // Recruiters filter hard on location, which is why it appears twice.
  openToCities: ["Bengaluru", "Hyderabad", "Pune"],
  // Also shown after the cities. Set to false to drop "Remote".
  openToRemote: true,

  // Small pulsing badge at the top of the hero.
  // Set to "" to hide it (e.g. once you've accepted a role).
  availability: "Available to join immediately",

  // The role families you're targeting. The first is used as your job
  // title in search results; the hero shows them as one quiet line.
  roles: ["AI / GenAI Engineer", "Data Scientist", "Data Analyst"],

  // One-liner under the tagline
  intro:
    "I build RAG systems, LLM applications and machine-learning models, and I came to them after five years managing investment portfolios. Finance and AI is the intersection I want to keep working in.",

  // A short, dated "what I'm doing right now" line under the intro.
  // Update the date whenever you change the text, so it never goes stale.
  // Set to null to hide it.
  now: {
    date: "September 2026",
    text: "Building a multi-agent trading system, and learning MCP and FastAPI alongside it.",
  },

  // Portrait shown in the hero
  photo: "/images/profile.jpg",
  photoAlt: "Portrait of Chinmmay V Shastrry",

  // Résumé download link (file lives in /public). Set to "" to hide the button.
  resumeUrl: "/Chinmmay_V_Shastrry_Resume.pdf",
};

/* ────────────────────────────────────────────────
 *  Navbar links — each href must match a section id
 * ──────────────────────────────────────────────── */
export const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Why me", href: "#why" },
  { label: "Toolkit", href: "#skills" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/* ────────────────────────────────────────────────
 *  About section
 * ──────────────────────────────────────────────── */
export const about = {
  title: "From client portfolios to AI systems",

  // Each string renders as its own paragraph. Two is the sweet spot:
  // enough for the story, short enough that people read to the end.
  bio: [
    "I'm Chinmmay, an AI engineer in Bengaluru. Before this I ran my own financial practice for about five years: portfolio management for more than fifty clients, an AngelOne sub-brokership, ITR filing and a Tata AIA insurance agency. A lot of that work was sitting with someone until they were comfortable placing their own order and setting a stop loss, which turned out to be good training for explaining complicated things to people who are nervous.",
    "In January 2025 I moved into technology. I didn't leave finance behind; I wanted better tools for the problems I'd already spent five years on. I did the DataMites AI engineering programme in Marathahalli, then an eight-month internship at Rubixe building computer vision and NLP systems, including a sign-language recogniser that reached 99.87% accuracy across 24 gestures. Coming from finance, it took about a year and a half before the code felt comfortable. Since then I've worked forward through transformers into LLMs, RAG and agentic systems, which is where most of my own projects sit. I still check the markets most mornings.",
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
      body: "Five years of managing real client money, across portfolio management, a sub-brokership and an insurance agency, means nobody has to explain to me what a drawdown is, why a compliance document can't be loosely paraphrased, or what an analyst actually does all day. If your problem touches money, I've already lived in it.",
    },
    {
      title: "I've actually shipped things",
      body: "Four of my projects are live right now with public links, and the code is on GitHub. You can click through and judge them yourself before we ever get on a call.",
    },
    {
      title: "I can explain the complicated part",
      body: "I spent years telling clients why their portfolio moved, to people who were anxious and didn't speak the jargon. That turns out to be the same skill as explaining a model's output to whoever has to sign off on it.",
    },
    {
      title: "I adapt, and I've already proved it once",
      body: "I came into this from finance with no coding background and no CS degree, and I'm now shipping AI systems. When a stack has something I haven't used, it's a ramp-up I've done before. It's also why generalist and founder's-office roles appeal to me, where the job is whatever the business needs that month. Right now my own ramp-up is MCP, FastAPI, Docker and Kubernetes.",
    },
  ],
};

/* ────────────────────────────────────────────────
 *  Toolkit, grouped by category. Each group renders as one row.
 *  `note` renders as a small caption under the row.
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
    note: "Claude, Claude Code and Cowork are my daily drivers; I've used the rest on real work too.",
  },
];

/* Currently learning: shown as one separate line under the toolkit.
   Keeping this honest and visible reads as momentum, and it's the
   first thing to promote into skillGroups once you've shipped with it. */
export const learning = {
  title: "Currently growing into",
  note: "Building with these now; they move up once they're in something I've shipped.",
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
 *  - featured: true shows the project as a large row with a screenshot
 *    (needs `image` + `alt`). Everything else goes in the compact grid.
 *  - liveUrl / sourceUrl: set to "" to hide that link
 *  - status: shows a small badge (e.g. "In progress")
 *  - caseStudy: slug of an entry in `caseStudies` below; adds a
 *    "Read the case study" link
 * ──────────────────────────────────────────────── */
export const projects = [
  {
    featured: true,
    title: "StoxAI",
    subtitle: "Indian market research assistant",
    description:
      "Research assistant for Nifty 250 stocks, commodities and indices. It pulls live price data and financial news, runs LLM sentiment analysis across it, and answers follow-up questions through a tool-calling chatbot that can compare assets in plain English. It's built as a research companion, so it surfaces catalysts and risks and leaves the call to the investor.",
    image: "/images/shots/stoxai.webp",
    alt: "StoxAI's analysis screen: a sidebar to pick a stock and report sections, and cards for technicals, sentiment, long-term analysis and upcoming factors",
    tags: ["LLM", "Finance", "Tool Calling", "GPT-4o-mini", "Streamlit"],
    liveUrl: "https://stoxai-market.streamlit.app/",
    sourceUrl: "https://github.com/ChinmmayVShastrry/StoxAI",
  },
  {
    featured: true,
    title: "RAG Atlas",
    subtitle: "Six RAG architectures, one question, every stage visible",
    description:
      "An interactive walkthrough of six RAG architectures (naive, advanced, agentic, multi-hop, graph and hierarchical) run against the same corpus and question, so the architecture is the only thing that changes. Nothing is simulated: real chunking, 1536-dimension embeddings, cosine ranking, a cross-encoder, streamed generation, and a second model grading the first.",
    image: "/images/shots/rag-atlas.webp",
    alt: "RAG Atlas: numbered pipeline stages from corpus to guardrails across the top, an architecture switcher, and the first stage showing the source documents",
    tags: ["RAG", "Architectures", "Evaluation", "Guardrails", "Embeddings"],
    liveUrl: "https://rag-atlas-learn.vercel.app",
    sourceUrl: "https://github.com/ChinmmayVShastrry/rag-atlas",
    caseStudy: "rag-atlas",
  },
  {
    featured: true,
    title: "DocChat AI",
    subtitle: "Hybrid RAG over your own documents",
    description:
      "Document intelligence combining BM25 keyword retrieval, dense semantic search and CrossEncoder reranking, which lifted RAGAS context precision from about 78% to 100% on the evaluation set. It handles several documents at once and streams answers token by token, with source citations.",
    image: "/images/shots/docchat.webp",
    alt: "DocChat AI's start screen: a sidebar for an API key and document upload, and a chat box for questions about the documents",
    tags: ["RAG", "LangChain", "FAISS", "BM25", "Reranking"],
    liveUrl: "https://docchat-ai.streamlit.app",
    sourceUrl: "https://github.com/ChinmmayVShastrry/docchat-ai",
  },
  {
    // Remove `status` and add liveUrl/sourceUrl once the repo is public.
    status: "In progress",
    title: "Multi-Agent Trading System",
    description:
      "A layered multi-agent system for market analysis, with separate agents for market data, signal generation, risk checks and execution logic, coordinated rather than run as one monolith. It's the build where the finance background and the agentic AI work meet.",
    tags: ["Agentic AI", "Multi-Agent", "Finance", "Python"],
    liveUrl: "",
    sourceUrl: "",
  },
  {
    title: "AI Résumé Analyzer",
    description:
      "ATS-style résumé scoring with skill-gap analysis powered by sentence-transformers, plus AI rewriting suggestions. Multi-step reasoning (parse, extract, analyse, output) produces role-specific feedback through a live scoring dashboard.",
    tags: ["NLP", "Sentence Transformers", "ATS", "Streamlit"],
    liveUrl: "https://resume-aianalyzer.streamlit.app/",
    sourceUrl: "https://github.com/ChinmmayVShastrry/ai-resume-analyzer",
  },
  {
    title: "DocuMind",
    subtitle: "Enterprise RAG",
    description:
      "A RAG assistant for documents where a wrong answer has consequences: product manuals and HR/compliance policy. Answers come only from the source documents and cite the exact page, role-based access controls what each user can retrieve, and every query is logged for audit.",
    tags: ["RAG", "RBAC", "ChromaDB", "Audit Trail"],
    liveUrl: "",
    sourceUrl: "https://github.com/ChinmmayVShastrry/enterprise-rag-system",
  },
  {
    title: "Pneumonia Detection from X-Rays",
    description:
      "Chest X-ray classification comparing a from-scratch CNN against VGG16 and ResNet50 transfer learning. ResNet50 came out best at 88% accuracy and 0.95 AUC. The more useful finding was that the scratch CNN's apparently perfect 1.00 sensitivity came from flagging almost every image positive, at 0.00 specificity, which is why the models are scored on sensitivity and specificity separately.",
    tags: ["TensorFlow", "Transfer Learning", "ResNet50", "Medical Imaging"],
    liveUrl: "",
    sourceUrl: "https://github.com/ChinmmayVShastrry/pneumonia-classification",
  },
  {
    title: "Machine Learning From Scratch",
    description:
      "K-Nearest Neighbours and linear regression implemented from first principles in NumPy, with gradient descent, loss tracking and feature scaling written by hand, then benchmarked against scikit-learn to confirm the implementations were correct.",
    tags: ["NumPy", "Gradient Descent", "scikit-learn"],
    liveUrl: "",
    sourceUrl: "https://github.com/ChinmmayVShastrry/knn-from-scratch",
  },
  {
    title: "Classical ML & Analytics",
    description:
      "Applied machine-learning projects across business and NLP problems: customer transaction prediction, Portuguese bank marketing response, employee performance analysis, flight price prediction, fake-news detection and Twitter sentiment classification.",
    tags: ["XGBoost", "Classification", "EDA", "NLP"],
    liveUrl: "",
    sourceUrl: "https://github.com/ChinmmayVShastrry?tab=repositories",
  },
];

/* "Recently pushed" line under the projects: your latest public GitHub
   repos, refreshed automatically once a day. `exclude` hides repos by
   name (this site's own repo, anything private-in-spirit). Set
   `show: false` to hide the line. */
export const githubActivity = {
  show: true,
  count: 3,
  exclude: ["portfolio"],
};

/* ────────────────────────────────────────────────
 *  Case studies: one page each, at /projects/<slug>.
 *  Every figure here comes from the project's own README, so keep it
 *  in step with the repo if the numbers change.
 * ──────────────────────────────────────────────── */
export const caseStudies = [
  {
    slug: "rag-atlas",
    title: "RAG Atlas",
    subtitle: "Six RAG architectures, one question, every stage visible",
    summary:
      "An interactive walkthrough of six retrieval-augmented generation architectures, plus evaluation and guardrails, where the architecture is the only thing that changes.",
    liveUrl: "https://rag-atlas-learn.vercel.app",
    sourceUrl: "https://github.com/ChinmmayVShastrry/rag-atlas",
    intro: [
      "RAG Atlas takes ten plain text files, one question and a switcher. You can ask the same thing of each architecture and see where the answers diverge, or run all six at once and compare them side by side.",
      "Nothing on the page is simulated. The chunking, the 1536-dimensional embeddings, the cosine ranking, the cross-encoder, the streamed generation and the second model grading the first are all real, and every slider is wired to live output.",
    ],
    facts: [
      { value: "6", label: "Architectures on one corpus" },
      { value: "10", label: "Source documents" },
      { value: "~$0.002", label: "To run all six on one question" },
      { value: "553", label: "Entities in the graph index" },
    ],
    architectures: {
      heading: "The six architectures",
      note: "Corpus, chunking, generation, evaluation and guardrails are identical in all six. Only the retrieval middle changes, so the architecture is the one variable.",
      rows: [
        { name: "Naive", middle: "embed → rank → stuff", purpose: "The original pattern, and still the right default." },
        { name: "Advanced", middle: "HyDE → hybrid → rerank", purpose: "Same shape, smarter at each step." },
        { name: "Agentic", middle: "route → grade → correct → critique", purpose: "Checks its own retrieval and its own answer." },
        { name: "Multi-hop", middle: "decompose → chain → synthesise", purpose: "Questions no single passage can answer." },
        { name: "Graph", middle: "extract → graph → traverse", purpose: "Indexes relationships instead of text." },
        { name: "Hierarchical", middle: "cluster → summarise → route", purpose: "RAPTOR: retrieval at the right level of detail." },
      ],
    },
    sections: [
      {
        heading: "Chunking you can watch",
        // A looping screen recording (played like a GIF) with a still poster
        video: "/images/case-study/chunking.mp4",
        image: "/images/case-study/chunking-poster.webp",
        width: 980,
        height: 582,
        alt: "The chunk size slider sweeping from 1,200 characters down to 300 and back, while one document splits from 8 chunks into 32 and coloured bands over the source text re-flow to match",
        body: [
          "One slider, nothing else touched. As chunk size drops from 1,200 characters to 300, one document splits from 8 chunks into 32 and the coloured bands over the source text redraw to match. Striped regions are overlap: text that belongs to two chunks at once, which is what rescues a fact that lands on a boundary.",
          "This part runs entirely in the browser, so it costs nothing and has no latency.",
        ],
      },
      {
        heading: "All six on the same question",
        image: "/images/case-study/comparison.webp",
        width: 2276,
        height: 744,
        alt: "The same question run through all six architectures side by side, each card showing its answer, faithfulness score, passages used, calls made, cost and elapsed time",
        body: [
          "Asked \"at what temperature does first crack happen?\", five architectures give the same answer and score 100 on faithfulness. Graph RAG reports that its context doesn't cover the question, because an entity graph is the wrong tool for a single numeric lookup.",
          "A full comparison costs about $0.002 across 20 calls and takes roughly half a minute. It's opt-in and collapsed by default, because it's the only thing on the site that spends money without being asked for a specific stage.",
        ],
      },
      {
        heading: "Three chunking strategies, same text",
        image: "/images/case-study/chunking-strategies.webp",
        width: 2292,
        height: 452,
        alt: "Three chunking strategies side by side across ten documents: fixed windows produce 110 chunks of which 94 start mid-word, while sentence-aware (112) and recursive (118) produce none",
        body: [
          "Same corpus, same size and overlap, three splitters. Fixed windows produce 110 chunks and 94 of them begin mid-word. Sentence-aware and recursive splitting produce none.",
        ],
      },
      {
        heading: "Guardrails that fire as you type",
        image: "/images/case-study/guardrails.webp",
        width: 1716,
        height: 1592,
        alt: "The guardrails stage on a question containing an email address and a credit card number: the PII rule and the injection classifier both block it, while the injection-pattern rule and moderation pass",
        body: [
          "Deterministic rules run in the browser on every keystroke, and the card detector runs a Luhn checksum so it doesn't trip on every long number. Model-based moderation and an injection classifier sit behind a button, because those spend tokens.",
        ],
      },
    ],
    details: {
      heading: "Details that took the most care",
      items: [
        "The PCA is real. Power iteration finds the top two components without building a 1536 × 1536 covariance matrix, and the query goes through the same fitted transform, so distance on screen means something.",
        "Reranking uses a genuine cross-encoder running in the browser (about 21 MB, on WebGPU or WASM). Its scores are roughly calibrated, so unlike cosine similarity they support an absolute relevance floor.",
        "The graph index has 553 entities and 546 relationships, and 53 of those entities bridge two or more documents. That's the join vector search can't make.",
        "The RAPTOR tree goes 106 leaves → 27 → 7 → 2. Ask for a temperature and retrieval collapses onto leaves; ask what the documents share and it returns a node from every level.",
        "The shared demo key is protected on the server: submitted text has to be a genuine excerpt of the bundled corpus, the server builds the prompt itself, and every IP is rate-limited per hour.",
      ],
    },
    tryIt: {
      heading: "Things worth trying",
      items: [
        "Ask \"What temperature does Marta's stoneware mature at?\" under Naive, then under Multi-hop. Naive can't answer it, because no single chunk contains both halves.",
        "Under Agentic, ask \"Who won the 1998 FIFA World Cup?\" and watch the router decline before spending anything.",
        "Push the temperature to 1.2, regenerate, then re-score, and watch faithfulness fall.",
        "Switch off the coffee document, then ask about first crack. The refusal is the correct behaviour.",
      ],
    },
  },
];

/* ────────────────────────────────────────────────
 *  Experience / education timeline (newest first)
 *  type: "work" | "education" | "certification"  (picks the icon)
 * ──────────────────────────────────────────────── */
export const timeline = [
  {
    type: "education",
    title: "FinTech Programme",
    org: "IIMBx Digital Learning Foundation · IIM Bangalore",
    period: "Nov 2025 – Oct 2026",
    location: "Online",
    // Optional photo shown beside the entry. Drop the file at this path
    // (e.g. a picture from the valedictory at IIM Bangalore) and uncomment:
    // photo: "/images/iimb.jpg",
    // photoAlt: "Receiving the FinTech programme certificate at IIM Bangalore",
    description:
      "A nine-month online programme from the first cohort, finished with the certificate handed over at the valedictory on the IIM Bangalore campus. What I liked most was seeing finance and technology taught together, as if they belong together.",
  },
  {
    type: "work",
    title: "AI Engineer Intern",
    org: "Rubixe AI Solutions",
    period: "Oct 2025 – Jun 2026",
    location: "Bengaluru, India",
    description:
      "Built and deployed end-to-end ML pipelines across computer vision and NLP, delivering three production-style systems. Handled the full model lifecycle from preprocessing through training, tuning and evaluation, and wrote the technical documentation covering performance, business impact and deployment.",
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
      "Intensive offline professional programme covering the applied AI engineering stack, from classical machine learning through deep learning and deployment.",
  },
  {
    type: "education",
    title: "Bachelor of Commerce (B.Com)",
    org: "Gulbarga University",
    period: "Graduated Feb 2025",
    location: "India",
    description:
      "Graduated with 81.43%, covering financial accounting, corporate finance and quantitative analysis.",
  },
  {
    type: "work",
    title: "Portfolio Manager & Financial Advisor",
    org: "Independent / Freelance",
    period: "2019 – 2024",
    location: "Bengaluru, India",
    description:
      "Ran an independent practice built around portfolio management: equity and derivatives for 50+ clients, using fundamental and technical analysis alongside options strategy. Held an AngelOne sub-brokership and a Tata AIA insurance agency alongside it, and handled market consultation, ITR filing, and teaching clients the practical side of trading (placing orders, stop losses, targets). Built Python and Excel workflows to screen positions and track downside risk.",
  },
];

/* ────────────────────────────────────────────────
 *  Beyond Work — the music section.
 *  Set `beyondWork = null` to hide the section entirely.
 * ──────────────────────────────────────────────── */
export const beyondWork = {
  eyebrow: "Beyond work",
  title: "Twelve years of Hindustani classical",
  paragraphs: [
    "I've been learning Hindustani classical vocal for twelve years, with the same Guruji throughout, and I'm still learning. It isn't the kind of thing that finishes.",
    "For about two and a half years I taught it as well. A hundred-odd students came through, the youngest four years old and the oldest sixty-five. You learn quickly that the same idea needs a completely different explanation for each person.",
    "Away from music I play chess, and my highest rating so far is 1800.",
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
    "I'm looking for roles in AI engineering, data science and data analysis, and I'm just as interested in generalist or founder's-office roles, where the work changes from week to week. If you're working on something where finance and AI overlap, I'd particularly like to hear about it.",

  // Formspree form ID — submissions arrive in your email inbox.
  // Manage the form (or change the target address) at https://formspree.io
  formspreeId: "xjybowdg",

  socials: [
    {
      label: "GitHub",
      href: "https://github.com/ChinmmayVShastrry",
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/chinmmay/",
      icon: Linkedin,
    },
    {
      label: "X / Twitter",
      href: "https://x.com/Chinmmay6",
      icon: Twitter,
    },
    {
      label: "Email",
      href: "mailto:chinmmayvshastrry@gmail.com",
      icon: Mail,
    },
  ],
};
