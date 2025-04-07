
import { Link } from 'react-router-dom';
import { Phone, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-rajasthan-yellow">Rajasthan Solar</h3>
            <p className="text-gray-300 mb-4">
              Empowering Rajasthan through sustainable solar energy solutions and government initiatives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-rajasthan-yellow">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-rajasthan-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/schemes" className="text-gray-300 hover:text-rajasthan-yellow transition-colors">
                  Government Schemes
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-gray-300 hover:text-rajasthan-yellow transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/challenges" className="text-gray-300 hover:text-rajasthan-yellow transition-colors">
                  Pain Points & Challenges
                </Link>
              </li>
            </ul>
          </div>

          {/* Solar Schemes */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-rajasthan-yellow">Solar Schemes</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/scheme/pm-kusum" className="text-gray-300 hover:text-rajasthan-yellow transition-colors">
                  PM-KUSUM Scheme
                </Link>
              </li>
              <li>
                <Link to="/scheme/solar-policy" className="text-gray-300 hover:text-rajasthan-yellow transition-colors">
                  Solar Energy Policy 2019
                </Link>
              </li>
              <li>
                <Link to="/scheme/rooftop" className="text-gray-300 hover:text-rajasthan-yellow transition-colors">
                  Solar Rooftop Subsidy
                </Link>
              </li>
              <li>
                <Link to="/scheme/water-pumping" className="text-gray-300 hover:text-rajasthan-yellow transition-colors">
                  Solar Water Pumping
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-rajasthan-yellow">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-rajasthan-yellow mt-1" />
                <span className="text-gray-300">Toll Free: 1800-180-6127</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-rajasthan-yellow mt-1" />
                <span className="text-gray-300">info.rrecl@rajasthan.gov.in</span>
              </li>
              <li className="flex items-start space-x-3">
                <ExternalLink className="h-5 w-5 text-rajasthan-yellow mt-1" />
                <a 
                  href="https://energy.rajasthan.gov.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-rajasthan-yellow transition-colors"
                >
                  Official Rajasthan Energy Department
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rajasthan Solar Energy Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
