# Responsive Layout Specifications

## Breakpoint System

### Breakpoint Definitions
```css
:root {
  /* Mobile First Breakpoints */
  --breakpoint-xs: 375px;   /* Small mobile */
  --breakpoint-sm: 640px;   /* Large mobile */
  --breakpoint-md: 768px;   /* Tablet */
  --breakpoint-lg: 1024px;  /* Desktop */
  --breakpoint-xl: 1280px;  /* Large desktop */
  --breakpoint-2xl: 1536px; /* Extra large desktop */
}
```

### Container System
```css
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

/* Mobile (375px+) */
@media (min-width: 375px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

/* Large Mobile (640px+) */
@media (min-width: 640px) {
  .container {
    max-width: 640px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .container {
    max-width: 768px;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

/* Large Desktop (1280px+) */
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

/* Extra Large Desktop (1536px+) */
@media (min-width: 1536px) {
  .container {
    max-width: 1400px;
  }
}
```

## Homepage Responsive Layouts

### Mobile Layout (375px - 640px)

#### Header Navigation
```
┌─────────────────────────────┐
│ [☰] [Logo]         [CTA]    │
└─────────────────────────────┘

Mobile Menu (Slide-out):
┌─────────────────────────────┐
│ [×]                         │
│                             │
│ Services                    │
│ ├─ AI Integration           │
│ ├─ Web Development          │
│ └─ Mobile Development       │
│                             │
│ Work                        │
│ About                       │
│ Blog                        │
│ Contact                     │
│                             │
│ [Start Project]             │
└─────────────────────────────┘
```

#### Hero Section Mobile
```
┌─────────────────────────────┐
│                             │
│  AI-Powered Development     │
│  for Growing Startups       │
│  [32px, font-weight: 700,   │
│   line-height: 1.3]         │
│                             │
│  Launch faster, scale       │
│  smarter with intelligent   │
│  solutions built for your   │
│  stage of growth            │
│  [16px, line-height: 1.6]   │
│                             │
│  [Start Your AI Project]    │
│  [Full width button]        │
│                             │
│  [View Case Studies]        │
│  [Full width button]        │
│                             │
│  ✓ 50+ AI implementations   │
│  ✓ 8-week delivery          │
│  ✓ Startup-friendly pricing │
│  [Stacked vertically]       │
│                             │
└─────────────────────────────┘
```

#### Services Section Mobile
```
┌─────────────────────────────┐
│    Our AI-First Services    │
│    [28px, center]           │
│                             │
│ ┌─────────────────────────┐ │
│ │ [🤖 AI Icon - 40px]     │ │
│ │                         │ │
│ │ AI Integration          │ │
│ │ [20px, font-weight: 600]│ │
│ │                         │ │
│ │ Smart features that     │ │
│ │ drive user engagement   │ │
│ │ [14px, center]          │ │
│ │                         │ │
│ │ [Learn More]            │ │
│ │ [Full width button]     │ │
│ └─────────────────────────┘ │
│                             │
│ [Similar cards for Web &    │
│  Mobile Development]        │
└─────────────────────────────┘
```

### CSS Implementation - Mobile
```css
/* Mobile Header */
@media (max-width: 640px) {
  .header {
    padding: 1rem 0;
  }
  
  .nav-desktop {
    display: none;
  }
  
  .nav-mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .mobile-menu-toggle {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #101828;
  }
  
  .mobile-menu {
    position: fixed;
    top: 0;
    left: -100%;
    width: 80%;
    height: 100vh;
    background: white;
    z-index: 1000;
    padding: 2rem;
    transition: left 0.3s ease;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .mobile-menu.open {
    left: 0;
  }
  
  .mobile-menu-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #101828;
  }
  
  .mobile-nav-links {
    list-style: none;
    margin-top: 3rem;
  }
  
  .mobile-nav-links li {
    margin-bottom: 1.5rem;
  }
  
  .mobile-nav-links a {
    color: #101828;
    font-size: 1.125rem;
    font-weight: 500;
    text-decoration: none;
  }
  
  .mobile-nav-cta {
    background: #2563EB;
    color: white;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    text-decoration: none;
    display: block;
    text-align: center;
    margin-top: 2rem;
  }
}

/* Mobile Hero */
@media (max-width: 640px) {
  .hero-section {
    padding: 3rem 0;
    text-align: center;
  }
  
  .hero-headline {
    font-size: 2rem;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
  
  .hero-subheadline {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  
  .hero-ctas {
    flex-direction: column;
    gap: 1rem;
  }
  
  .hero-ctas a {
    width: 100%;
    text-align: center;
  }
  
  .hero-features {
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 2rem;
  }
}

/* Mobile Services */
@media (max-width: 640px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .service-card {
    padding: 1.5rem;
  }
  
  .service-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 1rem;
  }
  
  .service-title {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
  
  .service-description {
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
}
```

### Tablet Layout (768px - 1024px)

#### Header Navigation Tablet
```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [Logo: Mindscraft]    [Services ▼] [Work] [About] [Blog]    [Start Project] │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### Hero Section Tablet
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                    AI-Powered Development                                   │
│                    for Growing Startups                                     │
│                    [40px, font-weight: 700, center]                        │
│                                                                             │
│        Launch faster, scale smarter with intelligent solutions             │
│        built for your stage of growth                                      │
│        [18px, center, max-width: 600px]                                    │
│                                                                             │
│  [Start Your AI Project]    [View Case Studies]                            │
│  [Horizontal layout, centered]                                             │
│                                                                             │
│  ✓ 50+ implementations  ✓ 8-week delivery  ✓ Startup pricing               │
│  [Horizontal layout, centered]                                             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### Services Section Tablet
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        Our AI-First Services                               │
│                        [32px, center]                                      │
│                                                                             │
│  ┌─────────────────────────────────┐  ┌─────────────────────────────────┐  │
│  │ [🤖 AI Icon - 48px]             │  │ [🌐 Web Icon - 48px]            │  │
│  │                                 │  │                                 │  │
│  │ AI Integration                  │  │ Web Development                 │  │
│  │ [20px, font-weight: 600]        │  │ [20px, font-weight: 600]        │  │
│  │                                 │  │                                 │  │
│  │ Smart features that drive       │  │ Modern, fast, scalable web      │  │
│  │ user engagement and growth      │  │ applications built for scale    │  │
│  │ [14px, center]                  │  │ [14px, center]                  │  │
│  │                                 │  │                                 │  │
│  │ [Learn More]                    │  │ [Learn More]                    │  │
│  └─────────────────────────────────┘  └─────────────────────────────────┘  │
│                                                                             │
│  ┌─────────────────────────────────┐                                       │
│  │ [📱 Mobile Icon - 48px]         │                                       │
│  │                                 │                                       │
│  │ Mobile Apps                     │                                       │
│  │ [20px, font-weight: 600]        │                                       │
│  │                                 │                                       │
│  │ Native & hybrid solutions for   │                                       │
│  │ exceptional UX and performance  │                                       │
│  │ [14px, center]                  │                                       │
│  │                                 │                                       │
│  │ [Learn More]                    │                                       │
│  └─────────────────────────────────┘                                       │
└─────────────────────────────────────────────────────────────────────────────┘
```

### CSS Implementation - Tablet
```css
/* Tablet Header */
@media (min-width: 768px) and (max-width: 1024px) {
  .nav-desktop {
    display: flex;
  }
  
  .nav-mobile {
    display: none;
  }
  
  .nav-links {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }
  
  .nav-link {
    font-size: 0.875rem;
    padding: 0.5rem 0;
  }
  
  .header-cta {
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
  }
}

/* Tablet Hero */
@media (min-width: 768px) and (max-width: 1024px) {
  .hero-section {
    padding: 4rem 0;
  }
  
  .hero-headline {
    font-size: 2.5rem;
    line-height: 1.2;
  }
  
  .hero-subheadline {
    font-size: 1.125rem;
    max-width: 600px;
    margin: 0 auto 2rem;
  }
  
  .hero-ctas {
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }
  
  .hero-features {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
}

/* Tablet Services */
@media (min-width: 768px) and (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  .services-grid .service-card:last-child {
    grid-column: 1 / -1;
    max-width: 400px;
    margin: 0 auto;
  }
}
```

### Desktop Layout (1024px - 1280px)

#### Featured Work Section Desktop
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           Recent Success Stories                           │
│                           [36px, center]                                   │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────────┐ │
│  │ ┌─────────────────────────┐  ┌─────────────────────────────────────┐   │ │
│  │ │                         │  │                                     │   │ │
│  │ │   [Project Screenshot]  │  │  FinTech AI Dashboard               │   │ │
│  │ │   [600px width]         │  │  [24px, font-weight: 600]           │   │ │
│  │ │                         │  │                                     │   │ │
│  │ │   [Play Button Overlay] │  │  Revolutionized financial planning  │   │ │
│  │ │                         │  │  with AI-powered insights and       │   │ │
│  │ └─────────────────────────┘  │  predictive analytics               │   │ │
│  │                              │  [16px, line-height: 1.6]           │   │ │
│  │                              │                                     │   │ │
│  │                              │  📈 340% increase in engagement     │   │ │
│  │                              │  ⚡ 60% faster decision making      │   │ │
│  │                              │  💰 $2M+ additional revenue         │   │ │
│  │                              │  [Metrics with icons]               │   │ │
│  │                              │                                     │   │ │
│  │                              │  [View Full Case Study]             │   │ │
│  │                              └─────────────────────────────────────┘   │ │
│  └─────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### Process Section Desktop
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        How We Work With You                                │
│                        [36px, center]                                      │
│                                                                             │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐  │
│  │ [🔍 Icon]   │    │ [🎨 Icon]   │    │ [⚡ Icon]   │    │ [🚀 Icon]   │  │
│  │ [64px]      │ -> │ [64px]      │ -> │ [64px]      │ -> │ [64px]      │  │
│  │             │    │             │    │             │    │             │  │
│  │ Discovery   │    │ Design      │    │ Development │    │ Launch      │  │
│  │ [20px, 600] │    │ [20px, 600] │    │ [20px, 600] │    │ [20px, 600] │  │
│  │             │    │             │    │             │    │             │  │
│  │ Understand  │    │ Create smart│    │ Build with  │    │ Deploy &    │  │
│  │ your needs  │    │ solutions   │    │ AI power    │    │ optimize    │  │
│  │ [14px]      │    │ [14px]      │    │ [14px]      │    │ [14px]      │  │
│  │             │    │             │    │             │    │             │  │
│  │ Week 1-2    │    │ Week 3-4    │    │ Week 5-8    │    │ Week 9+     │  │
│  └─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
```

### CSS Implementation - Desktop
```css
/* Desktop Layout */
@media (min-width: 1024px) {
  .hero-section {
    padding: 6rem 0;
  }
  
  .hero-headline {
    font-size: 3rem;
    line-height: 1.2;
  }
  
  .hero-subheadline {
    font-size: 1.125rem;
    max-width: 600px;
  }
  
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  
  .featured-project {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }
  
  .project-image {
    width: 100%;
    max-width: 600px;
  }
  
  .process-steps {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
  
  .process-step {
    text-align: center;
  }
  
  .step-icon {
    width: 64px;
    height: 64px;
    margin-bottom: 1.5rem;
  }
}
```

### Large Desktop Layout (1280px+)

#### Full Width Hero with Background Pattern
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [Background: Geometric pattern overlay, brand accent color]               │
│                                                                             │
│                    AI-Powered Development                                   │
│                    for Growing Startups                                     │
│                    [48px, font-weight: 700, center]                        │
│                                                                             │
│        Launch faster, scale smarter with intelligent solutions             │
│        built for your stage of growth                                      │
│        [18px, center, max-width: 700px]                                    │
│                                                                             │
│  [Start Your AI Project]    [View Case Studies]                            │
│  [Large buttons with enhanced spacing]                                     │
│                                                                             │
│  ✓ 50+ implementations  ✓ 8-week delivery  ✓ Startup pricing               │
│  [Enhanced spacing and typography]                                         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### Enhanced Services Grid
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        Our AI-First Services                               │
│                        [36px, center]                                      │
│                                                                             │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐            │
│  │ [Enhanced card  │  │ [Enhanced card  │  │ [Enhanced card  │            │
│  │  with hover     │  │  with hover     │  │  with hover     │            │
│  │  animations]    │  │  animations]    │  │  animations]    │            │
│  │                 │  │                 │  │                 │            │
│  │ AI Integration  │  │ Web Development │  │ Mobile Apps     │            │
│  │ [Larger icons,  │  │ [Larger icons,  │  │ [Larger icons,  │            │
│  │  more spacing]  │  │  more spacing]  │  │  more spacing]  │            │
│  │                 │  │                 │  │                 │            │
│  │ [Enhanced CTAs] │  │ [Enhanced CTAs] │  │ [Enhanced CTAs] │            │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘            │
└─────────────────────────────────────────────────────────────────────────────┘
```

### CSS Implementation - Large Desktop
```css
/* Large Desktop Enhancements */
@media (min-width: 1280px) {
  .hero-section {
    padding: 8rem 0;
    position: relative;
    overflow: hidden;
  }
  
  .hero-section::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: url('/patterns/geometric-ai.svg') no-repeat;
    background-size: contain;
    opacity: 0.05;
    z-index: 0;
  }
  
  .hero-content {
    position: relative;
    z-index: 1;
  }
  
  .hero-headline {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  
  .hero-subheadline {
    font-size: 1.25rem;
    max-width: 700px;
    margin-bottom: 3rem;
  }
  
  .hero-ctas {
    gap: 2rem;
    margin-bottom: 4rem;
  }
  
  .hero-ctas a {
    padding: 1.25rem 2.5rem;
    font-size: 1.125rem;
  }
  
  .services-section {
    padding: 8rem 0;
  }
  
  .service-card {
    padding: 3rem 2rem;
    transition: all 0.3s ease;
  }
  
  .service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px -12px rgba(37, 99, 235, 0.15);
  }
  
  .service-icon {
    width: 56px;
    height: 56px;
    margin-bottom: 2rem;
  }
  
  .service-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  .service-description {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
}
```

## Touch and Interaction Optimizations

### Touch Target Guidelines
```css
/* Minimum touch targets for mobile */
@media (max-width: 768px) {
  .touch-target {
    min-height: 44px;
    min-width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .button {
    min-height: 48px;
    padding: 0.75rem 1.5rem;
  }
  
  .nav-link {
    padding: 1rem 0;
    display: block;
  }
  
  .service-card {
    margin-bottom: 1rem;
    padding: 1.5rem;
  }
  
  .cta-button {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
}
```

### Hover States (Desktop Only)
```css
/* Only apply hover effects on devices that support hover */
@media (hover: hover) {
  .service-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.1);
  }
  
  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.2);
  }
  
  .nav-link:hover {
    color: #2563EB;
  }
  
  .client-logo:hover {
    filter: grayscale(0%);
    opacity: 1;
  }
}
```

## Performance Optimizations

### Image Responsive Loading
```css
/* Responsive images */
.responsive-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Mobile optimized images */
@media (max-width: 640px) {
  .hero-image {
    content: url('/images/hero-mobile.webp');
  }
}

/* Tablet optimized images */
@media (min-width: 641px) and (max-width: 1024px) {
  .hero-image {
    content: url('/images/hero-tablet.webp');
  }
}

/* Desktop optimized images */
@media (min-width: 1025px) {
  .hero-image {
    content: url('/images/hero-desktop.webp');
  }
}

/* High DPI displays */
@media (min-resolution: 2dppx) {
  .hero-image {
    content: url('/images/hero-desktop@2x.webp');
  }
}
```

### Loading States and Progressive Enhancement
```css
/* Progressive enhancement for animations */
@media (prefers-reduced-motion: no-preference) {
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .animate-on-scroll.in-view {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Accessibility Responsive Features

### Focus Management
```css
/* Enhanced focus indicators for all screen sizes */
.focus-visible {
  outline: 2px solid #2563EB;
  outline-offset: 2px;
}

/* Mobile focus indicators */
@media (max-width: 768px) {
  .focus-visible {
    outline-width: 3px;
    outline-offset: 3px;
  }
}

/* Skip links for keyboard navigation */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #2563EB;
  color: white;
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 1000;
}

.skip-link:focus {
  top: 6px;
}
```

### Screen Reader Optimizations
```css
/* Screen reader only content */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Mobile screen reader improvements */
@media (max-width: 768px) {
  .mobile-menu-toggle {
    position: relative;
  }
  
  .mobile-menu-toggle::after {
    content: "Menu";
    position: absolute;
    left: -9999px;
  }
  
  .mobile-menu-toggle[aria-expanded="true"]::after {
    content: "Close Menu";
  }
}
```

This comprehensive responsive layout specification ensures that all components and sections work seamlessly across all device sizes while maintaining accessibility, performance, and brand consistency.