import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, FileDown } from 'lucide-react';
import { profileLinks } from '../profileLinks';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: profileLinks.email,
      link: `mailto:${profileLinks.email}`,
    },
    {
      icon: Phone,
      title: 'Phone',
      value: profileLinks.phone,
      link: profileLinks.phoneTel,
    },
    {
      icon: MapPin,
      title: 'Location',
      value: profileLinks.location,
      link: '#contact',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      title: 'LinkedIn',
      url: profileLinks.linkedIn,
      color: 'text-blue-600 hover:text-blue-700',
    },
    {
      icon: Github,
      title: 'GitHub',
      url: profileLinks.github,
      color: 'text-gray-800 hover:text-gray-900',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Contact
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Hiring managers, product leaders, or collaborators: the fastest path is email or LinkedIn.
            The form below is local-only until you wire it to a backend or form provider.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">Get in touch</h3>
              <p className="text-secondary-600 mb-8">
                I am open to senior IC or tech-lead data science roles, well-scoped consulting in GenAI /
                vision / NLP, and conversations about production ML on AWS or Azure.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border border-secondary-200 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <info.icon className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">{info.title}</div>
                    <div className="text-secondary-600">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-secondary-900 mb-4">Profiles</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.title}
                    className={`w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm border border-secondary-200 hover:shadow-md transition-shadow duration-200 ${social.color}`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-secondary-200">
              <h4 className="text-lg font-semibold text-secondary-900 mb-3">Resume</h4>
              <p className="text-sm text-secondary-600 mb-4">
                Full CV with experience, projects, and skills — opens in Google Drive.
              </p>
              <a
                href={profileLinks.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors duration-200"
              >
                <FileDown className="mr-2" size={18} />
                Open resume (PDF)
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-secondary-200">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">Send a message (local demo)</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-secondary-900 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-secondary-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-secondary-900 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Optional"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-secondary-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Brief context: role, timeline, stack, and what you want to validate in a first call."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                Log to console (wire up later)
                <Send className="ml-2" size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Prefer a direct thread?</h3>
            <p className="text-lg mb-6 opacity-90">
              Email <a className="underline font-semibold" href="mailto:sathishvp7@gmail.com">sathishvp7@gmail.com</a> with
              your JD or problem statement — I typically reply within a few business days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:sathishvp7@gmail.com"
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Email me
              </a>
              <a
                href="#projects"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Review projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
