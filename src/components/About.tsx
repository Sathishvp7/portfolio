import React from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              About me
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              I focus on shipping systems that teams can rely on: clear requirements, solid data
              foundations, models that behave in production, and feedback loops once they are live.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Career path
              </h3>

              <div className="space-y-4 text-secondary-700">
                <p>
                  I started as a Software Program Analyst (Data Scientist) at{' '}
                  <strong className="text-secondary-900">FIS Global</strong>, building ML and MLOps
                  solutions for banking clients — including classification at portfolio scale on AWS
                  and containerized deployments that shortened release cycles from days to hours.
                </p>

                <p>
                  At <strong className="text-secondary-900">Straive</strong> I led data science for
                  media and document automation: salient-region models for smart cropping, OCR for
                  title extraction, and production pipelines handling tens of thousands of assets per
                  month.
                </p>

                <p>
                  As Project Lead Data Scientist at <strong className="text-secondary-900">Mobiveil</strong>,
                  I led a small engineering team on computer-vision systems for indoor object detection
                  to support automated UV disinfection workflows in hospitality and healthcare settings.
                </p>

                <p>
                  At <strong className="text-secondary-900">Photon Interactive</strong> (client:{' '}
                  <strong className="text-secondary-900">Alaska Airlines</strong>), I led delivery of
                  enterprise GenAI assistants — ingestion through retrieval, deployment on Azure, and
                  operational monitoring alongside Databricks and Dataiku.
                </p>

                <p>
                  I am now a Senior Data Scientist at <strong className="text-secondary-900">Ideas2IT</strong>,
                  working with healthcare clients on vision, agentic RAG, and NLP for clinical and billing
                  workflows — owning the full lifecycle from data engineering through deployment on AWS.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                How I work
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-primary-50 rounded-lg">
                  <Target className="text-primary-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-1">Outcome-oriented delivery</h4>
                    <p className="text-sm text-secondary-600">
                      I align modeling choices with operational constraints: accuracy where it matters,
                      latency and cost where they matter, and measurable reduction in manual work when
                      that is the goal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-secondary-50 rounded-lg">
                  <Users className="text-primary-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-1">Leadership & collaboration</h4>
                    <p className="text-sm text-secondary-600">
                      I have led small teams and multiple concurrent workstreams with clients and
                      engineering partners — from discovery through handoff and monitoring.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-primary-50 rounded-lg">
                  <Lightbulb className="text-primary-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-1">GenAI where it fits</h4>
                    <p className="text-sm text-secondary-600">
                      Practical use of RAG, agents (e.g. LangGraph), and LLM tooling — not every problem
                      needs a frontier model; I prioritize the right architecture for the use case.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-secondary-50 rounded-lg">
                  <Award className="text-primary-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-1">End-to-end ownership</h4>
                    <p className="text-sm text-secondary-600">
                      Data engineering, training and evaluation, packaging, deployment, and iteration
                      based on production signals — primarily on AWS and Azure stacks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6 text-center">
              Domains I have shipped in
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center text-secondary-700">
              <div>
                <div className="text-xl font-bold text-primary-600 mb-2">Healthcare</div>
                <p className="text-sm">
                  Vision for medication labels, clinical NLP, billing code prediction, protocol extraction
                </p>
              </div>
              <div>
                <div className="text-xl font-bold text-primary-600 mb-2">Aviation</div>
                <p className="text-sm">
                  Enterprise GenAI assistants and document retrieval at scale for internal airline teams
                </p>
              </div>
              <div>
                <div className="text-xl font-bold text-primary-600 mb-2">Banking</div>
                <p className="text-sm">
                  Large-scale customer analytics and MLOps on AWS for financial services clients
                </p>
              </div>
              <div>
                <div className="text-xl font-bold text-primary-600 mb-2">Retail & media</div>
                <p className="text-sm">
                  Smart cropping and OCR pipelines; document automation replacing manual comparison
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
