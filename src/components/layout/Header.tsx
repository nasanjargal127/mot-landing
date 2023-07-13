"use client";

import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CustomStyles } from "@/src/styles/styles";
import { Dialog } from "@headlessui/react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";
import { BsCaretDownFill, BsFillPersonCheckFill } from "react-icons/bs";
import { MdLogin } from "react-icons/md";
import { LanguageContext } from "../utils";
import LinkButton from "../ui/Buttons/LinkButton";

type HeaderProps = {};

interface SublinksProps {
  name: string;
  href: string;
}
interface NavbarRoutesProps {
  name: string;
  href: string;
  sublinks: SublinksProps[];
}

const BrokerAuthLinks = {
  login: "https://portal.motforex.com/auth/login",
  register: "https://portal.motforex.com/auth/register",
};

const Header: React.FC<HeaderProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [navbarVisibility, setNavbarVisibility] = useState<number>(0);

  const { scrollY } = useScroll();
  const navbarContent = useTranslations("navbarLinks");

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
          href: "/trade",
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
        (navbarVisibility > 80 || isMobileMenuOpen ? " bg-lightSecondary shadow-lg" : " backdrop-blur-md")
      }
    >
      <nav className={`${CustomStyles.container} h-16 flex items-center justify-between`} aria-label="Global">
        <Link href="/" className="flex lg:flex-1">
          <Image src="/logo/motfxLogoLight.png" alt="logoImage" width="140" height="36" priority />
        </Link>

        <ul className="hidden relative items-center md:flex flex-row gap-6">
          {navbarRoutes.map((item, idx) => {
            return (
              <NavbarListItem key={idx} link={item.href} label={item.name}>
                {item.sublinks && <DropMenu navbarVisibility={navbarVisibility > 80} items={item.sublinks} />}
              </NavbarListItem>
            );
          })}
        </ul>

        <div className="flex lg:flex-1 justify-end items-center gap-4">
          <Link className="text-sm font-semibold hover:text-primary pr-1" href={BrokerAuthLinks.login}>
            {navbarContent("login")}
          </Link>
          <LinkButton
            className={`px-4 py-2 text-sm duration-200 hover:bg-primary hover:text-black`}
            href={BrokerAuthLinks.register}
            isOutlined
            text={navbarContent("openAccount")}
          />
          <LanguageContext />
          <BarIcon isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </div>
        {/* ------------------------------- hamburger button ---------------------------------- */}
      </nav>
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        navbarRoutes={navbarRoutes}
        loginText={navbarContent("login")}
        register={navbarContent("openAccount")}
      />
    </header>
  );
};

export default Header;

// --------------------------------------------- Navbar Item-----------------------------------------------
function NavbarListItem({ link, label, children }: { link: string; label: string; children?: ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname.toString().includes(link);

  return (
    <li className={`relative flex flex-row items-center ${children ? "group" : ""} h-16`}>
      <Link
        className={
          (isActive ? "text-primary " : " ") +
          "text-base font-[400] cursor-pointer flex items-center  h-full " +
          " hover:text-primary dark:hover:text-darkPrimary  "
        }
        href={link}
        target={link.includes("https") ? "_blank" : ""}
      >
        {label}
      </Link>
      <BsCaretDownFill
        className={
          (isActive ? "text-primary" : " ") +
          " text-lightText ml-0.5 mt-1 group-hover:rotate-180 duration-300 group-hover:text-primary "
        }
        size={12}
      />
      {children}
    </li>
  );
}

function DropMenu({ items, navbarVisibility }: { items: SublinksProps[]; navbarVisibility: boolean }) {
  return (
    <div
      className={
        (navbarVisibility ? " bg-secondary " : "  ") +
        "absolute top-full -left-5 py-3 px-6 hidden group-hover:flex flex-col rounded-b-xl"
      }
    >
      <ul className="w-36">
        {items.map((subitem, index) => {
          return (
            <li key={index} className="mb-2 text-slate-200 hover:text-primary">
              <Link href={subitem.href} className="w-fit text-sm ">
                {subitem.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// --------------------------------------------- MOBILE MENU -----------------------------------------------
interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
  navbarRoutes: NavbarRoutesProps[];
  loginText: string;
  register: string;
}

const slideInAnimation = {
  hidden: { x: "100%" },
  visible: { x: "0%", transition: { duration: 0.5 } },
  exit: { x: "100%", transition: { duration: 0.3 } },
};

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen, navbarRoutes, loginText, register }: MobileMenuProps) => {
  const [openDropdown, setOpenDropdown] = useState<null | number>(null);

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <Dialog as="div" className={`md:hidden`} open={isMobileMenuOpen} onClose={setIsMobileMenuOpen}>
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
                <div className="w-32 h-10"></div>
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
                    <div key={idx}>
                      <div
                        className="flex flex-row justify-between items-center group "
                        onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                      >
                        <div className="-ml-3 block p-3 font-base text-lg leading-8 group-hover:text-primary text-white ">
                          {item.name}
                        </div>
                        <div>
                          <FaChevronDown
                            className={`group-hover:text-primary ${openDropdown === idx ? "rotate-180" : ""}`}
                            style={{ transition: "transform 0.3s ease" }}
                          />
                        </div>
                      </div>
                      {item.sublinks.map((sublink, subIdx) => (
                        <Link
                          key={subIdx}
                          href={sublink.href}
                          className={`-ml-3 block  pl-6 font-[200] text-md leading-8 hover:text-primary text-gray-400 dropdown-item ${
                            openDropdown === idx ? "open py-2" : ""
                          }`}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
                <div>
                  <Link href={BrokerAuthLinks.login} className="flex flex-row justify-between items-center group ">
                    <div className="-ml-3 mt-4 py-3 pl-3 pr-1 font-base text-lg leading-8 group-hover:text-primary text-white">
                      {loginText}
                    </div>
                    <MdLogin size={26} className="group-hover:text-primary" />
                  </Link>
                  <Link href={BrokerAuthLinks.register} className="flex flex-row justify-between items-center group">
                    <div className="-ml-3 py-3 pl-3 pr-1 font-base text-lg leading-8 group-hover:text-primary text-white">
                      {register}
                    </div>
                    <BsFillPersonCheckFill size={24} className="group-hover:text-primary" />
                  </Link>
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
      className="z-50 m-4 flex relative w-6 h-5 flex-col justify-between cursor-pointer items-center md:hidden"
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
