# Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles & Tailwind
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Footer component
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Donation.tsx      # Donation section
│   ├── Contact.tsx       # Contact form
│   └── Gallery.tsx       # Image gallery
├── lib/                  # Utilities & constants
│   └── constants.ts      # Site configuration
├── types/                # TypeScript definitions
│   └── index.ts          # Type definitions
└── public/               # Static assets
    └── images/           # Image files
```

## Customization

### Update Site Information
Edit `lib/constants.ts` to update:
- Site name and title
- Founder information
- Bank details
- Navigation items

### Add Images
1. Add temple images to `public/images/`
2. Update `components/Gallery.tsx` with actual image paths

### Styling
- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Inline Tailwind classes

### Contact Form
Currently uses a placeholder submission. To integrate:
1. Set up a form service (Formspree, EmailJS, etc.)
2. Update `components/Contact.tsx` handleSubmit function
3. Add environment variables if needed

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## Features

✅ **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS
✅ **Responsive Design**: Mobile-first approach
✅ **SEO Optimized**: Meta tags and semantic HTML
✅ **Performance**: Optimized images and code splitting
✅ **Scalable**: Component-based architecture
✅ **Type Safe**: Full TypeScript support
✅ **Accessible**: ARIA labels and semantic elements

## Next Steps

1. Add actual temple images to `public/images/`
2. Configure contact form backend
3. Add WhatsApp number in Contact component
4. Customize colors in `tailwind.config.ts` if needed
5. Add analytics (Google Analytics, etc.)
6. Set up domain and deploy
