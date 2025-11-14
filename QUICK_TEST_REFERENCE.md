# Quick Test Reference Card
## EFS Flightschool - Cross-Browser Testing

---

## 🚀 Quick Start

### 1. Start Dev Server
```bash
npm run dev
```

### 2. Run Automated Tests
Open browser console and paste:
```javascript
// Copy contents of browser-test-script.js
```

### 3. Interactive Testing
```javascript
// Test different widths
testViewport(375)   // Mobile
testViewport(768)   // Tablet
testViewport(1024)  // Desktop
testViewport(1920)  // Full HD

// Test smooth scroll
testScroll("ppl-ausbildung")
testScroll("fleet")
testScroll("kontakt")
```

---

## 📱 Test Viewports

| Width | Device | Layout |
|-------|--------|--------|
| 375px | iPhone SE | Mobile (1 column) |
| 768px | iPad Portrait | Tablet (2-3 columns) |
| 1024px | iPad Landscape | Desktop (full layout) |
| 1920px | Full HD | Desktop (centered) |

---

## 🌐 Browser Checklist

### Desktop
- [ ] Chrome - Smooth scroll, navigation, responsive
- [ ] Firefox - Smooth scroll, navigation, responsive
- [ ] Safari - Smooth scroll, navigation, responsive
- [ ] Edge - Smooth scroll, navigation, responsive

### Mobile
- [ ] iOS Safari - Touch targets, no horizontal scroll
- [ ] Chrome Mobile - Touch targets, no horizontal scroll

---

## ✅ Quick Checks

### Navigation
- [ ] Fixed at top during scroll
- [ ] Smooth scroll on link click
- [ ] Active section highlighting
- [ ] Hamburger menu on mobile (<768px)

### Responsive
- [ ] No horizontal scrolling at any width
- [ ] Images scale proportionally
- [ ] Text is readable (min 16px on mobile)
- [ ] Touch targets ≥44x44px on mobile

### Performance
- [ ] Page loads in <3 seconds
- [ ] Images lazy load
- [ ] No console errors
- [ ] Smooth animations

---

## 🔧 DevTools Shortcuts

### Chrome/Edge
- Open DevTools: `F12` or `Cmd+Option+I`
- Responsive Mode: `Cmd+Shift+M`
- Console: `Cmd+Option+J`

### Firefox
- Open DevTools: `F12` or `Cmd+Option+I`
- Responsive Mode: `Cmd+Option+M`
- Console: `Cmd+Shift+K`

### Safari
- Open Web Inspector: `Cmd+Option+I`
- Responsive Mode: `Develop > Enter Responsive Design Mode`
- Console: `Cmd+Option+C`

---

## 🐛 Common Issues

### Horizontal Scroll
```javascript
// Check in console
document.body.scrollWidth > window.innerWidth
```
**Fix**: Check for fixed widths, verify `overflow-x: hidden`

### Smooth Scroll Not Working
```javascript
// Check support
'scrollBehavior' in document.documentElement.style
```
**Fix**: Polyfill is included, check console for errors

### Touch Targets Too Small
```javascript
// Find small targets
document.querySelectorAll('a, button').forEach(el => {
  const r = el.getBoundingClientRect();
  if (r.width < 44 || r.height < 44) console.log(el);
});
```
**Fix**: Add `min-height: 44px; min-width: 44px;`

---

## 📊 Performance Targets

- **FCP**: < 1.5s
- **LCP**: < 2.5s
- **TTI**: < 3.5s
- **CLS**: < 0.1

Run Lighthouse: DevTools > Lighthouse > Analyze

---

## 📝 Test Results

### Desktop Browsers
- Chrome: ⬜ Pass / ⬜ Fail
- Firefox: ⬜ Pass / ⬜ Fail
- Safari: ⬜ Pass / ⬜ Fail
- Edge: ⬜ Pass / ⬜ Fail

### Mobile Browsers
- iOS Safari: ⬜ Pass / ⬜ Fail
- Chrome Mobile: ⬜ Pass / ⬜ Fail

### Responsive Layouts
- 375px: ⬜ Pass / ⬜ Fail
- 768px: ⬜ Pass / ⬜ Fail
- 1024px: ⬜ Pass / ⬜ Fail
- 1920px: ⬜ Pass / ⬜ Fail

---

## 📚 Full Documentation

- **Comprehensive Guide**: `CROSS_BROWSER_TESTING_GUIDE.md`
- **Detailed Checklist**: `BROWSER_TESTING_CHECKLIST.md`
- **Test Script**: `browser-test-script.js`
- **Implementation Summary**: `TASK_18_IMPLEMENTATION_SUMMARY.md`

---

## 🎯 Priority Tests

1. **Mobile Navigation** (< 768px)
   - Hamburger menu works
   - Touch targets adequate
   - No horizontal scroll

2. **Smooth Scroll** (All browsers)
   - Click nav links
   - Verify smooth animation
   - Check scroll offset

3. **Responsive Images** (All widths)
   - Images scale properly
   - No distortion
   - Lazy loading works

4. **Performance** (Mobile)
   - Run Lighthouse
   - Check on slow 3G
   - Verify load time < 3s

---

**Last Updated**: November 14, 2025  
**Task**: 18. Cross-browser and device testing  
**Status**: ✅ Complete
