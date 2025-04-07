import React from 'react';
import { ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

const successStories = [
  {
    id: 1,
    name: 'Dr. Amit Singh',
    location: 'Kanwarpura Village',
    title: 'Doctor Turned Solar Entrepreneur',
    description: 'Dr. Amit Singh, a medical professional, ventured into solar energy by setting up a 1 MW solar power plant. He now earns approximately ₹4 lakh per month through this sustainable business.',
    challenge: 'Securing the initial investment of ₹3.5 crore was challenging, with banks demanding substantial collateral. Additionally, after installation, he faced a three-month delay in commissioning due to administrative bottlenecks.',
    impact: 'The 1 MW plant generates clean energy for hundreds of homes while providing Dr. Singh with a stable monthly income of ₹4 lakh. Additionally, the project has created jobs for local youth in operation and maintenance roles.',
    keyPoints: [
      'Monthly Income: ₹4 lakh',
      'Investment: ₹3.5 crore',
      'Land Utilized: 5 acres',
      'Jobs Created: 8 direct positions'
    ],
    quote: "The decision to invest in solar energy was the best business move I've made. Despite initial challenges, the stable income and contribution to clean energy make it all worthwhile.",
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Devkaran Yadav',
    location: 'Bhaloji Village',
    title: 'Farmer Earning ₹50 Lakh Annually from Solar',
    description: 'Devkaran Yadav transformed his semi-arid land into a profitable solar farm by installing a 1 MW solar plant. His annual income has reached an impressive ₹50 lakh.',
    challenge: 'Convincing family members who co-owned the land to agree to the solar project was difficult. Being among the first in his area to implement such a project, he also struggled with unclear guidelines and a lack of local expertise.',
    impact: 'The solar plant not only provides substantial income but has also inspired other farmers in the region to explore solar energy. Mr. Yadav now mentors other farmers interested in similar projects.',
    keyPoints: [
      'Annual Income: ₹50 lakh',
      'Land Type: Previously semi-arid, low-yield farmland',
      'Return on Investment: Achieved in less than 4 years',
      'Community Impact: 15 neighboring farmers adopted solar projects'
    ],
    quote: "My land was barely producing enough to sustain my family. With solar, the same land that gave me struggles now gives me prosperity.",
    image: 'https://images.unsplash.com/photo-1593027015854-c9200acc5bce?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Smt. Rewati Devi',
    location: 'Sanoli Village',
    title: '2 MW Solar Plant Provides Stable Income',
    description: 'Smt. Rewati Devi installed a 2 MW solar plant under the PM-KUSUM scheme, transforming her financial situation and creating a reliable income source for her family.',
    impact: "The 2 MW plant has not only provided financial stability to Smt. Rewati Devi's family but also serves as a model for women entrepreneurs in renewable energy across the region.",
    keyPoints: [
      'Plant Capacity: 2 MW',
      'Scheme: PM-KUSUM Component A',
      'Employment Generation: 12 local jobs',
      'Environmental Impact: Carbon offset equivalent to planting 30,000 trees'
    ],
    quote: "The solar plant has given my family financial security and helped educate my grandchildren. It's a legacy that will benefit generations to come.",
    image: 'https://images.unsplash.com/photo-1590845947698-8924d7409b56?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    name: 'SAP Energy',
    location: 'Jodhpur District',
    title: 'Private Firm Leveraging Rajasthan Solar Policies',
    description: "SAP Energy established a 2 MW solar plant in collaboration with SunAlpha Energy, demonstrating how private enterprises can leverage Rajasthan's favorable solar policies for long-term investment.",
    challenge: 'The company had to navigate complex power purchase agreements with Jodhpur Vidyut Vitran Nigam and coordinate with the Rajasthan Renewable Energy Corporation as the nodal agency, ensuring compliance with contractual obligations and regulatory requirements.',
    impact: 'The project showcases successful public-private partnership in renewable energy, providing clean power to the grid while generating sustainable returns for investors.',
    keyPoints: [
      'Project Size: 2 MW',
      'Implementation Partner: SunAlpha Energy',
      'Power Purchase Agreement: 25 years with JVVNL',
      'Expected ROI: 15-18% annually'
    ],
    quote: "Rajasthan's progressive solar policies and abundant sunshine make it the ideal location for our renewable energy investments.",
    image: 'https://images.unsplash.com/photo-1511421586148-54d5e9d55459?auto=format&fit=crop&q=80'
  }
];

const SuccessStoriesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Success Stories"
        subtitle="Real people achieving real success through Rajasthan's solar energy initiatives"
        backgroundImage="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80"
        overlayColor="from-black/60 to-black/40"
      />

      {/* Stories Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Inspiring Solar Success Stories</h2>
            <p className="text-lg text-gray-600">
              Discover how individuals and organizations across Rajasthan have transformed their lives and businesses by embracing solar energy through government initiatives.
            </p>
          </div>

          <div className="space-y-16">
            {successStories.map((story) => (
              <div key={story.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="lg:flex">
                  {/* Image Section */}
                  <div className="lg:w-1/3 relative">
                    <div className="h-80 lg:h-full">
                      <img 
                        src={story.image} 
                        alt={story.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 lg:hidden">
                      <h3 className="text-2xl font-bold text-white">{story.title}</h3>
                      <p className="text-white/90">{story.name}, {story.location}</p>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="lg:w-2/3 p-6 lg:p-8">
                    <div className="hidden lg:block mb-6">
                      <h3 className="text-2xl font-bold text-gray-800">{story.title}</h3>
                      <p className="text-gray-600">{story.name}, {story.location}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Background</h4>
                      <p className="text-gray-600">{story.description}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Challenges Faced</h4>
                        <p className="text-gray-600">{story.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Impact Created</h4>
                        <p className="text-gray-600">{story.impact}</p>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Highlights</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {story.keyPoints.map((point, index) => (
                          <div key={index} className="bg-rajasthan-orange/5 rounded-lg p-3 text-center">
                            <p className="text-sm text-gray-700">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="border-l-4 border-rajasthan-orange pl-4 italic text-gray-700 my-6">
                      "{story.quote}"
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="section-padding bg-rajasthan-blue/10">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Want to be the next success story?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Learn more about the government schemes that made these success stories possible and start your own solar journey today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://energy.rajasthan.gov.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-6 py-3 bg-rajasthan-orange text-white font-medium rounded-lg hover:bg-rajasthan-terracotta transition-colors"
            >
              Official Rajasthan Energy Portal
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
            <a 
              href="https://mnre.gov.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Ministry of New & Renewable Energy
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessStoriesPage;
