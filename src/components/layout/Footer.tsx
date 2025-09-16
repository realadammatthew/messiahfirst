import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="Messiah First for America PAC Logo"
                width={32}
                height={32}
                className="mr-2"
              />
              <h3 className="text-lg font-semibold">About Us</h3>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Proclaiming the Name of Yeshua (Jesus) the Jewish Messiah in America, educating on Messianic (Christian) policy,
              and supporting politicians who promote these values.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/mission" className="text-blue-100 hover:text-white text-sm">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/policy" className="text-blue-100 hover:text-white text-sm">
                  Policy Positions
                </Link>
              </li>
              <li>
                <Link href="/politicians" className="text-blue-100 hover:text-white text-sm">
                  Endorsed Candidates
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-blue-100 hover:text-white text-sm">
                  News & Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/statement-of-faith" className="text-blue-100 hover:text-white text-sm">
                  Statement of Faith
                </Link>
              </li>
              <li>
                <Link href="/fec-compliance" className="text-blue-100 hover:text-white text-sm">
                  FEC Compliance
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-blue-100 hover:text-white text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <p className="text-blue-100 text-sm mb-4">
              Join our mission to proclaim Yeshua (Jesus) and advance His kingdom in America.
            </p>
            <div className="space-y-2">
              <Link
                href="/donate"
                className="block bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors text-center"
              >
                Donate Now
              </Link>
              <a
                href="http://eepurl.com/jnqOAQ"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors text-center"
              >
                Newsletter Signup
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-100 text-sm">
            © 2025 Messiah First for America PAC. All rights reserved.
          </p>
          <p className="text-blue-200 text-xs mt-2">
            Paid for by Messiah First for America PAC and not authorized by any candidate or candidate&apos;s committee.
          </p>
          <p className="text-blue-200 text-xs mt-1">
            Contributions are not tax deductible as charitable contributions for federal income tax purposes.
          </p>
          <p className="text-blue-200 text-xs mt-3">
            Contributions from foreign nationals are prohibited.
          </p>
          <p className="text-blue-200 text-xs mt-1">
            Corporate contributions and contributions from federal government contractors are prohibited.
          </p>
          <p className="text-blue-200 text-xs mt-1">
            Maximum contribution per individual is $5,000 per calendar year.
          </p>
          <p className="text-blue-200 text-xs mt-1">
            Treasurer: Adam Matthew Steinberger, 236 Tippin Trl, Travelers Rest, SC 29690
          </p>
          <p className="text-blue-200 text-xs mt-5">
            FEIN 39-3408257
          </p>
        </div>
      </div>
      <div className="bg-blue-800 text-center py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-blue-200 text-sm">
          Website by <a href="https://hire.adam.matthewsteinberger.com" className="underline hover:text-white">Adam Matthew Steinberger LLC</a>
        </div>
      </div>
    </footer>
  );
}