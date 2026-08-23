import { useLayoutEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';
import { DESKTOP_MQ } from '../../utils/breakpoints';
import { setLenis } from '../../utils/smoothScroll';

gsap.registerPlugin(ScrollTrigger);

/**
 * Site-wide smooth scrolling.
 *
 * Desktop only (>=1025px), matching the breakpoint the scroll animations use.
 * On touch devices Lenis has to override native momentum scrolling, which
 * reads as heavy and laggy, so phones and tablets keep native scroll.
 *
 * Lenis scrolls the window natively (it does not transform a wrapper), so
 * ScrollTrigger needs no scrollerProxy — it only needs telling when Lenis has
 * moved, and Lenis needs driving from the GSAP ticker so the two share one
 * requestAnimationFrame loop instead of racing in separate ones.
 *
 * Renders nothing.
 */
function SmoothScroll() {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(DESKTOP_MQ, () => {
      const lenis = new Lenis({
        // Lenis runs in either lerp mode or duration+easing mode, and the
        // wheel handler passes all three through — duration wins when an
        // easing is also set. Both are given explicitly so the feel does not
        // depend on which default happens to apply.
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        // Native momentum beats anything we can emulate on touch.
        syncTouch: false,
      });

      setLenis(lenis);

      const onScroll = () => ScrollTrigger.update();
      lenis.on('scroll', onScroll);

      // GSAP's ticker drives Lenis, so pinning and the scrub stay in step.
      const raf = (time) => lenis.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

      ScrollTrigger.refresh();

      return () => {
        gsap.ticker.remove(raf);
        gsap.ticker.lagSmoothing(500, 33);
        lenis.off('scroll', onScroll);
        lenis.destroy();
        setLenis(null);
      };
    });

    return () => mm.revert();
  }, []);

  return null;
}

export default SmoothScroll;
