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
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#fff0f6] px-3.5 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#ff4f8b] sm:px-4 sm:text-sm sm:tracking-[0.16em]">
            <Rocket size={16} />
            Có thiệp trong ngày
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] text-[#15151f] min-[390px]:text-4xl sm:mt-5 sm:text-5xl lg:text-6xl">
            4 bước để sở hữu thiệp cưới điện tử
          </h2>
          <p className="mt-4 text-base leading-7 text-[#60647a] sm:mt-5 sm:text-lg sm:leading-8">
            Quy trình được tối ưu cho cách vận hành thực tế: khách gửi thông tin qua nền tảng chat, bên mình xử lý trọn gói và bàn giao link.
          </p>
        </div>

        <div className="relative mt-10 grid gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-4">
          <div className="absolute left-8 right-8 top-12 hidden h-px bg-[#e8eaf5] lg:block" />
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                className="relative overflow-hidden rounded-[22px] border border-[#e8eaf5] bg-[#f7f8ff] p-5 shadow-[0_20px_50px_rgba(44,53,95,0.08)] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_28px_70px_rgba(44,53,95,0.12)] sm:rounded-[26px] sm:p-6"
                key={step.title}
              >
                <div className="absolute -right-10 -top-10 size-28 rounded-full bg-[#ff4f8b]/10" />
                <div className="relative flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-white text-[#ff4f8b] shadow-sm">
                    <Icon size={22} />
                  </span>
                  <span className="text-4xl font-black text-[#dfe2ef]">0{index + 1}</span>
                </div>
                <h3 className="relative mt-5 text-lg font-black text-[#15151f] sm:mt-6 sm:text-xl">{step.title}</h3>
                <p className="relative mt-2.5 text-[15px] leading-7 text-[#60647a] sm:mt-3">{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
