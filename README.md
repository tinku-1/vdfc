# Ortho Surgical Products - Professional React Application

A modern, professionally-styled React application for showcasing orthopedic surgical products with an e-commerce inspired interface. Features an advanced user interface with carousel sliders, comprehensive navigation, and a secure admin dashboard for product management.

## 🌟 Features

### User Interface
- **Announcement Bar**: Dismissible top banner for promotions and contact info
- **Professional Two-Tier Navigation**: 
  - Top bar with logo, search functionality, and action icons (Profile, Saved, Cart)
  - Menu bar with multiple category links and admin access
- **Dynamic Hero Carousel**: Auto-playing slider with 3 professional slides and navigation
- **Product Browsing**: Browse orthopedic products with enhanced card interactions
- **Product Details**: Click any product to view detailed information in a professional modal
- **Smooth Navigation**: Seamless scrolling between all sections
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Professional Medical Theme**: Green and white color scheme with modern dark accents
- **Interactive Footer**: Professional footer with smooth-scroll navigation links

### Admin Dashboard
- **🔐 JWT Authentication**: Secure token-based admin authentication
  - Token generation and validation
  - 24-hour session with auto-expiry
  - Session monitoring and auto-logout
  - Default credentials: `admin` / `admin123`
- **Product Management**:
  - ✅ Add new products
  - ✅ Edit existing products
  - ✅ Delete products
  - ✅ Search products by name
- **Cloudinary Integration**: Upload product images directly to Cloudinary
- **User Session Display**: Shows logged-in user and remaining session time
- **Secure Logout**: Clears JWT token and ends session

> **Note:** Current JWT implementation is frontend-only for demo. For production, implement proper backend API. See [JWT-BACKEND-SETUP.md](JWT-BACKEND-SETUP.md) for details.

## 🎨 Design

The application features a professional, modern design with:
- **Primary Colors**: Medical green (#4caf50, #218c5b) and white
- **Accent Colors**: Orange CTAs (#ff9800) and dark professional backgrounds (#2d3748)
- **Typography**: Clean, readable system fonts (Segoe UI)
- **Animations**: Smooth transitions, carousel effects, and hover interactions
- **Shadows**: Professional depth with multi-layered shadows
- **Modern Layout**: E-commerce inspired professional structure

## 🚀 Getting Started

### Prerequisites
- Node.js (v20.19+ or v22.12+)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## 📦 Project Structure

```
vdfc/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Professional navigation bar
│   │   ├── Navbar.css
│   │   ├── Hero.jsx                 # Landing section with CTA
│   │   ├── Hero.css
│   │   ├── ProductList.jsx          # Product grid display
│   │   ├── ProductList.css
│   │   ├── Footer.jsx               # Professional footer
│   │   ├── Footer.css
│   │   ├── AdminLogin.jsx           # Admin authentication
│   │   ├── AdminLogin.css
│   │   ├── AdminDashboard.jsx       # Admin product management
│   │   ├── AdminDashboard.css
│   │   └── CloudinaryUploadWidget.jsx  # Image upload widget
│   ├── utils/
│   │   └── auth.js                  # JWT authentication utilities
│   ├── App.jsx                      # Main application component
│   ├── App.css                      # Main application styles
│   ├── main.jsx                     # Application entry point
│   └── index.css                    # Global styles
├── index.html
├── package.json
├── JWT-README.md                    # JWT authentication guide
├── JWT-BACKEND-SETUP.md             # Production backend setup
└── README.md
```

## 🔧 Configuration

### Cloudinary Setup

To use the image upload feature, update the Cloudinary configuration in `CloudinaryUploadWidget.jsx`:

```javascript
cloudName: 'YOUR_CLOUDINARY_CLOUD_NAME',
uploadPreset: 'YOUR_UNSIGNED_UPLOAD_PRESET'
```

1. Sign up at [Cloudinary](https://cloudinary.com/)
2. Create an unsigned upload preset in your Cloudinary settings
3. Replace the demo values with your actual credentials

## 🔐 JWT Authentication

The application includes JWT (JSON Web Token) authentication for secure admin access:

### Features
- ✅ Token generation on successful login
- ✅ Secure token storage in localStorage
- ✅ Automatic token validation
- ✅ 24-hour session with auto-expiry
- ✅ Periodic session monitoring
- ✅ Auto-logout on token expiration
- ✅ User info and session time display

### Documentation
- **Quick Start**: [JWT-README.md](JWT-README.md) - Usage and testing
- **Production Setup**: [JWT-BACKEND-SETUP.md](JWT-BACKEND-SETUP.md) - Backend implementation guide

### Important Security Note
⚠️ Current implementation is **frontend-only** for demonstration. For production deployment, you **must** implement proper backend JWT authentication. See [JWT-BACKEND-SETUP.md](JWT-BACKEND-SETUP.md) for Node.js/Express and Python/Flask examples.

## 🔑 Admin Access

- **Location**: Click "🔐 ADMIN" button in the navigation bar (top-right)
- **Default Username**: `admin`
- **Default Password**: `admin123`

⚠️ **Note**: For production use, implement proper authentication with a backend API.

## 🛠️ Technologies Used

- **React 19**: UI framework with hooks
- **Vite 7**: Lightning-fast build tool and development server
- **JWT (JSON Web Tokens)**: Token-based authentication
- **Cloudinary**: Cloud-based image management
- **CSS3**: Modern styling with animations, gradients, and transitions
- **LocalStorage API**: Secure client-side token storage

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📄 License

This project is created for demonstration purposes.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ using React and Vite**
