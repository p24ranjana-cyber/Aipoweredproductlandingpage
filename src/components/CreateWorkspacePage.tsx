import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ArrowLeft, Upload, ArrowRight, Info } from 'lucide-react';
import { useState } from 'react';

interface CreateWorkspacePageProps {
  onBack: () => void;
}

export function CreateWorkspacePage({ onBack }: CreateWorkspacePageProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phoneNumber: '',
    companyName: '',
    companySize: '',
    officeRequirement: '',
    userRole: ''
  });

  const [fileName, setFileName] = useState<string>('');
  const [isDragging, setIsDragging] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRoleSelect = (role: string) => {
    setFormData(prev => ({ ...prev, userRole: role }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type === 'application/pdf') {
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-gray-900 mb-4">
              Create Your PropEdge Workspace
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Activate your AI workspace in 45 seconds. Unlock full-market visibility, instant shortlists, and real-time compliance scoring.
            </p>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <Label htmlFor="fullName" className="text-gray-700 mb-2 block">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full h-11 px-4 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Work Email */}
              <div>
                <Label htmlFor="workEmail" className="text-gray-700 mb-2 block">
                  Work Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="workEmail"
                  type="email"
                  required
                  value={formData.workEmail}
                  onChange={(e) => handleInputChange('workEmail', e.target.value)}
                  className="w-full h-11 px-4 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="your.name@company.com"
                />
              </div>

              {/* Phone Number */}
              <div>
                <Label htmlFor="phoneNumber" className="text-gray-700 mb-2 block">
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  className="w-full h-11 px-4 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Company Name */}
              <div>
                <Label htmlFor="companyName" className="text-gray-700 mb-2 block">
                  Company Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="companyName"
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="w-full h-11 px-4 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your company name"
                />
              </div>

              {/* Company Size */}
              <div>
                <Label htmlFor="companySize" className="text-gray-700 mb-2 block">
                  Company Size <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.companySize}
                  onValueChange={(value) => handleInputChange('companySize', value)}
                  required
                >
                  <SelectTrigger className="w-full h-11 rounded-lg border-gray-300">
                    <SelectValue placeholder="Select company size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 employees</SelectItem>
                    <SelectItem value="11-50">11-50 employees</SelectItem>
                    <SelectItem value="51-200">51-200 employees</SelectItem>
                    <SelectItem value="201-500">201-500 employees</SelectItem>
                    <SelectItem value="501-1000">501-1,000 employees</SelectItem>
                    <SelectItem value="1000+">1,000+ employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Office Requirement */}
              <div>
                <Label htmlFor="officeRequirement" className="text-gray-700 mb-2 block">
                  Office Requirement <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.officeRequirement}
                  onValueChange={(value) => handleInputChange('officeRequirement', value)}
                  required
                >
                  <SelectTrigger className="w-full h-11 rounded-lg border-gray-300">
                    <SelectValue placeholder="Select your requirement" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="500-1000">500-1,000 sq ft</SelectItem>
                    <SelectItem value="1000-2500">1,000-2,500 sq ft</SelectItem>
                    <SelectItem value="2500-5000">2,500-5,000 sq ft</SelectItem>
                    <SelectItem value="5000-10000">5,000-10,000 sq ft</SelectItem>
                    <SelectItem value="10000+">10,000+ sq ft</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Upload Requirements */}
              <div>
                <Label htmlFor="uploadRequirements" className="text-gray-700 mb-2 block">
                  Upload Requirements (PDF/brief)
                </Label>
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    isDragging
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <input
                    id="uploadRequirements"
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="uploadRequirements"
                    className="cursor-pointer flex flex-col items-center"
                  >
                    <Upload className="w-10 h-10 text-gray-400 mb-3" />
                    {fileName ? (
                      <p className="text-gray-700">{fileName}</p>
                    ) : (
                      <>
                        <p className="text-gray-700 mb-1">
                          Drop your PDF here or{' '}
                          <span className="text-blue-600">browse</span>
                        </p>
                        <p className="text-gray-500">
                          PDF files only, up to 10MB
                        </p>
                      </>
                    )}
                  </label>
                </div>
              </div>

              {/* User Role */}
              <div>
                <Label className="text-gray-700 mb-3 block">
                  User Role
                </Label>
                <div className="flex flex-wrap gap-3">
                  {['Operations', 'Finance', 'People Ops'].map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => handleRoleSelect(role)}
                      className={`px-6 py-2.5 rounded-full transition-all ${
                        formData.userRole === role
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              {/* Activation Fee Box */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8"
              >
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-gray-900 mb-1">
                      Activation Fee — ₹20,999
                    </div>
                    <p className="text-gray-600">
                      Refunded when you close a lease. Gives full access to AI scoring & shortlist tools.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <Button
                type="submit"
                className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all mt-8"
              >
                <span className="flex items-center justify-center gap-2">
                  Activate My Workspace
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
            </form>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8 text-gray-500"
          >
            <p>
              Trusted by 500+ businesses across India 🔒 Enterprise-grade security
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
