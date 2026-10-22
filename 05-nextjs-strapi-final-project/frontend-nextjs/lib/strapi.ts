
import type { Article } from "@/lib/articles";

const STRAPI_URL =
    process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

type StrapiBlock = {
    type?: string;
    children?: { text?: string }[];
};

type StrapiArticle = {
    id: number;
    title: string;
    slug: string;
    excerpt?: string | null;
    category?: string | null;
    content?: StrapiBlock[] | null;
    image?: {
        url?: string;
        alternativeText?: string | null;
    } | null;
    publishedAt?: string | null;
};

function getContentText(content?: StrapiBlock[] | null): string {
    return (
        content
            ?.map((block) =>
                block.children?.map((child) => child.text ?? "").join("") ?? ""
            )
            .filter(Boolean)
            .join("\n\n") ?? ""
    );
}

function formatDate(date?: string | null): string {
    if (!date) return "Tanggal tidak tersedia";

    return new Intl.DateTimeFormat("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date));
}

export async function getStrapiArticles(): Promise<Article[]> {
    const response = await fetch(
        `${STRAPI_URL}/api/articles?populate=image`,
        { cache: "no-store" }
    );

    if (!response.ok) {
        throw new Error(
            `Gagal mengambil artikel dari Strapi: ${response.status}`
        );
    }

    const result: { data: StrapiArticle[] } = await response.json();

    return result.data.map((item) => ({
        id: item.id,
        title: item.title,
        slug: item.slug,
        category: item.category || "Umum",
        excerpt: item.excerpt || "",
        content: getContentText(item.content),
        image: item.image?.url
            ? item.image.url.startsWith("http")
                ? item.image.url
                : `${STRAPI_URL}${item.image.url}`
            : "https://placehold.co/1200x675?text=ArtikelKu",
        date: formatDate(item.publishedAt),
        readTime: `${Math.max(
            1,
            Math.ceil(getContentText(item.content).split(/\s+/).filter(Boolean).length / 200)
        )} menit`,
    }));
}
