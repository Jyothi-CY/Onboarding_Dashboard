import React from 'react';
import { Settings, Palette, Layout } from 'lucide-react';
import { Preferences } from '../../types';

interface PreferencesStepProps {
  data: Preferences;
  onChange: (data: Preferences) => void;
}

const PreferencesStep: React.FC<PreferencesStepProps> = ({ data, onChange }) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="mx-auto w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
          <Settings className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Preferences</h2>
        <p className="text-gray-600">Customize your experience</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            <Palette className="inline w-5 h-5 mr-2" />
            Theme Preference
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div
              onClick={() => onChange({ ...data, theme: 'light' })}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                data.theme === 'light' 
                  ? 'border-indigo-500 bg-indigo-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="w-full h-20 bg-white rounded border mb-3 shadow-sm"></div>
              <p className="font-medium text-center">Light Theme</p>
            </div>
            <div
              onClick={() => onChange({ ...data, theme: 'dark' })}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                data.theme === 'dark' 
                  ? 'border-indigo-500 bg-indigo-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="w-full h-20 bg-gray-800 rounded border mb-3"></div>
              <p className="font-medium text-center">Dark Theme</p>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            <Layout className="inline w-5 h-5 mr-2" />
            Dashboard Layout
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div
              onClick={() => onChange({ ...data, dashboardLayout: 'cards' })}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                data.dashboardLayout === 'cards' 
                  ? 'border-indigo-500 bg-indigo-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="space-y-2 mb-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-6 bg-gray-200 rounded"></div>
                  <div className="h-6 bg-gray-200 rounded"></div>
                </div>
                <div className="h-6 bg-gray-200 rounded"></div>
              </div>
              <p className="font-medium text-center">Card Layout</p>
            </div>
            <div
              onClick={() => onChange({ ...data, dashboardLayout: 'compact' })}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                data.dashboardLayout === 'compact' 
                  ? 'border-indigo-500 bg-indigo-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="space-y-1 mb-3">
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded"></div>
              </div>
              <p className="font-medium text-center">Compact Layout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferencesStep;