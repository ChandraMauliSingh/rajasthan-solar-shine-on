
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check, Download, ExternalLink, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

// Define scheme data
const schemes = {
  'pm-kusum': {
    title: 'PM-KUSUM Scheme',
    subtitle: 'Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan',
    description: 'The PM-KUSUM scheme aims to add solar and other renewable capacity of 30.8 GW by 2022 with total central financial support of Rs. 34,422 crore including service charges to the implementing agencies.',
    heroImage: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80',
    components: [
      {
        name: 'Component A',
        title: 'Decentralized Ground Mounted Grid Connected Renewable Power Plants',
        description: 'Installation of 10,000 MW of Decentralized Ground Mounted Grid Connected Renewable Power Plants of individual plant size up to 2 MW.',
        benefits: [
          'Additional source of income for farmers',
          'Reduced transmission losses',
          'Support to DISCOM in meeting RPO targets',
          'Employment generation at local level'
        ],
        eligibility: [
          'Individual farmers',
          'Cooperatives',
          'Panchayats',
          'Farmer Producer Organizations (FPO)',
          'Water User Associations (WUA)'
        ],
        process: [
          'Application submission to local DISCOM',
          'Land verification and technical feasibility assessment',
          'Selection and approval by committee',
          'PPA signing with DISCOM',
          'Plant commissioning within specified timeframe'
        ],
        image: 'https://images.unsplash.com/photo-1593153947757-61aea81283ec?auto=format&fit=crop&q=80'
      },
      {
        name: 'Component B',
        title: 'Standalone Solar Agriculture Pumps',
        description: 'Installation of 20 lakh standalone solar powered agriculture pumps of individual capacity up to 7.5 HP.',
        benefits: [
          'Replacement of diesel pumps with solar pumps',
          'Reduced farm sector electricity subsidy burden on states',
          'Reliable source of irrigation',
          'Lower operational costs for farmers'
        ],
        eligibility: [
          'Individual farmers with grid-disconnected agricultural lands',
          'Priority to small and marginal farmers',
          'Areas with high water table'
        ],
        process: [
          'Application to state nodal agency or DISCOM',
          'Site verification and technical feasibility check',
          'Selection based on state-defined criteria',
          'Vendor selection and pump installation',
          'Verification and subsidy disbursal'
        ],
        image: 'https://images.unsplash.com/photo-1579113345824-949e5c88806f?auto=format&fit=crop&q=80'
      },
      {
        name: 'Component C',
        title: 'Solarization of Grid-connected Agriculture Pumps',
        description: 'Solarization of 15 lakh Grid-connected Agriculture Pumps of individual capacity up to 7.5 HP.',
        benefits: [
          'Ability to sell excess power to grid',
          'Reduced electricity consumption from grid',
          'Assured daytime power for irrigation',
          'Reduced technical losses for DISCOMs'
        ],
        eligibility: [
          'Individual farmers with grid-connected agricultural pumps',
          'State-defined priority order',
          'Areas with reliable grid infrastructure'
        ],
        process: [
          'Application through DISCOM portal',
          'Field verification of existing pump and infrastructure',
          'Selection and approval by committee',
          'Solar system installation by empaneled vendors',
          'Net metering installation and commissioning'
        ],
        image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80'
      }
    ],
    subsidies: [
      {
        component: 'Component A',
        details: 'Procurement Based Incentive (PBI) to DISCOMs at Rs. 0.40 per unit for power purchased for five years.'
      },
      {
        component: 'Component B',
        details: 'Central Financial Assistance (CFA) of 30% of benchmark cost. State subsidy of 30%. Farmer contribution of 40%, with option for bank loans.'
      },
      {
        component: 'Component C',
        details: 'CFA of 30% of benchmark cost. State subsidy of 30%. Farmer contribution of 40%, with option for bank loans.'
      }
    ],
    documents: [
      'Aadhar Card',
      'Land ownership documents',
      'Bank account details',
      'Passport-sized photographs',
      'Electricity bill (for Component C)',
      'NOC from DISCOM (if applicable)',
      'Farm pond/irrigation system details (if any)'
    ],
    externalLink: 'https://mnre.gov.in/solar/schemes'
  },
  'solar-policy': {
    title: 'Rajasthan Solar Energy Policy 2019',
    subtitle: 'State Policy for Solar Energy Development',
    description: 'The policy aims to achieve a target of 30 GW solar power generation capacity by 2024-25 through state utilities and private sector.',
    heroImage: 'https://images.unsplash.com/photo-1617713964959-d9a36bbc7b52?auto=format&fit=crop&q=80',
    components: [],
    subsidies: [],
    documents: [],
    externalLink: 'https://energy.rajasthan.gov.in'
  },
  'rooftop': {
    title: 'Solar Rooftop Subsidy Scheme',
    subtitle: 'Empowering Residential and Commercial Buildings',
    description: 'The scheme provides subsidies for installing solar rooftop systems for residential, institutional, and commercial buildings.',
    heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80',
    components: [],
    subsidies: [],
    documents: [],
    externalLink: 'https://mnre.gov.in/solar/schemes'
  },
  'water-pumping': {
    title: 'Solar Water Pumping Scheme',
    subtitle: 'Sustainable Irrigation Solutions for Farmers',
    description: 'Designed to help farmers replace diesel pumps with solar-powered pumps, reducing operational costs and carbon footprint.',
    heroImage: 'https://images.unsplash.com/photo-1587572781079-85d900dee470?auto=format&fit=crop&q=80',
    components: [],
    subsidies: [],
    documents: [],
    externalLink: 'https://energy.rajasthan.gov.in'
  },
  'renewable-initiatives': {
    title: 'State Renewable Energy Initiatives',
    subtitle: 'Comprehensive Renewable Energy Programs',
    description: 'Various state-level initiatives to promote renewable energy adoption across different sectors.',
    heroImage: 'https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?auto=format&fit=crop&q=80',
    components: [],
    subsidies: [],
    documents: [],
    externalLink: 'https://energy.rajasthan.gov.in'
  }
};

const SchemeDetail = () => {
  const { schemeId } = useParams<{ schemeId: string }>();
  
  // Use PM-KUSUM as default if schemeId isn't found
  const scheme = schemeId && schemes[schemeId as keyof typeof schemes] 
    ? schemes[schemeId as keyof typeof schemes] 
    : schemes['pm-kusum'];

  // For schemes other than PM-KUSUM, show a limited view
  if (schemeId && schemeId !== 'pm-kusum') {
    return (
      <div className="min-h-screen">
        <Navbar />
        
        <Hero 
          title={scheme.title}
          subtitle={scheme.subtitle}
          backgroundImage={scheme.heroImage}
          overlayColor="from-black/60 to-black/40"
        />

        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Under Construction</h2>
            <p className="text-lg text-gray-600 mb-8">
              {scheme.description}
              <br /><br />
              Detailed information for this scheme is currently being updated. Please check back later or visit the PM-KUSUM scheme page for a complete example.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-rajasthan-orange hover:bg-rajasthan-terracotta text-white">
                <Link to="/schemes">Back to All Schemes</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/scheme/pm-kusum">View PM-KUSUM Example</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title={scheme.title}
        subtitle={scheme.subtitle}
        backgroundImage={scheme.heroImage}
        overlayColor="from-black/60 to-black/40"
      />

      {/* Scheme Description */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About the Scheme</h2>
            <p className="text-lg text-gray-600">
              {scheme.description}
            </p>
          </div>

          {/* Components Tabs */}
          <Tabs defaultValue="component-a" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="component-a">Component A</TabsTrigger>
              <TabsTrigger value="component-b">Component B</TabsTrigger>
              <TabsTrigger value="component-c">Component C</TabsTrigger>
            </TabsList>
            
            {scheme.components?.map((component, index) => (
              <TabsContent 
                key={index}
                value={`component-${component.name.split(' ')[1].toLowerCase()}`}
                className="mt-6"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img 
                        src={component.image} 
                        alt={component.title}
                        className="h-64 md:h-full w-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{component.title}</h3>
                      <p className="text-gray-600 mb-4">{component.description}</p>
                      
                      <h4 className="font-semibold text-gray-700 mb-2">Key Benefits:</h4>
                      <ul className="space-y-1 mb-4">
                        {component.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-rajasthan-orange mr-2 shrink-0" />
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Eligibility and Process */}
                <div className="mt-8 grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Eligibility Criteria</h4>
                    <ul className="space-y-2">
                      {component.eligibility.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-rajasthan-orange mr-2">•</span>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Application Process</h4>
                    <ol className="space-y-2">
                      {component.process.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="bg-rajasthan-orange text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 shrink-0">
                            {idx + 1}
                          </span>
                          <span className="text-gray-600">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Subsidies Section */}
      <section className="section-padding bg-rajasthan-orange/5">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Subsidies & Financial Support</h2>
            <p className="text-lg text-gray-600">
              Understanding the financial assistance available under the {scheme.title}.
            </p>
          </div>

          <div className="space-y-6">
            {scheme.subsidies?.map((subsidy, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{subsidy.component}</h3>
                <p className="text-gray-600">{subsidy.details}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-rajasthan-yellow/10 border border-rajasthan-yellow rounded-lg p-6">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-rajasthan-orange mr-4 shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">Important Note</h4>
                <p className="text-gray-600">
                  Subsidies and financial assistance may vary based on state-specific implementations and budget allocations. Please contact your local DISCOM or state renewable energy department for the most current information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Required Documents</h2>
            <p className="text-lg text-gray-600">
              Prepare these documents in advance to streamline your application process.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {scheme.documents?.map((document, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-rajasthan-orange mr-3 shrink-0" />
                  <span className="text-gray-700">{document}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="bg-rajasthan-orange hover:bg-rajasthan-terracotta text-white">
                <a href="#" className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download Application Form
                </a>
              </Button>
              <Button asChild variant="outline">
                <a 
                  href={scheme.externalLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Official Scheme Website
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-rajasthan-blue/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Apply for {scheme.title}</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to start your solar journey? Get in touch with our experts for guidance through the application process.
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

export default SchemeDetail;
