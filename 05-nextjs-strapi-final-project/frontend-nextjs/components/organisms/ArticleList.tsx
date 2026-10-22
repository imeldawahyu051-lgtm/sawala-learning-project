import Link from "next/link";
import type { Article } from "@/lib/articles";

interface ArticleListProps {
  articles: Article[];
}

export default function ArticleList({ articles }: ArticleListProps) {
  if (!articles || articles.length === 0) {
    return (
      <p style={{ textAlign: "center", color: "#6b7280", padding: "40px 0" }}>
        Belum ada artikel yang tersedia.
      </p>
    );
  }

  return (
    /* Menggunakan flex/grid dengan max-width agar kartu tidak melebar bebas */
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "24px",
        marginTop: "16px",
      }}
    >
      {articles.map((article) => (
        /* KARTU DENGAN UKURAN PAS (TIDAK TERLALU LEBAR) */
        <article
          key={article.id}
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "360px", // Mengunci lebar maksimal kartu agar tidak kepanjangan
          }}
        >
          {/* FOTO */}
          <div
            style={{
              width: "100%",
              height: "170px",
              backgroundColor: "#f3f4f6",
              overflow: "hidden",
            }}
          >
            <img
              src={article.image}
              alt={article.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* KONTEN TEKS */}
          <div
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}
          >
            {/* Badge Kategori */}
            <div>
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "#eff6ff",
                  color: "#2563eb",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                {article.category}
              </span>
            </div>

            {/* Judul Artikel */}
            <h3
              style={{
                marginTop: "10px",
                fontSize: "17px",
                fontWeight: "700",
                color: "#111827",
                lineHeight: "1.4",
              }}
            >
              <Link
                href={`/articles/${article.slug}`}
                style={{ color: "#111827", textDecoration: "none" }}
              >
                {article.title}
              </Link>
            </h3>

            {/* Deskripsi */}
            <p
              style={{
                marginTop: "8px",
                fontSize: "13px",
                color: "#4b5563",
                lineHeight: "1.5",
                marginBottom: "16px",
              }}
            >
              {article.excerpt}
            </p>

            {/* Tanggal & Link Baca */}
            <div
              style={{
                marginTop: "auto",
                paddingTop: "12px",
                borderTop: "1px solid #f3f4f6",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "12px",
                color: "#6b7280",
              }}
            >
              <span>{article.date}</span>

              <Link
                href={`/articles/${article.slug}`}
                style={{
                  color: "#2563eb",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Baca Selengkapnya →
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}