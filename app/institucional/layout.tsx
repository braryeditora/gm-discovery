import Nav from "@/components/ui/Nav";

export default function InstitucionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F5F3EE]">
      <Nav />
      <main className="max-w-5xl mx-auto px-6 py-16">{children}</main>
    </div>
  );
}
