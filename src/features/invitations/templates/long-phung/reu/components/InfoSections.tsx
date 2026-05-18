import { CountdownTimer } from "@/features/invitations/components/CountdownTimer";
import type { WeddingInvitationTemplate } from "@/features/invitations/core/types";
import { addHours, buildCalendarHref } from "@/features/invitations/core/calendar";
import { formatAnnouncementDate, invitationTimeZone } from "@/features/invitations/core/date";

type InfoSectionProps = {
  invitation: WeddingInvitationTemplate;
};

type ReceptionSectionProps = InfoSectionProps & {
  onRsvp: () => void;
};

type DateParts = ReturnType<typeof formatAnnouncementDate>;

const creamPatternStyle = {
  backgroundImage: 'url("/images/invitation/double-dragon.webp")',
  backgroundPositionY: "20%",
  backgroundSize: "360px"
};

const weekDays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

function getCalendarParts(startsAt: string) {
  const date = new Date(startsAt);
  const parts = new Intl.DateTimeFormat("vi-VN", {
    day: "numeric",
    month: "numeric",
    timeZone: invitationTimeZone,
    year: "numeric"
  }).formatToParts(date);
  const year = Number(parts.find((part) => part.type === "year")?.value);
  const month = Number(parts.find((part) => part.type === "month")?.value);
  const day = Number(parts.find((part) => part.type === "day")?.value);
  const firstDay = new Date(year, month - 1, 1).getDay();
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;
  const daysInMonth = new Date(year, month, 0).getDate();

  return { day, daysInMonth, month, startOffset, year };
}

function DateDivider({ date, tone = "green" }: { date: DateParts; tone?: "green" | "gold" }) {
  const textColor = tone === "gold" ? "text-[var(--lp-text)]" : "text-[var(--lp-surface)]";

  return (
    <div className={`flex items-center justify-center ${textColor}`}>
      <span className="w-[78px] text-right text-[13px] font-semibold uppercase leading-none">{date.weekday}</span>
      <span className="mx-4 h-10 w-px bg-current opacity-80" />
      <span className="text-[36px] font-semibold leading-none">{date.day}</span>
      <span className="mx-4 h-10 w-px bg-current opacity-80" />
      <span className="w-[78px] text-left text-[13px] font-semibold uppercase leading-none">THÁNG {date.month}</span>
    </div>
  );
}

function FamilyColumn({ parents, address }: { parents: WeddingInvitationTemplate["groom"]["parents"]; address: string }) {
  return (
    <div className="min-w-0 text-center text-[var(--lp-surface)]">
      <div className="mt-2 space-y-1">
        <p className="text-[13px] font-semibold leading-5">{parents.father}</p>
        <p className="text-[13px] font-semibold leading-5">{parents.mother}</p>
      </div>
      <p className="mx-auto mt-2 max-w-[155px] text-[11px] font-light leading-[1.65] text-[#4e5848]">{address}</p>
    </div>
  );
}

function CoupleNames({ invitation }: InfoSectionProps) {
  return (
    <div className="flex flex-col items-center text-center text-[var(--lp-surface)]">
      <h3 className="green-couple-names max-w-full text-[44px] leading-[1.08]">{invitation.groom.name}</h3>
      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#5f6458]">Trưởng Nam / Groom</p>
      <div className="green-couple-names py-4 text-[30px] leading-none">&</div>
      <h3 className="green-couple-names max-w-full text-[44px] leading-[1.08]">{invitation.bride.name}</h3>
      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#5f6458]">Trưởng Nữ / Bride</p>
    </div>
  );
}

function WeddingCalendarCard({ startsAt }: { startsAt: string }) {
  const calendar = getCalendarParts(startsAt);
  const cells = [
    ...Array.from({ length: calendar.startOffset }, (_, index) => ({ key: `empty-${index}`, value: null })),
    ...Array.from({ length: calendar.daysInMonth }, (_, index) => ({ key: `day-${index + 1}`, value: index + 1 }))
  ];

  return (
    <div
      className="relative mx-auto mt-8 max-w-[350px] overflow-hidden rounded-[8px] border border-[var(--lp-surface)]/20 bg-cover bg-center shadow-[0_12px_28px_rgba(16,42,20,0.16)]"
      style={{ backgroundImage: 'url("/images/invitation/long-phung-reu/album-7.jpeg")' }}
    >
      <div className="absolute inset-0 bg-[var(--lp-surface)]/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--lp-surface)]/34 via-[var(--lp-surface)]/28 to-[var(--lp-surface)]/54" />

      <div className="relative border-b border-[var(--lp-text)]/20 bg-[var(--lp-surface)]/82 px-4 py-3 text-[var(--lp-text)]">
        <p className="text-[15px] font-semibold uppercase">Tháng {calendar.month} / {calendar.year}</p>
      </div>
      <div className="relative grid grid-cols-7 border-b border-[var(--lp-text)]/18 bg-[var(--lp-surface)]/18 text-[11px] font-semibold uppercase text-[var(--lp-text)]">
        {weekDays.map((day) => (
          <span className="py-3" key={day}>{day}</span>
        ))}
      </div>
      <div className="relative grid grid-cols-7 gap-y-1 px-3 py-4 text-[13px] font-semibold text-[var(--lp-text)]">
        {cells.map((cell) => (
          <span className="grid h-8 place-items-center" key={cell.key}>
            {cell.value ? (
              cell.value === calendar.day ? (
                <span className="relative grid size-8 place-items-center">
                  <span className="absolute top-[4px] size-6 rotate-45 rounded-br-[7px] bg-[#b91c1c] shadow-[0_8px_18px_rgba(185,28,28,0.28)] before:absolute before:-left-3 before:top-0 before:size-6 before:rounded-full before:bg-[#b91c1c] after:absolute after:-top-3 after:left-0 after:size-6 after:rounded-full after:bg-[#b91c1c]" />
                  <span className="relative z-10 text-white [text-shadow:none]">{cell.value}</span>
                </span>
              ) : (
                <span>{cell.value}</span>
              )
            ) : null}
          </span>
        ))}
      </div>
    </div>
  );
}

function CountdownCalendarBlock({ startsAt }: { startsAt: string }) {
  return (
    <div className="mt-9 w-full">
      <h3 className="invite-heading text-[20px] font-semibold uppercase tracking-[0.03em]">Countdown</h3>
      <CountdownTimer
        startsAt={startsAt}
        labels={{ days: "Ngày", hours: "Giờ", minutes: "Phút", seconds: "Giây" }}
        splitDigits={false}
        className="mt-5 gap-2"
        itemClassName="min-w-0"
        valueClassName="h-12 max-w-none rounded-[6px] border-[var(--lp-surface)]/25 bg-[var(--lp-surface)] px-2 text-[18px] font-semibold text-[var(--lp-text)] shadow-[0_8px_18px_rgba(16,42,20,0.14)] sm:text-[18px] md:text-[18px]"
        labelClassName="text-[10px] font-semibold text-[#5f6458] sm:text-[10px]"
      />
      <WeddingCalendarCard startsAt={startsAt} />
    </div>
  );
}

export function LongPhungReuCeremonyInfo({ invitation }: InfoSectionProps) {
  const date = formatAnnouncementDate(invitation.event.startsAt);

  return (
    <section className="relative overflow-hidden bg-[var(--lp-cream)] pb-8 text-center text-[var(--lp-surface)]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-multiply" style={creamPatternStyle} />

      <div className="relative z-10 bg-[var(--lp-surface)] px-4 py-4 text-[var(--lp-text)]">
        <h2 className="invite-heading text-[20px] font-semibold uppercase leading-none tracking-[0.03em]">Thông tin lễ cưới</h2>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[390px] flex-col items-center px-5 pt-8">
        <div className="grid w-full grid-cols-[1fr_auto_1fr] gap-5">
          <FamilyColumn address={invitation.groom.parents.address} parents={invitation.groom.parents} />
          <span className="self-center h-24 w-px bg-[var(--lp-surface)]/45" />
          <FamilyColumn address={invitation.bride.parents.address} parents={invitation.bride.parents} />
        </div>

        <div className="mt-10 text-center text-[14px] font-semibold uppercase leading-6">
          <p>Trân trọng báo tin</p>
          <p>Lễ thành hôn của con chúng tôi</p>
        </div>

        <div className="mt-9 w-full">
          <CoupleNames invitation={invitation} />
        </div>

        <div className="mt-10 flex flex-col items-center text-center">
          <p className="max-w-[360px] text-[14px] font-semibold uppercase leading-6">Lễ thành hôn được cử hành tại tư gia</p>
          <p className="mt-4 text-[14px] font-semibold uppercase">Vào lúc</p>
          <p className="mt-5 text-[26px] font-semibold leading-none">{date.time}</p>
          <div className="mt-6">
            <DateDivider date={date} />
          </div>
          <p className="mt-6 text-[24px] font-semibold">{date.year}</p>
          {invitation.lunarDate && <p className="mt-5 max-w-[330px] text-[13px] leading-6">Tức ngày {invitation.lunarDate}</p>}
        </div>
      </div>
    </section>
  );
}

export function LongPhungReuReceptionInfo({ invitation, onRsvp }: ReceptionSectionProps) {
  const event = invitation.receptionEvent || invitation.event;
  const date = formatAnnouncementDate(event.startsAt);
  const calendarHref = buildCalendarHref(invitation, event);
  const receptionTime = date.time;
  const guestReceptionTime = new Intl.DateTimeFormat("vi-VN", {
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
    timeZone: invitationTimeZone
  }).format(event.guestStartsAt ? new Date(event.guestStartsAt) : addHours(event.startsAt, -0.5));

  return (
    <section className="relative overflow-hidden bg-[var(--lp-cream)] pb-8 text-center text-[var(--lp-surface)]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-multiply" style={creamPatternStyle} />

      <div className="relative z-10 bg-[var(--lp-surface)] px-4 py-4 text-[var(--lp-text)]">
        <h2 className="invite-heading text-[20px] font-semibold uppercase leading-tight tracking-[0.03em]">Thông tin tiệc cưới</h2>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[390px] flex-col items-center px-5 pt-8 text-center">
        <div className="flex flex-col items-center">
          <p className="max-w-[330px] text-[14px] font-semibold uppercase leading-6">Tiệc cưới được tổ chức tại</p>
          <p className="mt-5 max-w-[340px] text-[16px] font-semibold uppercase leading-6">{event.venue}</p>
          <p className="mt-3 max-w-[330px] text-[13px] leading-6 text-[#4e5848]">{event.address}</p>
        </div>

        <div className="mt-9 flex flex-col items-center">
          <p className="text-[14px] font-semibold uppercase leading-6">Vào lúc</p>
          <p className="mt-6 text-[26px] font-semibold leading-none">{receptionTime}</p>
          <div className="mt-6">
            <DateDivider date={date} />
          </div>
          <p className="mt-6 text-[24px] font-semibold">{date.year}</p>
        </div>

        <div className="mt-9 grid w-full max-w-[360px] grid-cols-[1fr_auto_1fr] gap-5">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#5f6458]">Đón khách</p>
            <p className="mt-3 text-[22px] font-semibold">{guestReceptionTime}</p>
          </div>
          <span className="self-center h-12 w-px bg-[var(--lp-surface)]/45" />
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#5f6458]">Khai tiệc</p>
            <p className="mt-3 text-[22px] font-semibold">{receptionTime}</p>
          </div>
        </div>

        <CountdownCalendarBlock startsAt={event.startsAt} />

        <a className="mt-8 text-[14px] font-semibold underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--lp-surface)]" href={calendarHref} rel="noreferrer" target="_blank">
          Thêm vào lịch
        </a>

        <button
          className="mt-8 flex h-12 min-w-[240px] items-center justify-center rounded-full bg-[var(--lp-surface)] px-8 text-[14px] font-semibold uppercase text-[var(--lp-text)] shadow-[0_12px_28px_rgba(16,42,20,0.18)] transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--lp-surface)] active:scale-[0.99]"
          onClick={onRsvp}
          type="button"
        >
          Xác nhận tham dự
        </button>
      </div>
    </section>
  );
}
