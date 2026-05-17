type Props = {
  children: React.ReactNode;
  attribution?: string;
};

export default function QuoteBlock({ children, attribution }: Props) {
  return (
    <figure className="quote">
      <span className="quote__mark" aria-hidden="true">
        &ldquo;
      </span>
      <blockquote>{children}</blockquote>
      {attribution && <figcaption>{attribution}</figcaption>}
    </figure>
  );
}
