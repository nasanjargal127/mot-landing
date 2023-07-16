'use clinet';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type LanguageContextProps = {};

const LanguageContext: React.FC<LanguageContextProps> = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const [redirectPath, setRedirectPath] = useState('/');

  useEffect(() => {
    const redirectedPathname = (locale: string) => {
      if (!pathname) return '/';
      let url = new URL(window.location.href);
      let pathSegments = url.pathname.split('/');
      if (pathSegments[1] === 'en' || pathSegments[1] === 'mn') {
        pathSegments[1] = locale;
      } else {
        pathSegments.splice(1, 0, locale);
      }
      let newPathname = pathSegments.join('/');
      let newUrl = new URL(newPathname, url.origin);
      newUrl.search = url.search;
      return newUrl.pathname + newUrl.search;
    };

    setRedirectPath(redirectedPathname(locale === 'en' ? 'mn' : 'en'));
  }, [pathname, locale]);

  return (
    <div
      className="ring-2 ring-customGray hover:text-primary duration-200 rounded-full text-sm font-semibold flex 
    items-center justify-center h-10 w-10 text-white blue-glow"
    >
      <Link href={redirectPath} locale="mn">
        {locale.toLocaleUpperCase() === 'EN' ? 'MN' : 'EN'}
      </Link>
    </div>
  );
};

export default LanguageContext;
