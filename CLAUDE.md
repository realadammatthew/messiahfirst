# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the official website for **Messiah First for America PAC**, a SuperPAC with the mission to:
- Proclaim the Name of Yeshua (Jesus) the Jewish Messiah in America
- Educate the public on Messianic (Christian) policy in America
- Fundraise to support politicians who promote these policies

**FEC Information:**
- FEC ID: C00913418
- FEIN: 39-3408257
- Committee Type: Independent Expenditure-Only Committee (Super PAC)

## Technology Stack

- **Framework**: Next.js 15 with App Router (Turbopack enabled)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Markdown**: gray-matter, react-markdown, remark-gfm, rehype-raw
- **Forms**: Formspree integration
- **Package Manager**: npm
- **Deployment**: Vercel (recommended)

## Development Commands

```bash
npm run dev              # Start development server with Turbopack
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
npm run type-check       # Run TypeScript type checking
```

**Note**: Sitemap is automatically generated at `/sitemap.xml` during build via `src/app/sitemap.ts`.

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Homepage
│   ├── about/          # Static pages
│   ├── mission/
│   ├── news/           # Blog/news section
│   │   └── [slug]/     # Dynamic news posts
│   ├── policy/         # Policy positions
│   │   └── [slug]/     # Dynamic policy pages
│   ├── politicians/    # Endorsed candidates
│   │   └── [slug]/     # Dynamic politician pages
│   ├── donate/         # Donation page (DonorBox)
│   ├── contact/        # Contact form
│   ├── fec-compliance/ # Legal/compliance info
│   ├── statement-of-faith/
│   ├── privacy/
│   ├── sitemap.ts      # Dynamic sitemap generation
│   └── robots.ts       # SEO robots.txt
├── components/
│   ├── layout/         # Header, Footer
│   ├── ui/             # MarkdownRenderer, etc.
│   └── contact/        # ContactForm
├── lib/
│   └── utils/
│       └── markdown.ts # Markdown processing utilities
└── types/              # TypeScript type definitions

content/                # Markdown content files
├── mission/
│   └── mission-statement.md
├── news/               # News articles
│   └── *.md
├── policy/             # Policy positions
│   └── *.md
├── politicians/        # Politician profiles
│   └── *.md
└── legal/
    ├── fec-compliance.md
    └── statement-of-faith.md

public/                 # Static assets
├── images/
│   └── banner.jpg
└── [other static files]
```

## Key Features Implemented

### 1. Dynamic Metadata System
- **Unique page titles** for all routes (improves Google Analytics tracking)
- **SEO-optimized descriptions** pulled from markdown frontmatter
- **generateMetadata()** functions for dynamic routes
- Markdown schema includes both `excerpt` (display) and `description` (SEO)

### 2. Content Management
- **Markdown-based CMS** with frontmatter support
- **Dynamic routing** for news, policy, and politician pages
- **Automatic sitemap generation** from markdown files
- **Syntax highlighting** and rich formatting via react-markdown

### 3. User Engagement
- **Contact form** (Formspree integration)
- **Newsletter signup** (Mailchimp integration)
- **Donation system** (DonorBox embedded)
- **Social links** in footer

### 4. SEO & Analytics
- **Google Analytics** (ID: G-9ER6W5X6KN)
- **Dynamic sitemap** at `/sitemap.xml` (auto-generated via src/app/sitemap.ts)
- **Robots.txt** at `/robots.txt` (configured via src/app/robots.ts)
- **OpenGraph metadata** for social sharing

### 5. Compliance
- **FEC disclaimers** on all political content
- **Legal pages** (FEC compliance, privacy policy)
- **Statement of Faith** page
- **Transparency** features

## Markdown Content Schema

All markdown files in `content/` directories should include frontmatter:

```yaml
---
title: "Content Title"
date: "2025-01-15"
author: "Author Name"
category: "Category"
excerpt: "Brief summary for display (150 chars)"
description: "SEO-optimized description (160 chars)"
featured: true|false  # Optional, for news
---

# Content here using markdown...
```

### Available Content Types

1. **News** (`content/news/*.md`)
   - Categories: Announcement, Policy, Endorsement, Update
   - Supports featured posts
   - Sorted by date (newest first)

2. **Policy** (`content/policy/*.md`)
   - Categories: Policy Position, Analysis
   - Include biblical references
   - Link to relevant news/politicians

3. **Politicians** (`content/politicians/*.md`)
   - Categories: Endorsement Policy, Candidate Profile
   - Include voting records
   - Link to official campaign sites

4. **Legal** (`content/legal/*.md`)
   - FEC compliance information
   - Statement of Faith
   - Other legal documents

## Important Implementation Details

### Metadata System
- **Homepage**: Static metadata export
- **Static pages**: `generateMetadata()` async function pulling from markdown
- **Dynamic routes**: `generateMetadata()` with params, prioritizes `description` over `excerpt`
- **Fallback**: All metadata includes fallback values

### Markdown Processing
- Uses `gray-matter` for frontmatter parsing
- `react-markdown` with `remark-gfm` (GitHub Flavored Markdown)
- `rehype-raw` for HTML support
- Custom styling via Tailwind classes
- External links open in new tabs automatically

### Dynamic Routes
- Use `generateStaticParams()` for SSG
- Error handling with `notFound()` from next/navigation
- Breadcrumb navigation
- Related content links

## Styling Guidelines

### Tailwind Configuration
- Mobile-first responsive design
- Custom color palette (blue-900 primary)
- Consistent spacing (px-4, py-16, etc.)
- Shadow utilities for depth
- Gradient backgrounds

### Component Patterns
```typescript
// Page layout pattern
<div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
  <div className="max-w-4xl mx-auto px-4 py-16">
    {/* Content */}
  </div>
</div>

// Card pattern
<div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
  {/* Content */}
</div>

// Button pattern
<Link
  href="/path"
  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
>
  Button Text
</Link>
```

## Compliance Requirements

### FEC Disclaimers
All pages with political content MUST include:
```
Paid for by Messiah First for America PAC and not authorized
by any candidate or candidate's committee.
```

### Critical Rules
- **NO coordination** with federal candidates
- **NO removal** of FEC disclaimers
- **ALWAYS verify** donation processing compliance
- **MAINTAIN** committee identification accuracy

## Performance Standards

- **Lighthouse Score**: Target 90+ across all metrics
- **Bundle Size**: Keep pages under 300kb
- **Image Optimization**: Use Next.js Image component
- **Code Splitting**: Leverage Next.js automatic splitting
- **Turbopack**: Enabled for faster dev/build

## Contributing Guidelines

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed contribution guidelines including:
- Code quality standards
- Content guidelines
- PR submission process
- FEC compliance requirements

## Common Tasks

### Adding a New News Article
1. Create `content/news/article-slug.md`
2. Add complete frontmatter with title, date, author, category, excerpt, description
3. Write content in markdown
4. Build project (sitemap updates automatically)

### Adding a New Policy Position
1. Create `content/policy/policy-slug.md`
2. Include biblical foundation section
3. Add specific policy positions
4. Include implementation strategy

### Updating Metadata
1. Edit markdown frontmatter for content pages
2. Edit page component `generateMetadata()` for static pages
3. Run `npm run build` to verify

## Troubleshooting

### Build Errors
- Check TypeScript types: `npm run type-check`
- Verify markdown frontmatter is valid YAML
- Ensure all required fields are present

### Metadata Not Updating
- Clear `.next` cache: `rm -rf .next`
- Rebuild: `npm run build`
- Verify frontmatter has `description` field

### Images Not Loading
- Ensure images are in `public/images/`
- Use Next.js Image component
- Provide width/height or fill prop

## Resources

- [Next.js 15 Docs](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [React Markdown](https://github.com/remarkjs/react-markdown)
- [FEC Guidelines](https://www.fec.gov/help-candidates-and-committees/guides/)

## License

Copyright © 2025 Messiah First for America PAC. All Rights Reserved. See [LICENSE](LICENSE) for details.