import React, { useState } from 'react';
import { FiMail, FiMapPin } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'success', 'error', or null
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/xandpjoj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }

    setLoading(false);
  };

  return (
    <div className="bg-white text-black">
      {/* Header section with background */}
      <section className="bg-black text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Contacts</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
          Contact us for any inquiries regarding courses, pricing, or registration.
          We are happy to assist you on your journey to Islamic knowledge.
        </p>

      
      </section>

      {/* Contact Info */}
      <section className="px-6 md:px-20 py-14 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-700">
          Contact Information
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mb-14">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-start space-x-4">
              <FiMail className="text-2xl text-green-600 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-black">Email</h4>
                <p className="text-gray-600">mlulekivelem@gmail.com <br /> annooronlinemadrassah@gmail.com </p>
                <small className="text-gray-500">We’ll respond within 24 hours</small>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start space-x-4">
              <div className="rounded-full bg-green-600 p-2">
                <BsWhatsapp className="text-white text-xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-black">WhatsApp</h4>
                <p className="text-gray-600">+27 84 048 9731</p>
                <a
                  href="https://wa.me/27840489731"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Send us a WhatsApp message
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-4">
              <FiMapPin className="text-2xl text-green-600 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-black">Location</h4>
                <p className="text-gray-600">South Africa, Pretoria, Centurion</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-start space-x-4">
              <FaInstagram className="text-2xl text-green-600 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-black">Social Media</h4>
                <p className="text-gray-600">@online_madrassa-world wide</p>
                <small className="text-gray-500">Follow for updates & content</small>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-green-700 mb-4">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your Message"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>

              <input type="hidden" name="_subject" value="New Contact Form Submission" />
              <input type="hidden" name="_next" value="https://your-website.com/thank-you" />

              <button
                type="submit"
                disabled={loading}
                className={`${
                  loading ? 'bg-green-400' : 'bg-green-600 hover:bg-green-700'
                } text-white px-6 py-2 rounded-md transition`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 font-semibold mt-2">✅ Your message has been sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 font-semibold mt-2">❌ There was an error sending your message. Please try again later.</p>
              )}
            </form>
          </div>
        </div>

        {/* Response Times */}
        <div className="bg-gray-100 p-6 rounded-md text-sm text-left">
          <h4 className="text-black font-semibold mb-2">Response Times</h4>
          <p><strong>Email inquiries:</strong> Within 24 hours</p>
          <p><strong>WhatsApp messages:</strong> Within 2 hours</p>
          <p><strong>Support:</strong> 24/7 Available</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;



