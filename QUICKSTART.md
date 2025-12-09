# Quick Start Guide

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000)

### 3. Build for Production
```bash
npm run build
npm start
```

## What's Included

This neobrutalist art gallery & café template includes:

### 🎨 Main Sections
- **Hero Section** - Eye-catching landing with animated decorative boxes
- **Component Showcase** - Complete component library documentation
- **Art Gallery** - Grid of colorful art pieces with prices
- **Café Menu** - Categorized menu items (Coffee, Food, Desserts)

### 🧩 Reusable Components
- **Button** - 6 color variants, 3 sizes
- **Card** - 9 color options, 3 shadow sizes
- **Navigation** - Sticky nav bar with action buttons
- **Hero** - Landing section with animations
- **ArtGallery** - Gallery grid component
- **CafeMenu** - Menu display component
- **ComponentShowcase** - Design system documentation

### 🎨 Design Features
- Bold 4px black borders
- Vibrant 8-color palette
- Hard offset shadows (no blur)
- Flat solid colors (no gradients)
- Fully responsive layout

## File Structure

```
/workspace
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── page.module.css    # Page styles
│   └── globals.css        # Global styles & design tokens
├── components/            # React components
│   ├── Button.*           # Button component
│   ├── Card.*             # Card component
│   ├── Navigation.*       # Nav bar
│   ├── Hero.*             # Hero section
│   ├── ArtGallery.*       # Gallery section
│   ├── CafeMenu.*         # Menu section
│   └── ComponentShowcase.*  # Showcase section
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Customization

Edit design tokens in `app/globals.css`:

```css
:root {
  --color-primary: #FF6B35;
  --color-secondary: #FFD23F;
  --border-width: 4px;
  --shadow-offset: 8px;
  /* ... */
}
```

## Tech Stack

- **Next.js 15+** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **CSS Modules** - Scoped styling

## Tips

1. **Colors**: Use any of the 8 predefined colors for consistency
2. **Shadows**: Keep shadows hard and offset (no blur)
3. **Borders**: Maintain 4px black borders for the neobrutalist aesthetic
4. **Typography**: Keep text bold and uppercase for headings
5. **Hover effects**: Subtle translate animations enhance interactivity

Enjoy building with this neobrutalist template! 🎨
