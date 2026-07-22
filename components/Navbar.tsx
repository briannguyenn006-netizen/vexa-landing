import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

const links = [
  { label: "Dịch vụ", href: "#services" },
  { label: "Quy trình", href: "#timeline" },
  { label: "Lợi ích", href: "#benefits" },
  { label: "FAQ", href: "#faq" },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="VEXA Logo"
            width={32}
            height={32}
            priority
          />
          <span className="text-lg font-semibold tracking-tight text-zinc-950">
            VEXA
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] font-medium text-zinc-600 transition-colors duration-200 hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Button className="h-12 rounded-full bg-gradient-to-r from-indigo-700 to-violet-700 px-6 font-medium text-white transition-all duration-300 hover:shadow-lg hover:from-indigo-600 hover:to-violet-600">
            Liên hệ ngay
          </Button>
        </div>
      </div>
    </header>
  )
}
