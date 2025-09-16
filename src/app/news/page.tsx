import { getAllPosts } from '@/lib/utils/markdown';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Updates - Messiah First for America PAC',
  description: 'Latest news, updates, and insights from our mission to advance biblical principles in American politics.',
};

export default function NewsPage() {
  const newsPosts = getAllPosts('news');
  const featuredPosts = newsPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2">STAY INFORMED</p>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">News & Updates</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Latest news, endorsements, and insights from our mission to proclaim Yeshua (Jesus) and advance biblical principles in American politics.
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-blue-900 mb-8">Featured</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <article key={post.slug} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        {post.category && (
                          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-2">
                            {post.category}
                          </span>
                        )}
                        <h3 className="text-xl font-bold text-blue-900 mb-2">
                          <Link href={`/news/${post.slug}`} className="hover:text-blue-700">
                            {post.title}
                          </Link>
                        </h3>
                      </div>
                      <span className="text-sm text-gray-500 ml-4">{post.date}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <Link
                        href={`/news/${post.slug}`}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Read More →
                      </Link>
                      {post.author && (
                        <span className="text-sm text-gray-500">by {post.author}</span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-8">All Updates</h2>
          {newsPosts.length > 0 ? (
            <div className="space-y-6">
              {newsPosts.map((post) => (
                <article key={post.slug} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {post.category && (
                          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {post.category}
                          </span>
                        )}
                        {post.featured && (
                          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">
                        <Link href={`/news/${post.slug}`} className="hover:text-blue-700">
                          {post.title}
                        </Link>
                      </h3>
                    </div>
                    <span className="text-sm text-gray-500 ml-4">{post.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <Link
                      href={`/news/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read Full Update →
                    </Link>
                    {post.author && (
                      <span className="text-sm text-gray-500">by {post.author}</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <p className="text-gray-600">No news updates available at this time.</p>
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-blue-100 mb-6">
            Get the latest news, endorsements, and policy updates delivered to your inbox.
          </p>

          {/* Mailchimp Newsletter Signup */}
          <div className="max-w-md mx-auto mb-6">
            <a
              href="http://eepurl.com/jnqOAQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Subscribe to Newsletter
            </a>
          </div>

          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Link
              href="/contact"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Contact for Updates
            </Link>
            <Link
              href="/mission"
              className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              Learn About Our Mission
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}