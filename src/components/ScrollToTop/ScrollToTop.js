import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToTop } from '../../utils/smoothScroll';

/**
 * ScrollToTop
 * Scrolls the window to the top whenever the route changes.
 * Place this inside <BrowserRouter> so it has access to the router context.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Goes through Lenis when smooth scrolling is active, native otherwise.
    scrollToTop(true);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
