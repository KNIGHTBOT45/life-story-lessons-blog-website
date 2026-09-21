interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export default function CategoryCard({
  title,
  description,
  image,
  href,
}: CategoryCardProps) {
  return (
    <a href={href} className="category-card">
      <img src={image} alt={title} />

      <div className="category-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
        <span>Explore →</span>
      </div>
    </a>
  );
}