export function WaterLines({ className = "" }: { className?: string }) {
  return (
    <svg className={`water-lines ${className}`} viewBox="0 0 900 900" aria-hidden="true">
      {[120, 220, 320, 420, 520, 620, 720].map((r) => <circle key={r} cx="450" cy="450" r={r / 2} />)}
    </svg>
  );
}
