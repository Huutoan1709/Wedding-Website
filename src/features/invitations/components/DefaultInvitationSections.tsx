"use client";

import Image from "next/image";
import { CalendarDays, MapPin, Send } from "lucide-react";
import type { WeddingInvitationTemplate } from "@/features/invitations/data/invitationTemplates";
import { CountdownTimer, useCountdown } from "@/features/invitations/components/CountdownTimer";
import { Guestbook } from "@/features/invitations/components/Guestbook";
import { WeddingGiftBox } from "@/features/invitations/components/WeddingGiftBox";
import { addHours, buildCalendarHref } from "@/features/invitations/core/calendar";
import { formatAnnouncementDate, formatEventDate, invitationTimeZone } from "@/features/invitations/core/date";
import { buildMapEmbedSrc } from "@/features/invitations/core/map";
import { cn } from "@/lib/utils";

type InvitationSectionProps = {
  invitation: WeddingInvitationTemplate;
};

type SharedInfoSectionProps = InvitationSectionProps & {
  className?: string;
  contentClassName?: string;
  title?: string;
};

function DateDivider({ date }: { date: ReturnType<typeof formatAnnouncementDate> }) {
  return (
    <div className="flex items-center justify-center">
      <span className="w-[76px] text-right text-[11px] font-bold uppercase md:w-[90px]">{date.weekday.replace("THỨ ", "")}</span>
      <span className="mx-3 h-7 w-px bg-current opacity-55 md:mx-4" />
      <span className="text-[30px] font-bold leading-none md:text-[34px]">{date.day}</span>
      <span className="mx-3 h-7 w-px bg-current opacity-55 md:mx-4" />
      <span className="w-[76px] text-left text-[11px] font-bold uppercase md:w-[90px]">THÁNG {date.month}</span>
    </div>
  );
}

function CountdownText({ startsAt }: { startsAt: string }) {
  const countdown = useCountdown(startsAt);

  return (
    <p className="mt-3 text-[13px]">
      {countdown.days} days {countdown.hours} hours {countdown.minutes} min {countdown.seconds} sec
    </p>
  );
}

function CalendarPreview({ startsAt }: { startsAt: string }) {
  const eventDate = new Date(startsAt);
  const day = Number(new Intl.DateTimeFormat("en-US", { day: "numeric", timeZone: "Asia/Ho_Chi_Minh" }).format(eventDate));
  const monthIndex = Number(new Intl.DateTimeFormat("en-US", { month: "numeric", timeZone: "Asia/Ho_Chi_Minh" }).format(eventDate)) - 1;
  const month = new Intl.DateTimeFormat("en-US", { month: "long", timeZone: "Asia/Ho_Chi_Minh" }).format(eventDate);
  const year = Number(new Intl.DateTimeFormat("en-US", { year: "numeric", timeZone: "Asia/Ho_Chi_Minh" }).format(eventDate));
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const firstMondayOffset = firstDay === 0 ? 6 : firstDay - 1;
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  return (
    <div className="mx-auto mt-8 w-full max-w-[260px] overflow-hidden rounded-md border border-current bg-[var(--wedding-info-calendar-bg,transparent)] text-center text-current">
      <div className="border-b border-current px-4 py-3 text-[13px] font-bold">
        {month} {year}
      </div>
      <div className="grid grid-cols-7 gap-y-3 px-4 py-4 text-[10px]">
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((item) => (
          <span className="font-bold opacity-55" key={item}>
            {item}
          </span>
        ))}
        {Array.from({ length: firstMondayOffset }).map((_, index) => (
          <span key={`blank-${index}`} />
        ))}
        {days.map((item) => (
          <span className={cn("mx-auto grid size-5 place-items-center rounded-full", item === day && "bg-current font-bold text-[var(--wedding-info-calendar-selected-text,#ffffff)]")} key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function InviteHero({ invitation }: InvitationSectionProps) {
  return (
    <section className="invite-section bg-[var(--invite-surface)]">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <p className="invite-kicker text-xs font-bold uppercase tracking-[0.36em] text-[var(--invite-primary)]">The wedding of</p>
          <h2 className="invite-couple-names mt-5 text-5xl leading-tight md:text-7xl">
            {invitation.groom.name}
            <span className="invite-ampersand block text-3xl text-[var(--invite-primary)]">&</span>
            {invitation.bride.name}
          </h2>
          <p className="mt-6 text-lg leading-8 text-[var(--invite-muted)]">{invitation.story}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[invitation.groom, invitation.bride].map((person) => (
            <div className="invite-float overflow-hidden rounded-[28px] bg-white p-3 shadow-xl" key={person.name}>
              <Image alt={person.name} className="aspect-[3/4] rounded-[20px] object-cover" height={520} src={person.portrait} width={390} />
              <p className="mt-3 text-center text-sm font-bold text-[var(--invite-primary)]">{person.role}</p>
              <p className="invite-person-name text-center text-2xl">{person.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CeremonyInfo({ invitation, className, contentClassName, title = "CEREMONY INFO" }: SharedInfoSectionProps) {
  const date = formatAnnouncementDate(invitation.event.startsAt);

  return (
    <section className={cn("invite-section relative flex min-h-[100svh] items-center bg-transparent text-current", className)}>
      <div className={cn("relative z-10 mb-12 flex w-full flex-col items-center gap-6 text-center md:mb-16 md:gap-8", contentClassName)}>
        <h2 className="text-[16px] font-bold uppercase tracking-[0.03em] md:text-[18px]">{title}</h2>

        <div className="flex w-full items-start justify-center gap-3 md:gap-8">
          {[
            { label: "Groom family", person: invitation.groom },
            { label: "Bride family", person: invitation.bride }
          ].map((item, index) => (
            <div className="contents" key={item.label}>
              {index > 0 && <div className="hidden h-[60px] w-px self-center bg-current opacity-45 md:block" />}
              <div className="flex max-w-[160px] min-w-0 flex-1 flex-col items-center gap-1 text-center md:max-w-[280px]">
                <span className="text-[13px] font-bold md:text-[14px]">Mr. & Mrs.</span>
                <span className="text-[14px] font-semibold md:text-[15px]">{item.person.parents.father}</span>
                <span className="text-[14px] font-semibold md:text-[15px]">{item.person.parents.mother}</span>
                <div className="mt-2 flex flex-col whitespace-pre-line text-[11px] leading-tight md:text-[12px]">
                  <span>{item.person.parents.address}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 whitespace-pre-line text-[13px] font-bold uppercase leading-5 md:text-[14px]">
          <span>{"WE JOYFULLY ANNOUNCE\nTHE WEDDING OF OUR CHILDREN"}</span>
        </div>

        <div className="flex w-full flex-col items-center gap-2">
          <h3 className="flex w-full items-center justify-center whitespace-nowrap text-[46px] leading-[60px] [font-family:var(--wedding-info-script-font,var(--invite-script-font,inherit))] md:text-[64px] md:leading-[100px]">
            {invitation.groom.name}
          </h3>
          <div className="text-[10px] font-bold uppercase tracking-[0.28em]">{invitation.groom.role}</div>
          <div className="text-[28px] [font-family:var(--wedding-info-script-font,var(--invite-script-font,inherit))] md:text-[34px]">&</div>
          <h3 className="flex w-full items-center justify-center whitespace-nowrap text-[46px] leading-[60px] [font-family:var(--wedding-info-script-font,var(--invite-script-font,inherit))] md:text-[64px] md:leading-[100px]">
            {invitation.bride.name}
          </h3>
          <div className="text-[10px] font-bold uppercase tracking-[0.28em]">{invitation.bride.role}</div>
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <span className="whitespace-pre-line text-center text-[12px] font-bold uppercase md:text-[13px]">
            {`WEDDING CEREMONY AT\n${invitation.event.venue}`}
          </span>
          <p className="text-center text-[12px] font-bold uppercase md:text-[13px]">AT</p>
          <p className="text-[20px] font-bold md:text-[24px]">{date.time}</p>
          <DateDivider date={date} />
          <div className="text-[20px] md:text-[22px]">{date.year}</div>
          <div className="max-w-[320px] text-[13px] md:text-[14px]">{invitation.event.address}</div>
        </div>
      </div>
    </section>
  );
}

export function FamilyAnnouncement(props: SharedInfoSectionProps) {
  return <CeremonyInfo {...props} title={props.title || "THONG TIN LE CUOI"} />;
}

export function ReceptionInfo({ invitation, onRsvp, className, contentClassName, title = "RECEPTION INFO" }: SharedInfoSectionProps & { onRsvp?: () => void }) {
  const event = invitation.receptionEvent || invitation.event;
  const date = formatAnnouncementDate(event.startsAt);
  const calendarHref = buildCalendarHref(invitation, event);
  const receptionTime = date.time;
  const guestReceptionTime = new Intl.DateTimeFormat("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: invitationTimeZone
  }).format(event.guestStartsAt ? new Date(event.guestStartsAt) : addHours(event.startsAt, -0.5));

  return (
    <section className={cn("invite-section relative flex min-h-[100svh] items-center bg-transparent px-6 py-10 text-center text-current md:px-14", className)}>
      <div className={cn("relative z-10 mx-auto flex w-full max-w-[520px] flex-col items-center", contentClassName)}>
        <h2 className="text-[18px] font-bold uppercase tracking-[0.03em]">{title}</h2>

        <p className="mt-20 text-[16px] font-bold uppercase tracking-[0.02em] md:text-[18px]">THE RECEPTION WILL TAKE PLACE AT:</p>
        <p className="mt-7 text-[28px] md:text-[30px]">{receptionTime}</p>
        <div className="mt-8">
          <DateDivider date={date} />
        </div>
        <p className="mt-8 text-[20px] font-bold md:text-[22px]">{date.year}</p>

        <div className="mt-8 grid grid-cols-2 gap-10 text-center">
          <div>
            <p className="text-[10px] font-bold uppercase">GUEST RECEPTION</p>
            <p className="mt-2 text-[16px]">{guestReceptionTime}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase">RECEPTION</p>
            <p className="mt-2 text-[16px]">{receptionTime}</p>
          </div>
        </div>

        <p className="mt-9 text-[15px]">Countdown</p>
        <CountdownText startsAt={event.startsAt} />
        <CalendarPreview startsAt={event.startsAt} />

        <a className="mt-8 text-[12px] font-bold underline underline-offset-2" href={calendarHref} rel="noreferrer" target="_blank">
          Add to Calendar
        </a>

        <button
          className="mt-14 flex h-10 min-w-[200px] items-center justify-center rounded-full border border-current bg-[var(--wedding-info-button-bg,currentColor)] px-8 text-[13px] font-bold uppercase text-[var(--wedding-info-button-text,#ffffff)] shadow-[0_18px_40px_rgba(0,0,0,0.14)]"
          onClick={onRsvp}
          type="button"
        >
          Confirm Attendance
        </button>
      </div>
    </section>
  );
}

export function EventDetails({ invitation }: InvitationSectionProps) {
  const mapSrc = buildMapEmbedSrc(invitation.event.mapQuery);

  return (
    <section className="invite-section bg-[var(--invite-background)]">
      <div className="text-center">
        <CalendarDays className="mx-auto text-[var(--invite-primary)]" size={36} />
        <h2 className="invite-heading mt-4 text-4xl md:text-6xl">{invitation.event.title}</h2>
        <p className="mt-4 text-lg text-[var(--invite-muted)]">{formatEventDate(invitation.event.startsAt)}</p>
      </div>
      <CountdownTimer
        startsAt={invitation.event.startsAt}
        className="mt-8"
        itemClassName="rounded-[18px] bg-white p-4 shadow-sm"
        valueClassName="text-2xl font-black text-[var(--invite-primary)] md:text-4xl"
        labelClassName="mt-1 text-xs font-bold uppercase text-[var(--invite-muted)]"
      />
      <div className="mt-8 overflow-hidden rounded-[28px] bg-white shadow-xl">
        <div className="p-5">
          <div className="flex gap-3 text-[var(--invite-text)]">
            <MapPin className="mt-1 shrink-0 text-[var(--invite-primary)]" />
            <div>
              <p className="font-bold">{invitation.event.venue}</p>
              <p className="mt-1 text-sm text-[var(--invite-muted)]">{invitation.event.address}</p>
            </div>
          </div>
        </div>
        <iframe className="h-72 w-full border-0" loading="lazy" src={mapSrc} title="Wedding map" />
      </div>
    </section>
  );
}

export function GuestbookAndGift({ invitation, onRsvp }: InvitationSectionProps & { onRsvp: () => void }) {
  return (
    <section className="invite-section bg-white">
      <div className="grid gap-5 md:grid-cols-2">
        <Guestbook />
        <WeddingGiftBox bank={invitation.bank} />
      </div>
      <button
        className="mx-auto mt-8 flex h-14 items-center gap-2 rounded-full bg-[var(--invite-primary)] px-8 font-bold text-white shadow-lg"
        onClick={onRsvp}
        type="button"
      >
        <Send size={18} />
        Xac nhan tham du
      </button>
    </section>
  );
}
