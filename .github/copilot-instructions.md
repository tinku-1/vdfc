# Ortho Surgical Products Application - Custom Instructions

## Project Overview
This is a React-based web application for displaying orthopedic surgical products with an admin dashboard for product management. The application features a classic, professional design with a light green and white color scheme suitable for medical/healthcare contexts.

## Technology Stack
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 (no framework, custom styles)
- **Image Management**: Cloudinary Upload Widget
- **State Management**: React useState hooks

## Architecture & Components

### User-Facing Components
1. **Navbar.jsx**: Professional sticky navigation with HOME/PRODUCTS links and admin access
2. **Hero.jsx**: Landing section with hero content, CTA button, and feature highlights
3. **App.jsx**: Main application container managing routing between user and admin views
4. **ProductList.jsx**: Displays products in a responsive grid layout
5. **Modal (in App.jsx)**: Product detail popup view
6. **Footer.jsx**: Professional footer with links and information

### Admin Components
1. **AdminLogin.jsx**: Authentication interface (hardcoded credentials for demo)
2. **AdminDashboard.jsx**: Full CRUD interface for product management
3. **CloudinaryUploadWidget.jsx**: Image upload integration

## Design System

### Color Palette
- **Primary Green**: #4caf50
- **Dark Green**: #218c5b
- **Light Green Background**: #e8f5e9
- **Border Green**: #b2dfdb
- **Success Green Background**: #f6fff8
- **White**: #ffffff
- **Text Dark**: #2d3748
- **Text Medium**: #4a5568
- **Error Red**: #d32f2f

### Typography
- **Primary Font**: 'Segoe UI', system-ui, Avenir, Helvetica, Arial, sans-serif
- **Heading Sizes**: h1 (2.5rem), h2 (inherit), h3 (1.25rem), h4 (1.1rem)
- **Line Height**: 1.6 (body), 1.2-1.5 (headings)

### Spacing & Layout
- **Border Radius**: 8px (small), 10-12px (medium), 16-20px (large)
- **Shadows**: Layered box-shadows with green tint for depth
- **Padding**: Consistent use of rem units (0.5rem - 3rem)
- **Gaps**: Flexbox gaps of 0.75rem - 2rem

## Key Features Implemented

✅ Professional sticky navbar with HOME and PRODUCTS sections  
✅ Engaging hero section with call-to-action  
✅ Product browsing interface with grid layout  
✅ Product detail modal with click-to-view functionality  
✅ Smooth scroll navigation between sections  
✅ Admin authentication (username: admin, password: admin123)  
✅ Add, edit, delete product functionality  
✅ Product search by name  
✅ Cloudinary image upload integration  
✅ Professional footer with navigation links  
✅ Responsive design  
✅ Professional animations and transitions  
✅ Classic medical/professional aesthetic  

## Code Style Guidelines

### React Patterns
- Use functional components with hooks
- Keep components focused and single-purpose
- Use inline handlers for simple callbacks
- Manage state at appropriate component levels

### CSS Patterns
- Component-specific CSS files
- BEM-like naming without strict BEM
- Use CSS custom properties sparingly (defined in index.css)
- Prefer flexbox for layouts
- Use transitions for hover effects (0.2-0.3s)
- Include focus states for accessibility

### Naming Conventions
- **Components**: PascalCase (e.g., ProductList)
- **CSS Classes**: kebab-case (e.g., product-card, admin-dashboard-bg)
- **Functions**: camelCase, descriptive names (e.g., handleEdit, handleDelete)
- **Constants**: camelCase for variables, SCREAMING_SNAKE_CASE for true constants

## Development Workflow

### Running the App
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Adding New Features
1. Create feature-specific components in src/components/
2. Import and integrate into App.jsx or relevant parent
3. Add corresponding CSS file with component name
4. Use existing design system colors and spacing
5. Test in both user and admin modes

### Styling Guidelines
- Match the existing light green/white theme
- Use box-shadows with rgba(33, 140, 91, ...) for green tint
- Add hover states with transform and shadow changes
- Include transitions for smooth interactions
- Maintain 8px border-radius for consistency

## Admin Credentials
**Username**: admin  
**Password**: admin123  
⚠️ Note: This is for demonstration only. In production, implement proper authentication with a backend service.

## Cloudinary Configuration
The app includes Cloudinary upload widget integration. To activate:
1. Sign up at https://cloudinary.com/
2. Create an unsigned upload preset
3. Update `CloudinaryUploadWidget.jsx`:
   - Replace 'demo' with your cloud name
   - Replace 'unsigned_preset' with your preset name

## File Structure
```
src/
├── components/
│   ├── Navbar.jsx/css
│   ├── Hero.jsx/css
│   ├── ProductList.jsx/css
│   ├── Footer.jsx/css
│   ├── AdminDashboard.jsx/css
│   ├── AdminLogin.jsx/css
│   └── CloudinaryUploadWidget.jsx
├── App.jsx/css
├── main.jsx
└── index.css
```

## Future Enhancement Ideas
- Backend API integration for product persistence
- Real authentication system (JWT, OAuth)
- Image optimization and lazy loading
- Product categories and filtering
- Pagination for large product lists
- Export/Import product data
- Multi-language support
- Dark mode option
- Advanced search with filters
