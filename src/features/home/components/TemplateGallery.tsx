"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, Palette } from "lucide-react";
import { useEffect, useState } from "react";
import type { WeddingTemplate } from "@/types/wedding";
import { cn } from "@/lib/utils";

type TemplateGalleryProps = {
  templates: WeddingTemplate[];
};

type TemplateMiniPreviewProps = {
  isActive: boolean;
  template: WeddingTemplate;
};

function wrapIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

function getCircularOffset(index: number, activeIndex: number, length: number) {
  const forward = wrapIndex(index - activeIndex, length);
  return forward > length / 2 ? forward - length : forward;
}

function getPreviewPath(template: WeddingTemplate, isActive: boolean) {
  if (!template.demoPath) {
    return "#";
  }

  return `${template.demoPath}?preview=1${isActive ? "&scroll=1" : ""}`;
}

function TemplateMiniPreview({ isActive, template }: TemplateMiniPreviewProps) {
  return (
    <div className="relative h-full overflow-hidden rounded-[20px] bg-[#15151f] md:rounded-[22px]">
      <iframe
        aria-label={`Xem trước mẫu ${template.name}`}
        className="pointer-events-none absolute left-1/2 top-0 h-[1100px] w-[430px] origin-top -translate-x-1/2 scale-[0.465] border-0 md:scale-[0.526]"
        src={getPreviewPath(template, isActive)}
        tabIndex={-1}
        title={`Xem trước ${template.name}`}
      />
      <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-white/10 md:rounded-[22px]" />
    </div>
  );
}
const slidePositions = {
  [-2]: {
    className: "opacity-35 blur-[0.4px]",
    transform: "translateX(-330px) translateZ(-150px) rotateY(42deg) rotateZ(-4deg) scale(0.78)",
    zIndex: 1
  },
  [-1]: {
    className: "opacity-72",
    transform: "translateX(-170px) translateZ(-42px) rotateY(24deg) rotateZ(-2deg) scale(0.9)",
    zIndex: 4
  },
  0: {
    className: "opacity-100",
    transform: "translateX(0) translateZ(96px) rotateY(0deg) rotateZ(0deg) scale(1)",
    zIndex: 9
  },
  1: {
    className: "opacity-72",
    transform: "translateX(170px) translateZ(-42px) rotateY(-24deg) rotateZ(2deg) scale(0.9)",
    zIndex: 4
  },
  2: {
    className: "opacity-35 blur-[0.4px]",
    transform: "translateX(330px) translateZ(-150px) rotateY(-42deg) rotateZ(4deg) scale(0.78)",
    zIndex: 1
  }
};

const hiddenPosition = {
  className: "pointer-events-none opacity-0 blur-sm",
  transform: "translateX(0) translateZ(-260px) rotateY(0deg) scale(0.68)",
  zIndex: 0
};

export function TemplateGallery({ templates }: TemplateGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => wrapIndex(current + 1, templates.length));
    }, 4200);

    return () => window.clearInterval(timer);
  }, [templates.length]);

  return (
    <section className="overflow-hidden bg-[#f5f6fb]" id="templates">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#ff4f8b] shadow-[0_12px_30px_rgba(44,53,95,0.08)] sm:mb-5 sm:px-4 sm:text-sm sm:tracking-[0.16em]">
            <Palette size={16} />
            Kho mẫu 3D
          </p>
          <h2 className="text-3xl font-black leading-[1.08] tracking-[-0.03em] text-[#15151f] min-[390px]:text-4xl sm:text-5xl lg:text-[56px]">
            Showroom thiệp cưới online
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#60647a] sm:mt-5 sm:text-lg sm:leading-8">
            Mỗi mẫu được thiết kế như một trải nghiệm hoàn chỉnh, có thể thay tên, ảnh, lịch trình, bản đồ và nội dung theo từng cặp đôi.
          </p>
        </div>

        <div className="relative mx-auto mt-4 hidden h-[560px] max-w-6xl items-center justify-center md:flex [perspective:1500px]">
          <button
            className="absolute left-2 top-1/2 z-30 grid size-14 -translate-y-1/2 place-items-center rounded-full bg-white text-[#15151f] shadow-[0_16px_40px_rgba(44,53,95,0.14)] transition duration-300 hover:scale-105"
            onClick={() => setActiveIndex((current) => wrapIndex(current - 1, templates.length))}
            type="button"
            aria-label="Mẫu trước"
          >
            <ChevronLeft />
          </button>
          <button
            className="absolute right-2 top-1/2 z-30 grid size-14 -translate-y-1/2 place-items-center rounded-full bg-white text-[#15151f] shadow-[0_16px_40px_rgba(44,53,95,0.14)] transition duration-300 hover:scale-105"
            onClick={() => setActiveIndex((current) => wrapIndex(current + 1, templates.length))}
            type="button"
            aria-label="Mẫu sau"
          >
            <ChevronRight />
          </button>

          <div className="absolute inset-x-20 top-1/2 h-56 -translate-y-1/2 rounded-full bg-[#ff4f8b]/8 blur-3xl" />

          {templates.map((template, index) => {
            const offset = getCircularOffset(index, activeIndex, templates.length);
            const position = slidePositions[offset as keyof typeof slidePositions] || hiddenPosition;
            const isActive = offset === 0;

            return (
              <Link
                className={cn(
                  "absolute left-1/2 top-1/2 h-[400px] w-[210px] rounded-[30px] border border-white/80 bg-white/55 p-2 shadow-[0_24px_70px_rgba(44,53,95,0.14)] backdrop-blur-xl [transform-style:preserve-3d]",
                  position.className,
                  isActive && "h-[430px] w-[226px] shadow-[0_36px_96px_rgba(44,53,95,0.25)]"
                )}
                href={template.demoPath || "#"}
                key={template.id}
                style={{
                  transform: `translate(-50%, -50%) ${position.transform}`,
                  zIndex: position.zIndex,
                  transition:
                    "transform 1100ms cubic-bezier(0.22, 1, 0.36, 1), opacity 900ms ease, filter 900ms ease, width 900ms cubic-bezier(0.22, 1, 0.36, 1), height 900ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 900ms ease"
                }}
              >
                <TemplateMiniPreview isActive={isActive} template={template} />
              </Link>
            );
          })}

          <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
            {templates.map((template, index) => (
              <button
                className={cn("h-2.5 rounded-full bg-[#15151f]/18 transition-all duration-500", index === activeIndex ? "w-8 bg-[#ff4f8b]" : "w-2.5")}
                key={template.id}
                onClick={() => setActiveIndex(index)}
                type="button"
                aria-label={`Chọn mẫu ${template.name}`}
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto mt-8 h-[500px] max-w-[360px] overflow-hidden md:hidden">
          <div className="absolute inset-x-6 top-16 h-64 rounded-full bg-[#ff4f8b]/10 blur-3xl" />
          <button
            className="absolute left-0 top-[190px] z-30 grid size-11 place-items-center rounded-full bg-white text-[#15151f] shadow-[0_14px_32px_rgba(44,53,95,0.16)]"
            onClick={() => setActiveIndex((current) => wrapIndex(current - 1, templates.length))}
            type="button"
            aria-label="Mẫu trước"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            className="absolute right-0 top-[190px] z-30 grid size-11 place-items-center rounded-full bg-white text-[#15151f] shadow-[0_14px_32px_rgba(44,53,95,0.16)]"
            onClick={() => setActiveIndex((current) => wrapIndex(current + 1, templates.length))}
            type="button"
            aria-label="Mẫu sau"
          >
            <ChevronRight size={22} />
          </button>

          <div className="absolute inset-x-0 top-0 h-[420px] [perspective:1000px]">
            {templates.map((template, index) => {
              const offset = getCircularOffset(index, activeIndex, templates.length);
              const visible = Math.abs(offset) <= 1;
              const transform =
                offset === 0
                  ? "translateX(0) translateZ(70px) rotateY(0deg) scale(1)"
                  : offset === -1
                    ? "translateX(-92px) translateZ(-80px) rotateY(30deg) scale(0.78)"
                    : offset === 1
                      ? "translateX(92px) translateZ(-80px) rotateY(-30deg) scale(0.78)"
                      : "translateX(0) translateZ(-220px) scale(0.58)";

              return (
                <Link
                  className={cn(
                    "absolute left-1/2 top-4 h-[380px] w-[200px] rounded-[28px] border border-white/80 bg-white/60 p-2 shadow-[0_24px_70px_rgba(44,53,95,0.16)] backdrop-blur-xl [transform-style:preserve-3d]",
                    visible ? "opacity-100" : "pointer-events-none opacity-0",
                    offset !== 0 && "opacity-55"
                  )}
                  href={template.demoPath || "#"}
                  key={template.id}
                  style={{
                    transform: `translateX(-50%) ${transform}`,
                    zIndex: offset === 0 ? 10 : 3,
                    transition: "transform 900ms cubic-bezier(0.22, 1, 0.36, 1), opacity 700ms ease, box-shadow 700ms ease"
                  }}
                >
                  <TemplateMiniPreview isActive={offset === 0} template={template} />
                </Link>
              );
            })}
          </div>

          <div className="absolute bottom-16 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
            {templates.map((template, index) => (
              <button
                className={cn("h-2.5 rounded-full bg-[#15151f]/18 transition-all duration-500", index === activeIndex ? "w-8 bg-[#ff4f8b]" : "w-2.5")}
                key={template.id}
                onClick={() => setActiveIndex(index)}
                type="button"
                aria-label={`Chọn mẫu ${template.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
