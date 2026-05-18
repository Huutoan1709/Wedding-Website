"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { getOptimizedWeddingImage } from "@/features/invitations/core/optimizedImages";

type LongPhungReuAlbum3DProps = {
  photos: string[];
};

type Direction = "next" | "prev";

const creamPatternStyle = {
  backgroundImage: 'url("/images/invitation/double-dragon.webp")',
  backgroundPositionY: "50%",
  backgroundSize: "360px"
};

function getVisiblePhotos(photos: string[], startIndex: number) {
  return Array.from({ length: Math.min(3, photos.length) }, (_, offset) => {
    const index = (startIndex + offset) % photos.length;
    return { index, photo: photos[index] };
  });
}

export function LongPhungReuAlbum3D({ photos }: LongPhungReuAlbum3DProps) {
  const album = useMemo(() => photos.filter(Boolean), [photos]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const [motion, setMotion] = useState<Direction | null>(null);
  const touchStartX = useRef<number | null>(null);
  const visiblePhotos = getVisiblePhotos(album, activeIndex);

  const move = useCallback(
    (direction: Direction) => {
      if (album.length <= 1 || motion) return;

      setMotion(direction);
      window.setTimeout(() => {
        setActiveIndex((current) => (direction === "next" ? (current + 1) % album.length : (current - 1 + album.length) % album.length));
        setMotion(null);
      }, 220);
    },
    [album.length, motion]
  );

  const movePreview = useCallback(
    (direction: Direction) => {
      if (previewIndex === null || album.length <= 1) return;

      setPreviewIndex((current) => {
        if (current === null) return current;
        return direction === "next" ? (current + 1) % album.length : (current - 1 + album.length) % album.length;
      });
    },
    [album.length, previewIndex]
  );

  useEffect(() => {
    if (album.length <= 3 || previewIndex !== null) return;

    const timer = window.setInterval(() => move("next"), 3600);
    return () => window.clearInterval(timer);
  }, [album.length, move, previewIndex]);

  useEffect(() => {
    if (previewIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreviewIndex(null);
      }
      if (event.key === "ArrowLeft") {
        movePreview("prev");
      }
      if (event.key === "ArrowRight") {
        movePreview("next");
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [movePreview, previewIndex]);

  if (!album.length) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[var(--lp-cream)] px-5 py-8 text-center text-[var(--lp-surface)]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-multiply" style={creamPatternStyle} />

      <div className="relative z-10">
        <div
          className="relative mx-auto max-w-[390px] touch-pan-y"
          onTouchEnd={(event) => {
            if (touchStartX.current === null) return;
            const delta = event.changedTouches[0].clientX - touchStartX.current;
            touchStartX.current = null;
            if (Math.abs(delta) < 36) return;
            move(delta < 0 ? "next" : "prev");
          }}
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0].clientX;
          }}
        >
          <button
            aria-label="Ảnh trước"
            className="absolute left-0 top-1/2 z-20 grid size-9 -translate-x-2 -translate-y-1/2 place-items-center rounded-full bg-[var(--lp-surface)]/82 text-[var(--lp-text)] shadow-[var(--lp-shadow)] transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--lp-surface)]"
            onClick={() => move("prev")}
            type="button"
          >
            <ChevronLeft className="size-5" />
          </button>

          <div
            className={cn(
              "green-album-3d-stage green-album-3d-soft mx-auto grid h-[250px] grid-cols-[0.86fr_1.08fr_0.86fr] items-center gap-3",
              motion === "next" && "green-album-3d-shift-next",
              motion === "prev" && "green-album-3d-shift-prev"
            )}
          >
            {visiblePhotos.map(({ photo, index }, position) => (
              <button
                aria-label={`Xem ảnh cưới ${index + 1}`}
                className={cn(
                  "green-album-3d-card relative overflow-hidden rounded-[8px] border border-[var(--lp-surface)]/28 bg-[var(--lp-panel)] shadow-[0_18px_42px_rgba(16,42,20,0.22)] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--lp-surface)]",
                  position === 0 && "green-album-3d-left",
                  position === 1 && "green-album-3d-center",
                  position === 2 && "green-album-3d-right"
                )}
                key={`${photo}-${index}`}
                onClick={() => setPreviewIndex(index)}
                type="button"
              >
                <Image
                  alt={`Ảnh cưới ${index + 1}`}
                  className="aspect-[3/4] w-full object-cover transition duration-700 hover:scale-105"
                  height={520}
                  src={getOptimizedWeddingImage(photo, "medium")}
                  unoptimized
                  width={390}
                />
              </button>
            ))}
          </div>

          <button
            aria-label="Ảnh tiếp theo"
            className="absolute right-0 top-1/2 z-20 grid size-9 -translate-y-1/2 translate-x-2 place-items-center rounded-full bg-[var(--lp-surface)]/82 text-[var(--lp-text)] shadow-[var(--lp-shadow)] transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--lp-surface)]"
            onClick={() => move("next")}
            type="button"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {album.map((photo, index) => (
            <button
              aria-label={`Chuyển đến ảnh ${index + 1}`}
              className={`size-2 rounded-full transition ${index === activeIndex ? "bg-[var(--lp-surface)]" : "bg-[var(--lp-surface)]/28"}`}
              key={`dot-${photo}-${index}`}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>
      </div>

      {previewIndex !== null && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-black/82 px-4 py-5" role="dialog" aria-modal="true" aria-label="Xem ảnh cưới">
          <button aria-label="Đóng ảnh" className="absolute inset-0 cursor-default" onClick={() => setPreviewIndex(null)} type="button" />
          <div className="relative z-10 flex max-h-[calc(100svh-40px)] w-full max-w-[390px] items-center justify-center rounded-[8px] border border-[var(--lp-line)] bg-[var(--lp-surface)] p-2 shadow-[var(--lp-shadow)]">
            <button
              aria-label="Đóng"
              className="absolute right-3 top-3 z-20 grid size-9 place-items-center rounded-full bg-black/55 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={() => setPreviewIndex(null)}
              type="button"
            >
              <X className="size-5" />
            </button>

            <button
              aria-label="Ảnh trước"
              className="absolute left-3 top-1/2 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-black/55 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={() => movePreview("prev")}
              type="button"
            >
              <ChevronLeft className="size-6" />
            </button>

            <Image
              alt={`Ảnh cưới ${previewIndex + 1}`}
              className="h-auto max-h-[calc(100svh-56px)] w-auto max-w-full rounded-[6px] object-contain"
              height={900}
              src={getOptimizedWeddingImage(album[previewIndex], "large")}
              unoptimized
              width={680}
            />

            <button
              aria-label="Ảnh tiếp theo"
              className="absolute right-3 top-1/2 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-black/55 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={() => movePreview("next")}
              type="button"
            >
              <ChevronRight className="size-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
