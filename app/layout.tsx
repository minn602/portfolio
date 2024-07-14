import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

export const metadata: Metadata = {
  title: "Minsun Jung Portfolio",
  icons: {
    icon: "/icon.ico",
  },
}

export const eiko = localFont({
  src: [
    { path: "./_assets/PPEiko-Medium.otf", weight: "400", style: "normal" },
    { path: "./_assets/PPEiko-Heavy.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-eiko",
})

export const mori = localFont({
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
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${eiko.variable} ${mori.variable} font-mori`}>
        {children}
      </body>
    </html>
  )
}
