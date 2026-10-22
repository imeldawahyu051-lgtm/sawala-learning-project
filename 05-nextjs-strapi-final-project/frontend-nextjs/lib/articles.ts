
export type Article = {
    id: number;
    title: string;
    slug: string;
    category: string;
    excerpt: string;
    content: string;
    image: string;
    date: string;
    readTime: string;
};

export function getArticleBySlug(
    slug: string,
    articles: Article[]
) {
    return articles.find((article) => article.slug === slug);
}
