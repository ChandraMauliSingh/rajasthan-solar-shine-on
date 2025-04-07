
import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: "We've received your inquiry. Our team will contact you shortly.",
    });
    // Reset form
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <header className="bg-rajasthan-orange py-16 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch with us for inquiries about solar schemes, application assistance, or general information.
          </p>
        </div>
      </header>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-8">
              <div className="bg-rajasthan-yellow/10 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-rajasthan-orange mr-4 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                      <p className="text-gray-600">Toll Free: 1800-180-6127</p>
                      <p className="text-gray-600">Office: 0141-2744571</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-rajasthan-orange mr-4 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">Email</h3>
                      <p className="text-gray-600">info.rrecl@rajasthan.gov.in</p>
                      <p className="text-gray-600">support.solar@rajasthan.gov.in</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-rajasthan-orange mr-4 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">Address</h3>
                      <p className="text-gray-600">
                        Rajasthan Renewable Energy Corporation Ltd, <br />
                        E-166, Yudhishthir Marg, <br />
                        C-Scheme, Jaipur - 302005
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-rajasthan-blue/10 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Official Websites</h2>
                <ul className="space-y-4">
                  <li>
                    <a 
                      href="https://energy.rajasthan.gov.in" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-rajasthan-orange transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Rajasthan Energy Department
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://mnre.gov.in" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-rajasthan-orange transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ministry of New & Renewable Energy
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://rrecl.energy.rajasthan.gov.in" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-rajasthan-orange transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Rajasthan Renewable Energy Corporation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Enter your full name" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      placeholder="Enter your phone number" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="Enter your email address" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    placeholder="What is your inquiry about?" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Please provide details about your inquiry or application" 
                    rows={5} 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="scheme" className="text-sm font-medium text-gray-700">
                    Which scheme are you interested in?
                  </label>
                  <select 
                    id="scheme" 
                    name="scheme" 
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-rajasthan-orange focus:border-transparent"
                    required
                  >
                    <option value="">Select a scheme</option>
                    <option value="pm-kusum">PM-KUSUM Scheme</option>
                    <option value="solar-policy">Rajasthan Solar Energy Policy 2019</option>
                    <option value="rooftop">Solar Rooftop Subsidy Scheme</option>
                    <option value="water-pumping">Solar Water Pumping Scheme</option>
                    <option value="renewable-initiatives">State Renewable Energy Initiatives</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                
                <Button type="submit" className="bg-rajasthan-orange hover:bg-rajasthan-terracotta text-white w-full">
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-12">
        <div className="container-custom">
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.9584290193906!2d75.78940541501488!3d26.909220683127143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db40b3eb949a1%3A0xf241a10a6bedaa34!2sRajasthan%20Renewable%20Energy%20Corporation%20Ltd.!5e0!3m2!1sen!2sin!4v1609326205504!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="RRECL Office Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
