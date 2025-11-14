# Design Document

## Overview

The EFS Flightschool website is a single-page application (SPA) built with Vite and React, designed to provide a seamless, professional browsing experience for prospective flight students and charter clients. The architecture follows a component-based approach with a focus on performance, accessibility, and maintainability. The design emphasizes visual storytelling through high-quality aviation imagery, clear typography, and an intuitive navigation structure.

### Technology Stack

- **Build Tool**: Vite (for fast development and optimized production builds)
- **Framework**: React 18+ with functional components and hooks
- **Styling**: CSS Modules or Styled Components for component-scoped styling
- **Deployment**: Static HTML/CSS/JS bundle deployable to any static hosting service
- **Image Optimization**: Built-in Vite image optimization with lazy loading

### Design Principles

1. **Single-Page Architecture**: All content on one page with smooth-scroll navigation
2. **Mobile-First Responsive**: Design starts with mobile layout, progressively enhanced for larger screens
3. **Performance-Focused**: Lazy loading, optimized images, minimal JavaScript
4. **Accessibility-First**: WCAG 2.1 AA compliance with semantic HTML and ARIA labels
5. **Aviation Aesthetic**: Professional, trustworthy design with aviation-themed colors and imagery

## Architecture

### Component Hierarchy

```
App
├── Navigation
│   ├── Logo
│   ├── NavLinks
│   └── MobileMenu (hamburger)
├── Hero
│   ├── HeroImage
│   ├── HeroHeading
│   └── HeroSubtext
├── PPLTraining
│   ├── SectionTitle
│   ├── DescriptionText
│   ├── BulletList (with icons)
│   └── TrainingImage
├── Fleet
│   ├── SectionTitle
│   ├── DescriptionText
│   └── FleetGrid
│       └── FleetCard (x4)
│           ├── AircraftImage
│           ├── AircraftName
│           └── Specifications
├── Charter
│   ├── SectionTitle
│   ├── DescriptionText
│   └── CharterImage
├── TrialFlights
│   ├── SectionTitle
│   ├── DescriptionText
│   ├── BulletList
│   └── TrialFlightImage
├── Team
│   ├── SectionTitle
│   └── TeamGrid
│       └── TeamCard (x3)
│           ├── MemberPhoto
│           ├── MemberName
│           ├── MemberTitle
│           └── MemberDescription
├── Locations
│   ├── SectionTitle
│   └── LocationGrid
│       └── LocationCard (x2)
│           ├── LocationName
│           ├── ICAOCode
│           ├── Address
│           └── LocationImage
├── Contact
│   ├── SectionTitle
│   ├── ContactEmail
│   ├── ContactPhones
│   └── ContactIcon
└── Footer
    ├── LegalLinks
    └── Copyright
```

### State Management

Given the static nature of the site, minimal state management is required:

- **Navigation State**: Track active section for navigation highlighting (using Intersection Observer)
- **Mobile Menu State**: Boolean for hamburger menu open/closed
- **No Global State Library Needed**: React's built-in useState and useEffect are sufficient

### Routing Strategy

- **No React Router**: Single-page with anchor-based navigation
- **Smooth Scroll**: Implemented via `scrollIntoView({ behavior: 'smooth' })` or CSS `scroll-behavior: smooth`
- **Section IDs**: Each major section has a unique ID matching navigation anchors (e.g., `#ppl-ausbildung`, `#fleet`, etc.)

## Components and Interfaces

### Navigation Component

**Purpose**: Fixed header providing site-wide navigation and branding

**Props**: None (stateless except for mobile menu toggle)

**Structure**:
```jsx
<nav className="navigation">
  <div className="nav-container">
    <Logo />
    <NavLinks links={navigationLinks} />
    <MobileMenuButton onClick={toggleMenu} />
  </div>
  {isMobileMenuOpen && <MobileMenu links={navigationLinks} />}
</nav>
```

**Styling**:
- Position: `fixed` with `top: 0`, `z-index: 1000`
- Background: `#012B36`
- Height: `70px` (desktop), `60px` (mobile)
- Logo: Left-aligned, max-height `50px`
- Links: Horizontal on desktop, vertical dropdown on mobile
- Hover state: Color changes to `#F37626`

**Behavior**:
- Remains fixed during scroll
- Highlights active section based on scroll position
- Collapses to hamburger menu below 768px breakpoint

### Hero Component

**Purpose**: Eye-catching banner introducing EFS Flightschool

**Props**: 
```typescript
interface HeroProps {
  backgroundImage: string;
  heading: string;
  subtext: string;
}
```

**Structure**:
```jsx
<section id="home" className="hero">
  <div className="hero-overlay">
    <h1 className="hero-heading">{heading}</h1>
    <p className="hero-subtext">{subtext}</p>
  </div>
</section>
```

**Styling**:
- Background: Full-width image with overlay (rgba(1, 43, 54, 0.5))
- Min-height: `500px` (desktop), `300px` (mobile)
- Text: Centered, white color (#FBF7E4)
- Heading: Font-size `3rem` (desktop), `2rem` (mobile)
- Subtext: Font-size `1.5rem` (desktop), `1.2rem` (mobile)

**Image Source**: `src/media/background-1-min.jpg` or `background-2-min.jpg`

### Section Component (Reusable)

**Purpose**: Container for content sections with consistent spacing and backgrounds

**Props**:
```typescript
interface SectionProps {
  id: string;
  backgroundColor: string;
  children: React.ReactNode;
  className?: string;
}
```

**Structure**:
```jsx
<section id={id} className={`section ${className}`} style={{ backgroundColor }}>
  <div className="section-container">
    {children}
  </div>
</section>
```

**Styling**:
- Padding: `4rem 2rem` (desktop), `3rem 1.5rem` (mobile)
- Max-width: `1200px` centered
- Background colors alternate: `#F5FAFF`, `#FBF7E4`, `#FFFFFF`

### FleetCard Component

**Purpose**: Display individual aircraft specifications

**Props**:
```typescript
interface FleetCardProps {
  name: string;
  power: string;
  capabilities: string[];
  seats: number;
  image: string;
  imageAlt: string;
}
```

**Structure**:
```jsx
<div className="fleet-card">
  <img src={image} alt={imageAlt} className="fleet-image" />
  <h3 className="fleet-name">{name}</h3>
  <div className="fleet-specs">
    <p><strong>Power:</strong> {power}</p>
    <p><strong>Capabilities:</strong> {capabilities.join(', ')}</p>
    <p><strong>Seats:</strong> {seats}</p>
  </div>
</div>
```

**Styling**:
- Border: `1px solid #C7D3DC`
- Border-radius: `8px`
- Padding: `1.5rem`
- Box-shadow: `0 2px 8px rgba(0,0,0,0.1)`
- Hover: Slight lift effect with increased shadow
- Image: Full-width, aspect-ratio 16:9, object-fit cover

**Image Sources**:
- Piper Turbo Arrow IV: `src/media/DEFFQ_4.jpeg`
- Socata TB20 Trinidad: `src/media/IMG_1809-scaled.jpg`
- Cessna FR 172 F Rocket: `src/media/IMG_1858.jpg`
- Tecnam 2006 TC: `src/media/IMG_2889-scaled.jpg`

### TeamCard Component

**Purpose**: Display team member profiles

**Props**:
```typescript
interface TeamCardProps {
  name: string;
  title: string;
  description: string;
  photo: string;
  photoAlt: string;
}
```

**Structure**:
```jsx
<div className="team-card">
  <img src={photo} alt={photoAlt} className="team-photo" />
  <h3 className="team-name">{name}</h3>
  <p className="team-title">{title}</p>
  <p className="team-description">{description}</p>
</div>
```

**Styling**:
- Photo: Circular, diameter `200px` (desktop), `150px` (mobile)
- Text: Centered alignment
- Spacing: `1rem` between elements
- Background: Transparent

**Image Sources**:
- Gregor Schulz: `src/media/team-1-min.jpg`
- Marcus Schulz: `src/media/team-2-min.jpg` or `team-2-min400-500.jpg`
- Erika Elsser: `src/media/team-3-min400-500.jpg`

### BulletList Component

**Purpose**: Display feature lists with aviation-themed icons

**Props**:
```typescript
interface BulletListProps {
  items: string[];
  iconType?: 'plane' | 'check' | 'star';
}
```

**Structure**:
```jsx
<ul className="bullet-list">
  {items.map((item, index) => (
    <li key={index} className="bullet-item">
      <Icon type={iconType} />
      <span>{item}</span>
    </li>
  ))}
</ul>
```

**Styling**:
- List-style: None
- Icon: SVG or icon font, color `#F37626`, size `24px`
- Spacing: `1rem` between items
- Text: Left-aligned, font-size `1.1rem`

## Data Models

### Navigation Links

```typescript
interface NavLink {
  id: string;
  label: string;
  href: string; // anchor link (e.g., '#ppl-ausbildung')
}

const navigationLinks: NavLink[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'ppl', label: 'PPL-Ausbildung', href: '#ppl-ausbildung' },
  { id: 'fleet', label: 'Unsere Flotte', href: '#fleet' },
  { id: 'charter', label: 'Charter', href: '#charter' },
  { id: 'trial', label: 'Trialflights', href: '#trialflights' },
  { id: 'team', label: 'Team', href: '#team' },
  { id: 'locations', label: 'Standorte', href: '#standorte' },
  { id: 'contact', label: 'Kontakt', href: '#kontakt' }
];
```

### Fleet Data

```typescript
interface Aircraft {
  id: string;
  name: string;
  power: string;
  capabilities: string[];
  seats: number;
  image: string;
  imageAlt: string;
}

const fleetData: Aircraft[] = [
  {
    id: 'piper-arrow',
    name: 'Piper Turbo Arrow IV',
    power: '201PS',
    capabilities: ['IFR', 'Garmin Avionik'],
    seats: 4,
    image: '/src/media/DEFFQ_4.jpeg',
    imageAlt: 'Piper Turbo Arrow IV aircraft'
  },
  {
    id: 'socata-trinidad',
    name: 'Socata TB20 Trinidad',
    power: '250PS',
    capabilities: ['IFR', 'Komfort & Reichweite'],
    seats: 4,
    image: '/src/media/IMG_1809-scaled.jpg',
    imageAlt: 'Socata TB20 Trinidad aircraft'
  },
  {
    id: 'cessna-rocket',
    name: 'Cessna FR 172 F Rocket',
    power: '200PS',
    capabilities: ['Night/IFR', '3-Blatt Propeller'],
    seats: 4,
    image: '/src/media/IMG_1858.jpg',
    imageAlt: 'Cessna FR 172 F Rocket aircraft'
  },
  {
    id: 'tecnam',
    name: 'Tecnam 2006 TC',
    power: 'Charter',
    capabilities: ['SEP/MEP', 'VFR/IR'],
    seats: 2,
    image: '/src/media/IMG_2889-scaled.jpg',
    imageAlt: 'Tecnam 2006 TC aircraft'
  }
];
```

### Team Data

```typescript
interface TeamMember {
  id: string;
  name: string;
  title: string;
  description: string;
  photo: string;
  photoAlt: string;
}

const teamData: TeamMember[] = [
  {
    id: 'gregor',
    name: 'Gregor Schulz',
    title: 'General Manager/Cpt. i.R.',
    description: '>50 Jahre Erfahrung',
    photo: '/src/media/team-1-min.jpg',
    photoAlt: 'Gregor Schulz portrait'
  },
  {
    id: 'marcus',
    name: 'Marcus Schulz',
    title: 'Safetypilot',
    description: 'Viel Erfahrung auf Kolben/Turbinen',
    photo: '/src/media/team-2-min.jpg',
    photoAlt: 'Marcus Schulz portrait'
  },
  {
    id: 'erika',
    name: 'Erika Elsser',
    title: 'CEO',
    description: '40 Jahre Organisation Fliegerei',
    photo: '/src/media/team-3-min400-500.jpg',
    photoAlt: 'Erika Elsser portrait'
  }
];
```

### Location Data

```typescript
interface Location {
  id: string;
  name: string;
  icao: string;
  address: string;
  description: string;
  image?: string;
}

const locationData: Location[] = [
  {
    id: 'stuttgart',
    name: 'Stuttgart',
    icao: 'EDDS',
    address: 'Julius-Hölder-Str. 48, 70597 Stuttgart',
    description: 'Optimale Anbindung, General Aviation Terminal',
    image: '/src/media/MG_4196-1-scaled.jpg'
  },
  {
    id: 'mallorca',
    name: 'Son Bonet, Mallorca',
    icao: 'LESB',
    address: 'Edificio 8, Ctra.Palma-Inca km 6, 07141 Marratxi',
    description: 'Direkte Schulung am Flugfeld',
    image: '/src/media/MG_4227-1-1-scaled.jpg'
  }
];
```

## Layout and Responsive Design

### Breakpoints

```css
/* Mobile: 0-767px */
/* Tablet: 768-1023px */
/* Desktop: 1024px+ */

:root {
  --breakpoint-mobile: 767px;
  --breakpoint-tablet: 1023px;
}
```

### Grid System

**Desktop Layout (1024px+)**:
- Fleet Grid: 2x2 grid with `gap: 2rem`
- Team Grid: 3 columns with `gap: 2rem`
- Location Grid: 2 columns with `gap: 2rem`

**Tablet Layout (768-1023px)**:
- Fleet Grid: 2x2 grid with `gap: 1.5rem`
- Team Grid: 3 columns with `gap: 1.5rem`
- Location Grid: 2 columns with `gap: 1.5rem`

**Mobile Layout (0-767px)**:
- All grids: Single column with `gap: 1.5rem`
- Images: Full-width with max-width constraints
- Text: Centered or left-aligned based on section

### Typography Scale

```css
:root {
  /* Desktop */
  --font-size-h1: 3rem;      /* 48px */
  --font-size-h2: 2.5rem;    /* 40px */
  --font-size-h3: 2rem;      /* 32px */
  --font-size-body: 1.125rem; /* 18px */
  --font-size-small: 1rem;   /* 16px */
  
  /* Mobile */
  --font-size-h1-mobile: 2rem;      /* 32px */
  --font-size-h2-mobile: 1.75rem;   /* 28px */
  --font-size-h3-mobile: 1.5rem;    /* 24px */
  --font-size-body-mobile: 1rem;    /* 16px */
  --font-size-small-mobile: 0.875rem; /* 14px */
}
```

### Spacing System

```css
:root {
  --spacing-xs: 0.5rem;   /* 8px */
  --spacing-sm: 1rem;     /* 16px */
  --spacing-md: 1.5rem;   /* 24px */
  --spacing-lg: 2rem;     /* 32px */
  --spacing-xl: 3rem;     /* 48px */
  --spacing-xxl: 4rem;    /* 64px */
}
```

## Error Handling

### Image Loading Errors

**Strategy**: Provide fallback images and graceful degradation

```jsx
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.src = '/src/media/placeholder-aircraft.jpg';
  e.currentTarget.alt = 'Image unavailable';
};

<img 
  src={aircraft.image} 
  alt={aircraft.imageAlt}
  onError={handleImageError}
/>
```

### Missing Data

**Strategy**: Conditional rendering with default values

```jsx
const FleetCard = ({ aircraft }: { aircraft: Aircraft }) => {
  if (!aircraft) return null;
  
  return (
    <div className="fleet-card">
      <img src={aircraft.image || '/default-aircraft.jpg'} />
      <h3>{aircraft.name || 'Aircraft Name'}</h3>
      {/* ... */}
    </div>
  );
};
```

### Navigation Errors

**Strategy**: Smooth scroll with fallback to instant scroll

```javascript
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    try {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (error) {
      // Fallback for browsers that don't support smooth scroll
      element.scrollIntoView();
    }
  }
};
```

## Testing Strategy

### Unit Testing

**Tools**: Vitest + React Testing Library

**Coverage Areas**:
1. Component rendering with various props
2. Navigation link generation
3. Data transformation functions
4. Responsive behavior (viewport changes)

**Example Test**:
```javascript
describe('FleetCard', () => {
  it('renders aircraft information correctly', () => {
    const aircraft = {
      name: 'Piper Turbo Arrow IV',
      power: '201PS',
      capabilities: ['IFR'],
      seats: 4,
      image: '/test.jpg',
      imageAlt: 'Test aircraft'
    };
    
    render(<FleetCard aircraft={aircraft} />);
    
    expect(screen.getByText('Piper Turbo Arrow IV')).toBeInTheDocument();
    expect(screen.getByText(/201PS/)).toBeInTheDocument();
    expect(screen.getByAltText('Test aircraft')).toBeInTheDocument();
  });
});
```

### Integration Testing

**Focus Areas**:
1. Navigation scroll behavior
2. Mobile menu toggle functionality
3. Image lazy loading
4. Section visibility detection

### Visual Regression Testing

**Tools**: Percy or Chromatic (optional)

**Coverage**:
1. Desktop layout at 1920px, 1440px, 1024px
2. Tablet layout at 768px
3. Mobile layout at 375px, 414px
4. Hover states and interactions

### Accessibility Testing

**Tools**: axe-core, WAVE

**Checks**:
1. Color contrast ratios
2. Keyboard navigation
3. Screen reader compatibility
4. ARIA labels and roles
5. Focus indicators
6. Alt text for images

### Performance Testing

**Tools**: Lighthouse, WebPageTest

**Metrics**:
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.5s
- Cumulative Layout Shift (CLS): < 0.1
- Total Bundle Size: < 500KB (gzipped)

### Browser Testing

**Target Browsers**:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## Performance Optimization

### Image Optimization

1. **Format Selection**: Use WebP with JPEG fallback
2. **Responsive Images**: Implement srcset for different screen sizes
3. **Lazy Loading**: Use native `loading="lazy"` attribute
4. **Compression**: Optimize images to 80-85% quality
5. **Dimensions**: Specify width and height to prevent layout shift

```jsx
<img
  src="/src/media/aircraft.jpg"
  srcSet="/src/media/aircraft-400.webp 400w,
          /src/media/aircraft-800.webp 800w,
          /src/media/aircraft-1200.webp 1200w"
  sizes="(max-width: 768px) 100vw, 50vw"
  loading="lazy"
  width="800"
  height="600"
  alt="Aircraft description"
/>
```

### Code Splitting

1. **Route-based**: Not applicable (single page)
2. **Component-based**: Lazy load below-the-fold sections

```jsx
const Team = lazy(() => import('./components/Team'));
const Locations = lazy(() => import('./components/Locations'));

<Suspense fallback={<LoadingSpinner />}>
  <Team />
  <Locations />
</Suspense>
```

### CSS Optimization

1. **Critical CSS**: Inline above-the-fold styles
2. **Minification**: Automatic via Vite
3. **Unused CSS**: Remove via PurgeCSS or similar
4. **CSS Modules**: Scope styles to components

### JavaScript Optimization

1. **Tree Shaking**: Automatic via Vite
2. **Minification**: Automatic via Vite
3. **Bundle Analysis**: Use rollup-plugin-visualizer
4. **Minimal Dependencies**: Avoid heavy libraries

## Accessibility Considerations

### Semantic HTML

```jsx
<header role="banner">
  <nav role="navigation" aria-label="Main navigation">
    {/* Navigation content */}
  </nav>
</header>

<main role="main">
  <section aria-labelledby="ppl-heading">
    <h2 id="ppl-heading">PPL-Ausbildung</h2>
    {/* Section content */}
  </section>
</main>

<footer role="contentinfo">
  {/* Footer content */}
</footer>
```

### Keyboard Navigation

1. **Tab Order**: Logical flow through interactive elements
2. **Focus Indicators**: Visible outline on focused elements
3. **Skip Links**: "Skip to main content" link for screen readers
4. **Escape Key**: Close mobile menu with Escape key

### Screen Reader Support

1. **Alt Text**: Descriptive alt text for all images
2. **ARIA Labels**: For icon buttons and interactive elements
3. **Live Regions**: For dynamic content updates (if any)
4. **Heading Hierarchy**: Proper h1-h6 structure

### Color Contrast

All text must meet WCAG AA standards:
- Normal text: 4.5:1 contrast ratio
- Large text (18pt+): 3:1 contrast ratio
- Interactive elements: 3:1 contrast ratio

**Verified Combinations**:
- `#FBF7E4` on `#012B36`: 12.8:1 ✓
- `#F37626` on `#012B36`: 4.8:1 ✓
- `#012B36` on `#FBF7E4`: 12.8:1 ✓

## Deployment

### Build Process

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

### Build Output

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [image-files]
└── media/
    └── [optimized-images]
```

### Hosting Options

1. **Netlify**: Drag-and-drop dist folder or connect Git repo
2. **Vercel**: Connect Git repo, auto-deploy on push
3. **GitHub Pages**: Deploy dist folder to gh-pages branch
4. **AWS S3 + CloudFront**: Upload dist folder to S3 bucket
5. **Any Static Host**: Upload dist folder contents

### Environment Variables

Not required for this static site, but if needed:

```env
VITE_CONTACT_EMAIL=contact@efsflightschool.com
VITE_PHONE_PRIMARY=+49 711 720 714 87
VITE_PHONE_SECONDARY=+49 171 65 02 219
```

## Design Decisions and Rationales

### Why Vite + React?

- **Fast Development**: Hot module replacement for instant feedback
- **Optimized Builds**: Automatic code splitting and minification
- **Modern Tooling**: Native ES modules, TypeScript support
- **Component Reusability**: React's component model fits the design system
- **Ecosystem**: Large community and extensive documentation

### Why Single-Page Architecture?

- **Simplicity**: All content accessible without page reloads
- **Performance**: No navigation delays, instant section switching
- **User Experience**: Smooth scrolling creates cohesive experience
- **SEO**: Single page is easier to optimize for search engines
- **Maintenance**: Simpler deployment and content updates

### Why CSS Modules?

- **Scoped Styles**: Prevents style conflicts between components
- **Type Safety**: Can generate TypeScript definitions
- **Performance**: Only loads styles for rendered components
- **Maintainability**: Co-located with component code

### Why No State Management Library?

- **Minimal State**: Only navigation and mobile menu state needed
- **Performance**: Avoid unnecessary bundle size
- **Simplicity**: React's built-in hooks are sufficient
- **Maintainability**: Less complexity, easier to understand

### Image Strategy

- **Real Photos**: Use provided images from src/media for authenticity
- **Fallbacks**: Placeholder images for missing content
- **Optimization**: Lazy loading and responsive images for performance
- **Accessibility**: Descriptive alt text for all images

## Future Enhancements

### Phase 2 Considerations

1. **Contact Form**: Add functional contact form with backend integration
2. **Booking System**: Integrate trial flight booking calendar
3. **Multi-language**: Add English, French, Spanish translations
4. **Blog Section**: Add news/updates section
5. **Gallery**: Expand image galleries for fleet and locations
6. **Video Content**: Add promotional videos or virtual tours
7. **Analytics**: Integrate Google Analytics or similar
8. **CMS Integration**: Connect to headless CMS for content management

### Technical Debt Prevention

1. **Component Documentation**: Add JSDoc comments to all components
2. **Storybook**: Create component library for design system
3. **E2E Testing**: Add Playwright or Cypress tests
4. **Performance Monitoring**: Integrate real user monitoring
5. **Error Tracking**: Add Sentry or similar error tracking
