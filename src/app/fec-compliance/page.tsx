import { getMarkdownContent } from '@/lib/utils/markdown';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FEC Compliance - Messiah First for America PAC',
  description: 'Federal Election Commission compliance information, legal disclosures, and transparency data.',
};

export default function FECCompliancePage() {
  const complianceContent = getMarkdownContent('legal/fec-compliance.md');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-blue-600 font-semibold mb-2">TRANSPARENCY & ACCOUNTABILITY</p>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">{complianceContent.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {complianceContent.excerpt}
          </p>
        </div>

        {/* Quick Reference */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">Quick Reference</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium text-yellow-800">Committee Type:</p>
              <p className="text-yellow-700">Independent Expenditure-Only Committee (Super PAC)</p>
            </div>
            <div>
              <p className="font-medium text-yellow-800">FEIN:</p>
              <p className="text-yellow-700">39-3408257</p>
            </div>
            <div>
              <p className="font-medium text-yellow-800">FEC ID:</p>
              <p className="text-yellow-700">C00913418</p>
            </div>
            <div>
              <p className="font-medium text-yellow-800">Registration Status:</p>
              <p className="text-yellow-700">Active</p>
            </div>
            <div>
              <p className="font-medium text-yellow-800">Contribution Limits:</p>
              <p className="text-yellow-700">No limits (Super PAC)</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
          <MarkdownRenderer content={complianceContent.content} />
        </div>

        {/* Key Compliance Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center mb-3">
              <span className="text-green-600 text-2xl mr-3">📊</span>
              <h3 className="font-semibold text-green-800">Public Reporting</h3>
            </div>
            <p className="text-green-700 text-sm">
              All contributions and expenditures are publicly reported to the FEC
              and available for public review.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center mb-3">
              <span className="text-blue-600 text-2xl mr-3">🔒</span>
              <h3 className="font-semibold text-blue-800">Independence</h3>
            </div>
            <p className="text-blue-700 text-sm">
              We operate independently with no coordination with federal candidates
              or their campaigns.
            </p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <div className="flex items-center mb-3">
              <span className="text-purple-600 text-2xl mr-3">⚖️</span>
              <h3 className="font-semibold text-purple-800">Legal Counsel</h3>
            </div>
            <p className="text-purple-700 text-sm">
              We work with experienced election law attorneys to ensure
              full compliance with all regulations.
            </p>
          </div>
        </div>

        {/* Disclaimer Box */}
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-gray-800 mb-3">Legal Disclaimers</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong>Authorization:</strong> This communication is not authorized by any candidate or candidate&apos;s committee.
            </p>
            <p>
              <strong>Committee Identification:</strong> Paid for by Messiah First for America PAC and not authorized by any candidate or candidate&apos;s committee.
            </p>
            <p>
              <strong>Independent Expenditures:</strong> All expenditures are made independently without coordination with any federal candidate.
            </p>
          </div>
        </div>

        {/* External Links */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-6">Transparency Resources</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-800 mb-3">Federal Election Commission</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.fec.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    FEC.gov - Official Website
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.fec.gov/data/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Campaign Finance Database
                  </a>
                </li>
                <li>
                  <span className="text-gray-500">Our FEC Reports (Available after registration)</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-800 mb-3">Contact Information</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <strong>Compliance Questions:</strong><br />
                  <a href="mailto:tikkunolam@messiahfirst.org" className="text-blue-600 hover:text-blue-800">
                    tikkunolam@messiahfirst.org
                  </a>
                </li>
                <li>
                  <strong>General Inquiries:</strong><br />
                  <Link href="/contact" className="text-blue-600 hover:text-blue-800">
                    Contact Form
                  </Link>
                </li>
                <li>
                  <strong>Legal Counsel:</strong><br />
                  [To be provided upon retention]
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Questions About Compliance?</h3>
          <p className="text-blue-100 mb-6">
            We are committed to full transparency and compliance with all FEC regulations.
            Contact us with any questions about our legal obligations or reporting.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Link
              href="/contact"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/donate"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Make a Donation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}