import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ProjectProvider } from "./context/projectContext";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Conference",
  description: "Centered around the latest trends in design, development, and product management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <ProjectProvider>
          {children}
        </ProjectProvider>
      </body>
    </html>
  );
}
