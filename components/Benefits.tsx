import { BadgeCheck, Box, CircleDollarSign, MessageCircleMore } from "lucide-react";

const benefits = [
  {
    title: "Kho tại Mỹ",
    description: "Hàng được lưu trữ ngay tại Mỹ giúp rút ngắn thời gian giao hàng.",
    icon: Box,
  },
  {
    title: "Kiểm đếm minh bạch",
    description: "Kiểm đếm cẩn thận, chụp ảnh và cập nhật tồn kho rõ ràng.",
    icon: BadgeCheck,
  },
  {
    title: "Chi phí rõ ràng",
    description: "Không phí ẩn. Báo giá minh bạch và dễ theo dõi.",
    icon: CircleDollarSign,
  },
  {
    title: "Hỗ trợ seller Việt Nam",
    description: "Đội ngũ hỗ trợ bằng tiếng Việt, phản hồi nhanh và đồng hành lâu dài.",
    icon: MessageCircleMore,
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-700">
            TẠI SAO CHỌN VEXA
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Lý do seller lựa chọn VEXA
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
            Chúng tôi giúp seller tập trung bán hàng, còn việc kho bãi và vận hành hãy để VEXA lo.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className="rounded-[28px] border border-zinc-200/70 bg-zinc-50/80 p-8 shadow-[0_24px_70px_-42px_rgba(15,23,42,0.25)]"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-indigo-700 shadow-sm ring-1 ring-zinc-200">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-zinc-950">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
