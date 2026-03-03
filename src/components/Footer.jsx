const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto">
        <div>
          <h3 className="text-2xl font-bold text-gold">KrownLuxe</h3>
          <p className="mt-4 text-gray-400">
            Premium human hair brand in Nigeria delivering luxury confidence.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Shipping</li>
            <li>Returns</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Location</h4>
          <p className="text-gray-400">Lagos, Nigeria</p>
        </div>
      </div>

      <div className="text-center mt-10 text-gray-500 text-sm">
        © 2026 NEA-DEV KrownLuxe Hair. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
