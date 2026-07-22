import { Box, Home, Package, Truck } from "lucide-react"

const services = [
  {
    title: "Nhận hàng",
    description: "Nhận hàng từ nhà cung cấp và kiểm đếm cẩn thận.",
    icon: Box,
  },
  {
    title: "Lưu kho",
    description: "Lưu kho tại Mỹ an toàn, rõ ràng, tối ưu chi phí.",
    icon: Home,
  },
  {
    title: "Đóng gói",
    description: "Xử lý đơn hàng, đóng gói đúng chuẩn, nhanh chóng.",
    icon: Package,
  },
  {
    title: "Giao hàng",
    description: "Giao hàng nội địa Mỹ nhanh và đáng tin cậy.",
    icon: Truck,
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-700">
            Dịch vụ của VEXA
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Dịch vụ của VEXA
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="group overflow-hidden rounded-[32px] border border-zinc-200/70 bg-white shadow-[0_30px_70px_-40px_rgba(15,23,42,0.2)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_30px_80px_-30px_rgba(15,23,42,0.18)]"
              >
                <div className="p-8 xl:p-9">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-indigo-50 text-indigo-700 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-zinc-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {service.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
