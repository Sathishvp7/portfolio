import React, { useMemo, useState } from 'react';
import { ArrowUpRight, FolderTree, Github, Star } from 'lucide-react';
import {
  agentFrameworkFilters,
  portfolioProjects,
  portfolioRepo,
  sectionFilters,
  SectionFilterId,
} from '../data/portfolioRepo';
import { independentProjects, IndependentProject } from '../data/independentProjects';
import { profileLinks } from '../profileLinks';

const Projects: React.FC = () => {
  const [sectionFilter, setSectionFilter] = useState<SectionFilterId>('all');
  const [frameworkFilter, setFrameworkFilter] = useState<string>('all');

  const showMonorepo = sectionFilter !== 'other';
  const showOther = sectionFilter === 'all' || sectionFilter === 'other';

  const filteredMonorepo = useMemo(() => {
    let list = portfolioProjects;
    if (sectionFilter === 'agents' || sectionFilter === 'nlp' || sectionFilter === 'slms') {
      list = list.filter((p) => p.section === sectionFilter);
    }
    if (sectionFilter === 'agents' && frameworkFilter !== 'all') {
      list = list.filter((p) => p.framework === frameworkFilter);
    }
    return list;
  }, [sectionFilter, frameworkFilter]);

  const filteredOther = useMemo(() => {
    if (!showOther) return [];
    return independentProjects;
  }, [showOther]);

  const count =
    (showMonorepo ? filteredMonorepo.length : 0) + (sectionFilter === 'other' ? filteredOther.length : 0);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Projects</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Structured like my{' '}
            <a
              href={portfolioRepo.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Agentic_AI_Learning
            </a>{' '}
            repo — <code className="text-sm bg-secondary-100 px-1.5 py-0.5 rounded">agents/</code>,{' '}
            <code className="text-sm bg-secondary-100 px-1.5 py-0.5 rounded">nlp/</code>,{' '}
            <code className="text-sm bg-secondary-100 px-1.5 py-0.5 rounded">slms/</code>. Click any
            card to open the project on GitHub.
          </p>
        </div>

        {/* Repo structure overview */}
        <div className="mb-8 p-5 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl border border-primary-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-start gap-3">
              <FolderTree className="text-primary-600 shrink-0 mt-0.5" size={24} />
              <div>
                <h3 className="font-bold text-secondary-900">{portfolioRepo.title}</h3>
                <p className="text-sm text-secondary-600 mt-1">{portfolioRepo.description}</p>
                <pre className="mt-3 text-xs text-secondary-700 bg-white/80 border border-secondary-200 rounded-lg p-3 overflow-x-auto">
{`Agentic_AI_Learning/
├── nlp/
├── agents/
│   ├── langchain/
│   ├── langgraph/
│   ├── autogen/
│   └── crewai/
└── slms/`}
                </pre>
              </div>
            </div>
            <a
              href={portfolioRepo.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm shrink-0"
            >
              <Github className="mr-2" size={18} />
              Open repository
            </a>
          </div>
        </div>

        {/* Section filters — match repo top-level folders */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {sectionFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => {
                setSectionFilter(f.id);
                if (f.id !== 'agents') setFrameworkFilter('all');
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                sectionFilter === f.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Framework sub-filters when agents/ is selected */}
        {sectionFilter === 'agents' && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {agentFrameworkFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFrameworkFilter(f.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  frameworkFilter === f.id
                    ? 'bg-secondary-800 text-white'
                    : 'bg-white border border-secondary-300 text-secondary-600 hover:border-primary-400'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}

        {showMonorepo && (
          <ul className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            {filteredMonorepo.map((project) => (
              <li key={project.id}>
                <MonorepoProjectCard project={project} />
              </li>
            ))}
          </ul>
        )}

        {sectionFilter === 'other' && (
          <ul className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            {filteredOther.map((project) => (
              <li key={project.id}>
                <OtherProjectCard project={project} />
              </li>
            ))}
          </ul>
        )}

        {sectionFilter === 'all' && showOther && filteredOther.length > 0 && (
          <>
            <h3 className="text-sm font-semibold text-secondary-500 uppercase tracking-wide text-center mb-6">
              Other GitHub repositories
            </h3>
            <ul className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
              {filteredOther.map((project) => (
                <li key={project.id}>
                  <OtherProjectCard project={project} />
                </li>
              ))}
            </ul>
          </>
        )}

        <p className="text-center text-sm text-secondary-500">
          {count} project{count !== 1 ? 's' : ''} shown
          {sectionFilter !== 'all' && sectionFilter !== 'other' ? ` · ${sectionFilter}/` : ''}
          {sectionFilter === 'agents' && frameworkFilter !== 'all' ? ` · ${frameworkFilter}` : ''}.{' '}
          <a
            href={profileLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            View all repositories on GitHub
          </a>
        </p>
      </div>
    </section>
  );
};

const MonorepoProjectCard: React.FC<{ project: (typeof portfolioProjects)[number] }> = ({ project }) => (
  <a
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="group block h-full bg-white rounded-xl border border-secondary-200 shadow-sm hover:shadow-lg hover:border-primary-300 transition-all p-6"
  >
    <div className="flex items-start justify-between gap-3 mb-3">
      <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-primary-700 bg-primary-50 rounded-full">
        {project.section}
        {project.framework ? ` · ${project.framework}` : ''}
      </span>
      <Github size={20} className="text-secondary-400 group-hover:text-primary-600 shrink-0" />
    </div>
    <h3 className="text-xl font-bold text-secondary-900 group-hover:text-primary-700 mb-2">
      {project.title}
    </h3>
    <p className="text-sm text-secondary-600 mb-3 line-clamp-2">{project.description}</p>
    <p className="text-xs text-secondary-400 font-mono mb-3 truncate">{project.path}</p>
    <div className="flex flex-wrap gap-1.5 mb-4">
      {project.techStack.map((tech) => (
        <span
          key={tech}
          className="text-xs text-secondary-600 bg-secondary-50 border border-secondary-200 px-2 py-0.5 rounded"
        >
          {tech}
        </span>
      ))}
    </div>
    <p className="text-primary-600 font-semibold text-sm flex items-center">
      View on GitHub
      <ArrowUpRight className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={16} />
    </p>
  </a>
);

const OtherProjectCard: React.FC<{ project: IndependentProject }> = ({ project }) => (
  <a
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="group block h-full bg-white rounded-xl border border-secondary-200 shadow-sm hover:shadow-lg hover:border-primary-300 transition-all p-6"
  >
    <div className="flex items-start justify-between gap-3 mb-3">
      <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-primary-700 bg-primary-50 rounded-full">
        {project.category}
      </span>
      <span className="flex items-center gap-1 shrink-0">
        {project.featured && <Star className="text-amber-500 fill-amber-500" size={16} />}
        <Github size={20} className="text-secondary-400 group-hover:text-primary-600" />
      </span>
    </div>
    <h3 className="text-xl font-bold text-secondary-900 group-hover:text-primary-700 mb-2">{project.title}</h3>
    <p className="text-sm text-secondary-600 mb-4 line-clamp-3">{project.description}</p>
    <div className="flex flex-wrap gap-1.5 mb-4">
      {project.techStack.map((tech) => (
        <span
          key={tech}
          className="text-xs text-secondary-600 bg-secondary-50 border border-secondary-200 px-2 py-0.5 rounded"
        >
          {tech}
        </span>
      ))}
    </div>
    <p className="text-primary-600 font-semibold text-sm flex items-center">
      View on GitHub
      <ArrowUpRight className="ml-1" size={16} />
    </p>
  </a>
);

export default Projects;
