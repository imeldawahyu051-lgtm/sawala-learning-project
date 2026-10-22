"use client";

import { useState, useEffect } from "react";
import { getStrapiArticles } from "@/lib/strapi";
import type { Article } from "@/lib/articles";

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStrapiArticles()
      .then((data) => setArticles(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px 24px" }}>
      
      {/* HERO SECTION HALAMAN ARTIKEL */}
      <div
        style={{
          backgroundColor: "#eff6ff",
          borderRadius: "24px",
          padding: "40px",
          marginBottom: "40px",
          border: "1px solid #dbeafe",
          boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
        }}
      >
        <p style={{ fontSize: "13px", fontWeight: "700", color: "#2563eb", textTransform: "uppercase", marginBottom: "8px" }}>
          Jelajahi bacaan
        </p>
        <h1 style={{ fontSize: "32px", fontWeight: "850", color: "#1e3a8a", margin: "0 0 12px 0" }}>
          Semua Artikel
        </h1>
        <p style={{ fontSize: "15px", color: "#4b5563", maxWidth: "600px", lineHeight: "1.5", margin: 0 }}>
          Kumpulan artikel pilihan untuk menambah pengetahuan dan menemukan inspirasi baru.
        </p>
      </div>

      {/* LIST KARTU ARTIKEL */}
      {loading ? (
        <p style={{ textAlign: "center", color: "#6b7280", padding: "40px 0" }}>Memuat artikel...</p>
      ) : articles.length === 0 ? (
        <p style={{ textAlign: "center", color: "#6b7280", padding: "40px 0" }}>Belum ada artikel yang tersedia.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
          {articles.map((article) => (
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
                maxWidth: "360px",
              }}
            >
              {/* Foto */}
              <div style={{ width: "100%", height: "170px", backgroundColor: "#f3f4f6", overflow: "hidden" }}>
                <img src={article.image} alt={article.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>

              {/* Konten */}
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div>
                  <span style={{ backgroundColor: "#eff6ff", color: "#2563eb", padding: "4px 10px", borderRadius: "6px", fontSize: "12px", fontWeight: "600" }}>
                    {article.category}
                  </span>
                </div>

                <h3 style={{ marginTop: "10px", fontSize: "17px", fontWeight: "700", color: "#111827", lineHeight: "1.4" }}>
                  {article.title}
                </h3>

                <p style={{ marginTop: "8px", fontSize: "13px", color: "#4b5563", lineHeight: "1.5", marginBottom: "16px" }}>
                  {article.excerpt}
                </p>

                <div style={{ marginTop: "auto", paddingTop: "12px", borderTop: "1px solid #f3f4f6", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", color: "#6b7280" }}>
                  <span>{article.date}</span>
                  {/* TOMBOL BUKA POP-UP */}
                  <button
                    onClick={() => setSelectedArticle(article)}
                    style={{ color: "#2563eb", fontWeight: "600", background: "none", border: "none", cursor: "pointer", padding: 0, fontSize: "12px" }}
                  >
                    Baca Selengkapnya →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* POP-UP (MODAL) DETAIL ARTIKEL */}
      {selectedArticle && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            padding: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              maxWidth: "700px",
              width: "100%",
              maxHeight: "85vh",
              overflowY: "auto",
              padding: "30px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              position: "relative",
            }}
          >
            {/* Tombol Tutup (X) */}
            <button
              onClick={() => setSelectedArticle(null)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                backgroundColor: "#f3f4f6",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                color: "#4b5563",
              }}
            >
              ✕
            </button>

            {/* Kategori & Tanggal di Pop-up */}
            <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "12px" }}>
              <span style={{ backgroundColor: "#eff6ff", color: "#2563eb", padding: "4px 10px", borderRadius: "6px", fontSize: "12px", fontWeight: "600" }}>
                {selectedArticle.category}
              </span>
              <span style={{ fontSize: "12px", color: "#6b7280" }}>{selectedArticle.date}</span>
            </div>

            {/* Judul di Pop-up */}
            <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#111827", marginBottom: "16px", lineHeight: "1.3" }}>
              {selectedArticle.title}
            </h2>

            {/* Gambar di Pop-up */}
            <div style={{ width: "100%", height: "260px", borderRadius: "12px", overflow: "hidden", marginBottom: "20px" }}>
              <img src={selectedArticle.image} alt={selectedArticle.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            {/* Isi Konten Artikel */}
            <div style={{ fontSize: "14px", color: "#374151", lineHeight: "1.7", whiteSpace: "pre-line" }}>
              {selectedArticle.content || selectedArticle.excerpt}
            </div>

            {/* Tombol Tutup Bawah */}
            <div style={{ marginTop: "30px", textAlign: "right" }}>
              <button
                onClick={() => setSelectedArticle(null)}
                style={{
                  backgroundColor: "#2563eb",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "10px",
                  padding: "10px 20px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}