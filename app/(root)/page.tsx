import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('/HomePgImg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <h1>Welcome to Our CCTV Store</h1>
      </div>

      <div className="text-center text-4xl font-bold my-8">
        Popular Packages
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 mb-12">
        {/* Package 1 */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
          <img
            src="/closeup-cctv-camera-wall.jpg"
            alt="Basic CCTV Package"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold mb-2">Basic Package</h2>
            <p className="text-gray-600 mb-4">
              Includes 2 HD cameras with DVR setup and installation.
            </p>
            <p className="text-xl font-bold text-blue-600 mb-4">$199</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              View Details
            </button>
          </div>
        </div>

        {/* Package 2 */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
          <img
            src="/3d-rendering-biorobots-concept.jpg"
            alt="Standard CCTV Package"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold mb-2">Standard Package</h2>
            <p className="text-gray-600 mb-4">
              4 HD cameras, DVR with remote access, and full setup.
            </p>
            <p className="text-xl font-bold text-blue-600 mb-4">$349</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              View Details
            </button>
          </div>
        </div>

        {/* Package 3 */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
          <img
            src="/set-security-cameras.jpg"
            alt="Premium CCTV Package"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold mb-2">Premium Package</h2>
            <p className="text-gray-600 mb-4">
              8 HD cameras, DVR + Cloud storage, remote mobile access.
            </p>
            <p className="text-xl font-bold text-blue-600 mb-4">$599</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              View Details
            </button>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-50">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Our Brands</h2>
          <p className="text-gray-500 mt-2">
            We partner with the world’s leading CCTV and security brands
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-6 md:px-16 items-center justify-center">
          {/* Brand 1 */}
          <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex justify-center items-center">
            <img
              src="/Hikvision.png"
              alt="Hikvision"
              className="h-12 object-contain grayscale hover:grayscale-0 transition"
            />
          </div>

          {/* Brand 2 */}
          <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex justify-center items-center">
            <img
              src="/brands/dahua.png"
              alt="Dahua"
              className="h-12 object-contain grayscale hover:grayscale-0 transition"
            />
          </div>

          {/* Brand 3 */}
          <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex justify-center items-center">
            <img
              src="/brands/uniview.png"
              alt="Uniview"
              className="h-12 object-contain grayscale hover:grayscale-0 transition"
            />
          </div>

          {/* Brand 4 */}
          <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex justify-center items-center">
            <img
              src="/brands/axis.png"
              alt="Axis"
              className="h-12 object-contain grayscale hover:grayscale-0 transition"
            />
          </div>

          {/* Brand 5 */}
          <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex justify-center items-center">
            <img
              src="/brands/cpplus.png"
              alt="CP Plus"
              className="h-12 object-contain grayscale hover:grayscale-0 transition"
            />
          </div>

          {/* Brand 6 */}
          <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex justify-center items-center">
            <img
              src="/brands/ezviz.png"
              alt="Ezviz"
              className="h-12 object-contain grayscale hover:grayscale-0 transition"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">
            Popular{" "}
            <span className="underline decoration-blue-500">Categories</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Explore the best CCTV and security product categories
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-16">
          {/* Left large image */}
          <div className="relative rounded-2xl overflow-hidden md:row-span-2 group cursor-pointer">
            <img
              src="/categories/cctv-systems.jpg"
              alt="CCTV Systems"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center transition duration-300 group-hover:bg-opacity-60">
              <h3 className="text-3xl font-bold mb-2">CCTV Systems</h3>
              <p className="text-sm uppercase tracking-wide flex items-center gap-1">
                Explore <span>›</span>
              </p>
            </div>
          </div>

          {/* Top right card */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
            <img
              src="/categories/wireless-cameras.jpg"
              alt="Wireless Cameras"
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white transition duration-300 group-hover:bg-opacity-60">
              <h3 className="text-2xl font-bold mb-2">Wireless Cameras</h3>
              <p className="text-sm uppercase tracking-wide flex items-center gap-1">
                Explore <span>›</span>
              </p>
            </div>
          </div>

          {/* Middle right card */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
            <img
              src="/categories/smart-doorbells.jpg"
              alt="Smart Doorbells"
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white transition duration-300 group-hover:bg-opacity-60">
              <h3 className="text-2xl font-bold mb-2">Smart Doorbells</h3>
              <p className="text-sm uppercase tracking-wide flex items-center gap-1">
                Explore <span>›</span>
              </p>
            </div>
          </div>

          {/* Bottom right card */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer md:col-span-2">
            <img
              src="/categories/access-control.jpg"
              alt="Access Control Systems"
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white transition duration-300 group-hover:bg-opacity-60">
              <h3 className="text-2xl font-bold mb-2">
                Access Control Systems
              </h3>
              <p className="text-sm uppercase tracking-wide flex items-center gap-1">
                Explore <span>›</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">
            Best <span className="underline decoration-blue-500">Sellers</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Our most trusted and popular security products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 md:px-16">
          {/* Product Card 1 */}
          <div className="bg-gray-50 rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="relative">
              <img
                src="/products/cctv-camera.jpg"
                alt="HD CCTV Camera"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Hot
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                HD CCTV Camera
              </h3>
              <p className="text-sm text-gray-500 mt-1">1080p | Night Vision</p>

              {/* Rating */}
              <div className="flex items-center mt-3 text-yellow-400">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span className="text-gray-300">⭐</span>
              </div>

              {/* Price */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-blue-600">
                  LKR 18,500
                </span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-gray-50 rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="relative">
              <img
                src="/products/wireless-kit.jpg"
                alt="Wireless CCTV Kit"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Bestseller
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                Wireless CCTV Kit
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                4 Cameras | 1TB Storage
              </p>
              <div className="flex items-center mt-3 text-yellow-400">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-blue-600">
                  LKR 48,900
                </span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="bg-gray-50 rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="relative">
              <img
                src="/products/doorbell.jpg"
                alt="Smart Doorbell"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Trending
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                Smart Doorbell
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                2-Way Audio | App Control
              </p>
              <div className="flex items-center mt-3 text-yellow-400">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span className="text-gray-300">⭐</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-blue-600">
                  LKR 14,700
                </span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="bg-gray-50 rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="relative">
              <img
                src="/products/dvr.jpg"
                alt="8-Channel DVR"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Featured
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                8-Channel DVR
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                H.265+ | Remote Access
              </p>
              <div className="flex items-center mt-3 text-yellow-400">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span className="text-gray-300">⭐</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-blue-600">
                  LKR 22,300
                </span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">
            Our <span className="underline decoration-blue-500">Gallery</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Explore our recent CCTV installations and setups
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-16">
          {/* Image 1 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <img
              src="/gallery/install1.jpg"
              alt="Installation 1"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                Office Setup
              </span>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <img
              src="/gallery/install2.jpg"
              alt="Installation 2"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                Warehouse
              </span>
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <img
              src="/gallery/install3.jpg"
              alt="Installation 3"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                Home Security
              </span>
            </div>
          </div>

          {/* Image 4 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <img
              src="/gallery/install4.jpg"
              alt="Installation 4"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                Outdoor Setup
              </span>
            </div>
          </div>

          {/* Image 5 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <img
              src="/gallery/install5.jpg"
              alt="Installation 5"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                Retail Store
              </span>
            </div>
          </div>

          {/* Image 6 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <img
              src="/gallery/install6.jpg"
              alt="Installation 6"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                Hotel Lobby
              </span>
            </div>
          </div>

          {/* Image 7 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <img
              src="/gallery/install7.jpg"
              alt="Installation 7"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                Parking Area
              </span>
            </div>
          </div>

          {/* Image 8 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <img
              src="/gallery/install8.jpg"
              alt="Installation 8"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                Factory Zone
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">
            What Our{" "}
            <span className="underline decoration-blue-500">Customers Say</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Real experiences from our happy clients
          </p>
        </div>

        {/* Feedback Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16">
          {/* Card 1 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-4">
              <img
                src="/customers/user1.jpg"
                alt="Customer 1"
                className="w-14 h-14 rounded-full mr-4 object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Ruwan Perera
                </h3>
                <p className="text-sm text-gray-500">Home CCTV Setup</p>
              </div>
            </div>

            <p className="text-gray-600 mb-4">
              “Excellent service! The team installed cameras quickly and
              explained everything clearly. The video quality is superb and app
              monitoring works perfectly.”
            </p>

            <div className="flex text-yellow-400">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.785 1.401 8.17L12 18.896l-7.335 3.87 1.401-8.17L.132 9.211l8.2-1.193L12 .587z" />
                  </svg>
                ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-4">
              <img
                src="/customers/user2.jpg"
                alt="Customer 2"
                className="w-14 h-14 rounded-full mr-4 object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Nadeesha Silva
                </h3>
                <p className="text-sm text-gray-500">Office Security System</p>
              </div>
            </div>

            <p className="text-gray-600 mb-4">
              “Professional team with great after-sales support. The remote
              access feature is really helpful for our office monitoring. Highly
              recommended!”
            </p>

            <div className="flex text-yellow-400">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.785 1.401 8.17L12 18.896l-7.335 3.87 1.401-8.17L.132 9.211l8.2-1.193L12 .587z" />
                  </svg>
                ))}
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-4">
              <img
                src="/customers/user3.jpg"
                alt="Customer 3"
                className="w-14 h-14 rounded-full mr-4 object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Chamika Fernando
                </h3>
                <p className="text-sm text-gray-500">Retail Store</p>
              </div>
            </div>

            <p className="text-gray-600 mb-4">
              “Great pricing and reliable equipment. The DVR interface is easy
              to use and the camera clarity is amazing even at night.”
            </p>

            <div className="flex text-yellow-400">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.785 1.401 8.17L12 18.896l-7.335 3.87 1.401-8.17L.132 9.211l8.2-1.193L12 .587z" />
                  </svg>
                ))}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5 text-yellow-400"
              >
                <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.785 1.401 8.17L12 18.896l-7.335 3.87 1.401-8.17L.132 9.211l8.2-1.193L12 .587z" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
