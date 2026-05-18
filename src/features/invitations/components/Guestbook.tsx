"use client";

import { FormEvent, useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type GuestbookProps = {
  variant?: "default" | "green";
  className?: string;
  showSampleEntries?: boolean;
};

type GuestbookEntry = {
  name: string;
  date: Date;
  message: string;
};

const sampleMessages = [
  {
    name: "Tuấn đội bóng",
    message: "Chúc tổ ấm mới ngập tràn niềm vui và tiếng cười"
  },
  {
    name: "Bạn Tuấn Mạnh",
    message: "Mừng ngày trọng đại! Chúc hai bạn cười nhiều hơn cãi, yêu nhiều hơn giận nhé!"
  },
  {
    name: "Anh Hùng",
    message: "Chúc hai em trăm năm hạnh phúc, vợ chồng đồng lòng <3"
  },
  {
    name: "Cô Phương",
    message: "Chúc vợ chồng son mãi yêu thương, sớm có tin vui :D"
  },
  {
    name: "Chị Thanh",
    message: "Về chung một nhà, cùng nhau già đi nhé"
  }
];

function formatEntryDate(date: Date) {
  return new Intl.DateTimeFormat("vi-VN", {
    day: "numeric",
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
    month: "numeric",
    second: "2-digit",
    timeZone: "Asia/Ho_Chi_Minh",
    year: "numeric"
  }).format(date);
}

function createSampleEntries() {
  const now = Date.now();

  return sampleMessages.map((entry, index) => ({
    ...entry,
    date: new Date(now - index * 38_000)
  }));
}

export function Guestbook({ variant = "default", className, showSampleEntries = false }: GuestbookProps) {
  const initialEntries = useMemo(() => (showSampleEntries ? createSampleEntries() : []), [showSampleEntries]);
  const [entries, setEntries] = useState<GuestbookEntry[]>(initialEntries);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const hasScrollableEntries = entries.length > 4;

  const submitWish = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedMessage = message.trim();
    if (!trimmedName || !trimmedMessage) return;

    setEntries((current) => [
      {
        name: trimmedName,
        message: trimmedMessage,
        date: new Date()
      },
      ...current
    ]);
    setName("");
    setMessage("");
  };

  if (variant === "green") {
    return (
      <div className={cn("text-[var(--lp-surface)]", className)}>
        <div className="bg-[var(--lp-surface)] px-4 py-4 text-center text-[var(--lp-text)]">
          <h2 className="invite-heading text-[20px] font-semibold uppercase leading-tight tracking-[0.03em]">Sổ lưu bút</h2>
        </div>

        <form className="mx-auto mt-7 max-w-[390px] rounded-[8px] border border-[var(--lp-surface)]/18 bg-white/45 p-5 shadow-[0_12px_28px_rgba(16,42,20,0.12)]" onSubmit={submitWish}>
          <input
            className="h-11 w-full rounded-[8px] border border-[var(--lp-surface)]/28 bg-[var(--lp-cream)] px-4 text-[14px] text-[var(--lp-surface)] outline-none placeholder:text-[#6c7466] focus:border-[var(--lp-surface)] focus:ring-4 focus:ring-[var(--lp-surface)]/10"
            onChange={(event) => setName(event.target.value)}
            placeholder="Nhập tên của bạn*"
            value={name}
          />
          <textarea
            className="mt-4 min-h-28 w-full resize-none rounded-[8px] border border-[var(--lp-surface)]/28 bg-[var(--lp-cream)] p-4 text-[14px] text-[var(--lp-surface)] outline-none placeholder:text-[#6c7466] focus:border-[var(--lp-surface)] focus:ring-4 focus:ring-[var(--lp-surface)]/10"
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Nhập lời chúc của bạn*"
            value={message}
          />
          <div className="mt-5 flex justify-end">
            <button className="h-10 rounded-full bg-[var(--lp-surface)] px-7 text-[14px] font-semibold uppercase text-[var(--lp-text)] shadow-[0_10px_22px_rgba(16,42,20,0.14)] transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--lp-surface)]" type="submit">
              Gửi lời chúc
            </button>
          </div>
        </form>

        <div className={cn("mx-auto mt-8 max-w-[390px] space-y-3 pr-1", hasScrollableEntries && "max-h-[390px] overflow-y-scroll guestbook-scroll")}>
          {entries.map((entry, index) => (
            <article className="rounded-[8px] border border-[var(--lp-surface)]/16 bg-white/42 p-4 text-[var(--lp-surface)] shadow-[0_8px_18px_rgba(16,42,20,0.08)]" key={`${entry.name}-${entry.date.toISOString()}-${index}`}>
              <div className="flex items-start justify-between gap-4">
                <strong className="text-[14px] leading-6">{entry.name}</strong>
                <time className="shrink-0 text-[12px] leading-6 text-[#687261]" dateTime={entry.date.toISOString()}>
                  {formatEntryDate(entry.date)}
                </time>
              </div>
              <p className="mt-2 text-[14px] leading-6">{entry.message}</p>
            </article>
          ))}
        </div>
      </div>
    );
  }

  return (
    <article className={cn("guestbook-default rounded-[28px] p-6", className)}>
      <MessageCircle className="text-[var(--invite-primary)]" />
      <h2 className="invite-heading mt-4 text-4xl">Sổ lưu bút</h2>
      <form onSubmit={submitWish}>
        <input className="guestbook-input mt-5 h-12 w-full rounded-[18px] border px-4 outline-none" onChange={(event) => setName(event.target.value)} placeholder="Nhập tên của bạn" value={name} />
        <textarea className="guestbook-input mt-3 min-h-36 w-full rounded-[22px] border p-4 outline-none" onChange={(event) => setMessage(event.target.value)} placeholder="Gửi lời chúc đến cô dâu chú rể" value={message} />
        <button className="guestbook-submit mt-4 h-12 rounded-full px-6 font-bold" type="submit">
          Gửi lời chúc
        </button>
      </form>
      {entries.length > 0 ? (
        <div className={cn("mt-5 space-y-3", hasScrollableEntries && "max-h-[390px] overflow-y-scroll guestbook-scroll pr-1")}>
          {entries.map((entry, index) => (
            <article className="guestbook-entry rounded-[18px] border p-4" key={`${entry.name}-${entry.date.toISOString()}-${index}`}>
              <div className="flex items-start justify-between gap-4">
                <strong>{entry.name}</strong>
                <time className="guestbook-time text-xs" dateTime={entry.date.toISOString()}>
                  {formatEntryDate(entry.date)}
                </time>
              </div>
              <p className="mt-2 text-sm leading-6">{entry.message}</p>
            </article>
          ))}
        </div>
      ) : null}
    </article>
  );
}
