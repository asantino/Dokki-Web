import React from 'react';

export default function DokkiNotesGuide() {
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
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div style={{
          fontSize: '48px',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #00BCD4 0%, #00D4DB 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '16px'
        }}>
          DokkiNotes
        </div>
        <p style={{
          fontSize: '18px',
          color: '#9E9E9E',
          fontWeight: '300'
        }}>
          Your notes. Your privacy. No compromises.
        </p>
      </header>

      {/* Introduction */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: '600',
          color: '#FFFFFF',
          marginBottom: '20px'
        }}>
          Welcome to DokkiNotes
        </h2>
        <p style={{
          fontSize: '16px',
          lineHeight: '1.7',
          color: '#B0B0B0',
          marginBottom: '16px'
        }}>
          DokkiNotes is a minimalist note-taking app designed for people who value privacy and simplicity. 
          With AI-powered voice notes, end-to-end encryption, and self-destructing messages, 
          DokkiNotes gives you complete control over your data.
        </p>
        <div style={{
          backgroundColor: '#1A1A1A',
          border: '1px solid #2A2A2A',
          borderRadius: '12px',
          padding: '24px',
          marginTop: '24px'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#00BCD4',
            marginBottom: '16px'
          }}>
            Key Features
          </h3>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            {[
              '🎤 AI-powered voice transcription',
              '⏳ Auto-delete notes after 1 or 24 hours',
              '🔐 End-to-end encryption (your password = your key)',
              '📌 PIN lock for individual notes',
              '☁️ Cloud sync with Google Drive',
              '🏷️ Hashtag organization',
              '🌙 Dark mode support'
            ].map((feature, i) => (
              <li key={i} style={{
                fontSize: '16px',
                color: '#B0B0B0',
                marginBottom: '12px',
                paddingLeft: '8px'
              }}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Getting Started */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: '600',
          color: '#FFFFFF',
          marginBottom: '20px'
        }}>
          Getting Started
        </h2>

        {/* Creating a Note */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#00BCD4',
            marginBottom: '16px'
          }}>
            Creating a Note
          </h3>
          <ol style={{
            paddingLeft: '24px',
            color: '#B0B0B0',
            fontSize: '16px',
            lineHeight: '1.8'
          }}>
            <li style={{ marginBottom: '12px' }}>Tap the <strong style={{ color: '#00BCD4' }}>+ button</strong> at the bottom right</li>
            <li style={{ marginBottom: '12px' }}>Start typing your note or use the <strong style={{ color: '#FFD700' }}>AI microphone</strong> for voice input</li>
            <li style={{ marginBottom: '12px' }}>Add <strong style={{ color: '#00BCD4' }}>#hashtags</strong> to organize your notes</li>
            <li style={{ marginBottom: '12px' }}>Tap the back arrow to save automatically</li>
          </ol>
        </div>

        {/* AI Voice Notes */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#FFD700',
            marginBottom: '16px'
          }}>
            AI Voice Notes
          </h3>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.7',
            color: '#B0B0B0',
            marginBottom: '16px'
          }}>
            DokkiNotes uses AI to transcribe your voice into text and automatically categorize your notes.
          </p>
          <div style={{
            backgroundColor: '#2A1A00',
            border: '1px solid #FFD700',
            borderRadius: '8px',
            padding: '16px',
            marginTop: '16px'
          }}>
            <p style={{
              fontSize: '14px',
              color: '#FFD700',
              margin: 0
            }}>
              <strong>Note:</strong> Each AI request costs 1 token. You must be logged in and have tokens to use this feature.
            </p>
          </div>
        </div>

        {/* Auto-Delete */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#00BCD4',
            marginBottom: '16px'
          }}>
            Auto-Delete Notes
          </h3>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.7',
            color: '#B0B0B0',
            marginBottom: '16px'
          }}>
            Set notes to automatically delete after a specified time for enhanced privacy.
          </p>
          <ol style={{
            paddingLeft: '24px',
            color: '#B0B0B0',
            fontSize: '16px',
            lineHeight: '1.8'
          }}>
            <li style={{ marginBottom: '12px' }}>Open a note</li>
            <li style={{ marginBottom: '12px' }}>Tap the <strong style={{ color: '#00BCD4' }}>clock icon</strong> in the top right</li>
            <li style={{ marginBottom: '12px' }}>Choose <strong>1 hour</strong> or <strong>24 hours</strong></li>
          </ol>
        </div>
      </section>

      {/* Critical Warning */}
      <section style={{ marginBottom: '60px' }}>
        <div style={{
          backgroundColor: '#2A0A0A',
          border: '2px solid #EF5350',
          borderRadius: '12px',
          padding: '32px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '64px', marginBottom: '16px' }}>⚠️</div>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#FFFFFF',
            marginBottom: '16px'
          }}>
            Your Password = Your Encryption Key
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.7',
            color: '#EF5350',
            marginBottom: '20px'
          }}>
            <strong>If you change your password, existing notes will become unreadable.</strong>
          </p>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.7',
            color: '#B0B0B0'
          }}>
            DokkiNotes uses your password as the encryption key. There is no password recovery option.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        paddingTop: '40px',
        borderTop: '1px solid #2A2A2A',
        marginTop: '60px'
      }}>
        <div style={{
          fontSize: '24px',
          fontWeight: '600',
          background: 'linear-gradient(135deg, #00BCD4 0%, #00D4DB 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '12px'
        }}>
          DokkiNotes
        </div>
        <p style={{ fontSize: '12px', color: '#616161', marginTop: '20px' }}>
          © 2026 Dokki. All rights reserved.
        </p>
      </footer>
    </div>
  );
}