export const MAX_WIDTH = '1000px';
export const SECTION_PADDING = '40px';
export const HEADER_HEIGHT = 64;
export const HEADER_HEIGHT_MOBILE = 48;
// The header bar's soft shadow, also worn by the floating eyes.
export const SOFT_SHADOW = '0 2px 5px rgba(0,0,0,.05), 0 8px 40px rgba(0,0,0,.04), 0 0 2px rgba(0,0,0,.15)';
// Fired by the header's Contact link so the footer lights up the email.
export const HIGHLIGHT_EMAIL_EVENT = 'hellbros:highlight-email';

export const SITE_URL = 'https://www.hellbrosstudio.com';
// Look Out art we want Google Images to tie to Hell Bros, at the fixed public
// addresses the sitemap and the game's structured data point to.
export const SHOWCASE_IMAGES = [
  '/assets/look-out/look-out-logo-hell-bros.png',
  '/assets/look-out/hell-bros-look-out-demons-in-water.webp',
  '/assets/look-out/hell-bros-look-out-demon-hand.webp',
].map((path) => `${SITE_URL}${path}`);
export const STEAM_URL = 'https://store.steampowered.com/app/4605750/';
// The Steam page isn't public yet: the Wishlist button shows a "Coming soon!"
// capsule popup instead of linking out. Flip to true once the store page is live.
export const STEAM_PAGE_LIVE = false;
