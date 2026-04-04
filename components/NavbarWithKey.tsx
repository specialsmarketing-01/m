"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar";

export function NavbarWithKey() {
  const pathname = usePathname();
  return <Navbar key={pathname} />;
}
