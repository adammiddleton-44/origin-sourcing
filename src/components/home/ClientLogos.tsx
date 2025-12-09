const placeholderLogos = [
  "Brand 1",
  "Brand 2",
  "Brand 3",
  "Brand 4",
  "Brand 5",
  "Brand 6",
];

export function ClientLogos() {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container-wide">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-10">
          Trusted by Leading UK Brands
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {placeholderLogos.map((logo, index) => (
            <div
              key={index}
              className="h-12 px-6 flex items-center justify-center bg-muted/50 rounded-lg border border-border text-muted-foreground font-medium hover:bg-muted transition-colors"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
