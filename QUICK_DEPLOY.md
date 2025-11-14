# Quick Deployment Reference

## 🚀 Deploy to GitHub Pages (Testing)

### One-Time Setup

1. **Enable GitHub Pages in repository settings**:
   - Go to: Settings → Pages
   - Source: GitHub Actions
   - Save

2. **Push code to trigger deployment**:
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push origin main
   ```

3. **Access your site**:
   - URL: `https://deckenmarc.github.io/efsflightschool/`
   - Wait 2-3 minutes for first deployment

### Subsequent Deployments

```bash
# Make your changes, then:
git add .
git commit -m "Update website"
git push origin main
```

Deployment happens automatically via GitHub Actions!

---

## 🏢 Deploy to Coolify (Production)

### One-Time Setup

1. **Create new resource in Coolify**:
   - Type: Static Site
   - Source: Connect GitHub repository
   - Branch: `main`

2. **Configure build settings**:
   ```
   Build Command: npm install && npm run build
   Publish Directory: dist
   Install Command: npm install
   ```

3. **Add custom domain** (optional):
   - Domain: `efsflightschool.com`
   - Enable SSL/TLS
   - Configure DNS as instructed

### Subsequent Deployments

**Option 1: Automatic (Recommended)**
- Push to main branch → Coolify auto-deploys

**Option 2: Manual**
- Go to Coolify dashboard
- Click "Deploy" button

---

## 🛠️ Local Development

### Start Development Server
```bash
npm run dev
```
Access at: `http://localhost:5173/`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```
Access at: `http://localhost:4173/`

---

## ✅ Pre-Deployment Checklist

Before deploying, ensure:

- [ ] Code builds without errors: `npm run build`
- [ ] Preview works locally: `npm run preview`
- [ ] All images display correctly
- [ ] Navigation and scrolling work
- [ ] Mobile menu functions properly
- [ ] Contact links work (mailto, tel)
- [ ] Responsive design looks good on mobile

---

## 📊 Verify Deployment

After deployment, check:

1. **Visit the deployed URL**
2. **Test all sections** - scroll through entire page
3. **Test navigation** - click all menu items
4. **Test mobile view** - resize browser or use mobile device
5. **Test mobile menu** - hamburger menu on small screens
6. **Test contact links** - email and phone links
7. **Check images** - all images load properly

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading
- Check browser console for 404 errors
- Verify image paths in components
- Ensure images are in `src/media/` folder

### Blank Page After Deploy
- Check browser console for errors
- Verify base path in `vite.config.js`
- Check GitHub Actions logs for build errors

### GitHub Actions Fails
- Check Actions tab in GitHub repository
- Review error logs
- Ensure Node.js version is 18+
- Verify all dependencies are in `package.json`

---

## 📞 Quick Commands

```bash
# Install dependencies
npm install

# Development
npm run dev

# Build
npm run build

# Preview build
npm run preview

# Deploy to GitHub Pages (automatic via push)
git push origin main

# Check build size
npm run build && du -sh dist/
```

---

## 🔗 Important URLs

- **GitHub Repository**: https://github.com/Deckenmarc/efsflightschool
- **GitHub Pages** (Testing): https://deckenmarc.github.io/efsflightschool/
- **Coolify** (Production): [Your Coolify URL]
- **Local Dev**: http://localhost:5173/
- **Local Preview**: http://localhost:4173/

---

## 📚 Documentation

- Full deployment guide: `DEPLOYMENT.md`
- Build verification: `BUILD_VERIFICATION.md`
- Project structure: `PROJECT_STRUCTURE.md`
- Performance report: `PERFORMANCE_OPTIMIZATION_REPORT.md`
- Accessibility report: `ACCESSIBILITY_COMPLIANCE_REPORT.md`

---

**Last Updated**: November 14, 2025
