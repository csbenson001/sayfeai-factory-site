import { ImageResponse } from 'next/og'

export const alt = 'SayfeAI Factory — Enterprise AI, Engineered Safely'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div style={{
        width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        background: '#ffffff', fontFamily: 'sans-serif',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          backgroundImage: 'radial-gradient(circle, #e2e8f0 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.5,
        }} />
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 4,
          background: '#00356b',
        }} />
        <div style={{
          fontSize: 64, fontWeight: 800, letterSpacing: '0.02em',
          color: '#00356b', zIndex: 1,
        }}>
          SAYFEAI FACTORY
        </div>
        <div style={{
          fontSize: 26, color: '#4a5568', marginTop: 16, zIndex: 1, fontWeight: 400,
        }}>
          Enterprise AI, Engineered Safely
        </div>
        <div style={{
          position: 'absolute', bottom: 40, fontSize: 16, color: '#718096', zIndex: 1,
        }}>
          sayfe.ai
        </div>
      </div>
    ),
    { ...size }
  )
}
