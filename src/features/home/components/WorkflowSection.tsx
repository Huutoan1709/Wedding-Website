import { CheckCircle2, CreditCard, MessageSquareText, Rocket, WandSparkles } from "lucide-react";

const steps = [
  {
    icon: MessageSquareText,
    title: "Tiếp nhận yêu cầu",
    description: "Bạn chọn mẫu hoặc gửi ý tưởng, sau đó cung cấp thông tin cô dâu chú rể, ảnh, ngày giờ, địa điểm và yêu cầu riêng."
  },
  {
    icon: WandSparkles,
    title: "Thực hiện A-Z",
    description: "Thay nội dung, dựng album, gắn bản đồ, nhạc nền, lịch trình, RSVP, mừng cưới và tối ưu giao diện trên điện thoại."
  },
  {
    icon: CheckCircle2,
    title: "Gửi bản xem trước",
    description: "Gửi link preview để kiểm tra. Nếu cần chỉnh tên, giờ, ảnh hoặc nội dung, đội ngũ hỗ trợ chỉnh đến khi vừa ý."
  },
  {
    icon: CreditCard,
    title: "Xuất link bàn giao",
    description: "Sau khi hoàn tất, bạn nhận link thiệp, ảnh bìa chia sẻ và QR thiệp để gửi khách mời ngay trong ngày."
  }
];

export function WorkflowSection() {
  return (
    <section className="bg-white" id="quy-trinh">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#fff0f6] px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-[#ff4f8b]">
            <Rocket size={16} />
            Có thiệp trong ngày
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.03em] text-[#15151f] sm:text-5xl lg:text-6xl">
            4 bước để sở hữu thiệp cưới điện tử
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#60647a]">
            Quy trình được tối ưu cho cách vận hành thực tế: khách gửi thông tin qua nền tảng chat, bên mình xử lý trọn gói và bàn giao link.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article className="relative overflow-hidden rounded-[28px] border border-[#e8eaf5] bg-[#f7f8ff] p-6 shadow-[0_20px_50px_rgba(44,53,95,0.08)]" key={step.title}>
                <div className="absolute -right-10 -top-10 size-28 rounded-full bg-[#ff4f8b]/10" />
                <div className="relative flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-white text-[#ff4f8b] shadow-sm">
                    <Icon size={22} />
                  </span>
                  <span className="text-4xl font-black text-[#dfe2ef]">0{index + 1}</span>
                </div>
                <h3 className="relative mt-6 text-xl font-black text-[#15151f]">{step.title}</h3>
                <p className="relative mt-3 text-[15px] leading-7 text-[#60647a]">{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
