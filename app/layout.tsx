import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yasmeen — Data Science & AI/ML",
  description:
    "Portfolio of Yasmeen, a Robotics & AI student at Thapar Institute working across data science, machine learning, computer vision and LLM evaluation.",
  openGraph: {
    title: "Yasmeen — Data Science & AI/ML",
    description: "Predictive modelling, multimodal research, computer vision and RAG evaluation.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#0d0e12", viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;1,9..144,400;1,9..144,700&family=Hanken+Grotesk:wght@400;500;600&family=JetBrains+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
