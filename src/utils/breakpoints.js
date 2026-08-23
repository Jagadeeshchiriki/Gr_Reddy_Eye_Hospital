/**
 * Shared responsive breakpoints.
 *
 * DESKTOP_MQ is the single gate for every GSAP ScrollTrigger animation on the
 * site. Below it, sections fall back to natural vertical flow via CSS and no
 * scroll animation runs at all.
 *
 * Used with gsap.matchMedia(), which re-evaluates on resize/orientation change
 * and auto-reverts its context (including inline styles written by gsap.set)
 * when the query stops matching — so the mobile CSS layout takes over cleanly.
 *
 * Keep in sync with the CSS breakpoint ladder: 1600 / 1280 / 1024 / 768 / 480.
 * CSS uses `max-width: 1024px` for the mobile side of this same boundary.
 */
export const DESKTOP_MQ = '(min-width: 1025px)';

export default DESKTOP_MQ;
