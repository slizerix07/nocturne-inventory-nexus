
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface InventoryChartProps {
  timeRange: string;
}

export const InventoryChart = ({ timeRange }: InventoryChartProps) => {
  const [chartType, setChartType] = useState<'line' | 'bar'>('line');

  const data = [
    { name: 'Jan', inventory: 4000, sold: 2400, ordered: 2800, forecast: 2600 },
    { name: 'Feb', inventory: 3000, sold: 1398, ordered: 2200, forecast: 1500 },
    { name: 'Mar', inventory: 2000, sold: 9800, ordered: 3200, forecast: 9500 },
    { name: 'Apr', inventory: 2780, sold: 3908, ordered: 4100, forecast: 4000 },
    { name: 'May', inventory: 1890, sold: 4800, ordered: 5000, forecast: 4900 },
    { name: 'Jun', inventory: 2390, sold: 3800, ordered: 4200, forecast: 3900 },
    { name: 'Jul', inventory: 3490, sold: 4300, ordered: 4500, forecast: 4200 },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 p-4 border border-gray-600 rounded-lg shadow-lg">
          <p className="text-white font-medium">{`${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {`${entry.dataKey}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white">Inventory Analytics</CardTitle>
        <div className="flex gap-2">
          <Button
            variant={chartType === 'line' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setChartType('line')}
            className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
          >
            Line Chart
          </Button>
          <Button
            variant={chartType === 'bar' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setChartType('bar')}
            className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
          >
            Bar Chart
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === 'line' ? (
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="inventory" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  name="Inventory Level"
                />
                <Line 
                  type="monotone" 
                  dataKey="sold" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  name="Units Sold"
                />
                <Line 
                  type="monotone" 
                  dataKey="ordered" 
                  stroke="#F59E0B" 
                  strokeWidth={2}
                  name="Units Ordered"
                />
                <Line 
                  type="monotone" 
                  dataKey="forecast" 
                  stroke="#8B5CF6" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Forecast"
                />
              </LineChart>
            ) : (
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="sold" fill="#10B981" name="Units Sold" />
                <Bar dataKey="ordered" fill="#F59E0B" name="Units Ordered" />
                <Bar dataKey="forecast" fill="#8B5CF6" name="Forecast" />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
