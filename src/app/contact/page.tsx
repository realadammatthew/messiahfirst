import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - Messiah First for America PAC',
  description: 'Get in touch with Messiah First for America PAC for questions, endorsement applications, or general inquiries.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2">GET IN TOUCH</p>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Reach out with questions, feedback, or to learn more about our mission.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Send us a Message</h2>

            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Mailing Address */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Mailing Address</h3>
              <div className="text-gray-700">
                <p className="font-semibold">Messiah First for America PAC</p>
                <p>Adam Matthew Steinberger</p>
                <p>236 Tippin Trl</p>
                <p>Travelers Rest, SC 29690</p>
              </div>
            </div>

            {/* Email Contacts */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Email Contacts</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-gray-700">All Inquiries:</p>
                  <a href="mailto:tikkunolam@messiahfirst.org" className="text-blue-600 hover:text-blue-800">
                    tikkunolam@messiahfirst.org
                  </a>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Office Hours</h3>
              <div className="text-gray-700 text-sm space-y-1">
                <p><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM EST</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-blue-900 text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  href="/donate"
                  className="block bg-green-600 text-center py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Make a Donation
                </Link>
                <Link
                  href="/politicians/endorsement-criteria"
                  className="block bg-blue-700 text-center py-3 px-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Apply for Endorsement
                </Link>
                <Link
                  href="/news"
                  className="block bg-gray-600 text-center py-3 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                >
                  Latest Updates
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Additional Information</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
            <div>
              <h4 className="font-semibold mb-2">For Candidates:</h4>
              <p>
                If you&apos;re seeking our endorsement, please use the &quot;Candidate Endorsement Application&quot;
                subject line and include your campaign information, faith testimony, and policy positions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">For Media:</h4>
              <p>
                Members of the press should use the media contact email and include your outlet,
                deadline, and specific questions for the most timely response.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">For Donors:</h4>
              <p>
                Questions about donations, FEC compliance, or contribution processing should include
                your donor information for faster assistance.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">For Volunteers:</h4>
              <p>
                We welcome volunteers who share our biblical values. Please indicate your location,
                availability, and areas of interest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}