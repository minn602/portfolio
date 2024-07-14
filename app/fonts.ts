import localFont from "next/font/local"

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
