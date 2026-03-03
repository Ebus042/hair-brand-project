import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Shop", "Reviews", "Contact"];

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="flex justify-between items-center px-6 md:px-12 py-5 max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-chocolate">
          {" "}
          NEA-DEV Krown<span className="text-gold">Luxe</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="hover:text-gold cursor-pointer transition"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-gold text-white px-5 py-2 rounded-full hover:opacity-90 transition">
          Shop Now
        </button>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-chocolate"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 font-medium">
          {navLinks.map((link, index) => (
            <li
              key={index}
              onClick={() => setIsOpen(false)}
              className="hover:text-gold cursor-pointer transition"
            >
              {link}
            </li>
          ))}
        </ul>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsOpen(false)}
            className="bg-gold text-white px-6 py-2 rounded-full hover:opacity-90 transition"
          >
            Shop Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
