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
      <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#ff4f8b]">FAQ</p>
          <h2 className="mt-3 text-4xl font-black leading-tight tracking-[-0.03em] text-[#15151f] sm:text-5xl">
            Những câu hỏi thường gặp
          </h2>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details className="group rounded-[24px] border border-[#e8eaf5] bg-[#f7f8ff] p-6 shadow-[0_14px_34px_rgba(44,53,95,0.06)]" key={faq.question}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-black text-[#15151f]">
                {faq.question}
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-[#ff4f8b] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-3xl text-[15px] leading-7 text-[#60647a]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
