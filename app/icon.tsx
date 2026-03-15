import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{
        width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#00356b', borderRadius: 6,
      }}>
        <span style={{ color: '#ffffff', fontSize: 19, fontWeight: 800, fontFamily: 'sans-serif' }}>S</span>
      </div>
    ),
    { ...size }
  )
}
