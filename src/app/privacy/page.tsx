import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Messiah First for America PAC',
  description: 'Privacy policy for Messiah First for America PAC website and data handling practices.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-8">
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
            <p className="text-blue-100 mt-2">
              Effective Date: September 15, 2025
            </p>
          </div>

          <div className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Messiah First for America PAC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                you visit our website or interact with our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Name and contact information (email, phone, address)</li>
                <li>Donation information and payment details</li>
                <li>Communication preferences</li>
                <li>Information submitted through contact forms</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>IP address and browser information</li>
                <li>Device and operating system information</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Process donations and maintain accurate records</li>
                <li>Communicate with you about our mission and activities</li>
                <li>Send newsletters and updates (with your consent)</li>
                <li>Respond to your inquiries and provide support</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our website and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Legal Compliance:</strong> As required by FEC regulations and other applicable laws</li>
                <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in our operations</li>
                <li><strong>Legal Process:</strong> When required by law, court order, or legal process</li>
                <li><strong>Protection:</strong> To protect our rights, property, or safety, or that of others</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We do not sell, trade, or rent your personal information to third parties for commercial purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">FEC Compliance</h2>
              <p className="text-gray-700 leading-relaxed">
                As a Super PAC, we are required to report contributor information to the Federal Election Commission (FEC)
                as mandated by federal law. This includes names, addresses, occupations, and employer information for
                contributions above certain thresholds. These reports become part of the public record.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information.
                However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Access and update your personal information</li>
                <li>Unsubscribe from marketing communications</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt out of certain data collection practices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website uses cookies and similar technologies to enhance your browsing experience and analyze website
                traffic. You can control cookie settings through your browser preferences, though some features may not
                function properly if cookies are disabled.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                or content of these external sites. We encourage you to review their privacy policies before providing
                any personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by
                posting the new policy on our website with an updated effective date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Messiah First for America PAC</strong><br />
                  Treasurer: Adam Matthew Steinberger<br />
                  236 Tippin Trl<br />
                  Travelers Rest, SC 29690<br />
                  Email: <a href="/contact" className="text-blue-600 hover:underline">Contact Form</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}