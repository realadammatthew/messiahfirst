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
            Meet the team committed to proclaiming  (Jesus) and advancing His kingdom principles in America.
          </p>
        </div>

        {/* Leadership Profile */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Adam Matthew Steinberger</h2>
          <p className="text-lg text-blue-600 italic mb-6">Founder, Messiah First for America PAC</p>

          {/* Profile Picture - floats left with text wrapping */}
          <div className="float-left mr-6 mb-4">
            <Link href="https://hire.adam.matthewsteinberger.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/profile-picture.jpg"
                alt="Adam Matthew Steinberger"
                width={300}
                height={300}
                className="rounded-lg shadow-md"
              />
            </Link>
          </div>

          {/* Profile Content - wraps around image */}
          <div className="text-gray-700 space-y-4 leading-relaxed">
            <p>
              Adam Matthew Steinberger founded Messiah First for America PAC to advance biblically rooted public policy with a Messianic Jewish (Christian) voice and an unshakable love for the nation&apos;s future.
            </p>
            <p>
              Raised Reform Jewish in Albany, New York, Adam plunged into substance abuse and atheism through his teens and twenties. Sobriety opened the door; a 2020 encounter with Yeshua (Jesus) the Jewish Messiah changed everything. A Birthright trip to Israel and a season exploring Orthodox Judaism confirmed the Tanakh&apos;s promises are fulfilled in Him, our Prophet and King.
            </p>
            <p>
              In 2023 he relocated to Greenville, South Carolina. A 2024 mission trip to Honduras led him to &quot;count the cost&quot; of full-time service. In 2025 he enrolled at Southeastern Baptist Theological Seminary (Wake Forest, NC) for an MDiv in Missiology, maintaining a 3.7 GPA while working as a Software Engineer. After attending ShalomNY with Chosen People Ministries in July 2025, he returned to Travelers Rest, SC, to complete his degree online.
            </p>
            <p>
              Gifted in prayer, evangelism, apologetics, missions, and street preaching, Adam carries a contagious heart of joy. Recently diagnosed with autism (October 2025), he brings distinctive insight to outreach among Jewish people, the recovery community, LGBT individuals, those exploring Islam, and committed atheists.
            </p>
            <p>
              Through Messiah First for America PAC, Adam channels his redemption story into policy advocacy that honors G-d, defends covenant values, and secures a faithful future for the United States of America.
            </p>
          </div>

          {/* Clear float and add contact button */}
          <div className="clear-both mt-6">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Leadership
            </Link>
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
                We boldly proclaim the Name of Yeshua (Jesus) without shame, knowing that
                He is L-rd over every sphere of society, including government.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Our Vision for America</h3>
          <p className="text-blue-100 mb-6 leading-relaxed">
            We envision an America where the Name of Yeshua (Jesus) is honored in public discourse,
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