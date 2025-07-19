// app/lib/servicesData.js

export const services = [
  {
    id: 0,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications',
    iconName: 'Smartphone',
    image: '/assets/service/app.png',
    price: 3999,
    features: [
      { title: 'Cross-platform Apps', description: 'Built using Flutter or React Native.', iconName: 'Smartphone' },
      { title: 'Push Notifications', description: 'Engage users in real-time.', iconName: 'Bell' },
      { title: 'Offline Mode', description: 'Access features without internet.', iconName: 'CloudOff' }
    ],
    process: [
      { step: 1, title: 'Planning', description: 'Understanding user needs.' },
      { step: 2, title: 'Design', description: 'Creating wireframes and mockups.' },
      { step: 3, title: 'Development', description: 'Building native or hybrid apps.' },
      { step: 4, title: 'Publishing', description: 'Launch on App Store/Play Store.' }
    ],
    benefits: ['Better Customer Engagement', 'Enhanced Accessibility', 'Offline Functionality', 'Revenue Generation']
  },
  {
    id: 1,
    title: 'Web Development',
    description: 'Modern responsive websites with performance and SEO in mind',
    iconName: 'Layout',
    image: '/assets/service/website.jpg',
    price: 2999,
    features: [
      { title: 'Responsive Design', description: 'Optimized for all devices.', iconName: 'Smartphone' },
      { title: 'Fast Loading', description: 'Blazing fast performance.', iconName: 'Zap' },
      { title: 'SEO Ready', description: 'Improves search engine ranking.', iconName: 'Search' }
    ],
    process: [
      { step: 1, title: 'Planning & Sitemap', description: 'Site structure & goals.' },
      { step: 2, title: 'Design & Prototyping', description: 'Visual & interactive design.' },
      { step: 3, title: 'Development', description: 'Frontend and backend implementation.' },
      { step: 4, title: 'Launch & Monitor', description: 'Go live and optimize.' }
    ],
    benefits: ['Strong Online Presence', 'Improved User Experience', 'Business Credibility', 'Lead Generation']
  },
  {
    id: 2,
    title: 'Video Editing',
    description: 'Professional video editing for marketing, social media, and ads',
    iconName: 'Film',
    image: '/assets/service/video.png',
    price: 999,
    features: [
      { title: 'Cinematic Quality', description: 'Pro-grade visuals and cuts.', iconName: 'Film' },
      { title: 'Motion Graphics', description: 'Animations and effects.', iconName: 'Play' },
      { title: 'Custom Branding', description: 'Consistent with your brand.', iconName: 'Palette' }
    ],
    process: [
      { step: 1, title: 'Brief & Footage', description: 'Gather materials and goals.' },
      { step: 2, title: 'Editing & Revisions', description: 'Cuts, effects, and transitions.' },
      { step: 3, title: 'Sound & Color', description: 'Audio mastering & color grading.' },
      { step: 4, title: 'Final Delivery', description: 'Optimized for any platform.' }
    ],
    benefits: ['Brand Visibility', 'Engaging Content', 'Professional Look', 'Social Media Growth']
  },
  {
    id: 3,
    title: 'Social Media Marketing (SMM)',
    description: 'Grow your business with targeted social media campaigns',
    iconName: 'Users',
    image: '/assets/service/smm.jpg',
    price: 1499,
    features: [
      { title: 'Content Strategy', description: 'Tailored posts and visuals.', iconName: 'PenTool' },
      { title: 'Ad Campaigns', description: 'Paid promotions and targeting.', iconName: 'TrendingUp' },
      { title: 'Analytics & Reports', description: 'Track success and ROI.', iconName: 'BarChart2' }
    ],
    process: [
      { step: 1, title: 'Account Audit', description: 'Review and improve profiles.' },
      { step: 2, title: 'Strategy & Planning', description: 'Define goals and content.' },
      { step: 3, title: 'Execution', description: 'Posting and engagement.' },
      { step: 4, title: 'Monitoring & Reporting', description: 'Insights and optimization.' }
    ],
    benefits: ['Brand Awareness', 'Customer Engagement', 'Sales Growth', 'Better ROI']
  },
  {
    id: 4,
    title: 'WordPress Development',
    description: 'Custom WordPress websites for businesses and ecommerce',
    iconName: 'Wordpress',
    image: '/assets/service/wordpress.png',
    price: 1799,
    features: [
      { title: 'WooCommerce Support', description: 'Sell online with ease.', iconName: 'ShoppingCart' },
      { title: 'Theme Customization', description: 'Looks and works how you want.', iconName: 'Brush' },
      { title: 'SEO Optimization', description: 'Ranking-focused structure.', iconName: 'Search' }
    ],
    process: [
      { step: 1, title: 'Theme Selection', description: 'Choose or design layout.' },
      { step: 2, title: 'Customization', description: 'Match your brand & goals.' },
      { step: 3, title: 'Plugin Integration', description: 'Features you need.' },
      { step: 4, title: 'Testing & Launch', description: 'Final tweaks and publish.' }
    ],
    benefits: ['Easy Management', 'Cost-effective', 'Scalable', 'SEO Friendly']
  },
  {
    id: 5,
    title: 'UI/UX Design',
    description: 'User-centered interfaces that drive results',
    iconName: 'PenTool',
    image: '/assets/service/ui.png',
    price: 1199,
    features: [
      { title: 'Wireframes & Prototypes', description: 'Plan before you build.', iconName: 'Layout' },
      { title: 'User Testing', description: 'Design based on feedback.', iconName: 'Users' },
      { title: 'Visual Systems', description: 'Consistent branding.', iconName: 'Palette' }
    ],
    process: [
      { step: 1, title: 'Research & Discovery', description: 'Understand users and goals.' },
      { step: 2, title: 'Wireframing', description: 'Basic layout and structure.' },
      { step: 3, title: 'UI Design', description: 'Visual design and polish.' },
      { step: 4, title: 'Testing & Handoff', description: 'Validate and share with devs.' }
    ],
    benefits: ['Improved Conversions', 'Better Usability', 'Strong Branding', 'User Satisfaction']
  }
];
