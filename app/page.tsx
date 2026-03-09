import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, BookOpen } from 'lucide-react';

export default function EcosystemHub() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-100">
      
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 z-50">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/" className="relative w-48 h-14 block">
            <Image src="/Dokki.logo.png" alt="Dokki Logo" fill className="object-contain object-left" priority />
          </Link>
          <div className="flex gap-4">
            <a href="mailto:hi@dokki.org" className="bg-slate-900 text-white px-8 py-3 rounded-xl text-xs font-black hover:shadow-xl transition-all tracking-widest uppercase">Contact Us</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-48 pb-24 px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-slate-50 text-slate-500 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.3em] mb-10 border border-slate-100">
          <Sparkles size={12} />
          <span>I.T.C Solutions FZE Official</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9]">
          Secure Digital <br />
          <span className="text-slate-400">Environments.</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Architecting high-performance, privacy-first mobile applications.
        </p>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-12 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Dokki AI Card */}
        <div className="group bg-slate-50 p-12 rounded-[3rem] border border-slate-100 hover:border-[#4FA0A0]/30 transition-all duration-500 flex flex-col justify-between h-full">
          <div>
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-slate-100 mb-12 shadow-sm">
               <Image src="/dokki-icon.png" alt="Dokki AI Icon" width={32} height={32} />
            </div>
            <h3 className="text-4xl font-black text-[#004977] mb-4 tracking-tight">Dokki AI</h3>
            <p className="text-slate-500 mb-8">Intelligent document management. Scan, categorize, and extract tax data automatically.</p>
          </div>
          <Link href="/guides/dokki-ai" className="inline-flex items-center gap-2 bg-[#004977] text-white px-6 py-3 rounded-xl text-xs font-bold w-fit hover:bg-[#4FA0A0] transition-all">
            <BookOpen size={14} /> USER GUIDE
          </Link>
        </div>

        {/* DokkiNotes Card */}
        <div className="group bg-[#0c0c0c] p-12 rounded-[3rem] border border-[#222] hover:border-[#b47e23]/30 transition-all duration-500 flex flex-col justify-between h-full">
          <div>
            <div className="w-16 h-16 bg-[#1a1a1a] rounded-2xl flex items-center justify-center border border-[#333] mb-12 shadow-sm">
               <Image src="/dokkinotes-icon.png" alt="DokkiNotes Icon" width={32} height={32} />
            </div>
            <h3 className="text-4xl font-black text-white mb-4 tracking-tight italic">DokkiNotes</h3>
            <p className="text-slate-400 mb-8">Biometric notepad with AI voice processing. Secure your ideas with FaceID.</p>
          </div>
          <Link href="/guides/dokkinotes" className="inline-flex items-center gap-2 bg-[#b47e23] text-white px-6 py-3 rounded-xl text-xs font-bold w-fit hover:bg-white hover:text-black transition-all">
            <BookOpen size={14} /> USER GUIDE
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-100 pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <Image src="/Dokki.logo.png" alt="Dokki" width={120} height={40} className="mb-6" />
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest leading-loose">
                I.T.C Solutions FZE <br />
                License No: 10103 <br />
                Umm Al Quwain, U.A.E
              </p>
            </div>
            <div>
              <h4 className="font-black text-[10px] uppercase tracking-widest mb-6 text-slate-900">Support</h4>
              <ul className="space-y-3">
                <li><Link href="/guides/dokki-ai" className="text-xs text-slate-500 hover:text-[#004977]">Dokki AI Guide</Link></li>
                <li><Link href="/guides/dokkinotes" className="text-xs text-slate-500 hover:text-[#b47e23]">DokkiNotes Guide</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-[10px] uppercase tracking-widest mb-6 text-slate-900">Legal</h4>
              <ul className="space-y-3">
                <li><Link href="/privacy" className="text-xs text-slate-500 hover:text-black">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-xs text-slate-500 hover:text-black">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-50 text-center">
            <p className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-300">© 2026 I.T.C SOLUTIONS FZE</p>
          </div>
        </div>
      </footer>
    </div>
  );
}