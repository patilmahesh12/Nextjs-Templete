"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Link from "next/link"; // Make sure this path is correct

export default function NavbarDemo() {
  const navItems = [
    { name: "Features", link: "#features" },
    { name: "Pricing", link: "#pricing" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <div className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              <Link href="/login">
                <NavbarButton variant="secondary">Login</NavbarButton>
              </Link>
              <Link href="/dashboard">
                <NavbarButton variant="primary">Dashboard</NavbarButton>
              </Link>
            </div>
          </NavBody>

          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}

              <div className="flex w-full flex-col gap-4">
                <Link
                  href="/login"
                  className="w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <NavbarButton variant="primary" className="w-full">
                    Login
                  </NavbarButton>
                </Link>

                <Link
                  href="/dashboard"
                  className="w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <NavbarButton variant="primary" className="w-full">
                    Dashboard
                  </NavbarButton>
                </Link>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>
      <div className="pt-20"></div>
    </div>
  );
}
