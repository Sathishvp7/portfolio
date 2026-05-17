import React from 'react';
import { ExternalLink, Linkedin, Github } from 'lucide-react';
import { profileLinks } from '../profileLinks';

const ThoughtLeadership: React.FC = () => {
  const linkedInUrl = profileLinks.linkedIn;
  const githubUrl = profileLinks.github;

  return (
    <section id="thought-leadership" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Writing & public work
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            I share selectively on LinkedIn and GitHub. This section is intentionally free of placeholder
            articles, view counts, or speaking gigs — those would be misleading without verified links.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8 border border-primary-200 card-hover block"
          >
            <div className="flex items-center gap-3 mb-4">
              <Linkedin className="text-primary-600" size={28} />
              <h3 className="text-xl font-bold text-secondary-900">LinkedIn</h3>
            </div>
            <p className="text-secondary-600 mb-4">
              Posts and longer-form updates on GenAI delivery, MLOps, and lessons from production programs.
            </p>
            <span className="inline-flex items-center text-primary-700 font-semibold">
              Open profile
              <ExternalLink className="ml-2" size={18} />
            </span>
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl p-8 border border-secondary-200 shadow-sm card-hover block"
          >
            <div className="flex items-center gap-3 mb-4">
              <Github className="text-primary-600" size={28} />
              <h3 className="text-xl font-bold text-secondary-900">GitHub</h3>
            </div>
            <p className="text-secondary-600 mb-4">
              Code and experiments from independent agent and RAG projects (CrewAI, LangGraph, AutoGen,
              Streamlit demos).
            </p>
            <span className="inline-flex items-center text-primary-700 font-semibold">
              View repositories
              <ExternalLink className="ml-2" size={18} />
            </span>
          </a>
        </div>

        <div className="max-w-3xl mx-auto bg-secondary-50 rounded-xl p-8 border border-secondary-200">
          <h3 className="text-lg font-bold text-secondary-900 mb-3">If you are hiring or collaborating</h3>
          <p className="text-secondary-600 text-sm leading-relaxed">
            I am happy to discuss technical depth on the programs above, share anonymized architecture
            diagrams where permitted, or point you to public artifacts. For formal publications or
            conference talks, I will list them here once they are live and linkable — not before.
          </p>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Contact me
            <ExternalLink className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThoughtLeadership;
