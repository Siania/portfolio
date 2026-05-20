import { useState } from 'react';

/**
 * TikTok embeds often fail in-page: third-party cookies, ITP, ad blockers, IDE browsers, etc.
 * The short link in a new tab always works. Optional iframe uses the official player.
 */
export default function TikTokVideoEmbed({ videoId, pageUrl, title = 'TikTok video' }) {
  const [showPlayer, setShowPlayer] = useState(false);
  if (!videoId || !pageUrl) return null;

  const playerSrc = `https://www.tiktok.com/player/v1/${encodeURIComponent(videoId)}`;

  return (
    <div
      style={{
        maxWidth: 400,
        margin: '0 auto',
        width: '100%',
        borderRadius: 12,
        overflow: 'hidden',
        border: '1px solid var(--glass-border)',
        boxShadow: '0 8px 32px var(--glass-shadow-dark)',
        background: 'var(--glass-deep-bg)',
      }}
    >
      <div style={{ padding: 20, textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)', margin: '0 0 12px', lineHeight: 1.5 }}>
          In-site TikTok players are often blank (blocked by privacy tools). Open the post directly — that always works.
        </p>
        <a
          href={pageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="glass pill"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            padding: '14px 24px',
            fontSize: 15,
            fontWeight: 600,
            textDecoration: 'none',
            color: 'var(--text-primary)',
            border: '1px solid color-mix(in srgb, var(--accent-marketing) 45%, transparent)',
            boxShadow: '0 0 24px color-mix(in srgb, var(--accent-marketing) 12%, transparent)',
          }}
        >
          Watch on TikTok (opens in new tab)
        </a>
        <button
          type="button"
          onClick={() => setShowPlayer((s) => !s)}
          style={{
            display: 'block',
            width: '100%',
            marginTop: 16,
            padding: 10,
            background: 'transparent',
            border: '1px solid var(--glass-border-muted)',
            borderRadius: 8,
            color: 'var(--text-muted)',
            fontSize: 12,
            cursor: 'pointer',
            font: 'inherit',
          }}
        >
          {showPlayer ? 'Hide embedded player' : 'Try embedded player (optional)'}
        </button>
      </div>
      {showPlayer && (
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: 400,
            margin: '0 auto',
            borderTop: '1px solid var(--glass-border)',
            aspectRatio: '9/16',
            maxHeight: 'min(80vh, 700px)',
          }}
        >
          <iframe
            title={title}
            src={playerSrc}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        </div>
      )}
    </div>
  );
}
