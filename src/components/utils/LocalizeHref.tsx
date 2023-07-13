import { useLocale } from 'next-intl';

export function localizeHref(href: string) {
  const locale = useLocale();

  // if href is an absolute URL (contains 'http://', 'https://', or '//'), do not add locale
  if (/^(https?:)?\/\//.test(href)) return href;
  return `/${locale}${href.startsWith('/') ? '' : '/'}${href}`;
}
