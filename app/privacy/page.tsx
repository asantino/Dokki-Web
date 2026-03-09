import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function PrivacyPolicy() {
  const lastUpdated = "March 9, 2026";
  
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans p-8 md:p-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 mb-12 transition-all">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <ShieldCheck className="text-slate-900 mb-6" size={48} />
        <h1 className="text-5xl font-black tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-slate-400 font-medium mb-12 italic">Last updated: {lastUpdated}</p>

        <section className="space-y-8 text-slate-600 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wider">1. Introduction</h2>
            <p>I.T.C Solutions FZE ("we," "our," or "us") operates the Dokki AI and DokkiNotes mobile applications. We are committed to protecting your personal data and your right to privacy.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wider">2. Data Collection & Usage</h2>
            <p><strong>Dokki AI:</strong> We process documents (receipts, contracts) to extract data. This is done using secure AI models. Your documents are stored in your private cloud instance powered by Supabase.</p>
            <p className="mt-4"><strong>DokkiNotes:</strong> We use Zero-Knowledge architecture. Voice-to-text processing and biometric encryption happen on-device. We do not have access to your private notes or voice recordings.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wider">3. Security</h2>
            <p>We implement industry-standard encryption (AES-256) and secure authentication via Supabase. Biometric data (FaceID/TouchID) is handled by the operating system and is never transmitted to our servers.</p>
          </div>

          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wider">4. Contact Information</h2>
            <p>For any questions regarding this policy, contact us at:</p>
            <p className="font-bold text-slate-900 mt-2">hi@dokki.org</p>
            <p className="text-sm mt-2">I.T.C Solutions FZE, UAQ FTZ, United Arab Emirates</p>
          </div>
        </section>
      </div>
    </div>
  );
}