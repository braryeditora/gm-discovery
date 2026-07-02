"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface NavItem {
  label: string;
  href: string;
}

const ITENS: NavItem[] = [
  { label: "Sobre", href: "/institucional" },
  { label: "Como pensamos", href: "/institucional/como-pensamos" },
  { label: "Frameworks", href: "/institucional/frameworks" },
  { label: "Cadernos", href: "/institucional/cadernos" },
  { label: "Contato", href: "/institucional/contato" },
];

export default function Nav() {
  const pathname = usePathname();
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    setAberto(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <nav
      className="w-full border-b border-[#E8E8E4] bg-[#F5F3EE] relative z-50"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-5">
        <Link
          href="/institucional"
          className="text-sm tracking-wide text-[#1A1A1A]"
          style={{ fontFamily: "Playfair Display, serif", fontSize: "16px" }}
        >
          GM Discovery™
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {ITENS.map((item) => {
            const ativo = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm transition-colors duration-200 ${
                    ativo
                      ? "text-[#1A1A1A]"
                      : "text-[#6B6B6B] hover:text-[#1A1A1A]"
                  }`}
                  style={{ fontWeight: 300, letterSpacing: "0.02em" }}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/jornada"
          className="hidden md:inline text-sm text-[#1A1A1A] hover:text-[#333] transition-colors duration-200"
          style={{ fontWeight: 400, letterSpacing: "0.02em" }}
        >
          Iniciar Jornada →
        </Link>

        <button
          type="button"
          onClick={() => setAberto(!aberto)}
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          className="md:hidden text-sm text-[#1A1A1A]"
          style={{ fontWeight: 400, letterSpacing: "0.04em" }}
        >
          {aberto ? "Fechar" : "Menu"}
        </button>
      </div>

      <div
        id="menu-mobile"
        className="md:hidden fixed inset-0"
        style={{
          top: "73px",
          background: "#F5F3EE",
          opacity: aberto ? 1 : 0,
          visibility: aberto ? "visible" : "hidden",
          transition: "opacity 0.3s ease",
          zIndex: 40,
        }}
      >
        <ul
          className="flex flex-col items-center justify-center h-full gap-10"
          style={{ paddingBottom: "73px" }}
        >
          {ITENS.map((item) => {
            const ativo = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={ativo ? "text-[#1A1A1A]" : "text-[#4A4A4A]"}
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "22px",
                    fontWeight: 400,
                  }}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li style={{ marginTop: "24px" }}>
            <Link
              href="/jornada"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                color: "#1A1A1A",
                letterSpacing: "0.04em",
              }}
            >
              Iniciar Jornada →
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
