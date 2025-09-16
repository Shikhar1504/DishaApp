import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bell, 
  Calendar, 
  Clock, 
  AlertTriangle, 
  Gift, 
  ExternalLink, 
  X,
  Settings
} from "lucide-react";
import { toast } from "sonner";

interface Notification {
  id: string;
  type: "deadline" | "scholarship" | "exam" | "alert";
  title: string;
  description: string;
  date: Date;
  priority: "high" | "medium" | "low";
  category: string;
  actionUrl?: string;
  isRead: boolean;
}

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [filter, setFilter] = useState<"all" | "unread" | "deadlines" | "scholarships">("all");

  // Mock notifications data - in real app, this would come from API
  useEffect(() => {
    const mockNotifications: Notification[] = [
      {
        id: "1",
        type: "deadline",
        title: "JEE Main Application Deadline",
        description: "Last date to submit JEE Main application is approaching. Don't miss out!",
        date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
        priority: "high",
        category: "Engineering Entrance",
        actionUrl: "https://jeemain.nta.nic.in/",
        isRead: false
      },
      {
        id: "2", 
        type: "scholarship",
        title: "National Merit Scholarship Available",
        description: "New scholarship opportunity for science students. Apply before the deadline.",
        date: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days from now
        priority: "medium",
        category: "Financial Aid",
        actionUrl: "https://scholarships.gov.in/",
        isRead: false
      },
      {
        id: "3",
        type: "exam",
        title: "NEET UG Registration Started",
        description: "NEET UG 2024 registration has begun. Register now to secure your spot.",
        date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
        priority: "high",
        category: "Medical Entrance",
        actionUrl: "https://neet.nta.nic.in/",
        isRead: true
      },
      {
        id: "4",
        type: "alert",
        title: "New Career Guidance Webinar",
        description: "Join our expert-led session on 'Choosing the Right Stream After 10th'",
        date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
        priority: "low",
        category: "Learning Opportunity",
        isRead: false
      },
      {
        id: "5",
        type: "deadline",
        title: "CUET Application Window Closing",
        description: "Only 3 days left to apply for Common University Entrance Test.",
        date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
        priority: "high",
        category: "University Entrance",
        actionUrl: "https://cuet.samarth.ac.in/",
        isRead: false
      }
    ];

    setNotifications(mockNotifications);
  }, []);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const filteredNotifications = notifications.filter(notification => {
    switch (filter) {
      case "unread":
        return !notification.isRead;
      case "deadlines":
        return notification.type === "deadline";
      case "scholarships":
        return notification.type === "scholarship";
      default:
        return true;
    }
  });

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, isRead: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(n => ({ ...n, isRead: true }))
    );
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
    toast.success("Notification removed");
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "deadline":
        return <AlertTriangle className="h-5 w-5 text-destructive" />;
      case "scholarship":
        return <Gift className="h-5 w-5 text-secondary" />;
      case "exam":
        return <Calendar className="h-5 w-5 text-primary" />;
      default:
        return <Bell className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive";
      case "medium":
        return "default";
      case "low":
        return "secondary";
      default:
        return "outline";
    }
  };

  const getDaysRemaining = (date: Date) => {
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="relative">
      {/* Notification Bell Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setShowNotifications(!showNotifications)}
        className="relative h-9 w-9 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground"
      >
        <Bell className="h-4 w-4" />
        {unreadCount > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
          >
            {unreadCount}
          </Badge>
        )}
        <span className="sr-only">View notifications</span>
      </Button>

      {/* Notifications Dropdown */}
      {showNotifications && (
        <div className="absolute right-0 top-12 w-96 max-h-96 overflow-hidden bg-background border border-border rounded-lg shadow-card z-50 animate-scale-in">
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Notifications</h3>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                  Mark all read
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setShowNotifications(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex gap-2">
              {[
                { key: "all", label: "All" },
                { key: "unread", label: "Unread" },
                { key: "deadlines", label: "Deadlines" },
                { key: "scholarships", label: "Scholarships" }
              ].map(tab => (
                <Button
                  key={tab.key}
                  variant={filter === tab.key ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setFilter(tab.key as any)}
                  className="text-xs"
                >
                  {tab.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Notifications List */}
          <div className="max-h-64 overflow-y-auto">
            {filteredNotifications.length === 0 ? (
              <div className="p-4 text-center text-muted-foreground">
                <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>No notifications found</p>
              </div>
            ) : (
              filteredNotifications.map(notification => {
                const daysRemaining = getDaysRemaining(notification.date);
                return (
                  <div
                    key={notification.id}
                    className={`p-4 border-b border-border hover:bg-muted/50 transition-colors ${
                      !notification.isRead ? "bg-primary/5" : ""
                    }`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        {getNotificationIcon(notification.type)}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className={`text-sm font-medium ${!notification.isRead ? "text-foreground" : "text-muted-foreground"}`}>
                            {notification.title}
                          </p>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 opacity-0 group-hover:opacity-100"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeNotification(notification.id);
                            }}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                          {notification.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge variant={getPriorityColor(notification.priority) as any} className="text-xs">
                              {notification.category}
                            </Badge>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              <span>
                                {daysRemaining > 0 ? `${daysRemaining} days left` : "Expired"}
                              </span>
                            </div>
                          </div>
                          
                          {notification.actionUrl && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 text-xs"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(notification.actionUrl, "_blank");
                              }}
                            >
                              <ExternalLink className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <Button variant="ghost" size="sm" className="w-full text-xs">
              <Settings className="h-3 w-3 mr-2" />
              Notification Settings
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationSystem;