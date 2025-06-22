
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bell, AlertTriangle, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export const NotificationPanel = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'reorder',
      title: 'Reorder Approval Needed',
      message: 'Coffee Maker stock is running low (8 units left)',
      timestamp: '2 minutes ago',
      priority: 'high',
      read: false
    },
    {
      id: 2,
      type: 'alert',
      title: 'Low Stock Alert',
      message: 'Cotton T-Shirt inventory below threshold',
      timestamp: '15 minutes ago',
      priority: 'medium',
      read: false
    },
    {
      id: 3,
      type: 'promotion',
      title: 'Promotion Impact',
      message: 'Wireless Headphones sales increased 40% due to promotion',
      timestamp: '1 hour ago',
      priority: 'low',
      read: true
    },
    {
      id: 4,
      type: 'reorder',
      title: 'Reorder Approved',
      message: 'Yoga Mat restocking approved - 100 units incoming',
      timestamp: '2 hours ago',
      priority: 'low',
      read: true
    },
    {
      id: 5,
      type: 'alert',
      title: 'Forecast Deviation',
      message: 'Programming Guide sales 15% below forecast',
      timestamp: '3 hours ago',
      priority: 'medium',
      read: false
    }
  ]);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'reorder':
        return <CheckCircle className="w-5 h-5 text-blue-400" />;
      case 'alert':
        return <AlertTriangle className="w-5 h-5 text-red-400" />;
      case 'promotion':
        return <Bell className="w-5 h-5 text-green-400" />;
      default:
        return <Bell className="w-5 h-5 text-gray-400" />;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge className="bg-red-600 hover:bg-red-700 text-xs">High</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-600 hover:bg-yellow-700 text-xs">Medium</Badge>;
      case 'low':
        return <Badge className="bg-green-600 hover:bg-green-700 text-xs">Low</Badge>;
      default:
        return <Badge variant="secondary" className="text-xs">Normal</Badge>;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <Card className="bg-gray-800 border-gray-700 h-fit">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-white flex items-center gap-2">
          <Bell className="w-5 h-5" />
          Notifications
          {unreadCount > 0 && (
            <Badge className="bg-red-600 hover:bg-red-700 text-xs">
              {unreadCount}
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg border transition-colors ${
              notification.read 
                ? 'border-gray-700 bg-gray-800' 
                : 'border-blue-600 bg-gray-750'
            }`}
          >
            <div className="flex items-start gap-3">
              {getIcon(notification.type)}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className={`text-sm font-medium ${
                    notification.read ? 'text-gray-300' : 'text-white'
                  }`}>
                    {notification.title}
                  </h4>
                  {getPriorityBadge(notification.priority)}
                </div>
                <p className={`text-sm ${
                  notification.read ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  {notification.message}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-500">
                    {notification.timestamp}
                  </span>
                  {!notification.read && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => markAsRead(notification.id)}
                      className="text-blue-400 hover:text-blue-300 h-auto p-1 text-xs"
                    >
                      Mark as read
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <Button 
          variant="outline" 
          className="w-full bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white"
        >
          View All Notifications
        </Button>
      </CardContent>
    </Card>
  );
};
