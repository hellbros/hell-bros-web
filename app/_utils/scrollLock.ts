// Freeze / restore page scroll without a layout shift.
//
// Setting overflow:hidden removes the scrollbar, which widens the layout and
// shifts everything (including the fixed header) to the right. To avoid that we
// measure the current scrollbar width and expose it as the `--sbw` CSS var;
// `html.scroll-locked` (see elements.css) then pads the page and the header by
// it, replacing the removed bar. See app/_styles/base/elements.css.

export function lockScroll(): void {
  const root = document.documentElement;
  if (root.classList.contains('scroll-locked')) return;
  const scrollbarWidth = window.innerWidth - root.clientWidth;
  root.style.setProperty('--sbw', `${scrollbarWidth}px`);
  root.classList.add('scroll-locked');
}

export function unlockScroll(): void {
  const root = document.documentElement;
  root.classList.remove('scroll-locked');
  root.style.removeProperty('--sbw');
}
