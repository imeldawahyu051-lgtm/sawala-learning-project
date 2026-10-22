import Link from "next/link";
import ArticleList from "@/components/organisms/ArticleList";
import { getStrapiArticles } from "@/lib/strapi";

export default async function Home() {
  const articles = await getStrapiArticles();

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px 24px" }}>
      
      {/* HERO SECTION (KOTAK BIRU MUDA) */}
      <div
        style={{
          backgroundColor: "#eff6ff",
          borderRadius: "24px",
          padding: "40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid #dbeafe",
          boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        <div style={{ maxWidth: "550px" }}>
          <h1 style={{ fontSize: "32px", fontWeight: "850", color: "#1e3a8a", lineHeight: "1.2", margin: "0 0 12px 0" }}>
            Selamat datang di ArtikelKu
          </h1>
          <p style={{ fontSize: "15px", color: "#4b5563", lineHeight: "1.5", margin: "0 0 24px 0" }}>
            Temukan artikel menarik seputar teknologi, pemrograman, dan pengembangan web.
          </p>
          
          {/* Kotak Pencarian */}
          <div style={{ display: "flex", gap: "8px", maxWidth: "420px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                padding: "10px 16px",
                flex: 1,
                border: "1px solid #e5e7eb",
                boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
              }}
            >
              <span style={{ marginRight: "8px", color: "#9ca3af" }}>🔍</span>
              <input
                type="text"
                placeholder="Cari artikel..."
                style={{
                  border: "none",
                  outline: "none",
                  width: "100%",
                  fontSize: "14px",
                  backgroundColor: "transparent",
                }}
              />
            </div>
            <button
              style={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                border: "none",
                borderRadius: "12px",
                padding: "0 16px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              🔍
            </button>
          </div>
        </div>

        {/* Ilustrasi Web */}
        <div
          style={{
            width: "220px",
            height: "150px",
            backgroundColor: "#dbeafe",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#2563eb",
            fontWeight: "bold",
            border: "1px solid #bfdbfe",
          }}
        >
          <span style={{ fontSize: "28px", marginBottom: "4px" }}>💻</span>
          <span style={{ fontSize: "13px" }}>&lt;/&gt; Web Dev</span>
        </div>
      </div>

      {/* ARTIKEL TERBARU */}
      <section style={{ marginTop: "40px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#111827", margin: 0 }}>
            Artikel Terbaru
          </h2>
          <Link href="/articles" style={{ fontSize: "14px", fontWeight: "600", color: "#2563eb", textDecoration: "none" }}>
            Lihat Semua →
          </Link>
        </div>

        {/* List Kartu Artikel */}
        <ArticleList articles={articles.slice(0, 3)} />
      </section>

    </div>
  );
}