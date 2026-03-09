import React from 'react';
import Link from 'next/link';
import { FileText, Scan, Lock, ArrowRight } from 'lucide-react';

export default function DokkiHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-2xl text-blue-600">
            <FileText size={24} />
            Dokki Ecosystem
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="#products" className="hover:text-blue-600 transition">Products</a>
            <a href="#about" className="hover:text-blue-600 transition">About</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
            Welcome to Dokki
          </h1>
          <p className="text-xl text-slate-600 mb-4 max-w-2xl mx-auto">
            An intelligent document management ecosystem by I.T.C Solutions FZE
          </p>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Choose your solution below
          </p>
        </div>
      </section>

      {/* Product Cards */}
      <section id="products" className="py-12 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          
          {/* Dokki AI Card */}
          <Link href="/dokki-ai" className="group block">
            <div className="h-full bg-white rounded-3xl p-8 border-2 border-slate-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 text-white p-3 rounded-2xl">
                  <Scan size={28} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Dokki AI</h2>
              </div>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                AI-powered document scanner for receipts, contracts, and IDs. Smart categorization and neural search.
              </p>
              <ul className="space-y-3 mb-8 text-slate-700">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  Smart OCR & Categorization
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  Tax Helper Integration
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  Neural Search Engine
                </li>
              </ul>
              <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all">
                Learn More <ArrowRight size={20} />
              </div>
            </div>
          </Link>

          {/* DokkiNotes Card */}
          <Link href="/dokkinotes" className="group block">
            <div className="h-full bg-white rounded-3xl p-8 border-2 border-slate-200 hover:border-indigo-400 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-600 text-white p-3 rounded-2xl">
                  <Lock size={28} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">DokkiNotes</h2>
              </div>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                Private, encrypted note-taking app with zero-knowledge architecture. Your thoughts, fully protected.
              </p>
              <ul className="space-y-3 mb-8 text-slate-700">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                  End-to-End Encryption
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                  Zero-Knowledge Storage
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                  Private by Design
                </li>
              </ul>
              <div className="flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-4 transition-all">
                Learn More <ArrowRight size={20} />
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-slate-900">Developed by I.T.C Solutions FZE</h3>
          <p className="text-slate-600 leading-relaxed">
            Dokki is a flagship project by <span className="font-semibold">I.T.C Solutions FZE</span>, 
            licensed for Social Media Applications Development & Management. 
            We build intelligent tools that simplify digital life.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <FileText size={20} />
                Dokki
              </div>
              <p className="text-slate-400 text-sm">
                Intelligent document management ecosystem
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <p className="text-sm text-slate-400">I.T.C Solutions FZE</p>
              <p className="text-sm text-slate-400">License No. 10103</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <p className="text-sm text-slate-400">hi@dokki.org</p>
              <p className="text-sm text-slate-400">+971 58 884 1172</p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <div>© 2026 I.T.C Solutions FZE</div>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition">Terms</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
