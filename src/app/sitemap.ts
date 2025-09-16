import { MetadataRoute } from 'next'
import { getAllMarkdownFiles } from '@/lib/utils/markdown'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: 'https://messiahfirst.org',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://messiahfirst.org/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://messiahfirst.org/mission',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://messiahfirst.org/statement-of-faith',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://messiahfirst.org/policy',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://messiahfirst.org/politicians',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://messiahfirst.org/news',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://messiahfirst.org/donate',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://messiahfirst.org/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://messiahfirst.org/fec-compliance',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://messiahfirst.org/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Dynamic pages from markdown files
  const dynamicPages: MetadataRoute.Sitemap = []

  // Policy pages
  const policyFiles = getAllMarkdownFiles('policy')
  policyFiles.forEach(file => {
    const slug = file.replace('.md', '')
    dynamicPages.push({
      url: `https://messiahfirst.org/policy/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  })

  // Politicians pages
  const politicianFiles = getAllMarkdownFiles('politicians')
  politicianFiles.forEach(file => {
    const slug = file.replace('.md', '')
    dynamicPages.push({
      url: `https://messiahfirst.org/politicians/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    })
  })

  // News pages
  const newsFiles = getAllMarkdownFiles('news')
  newsFiles.forEach(file => {
    const slug = file.replace('.md', '')
    dynamicPages.push({
      url: `https://messiahfirst.org/news/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  })

  return [...staticPages, ...dynamicPages]
}