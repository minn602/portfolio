import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/common/Header";
import Footer from "./_components/Footer";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Minsun Jung | Frontend Engineer",
  description: "Frontend Engineer Minsun Jung based in London",
  icons: {
    icon: "/icon.ico",
  },
};

const eiko = localFont({
  src: [
    { path: "./_assets/PPEiko-Medium.otf", weight: "400", style: "normal" },
    { path: "./_assets/PPEiko-Heavy.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-eiko",
});

const mori = localFont({
  src: [
    {
      path: "./_assets/PPMori-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./_assets/PPMori-SemiBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mori",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${eiko.variable} ${mori.variable} font-mori mx-auto max-w-3xl px-6 flex flex-col lg:max-w-7xl lg:px-8`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
