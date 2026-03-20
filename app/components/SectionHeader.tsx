interface SectionHeaderProps {
  eyebrow: string;
  children: React.ReactNode;
}

export default function SectionHeader({ eyebrow, children }: SectionHeaderProps) {
  return (
    <div>
      <div className="section-eyebrow">
        <span className="section-eyebrow__label">{eyebrow}</span>
        <div className="section-eyebrow__rule" />
      </div>
      <h2 className="section-heading">
        {children}
      </h2>
    </div>
  );
}
