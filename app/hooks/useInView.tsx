import { useState, useEffect } from 'react';

// Whether the element with this id still shows below the header (the top
// `offset` pixels of the window don't count). True until it is measured, so
// the page's first paint matches the top of the page.
const useInView = (id: string, offset = 0): boolean => {
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = document.getElementById(id);
    if (!el) {
      setInView(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: `-${offset}px 0px 0px 0px` },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [id, offset]);

  return inView;
};

export default useInView;
