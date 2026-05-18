import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import type { CoupleProfile } from "@/types/wedding";

type HeroSectionProps = {
  couple: CoupleProfile;
};
export function HeroSection({ couple }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#f7f8ff] text-[#15151f]">
      <div className="absolute inset-0 [background-image:radial-gradient(circle_at_18%_18%,rgba(255,79,139,0.2)_0,transparent_26%),radial-gradient(circle_at_76%_14%,rgba(78,119,255,0.18)_0,transparent_28%),linear-gradient(135deg,#ffffff,#f6f7ff_48%,#fff2f7)]" />
      <div className="absolute left-[8%] top-28 h-28 w-28 rounded-3xl border border-white/70 bg-white/28 rotate-12 backdrop-blur-xl" />
      <div className="absolute right-[9%] top-32 h-32 w-32 rounded-full border border-[#ff4f8b]/20 bg-white/35 backdrop-blur-xl" />

      <div className="relative mx-auto grid min-h-[92svh] max-w-7xl items-center gap-12 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div className="max-w-3xl text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white bg-white/74 px-4 py-2 text-sm font-black text-[#ff4f8b] shadow-[0_10px_30px_rgba(44,53,95,0.08)] backdrop-blur-xl">
            <Sparkles size={16} />
            Thiệp cưới online hiện đại
          </div>
          <h1 className="text-balance text-5xl font-black leading-[1.02] tracking-[-0.04em] text-[#15151f] sm:text-6xl lg:text-7xl">
            Tạo thiệp cưới online nhanh, gửi lời mời đi xa hơn
          </h1>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#ff4f8b] px-8 text-base font-black text-white shadow-[0_18px_38px_rgba(255,79,139,0.32)] transition hover:bg-[#ed2f72]"
              href="#templates"
            >
              Xem mẫu thiệp
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[620px]">
          <div className="absolute inset-x-8 top-16 h-[420px] rounded-full bg-[#4e77ff]/12 blur-3xl" />
          <div className="relative mx-auto h-[560px] max-w-[520px] [perspective:1100px]">
            <div className="absolute left-4 top-24 h-[360px] w-[190px] -rotate-12 rounded-[32px] border border-white/80 bg-white/45 p-2 shadow-[0_24px_60px_rgba(44,53,95,0.16)] backdrop-blur-xl [transform:rotateY(28deg)_rotateZ(-10deg)]">
              <div className="relative h-full overflow-hidden rounded-[24px]">
                <Image alt="Album thiệp cưới" className="object-cover" fill sizes="190px" src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=600&q=80" />
                <div className="absolute inset-0 bg-white/18" />
              </div>
            </div>
            <div className="absolute right-0 top-32 h-[350px] w-[180px] rotate-12 rounded-[32px] border border-white/80 bg-white/45 p-2 shadow-[0_24px_60px_rgba(44,53,95,0.14)] backdrop-blur-xl [transform:rotateY(-30deg)_rotateZ(11deg)]">
              <div className="relative h-full overflow-hidden rounded-[24px]">
                <Image alt="Thiệp cưới online" className="object-cover" fill sizes="180px" src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80" />
                <div className="absolute inset-0 bg-[#ff4f8b]/10" />
              </div>
            </div>
            <div className="absolute left-1/2 top-0 h-[520px] w-[270px] -translate-x-1/2 rounded-[38px] border-[10px] border-[#15151f] bg-[#15151f] shadow-[0_34px_90px_rgba(21,21,31,0.28)]">
              <div className="absolute left-1/2 top-2 z-20 h-1.5 w-20 -translate-x-1/2 rounded-full bg-white/20" />
              <div className="relative h-full overflow-hidden rounded-[28px] bg-white">
                <Image alt={`${couple.groomName} và ${couple.brideName}`} className="object-cover" fill priority sizes="270px" src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(21,21,31,0.72))]" />
                <div className="absolute inset-x-5 bottom-5 rounded-3xl border border-white/35 bg-white/84 p-5 text-center text-[#15151f] backdrop-blur-xl">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#ff4f8b]">Wedding link</p>
                  <h2 className="mt-2 text-3xl font-black leading-tight">
                    {couple.groomName} & {couple.brideName}
                  </h2>
                  <p className="mt-2 text-sm text-[#60647a]">{couple.weddingDate}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-3 left-4 flex items-center gap-3 rounded-2xl border border-white bg-white/84 px-4 py-3 shadow-[0_16px_36px_rgba(44,53,95,0.14)] backdrop-blur-xl">
            <MessageCircle className="text-[#ff4f8b]" size={20} />
            <div>
              <p className="text-xs font-bold text-[#60647a]">Gửi thông tin qua</p>
              <p className="text-sm font-black">Zalo, Facebook, Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
