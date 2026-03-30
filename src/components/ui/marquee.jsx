import { cn } from "@/lib/utils";

export function Marquee({ className, children, pauseOnHover = true, ...props }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden",
        pauseOnHover && "[&_svg]:group-hover:[animation-play-state:paused]",
        className
      )}
      {...props}
    >
      <div className="flex animate-marquee gap-[var(--gap,1rem)] [animation-duration:var(--duration,40s)]">
        {children}
      </div>
      <div
        className="absolute inset-0 flex animate-marquee gap-[var(--gap,1rem)] [animation-duration:var(--duration,40s)]"
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
