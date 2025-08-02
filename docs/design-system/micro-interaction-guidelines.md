# Micro-interaction Guidelines

## Overview

This document defines the micro-interaction patterns and animation guidelines for the Mindscraft design system. These interactions enhance user experience by providing immediate feedback, guiding attention, and creating a sense of responsiveness and polish.

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
- **Fast enough**: Don't make users wait unnecessarily (< 300ms for most interactions)
- **Slow enough**: Allow users to perceive and understand changes (> 100ms)
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
  /* Duration tokens based on human perception */
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
  /* Easing curves based on natural motion */
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

### Transform Properties
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

## Button Micro-interactions

### Primary Button Interactions

#### Hover State
```css
.btn-primary {
  background-color: var(--color-ai-primary);
  color: white;
  border: none;
  border-radius: var(--radius-button);
  padding: var(--space-3) var(--space-6);
  font-weight: var(--font-weight-medium);
  transition: all var(--duration-button) var(--ease-button);
  transform: translateY(0);
  box-shadow: var(--shadow-button);
  position: relative;
  overflow: hidden;
}

.btn-primary:hover {
  background-color: var(--color-ai-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow-button-hover);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: var(--shadow-button);
  transition-duration: calc(var(--duration-button) / 2);
}

.btn-primary:focus {
  outline: none;
  box-shadow: var(--shadow-button), var(--shadow-focus);
}
```

#### Shimmer Effect for Primary CTAs
```css
.btn-primary::before {
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

#### Loading State Animation
```css
.btn-loading {
  position: relative;
  color: transparent;
  pointer-events: none;
}

.btn-loading::after {
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

### Secondary Button Interactions

#### Border Animation
```css
.btn-secondary {
  background-color: transparent;
  color: var(--color-ai-primary);
  border: 2px solid var(--color-ai-primary);
  border-radius: var(--radius-button);
  padding: var(--space-3) var(--space-6);
  font-weight: var(--font-weight-medium);
  transition: all var(--duration-button) var(--ease-button);
  position: relative;
  overflow: hidden;
}

.btn-secondary::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: var(--color-ai-primary);
  transition: width var(--duration-normal) var(--ease-out);
  z-index: -1;
}

.btn-secondary:hover {
  color: white;
}

.btn-secondary:hover::before {
  width: 100%;
}
```

### Tertiary Button Interactions

#### Underline Animation
```css
.btn-tertiary {
  background-color: transparent;
  color: var(--color-ai-primary);
  border: none;
  padding: var(--space-2) var(--space-4);
  font-weight: var(--font-weight-medium);
  position: relative;
  transition: color var(--duration-button) var(--ease-button);
}

.btn-tertiary::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width var(--duration-normal) var(--ease-out);
}

.btn-tertiary:hover {
  color: var(--color-ai-dark);
}

.btn-tertiary:hover::after {
  width: 100%;
}
```

---

## Form Micro-interactions

### Input Field Interactions

#### Focus Animation
```css
.input {
  border: 2px solid var(--color-border-default);
  border-radius: var(--radius-input);
  padding: var(--space-3) var(--space-4);
  font-size: var(--font-size-base);
  transition: all var(--duration-fast) var(--ease-out);
  background-color: var(--color-bg-primary);
}

.input:focus {
  border-color: var(--color-ai-primary);
  box-shadow: var(--shadow-focus);
  transform: scale(1.01);
  background-color: var(--color-bg-primary);
}

.input:focus::placeholder {
  opacity: 0.5;
  transform: translateY(-2px);
}
```

#### Error State Animation
```css
.input.error {
  border-color: var(--color-error);
  box-shadow: 0 0 0 3px rgb(239 68 68 / 0.1);
  animation: input-shake var(--duration-normal) var(--ease-out);
}

@keyframes input-shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}
```

#### Success State Animation
```css
.input.success {
  border-color: var(--color-success);
  box-shadow: 0 0 0 3px rgb(16 185 129 / 0.1);
}

.input.success + .success-icon {
  opacity: 1;
  transform: scale(1);
  animation: success-bounce var(--duration-normal) var(--ease-back);
}

@keyframes success-bounce {
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}
```

### Form Validation Messages

#### Error Message Animation
```css
.error-message {
  opacity: 0;
  transform: translateY(-var(--translate-xs));
  max-height: 0;
  overflow: hidden;
  transition: all var(--duration-fast) var(--ease-out);
  color: var(--color-error);
  font-size: var(--font-size-sm);
  margin-top: var(--space-1);
}

.error-message.show {
  opacity: 1;
  transform: translateY(0);
  max-height: 2rem;
}
```

#### Success Message Animation
```css
.success-message {
  opacity: 0;
  transform: scale(var(--scale-sm));
  transition: all var(--duration-normal) var(--ease-back);
  color: var(--color-success);
  font-size: var(--font-size-sm);
  margin-top: var(--space-1);
}

.success-message.show {
  opacity: 1;
  transform: scale(1);
}
```

### Checkbox and Radio Interactions

#### Checkbox Animation
```css
.checkbox {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-border-default);
  border-radius: var(--radius-sm);
  background-color: var(--color-bg-primary);
  position: relative;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
}

.checkbox:checked {
  background-color: var(--color-ai-primary);
  border-color: var(--color-ai-primary);
}

.checkbox:checked::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  color: white;
  font-size: 12px;
  font-weight: bold;
  animation: checkbox-check var(--duration-normal) var(--ease-back) forwards;
}

@keyframes checkbox-check {
  0% { transform: translate(-50%, -50%) scale(0); }
  50% { transform: translate(-50%, -50%) scale(1.2); }
  100% { transform: translate(-50%, -50%) scale(1); }
}

.checkbox:focus {
  box-shadow: var(--shadow-focus);
}
```

---

## Card Micro-interactions

### Card Hover Effects

#### Standard Card Hover
```css
.card {
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-card);
  padding: var(--space-component-lg);
  transition: all var(--duration-card) var(--ease-card);
  transform: translateY(0);
  box-shadow: var(--shadow-card);
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-card-hover);
  border-color: var(--color-ai-primary);
}

.card.interactive {
  cursor: pointer;
}

.card.interactive:active {
  transform: translateY(-1px);
  transition-duration: calc(var(--duration-card) / 2);
}
```

#### Card Content Stagger Animation
```css
.card-content > * {
  opacity: 0;
  transform: translateY(var(--translate-sm));
  animation: card-content-enter var(--duration-normal) var(--ease-out) forwards;
}

.card-content > *:nth-child(1) { animation-delay: 0ms; }
.card-content > *:nth-child(2) { animation-delay: 50ms; }
.card-content > *:nth-child(3) { animation-delay: 100ms; }
.card-content > *:nth-child(4) { animation-delay: 150ms; }

@keyframes card-content-enter {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

#### Interactive Card with Glow Effect
```css
.card-interactive {
  position: relative;
  overflow: hidden;
}

.card-interactive::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-ai-primary), var(--color-growth-primary));
  transform: scaleX(0);
  transition: transform var(--duration-normal) var(--ease-out);
}

.card-interactive:hover::before {
  transform: scaleX(1);
}
```

---

## Navigation Micro-interactions

### Menu Animations

#### Mobile Menu Slide
```css
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--color-bg-primary);
  transform: translateX(-100%);
  transition: transform var(--duration-normal) var(--ease-out);
  z-index: var(--z-modal);
}

.mobile-menu.open {
  transform: translateX(0);
}

.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity var(--duration-normal) var(--ease-out);
  pointer-events: none;
  z-index: var(--z-overlay);
}

.mobile-menu-overlay.open {
  opacity: 1;
  pointer-events: auto;
}
```

#### Menu Item Stagger
```css
.mobile-menu-item {
  opacity: 0;
  transform: translateX(-var(--translate-md));
  transition: all var(--duration-fast) var(--ease-out);
}

.mobile-menu.open .mobile-menu-item:nth-child(1) {
  animation: menu-item-enter var(--duration-fast) var(--ease-out) 50ms forwards;
}

.mobile-menu.open .mobile-menu-item:nth-child(2) {
  animation: menu-item-enter var(--duration-fast) var(--ease-out) 100ms forwards;
}

.mobile-menu.open .mobile-menu-item:nth-child(3) {
  animation: menu-item-enter var(--duration-fast) var(--ease-out) 150ms forwards;
}

@keyframes menu-item-enter {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

### Link Hover Effects

#### Navigation Link Underline
```css
.nav-link {
  position: relative;
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: var(--space-2) var(--space-4);
  transition: color var(--duration-fast) var(--ease-out);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: var(--space-4);
  right: var(--space-4);
  height: 2px;
  background-color: var(--color-ai-primary);
  transform: scaleX(0);
  transition: transform var(--duration-normal) var(--ease-out);
}

.nav-link:hover {
  color: var(--color-text-primary);
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.nav-link.active::after {
  transform: scaleX(1);
}
```

#### Breadcrumb Animation
```css
.breadcrumb-item {
  opacity: 0;
  transform: translateX(-var(--translate-sm));
  animation: breadcrumb-enter var(--duration-fast) var(--ease-out) forwards;
}

.breadcrumb-item:nth-child(1) { animation-delay: 0ms; }
.breadcrumb-item:nth-child(2) { animation-delay: 50ms; }
.breadcrumb-item:nth-child(3) { animation-delay: 100ms; }

@keyframes breadcrumb-enter {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

---

## Icon Micro-interactions

### Icon Hover Effects

#### Scale Animation
```css
.icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-button);
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
}

.icon-button:hover {
  background-color: var(--color-bg-secondary);
  transform: scale(var(--scale-lg));
}

.icon-button:active {
  transform: scale(1);
  transition-duration: calc(var(--duration-fast) / 2);
}
```

#### Rotation Animation
```css
.icon-rotate {
  transition: transform var(--duration-normal) var(--ease-out);
}

.icon-rotate:hover {
  transform: rotate(15deg);
}

.icon-chevron {
  transition: transform var(--duration-fast) var(--ease-out);
}

.icon-chevron.expanded {
  transform: rotate(180deg);
}
```

#### Bounce Animation
```css
.icon-bounce:hover {
  animation: icon-bounce var(--duration-normal) var(--ease-bounce);
}

@keyframes icon-bounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(var(--scale-lg)); }
}
```

### Animated Icons

#### Hamburger Menu Icon
```css
.hamburger-icon {
  width: 24px;
  height: 24px;
  position: relative;
  cursor: pointer;
}

.hamburger-line {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--color-text-primary);
  margin: 4px 0;
  transition: all var(--duration-fast) var(--ease-out);
  transform-origin: center;
}

.hamburger-icon.open .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger-icon.open .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger-icon.open .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}
```

#### Heart/Like Animation
```css
.heart-icon {
  color: var(--color-text-muted);
  transition: all var(--duration-fast) var(--ease-out);
  cursor: pointer;
}

.heart-icon.liked {
  color: var(--color-error);
  animation: heart-beat var(--duration-normal) var(--ease-out);
}

@keyframes heart-beat {
  0%, 100% { transform: scale(1); }
  25% { transform: scale(1.2); }
  50% { transform: scale(1.1); }
  75% { transform: scale(1.15); }
}
```

---

## Loading and Progress Micro-interactions

### Loading Spinners

#### Standard Spinner
```css
.spinner {
  width: 2rem;
  height: 2rem;
  border: 2px solid var(--color-border-default);
  border-top-color: var(--color-ai-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

#### Dots Spinner
```css
.spinner-dots {
  display: flex;
  gap: 0.25rem;
}

.spinner-dot {
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--color-ai-primary);
  border-radius: 50%;
  animation: dot-bounce 1.4s infinite ease-in-out both;
}

.spinner-dot:nth-child(1) { animation-delay: -0.32s; }
.spinner-dot:nth-child(2) { animation-delay: -0.16s; }
.spinner-dot:nth-child(3) { animation-delay: 0s; }

@keyframes dot-bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
```

### Progress Bars

#### Determinate Progress
```css
.progress-bar {
  width: 100%;
  height: 4px;
  background-color: var(--color-bg-tertiary);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background-color: var(--color-ai-primary);
  border-radius: var(--radius-full);
  transition: width var(--duration-normal) var(--ease-out);
  transform-origin: left;
}
```

#### Indeterminate Progress
```css
.progress-indeterminate {
  width: 30%;
  animation: progress-slide 2s infinite linear;
}

@keyframes progress-slide {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
}
```

### Skeleton Loading

#### Shimmer Effect
```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-bg-secondary) 25%,
    var(--color-bg-tertiary) 50%,
    var(--color-bg-secondary) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-md);
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.skeleton-text {
  height: 1rem;
  margin-bottom: 0.5rem;
}

.skeleton-text:last-child {
  width: 60%;
}

.skeleton-avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}

.skeleton-button {
  height: 2.5rem;
  width: 6rem;
}
```

---

## Modal and Overlay Micro-interactions

### Modal Animations

#### Modal Enter/Exit
```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
  opacity: 0;
  transition: opacity var(--duration-modal) var(--ease-modal);
}

.modal-overlay.open {
  opacity: 1;
}

.modal-content {
  background-color: var(--color-bg-primary);
  border-radius: var(--radius-card);
  padding: var(--space-component-xl);
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
  transform: scale(var(--scale-md)) translateY(-var(--translate-lg));
  opacity: 0;
  transition: all var(--duration-modal) var(--ease-modal);
}

.modal-content.open {
  transform: scale(1) translateY(0);
  opacity: 1;
}

.modal-content.closing {
  transform: scale(var(--scale-sm)) translateY(var(--translate-sm));
  opacity: 0;
  transition-duration: calc(var(--duration-modal) * 0.75);
}
```

### Tooltip Animations

#### Tooltip Fade and Slide
```css
.tooltip {
  position: absolute;
  background-color: var(--color-brand-dark);
  color: var(--color-text-inverse);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  white-space: nowrap;
  z-index: var(--z-tooltip);
  opacity: 0;
  transform: translateY(var(--translate-xs));
  transition: all var(--duration-fast) var(--ease-out);
  pointer-events: none;
}

.tooltip.show {
  opacity: 1;
  transform: translateY(0);
}

.tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 4px solid transparent;
  border-top-color: var(--color-brand-dark);
}
```

### Dropdown Animations

#### Dropdown Slide Down
```css
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-dropdown);
  z-index: var(--z-dropdown);
  opacity: 0;
  transform: translateY(-var(--translate-sm));
  transition: all var(--duration-normal) var(--ease-out);
  pointer-events: none;
  max-height: 0;
  overflow: hidden;
}

.dropdown.open {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
  max-height: 300px;
}

.dropdown-item {
  padding: var(--space-3) var(--space-4);
  cursor: pointer;
  transition: background-color var(--duration-fast) var(--ease-out);
}

.dropdown-item:hover {
  background-color: var(--color-bg-secondary);
}
```

---

## Notification Micro-interactions

### Toast Notifications

#### Toast Slide In/Out
```css
.toast {
  position: fixed;
  top: var(--space-4);
  right: var(--space-4);
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-card);
  padding: var(--space-4);
  box-shadow: var(--shadow-card);
  z-index: var(--z-toast);
  transform: translateX(100%);
  opacity: 0;
  transition: all var(--duration-normal) var(--ease-out);
}

.toast.show {
  transform: translateX(0);
  opacity: 1;
}

.toast.hide {
  transform: translateX(100%);
  opacity: 0;
  transition-duration: calc(var(--duration-normal) * 0.75);
}

/* Toast variants */
.toast.success {
  border-left: 4px solid var(--color-success);
  animation: success-pulse var(--duration-slow) var(--ease-out);
}

.toast.error {
  border-left: 4px solid var(--color-error);
  animation: error-shake var(--duration-normal) var(--ease-out);
}

@keyframes success-pulse {
  0%, 100% { box-shadow: var(--shadow-card); }
  50% { box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.2), var(--shadow-card); }
}

@keyframes error-shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
}
```

### Alert Banners

#### Alert Slide Down
```css
.alert {
  padding: var(--space-4);
  border-radius: var(--radius-card);
  margin-bottom: var(--space-4);
  transform: translateY(-var(--translate-md));
  opacity: 0;
  animation: alert-slide-down var(--duration-normal) var(--ease-out) forwards;
}

@keyframes alert-slide-down {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.alert.dismissing {
  animation: alert-slide-up var(--duration-fast) var(--ease-in) forwards;
}

@keyframes alert-slide-up {
  to {
    transform: translateY(-var(--translate-md));
    opacity: 0;
    max-height: 0;
    padding: 0;
    margin: 0;
  }
}
```

---

## Page Transition Micro-interactions

### Page Load Animations

#### Fade In Animation
```css
.page-content {
  opacity: 0;
  animation: page-fade-in var(--duration-page) var(--ease-out) forwards;
}

@keyframes page-fade-in {
  to { opacity: 1; }
}
```

#### Section Reveal Animation
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
  animation: hero-enter var(--duration-slower) var(--ease-out) forwards;
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

@keyframes hero-enter {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## Accessibility Considerations

### Reduced Motion Support

#### Respecting User Preferences
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  /* Provide alternative feedback for reduced motion */
  .btn:hover {
    background-color: var(--color-ai-dark);
    transform: none;
  }
  
  .card:hover {
    border-color: var(--color-ai-primary);
    transform: none;
    box-shadow: var(--shadow-card);
  }
  
  .input:focus {
    transform: none;
  }
  
  /* Keep essential loading indicators */
  .spinner {
    animation: none;
  }
  
  .spinner::after {
    content: '⏳';
    font-size: 1.5rem;
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
  transform: scale(1.02);
}

/* Skip focus animation for reduced motion */
@media (prefers-reduced-motion: reduce) {
  .focusable:focus {
    transform: none;
  }
}
```

---

## Performance Optimization

### Hardware Acceleration

#### GPU-Accelerated Properties
```css
.optimized-animation {
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
```

### Animation Optimization

#### Contain Property
```css
.animated-container {
  contain: layout style paint;
}

.complex-animation {
  isolation: isolate;
  contain: strict;
}
```

This comprehensive micro-interaction guidelines document ensures consistent, accessible, and performant animations across the Mindscraft design system while maintaining the brand's sophisticated yet approachable personality.