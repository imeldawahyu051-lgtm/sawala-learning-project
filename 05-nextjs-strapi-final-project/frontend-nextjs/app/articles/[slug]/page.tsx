
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStrapiArticles } from "@/lib/strapi";
import { getArticleBySlug } from "@/lib/articles";

type ArticleDetailPageProps = {
    params: Promise<{ slug: string }>;
};

export default async function ArticleDetailPage({
    params,
}: ArticleDetailPageProps) {
    const { slug } = await params;

    const articles = await getStrapiArticles();
    const article = getArticleBySlug(slug, articles);

    if (!article) {
        notFound();
    }

    return (
        <article className="mx-auto max-w-3xl px-6 py-12">
            <Link
                href="/articles"
                className="text-sm font-semibold text-blue-700 hover:text-blue-900"
            >
                ← Kembali ke Artikel
            </Link>

            <div className="mt-8">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                    {article.category}
                </span>

                <h1 className="mt-5 text-3xl font-extrabold leading-tight md:text-5xl">
                    {article.title}
                </h1>

                <p className="mt-5 text-sm text-gray-500">
                    {article.date} · {article.readTime} baca
                </p>

                <img
                    src={article.image}
                    alt={article.title}
                    className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover"
                />

                <p className="mt-8 text-lg leading-8 text-gray-600">
                    {article.excerpt}
                </p>

                <div className="mt-6 whitespace-pre-line text-base leading-8 text-gray-800">
                    {article.content}
                </div>
            </div>
        </article>
    );
}
