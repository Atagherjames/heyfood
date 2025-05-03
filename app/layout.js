import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Heyfood | Stores",
  description:
    "A frontend clone of the Heyfood Africa stores page (https://heyfood.africa/stores) built with Next.js and Material UI.",
  icons: {
    icon: "/logo-circle-green.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <section>{children}</section>
        <Footer />
      </body>
    </html>
  );
}
