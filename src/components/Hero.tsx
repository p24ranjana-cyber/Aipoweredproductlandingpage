import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, TrendingUp, Clock, Users, FileText, Sliders, List, IndianRupee, Leaf, ShieldCheck, FileSignature, Bell, Upload, CheckCircle, Building2, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { VideoModal } from './VideoModal';
import { TrialSignupModal } from './TrialSignupModal';

interface HeroProps {
  onFindOffice?: () => void;
  onListProperty?: () => void;
}

export function Hero({ onFindOffice, onListProperty }: HeroProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showTrialModal, setShowTrialModal] = useState(false);
  
  const dashboardTabs = [
    { name: 'Requirements', icon: FileText, color: 'blue' },
    { name: 'Priorities', icon: Sliders, color: 'purple' },
    { name: 'AI Shortlist', icon: List, color: 'green' },
    { name: 'Valuation', icon: IndianRupee, color: 'orange' },
    { name: 'ESG', icon: Leaf, color: 'emerald' },
    { name: 'Compliance', icon: ShieldCheck, color: 'red' },
    { name: 'LOI', icon: FileSignature, color: 'indigo' }
  ];

  // Auto-cycle through tabs - each tab gets 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % dashboardTabs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40 pt-24 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block"
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">
                    <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                    Transforming India's ₹18 Lakh Crore CRE Market
                  </span>
                </motion.div>
                
                <h1 className="text-6xl lg:text-7xl tracking-tight max-w-2xl">
                  Choose your next office in <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">48 hours</span> <span className="text-gray-900">— not 8 weeks</span>
                </h1>
                
                <p className="text-xl text-gray-600 max-w-xl">
                  PropEdge brings every space, cost, and regulation into one AI-driven workflow—automating shortlisting, valuations, ESG checks and compliance steps that normally take weeks, so you finally get a clear, confident office decision without the delays, chaos or uncertainty of the old process.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-3"
              >
                {/* Find My Office - Primary CTA */}
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-7 rounded-xl shadow-lg hover:shadow-2xl transition-all group relative overflow-hidden"
                    onClick={onFindOffice || (() => setShowTrialModal(true))}
                  >
                    {/* Shimmer effect on hover */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '200%' }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Search className="h-5 w-5" />
                      Find My Office
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  {/* Pulse ring effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-blue-400 opacity-0"
                    animate={{ opacity: [0, 0.5, 0], scale: [1, 1.05, 1.1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* List My Property - Secondary CTA */}
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-7 rounded-xl shadow-sm hover:shadow-lg transition-all group bg-white"
                    onClick={onListProperty || (() => setShowTrialModal(true))}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Building2 className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      List My Property
                      <Upload className="h-5 w-5 group-hover:translate-y-[-2px] transition-transform" />
                    </span>
                  </Button>
                  {/* Badge indicator */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                    className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow-lg"
                  >
                    Free
                  </motion.div>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    delay: 0.8,
                    duration: 1.2,
                    ease: "easeInOut"
                  }}
                  className="text-sm text-gray-500"
                >
                  Takes 45 seconds to get started.
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-6 pt-4"
              >
                <motion.div 
                  className="space-y-1"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    <p className="text-2xl text-gray-900">75%</p>
                  </div>
                  <p className="text-sm text-gray-600">Faster Lease Cycles</p>
                </motion.div>
                <motion.div 
                  className="space-y-1"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <p className="text-2xl text-gray-900">90%</p>
                  </div>
                  <p className="text-sm text-gray-600">Time Saved</p>
                </motion.div>
                <motion.div 
                  className="space-y-1"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-indigo-600" />
                    <p className="text-2xl text-gray-900">500+</p>
                  </div>
                  <p className="text-sm text-gray-600">Active Users</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Visual - Interactive Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                {/* Dashboard Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white">
                  {/* Dashboard Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <span className="text-white text-sm">PropEdge AI Platform</span>
                    <Bell className="h-5 w-5 text-white" />
                  </div>

                  {/* Tab Navigation */}
                  <div className="bg-gray-50 border-b border-gray-200 flex overflow-x-auto">
                    {dashboardTabs.map((tab, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`flex-1 min-w-[90px] px-3 py-3 flex flex-col items-center justify-center gap-1 text-xs transition-all ${
                          activeTab === index
                            ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <tab.icon className="h-4 w-4" />
                        <span className="whitespace-nowrap">{tab.name}</span>
                      </button>
                    ))}
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-6 bg-white min-h-[450px]">
                    <AnimatePresence mode="wait">
                      {/* Tab 0: Requirements */}
                      {activeTab === 0 && (
                        <motion.div
                          key="requirements"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="space-y-3.5"
                        >
                          <h3 className="text-sm text-gray-500 mb-4">Enter Your Requirements</h3>
                          
                          {[
                            { label: 'Seats', value: '150-200' },
                            { label: 'Budget', value: '₹40-50L/month' },
                            { label: 'Preferred Areas', value: 'Koramangala, HSR, Whitefield' },
                            { label: 'Lease Term', value: '3-5 years' },
                            { label: 'Move-in Timeline', value: 'Within 60 days' },
                            { label: 'Workspace Type', value: 'Open plan + meeting rooms' }
                          ].map((field, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scaleX: 0 }}
                              animate={{ opacity: 1, scaleX: 1 }}
                              transition={{ delay: i * 0.25, duration: 0.3 }}
                              style={{ originX: 0 }}
                              className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200"
                            >
                              <span className="text-sm text-gray-600 min-w-[110px]">{field.label}:</span>
                              <motion.span
                                className="text-sm text-gray-900"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: i * 0.25 + 0.15 }}
                              >
                                <motion.span
                                  initial={{ maxWidth: 0, display: 'inline-block', overflow: 'hidden', whiteSpace: 'nowrap' }}
                                  animate={{ maxWidth: '500px' }}
                                  transition={{ delay: i * 0.25 + 0.25, duration: 0.6, ease: "linear" }}
                                >
                                  {field.value}
                                </motion.span>
                              </motion.span>
                            </motion.div>
                          ))}

                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.8 }}
                            className="mt-4 p-3.5 bg-green-50 border border-green-300 rounded-lg flex items-center justify-between"
                          >
                            <div className="flex items-center gap-2">
                              <Upload className="h-5 w-5 text-green-600" />
                              <span className="text-sm text-gray-700">Import Proposals (PDFs/Emails)</span>
                            </div>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 2.5 }}
                            >
                              <CheckCircle className="h-5 w-5 text-green-600" />
                            </motion.div>
                          </motion.div>

                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3 }}
                            className="text-sm text-green-600 text-center mt-2"
                          >
                            ✓ Uploaded & Extracted
                          </motion.p>
                        </motion.div>
                      )}

                      {/* Tab 1: Priorities */}
                      {activeTab === 1 && (
                        <motion.div
                          key="priorities"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="space-y-6"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <motion.div
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="w-2.5 h-2.5 bg-purple-600 rounded-full"
                            />
                            <p className="text-base text-gray-600">Understanding cost, commute, ESG and compliance priorities…</p>
                          </div>

                          {/* Shimmer effect */}
                          <motion.div
                            className="h-24 bg-gradient-to-r from-purple-100 via-purple-200 to-purple-100 rounded-xl relative overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                              animate={{ x: ['-100%', '200%'] }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            />
                          </motion.div>

                          {/* Auto-adjusting sliders with drag simulation */}
                          {[
                            { label: 'Cost', value: 40, start: 15, color: 'blue', bg: '#2563eb' },
                            { label: 'Commute', value: 25, start: 35, color: 'green', bg: '#16a34a' },
                            { label: 'ESG', value: 20, start: 30, color: 'emerald', bg: '#10b981' },
                            { label: 'Compliance', value: 15, start: 20, color: 'orange', bg: '#f97316' }
                          ].map((priority, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.8 + i * 0.15 }}
                              className="space-y-2"
                            >
                              <div className="flex justify-between">
                                <span className="text-base text-gray-700">{priority.label}</span>
                                <motion.span
                                  initial={{ opacity: 0 }}
                                  animate={{ 
                                    opacity: 1,
                                  }}
                                  transition={{ delay: 1.2 + i * 0.15 }}
                                  className="text-base text-gray-900 tabular-nums"
                                >
                                  <motion.span
                                    initial={{ scale: 1 }}
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ 
                                      delay: 1.5 + i * 0.25,
                                      duration: 0.3
                                    }}
                                  >
                                    {priority.value}%
                                  </motion.span>
                                </motion.span>
                              </div>
                              <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden relative">
                                <motion.div
                                  className="h-4 rounded-full relative"
                                  initial={{ width: `${priority.start}%` }}
                                  animate={{ 
                                    width: [`${priority.start}%`, `${priority.value + 5}%`, `${priority.value - 2}%`, `${priority.value}%`]
                                  }}
                                  transition={{ 
                                    delay: 1.2 + i * 0.25, 
                                    duration: 1.2,
                                    times: [0, 0.6, 0.85, 1],
                                    ease: [0.43, 0.13, 0.23, 0.96]
                                  }}
                                  style={{ background: priority.bg }}
                                >
                                  {/* Slider thumb */}
                                  <motion.div
                                    className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-lg border-2"
                                    style={{ borderColor: priority.bg }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: [0, 1.2, 1] }}
                                    transition={{ 
                                      delay: 1.2 + i * 0.25,
                                      duration: 0.4
                                    }}
                                  />
                                </motion.div>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}

                      {/* Tab 2: AI Shortlist */}
                      {activeTab === 2 && (
                        <motion.div
                          key="shortlist"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="space-y-3"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-sm text-gray-700">Top Matches</h3>
                            <motion.span
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                            >
                              AI Sorted
                            </motion.span>
                          </div>

                          {[
                            { name: 'Property #1', rent: '₹45L/mo', cost: '₹32Cr', location: 'Koramangala', commute: '18 min avg', esg: 'A+', compliance: 'Clear' },
                            { name: 'Property #2', rent: '₹42L/mo', cost: '₹30Cr', location: 'HSR Layout', commute: '22 min avg', esg: 'A', compliance: 'Clear' },
                            { name: 'Property #3', rent: '₹48L/mo', cost: '₹34Cr', location: 'Whitefield', commute: '25 min avg', esg: 'A', compliance: '1 pending' }
                          ].map((property, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -30 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.3 }}
                              className={`p-3 rounded-lg border-2 transition-all ${
                                i === 0 
                                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-400' 
                                  : 'bg-gray-50 border-gray-200'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="text-sm text-gray-900">{property.name}</h4>
                                {i === 0 && (
                                  <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="px-2 py-0.5 bg-green-600 text-white text-xs rounded"
                                  >
                                    Best Match
                                  </motion.span>
                                )}
                              </div>
                              <div className="grid grid-cols-2 gap-1 text-xs text-gray-600">
                                <div>Rent: <span className="text-gray-900">{property.rent}</span></div>
                                <div>5Y Cost: <span className="text-gray-900">{property.cost}</span></div>
                                <div>Location: <span className="text-gray-900">{property.location}</span></div>
                                <div>Commute: <span className="text-gray-900">{property.commute}</span></div>
                                <div>ESG: <span className="text-green-600">{property.esg}</span></div>
                                <div>Compliance: <span className="text-gray-900">{property.compliance}</span></div>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}

                      {/* Tab 3: Valuation */}
                      {activeTab === 3 && (
                        <motion.div
                          key="valuation"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="space-y-3"
                        >
                          <h3 className="text-sm text-gray-700 mb-4">5-Year Total Cost of Ownership</h3>

                          {[
                            { label: 'Base Rent', value: '₹2.7Cr', color: 'blue' },
                            { label: 'Escalation (5% p.a.)', value: '₹71L', color: 'indigo' },
                            { label: 'Fit-out Cost', value: '₹1.2Cr', color: 'purple' },
                            { label: 'Operations Cost', value: '₹85L', color: 'pink' },
                            { label: '5-Year Total', value: '₹5.56Cr', color: 'orange', bold: true }
                          ].map((item, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: i * 0.2 }}
                              className={`flex justify-between items-center p-3 rounded-lg ${
                                item.bold 
                                  ? 'bg-gradient-to-r from-orange-100 to-red-100 border-2 border-orange-400' 
                                  : 'bg-gray-50'
                              }`}
                            >
                              <span className={`text-sm ${item.bold ? 'font-semibold' : ''} text-gray-700`}>
                                {item.label}
                              </span>
                              <motion.span
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.2 + 0.3, type: "spring" }}
                                className={`text-sm ${item.bold ? 'text-lg font-bold' : ''} text-gray-900`}
                              >
                                {item.value}
                              </motion.span>
                            </motion.div>
                          ))}

                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                            className="mt-4 p-2 bg-blue-50 rounded-lg"
                          >
                            <p className="text-xs text-blue-700 text-center">
                              ✓ Market-aligned • All costs included • Auto-calculated
                            </p>
                          </motion.div>
                        </motion.div>
                      )}

                      {/* Tab 4: ESG */}
                      {activeTab === 4 && (
                        <motion.div
                          key="esg"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="space-y-5"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-base text-gray-700">ESG Performance</h3>
                            <motion.span
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 }}
                              className="px-3 py-1.5 bg-green-100 text-green-700 text-sm rounded-full"
                            >
                              LEED Gold Certified
                            </motion.span>
                          </div>

                          {[
                            { label: 'Energy Efficiency', value: 85, color: 'green', bg: '#16a34a' },
                            { label: 'Water Management', value: 78, color: 'blue', bg: '#2563eb' },
                            { label: 'Waste Reduction', value: 72, color: 'emerald', bg: '#10b981' },
                            { label: 'Carbon Footprint', value: 68, color: 'lime', bg: '#84cc16' }
                          ].map((metric, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.25 }}
                              className="space-y-2.5"
                            >
                              <div className="flex justify-between">
                                <span className="text-base text-gray-700">{metric.label}</span>
                                <motion.span
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: i * 0.25 + 0.5 }}
                                  className="text-base text-gray-900 tabular-nums"
                                >
                                  {metric.value}%
                                </motion.span>
                              </div>
                              <div className="w-full bg-gray-200 h-5 rounded-full overflow-hidden">
                                <motion.div
                                  className="h-5 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${metric.value}%` }}
                                  transition={{ delay: i * 0.25 + 0.5, duration: 1, ease: "easeOut" }}
                                  style={{ background: metric.bg }}
                                />
                              </div>
                            </motion.div>
                          ))}

                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2 }}
                            className="mt-5 p-4 bg-green-50 rounded-xl border border-green-200"
                          >
                            <p className="text-sm text-green-700 text-center">
                              ✓ Meets all ESG requirements • Top 15% in market
                            </p>
                          </motion.div>
                        </motion.div>
                      )}

                      {/* Tab 5: Compliance */}
                      {activeTab === 5 && (
                        <motion.div
                          key="compliance"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="space-y-4"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm text-gray-700">Compliance Checklist</h3>
                            <motion.span
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 1.8 }}
                              className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                            >
                              Low Risk
                            </motion.span>
                          </div>

                          {[
                            { label: 'Fire NOC', status: 'Verified', risk: 'low' },
                            { label: 'Zoning Clearance', status: 'Verified', risk: 'low' },
                            { label: 'Building Permit', status: 'Verified', risk: 'low' },
                            { label: 'Emergency Access', status: 'Verified', risk: 'low' }
                          ].map((item, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.3 }}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                            >
                              <div className="flex items-center gap-2">
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: i * 0.3 + 0.3, type: "spring" }}
                                >
                                  <CheckCircle className="h-5 w-5 text-green-600" />
                                </motion.div>
                                <span className="text-sm text-gray-700">{item.label}</span>
                              </div>
                              <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: i * 0.3 + 0.5 }}
                                className="text-xs text-green-600"
                              >
                                {item.status}
                              </motion.span>
                            </motion.div>
                          ))}

                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.5 }}
                            className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-300"
                          >
                            <div className="text-center">
                              <p className="text-lg text-green-700 mb-1">Overall Risk Level</p>
                              <p className="text-2xl text-green-900">Low</p>
                              <p className="text-xs text-gray-600 mt-2">All documents verified • No red flags</p>
                            </div>
                          </motion.div>
                        </motion.div>
                      )}

                      {/* Tab 6: LOI */}
                      {activeTab === 6 && (
                        <motion.div
                          key="loi"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="space-y-3"
                        >
                          <h3 className="text-sm text-gray-700 mb-4">Letter of Intent (LOI)</h3>

                          {[
                            { label: 'Property', value: 'Koramangala Property #1' },
                            { label: 'Lessee', value: 'Tech Company Pvt Ltd' },
                            { label: 'Lease Term', value: '3 Years + 2 Year Extension' },
                            { label: 'Monthly Rent', value: '₹45,00,000' },
                            { label: 'Security Deposit', value: '₹2.7 Cr (6 months)' },
                            { label: 'Lock-in Period', value: '1 Year' }
                          ].map((field, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.15 }}
                              className="flex justify-between items-center p-2.5 bg-indigo-50 rounded-lg border border-indigo-200"
                            >
                              <span className="text-xs text-gray-600">{field.label}</span>
                              <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: i * 0.15 + 0.2 }}
                                className="text-xs text-gray-900"
                              >
                                {field.value}
                              </motion.span>
                            </motion.div>
                          ))}

                          <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full mt-4 p-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg text-sm flex items-center justify-center gap-2"
                          >
                            <FileSignature className="h-4 w-4" />
                            Download LOI PDF
                          </motion.button>

                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2 }}
                            className="text-center"
                          >
                            <p className="text-xs text-green-600">✓ LOI Generated</p>
                            <p className="text-xs text-gray-500 mt-1">AI-validated, standardized clauses included</p>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl"></div>
      </section>

      <VideoModal isOpen={showVideoModal} onClose={() => setShowVideoModal(false)} />
      <TrialSignupModal isOpen={showTrialModal} onClose={() => setShowTrialModal(false)} />
    </>
  );
}