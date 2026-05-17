type Props = {
  label: string;
  variant?: "default" | "muted";
};

export default function SkillPill({ label, variant = "default" }: Props) {
  return <span className={`pill pill--${variant}`}>{label}</span>;
}
