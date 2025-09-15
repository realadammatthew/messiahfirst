import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate - Messiah First for America PAC',
  description: 'Support our mission to proclaim Yeshua and advance biblical principles in American politics through your donation.',
};

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-green-600 font-semibold mb-2">SUPPORT THE MISSION</p>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Make a Donation</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help us proclaim Yeshua the Messiah and support candidates who will advance His kingdom principles in America.
          </p>
        </div>

        {/* Donation Impact */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Your Impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📢</span>
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">Proclaim Yeshua</h3>
              <p className="text-gray-600 text-sm">
                Fund campaigns that boldly declare Yeshua as Lord in the public square
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🗳️</span>
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">Support Candidates</h3>
              <p className="text-gray-600 text-sm">
                Directly support biblical candidates through independent expenditures
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">Educate Voters</h3>
              <p className="text-gray-600 text-sm">
                Create resources that help believers vote according to biblical principles
              </p>
            </div>
          </div>
        </div>

        {/* Donation Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Online Donation */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Donate Online</h3>
            <p className="text-gray-600 mb-6">
              Make a secure online donation through our trusted payment processor.
            </p>

            {/* Placeholder for donation form/link */}
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
              <p className="text-gray-500 mb-4">
                <strong>DonorBox Integration Placeholder</strong>
              </p>
              <p className="text-sm text-gray-400">
                This is where the DonorBox donation form or link will be embedded.
                The actual donation processor will be configured after receiving your DonorBox details.
              </p>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Donate Now
              </button>
              <p className="text-xs text-gray-500 text-center">
                Secure donation processing via DonorBox
              </p>
            </div>
          </div>

          {/* Mail Donation */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Donate by Mail</h3>
            <p className="text-gray-600 mb-6">
              Send a check or money order to our mailing address.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="font-semibold text-blue-900 mb-2">Make checks payable to:</p>
              <p className="text-blue-800">Messiah First for America PAC</p>

              <p className="font-semibold text-blue-900 mt-4 mb-2">Mail to:</p>
              <div className="text-blue-800">
                <p>[Treasurer Name]</p>
                <p>[Mailing Address]</p>
                <p>[City, State ZIP]</p>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              <p className="mb-2">
                <strong>Required Information:</strong> Please include your name, address, occupation, and employer with your donation.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Information */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">Important Legal Information</h3>
          <div className="text-sm text-yellow-700 space-y-2">
            <p>
              <strong>No Contribution Limits:</strong> As a Super PAC, we can accept unlimited contributions from individuals, corporations, and organizations.
            </p>
            <p>
              <strong>Prohibited Contributors:</strong> We cannot accept contributions from foreign nationals or federal contractors.
            </p>
            <p>
              <strong>Reporting:</strong> All contributions are publicly reported to the Federal Election Commission.
            </p>
            <p>
              <strong>Tax Deductibility:</strong> Contributions to political committees are not tax-deductible.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Questions About Donating?</h3>
          <p className="text-blue-100 mb-6">
            Our team is here to help with any questions about contributions or our mission.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Link
              href="/contact"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/fec-compliance"
              className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              FEC Compliance Info
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Paid for by Messiah First for America PAC and not authorized by any candidate or candidate&apos;s committee.
          </p>
        </div>
      </div>
    </div>
  );
}