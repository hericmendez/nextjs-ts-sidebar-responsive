// -> takes in a number used as a threshold, returns a boolean value of 'scrolled'.
// checks to see how far down the user has scrolled
// if scrolled true, used for styling purposes

import { useCallback, useEffect, useState } from 'react';

export default function useScroll(threshold: number) {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  // also check on first load
  useEffect(() => {
    onScroll();
  }, [onScroll]);

  return scrolled;
}
