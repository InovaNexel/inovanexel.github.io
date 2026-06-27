export function NetworkBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-40"
      aria-hidden
    >
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#050b18" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#glow)" />
        {[
          [12, 18],
          [28, 12],
          [45, 22],
          [62, 8],
          [78, 20],
          [88, 35],
          [72, 42],
          [55, 38],
          [38, 48],
          [22, 55],
          [15, 72],
          [35, 68],
          [58, 62],
          [82, 58],
          [95, 45],
        ].map(([cx, cy], i) => (
          <g key={i}>
            {i > 0 && (
              <line
                x1={`${[12, 28, 45, 62, 78, 88, 72, 55, 38, 22, 15, 35, 58, 82][(i - 1) % 14]}%`}
                y1={`${[18, 12, 22, 8, 20, 35, 42, 38, 48, 55, 72, 68, 62, 58][(i - 1) % 14]}%`}
                x2={`${cx}%`}
                y2={`${cy}%`}
                stroke="#3B82F6"
                strokeWidth="0.5"
                strokeOpacity="0.25"
              />
            )}
            <circle
              cx={`${cx}%`}
              cy={`${cy}%`}
              r="2"
              fill="#60A5FA"
              fillOpacity="0.6"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
