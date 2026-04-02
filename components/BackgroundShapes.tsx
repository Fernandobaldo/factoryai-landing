"use client";

/**
 * BackgroundShapes — Subtle floating geometric forms with very low opacity.
 * Absolutely positioned SVG elements that create depth without distraction.
 */
export default function BackgroundShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large circle — top right */}
      <svg
        className="absolute -top-32 -right-32 w-[500px] h-[500px] opacity-[0.03]"
        viewBox="0 0 500 500"
      >
        <circle cx="250" cy="250" r="200" stroke="#FF4500" strokeWidth="1" fill="none" />
        <circle cx="250" cy="250" r="150" stroke="#FF4500" strokeWidth="0.5" fill="none" />
      </svg>

      {/* Hexagon — left center */}
      <svg
        className="absolute top-1/3 -left-16 w-[300px] h-[300px] opacity-[0.04]"
        viewBox="0 0 300 300"
      >
        <polygon
          points="150,20 270,85 270,215 150,280 30,215 30,85"
          stroke="#FF6B00"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* Small circle — bottom left */}
      <svg
        className="absolute bottom-1/4 left-1/4 w-[200px] h-[200px] opacity-[0.03]"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="80" stroke="#FF4500" strokeWidth="0.5" fill="none" />
      </svg>

      {/* Diagonal line — right side */}
      <svg
        className="absolute top-1/2 right-10 w-[400px] h-[400px] opacity-[0.03]"
        viewBox="0 0 400 400"
      >
        <line x1="0" y1="400" x2="400" y2="0" stroke="#FF6B00" strokeWidth="1" />
        <line x1="50" y1="400" x2="400" y2="50" stroke="#FF4500" strokeWidth="0.5" />
      </svg>

      {/* Triangle — bottom right */}
      <svg
        className="absolute bottom-10 right-1/4 w-[250px] h-[250px] opacity-[0.03]"
        viewBox="0 0 250 250"
      >
        <polygon
          points="125,30 230,220 20,220"
          stroke="#FF4500"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* Grid dots pattern — center */}
      <svg
        className="absolute top-2/3 left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-[0.02]"
        viewBox="0 0 600 200"
      >
        {Array.from({ length: 12 }).map((_, i) =>
          Array.from({ length: 4 }).map((_, j) => (
            <circle
              key={`${i}-${j}`}
              cx={i * 50 + 25}
              cy={j * 50 + 25}
              r="2"
              fill="#FF4500"
            />
          ))
        )}
      </svg>
    </div>
  );
}
