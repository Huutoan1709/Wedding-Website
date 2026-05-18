import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck2, QrCode, Sparkles } from "lucide-react";
import type { CoupleProfile } from "@/types/wedding";

type HeroSectionProps = {
  couple: CoupleProfile;
};

export function HeroSection({ couple }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#f7f8ff] text-[#15151f]">
      <div className="absolute inset-0 [background-image:radial-gradient(circle_at_18%_18%,rgba(255,79,139,0.2)_0,transparent_24%),radial-gradient(circle_at_76%_14%,rgba(48,96,255,0.16)_0,transparent_28%),linear-gradient(135deg,#ffffff,#f6f7ff_50%,#fff2f7)]" />
      <div className="absolute left-[8%] top-28 hidden h-28 w-28 rotate-12 rounded-[28px] border border-white/70 bg-white/28 backdrop-blur-xl sm:block" />
      <div className="absolute right-[9%] top-32 hidden h-32 w-32 rounded-full border border-[#ff4f8b]/20 bg-white/35 backdrop-blur-xl sm:block" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 pb-10 pt-24 sm:min-h-[92svh] sm:gap-12 sm:px-6 sm:pb-16 sm:pt-28 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div className="max-w-3xl text-center lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white bg-white/74 px-3.5 py-2 text-xs font-black text-[#ff4f8b] shadow-[0_10px_30px_rgba(44,53,95,0.08)] backdrop-blur-xl sm:mb-6 sm:px-4 sm:text-sm">
            <Sparkles size={16} />
            Thiệp cưới online hiện đại
          </div>
          <h1 className="text-balance text-[34px] font-black leading-[1.08] tracking-[-0.03em] text-[#15151f] min-[390px]:text-4xl sm:text-5xl lg:text-[58px]">
            Tạo thiệp cưới online nhanh, đẹp và dễ gửi
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-8 text-[#41465c] sm:text-xl sm:leading-9 lg:mx-0">
            Thiết kế thiệp mời cưới theo phong cách của bạn, hiện đại sang trọng với{" "}
            <span className="font-serif text-2xl font-bold italic text-[#ff4f8b] drop-shadow-[0_10px_24px_rgba(255,79,139,0.22)] sm:text-3xl">
              Thiệp Đôi Ta
            </span>
          </p>
          <div className="mt-7 flex justify-center lg:justify-start">
            <Link
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#ff4f8b] px-7 text-sm font-black text-white shadow-[0_18px_38px_rgba(255,79,139,0.32)] transition hover:bg-[#ed2f72] sm:h-14 sm:px-8 sm:text-base"
              href="#templates"
            >
              Bắt đầu
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[620px]">
          <div className="absolute inset-x-8 top-14 h-[320px] rounded-full bg-[#4e77ff]/12 blur-3xl sm:top-16 sm:h-[420px]" />
          <div className="relative mx-auto h-[430px] max-w-[360px] [perspective:1100px] sm:h-[560px] sm:max-w-[520px]">
            <div className="absolute left-0 top-24 hidden h-[300px] w-[150px] -rotate-12 rounded-[28px] border border-white/80 bg-white/45 p-2 shadow-[0_24px_60px_rgba(44,53,95,0.16)] backdrop-blur-xl [transform:rotateY(28deg)_rotateZ(-10deg)] min-[390px]:block sm:left-4 sm:h-[360px] sm:w-[190px] sm:rounded-[32px]">
              <div className="relative h-full overflow-hidden rounded-[24px]">
                <Image alt="Album thiệp cưới" className="object-cover" fill sizes="190px" src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=600&q=80" />
                <div className="absolute inset-0 bg-white/18" />
              </div>
            </div>
            <div className="absolute right-0 top-32 hidden h-[290px] w-[145px] rotate-12 rounded-[28px] border border-white/80 bg-white/45 p-2 shadow-[0_24px_60px_rgba(44,53,95,0.14)] backdrop-blur-xl [transform:rotateY(-30deg)_rotateZ(11deg)] min-[390px]:block sm:h-[350px] sm:w-[180px] sm:rounded-[32px]">
              <div className="relative h-full overflow-hidden rounded-[24px]">
                <Image alt="Thiệp cưới online" className="object-cover" fill sizes="180px" src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80" />
                <div className="absolute inset-0 bg-[#ff4f8b]/10" />
              </div>
            </div>
            <div className="absolute left-1/2 top-0 h-[390px] w-[204px] -translate-x-1/2 rounded-[32px] border-[8px] border-[#15151f] bg-[#15151f] shadow-[0_28px_70px_rgba(21,21,31,0.24)] sm:h-[520px] sm:w-[270px] sm:rounded-[38px] sm:border-[10px] sm:shadow-[0_34px_90px_rgba(21,21,31,0.28)]">
              <div className="absolute left-1/2 top-2 z-20 h-1.5 w-20 -translate-x-1/2 rounded-full bg-white/20" />
              <div className="relative h-full overflow-hidden rounded-[23px] bg-white sm:rounded-[28px]">
                <Image alt={`${couple.groomName} và ${couple.brideName}`} className="object-cover" fill priority sizes="(max-width: 640px) 204px, 270px" src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(21,21,31,0.72))]" />
                <div className="absolute left-3 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/86 px-2.5 py-1.5 text-[11px] font-black text-[#15151f] shadow-sm backdrop-blur-xl sm:left-5 sm:top-6 sm:gap-2 sm:px-3 sm:py-2 sm:text-xs">
                  <CalendarCheck2 size={14} className="text-[#ff4f8b]" />
                  {couple.ceremonyTime}
                </div>
                <div className="absolute inset-x-3 bottom-3 rounded-[20px] border border-white/35 bg-white/86 p-3 text-center text-[#15151f] backdrop-blur-xl sm:inset-x-5 sm:bottom-5 sm:rounded-[24px] sm:p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ff4f8b] sm:text-xs sm:tracking-[0.22em]">Wedding link</p>
                  <h2 className="mt-1.5 text-2xl font-black leading-tight sm:mt-2 sm:text-3xl">
                    {couple.groomName} & {couple.brideName}
                  </h2>
                  <p className="mt-1 text-xs text-[#60647a] sm:mt-2 sm:text-sm">{couple.weddingDate}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-16 right-0 hidden items-center gap-3 rounded-2xl border border-white bg-white/86 px-4 py-3 shadow-[0_16px_36px_rgba(44,53,95,0.14)] backdrop-blur-xl sm:flex">
            <QrCode className="text-[#4e77ff]" size={20} />
            <div>
              <p className="text-xs font-bold text-[#60647a]">Sẵn sàng chia sẻ</p>
              <p className="text-sm font-black">Link riêng + QR thiệp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
