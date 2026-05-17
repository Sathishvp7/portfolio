import React from 'react';
import { ExternalLink } from 'lucide-react';

const WorkHighlights: React.FC = () => {
  const projects = [
    {
      title: 'VisionIQ — QR detection & GS1 decoding',
      description:
        'End-to-end computer vision for medication vial labels: detect QR/DataMatrix, parse GS1 fields, emit validated structured data.',
      problem:
        'Manual barcode validation on high-volume vial processing was slow, error-prone, and hard to scale.',
      solution:
        'Custom YOLO-based detection on label imagery, GS1 parsing for NDC, lot, expiry, and serial into structured JSON, with validation suitable for downstream clinical and billing systems.',
      impact:
        'Resume-reported outcomes: ~97% detection accuracy; processing 10K+ vials/day with automated GS1 decoding; large reduction in manual validation effort alongside other AllyGPO automation (overall program cited ~65% manual effort reduction and 94%+ extraction accuracy).',
      techStack: ['Python', 'YOLO', 'OpenCV', 'GS1 parsing'],
      category: 'Computer vision · Healthcare',
      highlights: ['97% detection (per program metrics)', '10K+ vials/day automated path', 'GS1 → structured JSON'],
    },
    {
      title: 'MediChat — agentic medical assistant',
      description:
        'Multi-agent RAG for clinical knowledge retrieval across PDFs, images, and scanned documents (Hashimoto’s domain).',
      problem:
        'Clinical teams needed grounded answers over heterogeneous documents without brittle single-step retrieval.',
      solution:
        'LangGraph-based planner, executor, and reflection agents; multimodal ingestion and contextual reranking; Streamlit UI for conversational traceability.',
      impact:
        'Designed for trustworthy retrieval with agent oversight — qualitative improvement in traceability versus ad-hoc LLM chat; complements broader healthcare automation initiatives.',
      techStack: ['LangGraph', 'LangChain', 'OpenAI', 'ChromaDB', 'Streamlit'],
      category: 'Agentic RAG · Healthcare',
      highlights: ['Planner / executor / reflection', 'Multimodal ingestion', 'Streamlit for review'],
    },
    {
      title: 'Uyir peptide RAG — protocol extraction',
      description:
        'Vectorless RAG with hierarchical PageIndex-style navigation across 250+ peptide documents for protocol-oriented Q&A.',
      problem:
        'Dense peptide documentation made manual synthesis of dosage, safety, and protocol details labor-intensive.',
      solution:
        'Hierarchical indexing and LLM-driven navigation; automated indexing consolidating multi-source data with summaries; structured extraction pipeline for 15+ clinical fields with citations.',
      impact:
        'Resume: ~70% reduction in manual effort for targeted extraction workflows; improved context-aware retrieval for dosage, cycling, contraindications, and biomarkers.',
      techStack: ['Python', 'PageIndex', 'LiteLLM', 'OpenAI'],
      category: 'RAG · Healthcare',
      highlights: ['250+ documents', '15+ structured fields', '~70% manual effort reduction (program)'],
    },
    {
      title: 'Intelligent billing — CPT code prediction',
      description:
        'Multi-label NLP classifier predicting CPT billing codes from clinical report text, including rare-code handling.',
      problem:
        'Manual coding inconsistency and imbalance across low-frequency CPT codes increased review load and error risk.',
      solution:
        'Multi-label models with imbalance-aware strategy; validation workflow comparing predicted vs. actual codes for continuous improvement.',
      impact:
        'Resume: estimated ~30% reduction in billing errors where the workflow was applied; supports auditability through explicit validation.',
      techStack: ['Python', 'NLP', 'TF-IDF', 'BERT', 'SLM', 'Transformers'],
      category: 'NLP · Healthcare',
      highlights: ['Multi-label + imbalance handling', 'Predicted vs. actual QA loop', '~30% error reduction (est.)'],
    },
    {
      title: 'Alaska Airlines — enterprise GenAI assistants',
      description:
        'Three internal RAG assistants (Care Connect, AVA, SafeSight): ingestion, embeddings, semantic retrieval, and monitored services.',
      problem:
        'Internal teams needed reliable answers over large, evolving document corpora without overloading support channels.',
      solution:
        'Databricks + PostgreSQL ingestion and chunking; LangChain and OpenAI for retrieval-augmented generation; Azure Functions deployment with CI/CD; MLflow and Dataiku for monitoring.',
      impact:
        'Resume: 100K+ documents indexed; GenAI services with high uptime targets; internal support effort reduction on the order of ~50% for covered workflows.',
      techStack: ['Python', 'OpenAI', 'LangChain', 'Databricks', 'Azure Functions', 'Dataiku', 'PostgreSQL', 'MLflow'],
      category: 'GenAI · Aviation',
      highlights: ['3 production assistants', '100K+ docs', 'Azure + Databricks pipeline'],
    },
  ];

  return (
    <section id="work" className="section-padding bg-secondary-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Professional work
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Client and employer programs from my resume. Code for these is typically private — see{' '}
            <a href="#projects" className="text-primary-600 hover:text-primary-700 font-medium">
              independent projects
            </a>{' '}
            for public GitHub repositories.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg border border-secondary-200 overflow-hidden"
            >
              <div className="p-6 border-b border-secondary-200">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-700 bg-primary-100 rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">{project.title}</h3>
                <p className="text-secondary-600 mb-4">{project.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="text-xs font-medium text-secondary-700 bg-secondary-100 px-2 py-1 rounded-md"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-2">Problem</h4>
                  <p className="text-sm text-secondary-600">{project.problem}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary-900 mb-2">Solution</h4>
                  <p className="text-sm text-secondary-600">{project.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary-900 mb-2">Outcomes</h4>
                  <p className="text-sm text-secondary-600">{project.impact}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary-900 mb-2">Tech stack</h4>
                  <div className="flex flex-wrap">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-stack">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-secondary-600 mb-6">
            For detail beyond public summaries, reach out — I can walk through architecture, trade-offs,
            and what I owned vs. what was shared across the team.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Discuss a role or project
            <ExternalLink className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkHighlights;

