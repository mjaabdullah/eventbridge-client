interface EmptyStateProps {
  title: string;
  description: string;
}

const EmptyState = ({ title, description }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-brand-secondary/30 px-6 py-16 text-center">
      <span className="text-4xl" aria-hidden="true">
        🔍
      </span>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="max-w-sm text-sm text-foreground/60">{description}</p>
    </div>
  );
};

export default EmptyState;
