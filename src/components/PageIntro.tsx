export function PageIntro({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="border-b border-line pb-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
        {kicker}
      </p>
      <h1 className="mt-4 font-serif text-[clamp(2.4rem,6vw,4.6rem)] leading-[0.95] tracking-[-0.03em]">
        {title}
      </h1>
      {children && (
        <div className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {children}
        </div>
      )}
    </header>
  );
}
