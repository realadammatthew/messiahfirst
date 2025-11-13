import { getMarkdownContent } from '@/lib/utils/markdown';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';
import Link from 'next/link';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const missionContent = getMarkdownContent('mission/mission-statement.md');

  return {
    title: `${missionContent.title} - Messiah First for America PAC`,
    description: missionContent.description || missionContent.excerpt || 'Learn about our mission to proclaim Yeshua (Jesus), educate on Messianic (Christian) policy, and support aligned political leaders.',
  };
}

export default function MissionPage() {
  const missionContent = getMarkdownContent('mission/mission-statement.md');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <p className="text-blue-600 font-semibold mb-2">OUR FOUNDATION</p>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">{missionContent.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {missionContent.excerpt}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <MarkdownRenderer content={missionContent.content} />
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-blue-900 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Mission?</h3>
            <p className="text-blue-100 mb-6">
              Help us proclaim Yeshua (Jesus) and support leaders who will advance His kingdom in America.
            </p>
            <div className="flex gap-4 justify-center flex-col sm:flex-row">
              <Link
                href="/donate"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Support Our Mission
              </Link>
              <Link
                href="/news"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Stay Updated
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}