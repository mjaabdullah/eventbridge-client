"use client";

import { authClient } from "@/lib/auth-client";
import { getSessionUserFromClient } from "@/lib/getSessionFromClient";
import { Button, Link } from "@heroui/react";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

interface NavItem {
  label: string;
  href: string;
}

// Always-visible links
const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Explore Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Extra links shown only when a user is logged in
const USER_NAV_ITEMS: NavItem[] = [
  { label: "Add Event", href: "/events/add" },
  { label: "Manage Events", href: "/events/manage" },
  { label: "Profile", href: "/profile" },
];

const NavBar = () => {
  const router = useRouter();
  const [user, setUser] = useState<null | Awaited<
    ReturnType<typeof getSessionUserFromClient>
  >>(null);

  const [isUserLoading, setIsUserLoading] = useState(true);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    let isMounted = true;

    getSessionUserFromClient().then((sessionUser) => {
      if (isMounted) {
        setUser(sessionUser);
        setIsUserLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!!isUserLoading) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-[#E2E8F0] bg-[#F8FAFC]/95 backdrop-blur-sm">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          <div className="h-9 w-24 animate-pulse rounded-md bg-[#E2E8F0]" />
        </nav>
      </header>
    );
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const closeMenu = () => setIsMenuOpen(false);


  const handleLogout = () => {
    closeMenu();
    authClient.signOut();
    router.push("/login");
  };

  const navItems = user ? [...NAV_ITEMS, ...USER_NAV_ITEMS] : NAV_ITEMS;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E2E8F0] bg-[#F8FAFC]/95 backdrop-blur-sm">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <Link
          render={({ ref, ...domProps }) => (
            <NextLink
              {...domProps}
              ref={ref as React.Ref<HTMLAnchorElement>}
              href="/"
            />
          )}
          aria-label="EventBridge — go to homepage"
          className="rounded-md text-xl font-bold tracking-tight text-[#7C3AED] no-underline outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2"
        >
          <span className="text-xl font-bold text-foreground">
            Event<span className="text-primary">Bridge</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  render={({ ref, ...domProps }) => (
                    <NextLink
                      {...domProps}
                      ref={ref as React.Ref<HTMLAnchorElement>}
                      href={item.href}
                    />
                  )}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-md px-3 py-2 text-sm font-medium no-underline outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2 ${
                    active
                      ? "text-[#7C3AED]"
                      : "text-[#0F172A]/70 hover:text-[#7C3AED]"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-[7px] left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-[#7C3AED]"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop auth actions */}
        <div className="hidden items-center gap-3 lg:flex">
          {isUserLoading ? (
            <div
              aria-hidden="true"
              className="h-9 w-24 animate-pulse rounded-md bg-[#E2E8F0]"
            />
          ) : user ? (
            <Button
              onPress={handleLogout}
              className="rounded-md bg-[#7C3AED] px-4 py-2 text-sm font-medium text-white outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2"
            >
              Logout
            </Button>
          ) : (
            <>
              <Link
                render={({ ref, ...domProps }) => (
                  <NextLink
                    {...domProps}
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    href="/login"
                  />
                )}
                className="rounded-md border border-[#E2E8F0] bg-[#ECFEFF] px-4 py-2 text-sm font-medium text-[#0F172A] no-underline outline-none transition-colors hover:border-[#7C3AED] hover:text-[#7C3AED] focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2"
              >
                Login
              </Link>
              <Link
                render={({ ref, ...domProps }) => (
                  <NextLink
                    {...domProps}
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    href="/register"
                  />
                )}
                className="rounded-md bg-[#7C3AED] px-4 py-2 text-sm font-medium text-white no-underline outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <Button
          isIconOnly
          variant="ghost"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-menu"
          onPress={() => setIsMenuOpen((prev) => !prev)}
          className="text-[#0F172A] outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2 lg:hidden"
        >
          {isMenuOpen ? (
            <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
          ) : (
            <HiOutlineBars3 className="h-6 w-6" aria-hidden="true" />
          )}
        </Button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-nav-menu"
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={`overflow-hidden border-t border-[#E2E8F0] bg-[#F8FAFC] transition-[max-height,opacity] duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "max-h-[36rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  render={({ ref, ...domProps }) => (
                    <NextLink
                      {...domProps}
                      ref={ref as React.Ref<HTMLAnchorElement>}
                      href={item.href}
                    />
                  )}
                  onPress={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={`block w-full rounded-md px-3 py-3 text-base font-medium no-underline outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#7C3AED] ${
                    active
                      ? "bg-[#ECFEFF] text-[#7C3AED]"
                      : "text-[#0F172A] hover:bg-[#ECFEFF] hover:text-[#7C3AED]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}

          <li className="mt-3 flex flex-col gap-3 border-t border-[#E2E8F0] pt-4">
            {isUserLoading ? (
              <div
                aria-hidden="true"
                className="h-11 w-full animate-pulse rounded-md bg-[#E2E8F0]"
              />
            ) : user ? (
              <Button
                onPress={handleLogout}
                className="block w-full rounded-md bg-[#7C3AED] text-center text-base font-medium text-white outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
              >
                Logout
              </Button>
            ) : (
              <>
                <Link
                  render={({ ref, ...domProps }) => (
                    <NextLink
                      {...domProps}
                      ref={ref as React.Ref<HTMLAnchorElement>}
                      href="/login"
                    />
                  )}
                  onPress={closeMenu}
                  className="block w-full rounded-md border border-[#E2E8F0] bg-[#ECFEFF] px-4 py-3 text-center text-base font-medium text-[#0F172A] no-underline outline-none transition-colors hover:border-[#7C3AED] hover:text-[#7C3AED] focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
                >
                  Login
                </Link>
                <Link
                  render={({ ref, ...domProps }) => (
                    <NextLink
                      {...domProps}
                      ref={ref as React.Ref<HTMLAnchorElement>}
                      href="/register"
                    />
                  )}
                  onPress={closeMenu}
                  className="block w-full rounded-md bg-[#7C3AED] px-4 py-3 text-center text-base font-medium text-white no-underline outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
                >
                  Register
                </Link>
              </>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
