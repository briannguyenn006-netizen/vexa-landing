import Link from "next/link";
import { Mail, MessageSquare, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const contacts = [
  {
    id: "zalo",
    title: "Zalo",
    subtitle: "Chat với Vexa",
    icon: MessageSquare,
  },
  {
    id: "email",
    title: "Email",
    subtitle: "hello@vexa.us",
    icon: Mail,
  },
  {
    id: "facebook",
    title: "Facebook",
    subtitle: "VEXA Fulfillment",
    icon: Users,
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    subtitle: "Chat với Vexa",
    icon: Phone,
  },
];

export default function Contact() {
  return (
    <section className="px-6 pb-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[32px] bg-gradient-to-r from-indigo-700 via-violet-700 to-indigo-800 p-8 shadow-[0_40px_80px_-40px_rgba(79,70,229,0.45)] sm:p-12 lg:p-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              {/* Left */}
              <div className="max-w-xl text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-300">
                  Liên hệ ngay
                </p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                  Sẵn sàng mở rộng thị trường Mỹ?
                </h3>
                <p className="mt-4 text-base text-indigo-100/90">
                  Liên hệ VEXA ngay hôm nay để nhận tư vấn và báo giá phù hợp.
                </p>

                <div className="mt-8">
                  <Button className="h-12 rounded-full bg-white px-6 font-medium text-zinc-950 hover:bg-zinc-100">
                    Liên hệ ngay
                  </Button>
                </div>
              </div>

              {/* Right: 2x2 grid of contact cards */}
              <div>
                <div className="grid grid-cols-2 gap-4">
                  {contacts.map((c) => {
                    const Icon = c.icon;
                    return (
                      <Link
key={c.id}
  href={
    c.id === "facebook"
      ? "https://www.facebook.com/profile.php?id=100067451700644"
      : "#"
  }
  target={c.id === "facebook" ? "_blank" : undefined}
  rel={c.id === "facebook" ? "noopener noreferrer" : undefined}
  className="flex items-center gap-4 rounded-2xl bg-white/10 px-4 py-4 text-white transition hover:bg-white/20"
>
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-left">
                          <div className="text-sm font-semibold">{c.title}</div>
                          <div className="mt-1 text-xs text-white/90">{c.subtitle}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
