import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["mn", "en"],
  defaultLocale: "mn",
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
