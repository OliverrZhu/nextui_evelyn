export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex flex-col"
      style={{
        background:
          "linear-gradient(180deg, #010000 0%, #420303 44%, #841414 84%, #970000 100%)",
      }}
    >
      <section className="flex flex-col h-full items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          {children}
        </div>
      </section>
    </div>
  );
}
