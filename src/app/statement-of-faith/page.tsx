import { getMarkdownContent } from '@/lib/utils/markdown';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';
import Link from 'next/link';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const faithContent = getMarkdownContent('legal/statement-of-faith.md');

  return {
    title: `${faithContent.title} - Messiah First for America PAC`,
    description: faithContent.description || faithContent.excerpt || 'Our core biblical beliefs and theological foundation that guide our political engagement.',
  };
}

export default function StatementOfFaithPage() {
  const faithContent = getMarkdownContent('legal/statement-of-faith.md');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-blue-600 font-semibold mb-2">OUR FOUNDATION</p>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">{faithContent.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {faithContent.excerpt}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
          <MarkdownRenderer content={faithContent.content} />
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Biblical Authority</h3>
            <p className="text-gray-700">
              We believe the Bible is the inspired, infallible Word of G-d and our final authority
              for faith and practice, including how we engage in the political process.
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Yeshua (Jesus) the Jewish Messiah</h3>
            <p className="text-gray-700">
              We boldly proclaim that Yeshua (Jesus) is the Jewish Messiah, the Son of G-d,
              and that His L-rdship extends over every area of life, including government.
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Israel&apos;s Covenant</h3>
            <p className="text-gray-700">
              We affirm G-d&apos;s eternal covenant with Israel and the Jewish people,
              supporting Israel as both a biblical mandate and wise foreign policy.
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Biblical Governance</h3>
            <p className="text-gray-700">
              We believe biblical principles should inform public policy, promoting justice,
              righteousness, and the flourishing of all people according to G-d&apos;s design.
            </p>
          </div>
        </div>

        {/* Scripture Foundation */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            Scripture Foundation
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Government&apos;s Role</h4>
              <blockquote className="text-gray-600 italic text-sm">
                &quot;Let everyone be subject to the governing authorities, for there is no authority
                except that which G-d has established.&quot; - Romans 13:1
              </blockquote>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Blessing Nations</h4>
              <blockquote className="text-gray-600 italic text-sm">
                &quot;Blessed is the nation whose G-d is the L-rd, the people he chose
                for his inheritance.&quot; - Psalm 33:12
              </blockquote>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Justice and Righteousness</h4>
              <blockquote className="text-gray-600 italic text-sm">
                &quot;Righteousness exalts a nation, but sin condemns any people.&quot; - Proverbs 14:34
              </blockquote>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Israel&apos;s Blessing</h4>
              <blockquote className="text-gray-600 italic text-sm">
                &quot;I will bless those who bless you, and whoever curses you I will curse.&quot; - Genesis 12:3
              </blockquote>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Biblical Mission</h3>
          <p className="text-blue-100 mb-6">
            If you share these biblical convictions, we invite you to join our mission to
            advance G-d&apos;s kingdom principles in American politics.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Link
              href="/mission"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Our Mission
            </Link>
            <Link
              href="/donate"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Support Our Work
            </Link>
            <Link
              href="/contact"
              className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}