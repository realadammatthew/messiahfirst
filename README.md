# Messiah First for America PAC

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red?style=flat-square)

Official website for **Messiah First for America PAC**, an Independent Expenditure-Only Committee (Super PAC) dedicated to proclaiming the Name of Yeshua (Jesus) the Jewish Messiah in America, educating the public on Messianic (Christian) policy, and supporting politicians who promote biblical values.

[Website](https://messiahfirst.org) • [FEC Filing](https://www.fec.gov/data/committee/C00913418/) • [Contact Us](https://messiahfirst.org/contact)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Development](#development)
- [Project Structure](#project-structure)
- [Content Management](#content-management)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [FEC Compliance](#fec-compliance)
- [License](#license)

## 🙏 About

Messiah First for America PAC is a Super PAC with a three-fold mission:

1. **Proclaim Yeshua (Jesus)** - Boldly proclaiming the Name of Yeshua the Jewish Messiah throughout America
2. **Educate on Biblical Policy** - Teaching Americans about Messianic (Christian) policy principles
3. **Support Aligned Leaders** - Identifying and supporting political candidates who champion biblical values

### FEC Information

- **Committee Name**: Messiah First for America PAC
- **FEC ID**: C00913418
- **FEIN**: 39-3408257
- **Committee Type**: Independent Expenditure-Only Committee (Super PAC)
- **Registration Date**: July 25, 2025
- **Treasurer**: Adam Matthew Steinberger
- **Address**: 236 Tippin Trl, Travelers Rest, South Carolina 29690

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router (Turbopack enabled)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Markdown Processing**: gray-matter, react-markdown, remark-gfm, rehype-raw
- **Forms**: [Formspree](https://formspree.io/) integration
- **Newsletter**: [Mailchimp](https://mailchimp.com/) integration
- **Donations**: [DonorBox](https://donorbox.org/) embedded
- **Analytics**: Google Analytics
- **Package Manager**: npm
- **Deployment**: [Vercel](https://vercel.com/) (recommended)

## ✨ Features

### Core Functionality

- **Dynamic Metadata System** - Unique page titles and SEO-optimized descriptions for all routes
- **Markdown-Based CMS** - Easy content management through markdown files with frontmatter
- **Dynamic Routing** - Automatic page generation for news, policy, and politician content
- **Responsive Design** - Mobile-first design optimized for all devices
- **Accessibility** - WCAG 2.1 AA compliant

### Content Sections

- **Mission & About** - Clear presentation of PAC mission and values
- **News & Updates** - Blog-style news section with featured posts
- **Policy Positions** - Detailed policy positions with biblical foundations
- **Endorsed Politicians** - Candidate profiles and endorsement criteria
- **Statement of Faith** - Theological foundation and core beliefs
- **Contact Form** - Formspree-powered contact functionality
- **Newsletter Signup** - Mailchimp integration for updates
- **Secure Donations** - DonorBox embedded donation processing

### SEO & Performance

- **Automatic Sitemap** - Dynamic sitemap at `/sitemap.xml` generated via Next.js sitemap.ts
- **Robots.txt** - SEO-friendly robots configuration at `/robots.txt`
- **Google Analytics** - Comprehensive analytics tracking with unique page titles
- **OpenGraph Metadata** - Social media sharing optimization
- **Lighthouse Score** - Target 90+ across all metrics
- **Image Optimization** - Next.js Image component with WebP support

### Compliance Features

- **FEC Disclaimers** - Required disclaimers on all political content
- **Legal Pages** - FEC compliance, privacy policy, transparency information
- **Independent Expenditure** - Proper separation from candidate campaigns
- **Public Reporting** - Links to FEC filings and transparency data

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **npm** (comes with Node.js)
- **Git**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/messiahfirst.git
   cd messiahfirst
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 💻 Development

### Available Scripts

```bash
# Development
npm run dev              # Start development server with Turbopack
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run type-check       # Run TypeScript type checking
```

### Development Workflow

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes and test locally
3. Run linting: `npm run lint`
4. Run type checking: `npm run type-check`
5. Build project: `npm run build`
6. Commit changes: `git commit -m "feat: your feature"`
7. Push to fork: `git push origin feature/your-feature`
8. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 📁 Project Structure

```
messiahfirst/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Homepage
│   │   ├── about/             # Static pages
│   │   ├── mission/
│   │   ├── news/              # Blog/news section
│   │   │   └── [slug]/        # Dynamic news posts
│   │   ├── policy/            # Policy positions
│   │   │   └── [slug]/        # Dynamic policy pages
│   │   ├── politicians/       # Endorsed candidates
│   │   │   └── [slug]/        # Dynamic politician pages
│   │   ├── donate/            # Donation page
│   │   ├── contact/           # Contact form
│   │   ├── fec-compliance/    # Legal info
│   │   ├── statement-of-faith/
│   │   ├── privacy/
│   │   ├── sitemap.ts         # Dynamic sitemap
│   │   └── robots.ts          # SEO robots
│   ├── components/
│   │   ├── layout/            # Header, Footer
│   │   ├── ui/                # MarkdownRenderer
│   │   └── contact/           # ContactForm
│   └── lib/
│       └── utils/
│           └── markdown.ts    # Markdown utilities
├── content/                   # Markdown content
│   ├── mission/
│   ├── news/
│   ├── policy/
│   ├── politicians/
│   └── legal/
├── public/                    # Static assets
│   └── images/
├── CONTRIBUTING.md            # Contribution guidelines
├── LICENSE                    # MIT License
├── CLAUDE.md                  # AI assistant guidelines
└── README.md                  # This file
```

## 📝 Content Management

### Adding Content

All content is managed through markdown files in the `content/` directory.

#### Markdown Frontmatter Schema

```yaml
---
title: "Content Title"
date: "2025-01-15"
author: "Author Name"
category: "Category"
excerpt: "Brief summary for display (150 chars)"
description: "SEO-optimized description (160 chars)"
featured: true  # Optional, for news posts
---

# Content here using markdown...
```

### Content Types

1. **News Articles** (`content/news/*.md`)
   - Announcement, Policy, Endorsement, Update
   - Supports featured posts
   - Sorted by date (newest first)

2. **Policy Positions** (`content/policy/*.md`)
   - Include biblical foundations
   - Specific policy recommendations
   - Implementation strategies

3. **Politicians** (`content/politicians/*.md`)
   - Endorsement criteria
   - Candidate profiles
   - Voting records

4. **Legal Documents** (`content/legal/*.md`)
   - FEC compliance
   - Statement of Faith
   - Privacy policy

### Adding a New Post

1. Create a new `.md` file in the appropriate directory
2. Add complete frontmatter with all required fields
3. Write content using markdown syntax
4. Deploy changes (sitemap updates automatically on build)

## 🚀 Deployment

### Recommended: Vercel

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Production Deployment:**
   ```bash
   vercel --prod
   ```

### Environment Variables

No environment variables required for basic deployment. Optional:

- `NEXT_PUBLIC_GA_ID` - Google Analytics ID (hardcoded: G-9ER6W5X6KN)
- `FORMSPREE_FORM_ID` - Formspree form ID (configured in contact form)

### Build Requirements

- Node.js 20.x or higher
- npm 10.x or higher
- 512MB RAM minimum
- Next.js 15.5.3

## 🤝 Contributing

We welcome contributions that align with our mission! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for:

- Code of conduct and values
- Development setup and workflow
- Content guidelines
- Technical standards
- PR submission process
- FEC compliance requirements

### Quick Start for Contributors

1. Fork the repository
2. Clone your fork
3. Create a feature branch
4. Make changes and test
5. Submit a Pull Request

## ⚖️ FEC Compliance

This website is for an Independent Expenditure-Only Committee (Super PAC) registered with the Federal Election Commission.

### Critical Compliance Rules

- **NO coordination** with federal candidates or their campaigns
- **ALL political content** must include required FEC disclaimers
- **PUBLIC reporting** of all contributions and expenditures
- **INDEPENDENT operation** from candidate committees

### Required Disclaimer

All pages with political content include:

> Paid for by Messiah First for America PAC and not authorized by any candidate or candidate's committee.

### Transparency

- All FEC filings are public: [FEC.gov Committee Page](https://www.fec.gov/data/committee/C00913418/)
- Full disclosure of contributors and expenditures
- Independent expenditure reports filed as required
- Compliance guidance from experienced election law counsel

### Questions?

For FEC compliance questions, contact:
- **Email**: tikkunolam@messiahfirst.org
- **Phone**: (864) 517-4117

## 📄 License

Copyright © 2025 Messiah First for America PAC. All Rights Reserved.

See the [LICENSE](LICENSE) file for full details.

### Disclaimer

This software is provided as-is for the website of Messiah First for America PAC. All content, endorsements, and policy positions expressed through this website reflect the views of Messiah First for America PAC and are not authorized by any candidate or candidate's committee.

## 📞 Contact

- **Website**: [https://messiahfirst.org](https://messiahfirst.org)
- **Contact Form**: [https://messiahfirst.org/contact](https://messiahfirst.org/contact)
- **Email**: tikkunolam@messiahfirst.org
- **Phone**: (864) 517-4117
- **Address**: 236 Tippin Trl, Travelers Rest, SC 29690

## 🙌 Acknowledgments

- Next.js team for the incredible framework
- Tailwind Labs for Tailwind CSS
- Vercel for hosting and deployment
- The open-source community

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Markdown Documentation](https://github.com/remarkjs/react-markdown)
- [FEC Guidelines](https://www.fec.gov/help-candidates-and-committees/guides/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

<div align="center">

**Proclaiming Yeshua (Jesus) • Educating on Biblical Policy • Supporting Aligned Leaders**

*"Blessed is the nation whose G-d is the L-rd" - Psalm 33:12*

</div>