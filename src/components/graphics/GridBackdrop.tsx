import { InteractiveGrid } from "./InteractiveGrid";
import { CornerMarks } from "./CornerMarks";

type GridBackdropProps = {
  cellSize?: number;
  radius?: number;
  baseOpacity?: number;
  interactive?: boolean;
  /** Render the L-shaped corner crosshair marks. */
  corners?: boolean;
  /** Add a soft centered gold glow blob behind content. */
  glow?: boolean;
  className?: string;
};

/**
 * One-line section backdrop: blueprint grid + optional warm gold glow and
 * corner crosshair marks. Drop inside a `relative` section with content at a
 * higher stacking context (e.g. wrap content in a `relative z-10` element).
 */
export function GridBackdrop({
  cellSize = 48,
  radius = 220,
  baseOpacity = 0.5,
  interactive = true,
  corners = false,
  glow = false,
  className = "",
}: GridBackdropProps) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {glow && (
        <div
          className="absolute left-1/2 top-1/2 h-[60%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, var(--gold-soft) 0%, transparent 70%)",
          }}
        />
      )}
      <InteractiveGrid
        cellSize={cellSize}
        radius={radius}
        baseOpacity={baseOpacity}
        interactive={interactive}
      />
      {corners && <CornerMarks />}
    </div>
  );
}
