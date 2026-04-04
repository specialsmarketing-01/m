"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { mainNav } from "@/lib/data/site";

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`rounded-md px-3 py-2 text-sm font-medium transition ${
        active
          ? "bg-white/10 text-white"
          : "text-slate-200 hover:bg-white/10 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a1628]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-white">
            {/** logo text */}
            CTST
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-wider text-[#F37021] sm:inline">
            Qatar
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {mainNav.map((item) => {
            if (item.href) {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <NavLink key={item.href} href={item.href} active={active}>
                  {item.label}
                </NavLink>
              );
            }
            if (item.children) {
              const anyChildActive = item.children.some((c) =>
                pathname.startsWith(c.href),
              );
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition ${
                      anyChildActive || solutionsOpen
                        ? "bg-white/10 text-white"
                        : "text-slate-200 hover:bg-white/10 hover:text-white"
                    }`}
                    aria-expanded={solutionsOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <span className="text-xs" aria-hidden>
                      ▾
                    </span>
                  </button>
                  <AnimatePresence>
                    {solutionsOpen ? (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full z-50 mt-1 w-[min(100vw-2rem,22rem)] rounded-lg border border-white/10 bg-[#0f1f35] p-2 shadow-xl"
                      >
                        <ul className="max-h-[70vh] overflow-y-auto py-1">
                          {item.children.map((c) => (
                            <li key={c.href}>
                              <Link
                                href={c.href}
                                className={`block rounded-md px-3 py-2 text-sm ${
                                  pathname.startsWith(c.href)
                                    ? "bg-white/10 text-[#F37021]"
                                    : "text-slate-200 hover:bg-white/10 hover:text-white"
                                }`}
                              >
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            }
            return null;
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact-us"
            className="hidden rounded-md bg-[#F37021] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#e0651c] sm:inline-flex"
          >
            Get in touch
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Open menu</span>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#0a1628] lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {mainNav.map((item) => {
                if (item.href) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
                    >
                      {item.label}
                    </Link>
                  );
                }
                return (
                  <div key={item.label} className="pt-2">
                    <p className="px-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {item.label}
                    </p>
                    <ul className="mt-1 space-y-1">
                      {item.children?.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            className="block rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
              <Link
                href="/contact-us"
                className="mt-2 block rounded-md bg-[#F37021] px-3 py-3 text-center text-sm font-semibold text-white"
              >
                Get in touch
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
