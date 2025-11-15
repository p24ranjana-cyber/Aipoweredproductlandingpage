import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, TrendingUp, Leaf, DollarSign, Users, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FindOfficeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignUp: () => void;
}

// Mock property data for results
const mockProperties = [
  {
    id: 1,
    name: "Prestige Tech Park",
    location: "Whitefield, Bangalore",
    image: "https://images.unsplash.com/photo-1712062403111-978e36b01d1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcGFyayUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MzIwNTE5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    commuteScore: 92,
    esgScore: 88,
    rent: "₹85/sq ft"
  },
  {
    id: 2,
    name: "Global Innovation Hub",
    location: "Electronic City, Bangalore",
    image: "https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjMxNjY1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    commuteScore: 87,
    esgScore: 95,
    rent: "₹78/sq ft"
  },
  {
    id: 3,
    name: "Urban Edge Business Center",
    location: "MG Road, Bangalore",
    image: "https://images.unsplash.com/photo-1635107624924-c209ff7330b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwb2ZmaWNlJTIwc3BhY2V8ZW58MXx8fHwxNzYzMTQ3MzE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    commuteScore: 95,
    esgScore: 82,
    rent: "₹120/sq ft"
  }
];

export function FindOfficeModal({ isOpen, onClose, onSignUp }: FindOfficeModalProps) {
  const [location, setLocation] = useState('');
  const [commutePriority, setCommutePriority] = useState('');
  const [esgPriority, setEsgPriority] = useState('');
  const [budget, setBudget] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const handleClose = () => {
    setShowResults(false);
    setLocation('');
    setCommutePriority('');
    setEsgPriority('');
    setBudget('');
    setTeamSize('');
    onClose();
  };

  const handleSignUp = () => {
    handleClose();
    onSignUp();
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            onClick={handleClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden pointer-events-auto"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white relative">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
                
                <h2 className="text-3xl mb-2">
                  {showResults ? 'Your Top 3 Free Recommendations' : 'Find Your Ideal Office'}
                </h2>
                <p className="text-white/90">
                  {showResults 
                    ? 'Based on your preferences, here are the best matches' 
                    : 'Tell us your priorities and we\'ll recommend the best spaces instantly'}
                </p>
              </div>

              {/* Content */}
              <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
                {!showResults ? (
                  /* Form View */
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Location */}
                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-gray-900">Location *</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="location"
                          type="text"
                          placeholder="e.g., Bangalore, Whitefield"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="pl-10 h-12 rounded-xl border-2"
                          required
                        />
                      </div>
                    </div>

                    {/* Commute Priority */}
                    <div className="space-y-2">
                      <Label htmlFor="commute" className="text-gray-900 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Commute Priority *
                      </Label>
                      <Select value={commutePriority} onValueChange={setCommutePriority} required>
                        <SelectTrigger className="h-12 rounded-xl border-2">
                          <SelectValue placeholder="Select priority level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low - Location flexibility</SelectItem>
                          <SelectItem value="medium">Medium - Balanced commute</SelectItem>
                          <SelectItem value="high">High - Minimal commute time</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* ESG Priority */}
                    <div className="space-y-2">
                      <Label htmlFor="esg" className="text-gray-900 flex items-center gap-2">
                        <Leaf className="h-4 w-4" />
                        ESG Priority *
                      </Label>
                      <Select value={esgPriority} onValueChange={setEsgPriority} required>
                        <SelectTrigger className="h-12 rounded-xl border-2">
                          <SelectValue placeholder="Select priority level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low - Basic standards</SelectItem>
                          <SelectItem value="medium">Medium - Green certified</SelectItem>
                          <SelectItem value="high">High - Net-zero commitment</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Budget */}
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-gray-900 flex items-center gap-2">
                        <DollarSign className="h-4 w-4" />
                        Budget (Optional)
                      </Label>
                      <Input
                        id="budget"
                        type="text"
                        placeholder="e.g., ₹50-100/sq ft"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="h-12 rounded-xl border-2"
                      />
                    </div>

                    {/* Team Size */}
                    <div className="space-y-2">
                      <Label htmlFor="teamSize" className="text-gray-900 flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Team Size (Optional)
                      </Label>
                      <Input
                        id="teamSize"
                        type="text"
                        placeholder="e.g., 50-100 people"
                        value={teamSize}
                        onChange={(e) => setTeamSize(e.target.value)}
                        className="h-12 rounded-xl border-2"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white h-14 rounded-xl shadow-lg hover:shadow-xl transition-all group"
                    >
                      Show My Top 3 Options
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                ) : (
                  /* Results View */
                  <div className="space-y-6">
                    {mockProperties.map((property, index) => (
                      <motion.div
                        key={property.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-300 transition-all shadow-lg hover:shadow-xl"
                      >
                        <div className="flex gap-4">
                          {/* Property Image */}
                          <div className="flex-shrink-0">
                            <ImageWithFallback
                              src={property.image}
                              alt={property.name}
                              className="w-32 h-32 object-cover rounded-xl"
                            />
                          </div>

                          {/* Property Details */}
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="text-xl text-gray-900 mb-1">{property.name}</h3>
                                <p className="text-gray-600 flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  {property.location}
                                </p>
                              </div>
                              <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                                {property.rent}
                              </div>
                            </div>

                            {/* Scores */}
                            <div className="flex gap-4 mb-3">
                              <div className="flex items-center gap-2">
                                <TrendingUp className="h-4 w-4 text-green-600" />
                                <span className="text-sm text-gray-700">Commute: {property.commuteScore}/100</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Leaf className="h-4 w-4 text-green-600" />
                                <span className="text-sm text-gray-700">ESG: {property.esgScore}/100</span>
                              </div>
                            </div>

                            {/* View Details Link */}
                            <button className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1 group">
                              View Details
                              <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {/* Sign Up CTA */}
                    <div className="pt-6 border-t border-gray-200 text-center space-y-4">
                      <p className="text-gray-600">Want to see more options and schedule tours?</p>
                      
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button
                          onClick={handleSignUp}
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
                        >
                          Sign Up for More
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        
                        <Button
                          onClick={handleSignUp}
                          variant="outline"
                          className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
                        >
                          Refine Search
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}