# Image Assets

This directory contains image assets for the Jewish Messiah First for America PAC website.

## Expected Assets

Please add the following images to this directory:

### Required Images
- `logo.png` or `logo.svg` - PAC logo for header and branding
- `profile-picture.jpg` - Profile picture for leadership team
- `banner.jpg` - Hero banner image for homepage
- `favicon.ico` - Website favicon

### Optional Images
- `about-hero.jpg` - Hero image for about/mission pages
- `donation-banner.jpg` - Image for donation page
- `news-placeholder.jpg` - Default image for news posts without images

## Image Guidelines

- **Logo**: Should be high resolution (PNG with transparency preferred)
- **Banner**: Minimum 1920x800px for full-width hero sections
- **Profile**: 400x400px square format recommended
- **Favicon**: 32x32px ICO format

## Usage in Components

Images can be referenced in Next.js components using:

```tsx
import Image from 'next/image';

<Image
  src="/images/logo.png"
  alt="Messiah First for America PAC Logo"
  width={200}
  height={60}
/>
```

## Optimization

Next.js automatically optimizes images when using the `Image` component. For best performance:
- Use WebP format when possible
- Provide appropriate width/height attributes
- Use responsive images for different screen sizes