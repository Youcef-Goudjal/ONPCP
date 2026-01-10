#!/bin/bash

# ONPCP Development Setup Script

echo "🚀 Setting up ONPCP Monorepo..."
echo ""

# Check Node version
echo "📋 Checking Node.js version..."
NODE_VERSION=$(node -v)
echo "   Node.js: $NODE_VERSION"

# Check npm version
NPM_VERSION=$(npm -v)
echo "   npm: $NPM_VERSION"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build shared types
echo "🔨 Building shared types package..."
npm run build --workspace=packages/types

# Check if .env.local exists for frontend
if [ ! -f "apps/frontend/.env.local" ]; then
    echo "⚠️  Creating frontend .env.local from example..."
    cp apps/frontend/.env.example apps/frontend/.env.local
    echo "   ✅ Created apps/frontend/.env.local"
    echo "   ⚠️  Please update it with your configuration"
else
    echo "✅ Frontend .env.local already exists"
fi

# Check if .env exists for CMS
if [ ! -f "apps/cms/.env" ]; then
    echo "⚠️  CMS .env not found. You'll need to create it."
    echo "   Copy from apps/cms/.env.example and run: cd apps/cms && npm run strapi generate"
else
    echo "✅ CMS .env already exists"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "🎯 Next steps:"
echo "   1. Configure apps/cms/.env (if not done)"
echo "   2. Start development: npm run dev"
echo "   3. Frontend: http://localhost:3000"
echo "   4. CMS Admin: http://localhost:1337/admin"
echo ""
echo "📚 See README.md for more information"

