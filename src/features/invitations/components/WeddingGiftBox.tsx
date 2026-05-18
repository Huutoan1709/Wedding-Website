"use client";

import { Gift } from "lucide-react";
import { useState } from "react";
import type { WeddingInvitationTemplate } from "@/features/invitations/data/invitationTemplates";

type WeddingGiftBoxProps = {
  bank: WeddingInvitationTemplate["bank"];
  variant?: "default" | "green";
};

export function WeddingGiftBox({ bank, variant = "default" }: WeddingGiftBoxProps) {
  const [open, setOpen] = useState(false);

  if (variant === "green") {
    return (
      <div className="mt-10 text-center text-[var(--lp-surface)]">
        <div className="bg-[var(--lp-surface)] px-4 py-4 text-[var(--lp-text)]">
          <Gift className="mx-auto mb-3" size={28} strokeWidth={1.6} />
          <h2 className="invite-heading text-[20px] font-semibold uppercase leading-tight tracking-[0.03em]">Hộp mừng cưới</h2>
        </div>

        <button
          aria-expanded={open}
          className="group relative mx-auto mt-7 block h-[172px] w-[270px] overflow-hidden rounded-[10px] border border-[var(--lp-surface)]/25 bg-[var(--lp-surface)] text-[var(--lp-text)] shadow-[0_16px_34px_rgba(16,42,20,0.2)] transition hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--lp-surface)]"
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          <span className="absolute inset-x-0 top-0 h-[58px] origin-top bg-[linear-gradient(180deg,rgba(233,206,158,0.26),rgba(233,206,158,0.08))] transition duration-500 group-aria-expanded:-translate-y-8 group-aria-expanded:rotate-x-12" />
          <span className="absolute left-0 top-0 h-full w-1/2 origin-left bg-[linear-gradient(135deg,rgba(233,206,158,0.1),transparent_48%)]" />
          <span className="absolute right-0 top-0 h-full w-1/2 origin-right bg-[linear-gradient(225deg,rgba(233,206,158,0.1),transparent_48%)]" />
          <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[var(--lp-line)]" />
          <span className="absolute inset-x-0 top-[58px] h-px bg-[var(--lp-line)]" />
          <span className="absolute left-1/2 top-[58px] grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[var(--lp-line)] bg-[var(--lp-surface)] text-[30px] shadow-[var(--lp-shadow)]">
            囍
          </span>
          <span className="relative z-10 flex h-full flex-col items-center justify-end px-5 pb-5">
            <span className="text-[15px] font-semibold uppercase tracking-[0.08em]">{open ? "Ẩn thông tin" : "Mở phong bao"}</span>
            <span className="mt-2 text-[12px] text-[var(--lp-muted)]">Chạm để xem thông tin mừng cưới</span>
          </span>
        </button>

        <div
          className={`grid transition-all duration-500 ease-out ${open ? "mt-6 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"}`}
          data-ignore-auto-scroll-toggle
        >
          <div className="overflow-hidden">
            <div className="rounded-[8px] border border-[var(--lp-surface)]/18 bg-white/45 p-5 text-sm shadow-[0_12px_28px_rgba(16,42,20,0.12)]">
              <p className="text-[#687261]">Tên tài khoản</p>
              <p className="mt-1 font-semibold">{bank.accountName}</p>
              <p className="mt-4 text-[#687261]">Ngân hàng</p>
              <p className="mt-1 font-semibold">{bank.bankName}</p>
              <p className="mt-4 text-[#687261]">Số tài khoản</p>
              <p className="mt-1 font-semibold tracking-[0.18em]">{bank.accountNumber}</p>
              {bank.transferNote ? (
                <>
                  <p className="mt-4 text-[#687261]">Nội dung chuyển khoản</p>
                  <p className="mt-1 font-semibold">{bank.transferNote}</p>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="rounded-[28px] bg-[var(--invite-secondary)] p-6 text-white">
      <Gift />
      <h2 className="invite-heading mt-4 text-4xl">Hộp mừng cưới</h2>
      <div className="mt-5 rounded-[22px] bg-white/10 p-5">
        <p className="text-sm text-white/70">Tên tài khoản</p>
        <p className="font-bold">{bank.accountName}</p>
        <p className="mt-4 text-sm text-white/70">Ngân hàng</p>
        <p className="font-bold">{bank.bankName}</p>
        <p className="mt-4 text-sm text-white/70">Số tài khoản</p>
        <p className="font-bold tracking-[0.18em]">{bank.accountNumber}</p>
      </div>
    </article>
  );
}
