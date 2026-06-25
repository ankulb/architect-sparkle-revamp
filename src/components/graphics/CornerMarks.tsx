/** Thin architectural L-shaped crosshair brackets in the section corners. */
export function CornerMarks({ className = "" }: { className?: string }) {
  const arm = "absolute h-5 w-5 border-gold/40";
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      <span className={`${arm} left-5 top-5 border-l border-t md:left-8 md:top-8`} />
      <span className={`${arm} right-5 top-5 border-r border-t md:right-8 md:top-8`} />
      <span className={`${arm} bottom-5 left-5 border-b border-l md:bottom-8 md:left-8`} />
      <span className={`${arm} bottom-5 right-5 border-b border-r md:bottom-8 md:right-8`} />
    </div>
  );
}
