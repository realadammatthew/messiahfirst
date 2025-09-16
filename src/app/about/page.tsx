import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Messiah First for America PAC',
  description: 'Learn about the leadership and vision behind Messiah First for America PAC and our commitment to biblical principles.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2">LEADERSHIP</p>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">About Our Leadership</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the team committed to proclaiming Yeshua and advancing His kingdom principles in America.
          </p>
        </div>

        {/* Leadership Profile */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <Image
                src="/images/profile-picture.jpg"
                alt="PAC Leadership"
                width={250}
                height={250}
                className="rounded-lg shadow-md"
              />
            </div>

            {/* Profile Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Leadership Team</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Messiah First for America PAC is led by committed believers who are passionate about
                  seeing biblical principles guide American politics and governance.
                </p>
                <p>
                  Our leadership brings together experience in politics, ministry, and business,
                  united by a shared commitment to proclaiming Yeshua the Jewish Messiah and supporting
                  candidates who will advance His kingdom values.
                </p>
                <p>
                  We believe that America&apos;s strength comes from its foundation on Judeo-Christian
                  principles, and we are dedicated to preserving and restoring those foundations
                  for future generations.
                </p>
              </div>

              {/* Contact Info */}
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Contact Leadership
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Our Commitment */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Our Commitment</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-blue-800 mb-3">Biblical Foundation</h4>
              <p className="text-gray-600 text-sm">
                Every decision we make is grounded in Scripture and guided by prayer.
                We seek G-d&apos;s wisdom in all our political engagement and candidate evaluation.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-800 mb-3">Transparency</h4>
              <p className="text-gray-600 text-sm">
                We operate with complete transparency, ensuring all supporters understand
                our positions, endorsements, and use of contributions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-800 mb-3">Integrity</h4>
              <p className="text-gray-600 text-sm">
                Our leaders maintain the highest standards of personal and professional
                integrity, reflecting the character of Christ in all we do.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-800 mb-3">Boldness</h4>
              <p className="text-gray-600 text-sm">
                We boldly proclaim the Name of Yeshua without shame, knowing that
                He is L-rd over every sphere of society, including government.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Our Vision for America</h3>
          <p className="text-blue-100 mb-6 leading-relaxed">
            We envision an America where the Name of Yeshua is honored in public discourse,
            where biblical values guide policy decisions, where religious freedom flourishes,
            and where the next generation inherits a nation that acknowledges G-d as L-rd.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Link
              href="/mission"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Read Our Mission
            </Link>
            <Link
              href="/statement-of-faith"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Statement of Faith
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}