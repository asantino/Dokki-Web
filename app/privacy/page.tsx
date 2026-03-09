import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function EcosystemHub() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-100">
      
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="relative w-32 h-10 block">
            <Image src="/Dokki.logo.jpg" alt="Dokki Logo" fill className="object-contain" priority />
          </Link>
          <div className="flex gap-4">
            <a href="mailto:hi@dokki.org" className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:shadow-xl transition-all">CONTACT</a>
          </div>
        </div>
      </header>

      <section className="pt-48 pb-24 px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-slate-50 text-slate-500 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.3em] mb-10 border border-slate-100">
          <Sparkles size={12} />
          <span>I.T.C Solutions FZE Official</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9]">
          Secure Digital <br />
          <span className="text-slate-400">Environments.</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12">
          Architecting high-performance, privacy-first mobile applications with <strong>Flutter</strong> and <strong>Node.js</strong>.
        </p>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <Link href="/dokki-ai" className="group block bg-slate-50 p-12 rounded-[3rem] border border-slate-100 hover:border-[#4FA0A0]/30 transition-all duration-500">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-slate-100 mb-12 shadow-sm">
             <Image src="/dokki-icon.png" alt="Dokki AI Icon" width={32} height={32} />
          </div>
          <h3 className="text-4xl font-black text-[#004977] mb-4 tracking-tight">Dokki AI</h3>
          <p className="text-slate-500 mb-10 h-20">Intelligent document management. Scan, categorize, and extract tax data automatically.</p>
          <div className="flex items-center text-[#4FA0A0] font-bold uppercase tracking-widest text-sm group-hover:translate-x-2 transition-transform">
            Explore <ArrowRight size={18} className="ml-2" />
          </div>
        </Link>

        <Link href="/dokkinotes" className="group block bg-[#0c0c0c] p-12 rounded-[3rem] border border-[#222] hover:border-[#b47e23]/30 transition-all duration-500">
          <div className="w-16 h-16 bg-[#1a1a1a] rounded-2xl flex items-center justify-center border border-[#333] mb-12 shadow-sm">
             <Image src="/dokkinotes-icon.png" alt="DokkiNotes Icon" width={32} height={32} />
          </div>
          <h3 className="text-4xl font-black text-white mb-4 tracking-tight italic">DokkiNotes</h3>
          <p className="text-slate-400 mb-10 h-20">Biometric notepad with AI voice processing. Secure your ideas with FaceID.</p>
          <div className="flex items-center text-[#b47e23] font-bold uppercase tracking-widest text-sm group-hover:translate-x-2 transition-transform">
            View Vault <ArrowRight size={18} className="ml-2" />
          </div>
        </Link>
      </section>

      <footer className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
           <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm mb-8">
              <div className="p-2 bg-slate-900 rounded-lg text-white font-black text-xs">10103</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest text-left">Trade License<br/>I.T.C Solutions FZE</div>
           </div>
           <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300">
             © 2026 Umm Al Quwain, U.A.E. • Alexandr Pak
           </p>
        </div>
      </footer>
    </div>
  );
}