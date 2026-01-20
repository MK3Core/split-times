# GitHub Pages Deployment Instructions

## Initial Setup

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Click on `Settings` → `Pages` (in the left sidebar)
   - Under "Build and deployment":
     - Source: Select **GitHub Actions**

2. **The base path is already configured for your repository:**
   - Your repo is `split-times`, so the base path in `vite.config.js` is set to `/split-times/`
   - If you ever rename your repository, update line 6 in `vite.config.js`

## Deploying

The site will automatically deploy when you push to the `main` branch.

### Manual Deployment

You can also trigger a manual deployment:
1. Go to the `Actions` tab in your GitHub repository
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow" → "Run workflow"

### After Deployment

Your site will be available at:
```
https://your-username.github.io/split-times/
```

Replace `your-username` with your GitHub username.

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (test before deploying)
npm run build

# Preview production build locally
npm run preview
```

## Troubleshooting

### Workflow fails
- Check the Actions tab for error messages
- Ensure you have enabled GitHub Pages in Settings

### 404 errors after deployment
- Verify the `base` path in `vite.config.js` matches your repository name
- Make sure it includes the trailing slash: `/repo-name/`

### Assets not loading
- This is usually caused by an incorrect `base` path
- Double-check the repository name matches exactly

## Updating Your Site

Just push changes to the `main` branch and GitHub Actions will automatically rebuild and deploy your site!
