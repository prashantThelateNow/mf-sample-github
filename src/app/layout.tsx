import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mindfire | FOSS",
  description:
    "Official GitHub Page for Mindfire Digital LLP. Explore our projects, contributions, and insights in technology, software development, and more. Join us in our journey to push the boundaries of innovation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
