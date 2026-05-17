import React from 'react';
import { ArrowDown, Layers, Cloud, Users, FileDown } from 'lucide-react';
import ProfileAvatar from './ProfileAvatar';
import { profileLinks } from '../profileLinks';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-16">
      <div className="container-max text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-6">
            <ProfileAvatar size="lg" />
            <p className="mt-3 text-sm font-medium text-secondary-600">Sathish Anantharaj</p>
            <p className="text-xs text-secondary-500">Senior Data Scientist · Chennai, India</p>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-900 mb-6 leading-tight">
            Data Science for{' '}
            <span className="gradient-text">Production AI Systems</span>
          </h1>

          <p className="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Senior Data Scientist with 9+ years delivering end-to-end ML and GenAI in healthcare,
            aviation, retail, and banking — from data pipelines and modeling through deployment and
            ongoing monitoring on AWS and Azure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-secondary-200">
              <Layers className="text-primary-600" size={24} />
              <div className="text-left">
                <div className="text-2xl font-bold text-secondary-900">9+</div>
                <div className="text-sm text-secondary-600">Years in AI/ML delivery</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-secondary-200">
              <Cloud className="text-primary-600" size={24} />
              <div className="text-left">
                <div className="text-lg font-bold text-secondary-900 leading-snug">AWS & Azure</div>
                <div className="text-sm text-secondary-600">Cloud-native ML & GenAI</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-secondary-200">
              <Users className="text-primary-600" size={24} />
              <div className="text-left">
                <div className="text-lg font-bold text-secondary-900 leading-snug">Cross-functional</div>
                <div className="text-sm text-secondary-600">Client & stakeholder delivery</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View projects
            </a>
            <a
              href={profileLinks.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border-2 border-secondary-300 text-secondary-800 hover:border-primary-600 hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              <FileDown className="mr-2" size={20} />
              View resume
            </a>
            <a
              href="#contact"
              className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <a href="#about" className="text-secondary-400 hover:text-primary-600 transition-colors duration-200">
              <ArrowDown size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
