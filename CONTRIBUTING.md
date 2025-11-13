# Contributing to Messiah First for America PAC Website

Thank you for your interest in contributing to the Messiah First for America PAC website! We welcome contributions that align with our mission to proclaim Yeshua (Jesus) the Jewish Messiah and advance biblical principles in American politics.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Contribution Guidelines](#contribution-guidelines)
- [Content Guidelines](#content-guidelines)
- [Technical Standards](#technical-standards)
- [Submitting Changes](#submitting-changes)
- [FEC Compliance](#fec-compliance)

## Code of Conduct

### Our Values

This project operates under biblical principles and Messianic (Christian) values. All contributors are expected to:

- Honor Yeshua (Jesus) the Jewish Messiah in all communications
- Respect diverse perspectives within the body of believers
- Maintain integrity and truthfulness in all contributions
- Uphold professional and respectful discourse
- Prioritize excellence and quality in all work

### Expected Behavior

- Be respectful and constructive in all interactions
- Focus on what is best for the mission and the community
- Show empathy and grace towards other contributors
- Accept constructive criticism gracefully

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm (comes with Node.js)
- Git
- A text editor (VS Code recommended)
- Basic knowledge of React, Next.js, and TypeScript

### Local Setup

1. **Fork the repository** on GitHub

2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/messiahfirst.git
   cd messiahfirst
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Development Commands

```bash
npm run dev              # Start development server with Turbopack
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
npm run type-check       # Run TypeScript type checking
npm run generate-sitemap # Generate sitemap (via build)
```

## Development Workflow

### Branch Naming Convention

- `feature/description` - New features
- `fix/description` - Bug fixes
- `content/description` - Content updates
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring

### Commit Message Format

Use clear, descriptive commit messages:

```
type: Short description (50 chars or less)

Longer explanation if needed (wrap at 72 characters).
Include the context and reasoning for the change.

Fixes #123
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code formatting (no functional changes)
- `refactor`: Code restructuring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Example Commits

```
feat: Add dynamic metadata system for SEO

Implemented description field in markdown frontmatter and updated
all page components to use generateMetadata() for unique titles
and descriptions. This improves Google Analytics tracking.

fix: Resolve TypeScript error in markdown utility

Updated MarkdownPost interface to include optional description field.

content: Add new policy position on religious liberty

Created new markdown file with comprehensive position on First
Amendment protections and religious freedom in the workplace.
```

## Contribution Guidelines

### What We're Looking For

**High Priority:**
- Bug fixes and performance improvements
- SEO and accessibility enhancements
- Mobile responsiveness improvements
- Documentation updates
- Security improvements

**Welcome Contributions:**
- New policy content (must align with biblical values)
- UI/UX improvements
- Test coverage
- Translation support (future)

**Requires Approval:**
- Major architectural changes
- New dependencies
- Changes to FEC compliance features
- Endorsement content

### What We Won't Accept

- Content contradicting our Statement of Faith
- Features promoting non-biblical values
- Plagiarized content
- Malicious code or security vulnerabilities
- Spam or promotional content unrelated to our mission

## Content Guidelines

### Adding News Articles

1. Create a new markdown file in `content/news/`
2. Use kebab-case for filenames: `article-title.md`
3. Include complete frontmatter:

```yaml
---
title: "Your Article Title"
date: "2025-01-15"
author: "Author Name"
category: "Announcement|Policy|Endorsement"
excerpt: "Brief summary for listings (150 chars max)"
description: "SEO-optimized description (160 chars max)"
featured: true|false
---

# Your Article Title

Your content here using markdown formatting...
```

### Adding Policy Positions

1. Create a new markdown file in `content/policy/`
2. Include biblical references and scriptural foundation
3. Use the following structure:

```yaml
---
title: "Policy Title"
date: "2025-01-15"
author: "Messiah First for America PAC"
category: "Policy Position"
excerpt: "Brief policy summary"
description: "SEO-optimized policy description"
---

# Policy Title

## Biblical Foundation

[Scripture references and theological basis]

## Policy Positions

[Specific policy recommendations]

## Implementation Strategy

[How this advances our mission]
```

### Adding Politician Endorsements

**Important:** Politician endorsements require PAC leadership approval.

1. Draft content in `content/politicians/`
2. Submit for review via pull request
3. Wait for leadership approval before merging
4. Include required FEC disclaimers

## Technical Standards

### Code Quality

- **TypeScript:** Use strict type checking
- **React:** Use functional components and hooks
- **Next.js:** Follow App Router conventions
- **Tailwind:** Use utility classes consistently
- **Accessibility:** Ensure WCAG 2.1 AA compliance

### Component Guidelines

```typescript
// Good: Functional component with proper types
interface Props {
  title: string;
  description?: string;
}

export function MyComponent({ title, description }: Props) {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold">{title}</h1>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
}
```

### File Organization

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── layout/      # Header, Footer, Navigation
│   ├── ui/          # Reusable UI components
│   └── [feature]/   # Feature-specific components
├── lib/             # Utilities and helpers
│   └── utils/       # Helper functions
└── types/           # TypeScript type definitions

content/             # Markdown content
├── news/
├── policy/
├── politicians/
├── mission/
└── legal/

public/              # Static assets
├── images/
└── [other static files]
```

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing (4px base unit)
- Use semantic color names from theme
- Ensure high contrast for accessibility

### Performance Standards

- Keep page bundle sizes under 300kb
- Optimize images (WebP format preferred)
- Use Next.js Image component for all images
- Implement lazy loading for below-fold content
- Maintain Lighthouse score above 90

## Submitting Changes

### Pull Request Process

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes and commit:**
   ```bash
   git add .
   git commit -m "feat: Add your feature"
   ```

3. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Open a Pull Request** on GitHub

5. **Fill out the PR template:**
   - Describe what changed and why
   - Link related issues
   - Add screenshots for UI changes
   - Confirm all tests pass
   - Confirm you've read FEC compliance guidelines

### PR Review Criteria

Your PR will be reviewed for:

- ✅ Code quality and TypeScript types
- ✅ Alignment with mission and values
- ✅ FEC compliance (if applicable)
- ✅ Test coverage
- ✅ Documentation updates
- ✅ Mobile responsiveness
- ✅ Accessibility standards
- ✅ Performance impact

### After PR Submission

- Respond to review comments promptly
- Make requested changes
- Keep PR scope focused and manageable
- Be patient - reviews may take 1-3 business days

## FEC Compliance

### Critical Requirements

All contributions must maintain FEC compliance:

1. **Disclaimers:** All political content must include required disclaimers
2. **Independence:** No coordination with federal candidates
3. **Transparency:** Public disclosure of sources and methods
4. **Accuracy:** All FEC information must be accurate and current

### Required Disclaimers

All pages with political content must include:

```
Paid for by Messiah First for America PAC and not authorized
by any candidate or candidate's committee.
```

### Contribution Restrictions

**DO NOT:**
- Remove or modify FEC disclaimers
- Add features that coordinate with candidates
- Modify donation processing without legal review
- Change committee identification information

### Questions?

If you have questions about FEC compliance, contact:
- Email: tikkunolam@messiahfirst.org
- Subject: "FEC Compliance Question - Website Contribution"

## Getting Help

### Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

### Community

- **GitHub Issues:** Report bugs or request features
- **Email:** tikkunolam@messiahfirst.org
- **Website:** [https://messiahfirst.org/contact](https://messiahfirst.org/contact)

### Reporting Issues

When reporting bugs, please include:

1. **Description:** Clear description of the issue
2. **Steps to Reproduce:** How to recreate the bug
3. **Expected Behavior:** What should happen
4. **Actual Behavior:** What actually happens
5. **Environment:** Browser, OS, Node version
6. **Screenshots:** If applicable

## Recognition

Contributors who make significant contributions will be acknowledged in:
- Project documentation
- Website credits page (coming soon)
- Annual reports

## License

By contributing, you agree that your contributions will be owned by Messiah First for America PAC and covered under the "All Rights Reserved" license. See [LICENSE](LICENSE) file for details.

## Questions?

If you have questions about contributing, please:
- Open a GitHub Discussion
- Email tikkunolam@messiahfirst.org
- Visit our [Contact page](https://messiahfirst.org/contact)

---

**Thank you for contributing to advancing biblical principles in American politics!**

*"Whatever you do, work heartily, as for the Lord and not for men." - Colossians 3:23*
