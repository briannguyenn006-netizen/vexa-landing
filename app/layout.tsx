import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VEXA | Fulfillment & 3PL tại Mỹ cho Seller Việt",
  description: "VEXA cung cấp dịch vụ nhận hàng, lưu kho, đóng gói và giao hàng nội địa Mỹ dành cho seller Việt Nam.",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "VEXA | Fulfillment & 3PL tại Mỹ cho Seller Việt",
    description: "VEXA cung cấp dịch vụ nhận hàng, lưu kho, đóng gói và giao hàng nội địa Mỹ dành cho seller Việt Nam.",
    url: "https://vexa.us",
    siteName: "VEXA",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/logo.svg",
        width: 64,
        height: 64,
        alt: "VEXA Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VEXA | Fulfillment & 3PL tại Mỹ cho Seller Việt",
    description: "VEXA cung cấp dịch vụ nhận hàng, lưu kho, đóng gói và giao hàng nội địa Mỹ dành cho seller Việt Nam.",
    images: ["/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${geistSans.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}