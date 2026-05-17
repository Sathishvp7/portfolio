import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { profileLinks } from '../profileLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      url: profileLinks.linkedIn,
      label: 'LinkedIn'
    },
    {
      icon: Github,
      url: profileLinks.github,
      label: 'GitHub'
    },
    {
      icon: Mail,
      url: `mailto:${profileLinks.email}`,
      label: 'Email'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#work' },
    { name: 'Thought Leadership', href: '#thought-leadership' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: profileLinks.resume, external: true },
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-max">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold gradient-text">
                Sathish Anantharaj
              </h3>
              <p className="text-secondary-300 leading-relaxed">
                Senior Data Scientist — GenAI, computer vision, and NLP — shipping on AWS and Azure across
                healthcare, aviation, banking, and media.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      {...('external' in link && link.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="text-secondary-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-2 text-secondary-300">
                <p>Ready to discuss your next project?</p>
                <p>Let's explore how AI can transform your business.</p>
                <div className="pt-2">
                  <a
                    href={`mailto:${profileLinks.email}`}
                    className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-200"
                  >
                    <Mail className="mr-2" size={16} />
                    {profileLinks.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary-400 text-sm">
              © {currentYear} Sathish Anantharaj. All rights reserved.
            </div>
            <div className="text-secondary-400 text-sm text-center md:text-right">
              Built as a personal portfolio site.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
