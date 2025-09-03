
import React from 'react';
import { FaBookOpen, FaUserGraduate, FaCheckCircle, FaCertificate } from 'react-icons/fa';

const Achivment = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-white py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">5 Years of Barakah!</h2>
        <p className="text-gray-600 mb-10">
          Alhamdulillah, our online Madrassa has helped students across the world learn the Qur’an, Arabic, and Islamic knowledge with dedication and sincerity.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stat 1 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <FaBookOpen className="text-green-600 text-3xl mx-auto mb-2" />
            <h3 className="text-xl font-semibold text-gray-800">13+</h3>
            <p className="text-gray-500">Courses</p>
          </div>

          {/* Stat 2 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <FaUserGraduate className="text-green-600 text-3xl mx-auto mb-2" />
            <h3 className="text-xl font-semibold text-gray-800">52+</h3>
            <p className="text-gray-500">Students</p>
          </div>

          {/* Stat 3 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <FaCheckCircle className="text-green-600 text-3xl mx-auto mb-2" />
            <h3 className="text-xl font-semibold text-gray-800">100%</h3>
            <p className="text-gray-500">Success Rate</p>
          </div>

          {/* Stat 4 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <FaCertificate className="text-green-600 text-3xl mx-auto mb-2" />
            <h3 className="text-xl font-semibold text-gray-800">98%</h3>
            <p className="text-gray-500">Certified</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achivment;
