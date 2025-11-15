import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowLeft, Check, Zap, Crown, Building2, Sparkles } from 'lucide-react';
import { Input } from './ui/input';
import { useState } from 'react';

interface GetStartedPageProps {
  onBack: () => void;
}

export function GetStartedPage({ onBack }: GetStartedPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    userType: 'tenant'
  });

  const plans = [
    {
      name: "Free Plan",
      price: "Free",
      period: "for your first lease",
      description: "Perfect for businesses finding office space",
      features: [
        "AI property matching",
        "Up to 5 property tours",
        "Lease document assistance",
        "Digital signature support",
        "Basic analytics dashboard",
        "Email support"
      ],
      highlight: false,
      cta: "Start Free",
      icon: Building2,
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "Broker Pro",
      price: "₹4,999",
      period: "per month",
      description: "For brokers managing multiple deals",
      features: [
        "Unlimited property listings",
        "AI-powered client matching",
        "Automated document generation",
        "Deal pipeline management",
        "Commission tracking",
        "Priority support",
        "Advanced analytics",
        "Mobile app access"
      ],
      highlight: true,
      cta: "Start 30-Day Trial",
      icon: Zap,
      badge: "Most Popular",
      color: "from-blue-600 to-indigo-600"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For property owners & managers",
      features: [
        "Everything in Broker Pro",
        "Multi-property management",
        "Automated rent collection",
        "Maintenance request automation",
        "Tenant screening AI",
        "Dedicated account manager",
        "API access",
        "Custom integrations"
      ],
      highlight: false,
      cta: "Contact Sales",
      icon: Crown,
      color: "from-purple-600 to-pink-600"
    }
  ];

  const handleSubmit = (planName: string) => {
    // Handle form submission
    console.log('Signing up for:', planName, formData);
    alert(`Thank you for signing up for ${planName}! We'll contact you shortly.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 px-8 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.button
          onClick={onBack}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm mb-4">
            <Sparkles className="h-4 w-4" />
            Join 500+ Active Users
          </div>
          <h1 className="text-5xl mb-4 text-gray-900">
            Sign Up as a New User
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for you. All plans include our core AI features.
          </p>
        </motion.div>

        {/* Sign Up Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 mb-12 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl mb-6 text-gray-900">Your Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Full Name *</label>
              <Input
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="rounded-xl"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-2">Email *</label>
              <Input
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="rounded-xl"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-2">Phone Number *</label>
              <Input
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="rounded-xl"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-2">Company Name</label>
              <Input
                placeholder="Your company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="rounded-xl"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm text-gray-700 mb-2">I am a *</label>
            <div className="flex gap-3">
              {['tenant', 'broker', 'landlord'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFormData({ ...formData, userType: type })}
                  className={`flex-1 px-4 py-3 rounded-xl border-2 transition-all capitalize ${
                    formData.userType === type
                      ? 'border-blue-600 bg-blue-50 text-blue-700'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pricing Plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-3xl mb-8 text-center text-gray-900">Choose Your Plan</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + (0.1 * index) }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative bg-white rounded-3xl p-8 border-2 transition-all ${
                  plan.highlight
                    ? 'border-blue-500 shadow-2xl'
                    : 'border-gray-200 shadow-lg hover:shadow-xl'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <motion.div 
                    className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br ${plan.color}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <plan.icon className="h-7 w-7 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl mb-2 text-gray-900">{plan.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
                  
                  <div className="mb-2">
                    <span className={`text-5xl ${plan.highlight ? 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{plan.period}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.highlight
                          ? 'bg-gradient-to-br from-green-400 to-emerald-500'
                          : 'bg-green-500'
                      }`}>
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-900 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleSubmit(plan.name)}
                  disabled={!formData.name || !formData.email || !formData.phone}
                  className={`w-full py-6 rounded-xl transition-all ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-6 bg-white rounded-2xl shadow-lg border border-gray-200">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600" />
              <span className="text-gray-700">30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600" />
              <span className="text-gray-700">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600" />
              <span className="text-gray-700">Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
