import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldAlert, Mic, Trash2, Lock } from 'lucide-react';

export default function DokkiNotesOfficialGuide() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E0E0E0] font-sans p-6 md:p-20">
      <div className="max-w-3xl mx-auto">
        <header className="mb-16">
          <Link href="/" className="flex items-center gap-2 text-[#9E9E9E] hover:text-white transition-all text-sm font-bold">
            <ArrowLeft size={16} /> BACK TO ECOSYSTEM
          </Link>
        </header>

        <section className="text-center mb-20">
          <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-[#FFD700] to-[#b47e23] bg-clip-text text-transparent italic">
            DokkiNotes Guide
          </h1>
          <p className="text-xl text-[#9E9E9E]">Your notes. Your privacy. No compromises.</p>
        </section>

        {/* CRITICAL WARNING */}
        <section className="bg-red-950/30 border-2 border-red-500 rounded-3xl p-8 mb-16">
          <div className="flex items-center gap-4 mb-6 text-red-500">
            <ShieldAlert size={32} />
            <h2 className="text-2xl font-black uppercase tracking-tight">CRITICAL: Security Policy</h2>
          </div>
          <p className="text-lg leading-relaxed text-white mb-4 italic">
            "Your Password is your Encryption Key."
          </p>
          <p className="text-[#B0B0B0] leading-relaxed">
            If you change your password, all previous notes will be lost forever. We do not store your keys, so password recovery is impossible. This is the price of absolute privacy.
          </p>
        </section>

        <div className="space-y-12">
          <div className="flex gap-6">
            <Mic className="text-[#b47e23] shrink-0" size={28} />
            <div>
              <h3 className="text-xl font-bold mb-2">AI Voice Transcription</h3>
              <p className="text-[#9E9E9E]">Record your thoughts. Our local AI converts speech to text instantly while maintaining encryption.</p>
            </div>
          </div>

          <div className="flex gap-6">
            <Trash2 className="text-[#b47e23] shrink-0" size={28} />
            <div>
              <h3 className="text-xl font-bold mb-2">Ephemeral Notes</h3>
              <p className="text-[#9E9E9E]">Set self-destruct timers for 1 hour or 24 hours. Once the time is up, the data is wiped from the device memory.</p>
            </div>
          </div>

          <div className="flex gap-6">
            <Lock className="text-[#b47e23] shrink-0" size={28} />
            <div>
              <h3 className="text-xl font-bold mb-2">Biometric Vault</h3>
              <p className="text-[#9E9E9E]">Use FaceID or TouchID to unlock the app and individual sensitive notes.</p>
            </div>
          </div>
        </div>

        <footer className="mt-32 pt-10 border-t border-white/5 text-center text-[#444] text-[10px] font-black uppercase tracking-[0.5em]">
          © 2026 I.T.C SOLUTIONS FZE
        </footer>
      </div>
    </div>
  );
}