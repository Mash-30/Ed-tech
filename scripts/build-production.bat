@echo off
REM My_Tutor Ed Tech Platform - Production Build Script for Windows
REM This script ensures a clean, production-ready build

echo 🚀 Starting My_Tutor Production Build Process...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed. Please install Node.js 18+ to continue.
    exit /b 1
)

REM Check Node.js version
for /f "tokens=1 delims=v" %%i in ('node --version') do set NODE_VERSION=%%i
for /f "tokens=1 delims=." %%i in ("%NODE_VERSION%") do set NODE_MAJOR=%%i
if %NODE_MAJOR% lss 18 (
    echo [ERROR] Node.js version 18+ is required. Current version: 
    node --version
    exit /b 1
)

echo [SUCCESS] Node.js version check passed:
node --version

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] npm is not installed. Please install npm to continue.
    exit /b 1
)

echo [SUCCESS] npm version:
npm --version

REM Clean previous builds
echo [INFO] Cleaning previous builds...
if exist dist rmdir /s /q dist
if exist node_modules\.vite rmdir /s /q node_modules\.vite
echo [SUCCESS] Clean completed

REM Install dependencies
echo [INFO] Installing dependencies...
npm ci --only=production=false
if %errorlevel% neq 0 (
    echo [ERROR] Failed to install dependencies
    exit /b 1
)
echo [SUCCESS] Dependencies installed successfully

REM Type checking
echo [INFO] Running TypeScript type checking...
npm run type-check
if %errorlevel% neq 0 (
    echo [ERROR] TypeScript type checking failed
    exit /b 1
)
echo [SUCCESS] TypeScript type checking passed

REM Linting
echo [INFO] Running ESLint...
npm run lint
if %errorlevel% neq 0 (
    echo [WARNING] ESLint found issues. Attempting to fix...
    npm run lint:fix
    if %errorlevel% neq 0 (
        echo [ERROR] ESLint issues could not be automatically fixed
        exit /b 1
    )
    echo [SUCCESS] ESLint issues fixed automatically
) else (
    echo [SUCCESS] ESLint passed
)

REM Build the application
echo [INFO] Building application for production...
npm run build
if %errorlevel% neq 0 (
    echo [ERROR] Build failed
    exit /b 1
)
echo [SUCCESS] Build completed successfully

REM Check build output
if not exist dist (
    echo [ERROR] Build output directory 'dist' not found
    exit /b 1
)

if not exist dist\index.html (
    echo [ERROR] index.html not found in build output
    exit /b 1
)

echo [SUCCESS] Build output verification passed

REM Display build statistics
echo [INFO] Build Statistics:
for /f %%i in ('dir dist /s /-c ^| find "File(s)"') do echo 📁 Build directory: %%i
for /f %%i in ('dir dist /s /b ^| find /c /v ""') do echo 📄 Files in dist: %%i

echo [SUCCESS] 🎉 Production build completed successfully!
echo [INFO] Your My_Tutor Ed Tech Platform is ready for deployment!
echo [INFO] Deploy with: vercel --prod

echo.
echo 📋 Production Checklist:
echo ✅ TypeScript compilation successful
echo ✅ ESLint checks passed
echo ✅ Build output generated
echo ✅ Build verification passed
echo.
echo 🚀 Ready for Vercel deployment!

pause
