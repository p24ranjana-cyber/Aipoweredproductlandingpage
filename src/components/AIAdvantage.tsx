import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Scan, Brain, Sparkles, Target, Zap, ArrowRight, Check, X } from 'lucide-react';
import { Slider } from './ui/slider';

export function AIAdvantage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [comparisonSlider, setComparisonSlider] = useState([50]);
  const [activeFeature, setActiveFeature] = useState(0);

  const steps = [
    {
      icon: Scan,
      title: "Property Matching",
      description: "AI scans 10,000+ listings in seconds and matches you with spaces that fit your exact requirements",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Brain,
      title: "Smart Negotiations",
      description: "ML models analyze market data to suggest optimal lease terms, saving you time and money",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Sparkles,
      title: "Document Automation",
      description: "AI generates, reviews, and processes all lease documents instantly with 99.8% accuracy",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Target,
      title: "Workflow Orchestration",
      description: "Automated reminders, approvals, and coordination—no more chasing people for signatures",
      color: "from-orange-500 to-red-600"
    }
  ];

  const features = [
    {
      before: {
        title: "Search & Shortlisting",
        description: "Traditional property search",
        time: "Days to weeks",
        steps: [
          "Manual market research",
          "Scattered property listings",
          "Spreadsheet chaos",
          "Delayed responses",
          "No ranking or scoring",
          "Takes days to shortlist",
          "Decisions based on limited data"
        ]
      },
      after: {
        title: "Search & Shortlisting",
        description: "AI-powered intelligent search",
        time: "Minutes",
        steps: [
          "Full-market inventory",
          "Structured data in one dashboard",
          "Ranked by Cost/Commute/ESG/Risk",
          "Shortlists generated instantly",
          "Decisions based on verified data"
        ]
      }
    },
    {
      before: {
        title: "Documentation & Validation",
        description: "Manual documentation process",
        time: "Days per revision",
        steps: [
          "Multiple spreadsheets",
          "Manual rent benchmarks",
          "No 5-year visibility",
          "Fit-out & ops missed",
          "Revisions take days"
        ]
      },
      after: {
        title: "Documentation & Validation",
        description: "Automated documentation system",
        time: "Instant updates",
        steps: [
          "Single auto-filled sheet",
          "Market-aligned rent engine",
          "Full 5-year TCO calculated",
          "All hidden costs included",
          "Revisions update instantly"
        ]
      }
    },
    {
      before: {
        title: "Coordination & Approvals",
        description: "Scattered communication channels",
        time: "Constant delays",
        steps: [
          "WhatsApp + email chaos",
          "Waiting for broker replies",
          "Missed follow-ups",
          "No single status view",
          "Delays from misalignment"
        ]
      },
      after: {
        title: "Coordination & Approvals",
        description: "Unified communication hub",
        time: "Real-time sync",
        steps: [
          "Unified communication hub",
          "Real-time notifications",
          "Automated follow-ups",
          "Live progress tracker",
          "All parties synced instantly"
        ]
      }
    },
    {
      before: {
        title: "Compliance & Risk",
        description: "Manual compliance tracking",
        time: "Late discoveries",
        steps: [
          "No central checklist",
          "Missing NOCs discovered late",
          "Slow approval movement",
          "No risk assessment",
          "Compliance done manually"
        ]
      },
      after: {
        title: "Compliance & Risk",
        description: "AI-powered risk management",
        time: "Proactive alerts",
        steps: [
          "Auto-generated checklist",
          "Missing-doc alerts early",
          "Step-wise guidance",
          "Real-time risk scoring",
          "AI tracks laws & updates"
        ]
      }
    },
    {
      before: {
        title: "Finalisation",
        description: "Manual document drafting",
        time: "Weeks of iterations",
        steps: [
          "Drafting takes weeks",
          "Lots of versions",
          "Manual error-prone text",
          "Confusion in negotiation notes",
          "No handover tracking"
        ]
      },
      after: {
        title: "Finalisation",
        description: "AI-assisted finalisation",
        time: "Instant generation",
        steps: [
          "LOI generated instantly",
          "Version-controlled document",
          "AI-validated, standardised clauses",
          "Clear negotiation summary",
          "Handover progress dashboard"
        ]
      }
    }
  ];

  return (
    <section id="how-it-works" id="how-it-works" ref={ref} className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-gray-900">
            Why our AI makes the difference
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the transformation in action. Drag the slider to compare.
          </p>
        </motion.div>

        {/* Interactive Before/After Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          {/* Feature Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {features.map((feature, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveFeature(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-3 rounded-xl whitespace-nowrap transition-all text-sm ${
                  activeFeature === index
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {feature.before.title}
              </motion.button>
            ))}
          </div>

          {/* Comparison Container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-200">
            <div className="grid lg:grid-cols-2 min-h-[600px]">
              {/* Before Side */}
              <motion.div
                className="relative bg-gradient-to-br from-gray-100 to-gray-200 p-8"
                style={{
                  clipPath: `inset(0 ${100 - comparisonSlider[0]}% 0 0)`
                }}
              >
                <div className="absolute inset-0 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gray-400 flex items-center justify-center">
                      <X className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-gray-900">{features[activeFeature].before.title}</h3>
                      <p className="text-sm text-gray-600">Traditional Process</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{features[activeFeature].before.description}</p>
                  
                  <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-lg mb-6">
                    ⏱️ Time Required: {features[activeFeature].before.time}
                  </div>

                  <div className="space-y-2.5">
                    {features[activeFeature].before.steps.map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-2.5 p-2.5 bg-white/50 rounded-lg"
                      >
                        <div className="w-5 h-5 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <span className="text-gray-700 text-sm leading-snug">{step}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-white/70 rounded-xl">
                    <p className="text-sm text-gray-600">Result:</p>
                    <p className="text-lg text-gray-900">Slow, frustrating, expensive</p>
                  </div>
                </div>
              </motion.div>

              {/* After Side */}
              <motion.div
                className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8"
                style={{
                  clipPath: `inset(0 0 0 ${comparisonSlider[0]}%)`
                }}
              >
                <div className="absolute inset-0 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-gray-900">{features[activeFeature].after.title}</h3>
                      <p className="text-sm text-gray-600">With PropPropEdgedge AI</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{features[activeFeature].after.description}</p>
                  
                  <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-lg mb-6">
                    ⚡ Time Required: {features[activeFeature].after.time}
                  </div>

                  <div className="space-y-2.5">
                    {features[activeFeature].after.steps.map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-2.5 p-2.5 bg-white/70 rounded-lg border border-blue-200"
                      >
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3.5 w-3.5 text-white" />
                        </div>
                        <span className="text-gray-900 text-sm leading-snug">{step}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                    <p className="text-sm text-gray-600">Result:</p>
                    <p className="text-lg text-gray-900">Fast, transparent, cost-effective</p>
                  </div>
                </div>
              </motion.div>

              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-blue-600 shadow-xl z-20"
                style={{ left: `${comparisonSlider[0]}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-blue-600">
                  <div className="flex gap-1">
                    <div className="w-0.5 h-4 bg-blue-600"></div>
                    <div className="w-0.5 h-4 bg-blue-600"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Control */}
            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <div className="max-w-md mx-auto">
                <p className="text-center text-sm text-gray-600 mb-3">
                  Drag to compare Before vs After
                </p>
                <Slider
                  value={comparisonSlider}
                  onValueChange={setComparisonSlider}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>Before (Traditional)</span>
                  <span>After (AI-Powered)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border border-gray-200"
        >
          <h3 className="text-3xl mb-12 text-center text-gray-900">How the AI works behind the scenes</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 h-full">
                  <motion.div 
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className="h-7 w-7 text-white" />
                  </motion.div>
                  
                  <h4 className="text-xl mb-2 text-gray-900">{step.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <motion.div 
                      className="w-6 h-6 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center text-white text-xs"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}