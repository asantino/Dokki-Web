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
        <div className="text-[10px] font-black uppercase text-white/10 tracking-widest">Private Vault</div>
      </header>

      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-6xl font-black text-white mb-8 tracking-tighter leading-none">Your Private <br/><span className="text-[#b47e23]">Brain.</span></h1>
          <p className="text-xl text-white/40 mb-10 leading-relaxed max-w-lg">
            Encrypted notepad with AI voice summarization. Your data stays on your device.
          </p>
          <button className="bg-[#b47e23] text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-xl shadow-[#b47e23]/20">
            Secure Access
          </button>
        </div>
        <div className="relative h-[600px] flex justify-center">
           <div className="relative w-[280px] h-full rounded-[3rem] shadow-2xl border-[8px] border-[#222] overflow-hidden">
              {/* Исправлено: используем золотой скриншот для золотого приложения */}
              <Image src="/ds-screenshot3.png" alt="DokkiNotes Dashboard" fill className="object-cover" />
           </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="flex justify-center order-2 md:order-1">
             <Image src="/ds-screenshot4.png" alt="DokkiNotes Features" width={250} height={540} className="rounded-[2.5rem] shadow-2xl border-4 border-[#222]" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-black mb-6 tracking-tight">Ephemeral Protection</h2>
            <p className="text-lg text-white/40 mb-10 leading-relaxed">Set 1h or 24h self-destruct timers for sensitive notes.</p>
            <div className="flex gap-6 items-center p-6 bg-white/5 rounded-3xl border border-white/10">
               <Fingerprint className="text-[#b47e23]" size={32} />
               <div>
                  <h4 className="font-bold text-[#b47e23]">FaceID Security</h4>
                  <p className="text-xs text-white/30">Protect individual thoughts with biometric lock.</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}