import { Link } from 'react-router-dom'; 

function Prices() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Pricing Plans</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Affordable, flexible, and accessible Online Madrassa classes for all ages.
          Each class is 35 minutes long with qualified teachers.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-6 md:px-20 grid gap-8 md:grid-cols-3">
        {/* Basic Plan */}
        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold mb-4 text-green-700">Basic Plan</h2>
          <p className="mb-6 text-gray-600">2 Classes per Week</p>
          <div className="text-3xl font-bold mb-2">$30 / month</div>
          <div className="text-xl text-gray-700 mb-6">ZA R550</div>
          <ul className="mb-6 space-y-2 text-gray-600">
            <li>✔️ Learn Qur’an Reading & Tajweed</li>
            <li>✔️ 40 min per class</li>
            <li>✔️ Flexible Timings</li>
          </ul>
          <a
  href="https://wa.me/27840489731"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full block text-center py-3 bg-black text-white rounded-lg hover:bg-green-600 transition"
>
  Enroll Now
</a>

        </div>

        {/* Standard Plan */}
        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition border-2 border-green-700">
          <h2 className="text-2xl font-bold mb-4 text-green-700">Standard Plan</h2>
          <p className="mb-6 text-gray-600">4 Classes per Week</p>
          <div className="text-3xl font-bold mb-2">$55 / month</div>
          <div className="text-xl text-gray-700 mb-6">ZA R1000</div>
          <ul className="mb-6 space-y-2 text-gray-600">
            <li>✔️ Qur’an Reading, Tajweed & Duas</li>
            <li>✔️ 40 min per class</li>
            <li>✔️ Free Progress Reports</li>
          </ul>
          <a
  href="https://wa.me/27840489731"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full block text-center py-3 bg-black text-white rounded-lg hover:bg-green-600 transition"
>
  Enroll Now
</a>

        </div>

        {/* Premium Plan */}
        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold mb-4 text-green-700">Premium Plan</h2>
          <p className="mb-6 text-gray-600">5 Classes per Week</p>
          <div className="text-3xl font-bold mb-2">$80 / month</div>
          <div className="text-xl text-gray-700 mb-6">ZA R1350</div>
          <ul className="mb-6 space-y-2 text-gray-600">
            <li>✔️ Qur’an Reading, Tajweed & Hifz</li>
            <li>✔️ Dedicated Tutor</li>
            <li>✔️ Priority Support</li>
          </ul>
          <a
             href="https://wa.me/27840489731"
             target="_blank"
             rel="noopener noreferrer"
            className="w-full block text-center py-3 bg-black text-white rounded-lg hover:bg-green-600 transition"
        >
              Enroll Now
     </a>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Why Choose Our Online Madrassa?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-green-700">Qualified Tutors</h3>
            <p>Our teachers are certified, experienced, and passionate about Islamic education.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-green-700">Flexible Schedules</h3>
            <p>We adapt to your timezone and daily routine so learning is never stressful.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-green-700">Affordable Learning</h3>
            <p>High-quality Islamic education that doesn’t break your budget.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 text-black py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Journey Today</h2>
        <p className="text-lg mb-6">Join hundreds of students already learning with us.</p>
        <Link to="/contact" className="px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-green-200 transition">
          Join Now
        </Link>
      </section>
    </div>
  );
}

export default Prices;