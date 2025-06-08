import React from 'react';
import { Building, Briefcase, Users } from 'lucide-react';
import { BusinessInfo } from '../../types';

interface BusinessInfoStepProps {
  data: BusinessInfo;
  onChange: (data: BusinessInfo) => void;
  errors: Partial<BusinessInfo>;
}

const industries = [
  'Technology', 'Healthcare', 'Finance', 'Education', 'Retail', 
  'Manufacturing', 'Consulting', 'Real Estate', 'Media', 'Other'
];

const companySizes = [
  '1-100 employees', '100-500 employees', '500-1000 employees', 
  '1000 - 2000 employees', '2000+ employees'
];

const BusinessInfoStep: React.FC<BusinessInfoStepProps> = ({ data, onChange, errors }) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="mx-auto w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
          <Building className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Business Information</h2>
        <p className="text-gray-600">Tell us about your company</p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
            Company Name *
          </label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              id="companyName"
              value={data.companyName}
              onChange={(e) => onChange({ ...data, companyName: e.target.value })}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                errors.companyName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your company name"
            />
          </div>
          {errors.companyName && <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>}
        </div>

        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
            Industry *
          </label>
          <div className="relative">
            <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              id="industry"
              value={data.industry}
              onChange={(e) => onChange({ ...data, industry: e.target.value })}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors appearance-none ${
                errors.industry ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select your industry</option>
              {industries.map((industry) => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
          </div>
          {errors.industry && <p className="mt-1 text-sm text-red-600">{errors.industry}</p>}
        </div>

        <div>
          <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-2">
            Company Size *
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              id="companySize"
              value={data.companySize}
              onChange={(e) => onChange({ ...data, companySize: e.target.value })}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors appearance-none ${
                errors.companySize ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select company size</option>
              {companySizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
          {errors.companySize && <p className="mt-1 text-sm text-red-600">{errors.companySize}</p>}
        </div>
      </div>
    </div>
  );
};

export default BusinessInfoStep;