import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface MarkdownPost {
  slug: string;
  title: string;
  date: string;
  author?: string;
  category?: string;
  excerpt?: string;
  featured?: boolean;
  content: string;
}

export function getMarkdownContent(filePath: string): MarkdownPost {
  const fullPath = path.join(process.cwd(), 'content', filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const slug = path.basename(filePath, '.md');

  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    author: data.author,
    category: data.category,
    excerpt: data.excerpt,
    featured: data.featured || false,
    content,
  };
}

export function getAllMarkdownFiles(directory: string): string[] {
  const fullPath = path.join(process.cwd(), 'content', directory);

  if (!fs.existsSync(fullPath)) {
    return [];
  }

  const files = fs.readdirSync(fullPath);
  return files.filter(file => file.endsWith('.md'));
}

export function getAllPosts(directory: string): MarkdownPost[] {
  const files = getAllMarkdownFiles(directory);

  const posts = files.map(file => {
    return getMarkdownContent(`${directory}/${file}`);
  });

  // Sort posts by date (newest first)
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}