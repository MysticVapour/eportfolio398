type Props = {
  title: string;
  type: string;
  description: string;
};

export default function ArtifactCard({ title, type, description }: Props) {
  return (
    <article className="artifact">
      <div className="artifact__top">
        <span className="artifact__type">{type}</span>
      </div>
      <h3 className="artifact__title">{title}</h3>
      <p className="artifact__desc">{description}</p>
    </article>
  );
}
