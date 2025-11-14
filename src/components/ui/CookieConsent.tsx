'use client';

import { useEffect, useState } from 'react';

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params: Record<string, string>
    ) => void;
  }
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consentGiven = localStorage.getItem('cookie_consent');
    if (!consentGiven) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    // Grant all consents
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'ad_storage': 'granted',
        'analytics_storage': 'granted'
      });
    }
    localStorage.setItem('cookie_consent', 'granted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    // Keep default denied state
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'ad_storage': 'denied',
        'analytics_storage': 'denied'
      });
    }
    localStorage.setItem('cookie_consent', 'denied');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm md:text-base">
            We use cookies to improve your experience and analyze site traffic.
            By clicking &quot;Accept&quot;, you consent to our use of cookies for analytics and advertising.
            {' '}
            <a href="/privacy" className="underline hover:text-blue-300">
              Learn more
            </a>
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleDecline}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-semibold transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
