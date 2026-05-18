"use client";

import { useEffect, useState } from "react";
import { Gift, Sparkles, X } from "lucide-react";

export function VoucherModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 3000);

    return () => window.clearTimeout(timer);
  }, []);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-[#15151f]/45 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-[520px] overflow-hidden rounded-[32px] border border-white/70 bg-white p-6 text-[#15151f] shadow-[0_34px_90px_rgba(21,21,31,0.28)]">
        <div className="absolute -right-16 -top-16 size-44 rounded-full bg-[#ff4f8b]/16 blur-2xl" />
        <div className="absolute -bottom-20 -left-16 size-52 rounded-full bg-[#4e77ff]/14 blur-2xl" />
        <button
          className="absolute right-5 top-5 z-10 grid size-9 place-items-center rounded-full bg-[#f3f4f8] text-[#60647a] transition hover:bg-[#e7e9f2]"
          onClick={() => setOpen(false)}
          type="button"
          aria-label="Đóng voucher"
        >
          <X size={18} />
        </button>

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#fff0f6] px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-[#ff4f8b]">
            <Sparkles size={16} />
            Ưu đãi trong ngày
          </div>
          <div className="mt-7 grid gap-5 sm:grid-cols-[120px_1fr] sm:items-center">
            <div className="grid aspect-square place-items-center rounded-[30px] bg-[#15151f] text-white shadow-[0_18px_44px_rgba(21,21,31,0.22)]">
              <Gift className="mb-2 text-[#ffb8d1]" size={34} />
              <span className="text-4xl font-black">50%</span>
            </div>
            <div>
              <h2 className="text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl">
                Giảm 50% khi làm thiệp cho cả nhà trai và nhà gái
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-[#60647a]">
                Phù hợp khi cần 2 link thiệp riêng, nội dung riêng cho từng bên nhưng vẫn đồng bộ phong cách và album cưới.
              </p>
            </div>
          </div>

          <div className="mt-7 rounded-2xl border border-[#e8eaf5] bg-[#f7f8ff] p-4 text-sm leading-6 text-[#3c4054]">
            Chỉ cần gửi thông tin qua Zalo/Facebook/Instagram, bên mình hỗ trợ chỉnh nội dung A-Z và bàn giao link để chia sẻ khách mời.
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex h-12 flex-1 items-center justify-center rounded-full bg-[#ff4f8b] px-5 text-sm font-black text-white shadow-[0_16px_34px_rgba(255,79,139,0.28)]"
              href="#templates"
              onClick={() => setOpen(false)}
            >
              Xem mẫu thiệp
            </a>
            <button
              className="inline-flex h-12 flex-1 items-center justify-center rounded-full border border-[#dfe2ef] bg-white px-5 text-sm font-black text-[#15151f]"
              onClick={() => setOpen(false)}
              type="button"
            >
              Để sau
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
