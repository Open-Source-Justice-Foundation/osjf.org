import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Open Source Justice Foundation",
  description:
    "Empowering sovereign communities and individuals to peacefully and voluntarily resolve their disputes through open-source tools.",
};

const hubot = localFont({
  variable: "--font-hubot",
  display: "swap",
  src: [
    {
      path: "./HubotSans-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "./HubotSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./HubotSans-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "./HubotSans-SemiBold.woff2",
      weight: "600",
      style: "semibold",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hubot.variable}`}>{children}</body>
    </html>
  );
}
