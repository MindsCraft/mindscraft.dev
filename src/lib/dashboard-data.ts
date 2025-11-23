// Dashboard Analytics Data Service - Mock data for development
// Future: Replace with real Google Analytics API or database queries

export type TimeRange = 'today' | 'week' | 'month' | 'year';

export interface TrafficDataPoint {
  date: string;
  visitors: number;
  pageViews: number;
}

export interface StatMetric {
  name: string;
  value: string | number;
  change: string;
  changeType: 'positive' | 'negative';
  icon: string;
}

export interface ContentPerformanceItem {
  title: string;
  views: number;
  type: 'post' | 'project';
  url: string;
}

export interface VisitorSource {
  source: string;
  percentage: number;
  visitors: number;
}

export interface DeviceBreakdown {
  device: string;
  percentage: number;
  color: string;
}

// Generate mock traffic data based on time range
export function getTrafficData(timeRange: TimeRange): TrafficDataPoint[] {
  const today = new Date();
  const data: TrafficDataPoint[] = [];
  
  let days: number;
  let format: (date: Date) => string;
  
  switch (timeRange) {
    case 'today':
      days = 24; // Hours
      format = (date) => `${date.getHours()}:00`;
      for (let i = days - 1; i >= 0; i--) {
        const date = new Date(today);
        date.setHours(today.getHours() - i);
        data.push({
          date: format(date),
          visitors: Math.floor(Math.random() * 50) + 20,
          pageViews: Math.floor(Math.random() * 100) + 40,
        });
      }
      break;
      
    case 'week':
      days = 7;
      format = (date) => date.toLocaleDateString('en-US', { weekday: 'short' });
      for (let i = days - 1; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        data.push({
          date: format(date),
          visitors: Math.floor(Math.random() * 200) + 100,
          pageViews: Math.floor(Math.random() * 400) + 200,
        });
      }
      break;
      
    case 'month':
      days = 30;
      format = (date) => date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      for (let i = days - 1; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        data.push({
          date: format(date),
          visitors: Math.floor(Math.random() * 300) + 150,
          pageViews: Math.floor(Math.random() * 600) + 300,
        });
      }
      break;
      
    case 'year':
      days = 12; // Months
      format = (date) => date.toLocaleDateString('en-US', { month: 'short' });
      for (let i = days - 1; i >= 0; i--) {
        const date = new Date(today);
        date.setMonth(today.getMonth() - i);
        data.push({
          date: format(date),
          visitors: Math.floor(Math.random() * 5000) + 2000,
          pageViews: Math.floor(Math.random() * 10000) + 4000,
        });
      }
      break;
  }
  
  return data;
}

// Get dashboard stat metrics
export function getStatMetrics(): StatMetric[] {
  return [
    {
      name: 'Total Posts',
      value: 24,
      change: '+12%',
      changeType: 'positive',
      icon: 'FileText',
    },
    {
      name: 'Active Projects',
      value: 8,
      change: '+2',
      changeType: 'positive',
      icon: 'Briefcase',
    },
    {
      name: 'Team Members',
      value: 5,
      change: '+1',
      changeType: 'positive',
      icon: 'Users',
    },
    {
      name: 'Avg. Response Time',
      value: '2.4h',
      change: '-15%',
      changeType: 'negative',
      icon: 'Clock',
    },
  ];
}

// Get top performing content
export function getContentPerformance(): ContentPerformanceItem[] {
  return [
    {
      title: 'AI-Powered Development: The Future is Now',
      views: 1243,
      type: 'post',
      url: '/blog/ai-powered-development',
    },
    {
      title: 'E-commerce Platform Redesign',
      views: 987,
      type: 'project',
      url: '/work/ecommerce-platform',
    },
    {
      title: 'Building Scalable React Applications',
      views: 856,
      type: 'post',
      url: '/blog/scalable-react-apps',
    },
    {
      title: 'SaaS Dashboard Transformation',
      views: 743,
      type: 'project',
      url: '/work/saas-dashboard',
    },
    {
      title: 'UX Design Principles for Modern Web',
      views: 682,
      type: 'post',
      url: '/blog/ux-design-principles',
    },
  ];
}

// Get visitor analytics (traffic sources)
export function getVisitorSources(): VisitorSource[] {
  return [
    { source: 'Organic Search', percentage: 45, visitors: 4521 },
    { source: 'Direct', percentage: 25, visitors: 2513 },
    { source: 'Social Media', percentage: 15, visitors: 1508 },
    { source: 'Referral', percentage: 10, visitors: 1005 },
    { source: 'Email', percentage: 5, visitors: 502 },
  ];
}

// Get device breakdown
export function getDeviceBreakdown(): DeviceBreakdown[] {
  return [
    { device: 'Desktop', percentage: 55, color: '#3b82f6' },
    { device: 'Mobile', percentage: 35, color: '#10b981' },
    { device: 'Tablet', percentage: 10, color: '#f59e0b' },
  ];
}
