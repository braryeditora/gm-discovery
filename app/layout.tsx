import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GM Discovery Experience™",
  description: "O primeiro passo da sua jornada com a GM.",
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#F5F3EE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" style={{ colorScheme: "light" }}>
      <head>
        <meta name="color-scheme" content="light" />
      </head>
      <body>{children}</body>
    </html>
  );
}
