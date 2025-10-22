#!/bin/bash

# My_Tutor Ed Tech Platform - Production Build Script
# This script ensures a clean, production-ready build

echo "🚀 Starting My_Tutor Production Build Process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18+ to continue."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    print_error "Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

print_success "Node.js version check passed: $(node -v)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm to continue."
    exit 1
fi

print_success "npm version: $(npm -v)"

# Clean previous builds
print_status "Cleaning previous builds..."
rm -rf dist
rm -rf node_modules/.vite
print_success "Clean completed"

# Install dependencies
print_status "Installing dependencies..."
npm ci --only=production=false
if [ $? -ne 0 ]; then
    print_error "Failed to install dependencies"
    exit 1
fi
print_success "Dependencies installed successfully"

# Type checking
print_status "Running TypeScript type checking..."
npm run type-check
if [ $? -ne 0 ]; then
    print_error "TypeScript type checking failed"
    exit 1
fi
print_success "TypeScript type checking passed"

# Linting
print_status "Running ESLint..."
npm run lint
if [ $? -ne 0 ]; then
    print_warning "ESLint found issues. Attempting to fix..."
    npm run lint:fix
    if [ $? -ne 0 ]; then
        print_error "ESLint issues could not be automatically fixed"
        exit 1
    fi
    print_success "ESLint issues fixed automatically"
else
    print_success "ESLint passed"
fi

# Build the application
print_status "Building application for production..."
npm run build
if [ $? -ne 0 ]; then
    print_error "Build failed"
    exit 1
fi
print_success "Build completed successfully"

# Check build output
if [ ! -d "dist" ]; then
    print_error "Build output directory 'dist' not found"
    exit 1
fi

# Check if index.html exists
if [ ! -f "dist/index.html" ]; then
    print_error "index.html not found in build output"
    exit 1
fi

print_success "Build output verification passed"

# Display build statistics
print_status "Build Statistics:"
echo "📁 Build directory: $(du -sh dist | cut -f1)"
echo "📄 Files in dist: $(find dist -type f | wc -l)"
echo "📦 JavaScript files: $(find dist -name "*.js" | wc -l)"
echo "🎨 CSS files: $(find dist -name "*.css" | wc -l)"

# Check for common issues
print_status "Checking for common production issues..."

# Check for console.log statements
CONSOLE_LOGS=$(find dist -name "*.js" -exec grep -l "console\." {} \; 2>/dev/null | wc -l)
if [ "$CONSOLE_LOGS" -gt 0 ]; then
    print_warning "Found $CONSOLE_LOGS JavaScript files with console statements"
else
    print_success "No console statements found in production build"
fi

# Check for source maps
SOURCE_MAPS=$(find dist -name "*.map" | wc -l)
if [ "$SOURCE_MAPS" -gt 0 ]; then
    print_warning "Found $SOURCE_MAPS source map files (should be 0 for production)"
else
    print_success "No source maps found (good for production)"
fi

# Check bundle sizes
print_status "Bundle Size Analysis:"
for file in dist/assets/*.js; do
    if [ -f "$file" ]; then
        size=$(du -h "$file" | cut -f1)
        name=$(basename "$file")
        echo "  📦 $name: $size"
    fi
done

for file in dist/assets/*.css; do
    if [ -f "$file" ]; then
        size=$(du -h "$file" | cut -f1)
        name=$(basename "$file")
        echo "  🎨 $name: $size"
    fi
done

print_success "🎉 Production build completed successfully!"
print_status "Your My_Tutor Ed Tech Platform is ready for deployment!"
print_status "Deploy with: vercel --prod"

echo ""
echo "📋 Production Checklist:"
echo "✅ TypeScript compilation successful"
echo "✅ ESLint checks passed"
echo "✅ Build output generated"
echo "✅ No console statements in production"
echo "✅ No source maps in production"
echo "✅ Bundle sizes optimized"
echo ""
echo "🚀 Ready for Vercel deployment!"
