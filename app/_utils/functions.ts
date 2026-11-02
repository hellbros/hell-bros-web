export default function scrollToSection(sectionId: string, offset: number = 0) {
    const section = document.getElementById(sectionId);
    if (section) {
      const gap = 5; // breathing room below the fixed header when navigating
      const top = Math.max(section.offsetTop - offset - gap, 0);
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

// Calls `done` once the page has all but stopped moving (the crawl at the end of
// a smooth scroll counts as stopped), or there was nothing to scroll. Polls instead of using `scrollend`, which doesn't
// fire when the page is already in place and is missing on older Safari.
export function onScrollSettled(done: () => void, quietMs: number = 60) {
  const startGrace = 500; // the scroll may take a moment to begin
  let lastY = window.scrollY;
  let lastChange = performance.now();
  let moved = false;
  const tick = (now: number) => {
    if (Math.abs(window.scrollY - lastY) > 3) {
      lastY = window.scrollY;
      lastChange = now;
      moved = true;
    }
    if (now - lastChange >= (moved ? quietMs : startGrace)) done();
    else requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
