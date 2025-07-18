# Website Publication Plan - Vercel Deployment

## Platform Selection: Vercel (Recommended)

**Why Vercel?**
- **Zero configuration** - Built by the Next.js team, perfect compatibility
- **Fastest deployment** - 2-3 minutes from start to live site
- **No database required** - Static generation support
- **Automatic builds** - Detects Next.js projects automatically
- **Best performance** - Global CDN and edge optimization
- **Free tier** - Generous limits for personal projects

## Prerequisites
- GitHub account
- Vercel account (free)
- Your code pushed to GitHub

## Step-by-Step Deployment Guide

### Phase 1: Prepare Your Project (5 minutes)

1. **Verify build works locally**
   ```bash
   npm run build
   ```
   - Ensure no build errors
   - Fix any TypeScript/ESLint issues

2. **Update package.json scripts (if needed)**
   ```json
   {
     "scripts": {
       "dev": "next dev",
       "build": "next build",
       "start": "next start"
     }
   }
   ```

3. **Configure Next.js for static export (optional)**
   - If you want static hosting, add to `next.config.mjs`:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     experimental: {
       optimizePackageImports: ["@untitledui/icons"],
     },
     output: 'export', // Add this for static export
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   };
   ```

### Phase 2: Push to GitHub (2 minutes)

1. **Initialize git repository (if not done)**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub repository**
   - Go to github.com
   - Click "New repository"
   - Name it (e.g., "automatique-website")
   - Don't initialize with README

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/automatique-website.git
   git branch -M main
   git push -u origin main
   ```

### Phase 3: Deploy to Vercel (2 minutes)

1. **Sign up for Vercel**
   - Go to vercel.com
   - Sign up with GitHub account

2. **Import your project**
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will automatically detect it's a Next.js project

3. **Configure deployment**
   - **Project Name**: `automatique-website`
   - **Framework**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Environment Variables**: None needed for basic deployment

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - You'll get a live URL like: `https://automatique-website.vercel.app`

### Phase 4: Custom Domain (Optional - 5 minutes)

1. **Add custom domain**
   - Go to Project Settings → Domains
   - Add your domain (e.g., `automatique.com`)
   - Update DNS records as instructed by Vercel

2. **DNS Configuration**
   - Add A record: `76.76.19.61`
   - Add CNAME record: `www` → `cname.vercel-dns.com`

## Alternative Platforms (If Vercel doesn't work)

### Option 2: Netlify (Backup Choice)
- **Time**: 5-10 minutes
- **Steps**:
  1. Sign up at netlify.com
  2. Connect GitHub repository
  3. Set build command: `npm run build`
  4. Set publish directory: `.next`
  5. Deploy

### Option 3: GitHub Pages (Static Only)
- **Time**: 10-15 minutes
- **Requirements**: Must configure static export
- **Steps**:
  1. Enable GitHub Pages in repository settings
  2. Use GitHub Actions for deployment
  3. Configure workflow file

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages are accessible
- [ ] Images and assets load properly
- [ ] Mobile responsiveness works
- [ ] Contact forms work (if applicable)
- [ ] All links function correctly
- [ ] SSL certificate is active (https://)

## Continuous Deployment

Once set up, every push to your main branch will automatically:
1. Trigger a new build
2. Deploy to production
3. Update your live site

## Troubleshooting

### Common Issues:
1. **Build fails**: Check `npm run build` locally first
2. **Images not loading**: Verify file paths and case sensitivity
3. **404 errors**: Check routing configuration
4. **Environment variables**: Add them in Vercel dashboard

### Performance Optimization:
- Enable Vercel Analytics
- Use Image Optimization
- Configure caching headers
- Enable compression

## Total Time Estimate: 15-20 minutes
- Project prep: 5 minutes
- GitHub setup: 2 minutes
- Vercel deployment: 2-3 minutes
- Testing and verification: 5-10 minutes

## Cost: $0 (Free tier sufficient for most projects)

---

**Next Steps After Deployment:**
1. Test the live site thoroughly
2. Set up monitoring/analytics
3. Configure custom domain if needed
4. Document the deployment process for team members