#!/bin/bash

# MCA Portfolio - Quick Start Script
# This script helps you get started with the portfolio

echo "🎨 Welcome to Your Modern Portfolio!"
echo "===================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "📥 Download from: https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Check if in correct directory
if [ ! -f "package.json" ]; then
    echo "⚠️  package.json not found!"
    echo "📝 Please run this script from the Portfolio directory"
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🚀 Next steps:"
    echo "   1. Run: npm run dev"
    echo "   2. Open: http://localhost:3000"
    echo "   3. Start customizing!"
    echo ""
    echo "📚 Documentation:"
    echo "   - QUICKSTART.md: Quick setup guide"
    echo "   - README.md: Full documentation"
    echo "   - DEPLOYMENT.md: Deploy to production"
    echo ""
    echo "Happy coding! 💻"
else
    echo "❌ Failed to install dependencies"
    echo "🔧 Try running: npm install"
    exit 1
fi
