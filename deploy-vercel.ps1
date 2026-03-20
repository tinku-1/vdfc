# Quick Deploy to Vercel

Write-Host "🚀 Deploying Ortho Surgical Products to Vercel..." -ForegroundColor Green
Write-Host ""

# Check if Vercel CLI is installed
if (!(Get-Command vercel -ErrorAction SilentlyContinue)) {
    Write-Host "📦 Installing Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
}

Write-Host ""
Write-Host "✅ Starting deployment..." -ForegroundColor Green
Write-Host ""
Write-Host "Follow the prompts:" -ForegroundColor Cyan
Write-Host "  1. Set up and deploy? → Y" -ForegroundColor White
Write-Host "  2. Which scope? → Select your account" -ForegroundColor White
Write-Host "  3. Link to existing project? → N" -ForegroundColor White
Write-Host "  4. Project name? → ortho-surgical (or your choice)" -ForegroundColor White
Write-Host "  5. In which directory? → ./ " -ForegroundColor White
Write-Host "  6. Override settings? → N" -ForegroundColor White
Write-Host ""

# Deploy
vercel

Write-Host ""
Write-Host "🎉 Deployment initiated!" -ForegroundColor Green
Write-Host ""
Write-Host "To deploy to production (public URL), run:" -ForegroundColor Yellow
Write-Host "  vercel --prod" -ForegroundColor Cyan
Write-Host ""
