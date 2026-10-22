import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ArtikelKu - Baca dan Temukan Inspirasi",
  description: "Temukan artikel menarik seputar teknologi, pendidikan, desain, dan lainnya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body style={{ margin: 0, padding: 0, backgroundColor: "#f9fafb", fontFamily: "sans-serif" }}>
        
        {/* NAVBAR UTAMA YANG MUNCUL DI SEMUA HALAMAN */}
        <header
          style={{
            backgroundColor: "#ffffff",
            borderBottom: "1px solid #f3f4f6",
            position: "sticky",
            top: 0,
            zIndex: 50,
          }}
        >
          <nav
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 24px",
            }}
          >
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "20px", fontWeight: "bold", color: "#1e3a8a", textDecoration: "none" }}>
              <span>📘</span> ArtikelKu
            </Link>

            <div style={{ display: "flex", gap: "24px", fontSize: "14px", fontWeight: "600" }}>
              <Link href="/" style={{ color: "#4b5563", textDecoration: "none" }}>Beranda</Link>
              <Link href="/articles" style={{ color: "#2563eb", textDecoration: "none" }}>Artikel</Link>
            </div>

            <span style={{ cursor: "pointer", fontSize: "16px" }}>🔍</span>
          </nav>
        </header>

        {/* KONTEN HALAMAN (BERANDA / ARTICLES) */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer style={{ marginTop: "60px", borderTop: "1px solid #e5e7eb", backgroundColor: "#ffffff", padding: "24px 0", textAlign: "center", fontSize: "13px", color: "#6b7280" }}>
          © 2026 ArtikelKu. Temukan inspirasi dari setiap bacaan.
        </footer>

      </body>
    </html>
  );
}