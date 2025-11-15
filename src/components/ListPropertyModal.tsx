import { motion, AnimatePresence } from 'motion/react';
import { X, Building2, MapPin, Maximize2, DollarSign, FileText, Upload, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { useState } from 'react';

interface ListPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const amenitiesList = [
  'Reserved Parking',
  'Power Backup',
  'Fully Furnished',
  'Cafeteria',
  'Gym/Fitness Center',
  'Conference Rooms',
  'High-speed Internet',
  'Security 24/7',
  'Elevator',
  'HVAC'
];

export function ListPropertyModal({ isOpen, onClose }: ListPropertyModalProps) {
  const [formData, setFormData] = useState({
    propertyName: '',
    address: '',
    carpetArea: '',
    floorPlate: '',
    expectedRent: '',
    leaseTerms: ''
  });
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAmenityToggle = (amenity: string) => {
    setSelectedAmenities(prev =>
      prev.includes(amenity)
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileNames = Array.from(files).map(f => f.name);
      setUploadedFiles(prev => [...prev, ...fileNames]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const handleClose = () => {
    setShowSuccess(false);
    setFormData({
      propertyName: '',
      address: '',
      carpetArea: '',
      floorPlate: '',
      expectedRent: '',
      leaseTerms: ''
    });
    setSelectedAmenities([]);
    setUploadedFiles([]);
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
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden pointer-events-auto"
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
                  {showSuccess ? 'Property Listing Submitted!' : 'List Your Property'}
                </h2>
                <p className="text-white/90">
                  {showSuccess 
                    ? 'Your property is under review' 
                    : 'Add your property details and reach verified corporate tenants'}
                </p>
              </div>

              {/* Content */}
              <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
                {!showSuccess ? (
                  /* Form View */
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Property Name */}
                    <div className="space-y-2">
                      <Label htmlFor="propertyName" className="text-gray-900 flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        Property Name *
                      </Label>
                      <Input
                        id="propertyName"
                        type="text"
                        placeholder="e.g., Tech Park Tower A"
                        value={formData.propertyName}
                        onChange={(e) => handleInputChange('propertyName', e.target.value)}
                        className="h-12 rounded-xl border-2"
                        required
                      />
                    </div>

                    {/* Address */}
                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-gray-900 flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Address / Location *
                      </Label>
                      <Textarea
                        id="address"
                        placeholder="Full address with city and pincode"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="rounded-xl border-2 min-h-[80px]"
                        required
                      />
                    </div>

                    {/* Carpet Area & Floor Plate */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="carpetArea" className="text-gray-900 flex items-center gap-2">
                          <Maximize2 className="h-4 w-4" />
                          Carpet Area (sq ft) *
                        </Label>
                        <Input
                          id="carpetArea"
                          type="text"
                          placeholder="e.g., 5000"
                          value={formData.carpetArea}
                          onChange={(e) => handleInputChange('carpetArea', e.target.value)}
                          className="h-12 rounded-xl border-2"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="floorPlate" className="text-gray-900">
                          Floor Plate Size (sq ft) *
                        </Label>
                        <Input
                          id="floorPlate"
                          type="text"
                          placeholder="e.g., 8000"
                          value={formData.floorPlate}
                          onChange={(e) => handleInputChange('floorPlate', e.target.value)}
                          className="h-12 rounded-xl border-2"
                          required
                        />
                      </div>
                    </div>

                    {/* Expected Rent */}
                    <div className="space-y-2">
                      <Label htmlFor="expectedRent" className="text-gray-900 flex items-center gap-2">
                        <DollarSign className="h-4 w-4" />
                        Expected Rent (per sq ft) *
                      </Label>
                      <Input
                        id="expectedRent"
                        type="text"
                        placeholder="e.g., ₹85"
                        value={formData.expectedRent}
                        onChange={(e) => handleInputChange('expectedRent', e.target.value)}
                        className="h-12 rounded-xl border-2"
                        required
                      />
                    </div>

                    {/* Lease Terms */}
                    <div className="space-y-2">
                      <Label htmlFor="leaseTerms" className="text-gray-900 flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Lease Terms *
                      </Label>
                      <Input
                        id="leaseTerms"
                        type="text"
                        placeholder="e.g., 3-5 years, negotiable"
                        value={formData.leaseTerms}
                        onChange={(e) => handleInputChange('leaseTerms', e.target.value)}
                        className="h-12 rounded-xl border-2"
                        required
                      />
                    </div>

                    {/* Amenities Checklist */}
                    <div className="space-y-3">
                      <Label className="text-gray-900">Amenities</Label>
                      <div className="grid grid-cols-2 gap-3 bg-gray-50 rounded-xl p-4 border-2 border-gray-200">
                        {amenitiesList.map((amenity) => (
                          <div key={amenity} className="flex items-center space-x-2">
                            <Checkbox
                              id={amenity}
                              checked={selectedAmenities.includes(amenity)}
                              onCheckedChange={() => handleAmenityToggle(amenity)}
                            />
                            <label
                              htmlFor={amenity}
                              className="text-sm text-gray-700 cursor-pointer select-none"
                            >
                              {amenity}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Upload Photos/Documents */}
                    <div className="space-y-3">
                      <Label className="text-gray-900 flex items-center gap-2">
                        <Upload className="h-4 w-4" />
                        Upload Photos / Documents
                      </Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
                        <input
                          type="file"
                          id="file-upload"
                          multiple
                          onChange={handleFileUpload}
                          className="hidden"
                          accept="image/*,.pdf,.doc,.docx"
                        />
                        <label
                          htmlFor="file-upload"
                          className="cursor-pointer"
                        >
                          <Upload className="h-8 w-8 mx-auto mb-3 text-gray-400" />
                          <p className="text-gray-600 mb-1">
                            Drag and drop files here, or click to browse
                          </p>
                          <p className="text-xs text-gray-500">
                            Supports: JPG, PNG, PDF, DOC (Max 10MB per file)
                          </p>
                        </label>
                      </div>
                      
                      {uploadedFiles.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-sm text-gray-700">Uploaded files:</p>
                          <div className="space-y-1">
                            {uploadedFiles.map((file, index) => (
                              <div
                                key={index}
                                className="text-sm text-gray-600 bg-blue-50 px-3 py-2 rounded-lg flex items-center gap-2"
                              >
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                {file}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white h-14 rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                      Submit Property Listing →
                    </Button>
                  </form>
                ) : (
                  /* Success View */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </motion.div>

                    <h3 className="text-2xl text-gray-900 mb-3">
                      Your property has been listed successfully!
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                      Our team will review and publish it shortly. You'll receive a confirmation email once your listing goes live.
                    </p>

                    <div className="bg-blue-50 rounded-xl p-6 mb-8">
                      <h4 className="text-gray-900 mb-3">What happens next?</h4>
                      <div className="space-y-3 text-left">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs">1</span>
                          </div>
                          <p className="text-sm text-gray-700">
                            Our team reviews your listing (24-48 hours)
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs">2</span>
                          </div>
                          <p className="text-sm text-gray-700">
                            Your property goes live and reaches verified corporate tenants
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs">3</span>
                          </div>
                          <p className="text-sm text-gray-700">
                            Start receiving inquiries and schedule property tours
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={handleClose}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 rounded-xl shadow-lg"
                    >
                      Close
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}