export default function scrollToSection(sectionId: string, offset: number = 0) {
    const section = document.getElementById(sectionId);
    if (section) {
      const gap = 5; // breathing room below the fixed header when navigating
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const top = Math.min(Math.max(section.offsetTop - offset - gap, 0), maxScroll);
      window.scrollTo({ top, behavior: 'smooth' });
      return top;
    }
  }

// Calls `done` once a smooth scroll to `target` has covered `fraction` of the way
// from where the page is now, so timing follows the distance rather than a clock.
// Also fires if the scroll stalls, e.g. the user took over.
export function onScrollNear(target: number, done: () => void, fraction: number = 0.97) {
  const stallMs = 500;
  const from = window.scrollY;
  const distance = target - from;
  if (Math.abs(distance) < 1) {
    done();
    return;
  }
  let lastY = from;
  let lastChange = performance.now();
  const tick = (now: number) => {
    if (window.scrollY !== lastY) {
      lastY = window.scrollY;
      lastChange = now;
    }
    if ((lastY - from) / distance >= fraction || now - lastChange >= stallMs) done();
    else requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
