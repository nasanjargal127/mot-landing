"use client";
import { AnimatePresence, motion } from "framer-motion";
import { CustomStyles } from "@/src/styles/styles";
import { Dialog } from "@headlessui/react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction, useState } from "react";

type HeaderProps = {};

interface NavbarRoutesProps {
  name: string;
  href: string;
  sublinks: {
    name: string;
    href: string;
  }[];
}

const Header: React.FC<HeaderProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [navbarVisibility, setNavbarVisibility] = useState<number>(0);

  const { scrollY } = useScroll();
  const locale = useLocale();
  const navbarContent = useTranslations("navbarLinks");
  const pathname = usePathname();

  const redirectedPathname = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    setNavbarVisibility(latest);
  });

  const navbarRoutes: NavbarRoutesProps[] = [
    {
      name: navbarContent("trade"),
      href: "/trade",
      sublinks: [
        {
          name: navbarContent("tradeAccount"),
          href: "",
        },
        {
          name: navbarContent("market"),
          href: "",
        },
        {
          name: navbarContent("priceSpread"),
          href: "",
        },
      ],
    },
    {
      name: navbarContent("platform"),
      href: "/platform",
      sublinks: [
        {
          name: navbarContent("mt5"),
          href: "",
        },
        {
          name: navbarContent("ctrader"),
          href: "",
        },
        {
          name: navbarContent("tradingHour"),
          href: "",
        },
        {
          name: navbarContent("demoAccount"),
          href: "",
        },
      ],
    },
    {
      name: navbarContent("support"),
      href: "/support",
      sublinks: [
        {
          name: navbarContent("contactUs"),
          href: "",
        },
        {
          name: navbarContent("partner"),
          href: "",
        },
      ],
    },
  ];

  return (
    <header
      id="navbar"
      className={
        ` w-full fixed top-0 z-30 px-2 xl:px-0 ` +
        (navbarVisibility > 80 || isMobileMenuOpen ? " bg-[#071926] shadow-lg" : " backdrop-blur-md")
      }
    >
      <nav className={`${CustomStyles.container} h-16 flex items-center justify-between`} aria-label="Global">
        <Link href="/">
          <Image src="/logo/motfxLogoLight.png" alt="logoImage" width="140" height="36" priority />
        </Link>
        <ul></ul>
        <div></div>
        <BarIcon isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        {/* ------------------------------- hamburger button ---------------------------------- */}
      </nav>
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        navbarRoutes={navbarRoutes}
      />
    </header>
  );
};
export default Header;

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
  navbarRoutes: NavbarRoutesProps[];
}

const slideInAnimation = {
  hidden: { x: "100%" },
  visible: { x: "0%", transition: { duration: 0.5 } },
  exit: { x: "100%", transition: { duration: 0.3 } },
};

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen, navbarRoutes }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <Dialog as="div" className={`lg:hidden`} open={isMobileMenuOpen} onClose={setIsMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <motion.div
            className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideInAnimation}
          >
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <div className="w-32 h-12"></div>
              </a>
              <button type="button" className="-m-2.5 rounded-md p-2.5 " onClick={() => setIsMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <div className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navbarRoutes.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-mainColor text-white "
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

interface BarIconProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const BarIcon = ({ isMobileMenuOpen, setIsMobileMenuOpen }: BarIconProps) => {
  return (
    <div
      className="z-50 flex relative w-6 h-5 flex-col justify-between cursor-pointer items-center lg:hidden"
      onClick={() => {
        console.log("HI");
        setIsMobileMenuOpen(!isMobileMenuOpen);
      }}
    >
      <span
        className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
          isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
        }`}
      />
      <span
        className={`h-1 bg-white rounded-lg transition-all duration-300 ease-in-out dark:bg-white z-0 ${
          isMobileMenuOpen ? " w-0 " : " w-full "
        }`}
      />
      <span
        className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out dark:bg-white ${
          isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
        }`}
      />
    </div>
  );
};
