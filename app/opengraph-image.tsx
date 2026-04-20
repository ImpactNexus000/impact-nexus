import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Impact Nexus — Building digital solutions that actually matter'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background:
            'radial-gradient(ellipse at 30% 20%, rgba(91,110,245,0.35) 0%, transparent 55%), radial-gradient(ellipse at 80% 90%, rgba(139,92,246,0.25) 0%, transparent 55%), #06070d',
          color: '#f0f1f5',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 18px',
            borderRadius: '999px',
            border: '1px solid rgba(91,110,245,0.4)',
            background: 'rgba(91,110,245,0.12)',
            alignSelf: 'flex-start',
            fontSize: '20px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#818cf8',
            fontWeight: 600,
          }}
        >
          Product-Driven Tech Company
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <div
            style={{
              fontSize: '84px',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-2px',
              maxWidth: '960px',
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            <span>Building digital solutions that&nbsp;</span>
            <span
              style={{
                background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 100%)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              actually matter
            </span>
            <span>.</span>
          </div>
          <div
            style={{
              fontSize: '26px',
              color: '#9ca3af',
              maxWidth: '780px',
            }}
          >
            Healthcare. Fintech. Commerce. Built for the people who need it most.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            fontSize: '28px',
            color: '#f0f1f5',
          }}
        >
          <div style={{ display: 'flex', fontWeight: 700 }}>
            Impact<span style={{ color: '#5b6ef5' }}>Nexus</span>
          </div>
          <div style={{ color: '#6b7280', fontSize: '22px' }}>
            impactnexus.io
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
