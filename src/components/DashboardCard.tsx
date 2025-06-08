import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  color: 'blue' | 'green' | 'purple' | 'orange';
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const colorClasses = {
  blue: {
    bg: 'from-blue-500 to-blue-600',
    text: 'text-blue-600',
    bgLight: 'bg-blue-50',
  },
  green: {
    bg: 'from-green-500 to-green-600',
    text: 'text-green-600',
    bgLight: 'bg-green-50',
  },
  purple: {
    bg: 'from-purple-500 to-purple-600',
    text: 'text-purple-600',
    bgLight: 'bg-purple-50',
  },
  orange: {
    bg: 'from-orange-500 to-orange-600',
    text: 'text-orange-600',
    bgLight: 'bg-orange-50',
  },
};

const DashboardCard: React.FC<DashboardCardProps> = ({ 
  title, 
  value, 
  icon: Icon, 
  color, 
  trend 
}) => {
  const colors = colorClasses[color];

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${colors.bgLight}`}>
          <Icon className={`w-6 h-6 ${colors.text}`} />
        </div>
        {trend && (
          <div className={`text-sm font-medium ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;