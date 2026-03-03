const CTA = () => {
  return (
    <section className="py-24 bg-chocolate text-gray-600 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Ready To Transform Your Look?
        </h2>

        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
          Join over 5,000+ confident queens across Nigeria who trust KrownLuxe
          for premium, long-lasting human hair.
        </p>

        <button
          className="mt-10 bg-gold text-black font-semibold 
          px-8 py-4 rounded-full text-lg bg-pink-300
          hover:scale-105 hover:shadow-2xl 
          transition duration-300"
        >
          Shop Premium Collection
        </button>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gold opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-softpink opacity-20 blur-3xl rounded-full"></div>
    </section>
  );
};

export default CTA;
