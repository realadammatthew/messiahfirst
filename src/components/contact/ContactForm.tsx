'use client';

import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("movnzzvj");

  if (state.succeeded) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-green-600 text-6xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
        <p className="text-green-700 mb-4">
          Thank you for contacting Messiah First for America PAC. We typically respond within 24-48 hours.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="text-red-600 text-sm mt-1"
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
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-600 text-sm mt-1"
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
        <ValidationError
          prefix="Phone"
          field="phone"
          errors={state.errors}
          className="text-red-600 text-sm mt-1"
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
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
          className="text-red-600 text-sm mt-1"
        />
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
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-600 text-sm mt-1"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>

      <p className="text-sm text-gray-500 text-center">
        * Required fields. We typically respond within 24-48 hours.
      </p>
    </form>
  );
}