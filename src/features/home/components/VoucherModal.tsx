"use client";

import { useEffect, useState } from "react";
import { Gift, Sparkles, X } from "lucide-react";

export function VoucherModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 3000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    document.documentElement.classList.add("modal-scroll-locked");
    document.body.classList.add("modal-scroll-locked");

    return () => {
      document.documentElement.classList.remove("modal-scroll-locked");
      document.body.classList.remove("modal-scroll-locked");
    };
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 grid touch-none place-items-center overflow-hidden overscroll-none bg-[#15151f]/45 px-4 py-5 backdrop-blur-sm sm:px-6">
      <div className="relative w-full max-w-[560px] overflow-hidden rounded-[24px] border border-white/75 bg-white text-[#15151f] shadow-[0_28px_72px_rgba(21,21,31,0.24)] sm:rounded-[28px]">
        <div className="pointer-events-none absolute -right-14 -top-14 size-36 rounded-full bg-[#ff4f8b]/14 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-14 size-40 rounded-full bg-[#4e77ff]/12 blur-2xl" />
        <button
          className="absolute right-4 top-4 z-20 grid size-9 place-items-center rounded-full bg-[#f3f4f8] text-[#60647a] transition hover:bg-[#e7e9f2]"
          onClick={() => setOpen(false)}
          type="button"
          aria-label="Đóng voucher"
        >
          <X size={18} />
        </button>

        <div className="relative max-h-[calc(100dvh-40px)] touch-pan-y overflow-y-auto overscroll-contain p-5 pr-14 sm:max-h-[calc(100dvh-64px)] sm:p-7 sm:pr-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#fff0f6] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.1em] text-[#ff4f8b]">
            <Sparkles size={14} />
            Ưu đãi trong ngày
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-[116px_1fr] sm:items-center">
            <div className="flex h-24 w-32 items-center justify-center gap-3 rounded-[22px] bg-[#15151f] px-4 py-3 text-white shadow-[0_14px_34px_rgba(21,21,31,0.2)] sm:h-28 sm:w-28 sm:flex-col sm:gap-1">
              <Gift className="text-[#ffb8d1] sm:mb-1" size={24} />
              <span className="text-4xl font-black leading-none">50%</span>
            </div>
            <div>
              <h2 className="text-2xl font-black leading-tight tracking-[-0.03em] sm:text-[30px]">
                Giảm 50% khi làm thiệp cho cả nhà trai và nhà gái
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-[#60647a]">
                Phù hợp khi cần 2 link thiệp riêng, nội dung riêng cho từng bên nhưng vẫn đồng bộ phong cách và album cưới.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-[20px] border border-[#e8eaf5] bg-[#f7f8ff] p-4 text-[15px] leading-7 text-[#3c4054] sm:p-5">
            Chỉ cần gửi thông tin qua Zalo/Facebook/Instagram, bên mình hỗ trợ chỉnh nội dung A-Z và bàn giao link để chia sẻ khách mời.
          </div>
        </div>
      </div>
    </div>
  );
}
