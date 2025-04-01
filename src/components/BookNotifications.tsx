
import React, { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { BookOpen, Brain, Award } from "lucide-react";

interface BookNotification {
  id: number;
  message: string;
  icon: "book" | "brain" | "award";
  timestamp: Date;
}

const BookNotifications = () => {
  const { toast } = useToast();
  const [notifications, setNotifications] = useState<BookNotification[]>([]);

  useEffect(() => {
    // Simulated notifications that would normally come from a backend
    const sampleNotifications = [
      { id: 1, message: "New chapter unlocked: The Forgotten Memory", icon: "book" },
      { id: 2, message: "You've earned 50 Memory Points for your recall abilities", icon: "award" },
      { id: 3, message: "Memory retention improved by 15% this week", icon: "brain" }
    ];
    
    setTimeout(() => {
      setNotifications(sampleNotifications.map(n => ({
        ...n,
        timestamp: new Date()
      })));
    }, 3000);
  }, []);
  
  // Show a toast when new notifications arrive
  useEffect(() => {
    if (notifications.length > 0) {
      toast({
        title: "New Book Updates",
        description: `You have ${notifications.length} new notifications`,
      });
    }
  }, [notifications, toast]);
  
  const getIcon = (type: string) => {
    switch(type) {
      case "book": return <BookOpen className="h-5 w-5 text-silence-cyan" />;
      case "brain": return <Brain className="h-5 w-5 text-silence-purple" />;
      case "award": return <Award className="h-5 w-5 text-silence-pink" />;
      default: return <BookOpen className="h-5 w-5 text-silence-cyan" />;
    }
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (notifications.length === 0) return null;

  return (
    <div className="glass-card rounded-lg p-4 mt-6 border border-white/10">
      <h3 className="text-lg font-semibold mb-3 flex items-center">
        <BookOpen className="mr-2 h-4 w-4 text-silence-purple" />
        Book Notifications
      </h3>
      
      <div className="space-y-3 max-h-64 overflow-auto">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-start bg-silence-dark/40 rounded p-3 hover:bg-silence-dark/60 transition-colors">
            <div className="mr-3 mt-1">
              {getIcon(notification.icon)}
            </div>
            <div className="flex-1">
              <p className="text-sm">{notification.message}</p>
              <p className="text-xs text-white/50 mt-1">{formatTime(notification.timestamp)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookNotifications;
