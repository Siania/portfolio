import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * Video background — add your video to public/video-bg.mp4
 * Free sources: Pexels, Coverr, Pixabay (download, then place in public/)
 */
export default function VideoBackground() {
  const videoRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleError = () => setVisible(false);
    const playVideo = () => video.play().catch(() => {});

    video.addEventListener('error', handleError);
    video.addEventListener('canplay', playVideo);
    video.addEventListener('loadeddata', playVideo);
    // Try play immediately (muted videos autoplay in modern browsers)
    playVideo();
    return () => {
      video.removeEventListener('error', handleError);
      video.removeEventListener('canplay', playVideo);
      video.removeEventListener('loadeddata', playVideo);
    };
  }, []);

  if (!visible) return null;

  const content = (
    <div className="video-background" aria-hidden="true">
      <video
        ref={videoRef}
        src="/video-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
      />
      <div className="video-background-overlay" />
    </div>
  );

  return createPortal(content, document.body);
}
