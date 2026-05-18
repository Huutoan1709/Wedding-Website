import Image from "next/image";

export function GreenAccentMarks() {
  return (
    <>
      <span className="absolute left-6 top-8 h-24 w-px rotate-[28deg] bg-[var(--lp-line)]" aria-hidden="true" />
      <span className="absolute left-8 top-10 h-10 w-10 rounded-[100%_0_100%_0] border border-[var(--lp-line)]" aria-hidden="true" />
      <span className="absolute right-6 bottom-10 h-24 w-px rotate-[28deg] bg-[var(--lp-line)]" aria-hidden="true" />
      <span className="absolute bottom-12 right-8 h-10 w-10 rounded-[100%_0_100%_0] border border-[var(--lp-line)]" aria-hidden="true" />
    </>
  );
}

export function GreenLeafPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-35" aria-hidden="true">
      <Image
        alt=""
        className="absolute -left-16 top-0 h-[620px] w-[520px] object-cover opacity-[0.22]"
        height={850}
        src="/images/invitation/double-dragon.webp"
        width={650}
      />
      <div className="absolute -left-24 top-20 h-[520px] w-[420px] rounded-[60%_40%_70%_30%] border border-[var(--lp-line)] opacity-45" />
      <div className="absolute -bottom-20 left-2 h-[520px] w-28 rotate-[-24deg] rounded-[100%_0_100%_0] border border-[var(--lp-line)] opacity-45" />
      <div className="absolute -bottom-16 right-10 h-[520px] w-28 rotate-[34deg] rounded-[100%_0_100%_0] border border-[var(--lp-line)] opacity-45" />
      {Array.from({ length: 18 }).map((_, index) => (
        <span
          className="absolute size-3 rounded-full bg-[var(--lp-text)] opacity-10"
          key={index}
          style={{
            left: `${18 + (index % 5) * 8}%`,
            top: `${8 + index * 5}%`
          }}
        />
      ))}
    </div>
  );
}
