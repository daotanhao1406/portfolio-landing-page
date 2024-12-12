import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistPolySans = localFont({
  src: "./fonts/PolySans.ttf",
  variable: "--font-poly-sans",
  weight: "100 900",
});
const geistAeonik = localFont({
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
        className={`${geistPolySans.variable} ${geistAeonik.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
