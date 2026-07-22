import { ArrowRight, Box, PackageCheck, ShieldCheck, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Gửi hàng đến kho",
    description: "Khách gửi hàng đến kho của VEXA tại Mỹ.",
    icon: Box,
  },
  {
    number: "02",
    title: "Kiểm đếm & Lưu kho",
    description: "Đội ngũ VEXA kiểm đếm, chụp ảnh và cập nhật tồn kho.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Có đơn hàng",
    description: "Khi có đơn, VEXA nhận yêu cầu xử lý ngay.",
    icon: PackageCheck,
  },
  {
    number: "04",
    title: "Đóng gói & Giao hàng",
    description: "Đóng gói cẩn thận và giao hàng nhanh trên toàn nước Mỹ.",
    icon: Truck,
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="bg-zinc-50/80">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-700">
            Quy trình vận hành
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            4 bước đơn giản để hàng hóa đến tay khách hàng
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
            Từ khi hàng đến kho đến khi giao tận nơi, VEXA vận hành rõ ràng, nhanh và đáng tin cậy.
          </p>
        </div>

        <div className="relative mt-14 lg:mt-16">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200 lg:block" />

          <div className="grid gap-6 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  <div className="rounded-[28px] border border-zinc-200/70 bg-white p-7 shadow-[0_25px_70px_-38px_rgba(15,23,42,0.25)] sm:p-8">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold tracking-[0.25em] text-indigo-700">
                        {step.number}
                      </span>
                      {index < steps.length - 1 ? (
                        <div className="hidden lg:flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-600">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      ) : null}
                    </div>

                    <div className="mt-6 inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700 shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold tracking-tight text-zinc-950">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
