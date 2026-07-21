import { useEffect, useState } from 'react';

// Preloads the target image so the board never renders with a broken/blank
// background, and so we can show a clean loading state instead.
export function useImagePreload(url) {
  const [status, setStatus] = useState('idle'); // idle | loading | loaded | error

  useEffect(() => {
    if (!url) {
      setStatus('idle');
      return undefined;
    }
    let cancelled = false;
    setStatus('loading');

    const img = new Image();
    img.onload = () => {
      if (!cancelled) setStatus('loaded');
    };
    img.onerror = () => {
      if (!cancelled) setStatus('error');
    };
    img.src = url;

    return () => {
      cancelled = true;
    };
  }, [url]);

  return status;
}
