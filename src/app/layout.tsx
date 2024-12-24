import type { Metadata } from "next";
import { Geist, Work_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Work_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - ResumeBuilder.so",
    absolute: "ResumeBuilder.so"
  },
  description: "ResumeBuilder.so is a powerful and user-friendly platform for creating, editing, and customizing professional resumes. Whether you're starting your career or a seasoned professional, ResumeBuilder.so has everything you need to craft the perfect resume.",
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
