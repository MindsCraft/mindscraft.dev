# Homepage High-Fidelity Mockup

## Design Specifications

### Color Palette Application
- **Primary Background**: `#FFFFFF` (White)
- **Brand Dark**: `#101828` (Headers, navigation, primary text)
- **Brand Accent**: `#F3F4C0` (Highlights, hover states, decorative elements)
- **AI Primary**: `#2563EB` (CTAs, links, AI-related elements)
- **Growth Primary**: `#059669` (Success metrics, testimonials)
- **Gray Scale**: `#F9FAFB` to `#111827` (Backgrounds, secondary text)

### Typography Implementation
- **Font Family**: Inter, system-ui, sans-serif
- **Hero Headline**: 48px (3rem) desktop / 32px (2rem) mobile, font-weight: 700
- **Section Headers**: 36px (2.25rem) desktop / 28px (1.75rem) mobile, font-weight: 600
- **Body Text**: 16px (1rem), font-weight: 400, line-height: 1.6
- **Button Text**: 16px (1rem), font-weight: 500, letter-spacing: 0.025em

## Header Section
```css
/* Header Styling */
.header {
  background: #FFFFFF;
  border-bottom: 1px solid #E5E7EB;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 50;
}

.nav-link {
  color: #4B5563;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #101828;
}

.cta-button {
  background: #2563EB;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.cta-button:hover {
  background: #1E40AF;
  transform: translateY(-1px);
}
```

## Hero Section Design

### Visual Layout
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [Geometric Pattern Background - Brand Accent #F3F4C0 with 10% opacity]    │
│                                                                             │
│                    AI-Powered Development                                   │
│                    for Growing Startups                                     │
│                    [#101828, 48px, font-weight: 700]                       │
│                                                                             │
│        Launch faster, scale smarter with intelligent solutions             │
│        built for your stage of growth                                      │
│        [#4B5563, 18px, font-weight: 400, max-width: 600px]                │
│                                                                             │
│  [Start Your AI Project]    [View Case Studies]                            │
│  [#2563EB bg, white text]   [transparent bg, #2563EB border & text]        │
│                                                                             │
│  ✓ 50+ AI implementations  ✓ 8-week delivery  ✓ Startup-friendly pricing   │
│  [#059669 checkmarks, #6B7280 text, 14px]                                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### CSS Implementation
```css
.hero-section {
  background: linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%);
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
}

.hero-pattern {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: url('/patterns/geometric-ai.svg') no-repeat;
  background-size: contain;
  opacity: 0.1;
}

.hero-headline {
  font-size: 3rem;
  font-weight: 700;
  color: #101828;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.hero-subheadline {
  font-size: 1.125rem;
  color: #4B5563;
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: 2rem;
}

.hero-ctas {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.primary-cta {
  background: #2563EB;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
}

.primary-cta:hover {
  background: #1E40AF;
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.1);
}

.secondary-cta {
  background: transparent;
  color: #2563EB;
  border: 2px solid #2563EB;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
}

.secondary-cta:hover {
  background: #2563EB;
  color: white;
}

.hero-features {
  display: flex;
  gap: 2rem;
  font-size: 0.875rem;
  color: #6B7280;
}

.hero-features::before {
  content: "✓";
  color: #059669;
  font-weight: 600;
  margin-right: 0.5rem;
}
```

## Social Proof Section

### Visual Design
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                    Trusted by Growing Startups                             │
│                    [#101828, 24px, font-weight: 600, center]               │
│                                                                             │
│  [Client Logo] [Client Logo] [Client Logo] [Client Logo] [Client Logo]     │
│  [Grayscale logos with hover color effect]                                 │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────────┐ │
│  │ "Mindscraft helped us launch our AI-powered MVP 60% faster than        │ │
│  │ expected. Their expertise in both AI and startup needs is unmatched."  │ │
│  │ [#374151, 18px, italic, center, max-width: 800px]                      │ │
│  │                                                                         │ │
│  │ - Sarah Chen, Founder at TechStart                                      │ │
│  │ [#6B7280, 16px, center]                                                 │ │
│  │ [Client photo, 48px circle] [Company logo, 24px height]                │ │
│  └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### CSS Implementation
```css
.social-proof {
  background: #F9FAFB;
  padding: 4rem 0;
  text-align: center;
}

.client-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 2rem 0 3rem;
  flex-wrap: wrap;
}

.client-logo {
  height: 40px;
  filter: grayscale(100%);
  opacity: 0.6;
  transition: all 0.3s ease;
}

.client-logo:hover {
  filter: grayscale(0%);
  opacity: 1;
}

.testimonial-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.testimonial-quote {
  font-size: 1.125rem;
  color: #374151;
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.author-photo {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.author-info {
  text-align: left;
}

.author-name {
  font-weight: 500;
  color: #101828;
}

.author-title {
  font-size: 0.875rem;
  color: #6B7280;
}
```

## Services Overview Section

### Visual Design
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                        Our AI-First Services                               │
│                        [#101828, 36px, font-weight: 600, center]           │
│                                                                             │
│        Comprehensive solutions for startups ready to scale with AI         │
│        [#6B7280, 16px, center, max-width: 600px]                          │
│                                                                             │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐            │
│  │ [🤖 AI Icon]    │  │ [🌐 Web Icon]   │  │ [📱 Mobile Icon] │            │
│  │ [#2563EB, 48px] │  │ [#2563EB, 48px] │  │ [#2563EB, 48px] │            │
│  │                 │  │                 │  │                 │            │
│  │ AI Integration  │  │ Web Development │  │ Mobile Apps     │            │
│  │ [#101828, 20px, │  │ [#101828, 20px, │  │ [#101828, 20px, │            │
│  │  font-weight:   │  │  font-weight:   │  │  font-weight:   │            │
│  │  600]           │  │  600]           │  │  600]           │            │
│  │                 │  │                 │  │                 │            │
│  │ Smart features  │  │ Modern, fast,   │  │ Native & hybrid │            │
│  │ that drive user │  │ scalable web    │  │ solutions for   │            │
│  │ engagement and  │  │ applications    │  │ exceptional UX  │            │
│  │ business growth │  │ built for scale │  │ and performance │            │
│  │ [#6B7280, 14px] │  │ [#6B7280, 14px] │  │ [#6B7280, 14px] │            │
│  │                 │  │                 │  │                 │            │
│  │ [Learn More]    │  │ [Learn More]    │  │ [Learn More]    │            │
│  │ [#2563EB text,  │  │ [#2563EB text,  │  │ [#2563EB text,  │            │
│  │  hover underline│  │  hover underline│  │  hover underline│            │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### CSS Implementation
```css
.services-section {
  padding: 6rem 0;
  background: white;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.service-card {
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
}

.service-card:hover {
  border-color: #2563EB;
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.1);
}

.service-icon {
  width: 48px;
  height: 48px;
  color: #2563EB;
  margin: 0 auto 1.5rem;
}

.service-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #101828;
  margin-bottom: 1rem;
}

.service-description {
  color: #6B7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.service-link {
  color: #2563EB;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
}

.service-link:hover {
  text-decoration: underline;
  color: #1E40AF;
}
```

## Featured Work Section

### Visual Design
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                           Recent Success Stories                           │
│                           [#101828, 36px, font-weight: 600, center]        │
│                                                                             │
│        Real results from AI-powered projects we've delivered               │
│        [#6B7280, 16px, center]                                            │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────────┐ │
│  │ ┌─────────────────────────┐  ┌─────────────────────────────────────┐   │ │
│  │ │                         │  │                                     │   │ │
│  │ │   [Project Screenshot]  │  │  FinTech AI Dashboard               │   │ │
│  │ │   [Rounded corners,     │  │  [#101828, 24px, font-weight: 600] │   │ │
│  │ │    subtle shadow]       │  │                                     │   │ │
│  │ │                         │  │  Revolutionized financial planning  │   │ │
│  │ │   [Play Button Overlay] │  │  with AI-powered insights and       │   │ │
│  │ │                         │  │  predictive analytics               │   │ │
│  │ └─────────────────────────┘  │  [#6B7280, 16px, line-height: 1.6] │   │ │
│  │                              │                                     │   │ │
│  │                              │  📈 340% increase in engagement     │   │ │
│  │                              │  ⚡ 60% faster decision making      │   │ │
│  │                              │  💰 $2M+ additional revenue         │   │ │
│  │                              │  [#059669 icons, #374151 text]      │   │ │
│  │                              │                                     │   │ │
│  │                              │  [View Full Case Study]             │   │ │
│  │                              │  [#2563EB bg, white text, rounded]  │   │ │
│  │                              └─────────────────────────────────────┘   │ │
│  └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│                              [View All Work]                               │
│                              [#2563EB text, border, center]                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### CSS Implementation
```css
.featured-work {
  background: #F9FAFB;
  padding: 6rem 0;
}

.featured-project {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin: 3rem 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.project-image {
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.project-image img {
  width: 100%;
  height: auto;
  display: block;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: rgba(37, 99, 235, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-button:hover {
  background: rgba(37, 99, 235, 1);
  transform: translate(-50%, -50%) scale(1.1);
}

.project-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #101828;
  margin-bottom: 1rem;
}

.project-description {
  color: #6B7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-metrics {
  list-style: none;
  margin-bottom: 2rem;
}

.project-metrics li {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: #374151;
}

.project-metrics li::before {
  content: "📈";
  margin-right: 0.5rem;
  color: #059669;
}

.view-all-work {
  text-align: center;
  margin-top: 3rem;
}

.view-all-work a {
  display: inline-block;
  color: #2563EB;
  border: 2px solid #2563EB;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
}

.view-all-work a:hover {
  background: #2563EB;
  color: white;
}
```

## Process Section

### Visual Design
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                        How We Work With You                                │
│                        [#101828, 36px, font-weight: 600, center]           │
│                                                                             │
│        Our proven methodology for delivering AI-powered solutions          │
│        [#6B7280, 16px, center]                                            │
│                                                                             │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐  │
│  │ [🔍 Icon]   │    │ [🎨 Icon]   │    │ [⚡ Icon]   │    │ [🚀 Icon]   │  │
│  │ [#2563EB]   │ -> │ [#2563EB]   │ -> │ [#2563EB]   │ -> │ [#2563EB]   │  │
│  │             │    │             │    │             │    │             │  │
│  │ Discovery   │    │ Design      │    │ Development │    │ Launch      │  │
│  │ [#101828,   │    │ [#101828,   │    │ [#101828,   │    │ [#101828,   │  │
│  │  20px, 600] │    │  20px, 600] │    │  20px, 600] │    │  20px, 600] │  │
│  │             │    │             │    │             │    │             │  │
│  │ Understand  │    │ Create smart│    │ Build with  │    │ Deploy &    │  │
│  │ your needs  │    │ solutions   │    │ AI power    │    │ optimize    │  │
│  │ and goals   │    │ and plan    │    │ and test    │    │ performance │  │
│  │ [#6B7280,   │    │ [#6B7280,   │    │ [#6B7280,   │    │ [#6B7280,   │  │
│  │  14px]      │    │  14px]      │    │  14px]      │    │  14px]      │  │
│  │             │    │             │    │             │    │             │  │
│  │ Week 1-2    │    │ Week 3-4    │    │ Week 5-8    │    │ Week 9+     │  │
│  │ [#059669,   │    │ [#059669,   │    │ [#059669,   │    │ [#059669,   │  │
│  │  12px, 500] │    │  12px, 500] │    │  12px, 500] │    │  12px, 500] │  │
│  └─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘  │
│                                                                             │
│                    Typical timeline: 8-12 weeks from start to launch       │
│                    [#6B7280, 16px, center, italic]                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### CSS Implementation
```css
.process-section {
  padding: 6rem 0;
  background: white;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin: 3rem 0;
  position: relative;
}

.process-step {
  text-align: center;
  position: relative;
}

.process-step::after {
  content: "→";
  position: absolute;
  top: 2rem;
  right: -1rem;
  color: #D1D5DB;
  font-size: 1.5rem;
  font-weight: bold;
}

.process-step:last-child::after {
  display: none;
}

.step-icon {
  width: 64px;
  height: 64px;
  background: #DBEAFE;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #2563EB;
  font-size: 24px;
}

.step-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #101828;
  margin-bottom: 0.5rem;
}

.step-description {
  color: #6B7280;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.step-timeline {
  color: #059669;
  font-size: 0.75rem;
  font-weight: 500;
  background: #D1FAE5;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  display: inline-block;
}

.process-timeline {
  text-align: center;
  margin-top: 2rem;
  font-style: italic;
  color: #6B7280;
}
```

## Final CTA Section

### Visual Design
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [Gradient Background: #2563EB to #1E40AF]                                 │
│                                                                             │
│                    Ready to Build Something Amazing?                       │
│                    [White, 36px, font-weight: 600, center]                 │
│                                                                             │
│              Let's discuss your AI-powered product vision                  │
│              [rgba(255,255,255,0.9), 18px, center]                        │
│                                                                             │
│                        [Start Your Project]                                │
│                        [White bg, #2563EB text, large button]              │
│                                                                             │
│                    Or call us at +1 (555) 123-4567                        │
│                    [rgba(255,255,255,0.8), 14px, center]                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### CSS Implementation
```css
.final-cta {
  background: linear-gradient(135deg, #2563EB 0%, #1E40AF 100%);
  padding: 4rem 0;
  text-align: center;
  color: white;
}

.final-cta h2 {
  font-size: 2.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.final-cta p {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
}

.final-cta-button {
  background: white;
  color: #2563EB;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 1rem;
  transition: all 0.2s ease;
}

.final-cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
}

.contact-info {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
}
```

## Responsive Design Specifications

### Mobile Adaptations (375px - 640px)
```css
@media (max-width: 640px) {
  .hero-headline {
    font-size: 2rem;
    line-height: 1.3;
  }
  
  .hero-ctas {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-features {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .featured-project {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .process-steps {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .process-step::after {
    content: "↓";
    top: auto;
    bottom: -1.5rem;
    right: 50%;
    transform: translateX(50%);
  }
}
```

### Tablet Adaptations (641px - 1024px)
```css
@media (min-width: 641px) and (max-width: 1024px) {
  .hero-headline {
    font-size: 2.5rem;
  }
  
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .process-steps {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 3rem;
  }
}
```

This high-fidelity mockup provides detailed specifications for implementing the homepage design using the established brand style guide, ensuring consistency across all visual elements and interactions.