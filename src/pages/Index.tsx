
import { useState } from 'react';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { KPICards } from '@/components/dashboard/KPICards';
import { InventoryChart } from '@/components/dashboard/InventoryChart';
import { ProductTable } from '@/components/dashboard/ProductTable';
import { NotificationPanel } from '@/components/dashboard/NotificationPanel';

const Index = () => {
  const [selectedStore, setSelectedStore] = useState('store-001');
  const [timeRange, setTimeRange] = useState('Monthly');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-8">
        <DashboardHeader 
          selectedStore={selectedStore}
          setSelectedStore={setSelectedStore}
          timeRange={timeRange}
          setTimeRange={setTimeRange}
        />
        
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 mb-8">
          <div className="xl:col-span-3 space-y-6">
            <KPICards timeRange={timeRange} />
            <InventoryChart timeRange={timeRange} />
            <ProductTable selectedStore={selectedStore} />
          </div>
          <div className="xl:col-span-1">
            <NotificationPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
