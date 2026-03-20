# Quick Deploy to Netlify

Write-Host "🚀 Deploying Ortho Surgical Products to Netlify..." -ForegroundColor Green
Write-Host ""

# Check if Netlify CLI is installed
if (!(Get-Command netlify -ErrorAction SilentlyContinue)) {
    Write-Host "📦 Installing Netlify CLI..." -ForegroundColor Yellow
    npm install -g netlify-cli
}

Write-Host ""
Write-Host "📦 Building application..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Build successful! Starting deployment..." -ForegroundColor Green
    Write-Host ""
    Write-Host "Follow the prompts:" -ForegroundColor Cyan
    Write-Host "  1. Authorize with Netlify (browser will open)" -ForegroundColor White
    Write-Host "  2. Choose 'Create & configure a new site'" -ForegroundColor White
    Write-Host "  3. Publish directory: → dist" -ForegroundColor White
    Write-Host ""
    
    # Deploy
    netlify deploy
    
    Write-Host ""
    Write-Host "🎉 Preview deployment complete!" -ForegroundColor Green
    Write-Host ""
    Write-Host "To deploy to production, run:" -ForegroundColor Yellow
    Write-Host "  netlify deploy --prod" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "❌ Build failed. Please fix errors and try again." -ForegroundColor Red
}

Write-Host ""
