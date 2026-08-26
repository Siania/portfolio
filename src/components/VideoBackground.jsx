import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * Video background — public/video-bg.mp4 with public/video-poster.jpg as the first paint.
 * Skipped entirely on small screens and for users who prefer reduced motion; the poster
 * carries the look in those cases, so nothing downloads the video needlessly.
 */
const SKIP_QUERY = '(max-width: 768px), (prefers-reduced-motion: reduce)';

export default function VideoBackground() {
  const videoRef = useRef(null);
  const [visible, setVisible] = useState(true);
  const [playVideo, setPlayVideo] = useState(() =>
    typeof window === 'undefined' ? true : !window.matchMedia(SKIP_QUERY).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(SKIP_QUERY);
    const update = () => setPlayVideo(!mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleError = () => setVisible(false);
    const play = () => video.play().catch(() => {});

    video.addEventListener('error', handleError);
    video.addEventListener('canplay', play);
    video.addEventListener('loadeddata', play);
    // Try play immediately (muted videos autoplay in modern browsers)
    play();
    return () => {
      video.removeEventListener('error', handleError);
      video.removeEventListener('canplay', play);
      video.removeEventListener('loadeddata', play);
    };
  }, [playVideo]);

  if (!visible) return null;

  const content = (
    <div className="video-background" aria-hidden="true">
      {playVideo ? (
        <video
          ref={videoRef}
          src="/video-bg.mp4"
          poster="/video-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          disablePictureInPicture
        />
      ) : (
        <img src="/video-poster.jpg" alt="" />
      )}
      <div className="video-background-overlay" />
    </div>
  );

  return createPortal(content, document.body);
}
