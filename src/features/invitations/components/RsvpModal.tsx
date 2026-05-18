"use client";

import { Check, X } from "lucide-react";

type RsvpModalProps = {
  open: boolean;
  onClose: () => void;
};

export function RsvpModal({ open, onClose }: RsvpModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/58 px-4 py-6">
      <form className="relative w-full max-w-[560px] rounded-[20px] bg-white px-7 py-9 text-[#111827] shadow-[0_30px_90px_rgba(0,0,0,0.32)]">
        <button
          aria-label="Đóng"
          className="absolute right-5 top-5 grid size-10 place-items-center rounded-full bg-[#f3f4f6] text-[#6b7280] transition hover:bg-[#e5e7eb] hover:text-[#111827]"
          onClick={onClose}
          type="button"
        >
          <X size={22} strokeWidth={1.8} />
        </button>

        <div className="pr-12">
          <h3 className="text-[28px] font-bold leading-tight tracking-[-0.01em] text-[#111827]">Xác nhận tham dự</h3>
          <p className="mt-3 max-w-[460px] text-[16px] leading-7 text-[#8b95a5]">
            Sự hiện diện của bạn là niềm vinh hạnh cho gia đình chúng tôi. Xin xác nhận để chúng tôi chuẩn bị chu đáo nhất cho bạn.
          </p>
        </div>

        <label className="mt-8 block text-[16px] font-bold text-[#374151]" htmlFor="rsvp-name">
          Tên của bạn
        </label>
        <input
          className="mt-3 h-14 w-full rounded-[14px] border border-[#d9dde5] bg-white px-5 text-[16px] text-[#111827] outline-none transition placeholder:text-[#a8b0bf] focus:border-[#aeb8c8] focus:ring-4 focus:ring-[#d9dde5]/40"
          id="rsvp-name"
          placeholder="Nhập tên của bạn"
        />

        <fieldset className="mt-6">
          <legend className="text-[16px] font-bold text-[#374151]">Bạn sẽ đến chứ?</legend>
          <div className="mt-3 grid gap-3">
            <label className="flex min-h-16 cursor-pointer items-center rounded-[16px] border border-[#e5e7eb] bg-[#fbfcfd] px-4 text-[16px] font-bold text-[#374151] shadow-[0_1px_2px_rgba(17,24,39,0.04)] transition hover:border-[#cfd5df]">
              <input className="peer sr-only" defaultChecked name="attendance" type="radio" value="yes" />
              <span className="mr-4 grid size-10 shrink-0 place-items-center rounded-full bg-[#e5e7eb] text-[#6b7280] transition peer-checked:bg-[#dfe3ea] peer-checked:text-[#4b5563]">
                <Check size={21} strokeWidth={1.8} />
              </span>
              Tôi sẽ đến
            </label>

            <label className="flex min-h-16 cursor-pointer items-center rounded-[16px] border border-[#e5e7eb] bg-[#fbfcfd] px-4 text-[16px] font-bold text-[#374151] shadow-[0_1px_2px_rgba(17,24,39,0.04)] transition hover:border-[#cfd5df]">
              <input className="peer sr-only" name="attendance" type="radio" value="no" />
              <span className="mr-4 grid size-10 shrink-0 place-items-center rounded-full bg-[#e5e7eb] text-[#6b7280] transition peer-checked:bg-[#dfe3ea] peer-checked:text-[#4b5563]">
                <X size={21} strokeWidth={1.8} />
              </span>
              Rất tiếc, tôi không thể đến
            </label>
          </div>
        </fieldset>

        <button className="mt-5 h-[60px] w-full rounded-[13px] bg-[#b7bca8] text-[17px] font-bold text-white transition hover:bg-[#a9af99]" onClick={onClose} type="button">
          Gửi xác nhận
        </button>
      </form>
    </div>
  );
}
