/**
 * Design system constants including colors, breakpoints, and spacing
 */

// Color palette based on requirements 12.1, 12.2, 12.3
export const colors = {
  // Primary colors
  primary: '#012B36',        // Dark blue for header and footer
  accent: '#F37626',         // Orange for interactive elements and highlights
  offWhite: '#FBF7E4',       // Off-white for text on dark backgrounds
  
  // Background colors for sections
  lightBlue: '#F5FAFF',      // Light blue background
  warmBeige: '#FBF7E4',      // Warm beige background
  white: '#FFFFFF',          // White background
  
  // Text colors
  textPrimary: '#012B36',    // Primary text color
  textLight: '#FBF7E4',      // Light text for dark backgrounds
  textAccent: '#F37626'      // Accent text color
};

// Responsive breakpoints
export const breakpoints = {
  mobile: '767px',           // 0-767px
  tablet: '1023px',          // 768-1023px
  desktop: '1024px'          // 1024px+
};

// Spacing system
export const spacing = {
  xs: '0.5rem',    // 8px
  sm: '1rem',      // 16px
  md: '1.5rem',    // 24px
  lg: '2rem',      // 32px
  xl: '3rem',      // 48px
  xxl: '4rem'      // 64px
};

// Typography scale
export const typography = {
  desktop: {
    h1: '3rem',           // 48px
    h2: '2.5rem',         // 40px
    h3: '2rem',           // 32px
    body: '1.125rem',     // 18px
    small: '1rem'         // 16px
  },
  mobile: {
    h1: '2rem',           // 32px
    h2: '1.75rem',        // 28px
    h3: '1.5rem',         // 24px
    body: '1rem',         // 16px
    small: '0.875rem'     // 14px
  }
};

// Button styling constants
export const button = {
  backgroundColor: '#F37626',
  borderRadius: '6px',
  textColor: '#FFFFFF',
  fontWeight: 'bold'
};

// Navigation constants
export const navigation = {
  height: {
    desktop: '70px',
    mobile: '60px'
  },
  zIndex: 1000
};

// Section padding
export const section = {
  paddingDesktop: '4rem 2rem',
  paddingMobile: '3rem 1.5rem',
  maxWidth: '1200px'
};
