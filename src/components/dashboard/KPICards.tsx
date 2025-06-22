
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface KPICardsProps {
  timeRange: string;
}

export const KPICards = ({ timeRange }: KPICardsProps) => {
  const kpis = [
    {
      title: 'Units Sold',
      value: '12,847',
      change: '+12.5%',
      isPositive: true,
      icon: '📦'
    },
    {
      title: 'Units Left',
      value: '8,234',
      change: '-5.2%',
      isPositive: false,
      icon: '📊'
    },
    {
      title: 'Forecast Accuracy',
      value: '94.2%',
      change: '+2.1%',
      isPositive: true,
      icon: '🎯'
    },
    {
      title: 'Revenue',
      value: '$284,950',
      change: '+18.7%',
      isPositive: true,
      icon: '💰'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpis.map((kpi, index) => (
        <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">
              {kpi.title}
            </CardTitle>
            <span className="text-2xl">{kpi.icon}</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white mb-1">
              {kpi.value}
            </div>
            <div className={`flex items-center text-sm ${
              kpi.isPositive ? 'text-green-400' : 'text-red-400'
            }`}>
              {kpi.isPositive ? (
                <ArrowUp className="w-4 h-4 mr-1" />
              ) : (
                <ArrowDown className="w-4 h-4 mr-1" />
              )}
              {kpi.change} from last {timeRange.toLowerCase()}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
