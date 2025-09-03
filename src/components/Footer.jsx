import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-green-500 text-xl font-semibold mb-3">Online Madrassa</h2>
          <p className="text-sm">
            We offer authentic Islamic education online for students of all ages. Learn Quran, Tajweed, Arabic, and Islamic studies from the comfort of your home.
          </p>
        </div>

        {/* Courses / Learning Paths */}
        <div>
          <h3 className="text-green-500 text-lg font-semibold mb-3">Courses</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-400">Quran with Tajweed</a></li>
            <li><a href="#" className="hover:text-green-400">Arabic Language</a></li>
            <li><a href="#" className="hover:text-green-400">Islamic Studies</a></li>
            <li><a href="#" className="hover:text-green-400">Hifz Program</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-green-500 text-lg font-semibold mb-3">Get In Touch</h3>
          <p className="text-sm">Pretoria, Centurion<br />South Africa</p>
          <p className="text-sm mt-2">📞 WhatsApp: <a href="https://wa.me/27840489731" className="hover:text-green-400">+27 84 048 9731</a></p>
          <p className="text-sm">✉️ Email: <a href="mailto:mlulekivelem@gmail.com" className="hover:text-green-400">mlulekivelem@gmail.com</a></p>
          <p className="text-sm">✉️ Email: <a href="mailto:annooronlinemadrassah@gmail.com" className="hover:text-green-400">annooronlinemadrassah@gmail.com</a></p>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-green-600 mt-10 pt-4 text-center text-xs text-gray-400">
        &copy; 2025 Online Madrassa | Designed with 💚 in South Africa
      </div>
    </footer>
  );
};

export default Footer;

