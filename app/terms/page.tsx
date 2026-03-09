import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function EcosystemHub() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-100">
      
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 z-50">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/" className="relative w-48 h-14 block">
            <Image src="/Dokki.logo.png" alt="Dokki Logo" fill className="object-contain object-left" priority />
          </Link>
          <div className="flex gap-4">
            <a href="mailto:hi@dokki.org" className="bg-slate-900 text-white px-8 py-3 rounded-xl text-xs font-black hover:shadow-xl transition-all tracking-widest">CONTACT</a>
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
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Dokki AI Card */}
        <div className="group block bg-slate-50 p-12 rounded-[3rem] border border-slate-100 hover:border-[#4FA0A0]/30 transition-all duration-500">
          <Link href="/dokki-ai">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-slate-100 mb-12 shadow-sm">
               <Image src="/dokki-icon.png" alt="Dokki AI Icon" width={32} height={32} />
            </div>
            <h3 className="text-4xl font-black text-[#004977] mb-4 tracking-tight">Dokki AI</h3>
            <p className="text-slate-500 mb-10 h-20">Intelligent document management. Scan, categorize, and extract tax data automatically.</p>
          </Link>
          <Link href="/guides/dokki-ai" className="inline-flex items-center text-xs font-bold text-[#4FA0A0] hover:underline">
            View User Guide <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>

        {/* DokkiNotes Card */}
        <div className="group block bg-[#0c0c0c] p-12 rounded-[3rem] border border-[#222] hover:border-[#b47e23]/30 transition-all duration-500">
          <Link href="/dokkinotes">
            <div className="w-16 h-16 bg-[#1a1a1a] rounded-2xl flex items-center justify-center border border-[#333] mb-12 shadow-sm">
               <Image src="/dokkinotes-icon.png" alt="DokkiNotes Icon" width={32} height={32} />
            </div>
            <h3 className="text-4xl font-black text-white mb-4 tracking-tight italic">DokkiNotes</h3>
            <p className="text-slate-400 mb-10 h-20">Biometric notepad with AI voice processing. Secure your ideas with FaceID.</p>
          </Link>
          <Link href="/guides/dokkinotes" className="inline-flex items-center text-xs font-bold text-[#b47e23] hover:underline">
            View User Guide <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
      </section>

      <footer className="bg-white border-t border-slate-100 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <Image src="/Dokki.logo.png" alt="Dokki" width={120} height={40} className="mb-6" />
              <p className="text-slate-400 text-sm max-w-xs">Secure digital environments for your paperwork and private thoughts.</p>
            </div>
            <div>
              <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-6 text-slate-900">Support</h4>
              <ul className="space-y-4">
                <li><Link href="/guides/dokki-ai" className="text-sm text-slate-500 hover:text-[#004977]">Dokki AI Guide</Link></li>
                <li><Link href="/guides/dokkinotes" className="text-sm text-slate-500 hover:text-[#b47e23]">DokkiNotes Guide</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-6 text-slate-900">Legal</h4>
              <ul className="space-y-4">
                <li><Link href="/privacy" className="text-sm text-slate-500 hover:text-black">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-sm text-slate-500 hover:text-black">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 text-center">© 2026 I.T.C Solutions FZE</p>
        </div>
      </footer>
    </div>
  );
}