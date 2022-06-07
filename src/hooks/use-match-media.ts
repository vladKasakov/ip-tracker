import { useLayoutEffect, useState } from 'react';

export function useMatchMedia(query: string) {
  const mediaQuery = matchMedia(query);
  const [value, setValue] = useState(mediaQuery.matches);

  useLayoutEffect(() => {
    const handler = () => {
      setValue(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handler);

    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  });

  return value;
}
