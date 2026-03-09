import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Fingerprint } from 'lucide-react';

export default function DokkiNotesDeepDive() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white font-sans selection:bg-[#b47e23]/30">
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-white/5 z-50 px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-sm font-bold text-white/40 hover:text-[#b47e23] transition-all">
          <ArrowLeft size={16} /> Hub
        </Link>
        <div className="flex items-center gap-3">
          <Image src="/dokkinotes-icon.png" alt="Icon" width={24} height={24} />
          <span className="font-black italic text-white tracking-tight">DokkiNotes</span>
        </div>
        <div className="text-[10px] font-black uppercase text-white/10 tracking-widest italic">Private Vault</div>
      </header>

      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-6xl font-black text-white mb-8 tracking-tighter leading-none">Your Private <br/><span className="text-[#b47e23]">Brain.</span></h1>
          <p className="text-xl text-white/40 mb-10 leading-relaxed max-w-lg">Encrypted notepad with AI voice summarization.</p>
          <button className="bg-[#b47e23] text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-xl shadow-[#b47e23]/20 text-xs">Secure Access</button>
        </div>
        <div className="relative h-[600px] flex justify-center">
           <div className="relative w-[280px] h-full rounded-[3rem] shadow-2xl border-[8px] border-[#222] overflow-hidden">
              <Image src="/dn-screenshot3.png" alt="DokkiNotes" fill className="object-cover" />
           </div>
        </div>
      </section>
    </div>
  );
}