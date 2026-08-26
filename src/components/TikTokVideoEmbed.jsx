/**
 * Official TikTok player, embedded directly. Privacy tools that block third-party
 * frames will leave it empty — that is the tradeoff for showing the video in place.
 */
export default function TikTokVideoEmbed({ videoId, title = 'TikTok video' }) {
  if (!videoId) return null;

  const playerSrc = `https://www.tiktok.com/player/v1/${encodeURIComponent(videoId)}`;

  return (
    <div
      style={{
        position: 'relative',
        maxWidth: 400,
        margin: '0 auto',
        width: '100%',
        aspectRatio: '9/16',
        maxHeight: 'min(80vh, 700px)',
        borderRadius: 12,
        overflow: 'hidden',
        border: '1px solid var(--glass-border)',
        boxShadow: '0 8px 32px var(--glass-shadow-dark)',
        background: 'var(--glass-deep-bg)',
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
  );
}
