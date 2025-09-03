import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // needed for navigation

const About = () => {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <div className="max-w-3xl mx-auto">
        {/* Quotation icon */}
        <FaQuoteRight className="text-teal-400 text-5xl mx-auto mb-6" />

        {/* Main mission text */}
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
          Our Madrassa is dedicated to providing quality Quranic education for learners of all ages.
          With experienced teachers, flexible timings, and a strong foundation in Tajweed and Islamic studies,
          our mission is to guide every soul towards understanding the Book of Allah ﷻ.
        </p>

        {/* CTA Button */}
        <Link
          to="/about15"
          className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          More About Us
        </Link>
      </div>
    </section>
  );
};

export default About;
