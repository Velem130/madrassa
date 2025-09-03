import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'How can I enroll in the online madrassa?',
    answer: 'You can enroll by contacting us via WhatsApp or filling out the registration form on our website.',
  },
  {
    question: 'What are the class timings?',
    answer: 'We offer flexible class timings for different time zones. Once you register, we will discuss a suitable schedule with you.',
  },
  {
    question: 'Do I need any prior knowledge of Arabic?',
    answer: 'No. We offer beginner-level courses including Noorani Qaida, perfect for those new to Arabic.',
  },
  {
    question: 'کیا کلاسز اردو یا عربی میں ہوتی ہیں؟',
    answer: 'جی ہاں، ہمارے مدرسے میں کلاسز اردو اور عربی دونوں زبانوں میں فراہم کی جاتی ہیں۔',
  },
  {
    question: 'هل توجد دروس للأطفال؟',
    answer: 'نعم، لدينا برامج مخصصة للأطفال لتعليم القرآن والتجويد بطريقة مبسطة وجذابة.',
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-white text-center">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-teal-500 font-bold uppercase text-sm tracking-wider mb-2">FAQs</h3>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-blue-50 rounded-lg overflow-hidden transition-all">
              <button
                className={`w-full flex justify-between items-center px-5 py-4 text-lg font-medium focus:outline-none ${
                  openIndex === index ? 'bg-cyan-500 text-white' : 'text-gray-700'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {openIndex === index && (
                <div className="px-5 pb-4 pt-0 text-gray-700 bg-white transition-all duration-300 ease-in-out">
                  <p className="text-sm">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link to="/contact" className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-full transition">
            📞 Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Faqs;

