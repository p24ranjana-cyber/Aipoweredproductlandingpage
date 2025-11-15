import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Check, X, DollarSign, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Slider } from './ui/slider';

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [monthlyRent, setMonthlyRent] = useState([500000]);
  
  // Calculate fees
  const brokerFee = monthlyRent[0] * 0.75;
  const activationFee = 20999;
  const propEdgeFee = monthlyRent[0] * 0.5;
  const savings = brokerFee - propEdgeFee - activationFee;

  return (
    <section id="pricing" ref={ref} className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6 text-gray-900">
            Simple, outcome-based pricing
          </h2>
          <p className="text-xl text-gray-600">
            Only pay when you win — not while you wait.
          </p>
        </motion.div>

        {/* Two Side-by-Side Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {/* Card A - Traditional Brokerage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg"
          >
            <h3 className="text-2xl mb-6 text-gray-900 text-center">Traditional Brokers</h3>
            
            {/* Key Fee Line */}
            <div className="text-center mb-8 py-6 bg-red-50 rounded-2xl">
              <p className="text-5xl text-red-600 mb-2">1–2 months' rent</p>
              <p className="text-sm text-gray-600">Typical brokerage fee</p>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Fee tied to rent, not work done</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Opaque shortlisting process</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Manual coordination & delays</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">No transparency into compliance or scoring</span>
              </li>
            </ul>
          </motion.div>

          {/* Card B - PropEdge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Shine effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <h3 className="text-2xl mb-6 text-white text-center relative z-10">PropEdge</h3>
            
            {/* Key Fee Line */}
            <div className="text-center mb-6 relative z-10">
              <p className="text-5xl text-white mb-2">50% of one month's rent</p>
              <p className="text-lg text-white/90 mb-4">Only when you close a lease</p>
              
              {/* Activation Box */}
              <div className="inline-block bg-white rounded-full px-6 py-3 border-2 border-blue-400">
                <p className="text-sm text-blue-700">
                  <span className="font-semibold">Activation Fee: ₹20,999</span>
                </p>
              </div>
              <p className="text-sm text-white/80 mt-2">
                Redeemed against success fee when you close
              </p>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-4 relative z-10">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white">AI shortlist, scoring, valuation & compliance</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white">Transparent, faster decisions</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white">Unlimited usage during mandate</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Pricing Calculator Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-10 shadow-lg border border-blue-100 mb-16"
        >
          <div className="max-w-5xl mx-auto">
            {/* Calculator Header */}
            <div className="text-center mb-8">
              <h3 className="text-3xl mb-2 text-gray-900">What will you pay?</h3>
              <p className="text-gray-600">Estimate PropEdge's fee based on your office's monthly rent.</p>
            </div>

            {/* Slider */}
            <div className="bg-white rounded-2xl p-8 mb-8">
              <label className="block text-sm text-gray-700 mb-4">
                Expected monthly rent
              </label>
              <Slider
                value={monthlyRent}
                onValueChange={setMonthlyRent}
                max={1000000}
                min={100000}
                step={50000}
                className="mb-6"
              />
              <div className="flex justify-between text-sm text-gray-600 mb-6">
                <span>₹1,00,000</span>
                <span>₹10,00,000</span>
              </div>
              
              {/* Dynamic Number Display */}
              <div className="text-center">
                <p className="text-4xl text-blue-600">
                  ₹{monthlyRent[0].toLocaleString('en-IN')}
                </p>
                <p className="text-sm text-gray-500 mt-1">per month</p>
              </div>
            </div>

            {/* Three Horizontal Result Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 - Broker Fee */}
              <motion.div
                key={brokerFee}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md"
              >
                <p className="text-sm text-gray-600 mb-3">Broker Fee (Typical)</p>
                <p className="text-4xl text-red-600 mb-2">
                  ₹{brokerFee.toLocaleString('en-IN')}
                </p>
                <p className="text-xs text-gray-500">1–2 months' rent on average</p>
              </motion.div>

              {/* Card 2 - PropEdge Fee */}
              <motion.div
                key={propEdgeFee}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-6 shadow-lg"
              >
                <p className="text-sm text-white/80 mb-3">PropEdge Success Fee</p>
                <p className="text-4xl text-white mb-2">
                  ₹{propEdgeFee.toLocaleString('en-IN')}
                </p>
                <p className="text-xs text-white/80">50% of one month's rent</p>
              </motion.div>

              {/* Card 3 - Savings */}
              <motion.div
                key={savings}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="bg-green-50 rounded-2xl p-6 border-2 border-green-500 shadow-md"
              >
                <p className="text-sm text-green-700 mb-3">Your Savings</p>
                <p className="text-4xl text-green-600 mb-2">
                  ₹{savings.toLocaleString('en-IN')}
                </p>
                <p className="text-xs text-green-700">vs traditional brokers</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* How You Pay Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-3xl mb-12 text-center text-gray-900">How You Pay</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 - Activate */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                
                {/* Title */}
                <h4 className="text-xl mb-3 text-gray-900">Activate</h4>
                
                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  Pay ₹20,999 to unlock full AI workflow for your mandate.
                </p>
              </div>
              
              {/* Connector Arrow */}
              <div className="hidden md:block absolute top-8 left-full w-full">
                <ArrowRight className="h-6 w-6 text-blue-300 absolute left-1/2 -translate-x-1/2" />
              </div>
            </motion.div>

            {/* Step 2 - Explore */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                
                {/* Title */}
                <h4 className="text-xl mb-3 text-gray-900">Explore</h4>
                
                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  Get shortlists, scoring, valuation & compliance checks.
                </p>
              </div>
              
              {/* Connector Arrow */}
              <div className="hidden md:block absolute top-8 left-full w-full">
                <ArrowRight className="h-6 w-6 text-blue-300 absolute left-1/2 -translate-x-1/2" />
              </div>
            </motion.div>

            {/* Step 3 - Close */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                
                {/* Title */}
                <h4 className="text-xl mb-3 text-gray-900">Close</h4>
                
                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  Pay 50% of one month's rent on closure. Activation fee is fully adjusted.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}