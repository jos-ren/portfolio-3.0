# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Architecture Overview

This is a Next.js 12 portfolio website built with React 18 and styled-components. The application showcases projects, education, and contact information with dark/light theme support.

### Key Architecture Patterns

- **Data-driven content**: All portfolio content (projects, education, technologies) is centralized in `/public/data.js` as exportable arrays
- **Responsive layout**: Uses `react-responsive` with breakpoints at 1050px (tablet) and 550px (mobile) 
- **Theme system**: Implements `use-color-theme` with CSS custom properties for dark/light modes
- **Component-based UI**: Reusable components in `/comps/` directory with consistent styling patterns

### Core File Structure

- `/pages/_app.js` - Global app wrapper with theme provider, loading state, and responsive sidebar/topbar logic
- `/pages/index.js` - Main portfolio page with sections for about, projects, education, technologies, and contact
- `/pages/projects/[id].js` - Dynamic project detail pages
- `/public/data.js` - Central data store for all portfolio content
- `/comps/` - Reusable UI components (Card, ProjectCard, SideBar, etc.)

### Data Structure

The `data.js` file exports several key arrays:
- `projects_data` - Project portfolio with detailed metadata, screenshots, and project breakdowns
- `school_data` - Education history with links and descriptions  
- `icons_data` - Technology stack with icons and names
- `socials_data` - Social media links and contact information

### Styling Approach

- Uses styled-components for component-level styling
- Global CSS custom properties in `/styles/globals.css` for theme variables
- Theme-aware icon switching based on current color theme
- Responsive design handled through media query hooks rather than CSS breakpoints

### Third-party Integrations

- Vercel Analytics for usage tracking
- Framer Motion for animations  
- Various React UI libraries (react-icons, react-loading, etc.)
- YouTube embed support for project videos