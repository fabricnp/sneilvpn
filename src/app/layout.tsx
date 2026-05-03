import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SneilVPN | Next-Generation Networking",
  description:
    "Ultra-low latency multi-region VPN nodes powered by WireGuard and AWS Global Accelerator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
