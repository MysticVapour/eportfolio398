import { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  tone?: "light" | "muted" | "dark";
};

export default function Section({ id, eyebrow, title, subtitle, children, tone = "light" }: Props) {
  return (
    <section id={id} className={`section section--${tone}`}>
      <div className="container">
        <header className="section__head">
          {eyebrow && <span className="section__eyebrow">{eyebrow}</span>}
          <h2 className="section__title">{title}</h2>
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
