"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "@/features/home/components/BrandLogo";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "Mẫu thiệp", href: "#templates" },
  { label: "Quy trình", href: "#quy-trinh" },
  { label: "Lợi ích", href: "#vi-sao-chon" },
  { label: "FAQ", href: "#faq" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/70 bg-white/78 text-[#15151f] shadow-[0_10px_40px_rgba(44,53,95,0.08)] backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-18 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3 font-semibold" href="/" onClick={() => setOpen(false)}>
          <BrandLogo variant="dark" />
        </Link>

        <nav className="hidden items-center gap-8 text-[15px] font-bold md:flex">
          {navigation.map((item) => (
            <a className="transition-colors hover:text-[#ff4f8b]" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          aria-expanded={open}
          aria-label={open ? "Đóng menu" : "Mở menu"}
          className="grid size-10 place-items-center rounded-full border border-[#e8eaf5] bg-white text-[#15151f] shadow-[0_10px_24px_rgba(44,53,95,0.08)] transition hover:border-[#ff4f8b]/30 hover:text-[#ff4f8b] md:hidden"
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-[#e8eaf5]/70 bg-white/94 px-4 shadow-[0_18px_44px_rgba(44,53,95,0.12)] backdrop-blur-2xl transition-[grid-template-rows,opacity] duration-300 md:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <nav className="min-h-0">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 py-4">
            {navigation.map((item) => (
              <a
                className="rounded-2xl px-4 py-3 text-base font-black text-[#15151f] transition hover:bg-[#fff0f6] hover:text-[#ff4f8b]"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
