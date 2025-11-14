# EFS Flightschool Website - Deployment Guide

## Production Build

The website is built using Vite and React, producing optimized static files ready for deployment.

### Build Process

```bash
# Install dependencies
npm install

# Create production build
npm run build
```

The build output is generated in the `dist/` directory with the following structure:

```
dist/
├── index.html                    # Main HTML file
└── assets/
    ├── css/                      # Minified CSS files
    ├── images/                   # Optimized images
    ├── index-[hash].js          # Main application bundle
    ├── vendor-[hash].js         # Third-party dependencies
    └── vendor-react-[hash].js   # React framework bundle
```

### Build Optimizations

The production build includes:

- **Code Splitting**: Separate bundles for React, vendor libraries, and application code
- **Minification**: JavaScript minified with Terser, CSS minified automatically
- **Tree Shaking**: Unused code automatically removed
- **Image Optimization**: Images organized and hashed for optimal caching
- **Console Removal**: All console.log statements removed in production
- **Asset Hashing**: Cache-busting through content-based hashing

### Local Testing

Test the production build locally before deployment:

```bash
# Build and preview
npm run build
npm run preview
```

The preview server runs at `http://localhost:4173/`

## Deployment Options

### Option 1: GitHub Pages (Recommended for Testing)

#### Automatic Deployment with GitHub Actions

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: GitHub Actions

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Access your site**:
   - URL: `https://[username].github.io/[repository-name]/`

#### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to gh-pages branch
npx gh-pages -d dist
```

### Option 2: Coolify (Recommended for Production)

Coolify is a self-hosted platform for deploying applications.

#### Prerequisites

- Coolify instance running and accessible
- Git repository connected to Coolify

#### Deployment Steps

1. **Create New Resource in Coolify**:
   - Type: Static Site
   - Source: GitHub repository
   - Branch: main

2. **Build Configuration**:
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables** (if needed):
   - `VITE_BASE_PATH`: Set if deploying to subdirectory

4. **Deploy**:
   - Coolify will automatically build and deploy on push to main branch

#### Custom Domain

In Coolify:
1. Go to your application settings
2. Add custom domain (e.g., `efsflightschool.com`)
3. Configure DNS records as instructed
4. Enable SSL/TLS certificate

### Option 3: Netlify

1. **Connect Repository**:
   - Sign in to Netlify
   - Click "New site from Git"
   - Select your repository

2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Deploy**:
   - Automatic deployment on push to main

### Option 4: Vercel

1. **Import Project**:
   - Sign in to Vercel
   - Click "Import Project"
   - Select your repository

2. **Configure**:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

3. **Deploy**:
   - Automatic deployment on push to main

### Option 5: AWS S3 + CloudFront

1. **Create S3 Bucket**:
   ```bash
   aws s3 mb s3://efsflightschool-website
   ```

2. **Upload Build**:
   ```bash
   npm run build
   aws s3 sync dist/ s3://efsflightschool-website --delete
   ```

3. **Configure Static Website Hosting**:
   - Enable static website hosting in S3 bucket settings
   - Set index document: `index.html`
   - Set error document: `index.html`

4. **Set Up CloudFront** (optional, for CDN):
   - Create CloudFront distribution
   - Origin: S3 bucket
   - Enable HTTPS

## Environment Configuration

### Base Path Configuration

If deploying to a subdirectory (e.g., GitHub Pages with repository name):

```bash
# Set base path for build
VITE_BASE_PATH=/repository-name/ npm run build
```

Or update `vite.config.js`:

```javascript
export default defineConfig({
  base: '/repository-name/',
  // ... rest of config
})
```

### Environment Variables

Create `.env.production` for production-specific variables:

```env
VITE_CONTACT_EMAIL=contact@efsflightschool.com
VITE_PHONE_PRIMARY=+49 711 720 714 87
VITE_PHONE_SECONDARY=+49 171 65 02 219
```

## Post-Deployment Verification

After deployment, verify:

1. **Functionality**:
   - [ ] All sections load correctly
   - [ ] Navigation works and scrolls smoothly
   - [ ] Images display properly
   - [ ] Mobile menu functions correctly
   - [ ] Contact links work (mailto, tel)

2. **Performance**:
   - [ ] Run Lighthouse audit (target: 90+ performance score)
   - [ ] Check loading times on 3G connection
   - [ ] Verify image lazy loading

3. **Accessibility**:
   - [ ] Test keyboard navigation
   - [ ] Verify screen reader compatibility
   - [ ] Check color contrast

4. **Cross-Browser**:
   - [ ] Test on Chrome, Firefox, Safari, Edge
   - [ ] Test on mobile devices (iOS Safari, Chrome Mobile)

5. **SEO**:
   - [ ] Verify meta tags
   - [ ] Check Open Graph tags
   - [ ] Test social media sharing

## Troubleshooting

### Images Not Loading

If images don't load after deployment:

1. Check image paths in build output
2. Verify base path configuration
3. Check browser console for 404 errors

### Blank Page After Deployment

1. Check browser console for errors
2. Verify base path matches deployment location
3. Ensure all assets are uploaded correctly

### Routing Issues

For single-page applications:

1. Configure server to redirect all routes to `index.html`
2. For GitHub Pages, this is handled automatically
3. For other hosts, add appropriate redirect rules

## Continuous Deployment

### GitHub Actions Workflow

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

1. Triggers on push to main branch
2. Installs dependencies
3. Runs production build
4. Deploys to GitHub Pages

### Coolify Auto-Deploy

Coolify automatically deploys when:

1. Code is pushed to the configured branch
2. Webhook is triggered from GitHub
3. Manual deployment is initiated from Coolify dashboard

## Rollback Procedure

### GitHub Pages

```bash
# Revert to previous commit
git revert HEAD
git push origin main
```

### Coolify

1. Go to deployment history in Coolify dashboard
2. Select previous successful deployment
3. Click "Redeploy"

### Manual Rollback

```bash
# Checkout previous version
git checkout <previous-commit-hash>

# Build and deploy
npm run build
# Deploy using your chosen method
```

## Monitoring

### Recommended Tools

1. **Google Analytics**: Track visitor behavior
2. **Sentry**: Error tracking and monitoring
3. **Uptime Robot**: Monitor site availability
4. **Lighthouse CI**: Automated performance monitoring

## Security

### HTTPS

Always deploy with HTTPS enabled:

- GitHub Pages: Automatic HTTPS
- Coolify: Enable SSL/TLS in settings
- Netlify/Vercel: Automatic HTTPS
- AWS: Use CloudFront with ACM certificate

### Security Headers

Add security headers in your hosting configuration:

```
Content-Security-Policy: default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline';
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

## Support

For deployment issues:

- Check build logs for errors
- Verify all dependencies are installed
- Ensure Node.js version compatibility (v18+)
- Review hosting provider documentation

## Maintenance

### Regular Updates

1. Update dependencies monthly:
   ```bash
   npm update
   npm audit fix
   ```

2. Rebuild and redeploy:
   ```bash
   npm run build
   # Deploy using your chosen method
   ```

3. Monitor performance and accessibility scores
4. Review and update content as needed
