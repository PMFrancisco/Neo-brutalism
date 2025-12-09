# Feature Overview

## 🎨 Design System

### Neobrutalism Principles
- **Bold Borders**: Every element has a thick 4px black border
- **Hard Shadows**: Offset box shadows (8px) with no blur or softness
- **Vibrant Colors**: 8 high-saturation colors for maximum visual impact
- **Flat Design**: No gradients, only solid colors
- **Raw Typography**: Bold, uppercase headings with tight tracking

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Primary (Orange) | `#FF6B35` | Main CTAs, featured items |
| Secondary (Yellow) | `#FFD23F` | Secondary actions, highlights |
| Accent (Cyan) | `#00E5FF` | Attention-grabbing elements |
| Pink | `#FF006E` | Special features |
| Purple | `#8338EC` | Premium elements |
| Green | `#06FFA5` | Success states |
| Blue | `#3A86FF` | Info elements |
| Orange | `#FB5607` | Warnings, energy |

## 📦 Components

### Button
- **6 color variants**: primary, secondary, accent, pink, purple, green
- **3 sizes**: small, medium, large
- **Hover effect**: Translates closer to viewer, shadow reduces
- **Active state**: Fully pressed down (no shadow)

### Card
- **9 color options**: white + 8 vibrant colors
- **3 shadow sizes**: small (4px), medium (8px), large (12px)
- **Hover effect**: Lifts up (-2px translate)
- **Flexible content**: Accepts any React children

### Navigation
- **Sticky positioning**: Stays at top during scroll
- **Bottom shadow**: Creates depth separation
- **Responsive**: Stacks vertically on mobile
- **Action buttons**: Quick access to main sections

### Hero Section
- **Large headline**: Attention-grabbing title
- **Animated boxes**: 4 floating decorative elements
- **Two CTAs**: Primary and secondary actions
- **Fully responsive**: Hides decorative boxes on mobile

### Art Gallery
- **Grid layout**: Auto-fills based on screen width
- **Art cards**: Each piece has title, artist, price
- **Color variety**: Each card uses a different vibrant color
- **Hover interaction**: Cards lift up on hover
- **Inquiry CTA**: Each piece has an action button

### Café Menu
- **Category sections**: Coffee, Food, Desserts
- **Color coding**: Each category has its own color
- **Icon representation**: Visual emoji for each item
- **Price display**: Clear pricing information
- **Descriptive text**: Brief description for each item

### Component Showcase
- **Button gallery**: All button variants and sizes
- **Card examples**: Every color and shadow combination
- **Color swatches**: Complete palette with hex codes
- **Design principles**: Visual explanation of neobrutalism
- **Educational**: Perfect for understanding the design system

## 🎭 Page Sections

### 1. Hero
First thing visitors see - bold statement with animated elements

### 2. Component Showcase
Complete design system documentation showing all components

### 3. Art Gallery
Featured artworks in a vibrant, colorful grid

### 4. Café Menu
Full menu organized by category with prices

### 5. Footer
Simple black footer with branding

## 📱 Responsive Design

- **Desktop (1400px+)**: Full multi-column layouts
- **Tablet (768px-1399px)**: Adapted column counts
- **Mobile (<768px)**: Single column, stacked elements
- **Touch-friendly**: Larger tap targets on small screens

## 🚀 Performance

- **Static generation**: All pages pre-rendered
- **Small bundle**: ~103 kB first load JS
- **Fast builds**: Compiles in ~3.5 seconds
- **CSS Modules**: Scoped styles, no conflicts
- **No external dependencies**: Pure React + Next.js

## 🎯 Use Cases

Perfect template for:
- Art galleries with café spaces
- Creative studios with meeting spaces
- Coffee shops hosting art shows
- Cultural centers
- Pop-up exhibition spaces
- Artist portfolios
- Food & beverage brands with bold identity
- Event spaces
- Creative co-working spaces

## 🛠️ Customization Points

Easy to customize:
1. **Colors**: Change 8 variables in `globals.css`
2. **Spacing**: Adjust spacing scale in design tokens
3. **Borders**: Modify border width globally
4. **Shadows**: Change shadow offset size
5. **Content**: Update gallery items, menu items
6. **Typography**: Change font family in `globals.css`
7. **Layout**: Adjust grid columns and breakpoints

## 💡 Design Tips

1. **Keep it bold**: Don't tone down colors or reduce borders
2. **High contrast**: Always use black borders and shadows
3. **No subtlety**: Neobrutalism is about being direct and honest
4. **Functional over pretty**: Prioritize usability
5. **Embrace imperfection**: Raw, unpolished aesthetic is intentional
6. **Be playful**: Have fun with colors and layout
7. **Stay flat**: Resist the urge to add gradients or blurs

## 🔮 Future Enhancement Ideas

- Add image support for actual artwork photos
- Implement filtering/sorting for gallery
- Add shopping cart functionality
- Integrate with a CMS for content management
- Add animation library (Framer Motion)
- Create dark mode variant
- Add blog/news section
- Implement event calendar
- Add contact form
- Create admin dashboard

---

Built with ❤️ using Next.js 15, React 19, and TypeScript
