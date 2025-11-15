import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { ArrowLeft, MapPin, Users, IndianRupee, Calendar, Sliders, Search, Building2, TrendingUp, CheckCircle, Heart, Share2 } from 'lucide-react';
import { Input } from './ui/input';
import { Slider } from './ui/slider';
import { useState } from 'react';

interface FindOfficePageProps {
  onBack: () => void;
}

export function FindOfficePage({ onBack }: FindOfficePageProps) {
  const [step, setStep] = useState(1);
  const [searchData, setSearchData] = useState({
    location: '',
    seats: [150],
    budget: [45],
    moveInDate: '',
    leaseTerm: '3-5',
    priorities: {
      cost: 40,
      commute: 25,
      esg: 20,
      compliance: 15
    }
  });
  const [searching, setSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const locations = [
    'Koramangala, Bangalore',
    'HSR Layout, Bangalore',
    'Whitefield, Bangalore',
    'Indiranagar, Bangalore',
    'BKC, Mumbai',
    'Andheri, Mumbai',
    'Connaught Place, Delhi',
    'Gurgaon Cyber City'
  ];

  const mockListings = [
    {
      id: 1,
      name: 'WeWork Prestige Central',
      location: 'Koramangala, Bangalore',
      rent: '₹45L/month',
      totalCost: '₹32Cr (5 years)',
      seats: 180,
      sqft: 12000,
      commute: '18 min avg',
      esg: 'A+',
      compliance: 'Clear',
      amenities: ['Cafeteria', 'Parking', 'Conference Rooms', 'High-Speed Internet'],
      image: 'from-blue-400 to-cyan-500',
      match: 98,
      availableFrom: 'Immediate'
    },
    {
      id: 2,
      name: 'RMZ Ecoworld Tower',
      location: 'HSR Layout, Bangalore',
      rent: '₹42L/month',
      totalCost: '₹30Cr (5 years)',
      seats: 165,
      sqft: 11000,
      commute: '22 min avg',
      esg: 'A',
      compliance: 'Clear',
      amenities: ['Gym', 'Parking', 'Food Court', 'Metro Access'],
      image: 'from-green-400 to-emerald-500',
      match: 95,
      availableFrom: '15 days'
    },
    {
      id: 3,
      name: 'Embassy TechVillage',
      location: 'Whitefield, Bangalore',
      rent: '₹48L/month',
      totalCost: '₹34Cr (5 years)',
      seats: 200,
      sqft: 13500,
      commute: '25 min avg',
      esg: 'A',
      compliance: '1 pending',
      amenities: ['Swimming Pool', 'Shopping Complex', 'Parking', 'Sports Facilities'],
      image: 'from-purple-400 to-pink-500',
      match: 92,
      availableFrom: '30 days'
    },
    {
      id: 4,
      name: 'Manyata Tech Park',
      location: 'Nagavara, Bangalore',
      rent: '₹43L/month',
      totalCost: '₹31Cr (5 years)',
      seats: 175,
      sqft: 11800,
      commute: '20 min avg',
      esg: 'A+',
      compliance: 'Clear',
      amenities: ['Food Courts', 'ATM', 'Parking', 'Health Club'],
      image: 'from-orange-400 to-red-500',
      match: 94,
      availableFrom: '7 days'
    }
  ];

  const handleSearch = () => {
    setSearching(true);
    setTimeout(() => {
      setSearching(false);
      setShowResults(true);
    }, 2500);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-3xl mb-2 text-gray-900">Where do you want your office?</h2>
            <p className="text-gray-600 mb-6">Enter your preferred locations</p>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Primary Location *</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search location..."
                  value={searchData.location}
                  onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                  className="pl-11 rounded-xl h-14 text-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {locations.map((location, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSearchData({ ...searchData, location })}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    searchData.location === location
                      ? 'border-blue-600 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <MapPin className="h-5 w-5 mb-1 inline" />
                  <span className="text-sm ml-2">{location}</span>
                </motion.button>
              ))}
            </div>

            <Button
              onClick={() => setStep(2)}
              disabled={!searchData.location}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 rounded-xl text-lg"
            >
              Continue
            </Button>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-3xl mb-2 text-gray-900">Space Requirements</h2>
            <p className="text-gray-600 mb-6">Tell us about your team size and budget</p>

            <div>
              <label className="block text-sm text-gray-700 mb-4">Number of Seats: <span className="text-2xl text-blue-600">{searchData.seats[0]}</span></label>
              <Slider
                value={searchData.seats}
                onValueChange={(value) => setSearchData({ ...searchData, seats: value })}
                max={500}
                min={10}
                step={10}
                className="mb-2"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>10</span>
                <span>500</span>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-4">Monthly Budget: <span className="text-2xl text-blue-600">₹{searchData.budget[0]}L</span></label>
              <Slider
                value={searchData.budget}
                onValueChange={(value) => setSearchData({ ...searchData, budget: value })}
                max={200}
                min={10}
                step={5}
                className="mb-2"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>₹10L</span>
                <span>₹200L</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Move-in Date</label>
                <Input
                  type="date"
                  value={searchData.moveInDate}
                  onChange={(e) => setSearchData({ ...searchData, moveInDate: e.target.value })}
                  className="rounded-xl h-12"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Lease Term</label>
                <select
                  value={searchData.leaseTerm}
                  onChange={(e) => setSearchData({ ...searchData, leaseTerm: e.target.value })}
                  className="w-full h-12 px-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                >
                  <option value="1-2">1-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setStep(1)}
                variant="outline"
                className="flex-1 py-6 rounded-xl"
              >
                Back
              </Button>
              <Button
                onClick={() => setStep(3)}
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 rounded-xl"
              >
                Continue
              </Button>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-3xl mb-2 text-gray-900">Set Your Priorities</h2>
            <p className="text-gray-600 mb-6">Help our AI understand what matters most to you</p>

            {[
              { label: 'Cost Efficiency', key: 'cost', color: '#2563eb' },
              { label: 'Commute Time', key: 'commute', color: '#16a34a' },
              { label: 'ESG Rating', key: 'esg', color: '#10b981' },
              { label: 'Compliance', key: 'compliance', color: '#f97316' }
            ].map((priority) => (
              <div key={priority.key} className="space-y-2">
                <div className="flex justify-between">
                  <label className="block text-sm text-gray-700">{priority.label}</label>
                  <span className="text-lg text-gray-900">{searchData.priorities[priority.key as keyof typeof searchData.priorities]}%</span>
                </div>
                <Slider
                  value={[searchData.priorities[priority.key as keyof typeof searchData.priorities]]}
                  onValueChange={(value) => setSearchData({ 
                    ...searchData, 
                    priorities: { ...searchData.priorities, [priority.key]: value[0] }
                  })}
                  max={100}
                  min={0}
                  step={5}
                  className="mb-2"
                  style={{ '--slider-color': priority.color } as any}
                />
              </div>
            ))}

            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <p className="text-sm text-gray-700">
                💡 <span className="font-semibold">Tip:</span> Our AI will rank properties based on these priorities. 
                The total doesn't need to equal 100%.
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setStep(2)}
                variant="outline"
                className="flex-1 py-6 rounded-xl"
              >
                Back
              </Button>
              <Button
                onClick={handleSearch}
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 rounded-xl"
              >
                <Search className="mr-2 h-5 w-5" />
                Find My Office
              </Button>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 px-8 pb-16">
      <div className="max-w-6xl mx-auto">
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

        {!showResults ? (
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Form */}
            <div>
              {/* Progress */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center flex-1">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        i <= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'
                      }`}>
                        {i}
                      </div>
                      {i < 3 && (
                        <div className={`flex-1 h-1 mx-2 transition-all ${
                          i < step ? 'bg-blue-600' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Location</span>
                  <span>Requirements</span>
                  <span>Priorities</span>
                </div>
              </div>

              {/* Form Steps */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
                <AnimatePresence mode="wait">
                  {renderStep()}
                </AnimatePresence>
              </div>
            </div>

            {/* Right: Preview/Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="sticky top-24 space-y-6"
            >
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl mb-4">Why use PropEdge AI?</h3>
                <div className="space-y-3">
                  {[
                    'AI analyzes 10,000+ properties instantly',
                    'Personalized matches based on your priorities',
                    'See 5-year total cost of ownership',
                    'ESG ratings & compliance checks included',
                    'Schedule tours in one click'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                  <h4 className="text-lg text-gray-900">Your Search Summary</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="text-gray-900">{searchData.location || 'Not set'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Seats:</span>
                    <span className="text-gray-900">{searchData.seats[0]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Budget:</span>
                    <span className="text-gray-900">₹{searchData.budget[0]}L/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lease Term:</span>
                    <span className="text-gray-900">{searchData.leaseTerm} years</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          // Results View
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {searching && (
              <div className="text-center py-20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"
                />
                <h3 className="text-2xl text-gray-900 mb-2">AI is analyzing properties...</h3>
                <p className="text-gray-600">This should take just a few seconds</p>
              </div>
            )}

            {!searching && (
              <>
                <div className="text-center mb-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm mb-4"
                  >
                    <CheckCircle className="h-4 w-4" />
                    Found {mockListings.length} Perfect Matches
                  </motion.div>
                  <h2 className="text-4xl mb-2 text-gray-900">Your Office Recommendations</h2>
                  <p className="text-xl text-gray-600">
                    Ranked by your priorities in {searchData.location}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {mockListings.map((listing, index) => (
                    <motion.div
                      key={listing.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-200 hover:border-blue-400 transition-all group"
                    >
                      {/* Image Placeholder */}
                      <div className={`h-48 bg-gradient-to-br ${listing.image} relative`}>
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-900 shadow-lg">
                            {listing.match}% Match
                          </span>
                        </div>
                        <div className="absolute top-4 right-4 flex gap-2">
                          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                            <Heart className="h-5 w-5 text-gray-700" />
                          </button>
                          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                            <Share2 className="h-5 w-5 text-gray-700" />
                          </button>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-2xl text-white drop-shadow-lg mb-1">{listing.name}</h3>
                          <div className="flex items-center gap-2 text-white/90">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{listing.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-600">Monthly Rent</p>
                            <p className="text-xl text-gray-900">{listing.rent}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">5-Year Total</p>
                            <p className="text-xl text-gray-900">{listing.totalCost}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Capacity</p>
                            <p className="text-gray-900">{listing.seats} seats • {listing.sqft} sq ft</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Available</p>
                            <p className="text-gray-900">{listing.availableFrom}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 mb-4 text-sm">
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg">
                            ESG: {listing.esg}
                          </span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg">
                            {listing.commute}
                          </span>
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-lg">
                            {listing.compliance}
                          </span>
                        </div>

                        <div className="mb-4">
                          <p className="text-sm text-gray-600 mb-2">Amenities:</p>
                          <div className="flex flex-wrap gap-2">
                            {listing.amenities.slice(0, 3).map((amenity, i) => (
                              <span key={i} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                                {amenity}
                              </span>
                            ))}
                            {listing.amenities.length > 3 && (
                              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                                +{listing.amenities.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl">
                            Schedule Tour
                          </Button>
                          <Button variant="outline" className="rounded-xl">
                            Details
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <Button
                    onClick={() => {
                      setShowResults(false);
                      setStep(1);
                    }}
                    variant="outline"
                    className="px-8 py-6 rounded-xl"
                  >
                    Refine Search
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}