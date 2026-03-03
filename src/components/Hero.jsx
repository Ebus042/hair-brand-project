import heroImg from "../assets/hair-hero.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-r from-pink-300 to-softpink px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12 w-full">
        {/* Left Content */}
        <div className="mt-20 lg:mt-0">
          <h2 className="text-4xl md:text-6xl mt-5 font-bold leading-tight">
            Own The Crown You Deserve 👑
          </h2>

          <p className="mt-6 text-lg md:text-2xl text-gray-700 max-w-lg">
            100% Premium Human Hair. Luxury Lace. Long-lasting Confidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              className="bg-pink-400 md:text-2xl text-white px-6 py-3 rounded-full 
             hover:bg-pink-300 transition duration-300"
            >
              Shop Collection
            </button>

            <button
              className="border border-chocolate md:text-2xl px-6 py-3 rounded-full 
              hover:bg-pink-300 hover:text-white transition duration-300"
            >
              View Lookbook
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={heroImg}
            alt="Hair model"
            className="w-[80%] md:w-[70%] lg:w-full max-w-md lg:mt-10 object-cover drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
