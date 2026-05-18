import { BrandLogo } from "@/features/home/components/BrandLogo";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="bg-[#15151f] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1fr_1.4fr] lg:px-8">
        <div>
          <BrandLogo iconClassName="bg-white/10" />
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/62">
            Thiệp cưới online theo mẫu cố định, thay thông tin theo từng cặp đôi và xuất link riêng để chia sẻ cho khách mời.
          </p>
        </div>
        <div className="grid gap-4 text-sm text-white/70 sm:grid-cols-3">
          {["Mẫu thiệp có sẵn", "Link riêng cho khách", siteConfig.contactEmail].map((item) => (
            <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3" key={item}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
}
