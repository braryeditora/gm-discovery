import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GM Discovery Experience™",
  description: "O primeiro passo da sua jornada com a GM.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
