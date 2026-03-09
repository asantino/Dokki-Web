import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

export default function DokkiNotesOfficialGuide() {
  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      backgroundColor: '#0A0A0A',
      color: '#E0E0E0',
      minHeight: '100vh'
    }}>
      <header style={{ marginBottom: '40px' }}>
        <Link href="/" style={{ color: '#9E9E9E', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
          <ArrowLeft size={16} /> Back to Hub
        </Link>
      </header>

      <section style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div style={{
          fontSize: '48px',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #FFD700 0%, #b47e23 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '16px'
        }}>
          DokkiNotes Official Guide
        </div>
        <p style={{ fontSize: '18px', color: '#9E9E9E' }}>Your notes. Your privacy. No compromises.</p>
      </section>

      {/* КРИТИЧЕСКОЕ ПРЕДУПРЕЖДЕНИЕ ИЗ ТВОЕГО ГАЙДА */}
      <section style={{ 
        backgroundColor: '#2A0A0A', 
        border: '2px solid #EF5350', 
        borderRadius: '16px', 
        padding: '32px', 
        marginBottom: '60px' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', color: '#EF5350' }}>
          <ShieldAlert size={32} />
          <h2 style={{ margin: 0, fontSize: '24px', fontWeight: '700' }}>CRITICAL: Password & Encryption</h2>
        </div>
        <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#FFFFFF', marginBottom: '16px' }}>
          <strong>Your Password = Your Encryption Key.</strong>
        </p>
        <p style={{ color: '#B0B0B0', lineHeight: '1.6' }}>
          If you change your password, existing notes will become unreadable. There is no password recovery option because we do not store your keys.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#FFD700', fontSize: '24px', marginBottom: '20px' }}>Key Features</h3>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
          <li>🎤 AI-powered voice transcription</li>
          <li>⏳ Auto-delete notes after 1 or 24 hours</li>
          <li>🔐 End-to-end encryption</li>
          <li>📌 PIN lock for individual notes</li>
        </ul>
      </section>

      <footer style={{ marginTop: '80px', paddingTop: '20px', borderTop: '1px solid #2A2A2A', textAlign: 'center', color: '#616161', fontSize: '12px' }}>
        © 2026 I.T.C Solutions FZE. All rights reserved.
      </footer>
    </div>
  );
}