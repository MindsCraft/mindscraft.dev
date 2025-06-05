import { WorkItem } from '@/types/work';

export const workItems: WorkItem[] = [
  {
    id: 1,
    title: 'NexusShop E-commerce',
    description: 'A full-featured e-commerce platform with AI-powered recommendations and real-time inventory management.',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redis', 'Tailwind CSS'],
    link: 'https://nexusshop.example.com',
    github: 'https://github.com/username/nexus-shop',
    content: 'NexusShop is a modern e-commerce platform that leverages AI to provide personalized shopping experiences. Built with a focus on performance and user experience, the platform handles thousands of concurrent users and processes transactions securely. The architecture is designed for scalability, with microservices handling different aspects of the application.',
    features: [
      'AI-powered product recommendations based on user behavior',
      'Real-time inventory tracking and management',
      'Secure payment processing with Stripe integration',
      'User authentication and role-based access control',
      'Responsive design with mobile-first approach',
      'Advanced search with filters and sorting',
      'Order tracking and history',
      'Wishlist and saved items functionality'
    ],
    challenges: [
      'Implementing real-time inventory updates across multiple warehouses',
      'Optimizing AI recommendations for performance with large product catalogs',
      'Ensuring PCI compliance for secure payment processing',
      'Creating a seamless mobile checkout experience',
      'Managing high traffic during sales events'
    ],
    results: [
      '30% increase in average order value through personalized recommendations',
      '40% improvement in user engagement metrics',
      '99.99% uptime with auto-scaling infrastructure',
      '25% reduction in cart abandonment rate',
      'Processing over 10,000 daily active users',
      '4.8/5 average customer satisfaction rating'
    ],
    images: [
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1556740772-1d741f938c39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1495474477927-cef9e9fdb5c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    ]
  },
  {
    id: 2,
    title: 'InsightFlow Analytics',
    description: 'A powerful analytics dashboard for SaaS businesses with real-time data visualization and custom reporting.',
    category: 'UX/UI Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
    link: 'https://insightflow.example.com',
    github: 'https://github.com/username/insightflow',
    content: 'InsightFlow is a comprehensive analytics platform designed to help businesses make data-driven decisions. The dashboard provides real-time insights through beautiful visualizations, custom reporting, and interactive data exploration. Built with performance in mind, it can handle millions of data points while maintaining a smooth user experience. The platform includes role-based access control, scheduled reports, and integration with popular business tools.',
    features: [
      'Real-time data visualization',
      'Customizable dashboards',
      'Exportable reports',
      'User access controls',
      'Responsive design',
      'Dark mode support'
    ],
    challenges: [
      'Handling large datasets efficiently',
      'Creating intuitive data visualizations',
      'Ensuring real-time updates',
      'Balancing feature richness with simplicity'
    ],
    results: [
      '50% faster data loading',
      'Improved user engagement',
      'Positive client feedback',
      '35% increase in user productivity'
    ],
    images: [
      'https://picsum.photos/seed/dashboard-1/800/600',
      'https://picsum.photos/seed/dashboard-2/800/600',
      'https://picsum.photos/seed/dashboard-3/800/600'
    ]
  },
  {
    id: 3,
    title: 'AI Chatbot',
    description: 'Customer service chatbot with natural language processing capabilities.',
    category: 'AI Integration',
    image: 'https://picsum.photos/seed/chatbot/1200/800',
    technologies: ['Python', 'TensorFlow', 'React', 'Node.js'],
    link: '#',
    github: '#',
    content: 'An intelligent chatbot solution that uses natural language processing to understand and respond to customer inquiries, reducing response times and improving customer satisfaction. The chatbot integrates with existing customer service platforms and can be trained on company-specific knowledge bases. It includes sentiment analysis to detect customer frustration and can seamlessly hand off to human agents when needed.',
    features: [
      'Natural language understanding',
      'Multi-language support',
      'Seamless handoff to human agents',
      'Analytics dashboard',
      'Continuous learning from interactions',
      'Sentiment analysis'
    ],
    challenges: [
      'Training the NLP model',
      'Handling ambiguous queries',
      'Maintaining context in conversations',
      'Integrating with existing systems'
    ],
    results: [
      '70% reduction in response time',
      '85% customer satisfaction rate',
      '24/7 customer support',
      '40% reduction in support costs'
    ],
    images: [
      'https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1465&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1556740772-1d741f938c39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    ]
  },
  {
    id: 4,
    title: 'Pulse Banking',
    description: 'A next-generation mobile banking application offering secure, real-time financial management with AI-powered insights.',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Plaid API'],
    link: 'https://pulsebanking.example.com',
    github: 'https://github.com/username/pulse-banking',
    content: 'Pulse Banking revolutionizes personal finance management with its intuitive interface and powerful features. The app provides real-time transaction tracking, AI-powered spending insights, and seamless money management across multiple accounts. Built with bank-level security, it includes features like biometric authentication, instant card freezing, and customizable alerts. The app also offers financial health scores and personalized saving goals to help users achieve their financial objectives.',
    features: [
      'Biometric & multi-factor authentication',
      'Real-time transaction notifications',
      'AI-powered spending insights and categorization',
      'Bill payment and scheduling with reminders',
      'Peer-to-peer payments with phone contacts',
      'Budget tracking and financial goal setting',
      'Check deposit via mobile camera',
      'Investment portfolio tracking'
    ],
    challenges: [
      'Implementing bank-grade security protocols',
      'Ensuring real-time transaction processing',
      'Creating an intuitive user experience for all age groups',
      'Handling sensitive financial data with compliance',
      'Optimizing performance for low-end devices'
    ],
    results: [
      '4.9/5 average rating across app stores',
      '500,000+ downloads in the first 6 months',
      '60% increase in mobile transactions',
      '99.99% uptime with zero security breaches',
      '30% reduction in customer support calls',
      'Featured in "Top Finance Apps" by major publications'
    ],
    images: [
      'https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1465&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1556740772-1d741f938c39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    ]
  },
  {
    id: 5,
    title: 'EduNova',
    description: 'A cutting-edge online learning platform that delivers personalized education through AI-driven adaptive learning and interactive content.',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1532&q=80',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'GraphQL', 'WebRTC', 'TensorFlow.js'],
    link: 'https://edunova.example.com',
    github: 'https://github.com/username/edunova',
    content: 'EduNova revolutionizes online education by combining AI-powered adaptive learning with engaging, interactive content. The platform serves K-12 and higher education students, offering personalized learning paths that adjust to each student\'s pace and learning style. Features include live virtual classrooms, interactive exercises, automated grading, and comprehensive progress tracking. The platform also provides educators with powerful tools for content creation, student assessment, and classroom management.',
    features: [
      'AI-driven adaptive learning paths',
      'Live virtual classrooms with interactive whiteboard',
      'Automated grading and feedback system',
      'Comprehensive learning analytics dashboard',
      'Mobile-responsive design for learning on the go',
      'Collaborative tools for group projects',
      'Accessibility features for diverse learners',
      'Integration with popular education tools'
    ],
    challenges: [
      'Developing an effective adaptive learning algorithm',
      'Ensuring platform stability with thousands of concurrent users',
      'Creating engaging content for different learning styles',
      'Building real-time collaboration features',
      'Ensuring accessibility compliance'
    ],
    results: [
      '35% improvement in student test scores',
      '90% teacher satisfaction rate',
      '250,000+ registered users across 50+ countries',
      '45% increase in student engagement metrics',
      'Featured in "Top 10 EdTech Startups" by TechCrunch',
      'Partnerships with 50+ educational institutions'
    ],
    images: [
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1532&q=80',
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
      'https://images.unsplash.com/photo-1523050853548-5d1c8b6a6b0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1422&q=80'
    ]
  }
];

// Function to get work item by ID
export function getWorkItem(id: number): WorkItem | undefined {
  return workItems.find(item => item.id === id);
}

// Function to get related work items
export function getRelatedWork(currentId: number, category: string, limit = 2): WorkItem[] {
  return workItems
    .filter(item => item.id !== currentId && item.category === category)
    .slice(0, limit);
}
