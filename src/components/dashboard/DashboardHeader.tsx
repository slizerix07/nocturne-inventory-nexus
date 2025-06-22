
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronDown } from 'lucide-react';

interface DashboardHeaderProps {
  selectedStore: string;
  setSelectedStore: (store: string) => void;
  timeRange: string;
  setTimeRange: (range: string) => void;
}

export const DashboardHeader = ({ 
  selectedStore, 
  setSelectedStore, 
  timeRange, 
  setTimeRange 
}: DashboardHeaderProps) => {
  const stores = [
    { id: 'store-001', name: 'Downtown Store' },
    { id: 'store-002', name: 'Mall Location' },
    { id: 'store-003', name: 'Airport Branch' },
    { id: 'store-004', name: 'Suburban Store' }
  ];

  const timeRanges = ['Weekly', 'Monthly', 'Custom Range'];

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Inventory Management Dashboard
        </h1>
        <p className="text-gray-400">
          Real-time analytics and stock monitoring
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Select value={selectedStore} onValueChange={setSelectedStore}>
          <SelectTrigger className="w-48 bg-gray-800 border-gray-700 text-white">
            <SelectValue placeholder="Select Store" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-700">
            {stores.map((store) => (
              <SelectItem 
                key={store.id} 
                value={store.id}
                className="text-white hover:bg-gray-700"
              >
                {store.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex bg-gray-800 rounded-lg border border-gray-700">
          {timeRanges.map((range) => (
            <Button
              key={range}
              variant={timeRange === range ? "default" : "ghost"}
              size="sm"
              onClick={() => setTimeRange(range)}
              className={`rounded-none first:rounded-l-lg last:rounded-r-lg ${
                timeRange === range 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              {range === 'Custom Range' && <Calendar className="w-4 h-4 mr-2" />}
              {range}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
