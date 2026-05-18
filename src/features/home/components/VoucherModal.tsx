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
    <div className="fixed inset-0 z-50 grid place-items-center bg-[#15151f]/45 px-4 py-4 backdrop-blur-sm">
      <div className="relative max-h-[calc(100svh-32px)] w-full max-w-[420px] overflow-y-auto rounded-[24px] border border-white/70 bg-white p-4 text-[#15151f] shadow-[0_28px_72px_rgba(21,21,31,0.24)] sm:p-5">
        <div className="absolute -right-14 -top-14 size-36 rounded-full bg-[#ff4f8b]/14 blur-2xl" />
        <div className="absolute -bottom-16 -left-14 size-40 rounded-full bg-[#4e77ff]/12 blur-2xl" />
        <button
          className="absolute right-4 top-4 z-10 grid size-8 place-items-center rounded-full bg-[#f3f4f8] text-[#60647a] transition hover:bg-[#e7e9f2]"
          onClick={() => setOpen(false)}
          type="button"
          aria-label="Đóng voucher"
        >
          <X size={16} />
        </button>

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#fff0f6] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.1em] text-[#ff4f8b]">
            <Sparkles size={14} />
            Ưu đãi trong ngày
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-[92px_1fr] sm:items-center">
            <div className="flex items-center justify-center gap-2 rounded-[20px] bg-[#15151f] px-4 py-3 text-white shadow-[0_14px_34px_rgba(21,21,31,0.2)] sm:grid sm:aspect-square sm:gap-0 sm:px-0 sm:py-0">
              <Gift className="text-[#ffb8d1] sm:mb-1" size={24} />
              <span className="text-3xl font-black">50%</span>
            </div>
            <div>
              <h2 className="text-xl font-black leading-tight tracking-[-0.03em] sm:text-2xl">
                Giảm 50% khi làm thiệp cho cả nhà trai và nhà gái
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#60647a]">
                Phù hợp khi cần 2 link thiệp riêng, nội dung riêng cho từng bên nhưng vẫn đồng bộ phong cách và album cưới.
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-[#e8eaf5] bg-[#f7f8ff] p-3.5 text-sm leading-6 text-[#3c4054]">
            Chỉ cần gửi thông tin qua Zalo/Facebook/Instagram, bên mình hỗ trợ chỉnh nội dung A-Z và bàn giao link để chia sẻ khách mời.
          </div>
        </div>
      </div>
    </div>
  );
}
