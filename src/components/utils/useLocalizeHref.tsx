import { useLocale } from 'next-intl';
import { useMemo } from 'react';

export default function useLocalizeHref() {
  const locale = useLocale();

  return useMemo(
    () => (href: string) => {
      if (/^(https?:)?\/\//.test(href)) return href;
      return `/${locale}${href.startsWith('/') ? '' : '/'}${href}`;
    },
    [locale]
  );
}
