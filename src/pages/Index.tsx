
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sun, CloudSun, Zap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Harnessing Rajasthan's Solar Potential"
        subtitle="Empowering communities through sustainable energy solutions and government initiatives"
        backgroundImage="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80"
        buttonText="Explore Schemes"
        buttonLink="/schemes"
        overlayColor="from-black/60 to-black/30"
      />

      {/* Introduction Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Rajasthan: The Solar Powerhouse of India</h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 325 sunny days per year and vast stretches of arid land, Rajasthan stands as India's most promising state for solar energy generation. The state's abundant sunshine and government-backed initiatives have transformed it into a renewable energy hub.
            </p>
            <p className="text-lg text-gray-600">
              From the golden sands of the Thar Desert to the vibrant cities of Jaipur and Jodhpur, Rajasthan is pioneering the solar revolution in India, creating opportunities for farmers, entrepreneurs, and communities.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center bg-white shadow-md rounded-lg p-6 transform hover:scale-105 transition-transform">
              <Sun className="h-12 w-12 text-rajasthan-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">325+</h3>
              <p className="text-gray-600">Sunny Days Per Year</p>
            </div>
            <div className="text-center bg-white shadow-md rounded-lg p-6 transform hover:scale-105 transition-transform">
              <CloudSun className="h-12 w-12 text-rajasthan-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">5-6 kWh/m²</h3>
              <p className="text-gray-600">Solar Radiation</p>
            </div>
            <div className="text-center bg-white shadow-md rounded-lg p-6 transform hover:scale-105 transition-transform">
              <Zap className="h-12 w-12 text-rajasthan-yellow mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">14,000+ MW</h3>
              <p className="text-gray-600">Solar Capacity Potential</p>
            </div>
            <div className="text-center bg-white shadow-md rounded-lg p-6 transform hover:scale-105 transition-transform">
              <Award className="h-12 w-12 text-rajasthan-terracotta mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">#1</h3>
              <p className="text-gray-600">In Solar Energy Production</p>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="rounded-lg overflow-hidden h-64 md:h-80">
              <img 
                src="https://images.unsplash.com/photo-1566327358528-f0ef7bccce37?auto=format&fit=crop&q=80" 
                alt="Rajasthan Solar Panel Installation" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-64 md:h-80">
              <img 
                src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&q=80" 
                alt="Rajasthan Desert Landscape" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-64 md:h-80">
              <img 
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&q=80" 
                alt="Farmer with Solar Equipment" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Schemes Section */}
      <section className="section-padding bg-rajasthan-blue/10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Government Solar Initiatives</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the various solar energy schemes provided by the Rajasthan government, designed to benefit farmers, businesses, and individuals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* PM-KUSUM Scheme */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-rajasthan-orange/10 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80" 
                  alt="PM-KUSUM Scheme"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">PM-KUSUM Scheme</h3>
                <p className="text-gray-600 mb-4">
                  Empowering farmers with solar power for irrigation and additional income through grid-connected solar projects.
                </p>
                <Button asChild variant="outline" className="group">
                  <Link to="/scheme/pm-kusum" className="flex items-center">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Solar Rooftop Subsidy Scheme */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-rajasthan-orange/10 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80" 
                  alt="Solar Rooftop Subsidy Scheme"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Solar Rooftop Subsidy</h3>
                <p className="text-gray-600 mb-4">
                  Get significant subsidies for installing rooftop solar panels on homes and commercial buildings.
                </p>
                <Button asChild variant="outline" className="group">
                  <Link to="/scheme/rooftop" className="flex items-center">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Solar Water Pumping Scheme */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-rajasthan-orange/10 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1587572781079-85d900dee470?auto=format&fit=crop&q=80" 
                  alt="Solar Water Pumping Scheme"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Solar Water Pumping</h3>
                <p className="text-gray-600 mb-4">
                  Replace diesel pumps with efficient solar-powered pumps for agriculture and reduce operational costs.
                </p>
                <Button asChild variant="outline" className="group">
                  <Link to="/scheme/water-pumping" className="flex items-center">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-rajasthan-orange hover:bg-rajasthan-terracotta text-white">
              <Link to="/schemes">View All Schemes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real people achieving real success through Rajasthan's solar energy initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured Story */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" 
                    alt="Dr. Amit Singh" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Dr. Amit Singh's Solar Success</h3>
                  <p className="text-gray-600 mb-4">
                    From doctor to solar entrepreneur, now earning ₹4 lakh monthly from a 1 MW plant.
                  </p>
                  <Button asChild variant="outline" className="group">
                    <Link to="/success-stories" className="flex items-center">
                      Read Story
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Featured Story */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1590845947698-8924d7409b56?auto=format&fit=crop&q=80" 
                    alt="Smt. Rewati Devi" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Smt. Rewati Devi's 2 MW Plant</h3>
                  <p className="text-gray-600 mb-4">
                    How a 2 MW solar plant under PM-KUSUM became a stable source of income for Smt. Rewati Devi.
                  </p>
                  <Button asChild variant="outline" className="group">
                    <Link to="/success-stories" className="flex items-center">
                      Read Story
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-rajasthan-orange hover:bg-rajasthan-terracotta text-white">
              <Link to="/success-stories">View All Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-rajasthan-orange text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Harness Solar Energy?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards energy independence and sustainable income. Apply for a solar scheme today.
          </p>
          <Button asChild className="bg-white hover:bg-rajasthan-yellow text-rajasthan-orange hover:text-gray-800 text-lg px-8 py-6">
            <Link to="/contact">Apply Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
