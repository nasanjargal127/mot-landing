import { useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type LanguageContextProps = {};

const LanguageContext: React.FC<LanguageContextProps> = () => {
  const pathname = usePathname();
  const locale = useLocale();

  const redirectedPathname = (locale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div 
    className="ring-2 ring-customGray hover:text-primary duration-200 rounded-full text-sm font-semibold flex 
    items-center justify-center h-10 w-10 text-white blue-glow">
      <Link href={redirectedPathname(locale === 'en' ? 'mn' : 'en')} locale="mn">
        {locale.toLocaleUpperCase()}
      </Link>
    </div>
  );
};
export default LanguageContext;
