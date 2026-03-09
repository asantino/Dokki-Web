import React from 'react';
import { 
  FileText, 
  Calculator, 
  ShieldCheck, 
  Search, 
  BrainCircuit, 
  Download,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Globe
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      
      {/* --- HEADER --- */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-2xl text-blue-600 tracking-tight">
            <div className="bg-blue-600 text-white p-1 rounded-lg shadow-sm">
              <FileText size={20} />
            </div>
            Dokki
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-blue-600 transition">Features</a>
            <a href="#about" className="hover:text-blue-600 transition">About Us</a>
            <a href="#security" className="hover:text-blue-600 transition">Security</a>
          </nav>
          <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition">
            Sign In
          </button>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-6 border border-blue-100 shadow-sm">
            <BrainCircuit size={14} />
            <span>POWERED BY AI & MODERN TECH</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Your Personal <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              AI Archivist
            </span>
          </h1>
          <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
            Dokki is an intelligent document management ecosystem designed by I.T.C Solutions FZE. 
            Scan, sort, and manage your documents with advanced AI categorization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
              <Download size={20} /> App Store
            </button>
            <button className="flex items-center gap-2 bg-white text-slate-700 border border-slate-300 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition">
              Google Play
            </button>
          </div>
        </div>
      </section>

      {/* --- FEATURES --- */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition">
            <FileText className="text-blue-600 mb-6" size={32} />
            <h3 className="text-xl font-bold mb-3">Smart Scan</h3>
            <p className="text-slate-500">Instant AI-powered recognition and categorization of receipts, contracts, and IDs.</p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition">
            <Calculator className="text-indigo-600 mb-6" size={32} />
            <h3 className="text-xl font-bold mb-3">Tax Helper</h3>
            <p className="text-slate-500">Automated financial tracking and tax estimation for individuals and freelancers.</p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-violet-200 transition">
            <Search className="text-violet-600 mb-6" size={32} />
            <h3 className="text-xl font-bold mb-3">Neural Search</h3>
            <p className="text-slate-500">Find any document by its content using natural language AI search.</p>
          </div>
        </div>
      </section>

      {/* --- ABOUT US (LEGAL COMPLIANCE) --- */}
      <section id="about" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Developed by I.T.C Solutions FZE</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Dokki is a flagship project by <span className="font-bold text-slate-900">I.T.C Solutions FZE</span>. 
            In line with our license for <span className="italic">Social Media Applications Development & Management</span>, 
            we develop advanced mobile tools that simplify digital life for users worldwide.
          </p>
        </div>
      </section>

      {/* --- FOOTER (VERIFICATION REQUIREMENTS) --- */}
      <footer className="bg-white pt-20 pb-10 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 font-bold text-2xl text-slate-900 mb-4">
                <div className="bg-slate-900 text-white p-1 rounded-lg"><FileText size={18} /></div>
                Dokki
              </div>
              <p className="text-slate-500 max-w-sm mb-4">
                Revolutionizing document management through AI. Owned and operated by I.T.C Solutions FZE.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Legal Information</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>
                  <span className="block font-semibold text-slate-900 text-xs uppercase tracking-wider">Company</span>
                  I.T.C Solutions FZE
                </li>
                <li>
                  <span className="block font-semibold text-slate-900 text-xs uppercase tracking-wider">License No.</span>
                  10103 (Service License)
                </li>
                <li>
                  <span className="block font-semibold text-slate-900 text-xs uppercase tracking-wider">Activity</span>
                  Social Media Applications Development & Management
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Contact & Address</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-blue-600 shrink-0" />
                  <span>Al Shmookh Business Center, One UAQ, UAQ Free Trade Zone, Umm Al Quwain, U.A.E.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-blue-600" />
                  <span>hi@dokki.org</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-blue-600" />
                  <span>+971 58 884 1172</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">
              Managed by Alexandr Pak | © 2026 I.T.C Solutions FZE
            </div>
            <div className="flex gap-6 text-xs font-semibold text-slate-600">
              <a href="/privacy" className="hover:text-blue-600 transition">Privacy Policy</a>
              <a href="/terms" className="hover:text-blue-600 transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}