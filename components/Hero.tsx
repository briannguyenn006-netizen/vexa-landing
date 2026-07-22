"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16">
      <div className="mx-auto flex min-h-[480px] max-w-7xl flex-col justify-center px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6 inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-indigo-700"
          >
            FULFILLMENT TẠI MỸ
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            className="max-w-[650px] text-4xl font-bold leading-tight tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl"
          >
            Kho hàng tại Mỹ dành cho seller Việt.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
            className="mt-6 max-w-[560px] text-lg leading-8 text-zinc-600"
          >
            Nhận hàng – Lưu kho – Đóng gói – Giao hàng nội địa Mỹ. Đơn giản. Minh bạch. Hiệu quả.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
            className="mt-10"
          >
            <Button className="h-12 rounded-full bg-gradient-to-r from-indigo-700 to-violet-700 px-6 font-medium text-white transition-all duration-300 hover:shadow-lg hover:from-indigo-600 hover:to-violet-600">
              Nhận báo giá ngay
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
