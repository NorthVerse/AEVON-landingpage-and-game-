import { Children, cloneElement, isValidElement, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function Marquee({ className, children, pauseOnHover = true, speed = 40, ...props }) {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const interactionTimeout = useRef();
  const lastTimestamp = useRef(0);

  const childrenArray = Children.toArray(children);
  const repeatedChildren = childrenArray.map((child, index) => {
    if (isValidElement(child)) {
      return cloneElement(child, { key: `marquee-copy-${index}` });
    }

    return child;
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let frameId;

    const animate = (timestamp) => {
      if (!lastTimestamp.current) lastTimestamp.current = timestamp;
      const delta = timestamp - lastTimestamp.current;
      lastTimestamp.current = timestamp;

      if (!isPaused && !isInteracting && container.scrollWidth > container.clientWidth) {
        const distance = (speed * delta) / 1000;
        const nextScroll = container.scrollLeft + distance;
        const resetBoundary = container.scrollWidth / 2;

        container.scrollLeft = nextScroll >= resetBoundary ? nextScroll - resetBoundary : nextScroll;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      lastTimestamp.current = 0;
    };
  }, [isPaused, isInteracting, speed]);

  const pauseInteraction = () => {
    setIsInteracting(true);
    clearTimeout(interactionTimeout.current);
    interactionTimeout.current = window.setTimeout(() => {
      setIsInteracting(false);
    }, 1500);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative flex gap-[var(--gap,1rem)] overflow-x-auto overflow-y-hidden scroll-smooth custom-scrollbar",
        className
      )}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      onWheel={pauseInteraction}
      onPointerDown={pauseInteraction}
      onTouchStart={pauseInteraction}
      {...props}
    >
      <div className="flex gap-[var(--gap,1rem)]">
        {childrenArray}
        {repeatedChildren}
      </div>
    </div>
  );
}
