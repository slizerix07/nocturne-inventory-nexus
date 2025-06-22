
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface ProductTableProps {
  selectedStore: string;
}

export const ProductTable = ({ selectedStore }: ProductTableProps) => {
  const [sortField, setSortField] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const products = [
    {
      id: 'PRD-001',
      category: 'Electronics',
      name: 'Wireless Headphones',
      inventory: 45,
      price: 129.99,
      sold: 234,
      forecast: 280,
      stockLevel: 'good'
    },
    {
      id: 'PRD-002',
      category: 'Clothing',
      name: 'Cotton T-Shirt',
      inventory: 12,
      price: 24.99,
      sold: 156,
      forecast: 180,
      stockLevel: 'low'
    },
    {
      id: 'PRD-003',
      category: 'Home & Garden',
      name: 'Coffee Maker',
      inventory: 8,
      price: 89.99,
      sold: 89,
      forecast: 95,
      stockLevel: 'critical'
    },
    {
      id: 'PRD-004',
      category: 'Sports',
      name: 'Yoga Mat',
      inventory: 67,
      price: 34.99,
      sold: 123,
      forecast: 140,
      stockLevel: 'good'
    },
    {
      id: 'PRD-005',
      category: 'Books',
      name: 'Programming Guide',
      inventory: 23,
      price: 45.99,
      sold: 67,
      forecast: 70,
      stockLevel: 'medium'
    }
  ];

  const getStockBadge = (level: string) => {
    switch (level) {
      case 'critical':
        return <Badge className="bg-red-600 hover:bg-red-700">Critical</Badge>;
      case 'low':
        return <Badge className="bg-yellow-600 hover:bg-yellow-700">Low</Badge>;
      case 'medium':
        return <Badge className="bg-blue-600 hover:bg-blue-700">Medium</Badge>;
      case 'good':
        return <Badge className="bg-green-600 hover:bg-green-700">Good</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const SortIcon = ({ field }: { field: string }) => {
    if (sortField !== field) return <ChevronDown className="w-4 h-4 opacity-50" />;
    return sortDirection === 'asc' ? 
      <ChevronUp className="w-4 h-4" /> : 
      <ChevronDown className="w-4 h-4" />;
  };

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Product Inventory</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 text-gray-300">
                  <Button
                    variant="ghost"
                    className="text-gray-300 hover:text-white p-0 h-auto font-medium"
                    onClick={() => handleSort('id')}
                  >
                    Product ID
                    <SortIcon field="id" />
                  </Button>
                </th>
                <th className="text-left py-3 px-4 text-gray-300">
                  <Button
                    variant="ghost"
                    className="text-gray-300 hover:text-white p-0 h-auto font-medium"
                    onClick={() => handleSort('category')}
                  >
                    Category
                    <SortIcon field="category" />
                  </Button>
                </th>
                <th className="text-left py-3 px-4 text-gray-300">Product Name</th>
                <th className="text-left py-3 px-4 text-gray-300">
                  <Button
                    variant="ghost"
                    className="text-gray-300 hover:text-white p-0 h-auto font-medium"
                    onClick={() => handleSort('inventory')}
                  >
                    Inventory
                    <SortIcon field="inventory" />
                  </Button>
                </th>
                <th className="text-left py-3 px-4 text-gray-300">
                  <Button
                    variant="ghost"
                    className="text-gray-300 hover:text-white p-0 h-auto font-medium"
                    onClick={() => handleSort('price')}
                  >
                    Price
                    <SortIcon field="price" />
                  </Button>
                </th>
                <th className="text-left py-3 px-4 text-gray-300">
                  <Button
                    variant="ghost"
                    className="text-gray-300 hover:text-white p-0 h-auto font-medium"
                    onClick={() => handleSort('sold')}
                  >
                    Units Sold
                    <SortIcon field="sold" />
                  </Button>
                </th>
                <th className="text-left py-3 px-4 text-gray-300">Forecast</th>
                <th className="text-left py-3 px-4 text-gray-300">Stock Level</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-gray-700 hover:bg-gray-750 transition-colors">
                  <td className="py-3 px-4 text-blue-400 font-mono">{product.id}</td>
                  <td className="py-3 px-4 text-gray-300">{product.category}</td>
                  <td className="py-3 px-4 text-white font-medium">{product.name}</td>
                  <td className="py-3 px-4 text-gray-300">{product.inventory}</td>
                  <td className="py-3 px-4 text-green-400 font-medium">${product.price}</td>
                  <td className="py-3 px-4 text-gray-300">{product.sold}</td>
                  <td className="py-3 px-4 text-purple-400">{product.forecast}</td>
                  <td className="py-3 px-4">{getStockBadge(product.stockLevel)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};
