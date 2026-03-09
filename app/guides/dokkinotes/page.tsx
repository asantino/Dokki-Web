import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Mic, Clock, ShieldCheck, Lock } from 'lucide-react';

export default function DokkiNotesGuide() {
  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans pb-20 selection:bg-[#b47e23]/30">
      {/* HEADER */}
      <header className="bg-black/80 backdrop-blur-md border-b border-white/5 px-6 py-6 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 text-sm font-bold text-white/40 hover:text-[#b47e23] transition-all">
          <ArrowLeft size={16} /> Help Center
        </Link>
      </header>

      <main className="max-w-xl mx-auto px-6 pt-10">
        {/* HERO CARD */}
        <div className="bg-[#b47e23] rounded-[2.5rem] p-8 mb-12 shadow-2xl shadow-[#b47e23]/10">
          <Lock size={40} className="mb-6 text-black/80" />
          <h1 className="text-4xl font-black tracking-tight mb-4 text-black italic leading-none">DokkiNotes Guide</h1>
          <p className="text-black/70 leading-relaxed font-bold">Master your private digital vault.</p>
        </div>

        {/* STEPS */}
        <div className="space-y-16">
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 font-black text-[#b47e23]">01</div>
              <h2 className="text-2xl font-black italic tracking-tight">Biometric Security</h2>
            </div>
            <p className="text-white/50 mb-8 leading-relaxed">Your notes are protected by device-level encryption. Enable <span className="text-white font-bold">FaceID</span> in the app settings to ensure only you can access your vault.</p>
            <div className="bg-white/5 p-4 rounded-[2.5rem] border border-white/5">
               <Image src="/dn-screenshot2.png" alt="Security" width={280} height={580} className="rounded-[2rem] mx-auto shadow-2xl" />
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 font-black text-[#b47e23]">02</div>
              <h2 className="text-2xl font-black italic tracking-tight">Self-Destruct Timers</h2>
            </div>
            <p className="text-white/50 mb-8 leading-relaxed">For temporary secrets, use the <span className="text-[#b47e23] font-bold">Burn Timer</span>. Set a limit from 1 hour to 7 days. Once time is up, the data is wiped from existence.</p>
            <div className="bg-white/5 p-4 rounded-[2.5rem] border border-white/5">
               <Image src="/dn-screenshot4.png" alt="Timers" width={280} height={580} className="rounded-[2rem] mx-auto shadow-2xl" />
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 font-black text-[#b47e23]">03</div>
              <h2 className="text-2xl font-black italic tracking-tight">AI Voice Processing</h2>
            </div>
            <p className="text-white/50 mb-8 leading-relaxed font-medium">Capture ideas on the go. DokkiNotes transcribes your voice to text using local neural models, keeping your recordings private.</p>
          </section>
        </div>
      </main>

      <footer className="mt-20 py-12 px-6 border-t border-white/5 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">I.T.C Solutions FZE • Support Center</p>
      </footer>
    </div>
  );
}