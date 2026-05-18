import { BrandLogo } from "@/features/home/components/BrandLogo";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="bg-[#2b2022] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_1.4fr] lg:px-8">
        <div>
          <BrandLogo iconClassName="bg-white/10" />
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/62">
            Thiệp cưới online theo mẫu cố định, thay thông tin theo từng cặp đôi và xuất link riêng để chia sẻ cho khách mời.
          </p>
        </div>
        <div className="grid gap-4 text-sm text-white/70 sm:grid-cols-3">
          <p>Mẫu thiệp có sẵn</p>
          <p>Link riêng cho khách</p>
          <p>{siteConfig.contactEmail}</p>
        </div>
      </div>
    </footer>
  );
}
