import { Link } from 'react-router-dom'; 

function Hero() {
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-center bg-cover"
      style={{ backgroundImage: "url('/madrassah.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center text-white max-w-2xl px-6">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-snug">
          ONLINE MADRASSA LEARNING  
          <br /> FOR{' '}
          <span className="text-yellow-400">STUDENTS</span> WORLDWIDE
        </h1>
        
        <p className="text-lg text-yellow-400 md:text-xl mb-6 tracking-wide">
          Empowering Students with Quran & Islamic Knowledge
        </p>

        {/* Buttons with spacing */}
        <div className="flex justify-center space-x-4">
          <Link  to="/contact" className="px-8 py-3 border border-white text-white text-lg font-semibold rounded-md hover:bg-white hover:text-black transition">
            VIEW COURSES
          </Link>
          <Link to="/contact" className="px-8 py-3 bg-teal-600 text-white text-lg font-semibold rounded-md hover:bg-white hover:text-black transition">
                Join Us Now
          </Link>





        </div>
      </div>
    </div>
  );
}

export default Hero;


