# Services Page High-Fidelity Mockup

## Design Specifications

### Brand Application
- **Primary Colors**: Brand Dark (#101828), AI Primary (#2563EB), Growth Primary (#059669)
- **Typography**: Inter font family with established hierarchy
- **Spacing**: 8px base unit system with semantic spacing tokens
- **Components**: Consistent with design system specifications

## Header & Navigation
```css
/* Consistent with homepage header */
.services-nav .nav-link.active {
  color: #101828;
  font-weight: 600;
  position: relative;
}

.services-nav .nav-link.active::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 0;
  right: 0;
  height: 2px;
  background: #2563EB;
}
```

## Hero Section Design

### Visual Layout
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [Subtle gradient background: #F9FAFB to #FFFFFF]                          │
│                                                                             │
│                    AI-Powered Development Services                          │
│                    [#101828, 48px, font-weight: 700, center]               │
│                                                                             │
│        Comprehensive solutions for startups ready to scale with AI         │
│        [#6B7280, 18px, center, max-width: 700px]                          │
│                                                                             │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐            │
│  │ 50+ Projects    │  │ 8-Week Average  │  │ 95% On-Time     │            │
│  │ Delivered       │  │ Delivery        │  │ Success Rate    │            │
│  │ [#101828, 24px, │  │ [#101828, 24px, │  │ [#101828, 24px, │            │
│  │  font-weight:   │  │  font-weight:   │  │  font-weight:   │            │
│  │  600]           │  │  600]           │  │  600]           │            │
│  │ [#6B7280, 14px] │  │ [#6B7280, 14px] │  │ [#6B7280, 14px] │            │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘            │
│                                                                             │
│                        [Get Started Today]                                 │
│                        [#2563EB bg, white text, large button]              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### CSS Implementation
```css
.services-hero {
  background: linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%);
  padding: 4rem 0 6rem;
  text-align: center;
}

.services-hero h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #101828;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.services-hero .subtitle {
  font-size: 1.125rem;
  color: #6B7280;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.6;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 600px;
  margin: 0 auto 3rem;
}

.stat-card {
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 0.75rem;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 600;
  color: #101828;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  color: #6B7280;
  line-height: 1.4;
}

.hero-cta {
  background: #2563EB;
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s ease;
}

.hero-cta:hover {
  background: #1E40AF;
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.2);
}
```

## Service Categories Section

### AI Integration Service Card
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────────┐ │
│  │ [🤖 Large AI Icon - #2563EB, 64px, center]                             │ │
│  │                                                                         │ │
│  │ AI Integration & Development                                            │ │
│  │ [#101828, 28px, font-weight: 600, center]                              │ │
│  │                                                                         │ │
│  │ Transform your product with intelligent features that users love        │ │
│  │ and competitors envy. From machine learning models to natural           │ │
│  │ language processing, we make AI accessible and practical.               │ │
│  │ [#6B7280, 16px, line-height: 1.6, center, max-width: 500px]           │ │
│  │                                                                         │ │
│  │ ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐          │ │
│  │ │ ✓ ML Models     │  │ ✓ NLP Solutions │  │ ✓ Computer      │          │ │
│  │ │ ✓ Predictive    │  │ ✓ Chatbots &    │  │   Vision        │          │ │
│  │ │   Analytics     │  │   Assistants    │  │ ✓ Recommendation│          │ │
│  │ │ [#059669 check, │  │ [#059669 check, │  │   Systems       │          │ │
│  │ │  #374151 text,  │  │  #374151 text,  │  │ [#059669 check, │          │ │
│  │ │  14px]          │  │  14px]          │  │  #374151 text,  │          │ │
│  │ └─────────────────┘  └─────────────────┘  │  14px]          │          │ │
│  │                                           └─────────────────┘          │ │
│  │                                                                         │ │
│  │ ┌─────────────────────────────────────────────────────────────────────┐ │ │
│  │ │ Starting at $15,000 | 6-8 weeks delivery | Free consultation       │ │ │
│  │ │ [#2563EB bg, white text, 14px, center, rounded pill]               │ │ │
│  │ └─────────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                         │ │
│  │ [Learn More About AI]    [View AI Case Studies]                        │ │
│  │ [#2563EB bg, white]      [transparent, #2563EB border & text]          │ │
│  │                                                                         │ │
│  └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### CSS Implementation
```css
.service-categories {
  padding: 6rem 0;
  background: white;
}

.service-card {
  background: white;
  border: 2px solid #E5E7EB;
  border-radius: 1rem;
  padding: 3rem 2rem;
  margin-bottom: 3rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #2563EB, #059669);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.service-card:hover {
  border-color: #2563EB;
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.1);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-icon {
  width: 64px;
  height: 64px;
  color: #2563EB;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
}

.service-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: #101828;
  margin-bottom: 1.5rem;
}

.service-description {
  color: #6B7280;
  line-height: 1.6;
  max-width: 500px;
  margin: 0 auto 2rem;
}

.service-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.feature-list {
  background: #F9FAFB;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: left;
}

.feature-list li {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #374151;
}

.feature-list li::before {
  content: "✓";
  color: #059669;
  font-weight: 600;
  margin-right: 0.5rem;
}

.service-pricing {
  background: #2563EB;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 2rem;
}

.service-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.primary-service-cta {
  background: #2563EB;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
}

.primary-service-cta:hover {
  background: #1E40AF;
  transform: translateY(-1px);
}

.secondary-service-cta {
  background: transparent;
  color: #2563EB;
  border: 2px solid #2563EB;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
}

.secondary-service-cta:hover {
  background: #2563EB;
  color: white;
}
```

## Development Process Section

### Visual Design
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [Background: #F9FAFB]                                                      │
│                                                                             │
│                            Our Development Process                         │
│                            [#101828, 36px, font-weight: 600, center]       │
│                                                                             │
│        Transparent, collaborative approach that delivers results           │
│        [#6B7280, 16px, center]                                            │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────────┐ │
│  │                                                                         │ │
│  │ ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌───────────┐ │ │
│  │ │ Week 1-2    │    │ Week 3-4    │    │ Week 5-8    │    │ Week 9+   │ │ │
│  │ │             │    │             │    │             │    │           │ │ │
│  │ │ [🔍 Icon]   │    │ [🎨 Icon]   │    │ [⚡ Icon]   │    │ [🚀 Icon] │ │ │
│  │ │ [#2563EB]   │ -> │ [#2563EB]   │ -> │ [#2563EB]   │ -> │ [#2563EB] │ │ │
│  │ │             │    │             │    │             │    │           │ │ │
│  │ │ Discovery   │    │ Design      │    │ Development │    │ Launch    │ │ │
│  │ │ & Strategy  │    │ & Planning  │    │ & Testing   │    │ & Support │ │ │
│  │ │ [#101828,   │    │ [#101828,   │    │ [#101828,   │    │ [#101828, │ │ │
│  │ │  18px, 600] │    │  18px, 600] │    │  18px, 600] │    │  18px,600]│ │ │
│  │ │             │    │             │    │             │    │           │ │ │
│  │ │ • Requirements│   │ • Wireframes│   │ • Coding    │   │ • Deploy  │ │ │
│  │ │ • Research  │    │ • Prototypes│    │ • AI Training│   │ • Monitor │ │ │
│  │ │ • Planning  │    │ • Architecture│  │ • Testing   │   │ • Optimize│ │ │
│  │ │ [#6B7280,   │    │ [#6B7280,   │    │ [#6B7280,   │    │ [#6B7280, │ │ │
│  │ │  14px]      │    │  14px]      │    │  14px]      │    │  14px]    │ │ │
│  │ └─────────────┘    └─────────────┘    └─────────────┘    └───────────┘ │ │
│  │                                                                         │ │
│  └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│                    Weekly demos • Slack communication • Full transparency  │
│                    [#059669, 14px, center, italic]                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### CSS Implementation
```css
.process-section {
  background: #F9FAFB;
  padding: 6rem 0;
}

.process-container {
  background: white;
  border-radius: 1rem;
  padding: 3rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin: 3rem 0;
}

.process-timeline {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  position: relative;
}

.process-timeline::before {
  content: "";
  position: absolute;
  top: 3rem;
  left: 12.5%;
  right: 12.5%;
  height: 2px;
  background: linear-gradient(90deg, #2563EB, #059669);
  z-index: 1;
}

.process-phase {
  text-align: center;
  position: relative;
  z-index: 2;
}

.phase-timeline {
  background: #DBEAFE;
  color: #2563EB;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: inline-block;
}

.phase-icon {
  width: 60px;
  height: 60px;
  background: white;
  border: 3px solid #2563EB;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #2563EB;
  font-size: 1.5rem;
}

.phase-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #101828;
  margin-bottom: 0.5rem;
}

.phase-subtitle {
  font-size: 0.875rem;
  color: #6B7280;
  margin-bottom: 1rem;
}

.phase-details {
  list-style: none;
  text-align: left;
  font-size: 0.875rem;
  color: #6B7280;
}

.phase-details li {
  margin-bottom: 0.25rem;
  position: relative;
  padding-left: 1rem;
}

.phase-details li::before {
  content: "•";
  color: #2563EB;
  position: absolute;
  left: 0;
}

.process-benefits {
  text-align: center;
  margin-top: 2rem;
  font-style: italic;
  color: #059669;
  font-size: 0.875rem;
}
```

## Technology Stack Section

### Visual Design
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                        Technologies We Master                              │
│                        [#101828, 36px, font-weight: 600, center]           │
│                                                                             │
│        Cutting-edge tools and frameworks for modern development            │
│        [#6B7280, 16px, center]                                            │
│                                                                             │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐            │
│  │ Frontend        │  │ Backend         │  │ AI/ML           │            │
│  │ [#101828, 18px, │  │ [#101828, 18px, │  │ [#101828, 18px, │            │
│  │  font-weight:   │  │  font-weight:   │  │  font-weight:   │            │
│  │  600]           │  │  600]           │  │  600]           │            │
│  │                 │  │                 │  │                 │            │
│  │ [React Logo]    │  │ [Node Logo]     │  │ [TensorFlow]    │            │
│  │ React           │  │ Node.js         │  │ TensorFlow      │            │
│  │                 │  │                 │  │                 │            │
│  │ [Next Logo]     │  │ [Python Logo]   │  │ [OpenAI Logo]   │            │
│  │ Next.js         │  │ Python          │  │ OpenAI API      │            │
│  │                 │  │                 │  │                 │            │
│  │ [TS Logo]       │  │ [FastAPI Logo]  │  │ [HF Logo]       │            │
│  │ TypeScript      │  │ FastAPI         │  │ Hugging Face    │            │
│  │                 │  │                 │  │                 │            │
│  │ [Tailwind Logo] │  │ [GraphQL Logo]  │  │ [LangChain]     │            │
│  │ Tailwind CSS    │  │ GraphQL         │  │ LangChain       │            │
│  │                 │  │                 │  │                 │            │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘            │
│                                                                             │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐            │
│  │ Database        │  │ Cloud & DevOps  │  │ Mobile          │            │
│  │ [#101828, 18px, │  │ [#101828, 18px, │  │ [#101828, 18px, │            │
│  │  font-weight:   │  │  font-weight:   │  │  font-weight:   │            │
│  │  600]           │  │  600]           │  │  600]           │            │
│  │                 │  │                 │  │                 │            │
│  │ [PostgreSQL]    │  │ [AWS Logo]      │  │ [RN Logo]       │            │
│  │ PostgreSQL      │  │ AWS             │  │ React Native    │            │
│  │                 │  │                 │  │                 │            │
│  │ [MongoDB Logo]  │  │ [Docker Logo]   │  │ [iOS Logo]      │            │
│  │ MongoDB         │  │ Docker          │  │ iOS Native      │            │
│  │                 │  │                 │  │                 │            │
│  │ [Redis Logo]    │  │ [K8s Logo]      │  │ [Android Logo]  │            │
│  │ Redis           │  │ Kubernetes      │  │ Android Native  │            │
│  │                 │  │                 │  │                 │            │
│  │ [Pinecone Logo] │  │ [Vercel Logo]   │  │ [Expo Logo]     │            │
│  │ Pinecone        │  │ Vercel          │  │ Expo            │            │
│  │                 │  │                 │  │                 │            │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### CSS Implementation
```css
.tech-stack {
  padding: 6rem 0;
  background: white;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}

.tech-category {
  background: #F9FAFB;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
}

.tech-category h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #101828;
  margin-bottom: 1.5rem;
}

.tech-list {
  display: grid;
  gap: 1rem;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: white;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
}

.tech-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.tech-logo {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.tech-name {
  font-weight: 500;
  color: #374151;
}
```

## Pricing Section

### Visual Design
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [Background: Linear gradient #F9FAFB to #FFFFFF]                          │
│                                                                             │
│                            Transparent Pricing                             │
│                            [#101828, 36px, font-weight: 600, center]       │
│                                                                             │
│        Choose the package that fits your startup's needs and budget        │
│        [#6B7280, 16px, center]                                            │
│                                                                             │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐            │
│  │ Starter         │  │ Growth          │  │ Enterprise      │            │
│  │ [#6B7280, 14px, │  │ [#6B7280, 14px, │  │ [#6B7280, 14px, │            │
│  │  uppercase]     │  │  uppercase]     │  │  uppercase]     │            │
│  │                 │  │                 │  │                 │            │
│  │ $8,000-15,000   │  │ $15,000-35,000  │  │ $35,000+        │            │
│  │ [#101828, 32px, │  │ [#101828, 32px, │  │ [#101828, 32px, │            │
│  │  font-weight:   │  │  font-weight:   │  │  font-weight:   │            │
│  │  700]           │  │  700]           │  │  700]           │            │
│  │                 │  │                 │  │                 │            │
│  │ Perfect for     │  │ Ideal for       │  │ Built for       │            │
│  │ early-stage     │  │ growing         │  │ scaling         │            │
│  │ startups        │  │ companies       │  │ enterprises     │            │
│  │ [#6B7280, 14px] │  │ [#6B7280, 14px] │  │ [#6B7280, 14px] │            │
│  │                 │  │                 │  │                 │            │
│  │ ✓ Web App       │  │ ✓ AI Integration│  │ ✓ Custom AI     │            │
│  │ ✓ Basic Features│  │ ✓ Advanced UI   │  │ ✓ Full Platform │            │
│  │ ✓ 4-6 weeks     │  │ ✓ 6-10 weeks    │  │ ✓ 12+ weeks     │            │
│  │ ✓ Basic Support │  │ ✓ Priority      │  │ ✓ Dedicated     │            │
│  │                 │  │   Support       │  │   Team          │            │
│  │ [#059669 check, │  │ [#059669 check, │  │ [#059669 check, │            │
│  │  #374151 text]  │  │  #374151 text]  │  │  #374151 text]  │            │
│  │                 │  │                 │  │                 │            │
│  │ [Get Quote]     │  │ [Get Quote]     │  │ [Contact Us]    │            │
│  │ [#2563EB bg]    │  │ [#2563EB bg]    │  │ [#2563EB bg]    │            │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘            │
│                                                                             │
│  All projects include: Strategy, Design, Development, Testing, Launch      │
│  [#6B7280, 14px, center, italic]                                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### CSS Implementation
```css
.pricing-section {
  background: linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%);
  padding: 6rem 0;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 3rem 0;
}

.pricing-card {
  background: white;
  border: 2px solid #E5E7EB;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
}

.pricing-card:hover {
  border-color: #2563EB;
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.1);
}

.pricing-card.featured {
  border-color: #2563EB;
  transform: scale(1.05);
}

.pricing-card.featured::before {
  content: "Most Popular";
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #2563EB;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 600;
}

.pricing-tier {
  font-size: 0.875rem;
  color: #6B7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.pricing-amount {
  font-size: 2rem;
  font-weight: 700;
  color: #101828;
  margin-bottom: 0.5rem;
}

.pricing-description {
  color: #6B7280;
  font-size: 0.875rem;
  margin-bottom: 2rem;
}

.pricing-features {
  list-style: none;
  text-align: left;
  margin-bottom: 2rem;
}

.pricing-features li {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  color: #374151;
  font-size: 0.875rem;
}

.pricing-features li::before {
  content: "✓";
  color: #059669;
  font-weight: 600;
  margin-right: 0.75rem;
  width: 16px;
}

.pricing-cta {
  background: #2563EB;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  display: block;
  transition: all 0.2s ease;
}

.pricing-cta:hover {
  background: #1E40AF;
  transform: translateY(-1px);
}

.pricing-note {
  text-align: center;
  margin-top: 2rem;
  font-style: italic;
  color: #6B7280;
  font-size: 0.875rem;
}
```

## FAQ Section & Final CTA

### FAQ Implementation
```css
.faq-section {
  background: white;
  padding: 6rem 0;
}

.faq-item {
  border-bottom: 1px solid #E5E7EB;
  padding: 1.5rem 0;
}

.faq-question {
  display: flex;
  justify-content: between;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  color: #101828;
  font-size: 1.125rem;
}

.faq-answer {
  margin-top: 1rem;
  color: #6B7280;
  line-height: 1.6;
  display: none;
}

.faq-answer.active {
  display: block;
}
```

## Responsive Design Specifications

### Mobile Adaptations (375px - 640px)
```css
@media (max-width: 640px) {
  .services-hero h1 {
    font-size: 2rem;
  }
  
  .hero-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .service-features {
    grid-template-columns: 1fr;
  }
  
  .service-actions {
    flex-direction: column;
  }
  
  .process-timeline {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .process-timeline::before {
    display: none;
  }
  
  .tech-grid {
    grid-template-columns: 1fr;
  }
  
  .pricing-grid {
    grid-template-columns: 1fr;
  }
  
  .pricing-card.featured {
    transform: none;
  }
}
```

This services page mockup provides comprehensive specifications for implementing a professional, conversion-focused services page that aligns with the brand style guide and user experience goals.