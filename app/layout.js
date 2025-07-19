import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata
export const metadata = {
  metadataBase: new URL("https://zilolabs.com"),
  title: {
    default: "Zilo Labs | Zilo Software Agency & Digital Solutions",
    template: "%s | Zilo Labs",
  },
  description:
    "Zilo Labs is a top-tier software company delivering custom digital solutions. Specializing in full-stack development, mobile apps, and modern web experiences.",
  keywords: [
    "Zilo Labs",
    "Zilo Software Agency",
    "Software House",
    "Zilo Digital",
    "Web Development",
    "Mobile App Development",
    "Custom Software",
    "Full Stack Development",
    "Zilo",
    "Tech Company",
    "Next.js",
  ],
  openGraph: {
    title: "Zilo Labs | Zilo Software Agency & Digital Solutions",
    description:
      "Explore Zilo Labs – a modern software house delivering cutting-edge web and mobile applications.",
    url: "https://zilolabs.com",
    siteName: "Zilo Labs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://zilolabs.com/ogimage.jpg", // Update this if needed
        width: 1200,
        height: 630,
        alt: "Zilo Labs Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zilo Labs | Zilo Software Agency & Digital Solutions",
    description:
      "Zilo Labs is your go-to software partner for powerful, scalable web and mobile applications.",
    creator: "@zilolabs", // Optional
    images: ["https://zilolabs.com/ogimage.jpg"], // Update if needed
  },
  icons: {
    icon: "/assets/favicon.png", // Use public/favicon.png (not relative path)
    shortcut: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
