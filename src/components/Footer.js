import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="space-x-6 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaFacebook size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
        </div>
        <div className='text-white py-5'><p>The Cloudkenya.com</p></div>
        <p>&copy; 2024 Cozy Web. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
