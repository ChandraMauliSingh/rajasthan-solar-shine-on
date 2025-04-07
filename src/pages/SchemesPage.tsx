
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

const schemes = [
  {
    id: 'pm-kusum',
    title: 'PM-KUSUM Scheme',
    description: 'Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan (PM-KUSUM) aims to increase farmers\' income, provide reliable source for irrigation and de-dieselise the agriculture sector.',
    components: [
      'Component A: Setting up of 10,000 MW of Decentralized Ground/Stilt Mounted Grid Connected Solar or other Renewable Energy based Power Plants.',
      'Component B: Installation of 20 lakh standalone Solar Agriculture Pumps.',
      'Component C: Solarization of 15 lakh Grid-connected Agriculture Pumps.'
    ],
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80'
  },
  {
    id: 'solar-policy',
    title: 'Rajasthan Solar Energy Policy 2019',
    description: 'The policy aims to achieve a target of 30 GW solar power generation capacity by 2024-25 through state utilities and private sector.',
    components: [
      'Establishing Rajasthan as a global hub of solar energy.',
      'Creating a favorable environment for investment in solar energy projects.',
      'Promoting decentralized and off-grid solar applications.'
    ],
    image: 'https://images.unsplash.com/photo-1617713964959-d9a36bbc7b52?auto=format&fit=crop&q=80'
  },
  {
    id: 'rooftop',
    title: 'Solar Rooftop Subsidy Scheme',
    description: 'The scheme provides subsidies for installing solar rooftop systems for residential, institutional, and commercial buildings.',
    components: [
      'Up to 40% subsidy for residential rooftop solar systems up to 3kW capacity.',
      '20% subsidy for residential systems between 3kW and 10kW.',
      'Special incentives for government buildings and educational institutions.'
    ],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80'
  },
  {
    id: 'water-pumping',
    title: 'Solar Water Pumping Scheme',
    description: 'Designed to help farmers replace diesel pumps with solar-powered pumps, reducing operational costs and carbon footprint.',
    components: [
      'Subsidies covering up to 70% of the pump cost.',
      'Available for both AC and DC pumps of various capacities.',
      'Integration with drip irrigation systems for optimal water use.'
    ],
    image: 'https://images.unsplash.com/photo-1587572781079-85d900dee470?auto=format&fit=crop&q=80'
  },
  {
    id: 'renewable-initiatives',
    title: 'State Renewable Energy Initiatives',
    description: 'Various state-level initiatives to promote renewable energy adoption across different sectors.',
    components: [
      'Solar parks and ultra-mega solar power projects.',
      'Green energy corridor for power evacuation.',
      'Skill development programs for solar technology.'
    ],
    image: 'https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?auto=format&fit=crop&q=80'
  }
];

const SchemesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Government Solar Schemes"
        subtitle="Explore the various solar energy initiatives by the Rajasthan government"
        backgroundImage="https://images.unsplash.com/photo-1623227413711-25ee4388dae3?auto=format&fit=crop&q=80"
        overlayColor="from-black/60 to-black/40"
      />

      {/* Schemes Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="mb-12 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Available Solar Schemes</h2>
            <p className="text-lg text-gray-600">
              The Rajasthan government offers various schemes to promote solar energy adoption. Explore the options below to find the right scheme for your needs.
            </p>
          </div>

          <div className="space-y-12">
            {schemes.map((scheme) => (
              <Card key={scheme.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="h-64 md:h-full">
                      <img 
                        src={scheme.image} 
                        alt={scheme.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{scheme.title}</h3>
                    <p className="text-gray-600 mb-6">{scheme.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-700 mb-2">Key Components:</h4>
                      <ul className="space-y-2">
                        {scheme.components.map((component, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-rajasthan-orange mr-2">•</span>
                            <span className="text-gray-600">{component}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button asChild className="bg-rajasthan-orange hover:bg-rajasthan-terracotta text-white">
                      <Link to={`/scheme/${scheme.id}`} className="flex items-center">
                        Learn More 
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-rajasthan-blue/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Need Help Choosing the Right Scheme?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our experts can guide you through the selection process and help you understand which scheme is best suited for your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-rajasthan-orange hover:bg-rajasthan-terracotta text-white">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline">
              <a href="tel:18001806127">Call Helpline: 1800-180-6127</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SchemesPage;
