/**
 * Utility functions for smooth scrolling and navigation
 * Cross-browser compatible with fallbacks for older browsers
 */

/**
 * Smoothly scrolls to a target element with offset for fixed navigation
 * Includes cross-browser compatibility and fallbacks
 * @param {string} targetId - The ID of the target element
 * @param {number} additionalOffset - Additional offset in pixels (default: 10)
 * @returns {boolean} - True if scroll was successful, false otherwise
 */
export const scrollToElement = (targetId, additionalOffset = 10) => {
  const targetElement = document.getElementById(targetId);
  
  if (!targetElement) {
    console.warn(`Element with id "${targetId}" not found`);
    return false;
  }
  
  // Calculate navigation height dynamically
  const nav = document.querySelector('.navigation');
  const navHeight = nav ? nav.offsetHeight : 70;
  
  // Calculate target position with offset
  const offset = navHeight + additionalOffset;
  
  // Use pageYOffset for better cross-browser support (IE/Edge compatibility)
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const targetPosition = targetElement.getBoundingClientRect().top + currentScroll - offset;
  
  // Check if smooth scroll is supported
  if (isSmoothScrollSupported()) {
    try {
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      return true;
    } catch (error) {
      // Fallback for browsers with partial support
      console.warn('Smooth scroll failed, using instant scroll:', error);
      window.scrollTo(0, targetPosition);
      return true;
    }
  } else {
    // Polyfill smooth scroll for browsers that don't support it
    smoothScrollPolyfill(targetPosition);
    return true;
  }
};

/**
 * Polyfill for smooth scrolling in browsers that don't support it natively
 * Uses requestAnimationFrame for smooth animation
 * @param {number} targetPosition - The target scroll position
 * @param {number} duration - Animation duration in milliseconds (default: 500)
 */
const smoothScrollPolyfill = (targetPosition, duration = 500) => {
  const startPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();
  
  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };
  
  const animateScroll = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutQuad(progress);
    
    window.scrollTo(0, startPosition + distance * ease);
    
    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };
  
  requestAnimationFrame(animateScroll);
};

/**
 * Gets the currently active section based on scroll position
 * Cross-browser compatible scroll position detection
 * @returns {string|null} - The ID of the active section or null
 */
export const getActiveSection = () => {
  // Use multiple methods for cross-browser compatibility
  const scrollPosition = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) + 100;
  const sections = document.querySelectorAll('section[id]');
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    if (section.offsetTop <= scrollPosition) {
      return section.id;
    }
  }
  
  return null;
};

/**
 * Checks if smooth scroll is supported by the browser
 * @returns {boolean} - True if smooth scroll is supported
 */
export const isSmoothScrollSupported = () => {
  // Check for CSS scroll-behavior support
  if ('scrollBehavior' in document.documentElement.style) {
    return true;
  }
  
  // Check for ScrollToOptions support
  try {
    const testDiv = document.createElement('div');
    testDiv.scrollTo({ top: 0, behavior: 'smooth' });
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * Detects if the browser is Safari (desktop or mobile)
 * @returns {boolean} - True if Safari browser
 */
export const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1;
};

/**
 * Detects if the browser is iOS Safari
 * @returns {boolean} - True if iOS Safari
 */
export const isIOSSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(ua) && /safari/.test(ua) && !/chrome/.test(ua);
};

/**
 * Detects if the browser is Firefox
 * @returns {boolean} - True if Firefox browser
 */
export const isFirefox = () => {
  return navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
};

/**
 * Detects if the browser is Edge
 * @returns {boolean} - True if Edge browser
 */
export const isEdge = () => {
  return navigator.userAgent.toLowerCase().indexOf('edg') !== -1;
};
