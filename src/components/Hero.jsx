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

        {/* Buttons with responsive sizing */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="px-5 py-2 text-base md:px-8 md:py-3 md:text-lg border border-white text-white font-semibold rounded-md hover:bg-white hover:text-black transition"
          >
            VIEW COURSES
          </Link>
          <Link 
            to="/contact" 
            className="px-5 py-2 text-base md:px-8 md:py-3 md:text-lg bg-teal-600 text-white font-semibold rounded-md hover:bg-white hover:text-black transition"
          >
            Join Us Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;


