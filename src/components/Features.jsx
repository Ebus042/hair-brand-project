const features = [
  "100% Virgin Human Hair",
  "Nationwide Delivery (1–3 Days)",
  "Tangle-Free & Long-Lasting",
  "Beginner-Friendly Lace",
  "Flexible Payment Options",
  "4.9/5 Customer Ratings",
];

const Features = () => {
  return (
    <section className="py-20 px-8 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Why Choose KrownLuxe
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-md hover:shadow-xl transition bg-nude"
          >
            <p className="font-semibold text-xl">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
