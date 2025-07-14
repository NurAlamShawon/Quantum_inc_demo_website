import React from 'react';

const Footer = () => {
    return (
      <footer className="bg-black text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-8">
      <div>
        <img src="https://i.postimg.cc/SspGjvnD/image-1.png" alt="" />
        <p className="text-gray-400">Reach Your Requirement Goals Right on Schedule</p>
      </div>

      <div>
        <h4 className="font-semibold mb-3">About</h4>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li>About Us</li>
          <li>How It Works</li>
          <li>Partnership</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Categories</h4>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li>Web Development</li>
          <li>Design & Creative</li>
          <li>Programming & IT</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Support</h4>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li>Help & Support</li>
          <li>Contact Us</li>
          <li>Terms of Service</li>
        </ul>
      </div>
    </div>

    <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
      &copy; QuantumEdge Software Inc. 2025. All rights reserved.
    </div>
  </footer>
    );
};

export default Footer;