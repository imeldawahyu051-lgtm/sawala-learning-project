
import Link from "next/link";
import type { Article } from "@/lib/articles";

type ArticleCardProps = {
    article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
    return (
        <Link
            href={`/articles/${article.slug}`}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
        >
            <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
            </div>

            <div className="p-5">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    {article.category}
                </span>

                <h2 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-blue-700">
                    {article.title}
                </h2>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
                    {article.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between gap-2 text-xs text-gray-500">
                    <span>{article.date}</span>
                    <span>{article.readTime} baca</span>
                </div>
            </div>
        </Link>
    );
}
