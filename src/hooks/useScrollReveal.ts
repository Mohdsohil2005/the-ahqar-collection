import { useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15,
  rootMargin = '0px 0px -50px 0px'
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      el.classList.add('scroll-reveal-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold, rootMargin]);

  return ref;
}
