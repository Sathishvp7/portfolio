import React from 'react';
import { Building, Calendar, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Data Scientist',
      company: 'Ideas2IT Technology',
      context: 'Clients: AllyGPO, SalesSpark',
      period: 'May 2025 – Present',
      location: 'Chennai, India',
      achievements: [
        'Production AI for medical data extraction, clinical intelligence, and billing automation — resume cites ~65% reduction in manual validation effort and 94%+ extraction accuracy on the program.',
        'Custom YOLO vision for QR/DataMatrix on vial labels with GS1 parsing (NDC, lot, expiry, serial), replacing manual barcode workflows at scale.',
        'Agentic RAG (MediChat) with LangGraph planner, executor, and reflection agents across PDFs, images, and scans.',
        'Multi-label NLP for CPT billing codes from clinical text with imbalance-aware handling for low-frequency codes.',
        'Owned full lifecycle: data engineering, modeling, deployment, evaluation, and continuous optimization on AWS.',
      ],
      technologies: [
        'Python',
        'PyTorch',
        'AWS',
        'YOLO',
        'Transformers',
        'LangChain',
        'LangGraph',
        'SLM',
        'QLoRA',
        'Fine-tuning',
        'Quantization',
      ],
    },
    {
      title: 'Lead Data Scientist',
      company: 'Photon Interactive',
      context: 'Client: Alaska Airlines',
      period: 'Jan 2024 – May 2025',
      location: 'Chennai, India',
      achievements: [
        'Led end-to-end delivery of three enterprise GenAI RAG assistants (Care Connect, AVA, SafeSight) — resume cites ~50% reduction in manual support effort for covered workflows.',
        'Document ingestion, chunking, embeddings, and semantic retrieval on Databricks + PostgreSQL with LangChain and OpenAI; 100K+ documents in scope.',
        'Deployed GenAI services on Azure Functions with CI/CD; MLflow and Dataiku monitoring — resume cites 99.5% uptime target for the services.',
        'Ran three concurrent AI/ML workstreams across data collection, preprocessing, training, deployment, and monitoring.',
      ],
      technologies: ['Python', 'OpenAI', 'LangChain', 'Databricks', 'Azure Functions', 'Dataiku', 'PostgreSQL'],
    },
    {
      title: 'Project Lead Data Scientist',
      company: 'Mobiveil Technologies',
      period: 'Jun 2023 – Jan 2024',
      location: 'Chennai, India',
      achievements: [
        'Led a team of three engineers on AI-powered indoor object detection for automated UV disinfection in hotels and hospitals using SAM, RAM, and Grounded DINO.',
        'Image processing pipelines for complex multi-object scenes — resume cites ~89% mAP on the detection program.',
        'Automated UV triggers from detections to reduce manual scheduling and support hygiene compliance.',
      ],
      technologies: ['Python', 'SAM', 'RAM', 'Grounded DINO'],
    },
    {
      title: 'Lead Data Scientist',
      company: 'Straive Pvt. Ltd.',
      period: 'Sep 2021 – May 2023',
      location: 'Chennai, India',
      achievements: [
        'TiVo Smart Cropping: CNN + LSTM for salient regions in movie posters across aspect ratios; Tesseract/EasyOCR title extraction and adult-content classification — production serving 10K+ assets/month.',
        'PG Fund automation: Camelot + Tesseract OCR to extract and cross-validate tables from scanned IA/SD PDFs — resume cites ~80% reduction in processing time vs. fully manual comparison.',
      ],
      technologies: ['Python', 'TensorFlow', 'Keras', 'CNN', 'LSTM', 'Tesseract', 'EasyOCR', 'Camelot'],
    },
    {
      title: 'Software Program Analyst (Data Scientist)',
      company: 'FIS Global',
      period: 'Sep 2016 – Aug 2021',
      location: 'Chennai, India',
      achievements: [
        'ML classification for high-potential borrowers across 2M+ accounts for a major banking client; campaigns deployed on AWS.',
        'Containerized ML on Amazon EKS with EC2, load balancing, and CodeCommit/CodeDeploy/CodePipeline — deployment time reduced from days to hours.',
        'Built internal automation tool “SnapEz” for test-result capture — resume cites ~75% reduction in QA manual effort; MAD (Making a Difference) award.',
        'InnovateIN48 hackathon participant; client appreciation for AI workflow demonstration.',
      ],
      technologies: [
        'Python',
        'MLOps',
        'AWS EKS',
        'ECR',
        'EC2',
        'Load Balancer',
        'CodeCommit',
        'CodeDeploy',
        'CodePipeline',
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-secondary-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Experience
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Progressive delivery roles across banking, media automation, embedded vision, aviation GenAI,
            and healthcare AI — with increasing ownership of architecture and client outcomes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-primary-200" />
              )}

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <Building className="text-white" size={20} />
                </div>

                <div className="flex-1 bg-white rounded-xl p-6 shadow-sm border border-secondary-200">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900">{experience.title}</h3>
                      <p className="text-secondary-800 font-medium">{experience.company}</p>
                      {experience.context && (
                        <p className="text-sm text-secondary-600 mt-1">{experience.context}</p>
                      )}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-secondary-600 mt-2 text-sm">
                        <span className="flex items-center">
                          <Calendar className="mr-1" size={16} />
                          {experience.period}
                        </span>
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-secondary-900 mb-3 flex items-center">
                      <Award className="mr-2" size={16} />
                      Selected responsibilities & outcomes
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="text-sm text-secondary-600 flex items-start"
                        >
                          <span className="text-primary-600 mr-2 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Technologies</h4>
                    <div className="flex flex-wrap">
                      {experience.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-stack">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm border border-secondary-200">
          <h3 className="text-2xl font-bold text-secondary-900 mb-6 text-center">Education</h3>
          <p className="text-center text-secondary-700">
            <strong className="text-secondary-900">B.E., Computer Science & Engineering</strong>
            <br />
            Paavai Engineering College, Namakkal, Tamil Nadu — 2012–2016 (GPA 7.1)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
