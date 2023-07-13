import { useLocale } from 'next-intl';

export default function localizeHref(href: string) {
  const locale = useLocale();

  // if href is an absolute URL (contains 'http://', 'https://', or '//'), do not add locale
  if (/^(https?:)?\/\//.test(href)) return href;
  console.log(`/${locale}${href.startsWith('/') ? '' : '/'}${href}`);
  return `/${locale}${href.startsWith('/') ? '' : '/'}${href}`;
}
