import React from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Muhammad Yusuf',
    img: '/avatars/student1.jpg',
    stars: 5,
    lang: 'en',
    text: 'Learning Quran online with this madrassa has changed my life. The Ustadhs are very kind and knowledgeable.',
  },
  {
    name: 'فاطمہ علی',
    img: '/avatars/student2.jpg',
    stars: 5,
    lang: 'ar',
    text: 'الحمد لله، هذا المعهد رائع. تعلمتُ القرآن والتجويد بطريقة سهلة وممتعة.',
  },
  {
    name: 'عائشہ خان',
    img: '/avatars/student3.jpg',
    stars: 5,
    lang: 'ur',
    text: 'الحمدللہ! آن لائن مدرسہ نے مجھے قرآن سیکھنے میں بہت مدد دی۔ اساتذہ بہت محنتی اور مخلص ہیں۔',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-blue-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">We value our Students</h2>
        <p className="text-lg text-gray-600 mb-10">Let’s hear what they say</p>

        <div className="space-y-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 flex items-start gap-4 text-left"
              dir={t.lang === 'ar' || t.lang === 'ur' ? 'rtl' : 'ltr'}
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-gray-700 text-sm mb-2 font-[sans-serif]">{t.text}</p>
                <h4 className="text-blue-700 font-semibold">{t.name}</h4>
                <div className="flex gap-1 mt-1 text-yellow-500">
                  {[...Array(t.stars)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

