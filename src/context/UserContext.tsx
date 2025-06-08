import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserData } from '../types';

interface UserContextType {
  userData: UserData | null;
  updateUserData: (data: Partial<UserData>) => void;
  completeOnboarding: () => void;
  resetUserData: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const initialUserData: UserData = {
  personalInfo: { name: '', email: '' },
  businessInfo: { companyName: '', industry: '', companySize: '' },
  preferences: { theme: 'light', dashboardLayout: 'cards' },
  onboardingCompleted: false,
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      setUserData(JSON.parse(savedData));
    } else {
      setUserData(initialUserData);
    }
  }, []);

  const updateUserData = (data: Partial<UserData>) => {
    setUserData(prev => {
      if (!prev) return initialUserData;
      const newData = { ...prev, ...data };
      localStorage.setItem('userData', JSON.stringify(newData));
      return newData;
    });
  };

  const completeOnboarding = () => {
    updateUserData({ onboardingCompleted: true });
  };

  const resetUserData = () => {
    localStorage.removeItem('userData');
    setUserData(initialUserData);
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData, completeOnboarding, resetUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};