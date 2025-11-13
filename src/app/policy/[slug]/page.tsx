import { getMarkdownContent, getAllMarkdownFiles } from '@/lib/utils/markdown';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface PolicyPostProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const files = getAllMarkdownFiles('policy');
  return files.map((file) => ({
    slug: file.replace('.md', ''),
  }));
}

export async function generateMetadata({ params }: PolicyPostProps): Promise<Metadata> {
  try {
    const post = getMarkdownContent(`policy/${params.slug}.md`);
    return {
      title: `${post.title} - Messiah First for America PAC`,
      description: post.description || post.excerpt || `Policy position on ${post.title}`,
    };
  } catch {
    return {
      title: 'Policy Position - Messiah First for America PAC',
    };
  }
}

export default function PolicyPost({ params }: PolicyPostProps) {
  try {
    const post = getMarkdownContent(`policy/${params.slug}.md`);

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
                <Link href="/policy" className="hover:text-blue-600">Policy</Link>
              </li>
              <li>/</li>
              <li className="text-gray-900">{post.title}</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-8">
            {post.category && (
              <p className="text-blue-600 font-semibold mb-2">{post.category.toUpperCase()}</p>
            )}
            <h1 className="text-4xl font-bold text-blue-900 mb-4">{post.title}</h1>
            <div className="flex justify-center items-center space-x-4 text-gray-600">
              {post.date && <span>{post.date}</span>}
              {post.author && <span>by {post.author}</span>}
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <MarkdownRenderer content={post.content} />
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center">
            <Link
              href="/policy"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              ← Back to Policy
            </Link>
            <Link
              href="/contact"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Questions? Contact Us
            </Link>
          </div>
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}