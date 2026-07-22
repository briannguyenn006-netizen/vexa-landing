import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "Kho của VEXA ở đâu?",
    answer:
      "Kho của VEXA đặt tại Mỹ, giúp rút ngắn thời gian giao hàng cho khách nội địa.",
  },
  {
    question: "Có yêu cầu số lượng hàng tối thiểu không?",
    answer:
      "Không. Bạn có thể bắt đầu với số lượng nhỏ và mở rộng khi doanh số tăng.",
  },
  {
    question: "Tôi gửi hàng từ Việt Nam như thế nào?",
    answer:
      "Bạn chỉ cần gửi hàng đến địa chỉ kho của VEXA tại Mỹ theo hướng dẫn onboarding.",
  },
  {
    question: "Bao lâu thì đơn hàng được xử lý?",
    answer:
      "Đơn hàng sẽ được xử lý nhanh sau khi nhận yêu cầu, theo đúng quy trình vận hành của VEXA.",
  },
  {
    question: "Chi phí được tính như thế nào?",
    answer:
      "Chi phí minh bạch theo bảng giá. Không có phí ẩn và luôn được thông báo rõ trước khi sử dụng dịch vụ.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-zinc-50/80">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-700">
            FAQ
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Những câu hỏi thường gặp
          </h2>

          <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
            Giải đáp nhanh những thắc mắc phổ biến trước khi bắt đầu sử dụng
            dịch vụ của VEXA.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl">
          <Accordion
            type="single"
            collapsible
            defaultValue="Kho của VEXA ở đâu?"
            className="grid gap-4 md:grid-cols-2"
          >
            {faqs.map((item) => (
              <AccordionItem
                key={item.question}
                value={item.question}
                className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm"
              >
                <AccordionTrigger className="px-6 py-5 text-left text-base font-semibold text-zinc-900 hover:no-underline">
                  {item.question}
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-5 text-sm leading-7 text-zinc-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}