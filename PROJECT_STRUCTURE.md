# EFS Flightschool Website - Project Structure

## Overview
This project is built with Vite + React for optimal performance and developer experience.

## Folder Structure

```
efs-flightschool-website/
├── src/
│   ├── components/        # React components
│   │   └── Footer.jsx     # Footer component (existing)
│   ├── data/              # Data models and constants
│   │   ├── constants.js   # Color palette, breakpoints, contact info
│   │   ├── fleetData.js   # Aircraft fleet information
│   │   ├── locationData.js # Stuttgart and Mallorca locations
│   │   ├── navigationLinks.js # Navigation menu items
│   │   └── teamData.js    # Team member profiles
│   ├── media/             # Images and static assets
│   ├── styles/            # Global and utility styles
│   │   └── utilities.css  # Utility classes for layout and spacing
│   ├── App.css            # App component styles
│   ├── App.jsx            # Main App component
│   ├── index.css          # Global styles and CSS variables
│   └── main.jsx           # Application entry point
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration with image optimization
└── PROJECT_STRUCTURE.md   # This file

```

## CSS Variables

The project uses CSS custom properties for consistent theming:

### Colors
- `--color-primary`: #012B36 (Dark blue)
- `--color-accent`: #F37626 (Orange)
- `--color-light`: #FBF7E4 (Off-white)
- `--color-bg-light-blue`: #F5FAFF (Light blue background)
- `--color-bg-beige`: #FBF7E4 (Beige background)

### Typography
- Font family: Montserrat, Lato, Poppins
- Responsive font sizes for desktop and mobile
- Font weights: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Spacing
- `--spacing-xs`: 0.5rem (8px)
- `--spacing-sm`: 1rem (16px)
- `--spacing-md`: 1.5rem (24px)
- `--spacing-lg`: 2rem (32px)
- `--spacing-xl`: 3rem (48px)
- `--spacing-xxl`: 4rem (64px)

### Breakpoints
- Mobile: 0-767px
- Tablet: 768-1023px
- Desktop: 1024px+

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Image Optimization

Vite is configured to optimize images during build:
- Images are automatically processed and hashed
- Organized into assets/images folder in build output
- Supports lazy loading for better performance

## Next Steps

Continue with task 2: Create data models and constants (already completed as part of this task)
Then proceed to task 3: Build Navigation component
