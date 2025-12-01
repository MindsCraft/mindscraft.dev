# Animation and Interaction Principles

## Overview

This document defines the animation and interaction principles for the Mindscraft design system, ensuring consistent, purposeful, and accessible motion design across all digital touchpoints. Our animation philosophy balances technical sophistication with human-centered design.

---

## Animation Philosophy

### Core Principles

#### 1. Purpose-Driven Motion
Every animation must serve a specific purpose:
- **Feedback**: Confirm user actions and system responses
- **Attention**: Guide user focus to important elements
- **Continuity**: Show relationships between interface states
- **Personality**: Reinforce brand character without distraction

#### 2. Human-Centered Timing
Animations should feel natural and responsive:
- **Fast enough**: Don't make users wait unnecessarily
- **Slow enough**: Allow users to perceive and understand changes
- **Consistent**: Use predictable timing patterns across the system

#### 3. Respectful of Accessibility
Always consider users with different needs:
- **Reduced motion**: Respect `prefers-reduced-motion` settings
- **Cognitive load**: Avoid overwhelming or distracting animations
- **Focus management**: Ensure animations don't interfere with navigation

#### 4. Performance Conscious
Optimize for smooth, efficient animations:
- **Hardware acceleration**: Use transform and opacity when possible
- **60fps target**: Maintain smooth frame rates
- **Battery awareness**: Avoid unnecessary animations on mobile

---

## Animation Tokens

### Duration Scale

```css
:root {
  /* Duration tokens - based on human perception */
  --duration-instant: 0ms;        /* Immediate feedback */
  --duration-fast: 150ms;         /* Quick interactions */
  --duration-normal: 250ms;       /* Standard transitions */
  --duration-slow: 350ms;         /* Complex state changes */
  --duration-slower: 500ms;       /* Major transitions */
  --duration-slowest: 750ms;      /* Page-level changes */
  
  /* Semantic durations */
  --duration-button: var(--duration-fast);
  --duration-card: var(--duration-normal);
  --duration-modal: var(--duration-slow);
  --duration-page: var(--duration-slower);
  --duration-loading: var(--duration-slowest);
}
```

### Easing Functions

```css
:root {
  /* Easing curves - based on natural motion */
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);           /* Accelerating */
  --ease-out: cubic-bezier(0, 0, 0.2, 1);          /* Decelerating */
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);     /* Smooth curve */
  --ease-back: cubic-bezier(0.34, 1.56, 0.64, 1);  /* Slight overshoot */
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Bounce effect */
  
  /* Semantic easing */
  --ease-button: var(--ease-out);        /* Quick response */
  --ease-card: var(--ease-in-out);       /* Smooth transition */
  --ease-modal: var(--ease-out);         /* Gentle entrance */
  --ease-loading: var(--ease-in-out);    /* Continuous motion */
}
```

### Animation Properties

```css
:root {
  /* Transform origins */
  --origin-center: center;
  --origin-top: top;
  --origin-bottom: bottom;
  --origin-left: left;
  --origin-right: right;
  
  /* Scale values */
  --scale-sm: 0.95;
  --scale-md: 0.9;
  --scale-lg: 1.05;
  --scale-xl: 1.1;
  
  /* Translation values */
  --translate-xs: 4px;
  --translate-sm: 8px;
  --translate-md: 16px;
  --translate-lg: 24px;
  --translate-xl: 32px;
}
```

---

## Interaction States

### Button Interactions

#### Standard Button Animation
```css
.btn {
  /* Base state */
  transform: translateY(0);
  box-shadow: var(--shadow-button);
  transition: all var(--duration-button) var(--ease-button);
  will-change: transform, box-shadow;
}

.btn:hover {
  /* Hover state - lift effect */
  transform: translateY(-1px);
  box-shadow: var(--shadow-button-hover);
}

.btn:active {
  /* Active state - press effect */
  transform: translateY(0);
  box-shadow: var(--shadow-button);
  transition-duration: calc(var(--duration-button) / 2);
}

.btn:focus {
  /* Focus state - accessibility */
  box-shadow: var(--shadow-button), var(--shadow-focus);
}

/* Loading state animation */
.btn.loading {
  position: relative;
  color: transparent;
}

.btn.loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1rem;
  height: 1rem;
  margin: -0.5rem 0 0 -0.5rem;
  border: 2px solid transparent;
  border-top-color: currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

#### Primary CTA Animation
```css
.btn-primary {
  /* Enhanced animation for primary CTAs */
  position: relative;
  overflow: hidden;
}

.btn-primary::before {
  /* Shimmer effect */
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left var(--duration-slow) var(--ease-out);
}

.btn-primary:hover::before {
  left: 100%;
}
```

### Card Interactions

#### Card Hover Animation
```css
.card {
  /* Base state */
  transform: translateY(0);
  box-shadow: var(--shadow-card);
  transition: all var(--duration-card) var(--ease-card);
  will-change: transform, box-shadow;
}

.card:hover {
  /* Hover state - lift and enhance shadow */
  transform: translateY(-2px);
  box-shadow: var(--shadow-card-hover);
}

.card.interactive {
  cursor: pointer;
}

.card.interactive:active {
  /* Active state - slight press */
  transform: translateY(-1px);
  transition-duration: calc(var(--duration-card) / 2);
}
```

#### Card Content Animation
```css
.card-content {
  /* Stagger animation for card content */
  opacity: 0;
  transform: translateY(var(--translate-sm));
  animation: slideUp var(--duration-normal) var(--ease-out) forwards;
}

.card-content:nth-child(1) { animation-delay: 0ms; }
.card-content:nth-child(2) { animation-delay: 50ms; }
.card-content:nth-child(3) { animation-delay: 100ms; }
.card-content:nth-child(4) { animation-delay: 150ms; }

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Form Interactions

#### Input Field Animation
```css
.input {
  /* Base state */
  border-color: var(--color-border-default);
  box-shadow: none;
  transition: all var(--duration-fast) var(--ease-out);
}

.input:focus {
  /* Focus state - border and shadow */
  border-color: var(--color-ai-primary);
  box-shadow: var(--shadow-focus);
  transform: scale(1.01);
}

.input.error {
  /* Error state - shake animation */
  border-color: var(--color-error);
  animation: shake var(--duration-normal) var(--ease-out);
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}
```

#### Form Validation Animation
```css
.form-field {
  position: relative;
}

.error-message {
  /* Error message slide down */
  opacity: 0;
  transform: translateY(-var(--translate-xs));
  transition: all var(--duration-fast) var(--ease-out);
  max-height: 0;
  overflow: hidden;
}

.error-message.show {
  opacity: 1;
  transform: translateY(0);
  max-height: 2rem;
}

.success-message {
  /* Success message fade in */
  opacity: 0;
  transform: scale(var(--scale-sm));
  transition: all var(--duration-normal) var(--ease-back);
}

.success-message.show {
  opacity: 1;
  transform: scale(1);
}
```

### Navigation Interactions

#### Menu Animation
```css
.mobile-menu {
  /* Mobile menu slide down */
  opacity: 0;
  transform: translateY(-var(--translate-md));
  transition: all var(--duration-normal) var(--ease-out);
  max-height: 0;
  overflow: hidden;
}

.mobile-menu.open {
  opacity: 1;
  transform: translateY(0);
  max-height: 100vh;
}

.mobile-menu-item {
  /* Stagger menu items */
  opacity: 0;
  transform: translateX(-var(--translate-md));
  transition: all var(--duration-fast) var(--ease-out);
}

.mobile-menu.open .mobile-menu-item:nth-child(1) {
  animation: slideInLeft var(--duration-fast) var(--ease-out) 50ms forwards;
}

.mobile-menu.open .mobile-menu-item:nth-child(2) {
  animation: slideInLeft var(--duration-fast) var(--ease-out) 100ms forwards;
}

.mobile-menu.open .mobile-menu-item:nth-child(3) {
  animation: slideInLeft var(--duration-fast) var(--ease-out) 150ms forwards;
}

@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

#### Link Hover Animation
```css
.nav-link {
  position: relative;
  color: var(--color-text-secondary);
  transition: color var(--duration-fast) var(--ease-out);
}

.nav-link::after {
  /* Animated underline */
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-ai-primary);
  transition: width var(--duration-normal) var(--ease-out);
}

.nav-link:hover {
  color: var(--color-text-primary);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.active::after {
  width: 100%;
}
```

---

## Page Transitions

### Page Load Animations

#### Fade In Animation
```css
.page-content {
  opacity: 0;
  animation: fadeIn var(--duration-page) var(--ease-out) forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}
```

#### Slide Up Animation
```css
.section {
  opacity: 0;
  transform: translateY(var(--translate-lg));
  transition: all var(--duration-slow) var(--ease-out);
}

.section.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger sections */
.section:nth-child(1) { transition-delay: 0ms; }
.section:nth-child(2) { transition-delay: 100ms; }
.section:nth-child(3) { transition-delay: 200ms; }
.section:nth-child(4) { transition-delay: 300ms; }
```

#### Hero Section Animation
```css
.hero-content {
  opacity: 0;
  transform: translateY(var(--translate-xl));
  animation: heroEnter var(--duration-slower) var(--ease-out) forwards;
}

.hero-title {
  animation-delay: 200ms;
}

.hero-subtitle {
  animation-delay: 400ms;
}

.hero-cta {
  animation-delay: 600ms;
}

@keyframes heroEnter {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Modal Animations

#### Modal Enter/Exit
```css
.modal-overlay {
  /* Overlay fade */
  opacity: 0;
  transition: opacity var(--duration-modal) var(--ease-out);
}

.modal-overlay.open {
  opacity: 1;
}

.modal-content {
  /* Modal scale and fade */
  opacity: 0;
  transform: scale(var(--scale-md)) translateY(-var(--translate-lg));
  transition: all var(--duration-modal) var(--ease-out);
}

.modal-content.open {
  opacity: 1;
  transform: scale(1) translateY(0);
}

/* Modal exit animation */
.modal-content.closing {
  opacity: 0;
  transform: scale(var(--scale-sm)) translateY(var(--translate-sm));
  transition-duration: calc(var(--duration-modal) * 0.75);
}
```

### Loading Animations

#### Skeleton Loading
```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-gray-200) 25%,
    var(--color-gray-100) 50%,
    var(--color-gray-200) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

#### Spinner Animation
```css
.spinner {
  width: 2rem;
  height: 2rem;
  border: 2px solid var(--color-gray-200);
  border-top-color: var(--color-ai-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.spinner-dots {
  display: flex;
  gap: 0.25rem;
}

.spinner-dot {
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--color-ai-primary);
  border-radius: 50%;
  animation: bounce 1.4s infinite ease-in-out both;
}

.spinner-dot:nth-child(1) { animation-delay: -0.32s; }
.spinner-dot:nth-child(2) { animation-delay: -0.16s; }
.spinner-dot:nth-child(3) { animation-delay: 0s; }

@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
```

#### Progress Bar Animation
```css
.progress-bar {
  width: 100%;
  height: 4px;
  background-color: var(--color-gray-200);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background-color: var(--color-ai-primary);
  border-radius: var(--radius-full);
  transition: width var(--duration-normal) var(--ease-out);
}

.progress-indeterminate {
  width: 30%;
  animation: indeterminate 2s infinite linear;
}

@keyframes indeterminate {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
}
```

---

## Micro-interactions

### Icon Animations

#### Icon Hover Effects
```css
.icon-button {
  transition: transform var(--duration-fast) var(--ease-out);
}

.icon-button:hover {
  transform: scale(var(--scale-lg));
}

.icon-rotate:hover {
  transform: rotate(15deg);
}

.icon-bounce:hover {
  animation: iconBounce var(--duration-normal) var(--ease-bounce);
}

@keyframes iconBounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(var(--scale-lg)); }
}
```

#### Animated Icons
```css
.hamburger-icon {
  transition: transform var(--duration-fast) var(--ease-out);
}

.hamburger-icon.open {
  transform: rotate(90deg);
}

.chevron-icon {
  transition: transform var(--duration-fast) var(--ease-out);
}

.chevron-icon.expanded {
  transform: rotate(180deg);
}

.heart-icon {
  transition: all var(--duration-fast) var(--ease-out);
}

.heart-icon.liked {
  color: var(--color-error);
  transform: scale(var(--scale-lg));
  animation: heartBeat var(--duration-normal) var(--ease-out);
}

@keyframes heartBeat {
  0%, 100% { transform: scale(1); }
  25% { transform: scale(1.2); }
  50% { transform: scale(1.1); }
  75% { transform: scale(1.15); }
}
```

### Notification Animations

#### Toast Notifications
```css
.toast {
  opacity: 0;
  transform: translateX(100%);
  transition: all var(--duration-normal) var(--ease-out);
}

.toast.show {
  opacity: 1;
  transform: translateX(0);
}

.toast.hide {
  opacity: 0;
  transform: translateX(100%);
  transition-duration: calc(var(--duration-normal) * 0.75);
}

/* Toast types */
.toast.success {
  animation: successPulse var(--duration-slow) var(--ease-out);
}

@keyframes successPulse {
  0%, 100% { box-shadow: var(--shadow-md); }
  50% { box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.2), var(--shadow-md); }
}
```

#### Alert Animations
```css
.alert {
  opacity: 0;
  transform: translateY(-var(--translate-md));
  animation: alertSlideDown var(--duration-normal) var(--ease-out) forwards;
}

@keyframes alertSlideDown {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.alert.dismissing {
  animation: alertSlideUp var(--duration-fast) var(--ease-in) forwards;
}

@keyframes alertSlideUp {
  to {
    opacity: 0;
    transform: translateY(-var(--translate-md));
    max-height: 0;
    padding: 0;
    margin: 0;
  }
}
```

---

## Accessibility Considerations

### Reduced Motion Support

#### Respecting User Preferences
```css
/* Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  /* Keep essential animations but make them instant */
  .loading-spinner {
    animation: none;
  }
  
  .loading-spinner::after {
    content: '⏳';
    font-size: 1.5rem;
  }
}
```

#### Alternative Feedback Methods
```css
/* Provide alternative feedback for reduced motion */
@media (prefers-reduced-motion: reduce) {
  .btn:hover {
    /* Use color change instead of transform */
    background-color: var(--color-ai-dark);
    transform: none;
  }
  
  .card:hover {
    /* Use border instead of shadow/transform */
    border-color: var(--color-ai-primary);
    transform: none;
    box-shadow: var(--shadow-card);
  }
}
```

### Focus Management

#### Focus Animations
```css
.focusable {
  transition: all var(--duration-fast) var(--ease-out);
}

.focusable:focus {
  outline: 2px solid var(--color-ai-primary);
  outline-offset: 2px;
  /* Subtle scale for focus indication */
  transform: scale(1.02);
}

/* Skip focus animation for reduced motion */
@media (prefers-reduced-motion: reduce) {
  .focusable:focus {
    transform: none;
  }
}
```

#### Focus Trap Animation
```css
.modal.open .focusable {
  /* Animate focus trap elements */
  opacity: 0;
  animation: fadeInFocus var(--duration-normal) var(--ease-out) forwards;
}

.modal.open .focusable:nth-child(1) { animation-delay: 0ms; }
.modal.open .focusable:nth-child(2) { animation-delay: 50ms; }
.modal.open .focusable:nth-child(3) { animation-delay: 100ms; }

@keyframes fadeInFocus {
  to { opacity: 1; }
}
```

---

## Performance Optimization

### Hardware Acceleration

#### GPU-Accelerated Properties
```css
/* Use transform and opacity for smooth animations */
.optimized-animation {
  /* Trigger hardware acceleration */
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* Remove will-change after animation */
.animation-complete {
  will-change: auto;
}
```

#### Efficient Animations
```css
/* Good - uses transform */
.slide-element {
  transform: translateX(0);
  transition: transform var(--duration-normal) var(--ease-out);
}

.slide-element.moved {
  transform: translateX(100px);
}

/* Avoid - causes layout recalculation */
.inefficient-slide {
  left: 0;
  transition: left var(--duration-normal) var(--ease-out);
}

.inefficient-slide.moved {
  left: 100px;
}
```

### Animation Optimization

#### Contain Property
```css
.animated-container {
  /* Limit repaints to container */
  contain: layout style paint;
}

.complex-animation {
  /* Isolate complex animations */
  isolation: isolate;
  contain: strict;
}
```

#### Intersection Observer for Performance
```javascript
// Only animate elements when they're visible
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements
document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
```

---

## Implementation Guidelines

### CSS Animation Classes

#### Utility Classes
```css
/* Fade animations */
.fade-in {
  opacity: 0;
  animation: fadeIn var(--duration-normal) var(--ease-out) forwards;
}

.fade-out {
  animation: fadeOut var(--duration-normal) var(--ease-out) forwards;
}

/* Slide animations */
.slide-up {
  opacity: 0;
  transform: translateY(var(--translate-lg));
  animation: slideUp var(--duration-normal) var(--ease-out) forwards;
}

.slide-down {
  opacity: 0;
  transform: translateY(-var(--translate-lg));
  animation: slideDown var(--duration-normal) var(--ease-out) forwards;
}

.slide-left {
  opacity: 0;
  transform: translateX(var(--translate-lg));
  animation: slideLeft var(--duration-normal) var(--ease-out) forwards;
}

.slide-right {
  opacity: 0;
  transform: translateX(-var(--translate-lg));
  animation: slideRight var(--duration-normal) var(--ease-out) forwards;
}

/* Scale animations */
.scale-in {
  opacity: 0;
  transform: scale(var(--scale-md));
  animation: scaleIn var(--duration-normal) var(--ease-out) forwards;
}

.scale-out {
  animation: scaleOut var(--duration-normal) var(--ease-out) forwards;
}

/* Rotation animations */
.rotate-in {
  opacity: 0;
  transform: rotate(-180deg);
  animation: rotateIn var(--duration-slow) var(--ease-out) forwards;
}

/* Bounce animation */
.bounce {
  animation: bounce var(--duration-slow) var(--ease-bounce);
}

/* Pulse animation */
.pulse {
  animation: pulse 2s infinite;
}

/* Shake animation */
.shake {
  animation: shake var(--duration-normal) var(--ease-out);
}
```

#### Keyframe Definitions
```css
@keyframes fadeIn {
  to { opacity: 1; }
}

@keyframes fadeOut {
  to { opacity: 0; }
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideDown {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes scaleOut {
  to {
    opacity: 0;
    transform: scale(var(--scale-sm));
  }
}

@keyframes rotateIn {
  to {
    opacity: 1;
    transform: rotate(0deg);
  }
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
  20%, 40%, 60%, 80% { transform: translateX(4px); }
}
```

### JavaScript Animation Helpers

#### Animation Utilities
```javascript
// Animation utility functions
const AnimationUtils = {
  // Add animation class and remove after completion
  animate(element, animationClass, callback) {
    element.classList.add(animationClass);
    
    const handleAnimationEnd = () => {
      element.classList.remove(animationClass);
      element.removeEventListener('animationend', handleAnimationEnd);
      if (callback) callback();
    };
    
    element.addEventListener('animationend', handleAnimationEnd);
  },
  
  // Stagger animations for multiple elements
  staggerAnimate(elements, animationClass, delay = 100) {
    elements.forEach((element, index) => {
      setTimeout(() => {
        this.animate(element, animationClass);
      }, index * delay);
    });
  },
  
  // Intersection Observer for scroll animations
  observeForAnimation(elements, animationClass, options = {}) {
    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observerOptions = { ...defaultOptions, ...options };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    elements.forEach(element => observer.observe(element));
  },
  
  // Check for reduced motion preference
  prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },
  
  // Conditional animation based on user preference
  conditionalAnimate(element, animationClass, fallbackClass) {
    if (this.prefersReducedMotion()) {
      element.classList.add(fallbackClass);
    } else {
      this.animate(element, animationClass);
    }
  }
};

// Usage examples
// Simple animation
AnimationUtils.animate(document.querySelector('.card'), 'fade-in');

// Staggered animation
AnimationUtils.staggerAnimate(
  document.querySelectorAll('.list-item'), 
  'slide-up', 
  150
);

// Scroll-triggered animation
AnimationUtils.observeForAnimation(
  document.querySelectorAll('.section'), 
  'fade-in'
);

// Reduced motion aware animation
AnimationUtils.conditionalAnimate(
  document.querySelector('.hero'), 
  'slide-up', 
  'fade-in'
);
```

### React Animation Hooks

#### Custom Animation Hooks
```tsx
// useAnimation hook
import { useEffect, useRef, useState } from 'react';

export const useAnimation = (animationClass: string, trigger: boolean = true) => {
  const elementRef = useRef<HTMLElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element || !trigger) return;
    
    setIsAnimating(true);
    element.classList.add(animationClass);
    
    const handleAnimationEnd = () => {
      element.classList.remove(animationClass);
      setIsAnimating(false);
    };
    
    element.addEventListener('animationend', handleAnimationEnd);
    
    return () => {
      element.removeEventListener('animationend', handleAnimationEnd);
    };
  }, [animationClass, trigger]);
  
  return { elementRef, isAnimating };
};

// useIntersectionAnimation hook
export const useIntersectionAnimation = (
  animationClass: string,
  options: IntersectionObserverInit = {}
) => {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          element.classList.add(animationClass);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options
      }
    );
    
    observer.observe(element);
    
    return () => observer.disconnect();
  }, [animationClass, options]);
  
  return { elementRef, isVisible };
};

// useReducedMotion hook
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  return prefersReducedMotion;
};

// Usage examples
const AnimatedCard = () => {
  const { elementRef } = useIntersectionAnimation('fade-in');
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <div 
      ref={elementRef}
      className={`card ${prefersReducedMotion ? 'no-animation' : ''}`}
    >
      Card content
    </div>
  );
};

const AnimatedButton = () => {
  const [clicked, setClicked] = useState(false);
  const { elementRef, isAnimating } = useAnimation('pulse', clicked);
  
  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 500);
  };
  
  return (
    <button 
      ref={elementRef}
      onClick={handleClick}
      disabled={isAnimating}
    >
      Click me
    </button>
  );
};
```

This comprehensive animation and interaction principles guide ensures consistent, accessible, and performant motion design across all Mindscraft digital touchpoints while respecting user preferences and maintaining brand personality.