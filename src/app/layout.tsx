import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import { Toaster } from "react-hot-toast";

const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "হোম | বাজার দর",
  description: "বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${hindSiliguri.className} h-full antialiased`}
    >
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <Marquee />
          {children}
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
