---
name: Digital Life Lessons
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#464555'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#684000'
  on-tertiary: '#ffffff'
  tertiary-container: '#885500'
  on-tertiary-container: '#ffd4a4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  unit: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
---

## Brand & Style

The design system is built for a platform that bridges the gap between deep editorial insight and modern productivity tools. It targets a thoughtful, ambitious audience that values both intellectual substance and functional efficiency.

The aesthetic fuses **Modern Minimalism** with **Glassmorphism**, creating a layered, immersive experience. High-contrast typography evokes the feeling of a premium physical journal, while translucent surfaces and subtle blurs signify a cutting-edge SaaS environment. The interface should feel reflective, trustworthy, and premium, using generous whitespace to allow content to breathe and command attention.

## Colors

The palette is anchored by **Indigo (#4F46E5)**, used strategically for primary actions and "Deep Work" states. **Slate (#0F172A)** provides a grounding, high-contrast foundation for typography and structural elements, ensuring an authoritative editorial feel. 

**Amber (#F59E0B)** is reserved exclusively for premium signaling, highlights, and achievement markers, creating a warm "glow" against the cooler primary tones. The background strategy utilizes a hierarchy of off-whites and cool grays to maintain clarity while supporting glassmorphic overlays.

## Typography

This design system utilizes a high-contrast typographic pairing to signal its editorial roots. **Playfair Display** is used for all display and headline roles, emphasizing the "Lessons" aspect of the brand with its elegant, transitional serifs.

**Inter** handles all functional, UI, and long-form body text. It is chosen for its exceptional legibility and neutral, systematic character, ensuring the SaaS components remain clear and efficient. Large display type should use tighter letter spacing, while small labels should be slightly tracked out for better scannability.

## Layout & Spacing

The layout is governed by a strict **8px grid system** (with a 4px half-step for micro-adjustments). On desktop, a 12-column fluid grid is used for dashboard views, while a centered, fixed-width "Reader Column" (720px) is utilized for editorial content to ensure optimal line lengths.

Breakpoints are set at 640px (Mobile), 1024px (Tablet), and 1280px (Desktop). As the screen scales down, margins reduce from 48px to 16px, and multi-column grids collapse into a single-column stack, prioritizing the reading hierarchy.

## Elevation & Depth

Depth is established through **Glassmorphism** and soft, ambient shadows. 
- **Surface Level 0:** The base canvas, usually a subtle off-white (#F8FAFC).
- **Surface Level 1 (Floating Panels):** White background with 80% opacity and a `20px` backdrop-blur. These are used for sidebars and navigation headers.
- **Surface Level 2 (Modals/Overlays):** Solid white with a multi-layered shadow: `0 10px 15px -3px rgba(15, 23, 42, 0.08)` and `0 4px 6px -2px rgba(15, 23, 42, 0.04)`.

Borders are kept thin (1px) and use low-contrast Slate tones (10% opacity) to define edges without adding visual noise.

## Shapes

The design system employs a **Rounded** shape language to soften the high-contrast typography and make the SaaS components feel more approachable. 

- **Standard Buttons & Inputs:** `0.5rem` (8px) corner radius.
- **Cards & Container Sections:** `1rem` (16px) corner radius.
- **Feature Highlights & Modals:** `1.5rem` (24px) corner radius.

This geometry provides a modern, friendly counterpoint to the sharp, traditional lines of the serif headlines.

## Components

### Buttons
- **Primary:** Solid Indigo with white text. High-elevation shadow on hover.
- **Secondary:** Transparent with a 1px Slate border and subtle 5% Slate background.
- **Premium:** Solid Amber with Slate text, specifically for upsell triggers.

### Cards & Surfaces
Editorial cards use a "Ghost" style with no border, relying on whitespace and Playfair Display headings. Functional SaaS cards use the Glassmorphic treatment (white-80%, blur-20px) with a subtle 1px border.

### Inputs
Text fields are "unboxed" in editorial contexts (bottom border only) but fully enclosed in 8px rounded boxes for data-heavy SaaS views. Focus states should use a 2px Indigo ring with 20% opacity.

### Chips & Badges
- **Editorial Tags:** Small caps Inter, 12px, transparent background, Indigo text.
- **Premium Badge:** Amber background with a small star icon, using a pill shape (rounded-full).

### Navigation
The primary navigation utilizes a glassmorphic sidebar on desktop that transforms into a bottom bar on mobile, ensuring core actions are always within thumb-reach while maintaining the "floating" aesthetic.