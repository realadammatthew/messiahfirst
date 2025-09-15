import { Metadata } from 'next';
import Link from 'next/link';

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

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="endorsement">Candidate Endorsement Application</option>
                  <option value="donation">Donation Questions</option>
                  <option value="volunteer">Volunteer Opportunities</option>
                  <option value="media">Media Inquiry</option>
                  <option value="compliance">Compliance/Legal Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please provide details about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
              * Required fields. We typically respond within 24-48 hours.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Mailing Address */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Mailing Address</h3>
              <div className="text-gray-700">
                <p className="font-semibold">Messiah First for America PAC</p>
                <p>[Treasurer Name]</p>
                <p>[Street Address]</p>
                <p>[City, State ZIP Code]</p>
              </div>
            </div>

            {/* Email Contacts */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Email Contacts</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-gray-700">General Inquiries:</p>
                  <a href="mailto:info@messiahfirstpac.org" className="text-blue-600 hover:text-blue-800">
                    info@messiahfirstpac.org
                  </a>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Compliance Questions:</p>
                  <a href="mailto:compliance@messiahfirstpac.org" className="text-blue-600 hover:text-blue-800">
                    compliance@messiahfirstpac.org
                  </a>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Media Inquiries:</p>
                  <a href="mailto:media@messiahfirstpac.org" className="text-blue-600 hover:text-blue-800">
                    media@messiahfirstpac.org
                  </a>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Candidate Applications:</p>
                  <a href="mailto:endorsements@messiahfirstpac.org" className="text-blue-600 hover:text-blue-800">
                    endorsements@messiahfirstpac.org
                  </a>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Office Hours</h3>
              <div className="text-gray-700 text-sm space-y-1">
                <p><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM EST</p>
                <p><strong>Saturday:</strong> By appointment only</p>
                <p><strong>Sunday:</strong> Closed</p>
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