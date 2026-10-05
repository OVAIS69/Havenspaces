# Joanna Szymendera — Portfolio (BlingBling.studio replica)

A 1:1, pixel-perfect, animation-accurate portfolio reproduction of [blingbling.studio](https://blingbling.studio/).

## ✨ Features & Included Animations

1. **Lenis Inertial Smooth Scrolling**:
   - Luxuriously smooth scroll physics matching the original duration and easing (`duration: 1.1`, exponential decay curve).

2. **Floating Interactive Hero Stars**:
   - Two 3D stars floating with asynchronous sine waves.
   - Interactive mouse repulsion physics with spring lerp (`0.07` smoothing factor).
   - Scroll zoom & opacity decay on scroll (`1 - scrollY / 600`).

3. **Staggered Line-by-Line Reveals**:
   - Text reveal components using the exact cubic-bezier timing (`cubic-bezier(0.22, 1, 0.36, 1)`).
   - Staggered entrances for Warsaw badge, profile pill, greeting, main headline, and CTAs.

4. **Infinite Company Logo Marquee**:
   - 7 original company SVG logos and dividers with continuous scrolling ticker (`animate-marquee-left`).

5. **Sticky Blur-to-Focus Statement**:
   - *"I define strategy, talk with the users and ship things that move the business"*
   - Pinned sticky in the background while work cards scroll over it.
   - Word-by-word blur-to-sharpness transition (`filter: blur(18px) -> blur(0px)`).

6. **Work Cards with Parallax & Hermite Easing**:
   - 4 projects: AlfaFrens, SuperBoring, Superfluid Claim App, and LUV.
   - Smooth scroll translation (`translate3d(0, 120px, 0) -> (0, 0, 0)`).
   - Micro-interactions: card scale, drop-shadow glow, image zoom, and arrow button translation.

7. **Signature Expanding Circular Clip-Path Mask**:
   - Fixed overlay with expanding `circle(radius px at 50% 100%)` that seamlessly transitions the page from daylight pastel blue into deep midnight black.

8. **About Section with Interactive Image Trail**:
   - Every 90px of cursor movement spawns an image card at the cursor position with random tilt.
   - Fades and scales in with Framer Motion, and auto-dismisses smoothly.
   - Floating Joanna portrait badge with Warsaw coordinates (`52.23°N`).
   - Stats grid (9 Years, 6 Years Web3/Fintech, ∞ Hobbies).

9. **Hacks Section with Lerped Floating Cursor Preview**:
   - ETHGlobal Tokyo, ETHGlobal Autonomous Worlds, and Degen Hack.
   - Floating card smoothly tracks the cursor with physical lerping (`x += (targetX - x) * 0.1217`) and tilts on hover.

10. **Sneak Peek Diagonal Marquee Wall**:
    - Project gallery tilted at `-45deg` with 4 continuous scrolling rows.
    - Floating center CTA button with intense glowing drop-shadows.

11. **Morphing Pill Navigation & Mobile Drawer**:
    - Navbar collapses from full-width to a compact floating pill on scroll.
    - Animated hamburger menu with mobile drawer.
    - Interactive "Copy email to clipboard" button with tactile checkmark feedback.

12. **Detailed Case Study Overviews**:
    - Click any work card to view the case study layout with screenshots, design breakdown, and video preview.

## 🚀 Getting Started

### Start Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```
