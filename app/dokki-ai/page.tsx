import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Download } from 'lucide-react';

export default function DokkiAIDeepDive() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 z-50 px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-[#004977] transition-all">
          <ArrowLeft size={16} /> Ecosystem
        </Link>
        <div className="flex items-center gap-3">
          <Image src="/dokki-icon.png" alt="Icon" width={24} height={24} />
          <span className="font-black text-[#004977]">Dokki AI</span>
        </div>
        <div className="text-[10px] font-black uppercase text-slate-300 tracking-widest">Digital Archivist</div>
      </header>

      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-6xl font-black text-[#004977] mb-8 leading-none tracking-tighter">Digitize Your <br/><span className="text-[#4FA0A0]">Paperwork.</span></h1>
          <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-lg">
            Smart scanning for Receipts, Medical records, and Legal documents. Neural analysis extracts data instantly.
          </p>
          <button className="bg-[#004977] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-[#4FA0A0] transition-all shadow-xl shadow-blue-900/10">
            <Download size={18} /> Get App
          </button>
        </div>
        <div className="relative h-[600px] flex justify-center">
           <div className="relative w-[280px] h-full rounded-[3rem] shadow-2xl border-[8px] border-slate-900 overflow-hidden">
              <Image src="/ds-screenshot3.png" alt="Dashboard" fill className="object-cover" />
           </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#004977] mb-4">Localized Intelligence</h2>
            <p className="text-slate-500">Full support for English, Arabic (RTL), and Russian.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="flex flex-col items-center gap-6 p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
                <Image src="/ds-screenshot1.png" alt="EN" width={200} height={430} className="rounded-3xl shadow-lg" />
                <span className="font-black text-xs uppercase text-slate-400 tracking-widest">English</span>
             </div>
             <div className="flex flex-col items-center gap-6 p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
                <Image src="/ds-screenshot2.png" alt="AR" width={200} height={430} className="rounded-3xl shadow-lg" />
                <span className="font-black text-xs uppercase text-slate-400 tracking-widest">Arabic</span>
             </div>
             <div className="flex flex-col items-center gap-6 p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
                <Image src="/ds-screenshot4.png" alt="RU" width={200} height={430} className="rounded-3xl shadow-lg" />
                <span className="font-black text-xs uppercase text-slate-400 tracking-widest">Russian</span>
             </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 text-center text-[10px] font-black uppercase tracking-widest text-slate-300">
        I.T.C Solutions FZE • Trade License 10103
      </footer>
    </div>
  );
}