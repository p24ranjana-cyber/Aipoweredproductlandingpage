import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { ArrowLeft, Building2, MapPin, IndianRupee, Users, Calendar, Upload, FileText, Leaf, ShieldCheck, CheckCircle, Image as ImageIcon, Wifi, Car, Coffee, Dumbbell } from 'lucide-react';
import { Input } from './ui/input';
import { Slider } from './ui/slider';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

interface ListPropertyPageProps {
  onBack: () => void;
}

export function ListPropertyPage({ onBack }: ListPropertyPageProps) {
  const [step, setStep] = useState(1);
  const [propertyData, setPropertyData] = useState({
    propertyName: '',
    location: '',
    propertyType: 'commercial-office',
    totalArea: [5000],
    availableArea: [5000],
    monthlyRent: [50],
    seats: [100],
    parkingSpots: [20],
    availableFrom: '',
    leaseTerm: '3-5',
    description: '',
    amenities: [] as string[],
    esgCertification: '',
    complianceStatus: 'all-clear',
    contactName: '',
    contactEmail: '',
    contactPhone: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const propertyTypes = [
    { value: 'commercial-office', label: 'Commercial Office', icon: Building2 },
    { value: 'co-working', label: 'Co-working Space', icon: Users },
    { value: 'tech-park', label: 'Tech Park', icon: Building2 },
    { value: 'business-center', label: 'Business Center', icon: Building2 }
  ];

  const amenitiesList = [
    { value: 'wifi', label: 'High-Speed WiFi', icon: Wifi },
    { value: 'parking', label: 'Parking', icon: Car },
    { value: 'cafeteria', label: 'Cafeteria', icon: Coffee },
    { value: 'gym', label: 'Gym', icon: Dumbbell },
    { value: 'conference', label: 'Conference Rooms', icon: Building2 },
    { value: 'security', label: '24/7 Security', icon: ShieldCheck }
  ];

  const esgCertifications = [
    'LEED Platinum',
    'LEED Gold',
    'LEED Silver',
    'IGBC Green Building',
    'GRIHA 5-Star',
    'None'
  ];

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

  const toggleAmenity = (amenity: string) => {
    setPropertyData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const handleSubmit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
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
            <h2 className="text-3xl mb-2 text-gray-900">Property Basics</h2>
            <p className="text-gray-600 mb-6">Tell us about your property</p>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Property Name *</label>
              <Input
                placeholder="e.g., WeWork Prestige Central"
                value={propertyData.propertyName}
                onChange={(e) => setPropertyData({ ...propertyData, propertyName: e.target.value })}
                className="rounded-xl h-12"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Location *</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search location..."
                  value={propertyData.location}
                  onChange={(e) => setPropertyData({ ...propertyData, location: e.target.value })}
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
                  onClick={() => setPropertyData({ ...propertyData, location })}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    propertyData.location === location
                      ? 'border-blue-600 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <MapPin className="h-5 w-5 mb-1 inline" />
                  <span className="text-sm ml-2">{location}</span>
                </motion.button>
              ))}
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-3">Property Type *</label>
              <div className="grid grid-cols-2 gap-3">
                {propertyTypes.map((type) => (
                  <motion.button
                    key={type.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setPropertyData({ ...propertyData, propertyType: type.value })}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      propertyData.propertyType === type.value
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <type.icon className="h-5 w-5 mb-2" />
                    <span className="text-sm">{type.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            <Button
              onClick={() => setStep(2)}
              disabled={!propertyData.propertyName || !propertyData.location}
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
            <h2 className="text-3xl mb-2 text-gray-900">Property Details</h2>
            <p className="text-gray-600 mb-6">Provide space and pricing information</p>

            <div>
              <label className="block text-sm text-gray-700 mb-4">Total Area (sq ft): <span className="text-2xl text-blue-600">{propertyData.totalArea[0]}</span></label>
              <Slider
                value={propertyData.totalArea}
                onValueChange={(value) => setPropertyData({ ...propertyData, totalArea: value })}
                max={50000}
                min={1000}
                step={500}
                className="mb-2"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>1,000 sq ft</span>
                <span>50,000 sq ft</span>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-4">Available Area (sq ft): <span className="text-2xl text-blue-600">{propertyData.availableArea[0]}</span></label>
              <Slider
                value={propertyData.availableArea}
                onValueChange={(value) => setPropertyData({ ...propertyData, availableArea: value })}
                max={propertyData.totalArea[0]}
                min={1000}
                step={500}
                className="mb-2"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>1,000 sq ft</span>
                <span>{propertyData.totalArea[0]} sq ft</span>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-4">Monthly Rent (₹ Lakhs): <span className="text-2xl text-blue-600">₹{propertyData.monthlyRent[0]}L</span></label>
              <Slider
                value={propertyData.monthlyRent}
                onValueChange={(value) => setPropertyData({ ...propertyData, monthlyRent: value })}
                max={300}
                min={10}
                step={5}
                className="mb-2"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>₹10L</span>
                <span>₹300L</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-4">Seating Capacity: <span className="text-blue-600">{propertyData.seats[0]}</span></label>
                <Slider
                  value={propertyData.seats}
                  onValueChange={(value) => setPropertyData({ ...propertyData, seats: value })}
                  max={500}
                  min={10}
                  step={10}
                  className="mb-2"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-4">Parking Spots: <span className="text-blue-600">{propertyData.parkingSpots[0]}</span></label>
                <Slider
                  value={propertyData.parkingSpots}
                  onValueChange={(value) => setPropertyData({ ...propertyData, parkingSpots: value })}
                  max={100}
                  min={0}
                  step={5}
                  className="mb-2"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Available From</label>
                <Input
                  type="date"
                  value={propertyData.availableFrom}
                  onChange={(e) => setPropertyData({ ...propertyData, availableFrom: e.target.value })}
                  className="rounded-xl h-12"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Preferred Lease Term</label>
                <select
                  value={propertyData.leaseTerm}
                  onChange={(e) => setPropertyData({ ...propertyData, leaseTerm: e.target.value })}
                  className="w-full h-12 px-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                >
                  <option value="1-2">1-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                  <option value="flexible">Flexible</option>
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
            <h2 className="text-3xl mb-2 text-gray-900">Amenities & Features</h2>
            <p className="text-gray-600 mb-6">Highlight what makes your property special</p>

            <div>
              <label className="block text-sm text-gray-700 mb-3">Select Amenities</label>
              <div className="grid grid-cols-2 gap-3">
                {amenitiesList.map((amenity) => (
                  <motion.button
                    key={amenity.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleAmenity(amenity.value)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      propertyData.amenities.includes(amenity.value)
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <amenity.icon className="h-5 w-5 mb-2" />
                    <span className="text-sm">{amenity.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Property Description</label>
              <Textarea
                placeholder="Describe your property, its location advantages, nearby amenities, etc."
                value={propertyData.description}
                onChange={(e) => setPropertyData({ ...propertyData, description: e.target.value })}
                className="rounded-xl min-h-[100px]"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">ESG Certification</label>
              <select
                value={propertyData.esgCertification}
                onChange={(e) => setPropertyData({ ...propertyData, esgCertification: e.target.value })}
                className="w-full h-12 px-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
              >
                <option value="">Select certification</option>
                {esgCertifications.map((cert) => (
                  <option key={cert} value={cert}>{cert}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Compliance Status</label>
              <select
                value={propertyData.complianceStatus}
                onChange={(e) => setPropertyData({ ...propertyData, complianceStatus: e.target.value })}
                className="w-full h-12 px-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
              >
                <option value="all-clear">All Clear</option>
                <option value="pending-minor">Minor Issues Pending</option>
                <option value="in-progress">Compliance In Progress</option>
              </select>
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
                onClick={() => setStep(4)}
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 rounded-xl"
              >
                Continue
              </Button>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-3xl mb-2 text-gray-900">Contact Information</h2>
            <p className="text-gray-600 mb-6">How can potential tenants reach you?</p>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Contact Name *</label>
              <Input
                placeholder="Your full name"
                value={propertyData.contactName}
                onChange={(e) => setPropertyData({ ...propertyData, contactName: e.target.value })}
                className="rounded-xl h-12"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Email Address *</label>
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={propertyData.contactEmail}
                onChange={(e) => setPropertyData({ ...propertyData, contactEmail: e.target.value })}
                className="rounded-xl h-12"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Phone Number *</label>
              <Input
                type="tel"
                placeholder="+91 98765 43210"
                value={propertyData.contactPhone}
                onChange={(e) => setPropertyData({ ...propertyData, contactPhone: e.target.value })}
                className="rounded-xl h-12"
              />
            </div>

            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <p className="text-sm text-gray-700">
                📸 <span className="font-semibold">Next Step:</span> After submission, our team will contact you to schedule a property visit and collect photos/documents.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <p className="text-sm text-gray-700">
                ✓ Your property will be visible to <span className="font-semibold">500+ active tenants</span> on our platform
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setStep(3)}
                variant="outline"
                className="flex-1 py-6 rounded-xl"
              >
                Back
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={!propertyData.contactName || !propertyData.contactEmail || !propertyData.contactPhone}
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 rounded-xl"
              >
                <Upload className="mr-2 h-5 w-5" />
                List Property
              </Button>
            </div>
          </motion.div>
        );
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 px-8 pb-16">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-4xl mb-4 text-gray-900">Property Listed Successfully! 🎉</h2>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for listing <span className="text-blue-600">{propertyData.propertyName}</span> on PropEdge
            </p>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 mb-8">
              <h3 className="text-xl mb-6 text-gray-900">What happens next?</h3>
              <div className="space-y-4 text-left">
                {[
                  { icon: FileText, text: 'Our team will review your listing within 24 hours' },
                  { icon: ImageIcon, text: 'We\'ll schedule a property visit for photos and documentation' },
                  { icon: CheckCircle, text: 'Your listing will go live and be visible to 500+ active tenants' },
                  { icon: Users, text: 'You\'ll start receiving enquiries from qualified leads' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-gray-700 pt-2">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <Button
              onClick={onBack}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 rounded-xl"
            >
              Back to Home
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Form */}
          <div>
            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center flex-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      i <= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'
                    }`}>
                      {i}
                    </div>
                    {i < 4 && (
                      <div className={`flex-1 h-1 mx-2 transition-all ${
                        i < step ? 'bg-blue-600' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Basics</span>
                <span>Details</span>
                <span>Amenities</span>
                <span>Contact</span>
              </div>
            </div>

            {/* Form Steps */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
              {submitting ? (
                <div className="text-center py-20">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-2xl text-gray-900 mb-2">Submitting your listing...</h3>
                  <p className="text-gray-600">This will just take a moment</p>
                </div>
              ) : (
                <AnimatePresence mode="wait">
                  {renderStep()}
                </AnimatePresence>
              )}
            </div>
          </div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="sticky top-24 space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl mb-4">Why list on PropEdge?</h3>
              <div className="space-y-3">
                {[
                  'Reach 500+ active commercial tenants',
                  'AI-powered tenant matching',
                  'Complete background verification',
                  'Digital documentation & e-signing',
                  'Zero commission on direct deals'
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
                <Building2 className="h-6 w-6 text-blue-600" />
                <h4 className="text-lg text-gray-900">Your Listing Summary</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Property Name:</span>
                  <span className="text-gray-900">{propertyData.propertyName || 'Not set'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="text-gray-900">{propertyData.location || 'Not set'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Area:</span>
                  <span className="text-gray-900">{propertyData.availableArea[0]} sq ft</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rent:</span>
                  <span className="text-gray-900">₹{propertyData.monthlyRent[0]}L/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Seats:</span>
                  <span className="text-gray-900">{propertyData.seats[0]}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
