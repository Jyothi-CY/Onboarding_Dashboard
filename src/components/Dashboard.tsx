import React, { useState, useEffect } from 'react';
import { Users, FolderOpen, Bell, LogOut, User, Building } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { DashboardStats } from '../types';
import DashboardCard from './DashboardCard';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const { userData } = useUser();
  const [stats, setStats] = useState<DashboardStats>({
    teamMembers: 0,
    activeProjects: 0,
    notifications: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch dashboard stats
    const fetchStats = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStats({
        teamMembers: Math.floor(Math.random() * 50) + 10,
        activeProjects: Math.floor(Math.random() * 20) + 5,
        notifications: Math.floor(Math.random() * 15) + 2,
      });
      setIsLoading(false);
    };

    fetchStats();
  }, []);

  if (!userData) {
    return null;
  }

  const { personalInfo, businessInfo, preferences } = userData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome back, {personalInfo.name}!
              </h1>
              <p className="text-gray-600 mt-1">
                Here's what's happening with your projects today.
              </p>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* User Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-indigo-50 rounded-lg">
                <User className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Personal Information</h3>
                <p className="text-gray-600">{personalInfo.name}</p>
                <p className="text-gray-600">{personalInfo.email}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-50 rounded-lg">
                <Building className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Company Information</h3>
                <p className="text-gray-600">{businessInfo.companyName}</p>
                <p className="text-gray-600">{businessInfo.industry} • {businessInfo.companySize}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Stats */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Dashboard Overview</h2>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-lg animate-pulse">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    <div className="h-8 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <DashboardCard
                title="Team Members"
                value={stats.teamMembers}
                icon={Users}
                color="blue"
                trend={{ value: 12, isPositive: true }}
              />
              <DashboardCard
                title="Active Projects"
                value={stats.activeProjects}
                icon={FolderOpen}
                color="green"
                trend={{ value: 5, isPositive: true }}
              />
              <DashboardCard
                title="Notifications"
                value={stats.notifications}
                icon={Bell}
                color="orange"
                trend={{ value: 8, isPositive: false }}
              />
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'New Project', color: 'bg-blue-500 hover:bg-blue-600' },
              { name: 'Add Team Member', color: 'bg-green-500 hover:bg-green-600' },
              { name: 'View Reports', color: 'bg-purple-500 hover:bg-purple-600' },
              { name: 'Settings', color: 'bg-orange-500 hover:bg-orange-600' },
            ].map((action) => (
              <button
                key={action.name}
                className={`${action.color} text-white px-4 py-3 rounded-lg transition-colors transform hover:scale-105 font-medium`}
              >
                {action.name}
              </button>
            ))}
          </div>
        </div>

        {/* Welcome Message */}
        <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
          <h3 className="text-xl font-semibold mb-2">Welcome to your dashboard!</h3>
          <p className="text-indigo-100">
            You've successfully completed the onboarding process. Your preferences have been saved 
            (Theme: {preferences.theme}, Layout: {preferences.dashboardLayout}). 
            Get started by exploring your projects and team collaboration tools.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;