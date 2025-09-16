import { getAllPosts } from '@/lib/utils/markdown';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Policy Positions - Messiah First for America PAC',
  description: 'Biblical principles for governance and our policy positions on key issues facing America.',
};

export default function PolicyPage() {
  const policyPosts = getAllPosts('policy');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2">BIBLICAL GOVERNANCE</p>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Policy Education</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding how biblical principles should inform public policy and governance in America.
          </p>
        </div>

        {/* Core Principles */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Core Biblical Principles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Sanctity of Life</h3>
              <p className="text-gray-600 text-sm">
                Protecting all human life from conception to natural death as created in G-d&apos;s image.
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Religious Liberty</h3>
              <p className="text-gray-600 text-sm">
                Defending the constitutional right to freely practice faith and live according to biblical convictions.
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Biblical Marriage</h3>
              <p className="text-gray-600 text-sm">
                Supporting the biblical definition of marriage between one man and one woman.
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Israel Support</h3>
              <p className="text-gray-600 text-sm">
                Standing with Israel as G-d&apos;s chosen people and supporting America&apos;s alliance with the Jewish state.
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Constitutional Government</h3>
              <p className="text-gray-600 text-sm">
                Upholding constitutional principles, separation of powers, and limited government.
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Biblical Justice</h3>
              <p className="text-gray-600 text-sm">
                Promoting justice systems that reflect biblical principles of mercy, truth, and righteousness.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Papers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-8">Policy Position Papers</h2>
          {policyPosts.length > 0 ? (
            <div className="grid gap-6">
              {policyPosts.map((post) => (
                <div key={post.slug} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">
                        <Link href={`/policy/${post.slug}`} className="hover:text-blue-700">
                          {post.title}
                        </Link>
                      </h3>
                      {post.category && (
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {post.category}
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/policy/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read Full Position →
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <p className="text-gray-600">Policy position papers will be published here as they become available.</p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Informed on Biblical Policy</h3>
          <p className="text-blue-100 mb-6">
            Subscribe to our updates to receive new policy analyses and educational resources.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Link
              href="/news"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Latest Updates
            </Link>
            <Link
              href="/contact"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}