import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Open Source Justice Foundation",
  metadataBase: new URL("https://osjf.org"),
  description:
    "Supporting open-source developers and projects that increase access to justice with open protocols and technology.",
  openGraph: {
    title: "Open Source Justice Foundation",
    description:
      "Supporting open-source developers and projects that increase access to justice with open protocols and technology.",
    url: "https://osjf.org",
    siteName: "Open Source Justice Foundation",
    locale: "en_US",
    type: "website",
    images: { url: "https://osjf.org/opengraph-image.png", alt: "OSJF Logo" },
  },
  twitter: {
    images: {
      url: "https://osjf.org/twitter-image.png",
      alt: "OSJF Logo",
    },
  },
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
