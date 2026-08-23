/**
 * Shared handle on the Lenis instance.
 *
 * Lenis drives real window scroll, so native window.scrollTo still "works" —
 * but it fights the running animation loop and lands in the wrong place. Any
 * code that programmatically scrolls should go through scrollToTop() so it
 * uses Lenis when smooth scrolling is active and falls back to native when it
 * is not (touch devices, and any viewport below the desktop breakpoint).
 */

let lenis = null;

export const setLenis = (instance) => {
  lenis = instance;
};

export const getLenis = () => lenis;

/**
 * @param {boolean} immediate jump with no animation (route changes) vs. glide
 */
export const scrollToTop = (immediate = false) => {
  if (lenis) {
    lenis.scrollTo(0, { immediate });
    return;
  }

  window.scrollTo({ top: 0, behavior: immediate ? 'instant' : 'smooth' });
};
