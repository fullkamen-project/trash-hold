"use client";

import { useState, useEffect } from 'react';

/**
 * Пользовательский хук для отслеживания состояния медиа-запроса.
 * @param query Строка медиа-запроса для отслеживания.
 * @returns `true` если медиа-запрос совпадает, иначе `false`.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Синхронизируем состояние при монтировании на клиенте (избегает hydration mismatch)
    setMatches(media.matches);

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}