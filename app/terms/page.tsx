import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Gavel } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans p-8 md:p-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 mb-12 transition-all">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <Gavel className="text-slate-900 mb-6" size={48} />
        <h1 className="text-5xl font-black tracking-tight mb-8">Terms of Service</h1>

        <section className="space-y-8 text-slate-600 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wider">1. Agreement to Terms</h2>
            <p>By accessing Dokki AI or DokkiNotes, you agree to be bound by these Terms of Service provided by I.T.C Solutions FZE. If you disagree with any part of these terms, you may not access the service.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wider">2. Intellectual Property</h2>
            <p>The Dokki ecosystem, including logos, UI design, and proprietary AI algorithms, is the exclusive property of I.T.C Solutions FZE.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wider">3. Limitation of Liability</h2>
            <p>In no event shall I.T.C Solutions FZE be liable for any indirect, incidental, or consequential damages resulting from your use or inability to use the service.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wider">4. Governing Law</h2>
            <p>These terms shall be governed and construed in accordance with the laws of the United Arab Emirates.</p>
          </div>
        </section>
      </div>
    </div>
  );
}