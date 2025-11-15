import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Button } from './ui/button';
import { UserPlus, Mail, Rocket, ArrowRight, Shield, CheckCircle2, Sparkles, Calendar, Search, Building2 } from 'lucide-react';
import { Input } from './ui/input';
import { TrialSignupModal } from './TrialSignupModal';
import { FindOfficeModal } from './FindOfficeModal';
import { ListPropertyModal } from './ListPropertyModal';

const steps = [
  {
    icon: UserPlus,
    title: "Sign up",
    description: "Choose your role: Lessee or Lessor. Takes 60 seconds.",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Mail,
    title: "Get onboarded",
    description: "Personalized setup guide based on your needs and goals.",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: Rocket,
    title: "Start using AI",
    description: "List properties, find spaces, or automate workflows immediately.",
    color: "from-green-500 to-emerald-600"
  }
];

interface ConversionFlowProps {
  onGetStarted?: () => void;
}

export function ConversionFlow({ onGetStarted }: ConversionFlowProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState('');
  const [showEmailPreview, setShowEmailPreview] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [showTrialModal, setShowTrialModal] = useState(false);
  const [showFindOfficeModal, setShowFindOfficeModal] = useState(false);
  const [showListPropertyModal, setShowListPropertyModal] = useState(false);

  const roles = [
    { id: 'lessee', name: 'Lessee', icon: '🏢', description: 'Finding office space' },
    { id: 'lessor', name: 'Lessor', icon: '🏗️', description: 'Property management' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && selectedRole && onGetStarted) {
      onGetStarted();
    }
  };

  const handleSignUpFromModal = () => {
    setShowTrialModal(true);
  };

  return (
    <>
      <section ref={ref} className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4 text-gray-900">
              Here's what happens after you join
            </h2>
            <p className="text-xl text-gray-600">
              Simple, transparent, and designed for India
            </p>
          </motion.div>

          {/* Steps Flow */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-gray-200 hover:border-blue-300 transition-all h-full shadow-lg hover:shadow-xl cursor-pointer">
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg">
                    {index + 1}
                  </div>

                  <motion.div 
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl mb-3 text-center text-gray-900">{step.title}</h3>
                  <p className="text-center text-gray-600">{step.description}</p>
                </div>

                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-8 w-8 text-blue-400" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Interactive Signup Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200"
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl text-center mb-6 text-gray-900">Try it now - see what happens</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Role Selection */}
                <div>
                  <label className="block text-sm text-gray-700 mb-3">I'm a...</label>
                  <div className="grid grid-cols-2 gap-4">
                    {roles.map((role) => (
                      <motion.button
                        key={role.id}
                        type="button"
                        onClick={() => setSelectedRole(role.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          selectedRole === role.id
                            ? 'border-blue-600 bg-blue-100'
                            : 'border-gray-200 bg-white hover:border-blue-300'
                        }`}
                      >
                        <div className="text-3xl mb-2">{role.icon}</div>
                        <div className="text-sm font-semibold text-gray-900">{role.name}</div>
                        <div className="text-xs text-gray-600">{role.description}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Your work email</label>
                  <Input
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-blue-600 outline-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={!email || !selectedRole}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  See What Happens Next
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Welcome Email Preview */}
          <AnimatePresence>
            {showEmailPreview && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-12 overflow-hidden"
              >
                <motion.div
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  className="bg-white rounded-3xl shadow-2xl border-2 border-blue-500 overflow-hidden max-w-3xl mx-auto"
                >
                  {/* Email Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <Mail className="h-6 w-6" />
                      <span className="text-sm opacity-80">You'll receive this email instantly</span>
                    </div>
                    <h3 className="text-2xl">Welcome to CBRE AI! 🎉</h3>
                  </div>

                  {/* Email Body */}
                  <div className="p-8">
                    <p className="text-gray-700 mb-4">
                      Hi there,
                    </p>
                    
                    <p className="text-gray-700 mb-4">
                      Welcome to CBRE AI! We're excited to help you {selectedRole === 'lessee' ? 'find the perfect office space' : 'manage your properties efficiently'}.
                    </p>

                    <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-100">
                      <p className="text-gray-900 mb-4">Here's what happens next:</p>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-gray-900">Your account is being set up (takes 30 seconds)</p>
                            <p className="text-sm text-gray-600">We're customizing your dashboard based on your role</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Sparkles className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-gray-900">AI is analyzing {selectedRole === 'lessee' ? '10,000+ properties' : 'optimal management workflows'}</p>
                            <p className="text-sm text-gray-600">Personalized recommendations ready in minutes</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-gray-900">Schedule a 15-min onboarding call (optional)</p>
                            <p className="text-sm text-gray-600">Our team will walk you through the platform</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-6 rounded-xl shadow-lg mb-4">
                        Access Your Dashboard →
                      </Button>
                      <p className="text-sm text-gray-600">
                        Your dashboard will be ready in <span className="text-blue-600 font-semibold">~2 minutes</span>
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-2">
                        Questions? Reply to this email or chat with our AI assistant (bottom right).
                      </p>
                      <p className="text-sm text-gray-600">
                        No spam. No fluff. Just the tools you need to work smarter.
                      </p>
                    </div>
                  </div>

                  {/* Email Footer */}
                  <div className="bg-gray-50 p-6 border-t border-gray-200">
                    <p className="text-center text-xs text-gray-500">
                      CBRE AI Platform • Made in India 🇮🇳 • contact@cbre-ai.in
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Reassurance Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200 mb-12"
          >
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <p className="text-lg text-gray-700 mb-2">
                Your data is secure. No spam. No cold calls.
              </p>
              <p className="text-sm text-gray-600">
                We're SOC 2 compliant and follow India's data protection regulations. Cancel anytime.
              </p>
            </div>
          </motion.div>

          {/* Final CTA */}
          {/* Removed Final CTA section as requested */}
        </div>
      </section>

      <TrialSignupModal isOpen={showTrialModal} onClose={() => setShowTrialModal(false)} />
      <FindOfficeModal 
        isOpen={showFindOfficeModal} 
        onClose={() => setShowFindOfficeModal(false)} 
        onSignUp={handleSignUpFromModal}
      />
      <ListPropertyModal isOpen={showListPropertyModal} onClose={() => setShowListPropertyModal(false)} />
    </>
  );
}