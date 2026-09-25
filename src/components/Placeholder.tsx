export function MediaPlaceholder({
  label = "",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden border border-line bg-paper-2 ${className}`}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(135deg, transparent 48%, var(--line) 48%, var(--line) 52%, transparent 52%)",
          backgroundSize: "14px 14px",
        }}
      />
      <div className="relative flex h-full min-h-[220px] flex-col items-center justify-center gap-2 px-6 text-center">
        <span className="text-sm text-ink-soft">{label}</span>
      </div>
    </div>
  );
}
