import Link from "next/link";
import { BrandLogo } from "@/features/home/components/BrandLogo";

const navigation = [
  { label: "Mẫu thiệp", href: "#templates" },
  { label: "Quy trình", href: "#quy-trinh" },
  { label: "Lợi ích", href: "#vi-sao-chon" },
  { label: "FAQ", href: "#faq" }
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/70 bg-white/78 text-[#15151f] shadow-[0_10px_40px_rgba(44,53,95,0.08)] backdrop-blur-2xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3 font-semibold" href="/">
          <BrandLogo variant="dark" />
        </Link>
        <nav className="hidden items-center gap-8 text-[15px] font-bold md:flex">
          {navigation.map((item) => (
            <a className="transition-colors hover:text-[#ff4f8b]" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
