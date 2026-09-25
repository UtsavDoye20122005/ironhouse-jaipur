export function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
        <p className="kicker">{kicker}</p>
        <h1 className="mt-5 max-w-[16ch] text-5xl leading-none md:text-8xl">{title}</h1>
        {lede && <p className="mt-7 max-w-[52ch] text-lg text-muted-foreground">{lede}</p>}
      </div>
    </section>
  );
}
