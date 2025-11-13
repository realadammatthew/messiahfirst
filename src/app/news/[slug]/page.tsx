import { getMarkdownContent, getAllMarkdownFiles } from '@/lib/utils/markdown';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface NewsPostProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const files = getAllMarkdownFiles('news');
  return files.map((file) => ({
    slug: file.replace('.md', ''),
  }));
}

export async function generateMetadata({ params }: NewsPostProps): Promise<Metadata> {
  try {
    const post = getMarkdownContent(`news/${params.slug}.md`);
    return {
      title: `${post.title} - Messiah First for America PAC`,
      description: post.description || post.excerpt || `News update: ${post.title}`,
    };
  } catch {
    return {
      title: 'News Update - Messiah First for America PAC',
    };
  }
}

export default function NewsPost({ params }: NewsPostProps) {
  try {
    const post = getMarkdownContent(`news/${params.slug}.md`);

    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-blue-600">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/news" className="hover:text-blue-600">News</Link>
              </li>
              <li>/</li>
              <li className="text-gray-900">{post.title}</li>
            </ol>
          </nav>

          {/* Header */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="flex justify-center items-center gap-2 mb-4">
                  {post.category && (
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">
                      {post.category}
                    </span>
                  )}
                  {post.featured && (
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded">
                      Featured
                    </span>
                  )}
                </div>
                <h1 className="text-4xl font-bold text-blue-900 mb-4">{post.title}</h1>
                <div className="flex justify-center items-center space-x-4 text-gray-600">
                  {post.date && <span>{post.date}</span>}
                  {post.author && (
                    <>
                      <span>•</span>
                      <span>by {post.author}</span>
                    </>
                  )}
                </div>
                {post.excerpt && (
                  <p className="text-xl text-gray-600 mt-4 italic">{post.excerpt}</p>
                )}
              </div>

              {/* Content */}
              <MarkdownRenderer content={post.content} />
            </div>
          </article>

          {/* Share and Actions */}
          <div className="mt-12 bg-blue-900 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Take Action</h3>
            <p className="text-blue-100 mb-6">
              Help us advance biblical principles in American politics through your support and engagement.
            </p>
            <div className="flex gap-4 justify-center flex-col sm:flex-row">
              <Link
                href="/donate"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
              >
                Support Our Mission
              </Link>
              <Link
                href="/news"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-center"
              >
                More Updates
              </Link>
              <Link
                href="/contact"
                className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between items-center">
            <Link
              href="/news"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              ← Back to News
            </Link>
            <div className="flex gap-2">
              {/* Social sharing could be added here */}
            </div>
          </div>
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}