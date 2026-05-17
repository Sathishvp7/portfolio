export type IndependentProject = {
  id: string;
  title: string;
  description: string;
  category: string;
  techStack: string[];
  githubUrl: string;
  featured?: boolean;
};

/** Independent / public GitHub work — update URLs here when you add new repos. */
export const independentProjects: IndependentProject[] = [
  {
    id: 'siim-pneumothorax',
    title: 'SIIM-ACR pneumothorax segmentation',
    description:
      'Chest X-ray pneumothorax detection and localization using UNet with CheXNet backbone (Kaggle SIIM-ACR).',
    category: 'Computer vision · Healthcare',
    techStack: ['PyTorch', 'UNet', 'CheXNet', 'CNN'],
    githubUrl: 'https://github.com/Sathishvp7/-SIIM-ACR-Pneumothorax-Segmentation',
    featured: true,
  },
  {
    id: 'self-corrective-code',
    title: 'Self-corrective code generation agent',
    description:
      'Iterative code generation with reflection and error correction — Streamlit app built with LangGraph and OpenAI.',
    category: 'LangGraph · Code',
    techStack: ['LangGraph', 'OpenAI', 'Streamlit', 'Python'],
    githubUrl: 'https://github.com/Sathishvp7/Agent_AI_Self_Corrective_code_generation',
    featured: true,
  },
  {
    id: 'fintech-rag',
    title: 'FinTech RAG assistant',
    description:
      'RAG assistant to reduce cross-team data silos for finance, marketing, HR, and executive stakeholders.',
    category: 'RAG · Enterprise',
    techStack: ['RAG', 'LLM', 'Python'],
    githubUrl: 'https://github.com/Sathishvp7/fintech-rag-assistant',
  },
  {
    id: 'genai-code-analyzer',
    title: 'GenAI code analyzer',
    description:
      'RAG chatbot that scans a GitHub repository and summarizes structure, components, and behavior.',
    category: 'RAG · Developer tools',
    techStack: ['RAG', 'LLM', 'Python'],
    githubUrl: 'https://github.com/Sathishvp7/genai-code-analyzer',
  },
  {
    id: 'market-insights',
    title: 'Market insights agent',
    description:
      'Web app for financial data queries — stock prices, analyst recommendations, and current events.',
    category: 'Agents · Finance',
    techStack: ['Python', 'LLM', 'Web'],
    githubUrl: 'https://github.com/Sathishvp7/Market-Insights-Agent',
  },
  {
    id: 'gemini-doc-qa',
    title: 'Document Q&A with Gemini',
    description:
      'Upload multiple PDFs and ask questions over their content using Google Gemini, with a Streamlit UI.',
    category: 'GenAI · RAG',
    techStack: ['Gemini', 'Streamlit', 'Python'],
    githubUrl: 'https://github.com/Sathishvp7/GenAI-Document-Q-A-using-Gemini',
  },
  {
    id: 'financial-extraction',
    title: 'Financial data extraction tool',
    description:
      'Streamlit app using OpenAI to pull company name, symbol, revenue, and net income from finance news articles.',
    category: 'NLP · Finance',
    techStack: ['OpenAI', 'Streamlit', 'Python'],
    githubUrl: 'https://github.com/Sathishvp7/FinancialDataExtractionTool',
  },
  {
    id: 'vehicle-damage',
    title: 'Vehicle damage detection',
    description: 'Computer vision pipeline for detecting and assessing vehicle damage from images.',
    category: 'Computer vision',
    techStack: ['Python', 'Deep learning', 'OpenCV'],
    githubUrl: 'https://github.com/Sathishvp7/Vehicle_Damage_Detection',
  },
  {
    id: 'brain-tumour',
    title: 'Brain tumour detection',
    description:
      'CNN-based approach to support earlier tumour detection from imaging — learning and demo project.',
    category: 'Computer vision · Healthcare',
    techStack: ['TensorFlow', 'CNN', 'Python'],
    githubUrl: 'https://github.com/Sathishvp7/Brain_Tumour_Detection',
  },
];
