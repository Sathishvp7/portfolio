const repo = 'https://github.com/Sathishvp7/Agentic_AI_Learning/tree/main';

export const portfolioRepo = {
  title: 'Agentic AI Learning',
  description:
    'Personal AI / NLP learning lab — projects organized by area (agents, nlp, slms) for clarity and scale.',
  repoUrl: 'https://github.com/Sathishvp7/Agentic_AI_Learning',
  readmeUrl: 'https://github.com/Sathishvp7/Agentic_AI_Learning#readme',
} as const;

export type RepoSection = 'computer_vision' | 'agents' | 'nlp' | 'slms';

export type PortfolioProject = {
  id: string;
  title: string;
  description: string;
  section: RepoSection;
  framework?: 'LangChain' | 'LangGraph' | 'AutoGen' | 'CrewAI';
  techStack: string[];
  githubUrl: string;
  path: string;
  /** Marks a project for the highlighted showcase at the top of the section */
  featured?: boolean;
  /** Primary demo video (local file under public/ preferred) */
  videoUrl?: string;
  /** Fallback demo video if the primary fails to load */
  videoFallbackUrl?: string;
  /** Optional poster/thumbnail shown before the video plays */
  posterUrl?: string;
  /** Real-world applications to highlight */
  applications?: string[];
};

const p = (section: RepoSection, path: string, rest: Omit<PortfolioProject, 'section' | 'path' | 'githubUrl'>) => ({
  section,
  path,
  githubUrl: `${repo}/${path}`,
  ...rest,
});

/** Mirrors https://github.com/Sathishvp7/Agentic_AI_Learning — see root README project index */
export const portfolioProjects: PortfolioProject[] = [
  p('computer_vision', 'computer_vision/SAM3_works', {
    id: 'cv-sam3-tracking',
    title: 'SAM 3 — video object tracking',
    description:
      'Prompt-driven video object segmentation and tracking with Meta’s Segment Anything Model 3. Unlike stateless correlation trackers (MOSSE, CSRT), SAM 3 keeps a stateful inference session with a memory bank — staying locked on through lighting changes, partial occlusion, and crowded scenes. Supports text, point, and box prompts, plus multi-object tracking and a streaming mode for live feeds.',
    techStack: ['SAM 3', 'PyTorch', 'HuggingFace', 'OpenCV', 'Gradio', 'Python'],
    featured: true,
    /** Drop the demo at public/demos/sam3-tracking.mp4 to self-host; otherwise streams from GitHub */
    videoUrl: `${process.env.PUBLIC_URL}/demos/sam3-tracking.mp4`,
    videoFallbackUrl:
      'https://github.com/Sathishvp7/Agentic_AI_Learning/raw/main/computer_vision/SAM3_works/output_tracked.mp4',
    posterUrl: `${process.env.PUBLIC_URL}/demos/sam3-poster.png`,
    applications: [
      'Surveillance & security',
      'Industrial inspection',
      'Autonomous systems & robotics',
      'Intelligent video analytics',
      'Sports analytics',
      'Medical imaging',
    ],
  }),

  p('nlp', 'nlp/search-engine-biencoder-crossencoder', {
    id: 'nlp-search-biencoder',
    title: 'Semantic search engine',
    description: 'Bi-encoder and cross-encoder pipeline for semantic search.',
    techStack: ['Bi-encoder', 'Cross-encoder', 'Python'],
  }),

  p('agents', 'agents/langchain/product-recommendation', {
    id: 'lc-product-rec',
    title: 'Product recommendation',
    description: 'Multi-user product recommender with LangChain and SQL-backed memory.',
    framework: 'LangChain',
    techStack: ['LangChain', 'SQL', 'Python'],
  }),
  p('agents', 'agents/langchain/travel-assistant', {
    id: 'lc-travel',
    title: 'Travel assistant',
    description: 'LangChain agent for travel planning and itinerary support.',
    framework: 'LangChain',
    techStack: ['LangChain', 'Python'],
  }),

  p('agents', 'agents/langgraph/text2sql-react', {
    id: 'lg-text2sql',
    title: 'Text-to-SQL (ReAct)',
    description: 'Natural language to SQL using LangGraph with a ReAct-style agent loop.',
    framework: 'LangGraph',
    techStack: ['LangGraph', 'ReAct', 'SQL'],
  }),
  p('agents', 'agents/langgraph/financial-stock-openbb', {
    id: 'lg-stock-openbb',
    title: 'US stock analyst agent',
    description: 'Financial stock analysis agent powered by LangGraph and OpenBB data.',
    framework: 'LangGraph',
    techStack: ['LangGraph', 'OpenBB', 'Python'],
  }),
  p('agents', 'agents/langgraph/reflection-pattern', {
    id: 'lg-reflection',
    title: 'Reflection pattern',
    description: 'LangGraph workflow demonstrating reflection and critique between agent steps.',
    framework: 'LangGraph',
    techStack: ['LangGraph', 'Python'],
  }),
  p('agents', 'agents/langgraph/healthcare-customer-support-rag', {
    id: 'lg-healthcare-rag',
    title: 'Healthcare support RAG',
    description: 'Customer-support router with RAG over healthcare content using Chroma.',
    framework: 'LangGraph',
    techStack: ['LangGraph', 'RAG', 'ChromaDB'],
  }),

  p('agents', 'agents/autogen/smart_health_assistant', {
    id: 'ag-health',
    title: 'Smart health assistant',
    description: 'Multi-agent AutoGen flow: BMI input → diet plan → workout recommendations.',
    framework: 'AutoGen',
    techStack: ['AutoGen', 'Python'],
  }),

  p('agents', 'agents/crewai/automated-code-debugging-assistant', {
    id: 'crew-debug',
    title: 'Code debugging crew',
    description: 'CrewAI agents for automated code analysis and correction.',
    framework: 'CrewAI',
    techStack: ['CrewAI', 'Python'],
  }),
  p('agents', 'agents/crewai/ai-mock-interviewer', {
    id: 'crew-interview',
    title: 'AI mock interviewer',
    description: 'Streamlit app with a CrewAI crew simulating technical interview sessions.',
    framework: 'CrewAI',
    techStack: ['CrewAI', 'Streamlit', 'Python'],
  }),

  p('slms', 'slms/bert-classification-full-finetune', {
    id: 'slm-bert',
    title: 'BERT classification (full fine-tune)',
    description: 'Full fine-tuning of BERT for text classification tasks.',
    techStack: ['BERT', 'Transformers', 'Python'],
  }),
  p('slms', 'slms/tinyllama-1b-text2sql-sft', {
    id: 'slm-tinyllama',
    title: 'TinyLlama Text2SQL (SFT)',
    description: 'Supervised fine-tuning of TinyLlama 1B for natural-language-to-SQL.',
    techStack: ['TinyLlama', 'SFT', 'Python'],
  }),
];

export const sectionFilters = [
  { id: 'all', label: 'All' },
  { id: 'computer_vision', label: 'computer_vision/' },
  { id: 'agents', label: 'agents/' },
  { id: 'nlp', label: 'nlp/' },
  { id: 'slms', label: 'slms/' },
  { id: 'other', label: 'Other repos' },
] as const;

export type SectionFilterId = (typeof sectionFilters)[number]['id'];

export const agentFrameworkFilters = [
  { id: 'all', label: 'All frameworks' },
  { id: 'LangChain', label: 'LangChain' },
  { id: 'LangGraph', label: 'LangGraph' },
  { id: 'AutoGen', label: 'AutoGen' },
  { id: 'CrewAI', label: 'CrewAI' },
] as const;
