export default function scrollToSection(sectionId: string, offset: number = 0) {
    const section = document.getElementById(sectionId);
    if (section) {
      const gap = 5; // breathing room below the fixed header when navigating
      const top = Math.max(section.offsetTop - offset - gap, 0);
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

// Calls `done` once the page has stopped moving: the smooth scroll finished, or
// there was nothing to scroll. Polls instead of using `scrollend`, which doesn't
// fire when the page is already in place and is missing on older Safari.
export function onScrollSettled(done: () => void, quietMs: number = 120) {
  const startGrace = 500; // the scroll may take a moment to begin
  let lastY = window.scrollY;
  let lastChange = performance.now();
  let moved = false;
  const tick = (now: number) => {
    if (window.scrollY !== lastY) {
      lastY = window.scrollY;
      lastChange = now;
      moved = true;
    }
    if (now - lastChange >= (moved ? quietMs : startGrace)) done();
    else requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
