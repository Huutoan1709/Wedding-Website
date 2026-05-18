const faqs = [
  {
    question: "Có thật sự có thiệp ngay trong ngày không?",
    answer:
      "Có, nếu bạn đã chuẩn bị đủ thông tin cơ bản như tên, ảnh, ngày giờ, địa điểm và mẫu muốn dùng. Với yêu cầu phức tạp hoặc cần chỉnh concept riêng, thời gian có thể lâu hơn."
  },
  {
    question: "Tôi không biết chuẩn bị nội dung thì sao?",
    answer:
      "Bên mình hỗ trợ từ A-Z. Bạn chỉ cần gửi thông tin thô qua Zalo/Facebook/Instagram, phần câu chữ, bố cục và cách trình bày sẽ được sắp xếp lại cho phù hợp với mẫu."
  },
  {
    question: "Sau khi xuất link có chỉnh sửa được không?",
    answer:
      "Có. Nếu sai tên, sai giờ, sai địa điểm hoặc cần thay ảnh, link có thể được cập nhật. Khách mời vẫn mở cùng một đường link đã gửi."
  },
  {
    question: "Thiệp có dùng được trên điện thoại của người lớn tuổi không?",
    answer:
      "Có. Giao diện được tối ưu cho điện thoại, chữ rõ, nút dễ bấm, có bản đồ và thông tin giờ giấc để khách mời xem nhanh."
  },
  {
    question: "Có thể gửi thiệp bằng QR không?",
    answer:
      "Có. Sau khi có link, có thể tạo QR để in lên thiệp giấy, bảng welcome, màn hình check-in hoặc gửi kèm ảnh bìa chia sẻ."
  }
];

export function FAQSection() {
  return (
    <section className="bg-white" id="faq">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff4f8b] sm:text-sm sm:tracking-[0.22em]">FAQ</p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.03em] text-[#15151f] min-[390px]:text-4xl sm:text-5xl">
            Những câu hỏi thường gặp
          </h2>
        </div>
        <div className="mt-9 space-y-3 sm:mt-12 sm:space-y-4">
          {faqs.map((faq) => (
            <details
              className="group rounded-[20px] border border-[#e8eaf5] bg-[#f7f8ff] p-4 shadow-[0_14px_34px_rgba(44,53,95,0.06)] transition duration-300 open:bg-white open:shadow-[0_18px_46px_rgba(44,53,95,0.1)] sm:rounded-[22px] sm:p-6"
              key={faq.question}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-black leading-6 text-[#15151f] sm:gap-5 sm:text-lg">
                {faq.question}
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white text-[#ff4f8b] transition group-open:rotate-45 group-open:bg-[#fff0f6] sm:size-9">+</span>
              </summary>
              <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#60647a] sm:mt-4">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
