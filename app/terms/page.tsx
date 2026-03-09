import React from 'react';

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 font-sans text-slate-800">
      <h1 className="text-4xl font-bold mb-8 text-slate-900">Terms of Service</h1>
      <p className="text-sm text-slate-500 mb-10">Last Updated: February 12, 2026</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900">1. Acceptance of Terms</h2>
        <p className="leading-relaxed">
          By downloading or using the Dokki application, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900">2. Use of AI Services</h2>
        <p className="leading-relaxed mb-4">
          Dokki uses Artificial Intelligence to process documents and calculate taxes. While we strive for accuracy, AI outputs may occasionally be incorrect or misleading.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>You are responsible for verifying all financial and tax calculations before submission to authorities.</li>
          <li>Dokki is not liable for any penalties or errors resulting from reliance on AI-generated data.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900">3. User Accounts</h2>
        <p className="leading-relaxed">
          You are responsible for safeguarding your account credentials. All activities that occur under your account are your responsibility. We reserve the right to terminate accounts that violate these terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900">4. Subscriptions and Tokens</h2>
        <p className="leading-relaxed">
          Dokki operates on a token-based system. Tokens purchased are non-refundable. We reserve the right to adjust pricing and token usage rates for AI features at any time with notice.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900">5. Limitation of Liability</h2>
        <p className="leading-relaxed">
          To the maximum extent permitted by law, Dokki shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900">6. Contact</h2>
        <p className="leading-relaxed">
          Questions about these Terms? Contact us at: <strong>support@dokki.org</strong>
        </p>
      </section>

      <div className="mt-12 pt-8 border-t border-slate-200">
        <a href="/" className="text-blue-600 hover:underline font-medium">← Back to Home</a>
      </div>
    </div>
  );
}