type Props = {
  index: number;
  title: string;
  teaser: string;
  href: string;
  onNavigate: (id: string) => void;
};

export default function ProjectCard({ index, title, teaser, href, onNavigate }: Props) {
  const id = href.replace("#", "");
  return (
    <a
      href={href}
      className="project-card"
      onClick={(e) => {
        e.preventDefault();
        onNavigate(id);
      }}
    >
      <div className="project-card__index">{String(index).padStart(2, "0")}</div>
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__teaser">{teaser}</p>
      <span className="project-card__cta">
        Read more
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M5 12h14M13 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
