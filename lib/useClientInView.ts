"use client";

import { RefObject, useEffect, useState } from "react";
import { useInView } from "framer-motion";

export function useClientInView(ref: RefObject<Element>, options?: { once?: boolean; amount?: number }) {
  // framer motion hook
  const inView = useInView(ref, options || { once: true, amount: 0.2 });
  const [visibleOnMount, setVisibleOnMount] = useState(false);

  useEffect(() => {
    // fallback check on mount: sometimes IntersectionObserver/whileInView doesn't trigger in production
    // so we check bounding rect to detect if element is already in viewport
    if (!ref.current) return;

    try {
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setVisibleOnMount(true);
      }
    } catch (e) {
      // ignore - defensive
    }
  }, [ref]);

  return Boolean(inView || visibleOnMount);
}
