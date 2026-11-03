import { useSyncExternalStore } from 'react';
import { HEADER_HEIGHT } from '@/app/_utils/constants';

// The header slides away while the page scrolls down and comes back on a small
// scroll up. One scroll listener feeds every component that needs to know, so
// the header and whatever sits below it always agree.
let hidden = false;
let lastY = 0;
const listeners = new Set<() => void>();

const onScroll = () => {
  const y = window.scrollY;
  const delta = y - lastY;
  // A few pixels are enough to count as a change of direction.
  if (Math.abs(delta) < 4) return;
  lastY = y;
  const next = y > HEADER_HEIGHT && delta > 0;
  if (next !== hidden) {
    hidden = next;
    listeners.forEach((listener) => listener());
  }
};

const subscribe = (listener: () => void) => {
  if (listeners.size === 0) {
    lastY = window.scrollY;
    window.addEventListener('scroll', onScroll, { passive: true });
  }
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) window.removeEventListener('scroll', onScroll);
  };
};

const useHeaderHidden = () => useSyncExternalStore(subscribe, () => hidden, () => false);

export default useHeaderHidden;
