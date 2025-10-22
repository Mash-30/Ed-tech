# My_Tutor - Advanced Data Science & AI Education Platform

A production-ready React application built with Vite and TypeScript, featuring a comprehensive educational platform for Data Science and AI courses.

## 🚀 Features

- **React 18** with TypeScript for type safety
- **Vite** for lightning-fast development and optimized builds
- **Feature-based architecture** for scalable development
- **React Router** for seamless client-side routing
- **Responsive design** with mobile-first approach
- **Component-based UI** with reusable design system
- **SEO Optimized** with meta tags and structured data
- **Performance Optimized** with code splitting and lazy loading
- **Production Ready** with security headers and caching

## 📁 Project Structure

```
src/
├── features/                 # Feature-based modules
│   ├── auth/                # Authentication feature
│   │   └── components/      # Auth-specific components
│   ├── courses/             # Courses feature
│   │   └── components/      # Course-related components
│   └── home/                # Home page feature
│       └── pages/           # Home page components
├── shared/                  # Shared resources
│   ├── components/          # Reusable components
│   │   └── Layout/          # Layout components
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
│   └── constants/           # Application constants
├── App.tsx                  # Main App component
├── main.tsx                 # Application entry point
└── index.css                # Global styles
```

## 🛠️ Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🏗️ Architecture

### Feature-Based Structure

The application follows a feature-based folder structure where each feature is self-contained with its own:

- **Components**: Feature-specific React components
- **Pages**: Page-level components for routing
- **Hooks**: Custom React hooks (when needed)
- **Services**: API calls and business logic (when needed)
- **Types**: Feature-specific TypeScript types (when needed)

### Shared Resources

Common functionality is placed in the `shared` folder:

- **Components**: Reusable UI components (Layout, Button, etc.)
- **Types**: Global TypeScript interfaces and types
- **Utils**: Utility functions for common operations
- **Constants**: Application-wide constants and configuration

## 🎨 Styling

The application uses CSS modules and modern CSS features:

- **CSS Custom Properties** for theming
- **Flexbox and Grid** for layouts
- **Responsive design** with mobile-first approach
- **Dark/Light mode** support via CSS media queries

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:3001/api
```

### TypeScript

The project is configured with strict TypeScript settings for better type safety and development experience.

## 📦 Dependencies

### Core Dependencies

- **React**: UI library
- **React DOM**: DOM rendering
- **React Router DOM**: Client-side routing

### Development Dependencies

- **Vite**: Build tool and dev server
- **TypeScript**: Type checking and compilation
- **@vitejs/plugin-react**: React support for Vite

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open `http://localhost:3000` in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)

## 🤝 Contributing

1. Follow the feature-based folder structure
2. Use TypeScript for all new code
3. Write reusable components in the `shared` folder
4. Keep feature-specific code in respective feature folders
5. Follow the existing naming conventions

## 📄 License

This project is licensed under the MIT License.
