import type { Metadata } from "next";
import "./globals.css";

const superstarSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="8" fill="#003882"/>
  <polygon points="16,4 19.8,11.8 28.4,13 22.2,19.1 23.6,27.6 16,23.6 8.4,27.6 9.8,19.1 3.6,13 12.2,11.8" fill="#FCD22B"/>
</svg>
`.trim();

const iconDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(superstarSvg)}`;

export const metadata: Metadata = {
  title: "Mr. Weiss's First Grade SuperStars | Room 1",
  description:
    "Official classroom dashboard for Mr. Weiss's 1st Grade class. Daily routines, weekly specials schedule, and important parent portal resources.",
  icons: {
    icon: iconDataUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}