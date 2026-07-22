import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 bg-white py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="text-lg font-semibold tracking-tight text-zinc-950">VEXA</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-zinc-600">
          <div>© 2024 VEXA. All rights reserved.</div>
          <Link href="#" className="hover:text-zinc-900">
            Chính sách bảo mật
          </Link>
          <Link href="#" className="hover:text-zinc-900">
            Điều khoản dịch vụ
          </Link>
        </div>
      </div>
    </footer>
  );
}
