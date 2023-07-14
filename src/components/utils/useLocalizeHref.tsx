import { useLocale } from 'next-intl';
import { useMemo } from 'react';

export default function useLocalizeHref() {
  const locale = useLocale();

  return useMemo(
    () => (href: string) => {
      // if href is an absolute URL (contains 'http://', 'https://', or '//'), do not add locale
      if (/^(https?:)?\/\//.test(href)) return href;
      return `/${locale}${href.startsWith('/') ? '' : '/'}${href}`;
    },
    [locale]
  );
}
