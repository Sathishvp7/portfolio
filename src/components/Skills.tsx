import React from 'react';
import { Brain, Database, Cloud, Users, Code, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'GenAI & agents',
      icon: Zap,
      skills: [
        'LangChain',
        'LangGraph',
        'AutoGen',
        'CrewAI',
        'RAG',
        'Prompt engineering',
        'Fine-tuning (QLoRA)',
        'Quantization',
        'SLMs',
        'Phidata',
      ],
    },
    {
      title: 'ML / deep learning',
      icon: Brain,
      skills: [
        'Regression & classification',
        'Clustering',
        'CNN, LSTM, UNet, YOLO',
        'ARIMA / SARIMA, Prophet',
        'OCR (Tesseract, EasyOCR)',
        'TensorFlow & Keras',
        'PyTorch',
        'OpenCV',
        'Transformers',
      ],
    },
    {
      title: 'Cloud & MLOps',
      icon: Cloud,
      skills: [
        'AWS: SageMaker, EC2, S3, EKS, ECR, IAM',
        'Azure & Azure Functions',
        'Databricks',
        'Dataiku',
        'MLflow',
        'CI/CD: Azure DevOps, CodePipeline',
      ],
    },
    {
      title: 'Languages & data stores',
      icon: Database,
      skills: [
        'Python',
        'SQL',
        'NoSQL',
        'PostgreSQL',
        'MySQL',
        'Oracle',
        'ChromaDB',
        'Redis',
        'FAISS',
      ],
    },
    {
      title: 'Leadership & ways of working',
      icon: Users,
      skills: [
        'Leading small engineering teams',
        'Multiple concurrent client workstreams',
        'Stakeholder alignment on scope and metrics',
        'Mentoring through code review and design',
        'Agile delivery with client engineering',
      ],
    },
    {
      title: 'Engineering for ML',
      icon: Code,
      skills: [
        'Streamlit prototypes',
        'Containerized services',
        'REST-style integration patterns',
        'Evaluation and monitoring hooks',
        'Reproducible training and deployment pipelines',
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-secondary-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Skills & tooling
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Below reflects tools and methods I have used on real programs — not an exhaustive claim
            of mastery in every item. On each engagement I go deep on the stack the problem requires.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-secondary-200 card-hover"
            >
              <div className="flex items-center mb-4">
                <category.icon className="text-primary-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-secondary-900">{category.title}</h3>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl p-8 shadow-sm border border-secondary-200">
          <h3 className="text-xl font-bold text-secondary-900 mb-3 text-center">
            Certifications & learning
          </h3>
          <p className="text-center text-secondary-600 max-w-2xl mx-auto">
            Applied AI (MongoDB University), Oniggle, GenAI Pinnacle Plus Program — alongside continuous
            hands-on work on client and independent projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
