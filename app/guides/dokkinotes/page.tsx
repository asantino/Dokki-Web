import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, Mic, Clock, Lock, Cloud, Hash, Moon, 
  Plus, AlertTriangle, ListFilter, Coins, Trash2, Info, 
  Shield, Database, Ban, Search, Fingerprint 
} from 'lucide-react';

export default function DokkiNotesGuide() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E0E0E0] font-sans selection:bg-[#00BCD4]/30 pb-20">
      
      {/* Navigation */}
      <nav className="max-w-4xl mx-auto px-6 pt-12 mb-12">
        <Link href="/" className="inline-flex items-center gap-2 text-[#9E9E9E] hover:text-[#00BCD4] transition-colors text-sm font-bold uppercase tracking-widest">
          <ArrowLeft size={16} /> Back to Ecosystem
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-[#00BCD4] to-[#00D4DB] bg-clip-text text-transparent tracking-tight">
            DokkiNotes
          </h1>
          <p className="text-xl text-[#9E9E9E] font-light">
            Your notes. Your privacy. No compromises.
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6">Welcome to DokkiNotes</h2>
          <p className="text-lg leading-relaxed text-[#B0B0B0] mb-8">
            DokkiNotes is a minimalist note-taking app designed for people who value privacy and simplicity. 
            With AI-powered voice notes, end-to-end encryption, and self-destructing messages, 
            DokkiNotes gives you complete control over your data.
          </p>
          
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8">
            <h3 className="text-xl font-bold text-[#00BCD4] mb-6">Key Features</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[#B0B0B0]"><Mic size={18} className="text-[#00BCD4]" /> AI-powered voice transcription</li>
              <li className="flex items-center gap-3 text-[#B0B0B0]"><Clock size={18} className="text-[#00BCD4]" /> Auto-delete notes after 1 or 24 hours</li>
              <li className="flex items-center gap-3 text-[#B0B0B0]"><Lock size={18} className="text-[#00BCD4]" /> End-to-end encryption (your password = your key)</li>
              <li className="flex items-center gap-3 text-[#B0B0B0]"><Fingerprint size={18} className="text-[#00BCD4]" /> PIN lock for individual notes</li>
              <li className="flex items-center gap-3 text-[#B0B0B0]"><Cloud size={18} className="text-[#00BCD4]" /> Cloud sync with Google Drive</li>
              <li className="flex items-center gap-3 text-[#B0B0B0]"><Hash size={18} className="text-[#00BCD4]" /> Hashtag organization</li>
              <li className="flex items-center gap-3 text-[#B0B0B0]"><Moon size={18} className="text-[#00BCD4]" /> Dark mode support</li>
            </ul>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10 border-b border-[#2A2A2A] pb-4">Getting Started</h2>

          {/* Creating a Note */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#00BCD4] mb-4">Creating a Note</h3>
            <ol className="list-decimal pl-6 space-y-3 text-[#B0B0B0] text-lg">
              <li>Tap the <strong className="text-[#00BCD4]">+ button</strong> at the bottom right</li>
              <li>Start typing your note or use the <strong className="text-[#FFD700]">AI microphone</strong> for voice input</li>
              <li>Add <strong className="text-[#00BCD4]">#hashtags</strong> to organize your notes</li>
              <li>Tap the back arrow to save automatically</li>
            </ol>
          </div>

          {/* AI Voice Notes */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#FFD700] mb-4">AI Voice Notes</h3>
            <p className="text-lg text-[#B0B0B0] mb-6">
              DokkiNotes uses AI to transcribe your voice into text and automatically categorize your notes.
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-[#B0B0B0] text-lg mb-6">
              <li>Tap the <strong className="text-[#FFD700]">gold microphone</strong> icon</li>
              <li>Speak clearly into your device</li>
              <li>AI will transcribe and organize your note automatically</li>
            </ol>
            <div className="bg-[#2A1A00] border border-[#FFD700]/30 rounded-xl p-4">
              <p className="text-sm text-[#FFD700] m-0 flex items-start gap-2">
                <Info size={16} className="shrink-0 mt-0.5" />
                <span><strong>Note:</strong> Each AI request costs 1 token. You must be logged in and have tokens to use this feature.</span>
              </p>
            </div>
          </div>

          {/* Auto-Delete */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#00BCD4] mb-4">Auto-Delete Notes</h3>
            <p className="text-lg text-[#B0B0B0] mb-6">
              Set notes to automatically delete after a specified time for enhanced privacy.
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-[#B0B0B0] text-lg">
              <li>Open a note</li>
              <li>Tap the <strong className="text-[#00BCD4]">clock icon</strong> in the top right</li>
              <li>Choose <strong>1 hour</strong> or <strong>24 hours</strong></li>
              <li>The note will automatically delete when the timer expires</li>
            </ol>
          </div>

          {/* PIN Lock */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#00BCD4] mb-4">PIN Lock for Notes</h3>
            <p className="text-lg text-[#B0B0B0] mb-6">
              Protect sensitive notes with a PIN code or biometric authentication.
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-[#B0B0B0] text-lg">
              <li>Go to <strong className="text-[#00BCD4]">Settings</strong></li>
              <li>Enable the <strong>PIN Lock</strong> toggle</li>
              <li>Set your 4-digit PIN code</li>
              <li>In any note, tap the <strong className="text-[#00BCD4]">lock icon</strong> to protect it</li>
              <li>Locked notes require PIN or biometric auth to view</li>
            </ol>
          </div>

          {/* Cloud Sync */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#00BCD4] mb-4">Cloud Sync (Google Drive)</h3>
            <p className="text-lg text-[#B0B0B0] mb-6">
              Sync your encrypted notes across devices using Google Drive.
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-[#B0B0B0] text-lg mb-6">
              <li>Go to <strong className="text-[#00BCD4]">Settings</strong></li>
              <li>Enable the <strong>Cloud Sync</strong> toggle</li>
              <li>Sign in with your Google account</li>
              <li>Your notes will sync automatically</li>
            </ol>
            <div className="bg-[#1A1A1A] border border-[#00BCD4]/30 rounded-xl p-4">
              <p className="text-sm text-[#00BCD4] m-0 flex items-start gap-2">
                <Shield size={16} className="shrink-0 mt-0.5" />
                <span><strong>Privacy:</strong> Notes are encrypted before uploading. Only you can decrypt them with your password.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Critical Warning */}
        <section className="mb-20">
          <div className="bg-[#1A0505] border-2 border-[#EF5350] rounded-2xl p-8 md:p-12 text-center">
            <AlertTriangle size={64} className="text-[#EF5350] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">
              Your Password = Your Encryption Key
            </h2>
            <p className="text-xl text-[#EF5350] font-bold mb-6">
              If you change your password, existing notes will become unreadable.
            </p>
            <p className="text-lg text-[#B0B0B0] mb-8">
              DokkiNotes uses your password as the encryption key. This means:
            </p>
            <ul className="text-left max-w-lg mx-auto space-y-4 text-[#B0B0B0] text-lg">
              <li className="flex items-start gap-3"><span className="text-[#EF5350] font-bold">•</span> Your notes are encrypted with your password</li>
              <li className="flex items-start gap-3"><span className="text-[#EF5350] font-bold">•</span> Changing your password changes the encryption key</li>
              <li className="flex items-start gap-3"><span className="text-[#EF5350] font-bold">•</span> Old notes encrypted with the old password cannot be decrypted</li>
              <li className="flex items-start gap-3"><span className="text-[#EF5350] font-bold">•</span> There is no password recovery option</li>
            </ul>
          </div>
        </section>

        {/* Settings Overview */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10 border-b border-[#2A2A2A] pb-4">Settings Overview</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-[#00BCD4] mb-3 flex items-center gap-2"><Moon size={20} /> Theme</h3>
              <p className="text-[#B0B0B0]">Switch between Dark and Light mode</p>
            </div>
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-[#00BCD4] mb-3 flex items-center gap-2"><ListFilter size={20} /> Sort</h3>
              <p className="text-[#B0B0B0]">Sort notes by date (newest first) or alphabetically (A-Z)</p>
            </div>
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-[#FFD700] mb-3 flex items-center gap-2"><Coins size={20} /> Token Balance</h3>
              <p className="text-[#B0B0B0]">View your AI token balance and purchase more tokens</p>
            </div>
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-[#EF5350] mb-3 flex items-center gap-2"><Trash2 size={20} /> Trash</h3>
              <p className="text-[#B0B0B0]">View and restore deleted notes (notes are permanently deleted after 30 days)</p>
            </div>
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 md:col-span-2">
              <h3 className="text-xl font-bold text-[#00BCD4] mb-3 flex items-center gap-2"><Info size={20} /> About</h3>
              <p className="text-[#B0B0B0]">Learn more about DokkiNotes and view app information</p>
            </div>
          </div>
        </section>

        {/* Privacy & Security */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6 border-b border-[#2A2A2A] pb-4">Privacy & Security</h2>
          <p className="text-lg text-[#B0B0B0] mb-8">DokkiNotes is built with privacy as the foundation:</p>
          <div className="space-y-4">
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 flex gap-6 items-start">
              <Lock className="text-[#00BCD4] shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-[#00BCD4] mb-2">End-to-End Encryption</h3>
                <p className="text-[#B0B0B0]">All notes are encrypted with AES encryption using your password as the key</p>
              </div>
            </div>
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 flex gap-6 items-start">
              <Cloud className="text-[#00BCD4] shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-[#00BCD4] mb-2">Encrypted Cloud Storage</h3>
                <p className="text-[#B0B0B0]">Notes synced to Google Drive are encrypted before upload</p>
              </div>
            </div>
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 flex gap-6 items-start">
              <Database className="text-[#00BCD4] shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-[#00BCD4] mb-2">Local Storage</h3>
                <p className="text-[#B0B0B0]">Notes are stored locally on your device in an encrypted SQLite database</p>
              </div>
            </div>
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 flex gap-6 items-start">
              <Ban className="text-[#00BCD4] shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-[#00BCD4] mb-2">No Analytics</h3>
                <p className="text-[#B0B0B0]">We don't track your activity or collect personal data</p>
              </div>
            </div>
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 flex gap-6 items-start">
              <Clock className="text-[#00BCD4] shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-[#00BCD4] mb-2">Self-Destruct</h3>
                <p className="text-[#B0B0B0]">Auto-delete feature ensures sensitive notes are permanently removed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tips & Tricks */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6 border-b border-[#2A2A2A] pb-4">Tips & Tricks</h2>
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8">
            <ul className="space-y-4 text-[#B0B0B0] text-lg">
              <li className="flex items-start gap-3"><span className="text-[#00BCD4] font-bold">•</span> Swipe left on a note to delete it</li>
              <li className="flex items-start gap-3"><span className="text-[#00BCD4] font-bold">•</span> Use #hashtags to organize notes into categories</li>
              <li className="flex items-start gap-3"><span className="text-[#00BCD4] font-bold">•</span> Tap the filter icon to view notes by hashtag</li>
              <li className="flex items-start gap-3"><span className="text-[#00BCD4] font-bold">•</span> Long press the AI microphone for quick voice notes</li>
              <li className="flex items-start gap-3"><span className="text-[#00BCD4] font-bold">•</span> Use the search bar to find notes by title or content</li>
              <li className="flex items-start gap-3"><span className="text-[#00BCD4] font-bold">•</span> Enable biometric authentication for faster PIN unlock</li>
              <li className="flex items-start gap-3"><span className="text-[#00BCD4] font-bold">•</span> Check your token balance before using AI features</li>
            </ul>
          </div>
        </section>

        {/* Support */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6 border-b border-[#2A2A2A] pb-4">Need Help?</h2>
          <p className="text-lg text-[#B0B0B0] mb-8">If you have questions or need assistance:</p>
          <div className="bg-[#1A1A1A] border border-[#00BCD4]/30 rounded-2xl p-10 text-center">
            <p className="text-[#B0B0B0] text-lg mb-6">Visit our website for more information:</p>
            <a 
              href="https://www.dokki.org" 
              className="inline-block px-8 py-4 border-2 border-[#00BCD4] text-[#00BCD4] font-bold text-lg rounded-xl hover:bg-[#00BCD4] hover:text-[#0A0A0A] transition-all"
            >
              dokki.org →
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-10 border-t border-[#2A2A2A]">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#00BCD4] to-[#00D4DB] bg-clip-text text-transparent mb-4">
            DokkiNotes
          </div>
          <p className="text-[#757575] mb-6">Your notes. Your privacy. No compromises.</p>
          <p className="text-[#616161] text-sm">© 2026 Dokki. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}