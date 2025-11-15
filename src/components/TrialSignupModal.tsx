import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, ArrowRight, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface TrialSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const steps = ['Choose Role', 'Enter Details', 'Confirm'];

export function TrialSignupModal({ isOpen, onClose }: TrialSignupModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const roles = [
    { 
      id: 'lessee', 
      name: 'Lessee', 
      icon: '🏢', 
      description: 'Looking for office space',
      benefits: ['AI property matching', 'Instant shortlisting', 'Lease automation']
    },
    { 
      id: 'lessor', 
      name: 'Lessor', 
      icon: '🏗️', 
      description: 'Managing properties',
      benefits: ['Lessee screening', 'Automated rent collection', 'Maintenance tracking']
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate signup
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after showing success
      setTimeout(() => {
        setIsSuccess(false);
        setCurrentStep(0);
        setSelectedRole(null);
        setFormData({ fullName: '', email: '', company: '', phone: '' });
        onClose();
      }, 3000);
    }, 2000);
  };

  const canProceed = () => {
    if (currentStep === 0) return selectedRole !== null;
    if (currentStep === 1) return formData.fullName && formData.email && formData.company;
    return true;
  };

  const resetAndClose = () => {
    setCurrentStep(0);
    setSelectedRole(null);
    setFormData({ fullName: '', email: '', company: '', phone: '' });
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl z-[101] max-h-[90vh] overflow-y-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 relative">
                <button
                  onClick={resetAndClose}
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="h-8 w-8 text-white" />
                  <span className="text-2xl text-white">Start Your Free Trial</span>
                </div>

                {/* Progress Steps */}
                {!isSuccess && (
                  <div className="flex items-center gap-2">
                    {steps.map((step, index) => (
                      <div key={index} className="flex items-center flex-1">
                        <div className="flex items-center gap-2 flex-1">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all ${
                              index <= currentStep
                                ? 'bg-white text-blue-600'
                                : 'bg-white/20 text-white/60'
                            }`}
                          >
                            {index < currentStep ? '✓' : index + 1}
                          </div>
                          <span className={`text-sm ${index <= currentStep ? 'text-white' : 'text-white/60'}`}>
                            {step}
                          </span>
                        </div>
                        {index < steps.length - 1 && (
                          <div className={`h-0.5 flex-1 mx-2 ${index < currentStep ? 'bg-white' : 'bg-white/20'}`} />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-8">
                {!isSuccess ? (
                  <>
                    {/* Step 1: Choose Role */}
                    {currentStep === 0 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <h3 className="text-2xl text-gray-900 mb-2">I'm a...</h3>
                        <p className="text-gray-600 mb-6">Choose your role to get personalized features</p>
                        
                        <div className="grid gap-4">
                          {roles.map((role) => (
                            <motion.button
                              key={role.id}
                              onClick={() => setSelectedRole(role.id)}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className={`p-6 rounded-2xl border-2 transition-all text-left ${
                                selectedRole === role.id
                                  ? 'border-blue-600 bg-blue-50'
                                  : 'border-gray-200 bg-white hover:border-blue-300'
                              }`}
                            >
                              <div className="flex items-start gap-4">
                                <div className="text-4xl">{role.icon}</div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between mb-2">
                                    <h4 className="text-lg text-gray-900">{role.name}</h4>
                                    {selectedRole === role.id && (
                                      <CheckCircle2 className="h-6 w-6 text-blue-600" />
                                    )}
                                  </div>
                                  <p className="text-sm text-gray-600 mb-3">{role.description}</p>
                                  <div className="space-y-1">
                                    {role.benefits.map((benefit, index) => (
                                      <div key={index} className="flex items-center gap-2 text-xs text-gray-700">
                                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                        {benefit}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Enter Details */}
                    {currentStep === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <h3 className="text-2xl text-gray-900 mb-2">Tell us about yourself</h3>
                        <p className="text-gray-600 mb-6">We'll personalize your experience</p>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm text-gray-700 mb-2">Full Name *</label>
                            <Input
                              type="text"
                              placeholder="John Doe"
                              value={formData.fullName}
                              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 outline-none"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm text-gray-700 mb-2">Work Email *</label>
                            <Input
                              type="email"
                              placeholder="you@company.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 outline-none"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm text-gray-700 mb-2">Company Name *</label>
                            <Input
                              type="text"
                              placeholder="Acme Corp"
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 outline-none"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm text-gray-700 mb-2">Phone Number (Optional)</label>
                            <Input
                              type="tel"
                              placeholder="+91 98765 43210"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 outline-none"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Confirm */}
                    {currentStep === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <h3 className="text-2xl text-gray-900 mb-2">Ready to get started?</h3>
                        <p className="text-gray-600 mb-6">Review your details and start your free trial</p>
                        
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6 border border-blue-200">
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl">
                                {roles.find(r => r.id === selectedRole)?.icon}
                              </div>
                              <div>
                                <p className="text-sm text-gray-600">Role</p>
                                <p className="text-gray-900">{roles.find(r => r.id === selectedRole)?.name}</p>
                              </div>
                            </div>
                            <div className="border-t border-blue-200 pt-3 space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Name:</span>
                                <span className="text-gray-900">{formData.fullName}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Email:</span>
                                <span className="text-gray-900">{formData.email}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Company:</span>
                                <span className="text-gray-900">{formData.company}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-50 rounded-xl p-4 border border-green-200 mb-6">
                          <h4 className="text-sm text-green-900 mb-2">What happens next:</h4>
                          <div className="space-y-2">
                            {[
                              'Instant access to full platform',
                              '30-day free trial, no credit card',
                              'Personalized onboarding session',
                              'Dedicated support team'
                            ].map((item, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm text-green-800">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 mt-8 pt-6 border-t border-gray-200">
                      {currentStep > 0 && (
                        <Button
                          onClick={handleBack}
                          variant="outline"
                          className="px-6 py-3 rounded-xl border-2"
                        >
                          Back
                        </Button>
                      )}
                      <Button
                        onClick={handleNext}
                        disabled={!canProceed() || isSubmitting}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Setting up your account...
                          </div>
                        ) : currentStep === steps.length - 1 ? (
                          <>
                            Start Free Trial
                            <Sparkles className="ml-2 h-5 w-5" />
                          </>
                        ) : (
                          <>
                            Continue
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </div>
                  </>
                ) : (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                      className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center"
                    >
                      <CheckCircle2 className="h-12 w-12 text-white" />
                    </motion.div>
                    <h3 className="text-3xl text-gray-900 mb-3">Welcome to CBRE AI! 🎉</h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      Your account is ready! Check your email ({formData.email}) for your login credentials and onboarding guide.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <Building2 className="h-4 w-4" />
                      <span>Redirecting to dashboard...</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}