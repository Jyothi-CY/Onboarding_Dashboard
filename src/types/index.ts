export interface PersonalInfo {
  name: string;
  email: string;
}

export interface BusinessInfo {
  companyName: string;
  industry: string;
  companySize: string;
}

export interface Preferences {
  theme: 'light' | 'dark';
  dashboardLayout: 'cards' | 'compact';
}

export interface UserData {
  personalInfo: PersonalInfo;
  businessInfo: BusinessInfo;
  preferences: Preferences;
  onboardingCompleted: boolean;
}

export interface DashboardStats {
  teamMembers: number;
  activeProjects: number;
  notifications: number;
}