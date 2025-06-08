import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { PersonalInfo, BusinessInfo, Preferences } from '../types';
import ProgressBar from './ProgressBar';
import PersonalInfoStep from './onboarding/PersonalInfoStep';
import BusinessInfoStep from './onboarding/BusinessInfoStep';
import PreferencesStep from './onboarding/PreferencesStep';

interface OnboardingWizardProps {
  onComplete: () => void;
}

const OnboardingWizard: React.FC<OnboardingWizardProps> = ({ onComplete }) => {
  const { userData, updateUserData, completeOnboarding } = useUser();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    personalInfo: Partial<PersonalInfo>;
    businessInfo: Partial<BusinessInfo>;
  }>({
    personalInfo: {},
    businessInfo: {},
  });

  const [formData, setFormData] = useState({
    personalInfo: userData?.personalInfo || { name: '', email: '' },
    businessInfo: userData?.businessInfo || { companyName: '', industry: '', companySize: '' },
    preferences: userData?.preferences || { theme: 'light' as const, dashboardLayout: 'cards' as const },
  });

  const totalSteps = 3;

  const validatePersonalInfo = (): boolean => {
    const newErrors: Partial<PersonalInfo> = {};
    
    if (!formData.personalInfo.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.personalInfo.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.personalInfo.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(prev => ({ ...prev, personalInfo: newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const validateBusinessInfo = (): boolean => {
    const newErrors: Partial<BusinessInfo> = {};
    
    if (!formData.businessInfo.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }
    
    if (!formData.businessInfo.industry) {
      newErrors.industry = 'Please select an industry';
    }
    
    if (!formData.businessInfo.companySize) {
      newErrors.companySize = 'Please select company size';
    }

    setErrors(prev => ({ ...prev, businessInfo: newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1 && !validatePersonalInfo()) {
      return;
    }
    
    if (currentStep === 2 && !validateBusinessInfo()) {
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateBusinessInfo()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    updateUserData(formData);
    completeOnboarding();
    setIsSubmitting(false);
    onComplete();
  };

  const updatePersonalInfo = (data: PersonalInfo) => {
    setFormData(prev => ({ ...prev, personalInfo: data }));
    setErrors(prev => ({ ...prev, personalInfo: {} }));
  };

  const updateBusinessInfo = (data: BusinessInfo) => {
    setFormData(prev => ({ ...prev, businessInfo: data }));
    setErrors(prev => ({ ...prev, businessInfo: {} }));
  };

  const updatePreferences = (data: Preferences) => {
    setFormData(prev => ({ ...prev, preferences: data }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfoStep
            data={formData.personalInfo}
            onChange={updatePersonalInfo}
            errors={errors.personalInfo}
          />
        );
      case 2:
        return (
          <BusinessInfoStep
            data={formData.businessInfo}
            onChange={updateBusinessInfo}
            errors={errors.businessInfo}
          />
        );
      case 3:
        return (
          <PreferencesStep
            data={formData.preferences}
            onChange={updatePreferences}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        
        <div className="min-h-[400px]">
          {renderStep()}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className="flex items-center px-6 py-3 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back
          </button>

          {currentStep < totalSteps ? (
            <button
              onClick={handleNext}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Next
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 disabled:opacity-70 transition-all transform hover:scale-105"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Completing...
                </>
              ) : (
                <>
                  <Check className="w-5 h-5 mr-2" />
                  Complete Setup
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingWizard;