"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <nav
      className="w-full border-b border-[#E8E8E4] bg-[#F5F3EE]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-5">
        {/* Marca — sempre visível, sempre leva à raiz institucional */}
        <Link
          href="/institucional"
          className="text-sm tracking-wide text-[#1A1A1A]"
          style={{ fontFamily: "Playfair Display, serif", fontSize: "16px" }}
        >
          GM Discovery™
        </Link>

        {/* Itens — teto rígido de 5, sem submenu, sem mega-menu */}
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

        {/* Único convite à Jornada presente no header — não é CTA de conversão,
            é o mesmo convite que já existe no Hall, sempre disponível */}
        <Link
          href="/jornada"
          className="text-sm text-[#1A1A1A] hover:text-[#333] transition-colors duration-200"
          style={{ fontWeight: 400, letterSpacing: "0.02em" }}
        >
          Iniciar Jornada →
        </Link>
      </div>
    </nav>
  );
}
