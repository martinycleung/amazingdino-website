import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export function Logo({ className, size = "md", showTagline = false }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-14 w-14",
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(sizeClasses[size], "flex-shrink-0")}
      >
        {/* Diamond/Rounded Square Border - rotated 45 degrees */}
        <rect
          x="50"
          y="5"
          width="63.64"
          height="63.64"
          rx="8"
          transform="rotate(45 50 50)"
          stroke="#0d7377"
          strokeWidth="3"
          fill="none"
        />

        {/* Honeycomb hexagon pattern - 4 hexagons arranged in honeycomb */}
        {/* Top hexagon - filled */}
        <polygon
          points="50,20 60,26 60,38 50,44 40,38 40,26"
          fill="#0d7377"
        />

        {/* Bottom left hexagon - outline */}
        <polygon
          points="35,44 45,50 45,62 35,68 25,62 25,50"
          stroke="#0d7377"
          strokeWidth="2"
          fill="none"
        />

        {/* Bottom right hexagon - outline */}
        <polygon
          points="65,44 75,50 75,62 65,68 55,62 55,50"
          stroke="#0d7377"
          strokeWidth="2"
          fill="none"
        />

        {/* Bottom center hexagon - filled */}
        <polygon
          points="50,56 60,62 60,74 50,80 40,74 40,62"
          fill="#0d7377"
        />
      </svg>

      {showTagline && (
        <div className="flex flex-col">
          <span className="text-xl lg:text-2xl font-bold tracking-tight text-white">
            AMAZING<span className="text-teal-500">DINO</span>
          </span>
          <span className="text-[10px] lg:text-xs text-zinc-400 tracking-widest uppercase">
            Your Trusted IT Partner
          </span>
        </div>
      )}
    </div>
  );
}

interface LogoIconProps {
  className?: string;
}

export function LogoIcon({ className }: LogoIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-8", className)}
    >
      {/* Diamond/Rounded Square Border - rotated 45 degrees */}
      <rect
        x="50"
        y="5"
        width="63.64"
        height="63.64"
        rx="8"
        transform="rotate(45 50 50)"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />

      {/* Honeycomb hexagon pattern - 4 hexagons arranged in honeycomb */}
      {/* Top hexagon - filled */}
      <polygon
        points="50,20 60,26 60,38 50,44 40,38 40,26"
        fill="currentColor"
      />

      {/* Bottom left hexagon - outline */}
      <polygon
        points="35,44 45,50 45,62 35,68 25,62 25,50"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />

      {/* Bottom right hexagon - outline */}
      <polygon
        points="65,44 75,50 75,62 65,68 55,62 55,50"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />

      {/* Bottom center hexagon - filled */}
      <polygon
        points="50,56 60,62 60,74 50,80 40,74 40,62"
        fill="currentColor"
      />
    </svg>
  );
}
