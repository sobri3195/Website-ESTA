# Development Guide - ESTA Landing Page

## Project Overview

This is a modern, dark-themed React SPA for ESTA (PT. Bahagia Berkat Semesta), a holding company with diverse business units.

## Architecture

### Component Structure

```
App.jsx (Main Container)
├── Navbar.jsx (Sticky navigation with scroll effects)
├── Hero.jsx (Landing hero section with CTAs)
├── About.jsx (Company information & highlights)
├── BusinessUnits.jsx (6 business unit cards)
├── Values.jsx (Company values presentation)
├── Clients.jsx (Partners logos & testimonials)
├── Contact.jsx (Contact form with validation)
└── Footer.jsx (Company info & social links)
```

### Key Features Implemented

1. **Sticky Navigation**
   - Smooth scroll to sections
   - Background blur effect on scroll
   - Mobile hamburger menu
   - Responsive design

2. **Hero Section**
   - Animated glow effects
   - Gradient text
   - Floating background orbs
   - Dual CTA buttons

3. **Business Units**
   - 6 interactive cards:
     * Medical & Healthcare
     * Education & Training
     * Fashion & Apparel
     * Wedding & Event
     * Creative & Interior Design
     * Technology & Digital
   - Hover animations
   - Icon integration from Lucide React

4. **Company Values**
   - 5 core values with icons
   - Responsive grid layout
   - Glass-card effect

5. **Client Section**
   - 8 partner logos (placeholder)
   - 2 testimonial cards
   - Star ratings

6. **Contact Form**
   - Controlled form with React state
   - Fields: Name, Email, Phone, Company, Service Selection, Message
   - Form validation
   - Console logging on submit
   - Contact information display

7. **Footer**
   - Company info
   - Quick navigation links
   - Social media links
   - Newsletter subscription
   - Business unit listing

## Styling Approach

### Tailwind CSS Custom Configuration

**Custom Colors (esta palette):**
- esta-50 to esta-900 (green gradient theme)
- Used throughout for accents and gradients

**Custom Animations:**
- `fadeInUp` - Elements slide up and fade in
- `fadeInDown` - Elements slide down and fade in
- `fadeIn` - Simple fade effect
- `slideIn` - Slide from left
- `float` - Floating animation
- `glowPulse` - Pulsing glow effect
- `shimmer` - Shimmer effect
- `marquee` - Continuous scroll

**Custom Utilities:**
- `.glass-card` - Glassmorphism effect with blur
- `.nav-scrolled` - Navbar scrolled state

### Design System

- **Background**: Dark slate (slate-950, slate-900)
- **Text**: Light slate (slate-100, slate-200, slate-300, slate-400)
- **Accents**: esta-400, esta-500, esta-600 (green)
- **Effects**: Gradients, glass morphism, blur, shadows

## State Management

All state is local component state using React hooks:
- `useState` for form data, mobile menu, scroll state
- `useEffect` for scroll listeners

## Responsive Design

- **Mobile**: Single column, hamburger menu
- **Tablet**: 2-column grids
- **Desktop**: 3-column grids, full navigation

Breakpoints follow Tailwind defaults:
- sm: 640px
- md: 768px
- lg: 1024px

## Form Handling

Contact form uses controlled components:
```javascript
const [formData, setFormData] = useState({
  nama: '',
  email: '',
  telepon: '',
  perusahaan: '',
  layanan: '',
  pesan: ''
})
```

On submit: Logs to console and shows alert (placeholder for backend integration)

## Performance Considerations

- All images are placeholders (letter avatars)
- Lazy loading not needed due to SPA architecture
- Vite bundling optimizes for production
- Animations use CSS transforms for GPU acceleration

## Future Enhancements

Potential additions for production:
1. Backend API integration for contact form
2. Real partner logos and images
3. CMS integration for content management
4. Analytics tracking
5. SEO optimization (React Helmet)
6. Multi-language support (i18n)
7. Blog/news section
8. Career/recruitment section

## Testing the Application

```bash
# Development mode (hot reload)
npm run dev
# Opens on http://localhost:5173

# Production build
npm run build
npm run preview
# Opens on http://localhost:4173

# Linting
npm run lint
```

## Browser Support

Targets modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Notes

Current implementation includes:
- Semantic HTML structure
- ARIA labels on social links
- Keyboard navigation support
- Focus states on interactive elements

For production, consider:
- More comprehensive ARIA attributes
- Screen reader testing
- Color contrast validation
- Skip navigation links

## Content Language

All UI text is in **Indonesian (Bahasa Indonesia)** as per requirements.
