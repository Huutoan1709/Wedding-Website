import { BadgeCheck, Clock3, Heart, MapPinned, MessageCircleHeart, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Clock3,
    title: "Nhanh, gọn, có thiệp ngay trong ngày",
    description: "Phù hợp khi cần gửi thiệp gấp. Chỉ cần thông tin đầy đủ, mẫu có sẵn sẽ được cá nhân hóa và xuất link nhanh."
  },
  {
    icon: ShieldCheck,
    title: "Hỗ trợ từ A-Z",
    description: "Không cần biết kỹ thuật. Bên mình nhận thông tin, kiểm tra nội dung, dựng thiệp, chỉnh sửa và bàn giao link hoàn chỉnh."
  },
  {
    icon: Heart,
    title: "Vẫn giữ cảm xúc lãng mạn",
    description: "Thiệp có nhạc nền, album ảnh, câu chuyện tình yêu, countdown và hiệu ứng mở thiệp để tạo trải nghiệm đáng nhớ."
  },
  {
    icon: MapPinned,
    title: "Tiện ích cho khách mời",
    description: "Khách có thể xem bản đồ, lịch trình, giờ đón khách, RSVP và thông tin mừng cưới ngay trên điện thoại."
  },
  {
    icon: MessageCircleHeart,
    title: "Chia sẻ cực dễ",
    description: "Gửi link qua Zalo, Facebook, Instagram, Messenger hoặc in QR trên thiệp giấy, bảng welcome và màn hình sự kiện."
  },
  {
    icon: BadgeCheck,
    title: "Template ổn định, không phá layout",
    description: "Mẫu được thiết kế cố định để luôn đẹp trên mobile. Khách thay thông tin, còn bố cục và trải nghiệm được kiểm soát chỉn chu."
  }
];

export function WhyChooseSection() {
  return (
    <section className="bg-[#f7f8ff]" id="vi-sao-chon">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-5 sm:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ff4f8b] sm:text-sm sm:tracking-[0.22em]">Tại sao chọn thiệp online</p>
            <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.03em] text-[#15151f] min-[390px]:text-4xl sm:mt-4 sm:text-5xl lg:text-6xl">
              Công nghệ tiện lợi, cảm xúc vẫn trọn vẹn.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[#60647a] sm:text-lg sm:leading-8 lg:justify-self-end">
            Trang thiệp là một điểm chạm đầy đủ trước ngày cưới: xem lời mời, mở bản đồ, xác nhận tham dự, lưu lịch và chia sẻ lại cho gia đình trong vài thao tác.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                className="group rounded-[22px] border border-white bg-white/78 p-5 shadow-[0_18px_46px_rgba(44,53,95,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(44,53,95,0.12)] sm:rounded-[26px] sm:p-6"
                key={reason.title}
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-[#fff0f6] text-[#ff4f8b] transition group-hover:bg-[#ff4f8b] group-hover:text-white">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 text-lg font-black text-[#15151f] sm:mt-5 sm:text-xl">{reason.title}</h3>
                <p className="mt-2.5 text-[15px] leading-7 text-[#60647a] sm:mt-3">{reason.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
