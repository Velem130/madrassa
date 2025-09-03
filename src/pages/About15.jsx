import { FaBookOpen, FaChalkboardTeacher, FaUsers, FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';
// src/pages/About1.jsx

const About15 = () => {
  return (
    <div>

      <section className="bg-black text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About us</h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto">
           Contact Us.
            Feel free to reach out via email or phone!
        </p>
       </section>

        {/* Hero/Testimonial Section */}
      <section className="text-center py-12 px-4 bg-gradient-to-b from-green-100 to-white">
        <FaQuoteLeft className="text-green-600 text-4xl mx-auto mb-4" />
        <p className="text-lg italic max-w-2xl mx-auto">
          "Learning Quran and Islamic knowledge from home has never been easier. Online Madrassa has changed my family's life with their caring teachers and structured programs."
        </p>
        <div className="mt-4">
          <p className="font-semibold text-sm">Fatima Suleiman</p>
          <p className="text-xs text-gray-500">Parent of 3 Students</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="text-center py-12 bg-grey-200 text-black">
        <h2 className="text-2xl font-bold text-green-400 mb-6">Let the Numbers Talk</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <FaBookOpen className="text-green-500 text-4xl mx-auto mb-2" />
            <p className="text-3xl font-bold">13+</p>
            <p className="text-sm">Courses</p>
          </div>
          <div>
            <FaChalkboardTeacher className="text-green-500 text-4xl mx-auto mb-2" />
            <p className="text-3xl font-bold">28+</p>
            <p className="text-sm">Qualified Instructors</p>
          </div>
          <div>
            <FaUsers className="text-green-500 text-4xl mx-auto mb-2" />
            <p className="text-3xl font-bold">52+</p>
            <p className="text-sm">Students Enrolled</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h3 className="uppercase text-green-500 text-sm font-bold mb-2">Our Story</h3>
        <h2 className="text-2xl font-bold mb-4">From humble beginnings to a global Ummah</h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          Online Madrassa started with a vision — to make Islamic education accessible to every home. What began as a few video lessons has grown into a global platform teaching Quran, Tajweed, Arabic, and Islamic values to thousands of learners across the world.
          With dedicated teachers and a mission to spread knowledge, we’ve built a system that empowers children and adults alike to connect with their Deen—wherever they are.
        </p>
      </section>

      {/* Our Vision */}
      <section className="py-8 px-6 max-w-5xl mx-auto">
        <h3 className="uppercase text-green-500 text-sm font-bold mb-2">Our Vision</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Our vision is to see a world where every Muslim has access to quality Islamic education—free from borders, costs, or barriers. We believe that by making authentic Islamic knowledge available online, we can help nurture a stronger, more informed Ummah.
        </p>
      </section>

      {/* Our Mission */}
      <section className="py-8 px-6 max-w-5xl mx-auto">
        <h3 className="uppercase text-green-500 text-sm font-bold mb-2">Our Mission</h3>
        <p className="text-gray-700 text-sm mb-4">Our mission stands on three pillars:</p>
        <ul className="space-y-3 text-sm text-gray-800">
          <li className="flex items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-2" />
            <span>Provide easy and affordable access to Islamic education for everyone, everywhere.</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-2" />
            <span>Inspire a love for Quran and Sunnah through qualified teachers and live classes.</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-2" />
            <span>Build a digital madrassa that supports communities, parents, and educators around the globe.</span>
          </li>
        </ul>
      </section>

      {/* Optional Fun Footer Line */}
      <div className="text-center text-xs text-gray-500 py-4">
        Empowering the Ummah with knowledge 🌙 | Since 2022
      </div>

    </div>
  );
};

export default About15;
