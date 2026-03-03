import boneStraight from "../assets/bone-straight.jpeg";
import deepWave from "../assets/deep-wave.jpeg";
import curlyLace from "../assets/curly-lace.jpg";
import classicBob from "../assets/classic-bob.jpg";

const products = [
  {
    name: "Bone Straight",
    price: "₦180,000",
    img: boneStraight,
  },
  {
    name: "Deep Wave",
    price: "₦165,000",
    img: deepWave,
  },
  {
    name: "Curly Lace",
    price: "₦150,000",
    img: curlyLace,
  },
  {
    name: "Classic Bob",
    price: "₦130,000",
    img: classicBob,
  },
];

const Collections = () => {
  return (
    <section className="py-20 px-8 bg-nude">
      <h2 className="text-4xl font-bold text-center mb-12">
        Featured Collections
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img
              src={product.img}
              alt=""
              className="h-72 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">{product.name}</h3>
              <p className="text-gold text-xl font-bold mt-2">
                {product.price}
              </p>
              <button className="mt-4 w-full bg-chocolate text-white py-2 rounded-full hover:bg-gold transition">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
