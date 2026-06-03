@echo off
REM MCA Portfolio - Quick Start Script for Windows
REM This script helps you get started with the portfolio

echo.
echo 🎨 Welcome to Your Modern Portfolio!
echo ====================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ErrorLevel% NEQ 0 (
    echo ❌ Node.js is not installed!
    echo 📥 Download from: https://nodejs.org
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i

echo ✅ Node.js version: %NODE_VERSION%
echo ✅ npm version: %NPM_VERSION%
echo.

REM Check if in correct directory
if not exist "package.json" (
    echo ⚠️  package.json not found!
    echo 📝 Please run this script from the Portfolio directory
    pause
    exit /b 1
)

echo 📦 Installing dependencies...
call npm install

if %ErrorLevel% EQU 0 (
    echo ✅ Dependencies installed successfully!
    echo.
    echo 🚀 Next steps:
    echo    1. Run: npm run dev
    echo    2. Open: http://localhost:3000
    echo    3. Start customizing!
    echo.
    echo 📚 Documentation:
    echo    - QUICKSTART.md: Quick setup guide
    echo    - README.md: Full documentation
    echo    - DEPLOYMENT.md: Deploy to production
    echo.
    echo Happy coding! 💻
) else (
    echo ❌ Failed to install dependencies
    echo 🔧 Try running: npm install
    pause
    exit /b 1
)

pause
