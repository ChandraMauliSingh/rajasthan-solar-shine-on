
import React from 'react';
import { Info, AlertTriangle, FileQuestion, CloudLightning } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

const challenges = [
  {
    id: 1,
    title: 'Financial Constraints',
    description: 'Securing large investments for solar projects can be difficult, especially for farmers and individuals.',
    icon: AlertTriangle,
    color: 'text-red-500',
    examples: [
      {
        person: 'Dr. Amit Singh',
        location: 'Kanwarpura Village',
        detail: 'Faced considerable difficulties in securing the ₹3.5 crore investment required for his 1 MW solar plant. Banks demanded substantial collateral and offered loans at high-interest rates.'
      }
    ],
    solutions: [
      'Specialized solar financing programs with lower interest rates',
      'Group financing options for farming communities',
      'Phased implementation approaches to reduce initial investment burden'
    ]
  },
  {
    id: 2,
    title: 'Administrative Delays',
    description: 'Bureaucratic processes and administrative bottlenecks can significantly delay project implementation.',
    icon: CloudLightning,
    color: 'text-amber-500',
    examples: [
      {
        person: 'Dr. Amit Singh',
        location: 'Kanwarpura Village',
        detail: 'After completing the installation, Dr. Singh encountered delays in commissioning the plant due to the absence of appointed nodal monitoring officers. Despite lodging complaints, the commissioning was postponed by almost three months.'
      }
    ],
    solutions: [
      'Single-window clearance systems for solar projects',
      'Digital application tracking and processing',
      'Dedicated nodal officers for timely approvals'
    ]
  },
  {
    id: 3,
    title: 'Family Consensus and Land Use',
    description: 'Convincing family members and deciding on land use conversion can pose significant challenges.',
    icon: FileQuestion,
    color: 'text-blue-500',
    examples: [
      {
        person: 'Devkaran Yadav',
        location: 'Bhaloji Village',
        detail: 'Had to persuade family members who co-owned the land to agree to the solar project. Convincing relatives to repurpose agricultural land for solar energy required extensive discussions and assurances.'
      }
    ],
    solutions: [
      'Awareness programs for families about solar benefits',
      'Legal assistance for land use conversion',
      'Dual-use land models (agrivoltaics) to combine farming and solar generation'
    ]
  },
  {
    id: 4,
    title: 'Navigating New Procedures',
    description: 'Understanding complex regulations and procedures, especially for first-time implementers.',
    icon: Info,
    color: 'text-purple-500',
    examples: [
      {
        person: 'Devkaran Yadav',
        location: 'Bhaloji Village',
        detail: 'Being among the first to implement such a project in his area, Mr. Yadav faced challenges due to a lack of clear guidelines and local expertise. Understanding the layout, obtaining necessary permissions, and ensuring compliance with regulations demanded significant effort and time.'
      }
    ],
    solutions: [
      'Comprehensive guidelines in local languages',
      'Training workshops for potential applicants',
      'Mentorship programs connecting experienced implementers with newcomers'
    ]
  },
  {
    id: 5,
    title: 'Contractual and Regulatory Navigation',
    description: 'Managing complex contracts and ensuring compliance with regulatory requirements.',
    icon: AlertTriangle,
    color: 'text-green-500',
    examples: [
      {
        person: 'SAP Energy',
        location: 'Jodhpur District',
        detail: 'In commissioning the 2 MW plant, SAP Energy had to navigate power purchase agreements with Jodhpur Vidyut Vitran Nigam and coordinate with the Rajasthan Renewable Energy Corporation as the nodal agency. Ensuring compliance with contractual obligations and regulatory requirements posed challenges typical of large-scale solar installations.'
      }
    ],
    solutions: [
      'Standardized contract templates for different project sizes',
      'Legal advisory services for contract review',
      'Regular regulatory compliance workshops'
    ]
  }
];

const ChallengesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Pain Points & Challenges"
        subtitle="Understanding the obstacles in implementing solar energy projects"
        backgroundImage="https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&q=80"
        overlayColor="from-black/70 to-black/40"
      />

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Common Challenges</h2>
            <p className="text-lg text-gray-600">
              While solar energy initiatives in Rajasthan offer significant benefits, implementing these projects often comes with various challenges. Understanding these obstacles is the first step toward addressing them effectively.
            </p>
          </div>

          <div className="bg-rajasthan-orange/10 border border-rajasthan-orange/20 rounded-lg p-6 mb-12">
            <div className="flex items-start">
              <Info className="h-6 w-6 text-rajasthan-orange mr-4 shrink-0 mt-1" />
              <p className="text-gray-700">
                The challenges presented here are based on real experiences of individuals and organizations who have implemented solar projects in Rajasthan. Their insights help identify common barriers and potential solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="space-y-16">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  {/* Challenge Header */}
                  <div className="md:w-1/3 bg-gray-50 p-8 flex flex-col items-center justify-center text-center">
                    <challenge.icon className={`h-16 w-16 ${challenge.color} mb-4`} />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{challenge.title}</h3>
                    <p className="text-gray-600">{challenge.description}</p>
                  </div>
                  
                  {/* Challenge Details */}
                  <div className="md:w-2/3 p-8">
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Real-world Examples</h4>
                      {challenge.examples.map((example, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4 mb-4">
                          <p className="font-medium text-gray-800 mb-1">
                            {example.person}, {example.location}
                          </p>
                          <p className="text-gray-600">{example.detail}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Potential Solutions</h4>
                      <ul className="space-y-2">
                        {challenge.solutions.map((solution, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-rajasthan-orange mr-2">•</span>
                            <span className="text-gray-700">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Initiatives */}
      <section className="section-padding bg-rajasthan-blue/10">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Government Initiatives to Address Challenges</h2>
            <p className="text-lg text-gray-600">
              Recognizing these challenges, the Rajasthan government has introduced several measures to streamline the implementation process.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Simplified Application Process</h3>
                <p className="text-gray-600">
                  Introduction of online portals for scheme applications, reducing paperwork and processing time. Single-window clearance systems have been implemented for faster approvals.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Financial Support Mechanisms</h3>
                <p className="text-gray-600">
                  Partnerships with financial institutions to provide low-interest loans for solar projects. Credit guarantee schemes for farmers and small entrepreneurs.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Technical Assistance</h3>
                <p className="text-gray-600">
                  Free technical consultations for project feasibility and design. Empanelment of qualified vendors to ensure quality installations and reduce technical failures.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Awareness and Training Programs</h3>
                <p className="text-gray-600">
                  Regular workshops and training sessions for potential beneficiaries. Information dissemination in local languages to increase understanding of schemes and procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Need Help Overcoming These Challenges?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team can provide guidance on navigating the application process and overcoming common obstacles in implementing solar projects.
          </p>
          <Button asChild className="bg-rajasthan-orange hover:bg-rajasthan-terracotta text-white">
            <a href="tel:18001806127">Contact Helpline: 1800-180-6127</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChallengesPage;
