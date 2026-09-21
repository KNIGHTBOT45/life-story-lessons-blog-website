interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  slug: string;
  large?: boolean;
}

export default function ArticleCard({
  title,
  excerpt,
  category,
  date,
  image,
  slug,
  large = false,
}: ArticleCardProps) {
  return (
    <article className={`article-card ${large ? "article-card-large" : ""}`}>
      <a href={`/posts/${slug}`} className="article-image-wrapper">
        <img src={image} alt={title} className="article-image" />
      </a>

      <div className="article-content">
        <span className="article-category">{category}</span>

        <a href={`/posts/${slug}`}>
          <h3>{title}</h3>
        </a>

        <p>{excerpt}</p>

        <div className="article-meta">
          <span>{date}</span>
          <a href={`/posts/${slug}`}>Read More →</a>
        </div>
      </div>
    </article>
  );
}