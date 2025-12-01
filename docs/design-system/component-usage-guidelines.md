# Component Usage Guidelines

## Overview

This document provides comprehensive usage guidelines for all components in the Mindscraft design system. It includes specific do's and don'ts, implementation examples, and best practices to ensure consistent, accessible, and effective component usage across all digital touchpoints.

---

## Atomic Components (Atoms)

### Button Component

#### Purpose
Buttons trigger actions and guide users through key interactions. They should be used for actions, not navigation.

#### When to Use
- Submitting forms
- Triggering actions (save, delete, create)
- Opening modals or dialogs
- Primary and secondary calls-to-action

#### When Not to Use
- Navigation between pages (use links instead)
- Displaying static information
- Actions that can't be undone without confirmation

#### Variants and Usage

**Primary Button**
```tsx
// ✅ DO: Use for main CTAs, limit to 1 per section
<Button variant="primary" size="lg">
  Start Your AI Project
</Button>

// ❌ DON'T: Use multiple primary buttons in same section
<div>
  <Button variant="primary">Save Changes</Button>
  <Button variant="primary">Delete Account</Button> {/* Should be secondary or tertiary */}
</div>
```

**Secondary Button**
```tsx
// ✅ DO: Use for supporting actions
<div className="flex gap-4">
  <Button variant="primary">Save Changes</Button>
  <Button variant="secondary">Cancel</Button>
</div>

// ✅ DO: Use with icons for clarity
<Button variant="secondary" icon={<Download />} iconPosition="left">
  Download Report
</Button>
```

**Tertiary Button**
```tsx
// ✅ DO: Use for subtle actions and navigation-like behaviors
<Button variant="tertiary" size="sm">
  View All Cases
</Button>

// ✅ DO: Use in cards and lists for secondary actions
<Card>
  <h3>Case Study Title</h3>
  <p>Description...</p>
  <Button variant="tertiary">Read More</Button>
</Card>
```

#### Size Guidelines

```tsx
// ✅ DO: Use appropriate sizes for context
<Button variant="primary" size="lg">Hero CTA</Button>      // Hero sections
<Button variant="primary" size="md">Form Submit</Button>   // Forms, cards
<Button variant="primary" size="sm">Table Action</Button>  // Tables, lists

// ❌ DON'T: Use inconsistent sizes in same context
<div className="form-actions">
  <Button size="lg">Save</Button>
  <Button size="sm">Cancel</Button> {/* Should be same size */}
</div>
```

#### Loading and Disabled States

```tsx
// ✅ DO: Always provide loading feedback
const [isLoading, setIsLoading] = useState(false);

const handleSubmit = async () => {
  setIsLoading(true);
  try {
    await submitForm();
  } finally {
    setIsLoading(false);
  }
};

<Button 
  variant="primary" 
  loading={isLoading}
  disabled={isLoading}
  onClick={handleSubmit}
>
  {isLoading ? 'Saving...' : 'Save Changes'}
</Button>

// ❌ DON'T: Leave users without feedback
<Button onClick={handleSubmit}>
  Save Changes {/* No loading state */}
</Button>
```

#### Accessibility Guidelines

```tsx
// ✅ DO: Provide descriptive button text
<Button variant="primary">
  Schedule Free Consultation
</Button>

// ✅ DO: Use aria-label for icon-only buttons
<Button variant="tertiary" aria-label="Close modal">
  <X className="w-4 h-4" />
</Button>

// ✅ DO: Indicate button state for screen readers
<Button 
  variant="primary"
  aria-pressed={isActive}
  aria-describedby="button-help"
>
  Toggle Feature
</Button>

// ❌ DON'T: Use vague or generic button text
<Button variant="primary">
  Click Here {/* Not descriptive */}
</Button>

// ❌ DON'T: Rely only on color to convey meaning
<Button className="text-red-500">
  Delete {/* Should also have icon or explicit text */}
</Button>
```

#### Do's and Don'ts Summary

**Do's:**
✅ Use clear, action-oriented text  
✅ Maintain consistent button hierarchy  
✅ Provide loading and disabled states  
✅ Use appropriate sizes for context  
✅ Include icons when they add clarity  
✅ Ensure minimum 44px touch targets on mobile  
✅ Test with keyboard navigation  
✅ Use semantic button element for actions  

**Don'ts:**
❌ Don't use buttons for navigation  
❌ Don't use multiple primary buttons per section  
❌ Don't make buttons smaller than 44px on mobile  
❌ Don't use generic text like "Click Here"  
❌ Don't forget loading and error states  
❌ Don't rely solely on color for meaning  
❌ Don't make destructive actions too easy  
❌ Don't use buttons for non-interactive content  

---

### Input Component

#### Purpose
Input components collect user data and should provide clear feedback about validation states and requirements.

#### When to Use
- Collecting user information in forms
- Search functionality
- Filtering and sorting interfaces
- Settings and configuration panels

#### When Not to Use
- Displaying read-only information
- Actions that don't require user input
- Navigation elements

#### Input Types and Usage

**Text Input**
```tsx
// ✅ DO: Use proper labels and validation
<FormField 
  label="Company Name" 
  required 
  error={errors.company}
  helperText="This helps us personalize your experience"
>
  <Input 
    type="text" 
    placeholder="Acme Startup Inc."
    value={company}
    onChange={setCompany}
    error={!!errors.company}
  />
</FormField>

// ❌ DON'T: Use placeholder as label
<Input 
  type="text" 
  placeholder="Company Name" // Should have proper label
  value={company}
  onChange={setCompany}
/>
```

**Email Input**
```tsx
// ✅ DO: Use email type for proper validation and keyboard
<FormField label="Email Address" required error={errors.email}>
  <Input 
    type="email" 
    placeholder="founder@startup.com"
    value={email}
    onChange={setEmail}
    autoComplete="email"
  />
</FormField>

// ❌ DON'T: Use text type for email
<Input 
  type="text" // Should be "email"
  placeholder="Email"
  value={email}
  onChange={setEmail}
/>
```

**Password Input**
```tsx
// ✅ DO: Provide password visibility toggle
const [showPassword, setShowPassword] = useState(false);

<FormField label="Password" required error={errors.password}>
  <Input 
    type={showPassword ? "text" : "password"}
    placeholder="Enter secure password"
    value={password}
    onChange={setPassword}
    icon={
      <button 
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? <EyeOff /> : <Eye />}
      </button>
    }
    iconPosition="right"
  />
</FormField>
```

**Textarea**
```tsx
// ✅ DO: Use for longer text input
<FormField 
  label="Project Description" 
  error={errors.description}
  helperText="Tell us about your goals and requirements"
>
  <Input 
    type="textarea" 
    placeholder="Describe your AI project goals, target audience, and key features..."
    value={description}
    onChange={setDescription}
    rows={4}
    maxLength={500}
  />
</FormField>

// ✅ DO: Show character count for limited inputs
<div className="relative">
  <Input 
    type="textarea"
    value={description}
    onChange={setDescription}
    maxLength={500}
  />
  <div className="absolute bottom-2 right-2 text-xs text-gray-400">
    {description.length}/500
  </div>
</div>
```

#### Validation and Error Handling

```tsx
// ✅ DO: Provide clear, helpful error messages
const validateEmail = (email) => {
  if (!email) return "Email is required";
  if (!/\S+@\S+\.\S+/.test(email)) return "Please enter a valid email address";
  return null;
};

<FormField 
  label="Email Address" 
  required 
  error={errors.email}
>
  <Input 
    type="email"
    value={email}
    onChange={(value) => {
      setEmail(value);
      setErrors(prev => ({ ...prev, email: validateEmail(value) }));
    }}
    onBlur={() => {
      setErrors(prev => ({ ...prev, email: validateEmail(email) }));
    }}
    error={!!errors.email}
  />
</FormField>

// ❌ DON'T: Use generic or unhelpful error messages
<FormField label="Email" error="Invalid input"> {/* Too generic */}
  <Input type="email" value={email} onChange={setEmail} />
</FormField>
```

#### Success States

```tsx
// ✅ DO: Show success feedback when appropriate
<FormField 
  label="Email Address" 
  success={isEmailVerified ? "Email verified successfully" : null}
>
  <Input 
    type="email"
    value={email}
    onChange={setEmail}
    success={isEmailVerified}
  />
</FormField>
```

#### Accessibility Guidelines

```tsx
// ✅ DO: Use proper labels and ARIA attributes
<FormField 
  label="Phone Number" 
  required 
  error={errors.phone}
  helperText="We'll only call during business hours"
>
  <Input 
    type="tel"
    value={phone}
    onChange={setPhone}
    aria-describedby="phone-help phone-error"
    aria-invalid={!!errors.phone}
    autoComplete="tel"
  />
</FormField>

// ✅ DO: Use appropriate autocomplete attributes
<Input 
  type="text"
  autoComplete="given-name" // For first name
  // autoComplete="family-name" // For last name
  // autoComplete="organization" // For company
  // autoComplete="street-address" // For address
/>

// ❌ DON'T: Disable autocomplete unnecessarily
<Input 
  type="email"
  autoComplete="off" // Usually not recommended
/>
```

#### Do's and Don'ts Summary

**Do's:**
✅ Use semantic input types (email, tel, url, number)  
✅ Provide clear labels and helper text  
✅ Show validation states clearly  
✅ Use appropriate placeholder text  
✅ Include autocomplete attributes  
✅ Provide character limits when needed  
✅ Show password visibility toggles  
✅ Use proper error messaging  

**Don'ts:**
❌ Don't use placeholder text as labels  
❌ Don't make required fields unclear  
❌ Don't use generic error messages  
❌ Don't disable autocomplete without reason  
❌ Don't make forms unnecessarily long  
❌ Don't forget mobile keyboard optimization  
❌ Don't ignore accessibility requirements  
❌ Don't validate on every keystroke (use onBlur)  

---

### Icon Component

#### Purpose
Icons provide visual cues and enhance understanding of interface elements. They should be used consistently and meaningfully.

#### When to Use
- Enhancing button and link meaning
- Indicating status or state
- Navigation elements
- Data visualization
- Decorative elements (sparingly)

#### When Not to Use
- As the sole means of communication
- When text would be clearer
- Inconsistently across similar elements

#### Icon Usage Guidelines

**Icon with Text**
```tsx
// ✅ DO: Use icons to enhance text meaning
<Button variant="primary" icon={<Download />} iconPosition="left">
  Download Report
</Button>

<Button variant="secondary" icon={<ArrowRight />} iconPosition="right">
  Learn More
</Button>

// ✅ DO: Use consistent icon positioning
<nav>
  <NavLink icon={<Home />} iconPosition="left">Home</NavLink>
  <NavLink icon={<User />} iconPosition="left">About</NavLink>
  <NavLink icon={<Mail />} iconPosition="left">Contact</NavLink>
</nav>
```

**Icon-Only Elements**
```tsx
// ✅ DO: Always provide accessible labels for icon-only elements
<button 
  className="icon-button"
  aria-label="Close modal"
  onClick={onClose}
>
  <X className="w-5 h-5" />
</button>

<Link 
  href="/search"
  aria-label="Search"
  className="icon-link"
>
  <Search className="w-5 h-5" />
</Link>

// ❌ DON'T: Use icon-only elements without labels
<button onClick={onClose}>
  <X className="w-5 h-5" /> {/* No accessible label */}
</button>
```

**Status Icons**
```tsx
// ✅ DO: Use consistent icons for status indication
const StatusIcon = ({ status }) => {
  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-500" />,
    warning: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
    error: <XCircle className="w-5 h-5 text-red-500" />,
    info: <Info className="w-5 h-5 text-blue-500" />
  };
  
  return icons[status] || null;
};

// ✅ DO: Include text for screen readers
<div className="flex items-center gap-2">
  <StatusIcon status="success" />
  <span>Project completed successfully</span>
</div>
```

**Icon Sizes**
```tsx
// ✅ DO: Use consistent sizing scale
<Icon name="star" size="xs" />  {/* 12px - small decorative */}
<Icon name="star" size="sm" />  {/* 16px - inline with text */}
<Icon name="star" size="md" />  {/* 20px - buttons, navigation */}
<Icon name="star" size="lg" />  {/* 24px - headers, emphasis */}
<Icon name="star" size="xl" />  {/* 32px - hero sections */}

// ❌ DON'T: Use arbitrary sizes
<Icon name="star" className="w-7 h-7" /> {/* Non-standard size */}
```

#### Icon Library Guidelines

**Primary Icons (Heroicons)**
```tsx
// ✅ DO: Use Heroicons for UI elements
import { 
  HomeIcon, 
  UserIcon, 
  CogIcon,
  ChevronRightIcon 
} from '@heroicons/react/24/outline';

<Button icon={<ChevronRightIcon />}>
  Continue
</Button>
```

**Secondary Icons (Lucide)**
```tsx
// ✅ DO: Use Lucide for additional icons not in Heroicons
import { 
  Brain, 
  Zap, 
  Rocket,
  Code 
} from 'lucide-react';

<FeatureCard icon={<Brain />} title="AI-Powered" />
```

**Custom Icons**
```tsx
// ✅ DO: Create custom icons for brand-specific elements
const MindsraftIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    {/* Custom SVG path */}
  </svg>
);

// ✅ DO: Follow same sizing conventions
<MindsraftIcon className="w-6 h-6" />
```

#### Do's and Don'ts Summary

**Do's:**
✅ Use icons consistently across similar elements  
✅ Provide accessible labels for icon-only elements  
✅ Use standard sizing scale  
✅ Choose icons that clearly represent their meaning  
✅ Use consistent icon style (outline vs filled)  
✅ Test icon recognition with users  
✅ Use icons to enhance, not replace, clear text  
✅ Maintain consistent visual weight  

**Don'ts:**
❌ Don't use icons as the sole means of communication  
❌ Don't mix different icon styles inconsistently  
❌ Don't use decorative icons excessively  
❌ Don't use unclear or ambiguous icons  
❌ Don't forget to test icon accessibility  
❌ Don't use icons that don't match your brand  
❌ Don't make icons too small to recognize  
❌ Don't use icons without considering cultural differences  

---

## Molecular Components (Molecules)

### Card Component

#### Purpose
Cards group related content and actions in a digestible format. They should contain focused, actionable content.

#### When to Use
- Displaying related information together
- Creating scannable content layouts
- Showcasing portfolio items or case studies
- Organizing dashboard content
- Product or service listings

#### When Not to Use
- Single pieces of information that don't need grouping
- Long-form content that doesn't fit card format
- When simpler list format would be more appropriate

#### Card Variants and Usage

**Basic Content Card**
```tsx
// ✅ DO: Group related content logically
<Card variant="elevated" padding="lg">
  <div className="space-y-4">
    <div className="flex items-center gap-3">
      <Brain className="w-8 h-8 text-ai-primary" />
      <h3 className="text-xl font-semibold">AI Integration</h3>
    </div>
    <p className="text-gray-600">
      Seamlessly integrate AI capabilities into your existing product 
      to enhance user experience and drive engagement.
    </p>
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-500">Starting at $15k</span>
      <Button variant="tertiary" size="sm">
        Learn More
      </Button>
    </div>
  </div>
</Card>

// ❌ DON'T: Overcrowd cards with too much content
<Card>
  <h3>Title</h3>
  <p>Long paragraph of text...</p>
  <img src="..." />
  <div>More content...</div>
  <Button>Action 1</Button>
  <Button>Action 2</Button>
  <Button>Action 3</Button> {/* Too many actions */}
</Card>
```

**Interactive Card**
```tsx
// ✅ DO: Make interactive cards clearly clickable
<Card 
  variant="default" 
  padding="lg"
  onClick={() => navigate('/case-study/startup-ai')}
  className="cursor-pointer hover:shadow-card-hover transition-shadow group"
>
  <div className="space-y-4">
    <img 
      src="/images/case-study.jpg" 
      alt="Startup AI Case Study"
      className="w-full h-48 object-cover rounded-lg"
    />
    <div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-ai-primary transition-colors">
        340% Increase in User Engagement
      </h3>
      <p className="text-gray-600 text-sm mb-4">
        How we helped a Series A startup implement AI personalization
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">Case Study</span>
        <ArrowRight className="w-4 h-4 text-ai-primary group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </div>
</Card>

// ❌ DON'T: Make non-interactive cards look clickable
<Card className="hover:shadow-lg cursor-pointer"> {/* Looks clickable but isn't */}
  <h3>Static Content</h3>
  <p>This card doesn't actually do anything when clicked</p>
</Card>
```

**Team Member Card**
```tsx
// ✅ DO: Include relevant information and clear hierarchy
<Card variant="outlined" padding="lg">
  <div className="text-center space-y-4">
    <img 
      src="/images/team/john-doe.jpg" 
      alt="John Doe"
      className="w-20 h-20 rounded-full mx-auto object-cover"
    />
    <div>
      <h3 className="font-semibold text-lg">John Doe</h3>
      <p className="text-ai-primary text-sm">AI Engineering Lead</p>
    </div>
    <p className="text-gray-600 text-sm">
      10+ years building AI solutions for startups. 
      Former Google AI researcher.
    </p>
    <div className="flex justify-center gap-3">
      <Link href="https://linkedin.com/in/johndoe" aria-label="John's LinkedIn">
        <Linkedin className="w-5 h-5 text-gray-400 hover:text-ai-primary" />
      </Link>
      <Link href="https://github.com/johndoe" aria-label="John's GitHub">
        <Github className="w-5 h-5 text-gray-400 hover:text-ai-primary" />
      </Link>
    </div>
  </div>
</Card>
```

**Testimonial Card**
```tsx
// ✅ DO: Include credibility indicators
<Card variant="filled" padding="lg" className="bg-ai-light">
  <div className="space-y-4">
    <div className="flex items-start gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    <blockquote className="text-gray-700 italic">
      "Mindscraft transformed our product with AI features that increased 
      user engagement by 340%. Their expertise and transparent process 
      made the entire project seamless."
    </blockquote>
    <div className="flex items-center gap-3">
      <img 
        src="/images/clients/sarah-chen.jpg" 
        alt="Sarah Chen"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <div className="font-medium text-sm">Sarah Chen</div>
        <div className="text-gray-500 text-xs">CEO, TechStart Inc.</div>
      </div>
    </div>
  </div>
</Card>
```

#### Card Layout Guidelines

**Grid Layouts**
```tsx
// ✅ DO: Use consistent grid layouts
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {services.map((service) => (
    <ServiceCard key={service.id} service={service} />
  ))}
</div>

// ✅ DO: Handle different content lengths gracefully
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
  {/* items-start prevents cards from stretching */}
  {cards.map((card) => (
    <Card key={card.id} className="h-fit">
      {/* Content */}
    </Card>
  ))}
</div>
```

**Responsive Behavior**
```tsx
// ✅ DO: Ensure cards work well on all screen sizes
<Card className="w-full max-w-sm mx-auto md:max-w-none">
  {/* Card content */}
</Card>

// ✅ DO: Adjust padding for mobile
<Card 
  padding="md" // Smaller padding on mobile
  className="md:p-6" // Larger padding on desktop
>
  {/* Content */}
</Card>
```

#### Accessibility Guidelines

```tsx
// ✅ DO: Use proper semantic markup
<Card as="article" role="article">
  <header>
    <h3>Card Title</h3>
  </header>
  <div>
    <p>Card content...</p>
  </div>
  <footer>
    <Button>Action</Button>
  </footer>
</Card>

// ✅ DO: Provide keyboard navigation for interactive cards
<Card 
  tabIndex={0}
  role="button"
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }}
  aria-label="View case study details"
>
  {/* Card content */}
</Card>
```

#### Do's and Don'ts Summary

**Do's:**
✅ Group related content logically  
✅ Use consistent spacing and padding  
✅ Include clear visual hierarchy  
✅ Provide hover states for interactive cards  
✅ Optimize images for web delivery  
✅ Use semantic HTML structure  
✅ Test keyboard navigation  
✅ Ensure content is scannable  

**Don'ts:**
❌ Don't overcrowd cards with too much content  
❌ Don't use cards for single pieces of information  
❌ Don't make non-interactive cards look clickable  
❌ Don't use inconsistent card styles  
❌ Don't forget mobile responsiveness  
❌ Don't ignore accessibility requirements  
❌ Don't use cards when simpler layouts would work  
❌ Don't make cards too wide for comfortable reading  

---

### Form Field Component

#### Purpose
Form fields provide a consistent structure for input elements with labels, validation, and helper text.

#### When to Use
- Any form input that needs a label
- Inputs requiring validation feedback
- Complex forms with helper text
- Consistent form styling across the application

#### When Not to Use
- Simple search inputs without validation
- Inputs that are part of a larger composite component
- When custom styling is required that breaks the pattern

#### Form Field Structure

**Basic Form Field**
```tsx
// ✅ DO: Use complete form field structure
<FormField 
  label="Email Address" 
  required 
  error={errors.email}
  helperText="We'll never share your email with third parties"
>
  <Input 
    type="email" 
    placeholder="your@email.com"
    value={email}
    onChange={setEmail}
    error={!!errors.email}
  />
</FormField>

// ❌ DON'T: Use inputs without proper labels
<Input 
  type="email" 
  placeholder="Email Address" // Placeholder is not a label
  value={email}
  onChange={setEmail}
/>
```

**Required Field Indication**
```tsx
// ✅ DO: Clearly indicate required fields
<FormField 
  label="Company Name" 
  required 
  error={errors.company}
>
  <Input 
    type="text"
    value={company}
    onChange={setCompany}
    required
  />
</FormField>

// ✅ DO: Use consistent required field styling
<FormField 
  label={
    <span>
      Email Address 
      <span className="text-red-500 ml-1" aria-label="required">*</span>
    </span>
  }
  required
>
  <Input type="email" value={email} onChange={setEmail} />
</FormField>
```

**Helper Text Usage**
```tsx
// ✅ DO: Provide helpful context and instructions
<FormField 
  label="Password" 
  required 
  error={errors.password}
  helperText="Must be at least 8 characters with uppercase, lowercase, and numbers"
>
  <Input 
    type="password"
    value={password}
    onChange={setPassword}
  />
</FormField>

// ✅ DO: Use helper text for formatting requirements
<FormField 
  label="Phone Number" 
  error={errors.phone}
  helperText="Format: (555) 123-4567"
>
  <Input 
    type="tel"
    placeholder="(555) 123-4567"
    value={phone}
    onChange={setPhone}
  />
</FormField>

// ❌ DON'T: Use helper text for obvious information
<FormField 
  label="Email Address" 
  helperText="Enter your email address" // Redundant
>
  <Input type="email" value={email} onChange={setEmail} />
</FormField>
```

**Error Handling**
```tsx
// ✅ DO: Provide specific, actionable error messages
const validateEmail = (email) => {
  if (!email) return "Email address is required";
  if (!/\S+@\S+\.\S+/.test(email)) return "Please enter a valid email address";
  if (email.length > 254) return "Email address is too long";
  return null;
};

<FormField 
  label="Email Address" 
  required 
  error={errors.email}
>
  <Input 
    type="email"
    value={email}
    onChange={(value) => {
      setEmail(value);
      // Clear error on change
      if (errors.email) {
        setErrors(prev => ({ ...prev, email: null }));
      }
    }}
    onBlur={() => {
      // Validate on blur
      setErrors(prev => ({ ...prev, email: validateEmail(email) }));
    }}
    error={!!errors.email}
  />
</FormField>

// ❌ DON'T: Use generic or unhelpful error messages
<FormField 
  label="Email" 
  error="Invalid" // Too generic
>
  <Input type="email" value={email} onChange={setEmail} />
</FormField>
```

**Success States**
```tsx
// ✅ DO: Show success feedback when appropriate
<FormField 
  label="Email Address" 
  success={isEmailVerified ? "Email verified successfully" : null}
>
  <Input 
    type="email"
    value={email}
    onChange={setEmail}
    success={isEmailVerified}
  />
</FormField>
```

#### Form Layout Guidelines

**Form Spacing**
```tsx
// ✅ DO: Use consistent spacing between form fields
<form className="space-y-6">
  <FormField label="First Name" required>
    <Input type="text" value={firstName} onChange={setFirstName} />
  </FormField>
  
  <FormField label="Last Name" required>
    <Input type="text" value={lastName} onChange={setLastName} />
  </FormField>
  
  <FormField label="Email Address" required>
    <Input type="email" value={email} onChange={setEmail} />
  </FormField>
  
  <div className="pt-4"> {/* Extra space before actions */}
    <Button type="submit" variant="primary">
      Submit
    </Button>
  </div>
</form>
```

**Multi-Column Forms**
```tsx
// ✅ DO: Use responsive grid for multi-column forms
<form className="space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <FormField label="First Name" required>
      <Input type="text" value={firstName} onChange={setFirstName} />
    </FormField>
    
    <FormField label="Last Name" required>
      <Input type="text" value={lastName} onChange={setLastName} />
    </FormField>
  </div>
  
  <FormField label="Email Address" required>
    <Input type="email" value={email} onChange={setEmail} />
  </FormField>
  
  <FormField label="Message">
    <Input 
      type="textarea" 
      rows={4}
      value={message} 
      onChange={setMessage} 
    />
  </FormField>
</form>
```

#### Accessibility Guidelines

```tsx
// ✅ DO: Use proper ARIA attributes and associations
<FormField 
  label="Password" 
  required 
  error={errors.password}
  helperText="Must be at least 8 characters"
>
  <Input 
    type="password"
    value={password}
    onChange={setPassword}
    aria-describedby="password-help password-error"
    aria-invalid={!!errors.password}
    aria-required="true"
  />
</FormField>

// ✅ DO: Use fieldsets for related form groups
<fieldset>
  <legend className="text-lg font-semibold mb-4">Contact Information</legend>
  
  <div className="space-y-4">
    <FormField label="Email Address" required>
      <Input type="email" value={email} onChange={setEmail} />
    </FormField>
    
    <FormField label="Phone Number">
      <Input type="tel" value={phone} onChange={setPhone} />
    </FormField>
  </div>
</fieldset>
```

#### Do's and Don'ts Summary

**Do's:**
✅ Always use labels with form inputs  
✅ Clearly indicate required fields  
✅ Provide helpful, specific error messages  
✅ Use helper text for formatting requirements  
✅ Show success states when appropriate  
✅ Use consistent spacing and layout  
✅ Test with screen readers  
✅ Validate on blur, not on every keystroke  

**Don'ts:**
❌ Don't use placeholder text as labels  
❌ Don't use generic error messages  
❌ Don't make required fields unclear  
❌ Don't validate on every keystroke  
❌ Don't forget success feedback  
❌ Don't ignore accessibility requirements  
❌ Don't make forms unnecessarily complex  
❌ Don't use helper text for obvious information  

---

## Organism Components (Organisms)

### Header Component

#### Purpose
The header provides consistent navigation and branding across all pages. It should be the primary wayfinding tool for users.

#### When to Use
- Every page of the website
- As the primary navigation system
- To maintain brand consistency
- To provide access to key actions

#### When Not to Use
- In print layouts
- In modal dialogs (use modal headers instead)
- When a different navigation pattern is more appropriate

#### Header Structure and Usage

**Basic Header Implementation**
```tsx
// ✅ DO: Include all essential header elements
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Always visible and clickable */}
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="h-8 w-auto" />
            <span className="font-semibold text-brand-dark">
              Mindscraft
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <NavigationLink 
                key={item.href} 
                href={item.href}
                active={pathname === item.href}
              >
                {item.name}
              </NavigationLink>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm">
              Start Project
            </Button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)}
        items={navigationItems}
        currentPath={pathname}
      />
    </header>
  );
};
```

**Navigation Link Component**
```tsx
// ✅ DO: Create consistent navigation links
const NavigationLink = ({ href, active, children, ...props }) => (
  <Link
    href={href}
    className={`
      text-sm font-medium transition-colors relative
      ${active 
        ? 'text-ai-primary' 
        : 'text-gray-600 hover:text-gray-900'
      }
    `}
    {...props}
  >
    {children}
    {active && (
      <span className="absolute -bottom-4 left-0 right-0 h-0.5 bg-ai-primary" />
    )}
  </Link>
);

// ❌ DON'T: Use inconsistent link styling
<nav>
  <a href="/services" className="text-blue-500">Services</a> {/* Different color */}
  <a href="/work" className="text-gray-600">Work</a>
  <a href="/about" className="font-bold">About</a> {/* Different weight */}
</nav>
```

**Mobile Menu Implementation**
```tsx
// ✅ DO: Create accessible mobile menu
const MobileMenu = ({ isOpen, onClose, items, currentPath }) => {
  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent scroll
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div className="md:hidden bg-white border-b border-gray-200">
      <nav className="px-4 py-2 space-y-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`
              block px-3 py-2 text-base font-medium rounded-md transition-colors
              ${currentPath === item.href
                ? 'text-ai-primary bg-ai-light'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }
            `}
            onClick={onClose}
          >
            {item.name}
          </Link>
        ))}
        
        <div className="pt-4 pb-2">
          <Button variant="primary" size="sm" fullWidth>
            Start Project
          </Button>
        </div>
      </nav>
    </div>
  );
};
```

#### Header Behavior Guidelines

**Sticky Header**
```tsx
// ✅ DO: Use sticky positioning for easy access
<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
  {/* Header content */}
</header>

// ✅ DO: Add background blur for visual separation
<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md">
  {/* Header content */}
</header>
```

**Active State Management**
```tsx
// ✅ DO: Show current page clearly
const Header = () => {
  const pathname = usePathname();
  
  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };
  
  return (
    <nav>
      {navigationItems.map((item) => (
        <NavigationLink 
          key={item.href}
          href={item.href}
          active={isActive(item.href)}
        >
          {item.name}
        </NavigationLink>
      ))}
    </nav>
  );
};
```

**Responsive Behavior**
```tsx
// ✅ DO: Hide/show elements appropriately
<header>
  <div className="flex items-center justify-between">
    <Logo />
    
    {/* Desktop navigation - hidden on mobile */}
    <nav className="hidden md:flex">
      {/* Navigation items */}
    </nav>
    
    {/* Desktop CTA - hidden on mobile */}
    <div className="hidden md:block">
      <Button>Start Project</Button>
    </div>
    
    {/* Mobile menu button - hidden on desktop */}
    <button className="md:hidden">
      <Menu />
    </button>
  </div>
</header>
```

#### Accessibility Guidelines

```tsx
// ✅ DO: Use proper ARIA attributes and semantic markup
<header role="banner">
  <nav role="navigation" aria-label="Main navigation">
    <ul>
      {navigationItems.map((item) => (
        <li key={item.href}>
          <Link 
            href={item.href}
            aria-current={isActive(item.href) ? 'page' : undefined}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
  
  <button
    aria-label="Toggle navigation menu"
    aria-expanded={mobileMenuOpen}
    aria-controls="mobile-menu"
  >
    <Menu />
  </button>
</header>

// ✅ DO: Manage focus properly in mobile menu
const MobileMenu = ({ isOpen, onClose }) => {
  const firstLinkRef = useRef(null);
  
  useEffect(() => {
    if (isOpen && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [isOpen]);
  
  return (
    <div id="mobile-menu" className={isOpen ? 'block' : 'hidden'}>
      <Link ref={firstLinkRef} href="/services">
        Services
      </Link>
      {/* Other links */}
    </div>
  );
};
```

#### Do's and Don'ts Summary

**Do's:**
✅ Keep navigation consistent across all pages  
✅ Show clear active states  
✅ Ensure mobile menu is accessible  
✅ Include prominent CTA in header  
✅ Use sticky positioning for easy access  
✅ Test keyboard navigation thoroughly  
✅ Provide proper ARIA labels  
✅ Make logo clickable (links to home)  

**Don'ts:**
❌ Don't overcrowd the navigation  
❌ Don't hide important pages in mobile menu only  
❌ Don't forget keyboard navigation support  
❌ Don't use unclear navigation labels  
❌ Don't make the header too tall on mobile  
❌ Don't ignore focus management  
❌ Don't use different navigation patterns inconsistently  
❌ Don't forget to test with screen readers  

---

This comprehensive component usage guide ensures consistent, accessible, and effective implementation of all design system components across the Mindscraft digital ecosystem. Each component includes specific implementation examples, accessibility guidelines, and clear do's and don'ts to prevent common mistakes and ensure high-quality user experiences.