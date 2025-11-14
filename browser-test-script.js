/**
 * Browser Testing Script
 * Run this script in the browser console to test responsive layouts and functionality
 * Task 18: Cross-browser and device testing
 */

(function() {
  'use strict';
  
  console.log('=== EFS Flightschool Browser Testing Script ===\n');
  
  // Test 1: Browser Detection
  console.log('1. BROWSER DETECTION');
  const ua = navigator.userAgent.toLowerCase();
  const isChrome = /chrome/.test(ua) && !/edg/.test(ua);
  const isFirefox = /firefox/.test(ua);
  const isSafari = /safari/.test(ua) && !/chrome/.test(ua);
  const isEdge = /edg/.test(ua);
  const isIOS = /iphone|ipad|ipod/.test(ua);
  const isAndroid = /android/.test(ua);
  
  console.log(`Chrome: ${isChrome}`);
  console.log(`Firefox: ${isFirefox}`);
  console.log(`Safari: ${isSafari}`);
  console.log(`Edge: ${isEdge}`);
  console.log(`iOS: ${isIOS}`);
  console.log(`Android: ${isAndroid}`);
  console.log('');
  
  // Test 2: Viewport Dimensions
  console.log('2. VIEWPORT DIMENSIONS');
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  console.log(`Width: ${viewportWidth}px`);
  console.log(`Height: ${viewportHeight}px`);
  
  let breakpoint = 'Desktop';
  if (viewportWidth < 768) {
    breakpoint = 'Mobile';
  } else if (viewportWidth < 1024) {
    breakpoint = 'Tablet';
  }
  console.log(`Current Breakpoint: ${breakpoint}`);
  console.log('');
  
  // Test 3: Smooth Scroll Support
  console.log('3. SMOOTH SCROLL SUPPORT');
  const smoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
  console.log(`Native Smooth Scroll: ${smoothScrollSupported}`);
  console.log('');
  
  // Test 4: Navigation Elements
  console.log('4. NAVIGATION ELEMENTS');
  const nav = document.querySelector('.navigation');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  console.log(`Navigation found: ${!!nav}`);
  console.log(`Navigation height: ${nav ? nav.offsetHeight : 'N/A'}px`);
  console.log(`Desktop nav links: ${navLinks.length}`);
  console.log(`Mobile menu button: ${!!mobileMenuButton}`);
  console.log(`Mobile menu: ${!!mobileMenu}`);
  
  if (viewportWidth < 768) {
    console.log(`Mobile menu button visible: ${mobileMenuButton ? window.getComputedStyle(mobileMenuButton).display !== 'none' : false}`);
    console.log(`Desktop nav links hidden: ${navLinks.length > 0 ? window.getComputedStyle(navLinks[0].parentElement).display === 'none' : false}`);
  }
  console.log('');
  
  // Test 5: Section Detection
  console.log('5. SECTIONS');
  const sections = document.querySelectorAll('section[id]');
  console.log(`Total sections: ${sections.length}`);
  sections.forEach(section => {
    console.log(`  - ${section.id}: ${section.offsetHeight}px height`);
  });
  console.log('');
  
  // Test 6: Images
  console.log('6. IMAGES');
  const images = document.querySelectorAll('img');
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  let imagesWithAlt = 0;
  let imagesWithoutAlt = 0;
  
  images.forEach(img => {
    if (img.alt && img.alt.trim() !== '') {
      imagesWithAlt++;
    } else {
      imagesWithoutAlt++;
    }
  });
  
  console.log(`Total images: ${images.length}`);
  console.log(`Lazy-loaded images: ${lazyImages.length}`);
  console.log(`Images with alt text: ${imagesWithAlt}`);
  console.log(`Images without alt text: ${imagesWithoutAlt}`);
  console.log('');
  
  // Test 7: Touch Target Sizes (Mobile)
  if (viewportWidth < 768) {
    console.log('7. TOUCH TARGET SIZES (Mobile)');
    const interactiveElements = document.querySelectorAll('a, button, input, select, [role="button"]');
    let tooSmall = 0;
    let adequate = 0;
    
    interactiveElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.width < 44 || rect.height < 44) {
        tooSmall++;
      } else {
        adequate++;
      }
    });
    
    console.log(`Interactive elements: ${interactiveElements.length}`);
    console.log(`Adequate size (≥44x44px): ${adequate}`);
    console.log(`Too small (<44x44px): ${tooSmall}`);
    console.log('');
  }
  
  // Test 8: Horizontal Overflow Check
  console.log('8. HORIZONTAL OVERFLOW CHECK');
  const bodyWidth = document.body.scrollWidth;
  const viewportWidthCheck = document.documentElement.clientWidth;
  const hasHorizontalScroll = bodyWidth > viewportWidthCheck;
  
  console.log(`Body scroll width: ${bodyWidth}px`);
  console.log(`Viewport width: ${viewportWidthCheck}px`);
  console.log(`Horizontal scroll present: ${hasHorizontalScroll}`);
  
  if (hasHorizontalScroll) {
    console.warn('⚠️ WARNING: Horizontal scrolling detected!');
    
    // Find elements causing overflow
    const allElements = document.querySelectorAll('*');
    const overflowElements = [];
    
    allElements.forEach(el => {
      if (el.scrollWidth > viewportWidthCheck) {
        overflowElements.push({
          element: el.tagName,
          class: el.className,
          id: el.id,
          width: el.scrollWidth
        });
      }
    });
    
    if (overflowElements.length > 0) {
      console.log('Elements causing overflow:');
      overflowElements.slice(0, 5).forEach(el => {
        console.log(`  - ${el.element}${el.id ? '#' + el.id : ''}${el.class ? '.' + el.class.split(' ')[0] : ''}: ${el.width}px`);
      });
    }
  } else {
    console.log('✓ No horizontal overflow detected');
  }
  console.log('');
  
  // Test 9: Grid Layouts
  console.log('9. GRID LAYOUTS');
  const fleetGrid = document.querySelector('.fleet-grid');
  const teamGrid = document.querySelector('.team-grid');
  const locationGrid = document.querySelector('.location-grid');
  
  const checkGrid = (grid, name) => {
    if (grid) {
      const style = window.getComputedStyle(grid);
      const display = style.display;
      const gridTemplateColumns = style.gridTemplateColumns;
      console.log(`${name}:`);
      console.log(`  Display: ${display}`);
      console.log(`  Grid columns: ${gridTemplateColumns}`);
    }
  };
  
  checkGrid(fleetGrid, 'Fleet Grid');
  checkGrid(teamGrid, 'Team Grid');
  checkGrid(locationGrid, 'Location Grid');
  console.log('');
  
  // Test 10: Focus Indicators
  console.log('10. FOCUS INDICATORS');
  const focusableElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
  console.log(`Focusable elements: ${focusableElements.length}`);
  console.log('Test keyboard navigation manually by pressing Tab key');
  console.log('');
  
  // Test 11: Performance Metrics
  console.log('11. PERFORMANCE METRICS');
  if (window.performance && window.performance.timing) {
    const timing = window.performance.timing;
    const loadTime = timing.loadEventEnd - timing.navigationStart;
    const domReady = timing.domContentLoadedEventEnd - timing.navigationStart;
    
    console.log(`Page Load Time: ${loadTime}ms`);
    console.log(`DOM Ready Time: ${domReady}ms`);
  }
  
  if (window.performance && window.performance.getEntriesByType) {
    const paintEntries = window.performance.getEntriesByType('paint');
    paintEntries.forEach(entry => {
      console.log(`${entry.name}: ${entry.startTime.toFixed(2)}ms`);
    });
  }
  console.log('');
  
  // Test 12: Responsive Layout Test Function
  console.log('12. RESPONSIVE LAYOUT TESTING');
  console.log('Use the following function to test different viewport widths:');
  console.log('testViewport(375)  - Test mobile (iPhone SE)');
  console.log('testViewport(768)  - Test tablet');
  console.log('testViewport(1024) - Test small desktop');
  console.log('testViewport(1920) - Test full HD desktop');
  console.log('');
  
  window.testViewport = function(width) {
    console.log(`\n=== Testing at ${width}px width ===`);
    console.log('Please resize your browser window or use DevTools device emulation');
    console.log(`Current width: ${window.innerWidth}px`);
    
    if (Math.abs(window.innerWidth - width) > 50) {
      console.warn(`⚠️ Current width (${window.innerWidth}px) differs from target (${width}px)`);
    } else {
      console.log('✓ Width matches target');
    }
  };
  
  // Test 13: Scroll Test Function
  console.log('13. SCROLL TESTING');
  console.log('Use the following function to test smooth scrolling:');
  console.log('testScroll("ppl-ausbildung")');
  console.log('testScroll("fleet")');
  console.log('testScroll("kontakt")');
  console.log('');
  
  window.testScroll = function(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) {
      console.error(`Section "${sectionId}" not found`);
      return;
    }
    
    console.log(`Scrolling to section: ${sectionId}`);
    const startTime = performance.now();
    
    const nav = document.querySelector('.navigation');
    const navHeight = nav ? nav.offsetHeight : 70;
    const offset = navHeight + 10;
    const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
    
    setTimeout(() => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      const currentScroll = window.pageYOffset;
      const difference = Math.abs(currentScroll - targetPosition);
      
      console.log(`Scroll completed in ${duration.toFixed(2)}ms`);
      console.log(`Target position: ${targetPosition}px`);
      console.log(`Current position: ${currentScroll}px`);
      console.log(`Difference: ${difference}px`);
      
      if (difference < 10) {
        console.log('✓ Scroll accurate');
      } else {
        console.warn('⚠️ Scroll position may be off');
      }
    }, 1000);
  };
  
  // Summary
  console.log('=== TEST SUMMARY ===');
  console.log(`Browser: ${isChrome ? 'Chrome' : isFirefox ? 'Firefox' : isSafari ? 'Safari' : isEdge ? 'Edge' : 'Unknown'}`);
  console.log(`Viewport: ${viewportWidth}x${viewportHeight} (${breakpoint})`);
  console.log(`Smooth Scroll: ${smoothScrollSupported ? '✓' : '✗'}`);
  console.log(`Horizontal Overflow: ${hasHorizontalScroll ? '✗ FAIL' : '✓ PASS'}`);
  console.log(`Images with Alt: ${imagesWithAlt}/${images.length}`);
  console.log('\nRun testViewport(width) and testScroll(sectionId) for interactive testing');
  console.log('=== END OF TESTS ===\n');
  
})();
