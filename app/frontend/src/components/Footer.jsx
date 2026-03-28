import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/leadership', label: 'Leadership' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/IMGS/athyuk.png"
                alt="Athyuk logo"
                className="w-10 h-10 rounded-lg object-cover bg-white"
              />
              <span className="font-bold text-lg">Athyuk</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Strategic architects for the Indian retail landscape since 2017, bridging global brand standards with local market execution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Expertise</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Franchise Portfolio Management</li>
              <li>Brand Incubation</li>
              <li>Operational Infrastructure</li>
              <li>Financial & Network Expansion</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  F-32, 2nd Ave, Block F, Annanagar East, Chennai, Tamil Nadu 600102
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+917200757198"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  +91 72007 57198
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Linkedin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">875+ followers</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} Athyuk Retail Ventures. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <button className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
