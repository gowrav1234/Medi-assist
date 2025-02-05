

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Left Section - Logo and Info */}
          <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <div className="flex justify-center md:justify-start mb-4">
            <img
          height={70}
          width={100}
          className="py-1"
          src="https://img.freepik.com/free-vector/doctors-silhouettes_23-2147498611.jpg"
          alt="logo"
        />
            </div>
            <p className="text-sm text-gray-400">
              India s most trusted generic medicine pharmacy. Trusted by 9 Lac+ customers & 100+ stores all over India.
            </p>
          </div>

          {/* Middle Section - Location */}
          <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
            <p className=" underline font-semibold text-lg">All Over India</p>
          </div>

          {/* Right Section - Links */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-1">
              {/* Company Section */}
              <div>
                <p className="font-semibold text-lg">Company</p>
                <ul className="text-sm text-gray-400 space-y-4">
                  <li><a href="/about" className="hover:underline">About Us</a></li>
                  <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                  <li><a href="/franchise" className="hover:underline">Franchise</a></li>
                  <li><a href="/blog" className="hover:underline">Blog</a></li>
                  <li><a href="/download" className="hover:underline">Download App</a></li>
                </ul>
              </div>

              {/* Our Services Section */}
              <div>
                <p className="font-semibold text-lg">Our Services</p>
                <ul className="text-sm text-gray-400 space-y-4">
                  <li><a href="/order-medicines" className="hover:underline">Order Medicines</a></li>
                  <li><a href="/lab-tests" className="hover:underline">Lab Tests</a></li>
                  <li><a href="/generic-medicines" className="hover:underline">Generic Medicines</a></li>
                  <li><a href="/compare-medicines" className="hover:underline">Compare Medicines</a></li>
                  <li><a href="/drug-comparison-tool" className="hover:underline">Drug Comparison Tool</a></li>
                  <li><a href="/nearest-store" className="hover:underline">Locate Nearest Store</a></li>
                  <li><a href="/stores" className="hover:underline">Stores Page</a></li>
                </ul>
              </div>

              {/* Policies Section */}
              <div>
                <p className="font-semibold text-lg">Policies</p>
                <ul className="text-sm text-gray-400 space-y-4">
                  <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
                  <li><a href="/terms-of-service" className="hover:underline">Terms of Services</a></li>
                  <li><a href="/return-refund-policy" className="hover:underline">Return & Refund Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

