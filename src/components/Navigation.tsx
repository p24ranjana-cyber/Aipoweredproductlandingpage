import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Menu, Building2, Search, Upload, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { SignInModal } from './SignInModal';

interface NavigationProps {
  onGetStarted?: () => void;
  onFindOffice?: () => void;
  onListProperty?: () => void;
}

export function Navigation({ onGetStarted, onFindOffice, onListProperty }: NavigationProps) {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50"
      >
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Building2 className="h-8 w-8 text-blue-600" />
              <div>
                <span className="text-2xl text-gray-900">PropEdge</span>
                <span className="text-xs text-gray-500 ml-2">AI Platform</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowProductsDropdown(true)}
                onMouseLeave={() => setShowProductsDropdown(false)}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors">
                  Products
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {showProductsDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={onFindOffice}
                      className="w-full px-4 py-3 flex items-center gap-3 hover:bg-blue-50 transition-colors text-left group"
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <Search className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-gray-900">Find My Office</div>
                        <div className="text-xs text-gray-500">Search commercial spaces</div>
                      </div>
                    </button>
                    <button
                      onClick={onListProperty}
                      className="w-full px-4 py-3 flex items-center gap-3 hover:bg-green-50 transition-colors text-left group"
                    >
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <Upload className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-gray-900">List My Property</div>
                        <div className="text-xs text-gray-500">List your space for free</div>
                      </div>
                    </button>
                  </motion.div>
                )}
              </div>
              
              <a 
                href="#how-it-works" 
                className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                How It Works
              </a>
              <a 
                href="#pricing" 
                className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Pricing
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Testimonials
              </a>
              <Button 
                variant="outline" 
                className="border-2 rounded-lg"
                onClick={() => setShowSignIn(true)}
              >
                Sign In
              </Button>
              <Button 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 rounded-lg"
                onClick={onGetStarted}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      <SignInModal isOpen={showSignIn} onClose={() => setShowSignIn(false)} />
    </>
  );
}