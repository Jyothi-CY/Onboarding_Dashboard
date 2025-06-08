import React, { useState, useEffect } from 'react';
import { UserProvider, useUser } from './context/UserContext';
import OnboardingWizard from './components/OnboardingWizard';
import Dashboard from './components/Dashboard';

const AppContent: React.FC = () => {
  const { userData, resetUserData } = useUser();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleOnboardingComplete = () => {
    // The onboarding completion is handled in the context
  };

  const handleLogout = () => {
    resetUserData();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700">Loading your experience...</h2>
        </div>
      </div>
    );
  }

  if (!userData?.onboardingCompleted) {
    return <OnboardingWizard onComplete={handleOnboardingComplete} />;
  }

  return <Dashboard onLogout={handleLogout} />;
};

function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;