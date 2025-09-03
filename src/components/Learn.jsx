import React from 'react';
import { FaBook, FaPray, FaLightbulb, FaLanguage, FaUserGraduate } from 'react-icons/fa';

const Learn = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left - Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            What You’ll Learn with Us
          </h2>

          <ul className="space-y-4 text-gray-700 text-sm">
            <li className="flex items-start">
              <FaBook className="text-green-600 mt-1 mr-3" />
              <span>Master the recitation of the Holy Qur’an with proper Tajweed rules.</span>
            </li>
            <li className="flex items-start">
              <FaUserGraduate className="text-green-600 mt-1 mr-3" />
              <span>Memorize Qur’an through our structured Hifz programs guided by certified Ustadhs.</span>
            </li>
            <li className="flex items-start">
              <FaLanguage className="text-green-600 mt-1 mr-3" />
              <span>Learn Arabic from basic letters to full understanding of Qur’anic text.</span>
            </li>
            <li className="flex items-start">
              <FaPray className="text-green-600 mt-1 mr-3" />
              <span>Understand Fiqh, Aqeedah, and how to perform Salah correctly.</span>
            </li>
            <li className="flex items-start">
              <FaLightbulb className="text-green-600 mt-1 mr-3" />
              <span>Interactive sessions designed to instill love for Islam in young hearts.</span>
            </li>

            <li className="flex items-start">
              <FaBook className="text-green-600 mt-1 mr-3" />
              <span>Quran Learning Illustration .</span>
            </li>
          </ul>
        </div>


      </div>
    </section>
  );
};

export default Learn;

