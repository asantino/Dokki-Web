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
            <li style={{ marginBottom: '12px' }}>
              Tap the <strong style={{ color: '#00BCD4' }}>+ button</strong> at the bottom right
            </li>
            <li style={{ marginBottom: '12px' }}>
              Start typing your note or use the <strong style={{ color: '#FFD700' }}>AI microphone</strong> for voice input
            </li>
            <li style={{ marginBottom: '12px' }}>
              Add <strong style={{ color: '#00BCD4' }}>#hashtags</strong> to organize your notes
            </li>
            <li style={{ marginBottom: '12px' }}>
              Tap the back arrow to save automatically
            </li>
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
          <ol style={{
            paddingLeft: '24px',
            color: '#B0B0B0',
            fontSize: '16px',
            lineHeight: '1.8'
          }}>
            <li style={{ marginBottom: '12px' }}>
              Tap the <strong style={{ color: '#FFD700' }}>gold microphone</strong> icon
            </li>
            <li style={{ marginBottom: '12px' }}>
              Speak clearly into your device
            </li>
            <li style={{ marginBottom: '12px' }}>
              AI will transcribe and organize your note automatically
            </li>
          </ol>
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
            <li style={{ marginBottom: '12px' }}>
              Open a note
            </li>
            <li style={{ marginBottom: '12px' }}>
              Tap the <strong style={{ color: '#00BCD4' }}>clock icon</strong> in the top right
            </li>
            <li style={{ marginBottom: '12px' }}>
              Choose <strong>1 hour</strong> or <strong>24 hours</strong>
            </li>
            <li style={{ marginBottom: '12px' }}>
              The note will automatically delete when the timer expires
            </li>
          </ol>
        </div>

        {/* PIN Lock */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#00BCD4',
            marginBottom: '16px'
          }}>
            PIN Lock for Notes
          </h3>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.7',
            color: '#B0B0B0',
            marginBottom: '16px'
          }}>
            Protect sensitive notes with a PIN code or biometric authentication.
          </p>
          <ol style={{
            paddingLeft: '24px',
            color: '#B0B0B0',
            fontSize: '16px',
            lineHeight: '1.8'
          }}>
            <li style={{ marginBottom: '12px' }}>
              Go to <strong style={{ color: '#00BCD4' }}>Settings</strong>
            </li>
            <li style={{ marginBottom: '12px' }}>
              Enable the <strong>PIN Lock</strong> toggle
            </li>
            <li style={{ marginBottom: '12px' }}>
              Set your 4-digit PIN code
            </li>
            <li style={{ marginBottom: '12px' }}>
              In any note, tap the <strong style={{ color: '#00BCD4' }}>lock icon</strong> to protect it
            </li>
            <li style={{ marginBottom: '12px' }}>
              Locked notes require PIN or biometric auth to view
            </li>
          </ol>
        </div>

        {/* Cloud Sync */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#00BCD4',
            marginBottom: '16px'
          }}>
            Cloud Sync (Google Drive)
          </h3>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.7',
            color: '#B0B0B0',
            marginBottom: '16px'
          }}>
            Sync your encrypted notes across devices using Google Drive.
          </p>
          <ol style={{
            paddingLeft: '24px',
            color: '#B0B0B0',
            fontSize: '16px',
            lineHeight: '1.8'
          }}>
            <li style={{ marginBottom: '12px' }}>
              Go to <strong style={{ color: '#00BCD4' }}>Settings</strong>
            </li>
            <li style={{ marginBottom: '12px' }}>
              Enable the <strong>Cloud Sync</strong> toggle
            </li>
            <li style={{ marginBottom: '12px' }}>
              Sign in with your Google account
            </li>
            <li style={{ marginBottom: '12px' }}>
              Your notes will sync automatically
            </li>
          </ol>
          <div style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #00BCD4',
            borderRadius: '8px',
            padding: '16px',
            marginTop: '16px'
          }}>
            <p style={{
              fontSize: '14px',
              color: '#00BCD4',
              margin: 0
            }}>
              <strong>Privacy:</strong> Notes are encrypted before uploading. Only you can decrypt them with your password.
            </p>
          </div>
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
            DokkiNotes uses your password as the encryption key. This means:
          </p>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: '20px 0 0 0',
            textAlign: 'left',
            maxWidth: '500px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            <li style={{
              fontSize: '16px',
              color: '#B0B0B0',
              marginBottom: '12px',
              paddingLeft: '24px',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                color: '#EF5350'
              }}>•</span>
              Your notes are encrypted with your password
            </li>
            <li style={{
              fontSize: '16px',
              color: '#B0B0B0',
              marginBottom: '12px',
              paddingLeft: '24px',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                color: '#EF5350'
              }}>•</span>
              Changing your password changes the encryption key
            </li>
            <li style={{
              fontSize: '16px',
              color: '#B0B0B0',
              marginBottom: '12px',
              paddingLeft: '24px',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                color: '#EF5350'
              }}>•</span>
              Old notes encrypted with the old password cannot be decrypted
            </li>
            <li style={{
              fontSize: '16px',
              color: '#B0B0B0',
              paddingLeft: '24px',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                color: '#EF5350'
              }}>•</span>
              There is no password recovery option
            </li>
          </ul>
        </div>
      </section>

      {/* Settings Overview */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: '600',
          color: '#FFFFFF',
          marginBottom: '20px'
        }}>
          Settings Overview
        </h2>

        <div style={{
          display: 'grid',
          gap: '20px'
        }}>
          {/* Theme */}
          <div style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #2A2A2A',
            borderRadius: '12px',
            padding: '20px'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#00BCD4',
              marginBottom: '12px'
            }}>
              🌙 Theme
            </h3>
            <p style={{
              fontSize: '15px',
              color: '#B0B0B0',
              margin: 0
            }}>
              Switch between Dark and Light mode
            </p>
          </div>

          {/* Sort */}
          <div style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #2A2A2A',
            borderRadius: '12px',
            padding: '20px'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#00BCD4',
              marginBottom: '12px'
            }}>
              📊 Sort
            </h3>
            <p style={{
              fontSize: '15px',
              color: '#B0B0B0',
              margin: 0
            }}>
              Sort notes by date (newest first) or alphabetically (A-Z)
            </p>
          </div>

          {/* Tokens */}
          <div style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #2A2A2A',
            borderRadius: '12px',
            padding: '20px'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#FFD700',
              marginBottom: '12px'
            }}>
              💰 Token Balance
            </h3>
            <p style={{
              fontSize: '15px',
              color: '#B0B0B0',
              margin: 0
            }}>
              View your AI token balance and purchase more tokens
            </p>
          </div>

          {/* Trash */}
          <div style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #2A2A2A',
            borderRadius: '12px',
            padding: '20px'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#EF5350',
              marginBottom: '12px'
            }}>
              🗑️ Trash
            </h3>
            <p style={{
              fontSize: '15px',
              color: '#B0B0B0',
              margin: 0
            }}>
              View and restore deleted notes (notes are permanently deleted after 30 days)
            </p>
          </div>

          {/* About */}
          <div style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #2A2A2A',
            borderRadius: '12px',
            padding: '20px'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#00BCD4',
              marginBottom: '12px'
            }}>
              ℹ️ About
            </h3>
            <p style={{
              fontSize: '15px',
              color: '#B0B0B0',
              margin: 0
            }}>
              Learn more about DokkiNotes and view app information
            </p>
          </div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: '600',
          color: '#FFFFFF',
          marginBottom: '20px'
        }}>
          Privacy & Security
        </h2>
        <p style={{
          fontSize: '16px',
          lineHeight: '1.7',
          color: '#B0B0B0',
          marginBottom: '20px'
        }}>
          DokkiNotes is built with privacy as the foundation:
        </p>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          {[
            {
              icon: '🔐',
              title: 'End-to-End Encryption',
              desc: 'All notes are encrypted with AES encryption using your password as the key'
            },
            {
              icon: '☁️',
              title: 'Encrypted Cloud Storage',
              desc: 'Notes synced to Google Drive are encrypted before upload'
            },
            {
              icon: '🔒',
              title: 'Local Storage',
              desc: 'Notes are stored locally on your device in an encrypted SQLite database'
            },
            {
              icon: '🚫',
              title: 'No Analytics',
              desc: 'We don\'t track your activity or collect personal data'
            },
            {
              icon: '⏳',
              title: 'Self-Destruct',
              desc: 'Auto-delete feature ensures sensitive notes are permanently removed'
            }
          ].map((item, i) => (
            <li key={i} style={{
              backgroundColor: '#1A1A1A',
              border: '1px solid #2A2A2A',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '16px'
            }}>
              <div style={{
                fontSize: '32px',
                marginBottom: '12px'
              }}>
                {item.icon}
              </div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#00BCD4',
                marginBottom: '8px'
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: '15px',
                color: '#B0B0B0',
                margin: 0
              }}>
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Tips & Tricks */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: '600',
          color: '#FFFFFF',
          marginBottom: '20px'
        }}>
          Tips & Tricks
        </h2>
        <div style={{
          backgroundColor: '#1A1A1A',
          border: '1px solid #2A2A2A',
          borderRadius: '12px',
          padding: '24px'
        }}>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            {[
              'Swipe left on a note to delete it',
              'Use #hashtags to organize notes into categories',
              'Tap the filter icon to view notes by hashtag',
              'Long press the AI microphone for quick voice notes',
              'Use the search bar to find notes by title or content',
              'Enable biometric authentication for faster PIN unlock',
              'Check your token balance before using AI features'
            ].map((tip, i) => (
              <li key={i} style={{
                fontSize: '16px',
                color: '#B0B0B0',
                marginBottom: '16px',
                paddingLeft: '32px',
                position: 'relative'
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: '#00BCD4',
                  fontSize: '20px'
                }}>
                  •
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Support */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: '600',
          color: '#FFFFFF',
          marginBottom: '20px'
        }}>
          Need Help?
        </h2>
        <p style={{
          fontSize: '16px',
          lineHeight: '1.7',
          color: '#B0B0B0',
          marginBottom: '20px'
        }}>
          If you have questions or need assistance:
        </p>
        <div style={{
          backgroundColor: '#1A1A1A',
          border: '1px solid #00BCD4',
          borderRadius: '12px',
          padding: '24px',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '16px',
            color: '#B0B0B0',
            marginBottom: '16px'
          }}>
            Visit our website for more information:
          </p>
          <a
            href="https://www.dokki.org"
            style={{
              display: 'inline-block',
              fontSize: '18px',
              fontWeight: '600',
              color: '#00BCD4',
              textDecoration: 'none',
              padding: '12px 24px',
              border: '2px solid #00BCD4',
              borderRadius: '8px',
              transition: 'all 0.3s'
            }}
          >
            dokki.org →
          </a>
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
        <p style={{
          fontSize: '14px',
          color: '#757575',
          margin: 0
        }}>
          Your notes. Your privacy. No compromises.
        </p>
        <p style={{
          fontSize: '12px',
          color: '#616161',
          marginTop: '20px'
        }}>
          © 2026 Dokki. All rights reserved.
        </p>
      </footer>
    </div>
  );
}