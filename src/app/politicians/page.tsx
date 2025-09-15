import { getAllPosts } from '@/lib/utils/markdown';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Endorsed Politicians - Messiah First for America PAC',
  description: 'Candidates we support who share our biblical values and commitment to advancing Gods kingdom in America.',
};

export default function PoliticiansPage() {
  const politicianPosts = getAllPosts('politicians');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2">ENDORSED CANDIDATES</p>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Politicians We Support</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Candidates who share our biblical values and demonstrate the character and courage to govern according to God&apos;s principles.
          </p>
        </div>

        {/* Endorsement Criteria */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Our Endorsement Standards</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Faith Requirements</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  Personal relationship with Yeshua as Lord and Savior
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  Active participation in Bible-believing congregation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  Evidence of Christian character and integrity
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  Commitment to biblical worldview in governance
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Policy Alignment</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  Pro-life stance on all issues
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  Support for biblical marriage and family
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  Strong commitment to religious liberty
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  Unwavering support for Israel
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  Constitutional government principles
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/politicians/endorsement-criteria"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Read Full Endorsement Criteria →
            </Link>
          </div>
        </div>

        {/* Current Endorsements */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-8">Current Endorsements</h2>
          {politicianPosts.length > 0 ? (
            <div className="grid gap-6">
              {politicianPosts.map((post) => (
                <div key={post.slug} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">
                        <Link href={`/politicians/${post.slug}`} className="hover:text-blue-700">
                          {post.title}
                        </Link>
                      </h3>
                      {post.category && (
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-2">
                          {post.category}
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/politicians/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read Full Endorsement →
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Evaluating Candidates</h3>
              <p className="text-gray-600 mb-6">
                We are currently evaluating candidates for upcoming elections. Endorsements will be announced as decisions are made.
              </p>
              <div className="flex gap-4 justify-center flex-col sm:flex-row">
                <Link
                  href="/politicians/endorsement-criteria"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View Our Criteria
                </Link>
                <Link
                  href="/contact"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Submit Candidate
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* For Candidates */}
        <div className="bg-blue-900 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Are You a Candidate?</h3>
          <p className="text-blue-100 mb-6">
            If you&apos;re running for office and share our biblical values, we&apos;d love to learn more about your campaign and consider an endorsement.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">What We Offer</h4>
              <ul className="space-y-1 text-blue-100 text-sm">
                <li>• Financial support through independent expenditures</li>
                <li>• Grassroots mobilization</li>
                <li>• Policy guidance and resources</li>
                <li>• Connection with Christian voter networks</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Next Steps</h4>
              <ul className="space-y-1 text-blue-100 text-sm">
                <li>• Complete our candidate questionnaire</li>
                <li>• Submit your faith testimony</li>
                <li>• Participate in interview process</li>
                <li>• Provide references from your congregation</li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="/contact"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Apply for Endorsement
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}