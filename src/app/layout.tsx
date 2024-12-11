import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/PolySans.ttf",
  variable: "--font-poly-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/Aeonik/Aeonik-Bold.otf",
  variable: "--font-aeonik-bold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Porfolio Landing Page",
  description: "Porfolio Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
