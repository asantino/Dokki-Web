import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldAlert, Mic, Trash2, Lock, UserX, Database, Key } from 'lucide-react';

export default function DokkiNotesOfficialGuide() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E0E0E0] font-sans p-6 md:p-20 selection:bg-[#b47e23]/30">
      <div className="max-w-3xl mx-auto">
        <header className="mb-16">
          <Link href="/" className="flex items-center gap-2 text-[#9E9E9E] hover:text-[#b47e23] transition-all text-sm font-bold uppercase tracking-widest">
            <ArrowLeft size={16} /> Back to Hub
          </Link>
        </header>

        <section className="mb-20">
          <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-[#FFD700] to-[#b47e23] bg-clip-text text-transparent italic tracking-tighter">
            DokkiNotes Guide
          </h1>
          <p className="text-xl text-[#9E9E9E] leading-relaxed italic">The ultimate manual for private communication and secure note-taking.</p>
        </section>

        {/* 1. SECURITY & ENCRYPTION */}
        <section className="mb-20 bg-red-950/20 border border-red-900/50 rounded-[2.5rem] p-10">
          <div className="flex items-center gap-4 mb-8 text-red-500">
            <ShieldAlert size={40} />
            <h2 className="text-3xl font-black uppercase tracking-tight">1. Security Architecture</h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-white font-bold">"Your Password is your Encryption Key."</p>
            <p className="text-[#B0B0B0]">
              DokkiNotes uses end-to-end encryption. When you create a note, it is encrypted locally on your device using your account password as a master key.
            </p>
            <div className="p-6 bg-black/40 rounded-2xl border border-red-900/30">
              <h4 className="text-red-400 font-bold mb-2">IMPORTANT:</h4>
              <p className="text-sm text-[#9E9E9E]">We do not store your password on our servers. If you change your password in the app settings, the encryption key changes. As a result, all notes created with the old password will remain encrypted with the old key and will be unreadable.</p>
            </div>
          </div>
        </section>

        {/* 2. CORE FEATURES */}
        <section className="mb-20 space-y-16">
          <h2 className="text-3xl font-black uppercase tracking-tight flex items-center gap-4">
            <Key className="text-[#b47e23]" /> 2. Key Capabilities
          </h2>
          
          <div className="grid gap-12">
            <div className="flex gap-8 items-start">
              <div className="bg-[#b47e23]/10 p-4 rounded-2xl text-[#b47e23] shrink-0"><Mic size={24} /></div>
              <div>
                <h3 className="text-xl font-bold mb-3">AI Voice Summarization</h3>
                <p className="text-[#9E9E9E] leading-relaxed">Record long thoughts or meetings. Our local AI processes the audio and provides a concise text summary. The audio file is never uploaded to any cloud.</p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="bg-[#b47e23]/10 p-4 rounded-2xl text-[#b47e23] shrink-0"><Trash2 size={24} /></div>
              <div>
                <h3 className="text-xl font-bold mb-3">Ephemeral/Self-Destruct Notes</h3>
                <p className="text-[#9E9E9E] leading-relaxed">You can set a timer for each note. Choose between 1 hour or 24 hours. After the timer expires, the note is completely wiped from your local storage and the database.</p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="bg-[#b47e23]/10 p-4 rounded-2xl text-[#b47e23] shrink-0"><Lock size={24} /></div>
              <div>
                <h3 className="text-xl font-bold mb-3">Individual Note PIN</h3>
                <p className="text-[#9E9E9E] leading-relaxed">For extra sensitive data, you can set a secondary PIN for specific notes. This creates a "safe within a safe" inside the app.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. DATA & ACCOUNT */}
        <section className="mb-20 space-y-10 border-t border-white/5 pt-16">
          <h2 className="text-3xl font-black uppercase tracking-tight flex items-center gap-4">
            <Database className="text-[#b47e23]" /> 3. Data Management
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><UserX className="text-red-500" size={20}/> Account Deletion</h3>
              <p className="text-[#9E9E9E] leading-relaxed mb-4">
                You have full control. If you choose to delete your account, all encrypted data, metadata, and summaries are immediately and permanently removed from our systems.
              </p>
              <p className="text-sm text-red-400 italic font-bold">Warning: This action is irreversible.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 italic">Device-Only Storage</h3>
              <p className="text-[#9E9E9E] leading-relaxed">
                Most metadata and temporary files are stored only on your device's secure enclave. This ensures that even in the event of a network interception, your content remains invisible.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-40 pb-20 border-t border-white/5 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#333] mb-4 pt-10">
            OFFICIAL DOCUMENTATION — I.T.C SOLUTIONS FZE
          </p>
          <p className="text-[9px] text-[#222]">Last Updated: March 2026</p>
        </footer>
      </div>
    </div>
  );
}