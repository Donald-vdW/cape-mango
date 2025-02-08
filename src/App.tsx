import React, { useState, useEffect } from 'react';
import { Citrus as Fruit, Sun, Truck, Phone, Mail, MapPin, Instagram, Facebook, Menu, X, FileText, Calendar, Users, Leaf, Tent, ChevronLeft, ChevronRight } from 'lucide-react';

// Constants
const cultivars = [
  'Joa',
  'Kent',
  'Long Green',
  'Sensation',
  'Heidi',
  'Keitt',
  'Tropica'
];

const products = [
  {
    name: "Fresh Fruit",
    description: "Premium quality fresh mangos harvested at peak ripeness from our orchards.",
    images: [
      {
        src: "/images/products/fresh-fruit-mango1.jpg",
        alt: "Mango pulp"
      },{
        src: "/images/products/fruit-pulp-mango.jpg",
        alt: "Mango pulp"
      },{
        src: "/images/products/dried-fruit-lemons2.jpg",
        alt: "Dried lemon slices"
      },
    ]
  },
  {
    name: "Dried Fruit",
    description: "Naturally dried mango slices, perfect for healthy snacking.",
    images: [
      {
        src: "/images/products/dried-fruit-mango1.jpg",
        alt: "Dried mango slices"
      },
      {
        src: "/images/products/dried-fruit-lemons.jpg",
        alt: "Dried lemons"
      },
      {
        src: "/images/products/dried-fruit-rolls.jpg",
        alt: "Dried fruit rolls"
      },
      {
        src: "/images/products/grenadilla.jpg",
        alt: "Fresh grenadilla"
      }
    ]
  },
  {
    name: "Fruit Pulp",
    description: "100% pure mango pulp, ideal for juices, smoothies, and food processing.",
    images: [

      {
        src: "/images/products/fruit-pulp-mango2.jpg",
        alt: "Mango pulp products"
      },
      {
        src: "/images/products/fruit-pulp-guava.jpg",
        alt: "Guava pulp"
      },
      {
        src: "/images/products/fruit-pulp-guava2.jpg",
        alt: "Guava pulp products"
      },
      {
        src: "/images/products/fresh-mangos.jpg",
        alt: "Dried mango pieces"
      },
    ]
  }
];

const commitments = [
  {
    title: "Quality",
    description: "The health and taste of our mangoes must be of high quality."
  },
  {
    title: "Workforce",
    description: "We strive to improve and motivate our workforce through training and other internal programs."
  },
  {
    title: "Market Driven",
    description: "We aim to consistently provide and supply our customers."
  },
  {
    title: "Improvement",
    description: "We strive to continually improve the quality of our mangoes and other products."
  }
];

const training = [
  "Management training",
  "First Aid training",
  "Skills Development training",
  "Health & Safety training",
  "Forklift & Tractor Drivers licenses"
];

const certifications = [
  { name: "F2F Certificate", pdf: "#" },
  { name: "GLOBALGAP Certificate", pdf: "#" },
  { name: "GRASP GLOBALGAP Risk Assessment", pdf: "#" },
  { name: "FSA Certificates", pdf: "#" },
  { name: "Farming for the Future", pdf: "#" },
  { name: "FSA Compliance", pdf: "#" }
];

const campFacilities = [
  "Private campsite",
  "Basic ablutions",
  "Ample shade",
  "Electricity",
  "Fireplace and braai areas",
  "Jungle Gym & foefie slide"
];

const campActivities = [
  "Water sports",
  "Bass and carp fishing",
  "Mountain biking",
  "Trailrunning",
  "Wild flowers (Jul-Aug)"
];

const campsiteImages = [
  {
    src: "/images/campsite/campsite1.jpg",
    alt: "Campsite view"
  },
  {
    src: "/images/campsite/campsite2.jpg",
    alt: "Campsite facilities"
  },
  {
    src: "/images/campsite/boating1.jpg",
    alt: "Boating view"
  },
  {
    src: "/images/campsite/t1.jpg",
    alt: "Boating activities"
  },
  {
    src: "/images/campsite/fishing.jpg",
    alt: "Fishing at the dam"
  },
  {
    src: "/images/campsite/nature.jpg",
    alt: "Natural surroundings"
  },
  {
    src: "/images/campsite/dogs-welcome.jpg",
    alt: "Dogs are welcome"
  }
];

const farmingTabs = [
  {
    id: 'overview',
    label: 'Overview',
    content: (
      <div className="space-y-6">
        <p>Tamarak Mango Estate is a first generation farm, started in 2005 by co-owners Bernie van den Heever and Dirk Visser. Bernie gained extensive experience in mango cultivation from 1997 - 2004 and planted the first mango trees on Tamarak in 2005 on virgin soil.</p>
        <p>At present 54 ha of mango trees are in production, with another 12 hectares of young trees expecting to come into production in the next few years, making us the largest mango farm in the Western Cape.</p>
      </div>
    )
  },
  {
    id: 'commitment',
    label: 'Our Commitment',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {commitments.map((item) => (
          <div key={item.title} className="bg-orange-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 'workforce',
    label: 'Workforce',
    content: (
      <div>
        <p className="mb-6">We strive to improve and motivate our workforce through training and development programs. We comply with occupational health and safety standard laws and improving our workforce skills is an important attribute to our success.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {training.map((item) => (
            <div key={item} className="bg-orange-50 p-4 rounded-lg flex items-center">
              <Users className="w-5 h-5 text-orange-500 mr-3" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'green',
    label: 'Green Responsibility',
    content: (
      <div className="space-y-6">
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="flex items-center font-semibold mb-4">
            <Leaf className="w-5 h-5 text-green-600 mr-2" />
            Our Environmental Commitment
          </h3>
          <div className="space-y-4">
            <p>We spray as few chemicals as possible and always attempt to utilize biological products or approaches where possible.</p>
            <p>We add 10-20 cubic metres of good quality compost per hectare of our soils every year and use soil moisture meters in every irrigation block to optimize irrigation.</p>
            <p>The natural veld continues its normal cycles every winter, when wild flowers come into bloom giving habitat to natural occurring insects.</p>
          </div>
        </div>
      </div>
    )
  }
];

function ProductCard({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  useEffect(() => {
    if (product.images.length > 1) {
      const timer = setInterval(nextImage, 5000);
      return () => clearInterval(timer);
    }
  }, [product.images.length]);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative group h-64">
        <img 
          src={product.images[currentImageIndex].src} 
          alt={product.images[currentImageIndex].alt} 
          className="w-full h-full object-cover"
        />
        {product.images.length > 1 && (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
            <button 
              onClick={previousImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-orange-900" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-orange-900" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentImageIndex === index 
                      ? 'bg-white w-4' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="mt-4">
          <a 
            href="/pricelist.pdf" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700"
          >
            <FileText className="w-4 h-4 mr-2" />
            View Price List
          </a>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % campsiteImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + campsiteImages.length) % campsiteImages.length);
  };

  useEffect(() => {
    const timer = setInterval(nextImage, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Fruit className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold text-orange-900">CAPE MANGO</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-orange-900 hover:text-orange-500">Home</a>
              <a href="#products" className="text-orange-900 hover:text-orange-500">Products</a>
              <a href="#farming" className="text-orange-900 hover:text-orange-500">Responsible Farming</a>
              <a href="#campsite" className="text-orange-900 hover:text-orange-500">Tamarak Camp</a>
              <a href="#contact" className="text-orange-900 hover:text-orange-500">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-orange-900" />
                ) : (
                  <Menu className="h-6 w-6 text-orange-900" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-orange-900 hover:bg-orange-100 rounded-md">Home</a>
              <a href="#products" className="block px-3 py-2 text-orange-900 hover:bg-orange-100 rounded-md">Products</a>
              <a href="#farming" className="block px-3 py-2 text-orange-900 hover:bg-orange-100 rounded-md">Responsible Farming</a>
              <a href="#campsite" className="block px-3 py-2 text-orange-900 hover:bg-orange-100 rounded-md">Tamarak Camp</a>
              <a href="#contact" className="block px-3 py-2 text-orange-900 hover:bg-orange-100 rounded-md">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="/images/farm/drone.jpg"
            alt="Mango orchard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">CAPE MANGO</h1>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg max-w-3xl text-center">
            <p className="text-lg mb-4">
              Welcome to CAPE MANGO (Pty) Ltd. With 66 hectares of mango trees planted, Tamarak Mango Estate is the largest mango farm in the Western Cape area. The climate of Clanwilliam and the surrounding Cederberg area provides excellent climatic conditions for mango cultivation.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a href="#products" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
                Our Products
              </a>
              <a href="#contact" className="bg-white text-orange-900 px-6 py-2 rounded-full hover:bg-orange-100 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Cultivars Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Mango Cultivars</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cultivars.map((cultivar) => (
              <div key={cultivar} className="bg-orange-50 p-4 rounded-lg text-center">
                <span className="text-lg font-semibold text-orange-900">{cultivar}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Responsible Farming Section */}
      <section id="farming" className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Responsible Farming</h2>
          
          <div className="mb-12">
            <div className="flex gap-4 overflow-x-auto pb-4">
              {farmingTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-full whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-orange-500 text-white'
                      : 'bg-orange-100 text-orange-900 hover:bg-orange-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            <div className="mt-8">
              {farmingTabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
                >
                  {tab.content}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-orange-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Our Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert) => (
                <a
                  key={cert.name}
                  href={cert.pdf}
                  className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <FileText className="w-6 h-6 text-orange-500 mr-3" />
                  <span>{cert.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tamarak Camp Section */}
      <section id="campsite" className="py-16 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Tamarak Camp Site</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative group">
              <div className="relative h-96 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={campsiteImages[currentImageIndex].src}
                  alt={campsiteImages[currentImageIndex].alt}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                
                {/* Navigation arrows */}
                <button 
                  onClick={previousImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-orange-900" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-orange-900" />
                </button>

                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {campsiteImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentImageIndex === index 
                          ? 'bg-white w-4' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-lg mb-6">
                Our private campsite on Clanwilliam Dam allows for one group at a time, making it ideal for gatherings of family and friends. Experience peaceful surroundings with basic amenities and various activities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold mb-4">Facilities</h3>
                  <ul className="space-y-2">
                    {campFacilities.map((facility) => (
                      <li key={facility} className="flex items-center">
                        <Tent className="w-4 h-4 text-orange-500 mr-2" />
                        {facility}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold mb-4">Activities</h3>
                  <ul className="space-y-2">
                    {campActivities.map((activity) => (
                      <li key={activity} className="flex items-center">
                        <Sun className="w-4 h-4 text-orange-500 mr-2" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Rates</h3>
                <p className="mb-2">Peak times: R100 per person per night</p>
                <p className="mb-4">Off-peak times: R80 per person per night</p>
                <p className="text-sm text-gray-600">Kids up to grade 7 half price</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-orange-100 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-orange-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>bernie@capemango.co.za</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-orange-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>+27 82 807 5882</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-orange-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p>PO Box 403</p>
                  <p>Clanwilliam</p>
                  <p>8135</p>
                  <p>Western Cape</p>
                  <p className="mt-2 text-sm text-gray-600">GPS: -32.248503, 18.940771</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Company Details</h3>
                <p>Reg Nr: 2004/021182/07</p>
                <p>VAT Nr: 4090215411</p>
              </div>
            </div>
            
            <div className="h-[400px] bg-gray-100 rounded-lg">
              {/* Embed Google Maps here */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3!2d18.940771!3d-32.248503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDE0JzU0LjYiUyAxOMKwNTYnMjYuOCJF!5e0!3m2!1sen!2s!4v1635959681000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2024 CAPE MANGO (PTY) Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;