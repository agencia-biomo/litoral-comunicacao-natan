interface HalftoneBackgroundProps {
  color?: 'cyan' | 'magenta' | 'yellow' | 'black' | 'mixed';
  opacity?: number;
  size?: number;
  className?: string;
}

export function HalftoneBackground({
  color = 'cyan',
  opacity = 0.05,
  size = 10,
  className = ''
}: HalftoneBackgroundProps) {
  const colorMap: Record<string, string> = {
    cyan: '#00D4FF',
    magenta: '#FF00FF',
    yellow: '#FFEB00',
    black: '#1A1A1A',
  };

  if (color === 'mixed') {
    return (
      <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
        {/* Cyan - top right */}
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, rgba(0,212,255,${opacity * 3}) 0%, transparent 70%)`,
          }}
        />
        {/* Magenta - bottom left */}
        <div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, rgba(255,0,255,${opacity * 3}) 0%, transparent 70%)`,
          }}
        />
        {/* Yellow - center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, rgba(255,235,0,${opacity * 2}) 0%, transparent 70%)`,
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, ${colorMap[color]} 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
        opacity,
      }}
    />
  );
}

// Gradient overlay com cores CMYK
export function CMYKGradientOverlay({ className = '' }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        background: `
          radial-gradient(circle at 100% 0%, rgba(0,212,255,0.15) 0%, transparent 50%),
          radial-gradient(circle at 0% 100%, rgba(255,0,255,0.15) 0%, transparent 50%),
          radial-gradient(circle at 100% 100%, rgba(255,235,0,0.1) 0%, transparent 50%)
        `,
      }}
    />
  );
}
