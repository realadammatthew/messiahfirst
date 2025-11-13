import { getMarkdownContent, getAllMarkdownFiles } from '@/lib/utils/markdown';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface PoliticianPostProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const files = getAllMarkdownFiles('politicians');
  return files.map((file) => ({
    slug: file.replace('.md', ''),
  }));
}

export async function generateMetadata({ params }: PoliticianPostProps): Promise<Metadata> {
  try {
    const post = getMarkdownContent(`politicians/${params.slug}.md`);
    return {
      title: `${post.title} - Messiah First for America PAC`,
      description: post.description || post.excerpt || `Endorsement information for ${post.title}`,
    };
  } catch {
    return {
      title: 'Candidate Information - Messiah First for America PAC',
    };
  }
}

export default function PoliticianPost({ params }: PoliticianPostProps) {
  try {
    const post = getMarkdownContent(`politicians/${params.slug}.md`);

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
                <Link href="/politicians" className="hover:text-blue-600">Politicians</Link>
              </li>
              <li>/</li>
              <li className="text-gray-900">{post.title}</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-8">
            {post.category && (
              <p className="text-green-600 font-semibold mb-2">{post.category.toUpperCase()}</p>
            )}
            <h1 className="text-4xl font-bold text-blue-900 mb-4">{post.title}</h1>
            <div className="flex justify-center items-center space-x-4 text-gray-600">
              {post.date && <span>Endorsed: {post.date}</span>}
              {post.author && <span>by {post.author}</span>}
            </div>
          </div>

          {/* Endorsement Badge */}
          <div className="bg-green-100 border border-green-300 rounded-lg p-4 mb-8 text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-600 text-white">
              ✓ ENDORSED CANDIDATE
            </span>
            <p className="text-green-700 text-sm mt-2">
              This candidate meets our biblical standards and has our full support.
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <MarkdownRenderer content={post.content} />
          </div>

          {/* Support Actions */}
          <div className="mt-12 bg-blue-900 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Support This Candidate</h3>
            <p className="text-blue-100 mb-6">
              Help us support candidates who will advance biblical principles in government.
            </p>
            <div className="flex gap-4 justify-center flex-col sm:flex-row">
              <Link
                href="/donate"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
              >
                Donate to Support
              </Link>
              <Link
                href="/news"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-center"
              >
                Stay Updated
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between items-center">
            <Link
              href="/politicians"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              ← Back to Politicians
            </Link>
            <Link
              href="/contact"
              className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
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