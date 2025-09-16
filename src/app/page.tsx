import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Banner */}
      <section className="relative h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/images/banner.jpg"
          alt="Messiah First for America PAC Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Messiah First for America PAC
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed drop-shadow-lg">
            Proclaiming the Name of Yeshua (Jesus) the Jewish Messiah in America, educating on Messianic (Christian) policy,
            and supporting politicians who promote these values.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Link href="/mission" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              Learn About Our Mission
            </Link>
            <Link href="/donate" className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg">
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🙏</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Proclaim Yeshua (Jesus)</h3>
              <p className="text-gray-600">
                Boldly proclaiming the Name of Yeshua (Jesus) the Jewish Messiah throughout America
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Educate Public</h3>
              <p className="text-gray-600">
                Educating Americans on Messianic (Christian) policy principles
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🗳️</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Support Leaders</h3>
              <p className="text-gray-600">
                Supporting politicians who champion these values and policies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Movement</h2>
          <p className="text-xl mb-8">
            Help us proclaim Yeshua (Jesus) and support leaders who will advance His kingdom in America.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row mb-8">
            <Link href="/donate" className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Donate Now
            </Link>
            <a
              href="http://eepurl.com/jnqOAQ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Subscribe to Updates
            </a>
          </div>
          <p className="text-blue-200 text-sm">
            Stay informed with our newsletter featuring policy updates, endorsements, and ways to get involved.
          </p>
        </div>
      </section>
    </div>
  );
}
