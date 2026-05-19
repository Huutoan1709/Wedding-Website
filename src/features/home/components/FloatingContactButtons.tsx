"use client";

import { siteConfig } from "@/config/site";

function MessengerIcon() {
  return (
    <svg aria-hidden="true" className="size-7" viewBox="0 0 32 32" fill="none">
      <path
        d="M16 4C9.2 4 4 8.96 4 15.66c0 3.5 1.42 6.54 3.74 8.62v4.34c0 .5.56.8.98.52l3.86-2.5c1.08.3 2.22.46 3.42.46 6.8 0 12-4.96 12-11.66S22.8 4 16 4Z"
        fill="white"
      />
      <path d="m8.95 19.45 4.18-6.62a1.35 1.35 0 0 1 1.96-.34l3.32 2.5a.86.86 0 0 0 1.04 0l4.48-3.4-4.18 6.62a1.35 1.35 0 0 1-1.96.34l-3.32-2.5a.86.86 0 0 0-1.04 0l-4.48 3.4Z" fill="#ff2f76" />
    </svg>
  );
}

function ZaloIcon() {
  return (
    <span aria-hidden="true" className="font-sans text-[15px] font-black leading-none tracking-[-0.08em]">
      Zalo
    </span>
  );
}

export function FloatingContactButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        aria-label="Liên hệ qua Zalo"
        className="grid size-14 place-items-center rounded-full bg-[#0068ff] text-white shadow-[0_14px_34px_rgba(0,104,255,0.32)] ring-4 ring-white transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068ff]"
        href={siteConfig.zaloUrl}
        rel="noreferrer"
        target="_blank"
      >
        <ZaloIcon />
      </a>
      <a
        aria-label="Liên hệ qua Messenger"
        className="grid size-14 place-items-center rounded-full bg-[#ff2f76] text-white shadow-[0_16px_38px_rgba(255,47,118,0.34)] ring-4 ring-white transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff2f76]"
        href={siteConfig.messengerUrl}
        rel="noreferrer"
        target="_blank"
      >
        <MessengerIcon />
      </a>
    </div>
  );
}
