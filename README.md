# Art Gallery & Café - Neobrutalist Template

A vibrant, bold neobrutalist website template for an art gallery and café built with Next.js 16, React 19, and TypeScript.

## Features

- 🎨 **Neobrutalist Design**: Bold borders, vibrant colors, hard shadows
- ⚡ **Modern Stack**: Next.js 16, React 19, TypeScript
- 🎭 **Component Library**: Reusable Button, Card, Navigation components
- 🖼️ **Art Gallery Section**: Showcase artworks with colorful cards
- ☕ **Café Menu**: Display menu items by category
- 📱 **Responsive Design**: Works beautifully on all screen sizes
- 🌈 **Vibrant Color Palette**: 8 high-saturation colors for maximum impact

## Design Principles

This template follows neobrutalist design principles:

- **Bold Borders**: Thick 4px black borders on all elements
- **Vibrant Colors**: High-saturation colors that demand attention
- **Hard Shadows**: Offset box shadows in black (no blur)
- **No Gradients**: Flat solid colors only
- **Raw Aesthetic**: Unpolished, direct, and honest design

## Color Palette

- Primary: `#FF6B35` (Orange)
- Secondary: `#FFD23F` (Yellow)
- Accent: `#00E5FF` (Cyan)
- Pink: `#FF006E`
- Purple: `#8338EC`
- Green: `#06FFA5`
- Blue: `#3A86FF`
- Orange: `#FB5607`

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
/workspace
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── page.module.css     # Page styles
│   └── globals.css         # Global styles & design tokens
├── components/
│   ├── Button.tsx          # Button component
│   ├── Button.module.css
│   ├── Card.tsx            # Card component
│   ├── Card.module.css
│   ├── Navigation.tsx      # Navigation bar
│   ├── Navigation.module.css
│   ├── Hero.tsx            # Hero section
│   ├── Hero.module.css
│   ├── ArtGallery.tsx      # Art gallery section
│   ├── ArtGallery.module.css
│   ├── CafeMenu.tsx        # Café menu section
│   ├── CafeMenu.module.css
│   ├── ComponentShowcase.tsx  # Component library showcase
│   └── ComponentShowcase.module.css
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Components

### Button
Neobrutalist button with 6 color variants and 3 sizes.

### Card
Versatile card component with customizable colors and shadow sizes.

### Navigation
Sticky navigation bar with multiple action buttons.

### Hero
Eye-catching hero section with animated decorative boxes.

### ArtGallery
Grid layout showcasing art pieces with prices and artist information.

### CafeMenu
Categorized menu display (coffee, food, desserts) with colorful cards.

### ComponentShowcase
Complete component library showcase demonstrating all design elements.

## Customization

All design tokens are defined in `app/globals.css`:

```css
:root {
  --color-primary: #FF6B35;
  --border-width: 4px;
  --shadow-offset: 8px;
  --spacing-md: 24px;
  /* ... and more */
}
```

Modify these variables to customize the look and feel of the entire site.

## License

MIT

## Credits

Created as a neobrutalist template example for art galleries and cafés.
