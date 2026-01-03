interface CMYKColorBarProps {
  variant?: 'full' | 'compact' | 'dots';
  className?: string;
  height?: string;
}

export function CMYKColorBar({
  variant = 'full',
  className = '',
  height = 'h-3'
}: CMYKColorBarProps) {
  const cyanShades = [
    'bg-[#E0F7FA]',
    'bg-[#80DEEA]',
    'bg-[#00D4FF]',
    'bg-[#0097A7]',
    'bg-[#006064]'
  ];

  const magentaShades = [
    'bg-[#FCE4EC]',
    'bg-[#F48FB1]',
    'bg-[#FF00FF]',
    'bg-[#C2185B]',
    'bg-[#880E4F]'
  ];

  const yellowShades = [
    'bg-[#FFFDE7]',
    'bg-[#FFF59D]',
    'bg-[#FFEB00]',
    'bg-[#FBC02D]',
    'bg-[#F57F17]'
  ];

  const blackShades = [
    'bg-[#D4D4D4]',
    'bg-[#A3A3A3]',
    'bg-[#737373]',
    'bg-[#404040]',
    'bg-[#1A1A1A]'
  ];

  if (variant === 'dots') {
    return (
      <div className={`flex gap-2 items-center ${className}`}>
        <div className="w-3 h-3 rounded-full bg-[#00D4FF]" />
        <div className="w-3 h-3 rounded-full bg-[#FF00FF]" />
        <div className="w-3 h-3 rounded-full bg-[#FFEB00]" />
        <div className="w-3 h-3 rounded-full bg-[#1A1A1A]" />
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex ${height} ${className}`}>
        <div className="flex-1 bg-[#00D4FF]" />
        <div className="flex-1 bg-[#FF00FF]" />
        <div className="flex-1 bg-[#FFEB00]" />
        <div className="flex-1 bg-[#1A1A1A]" />
      </div>
    );
  }

  // Full variant - escala completa de cada cor
  return (
    <div className={`flex ${height} ${className}`}>
      {cyanShades.map((shade, i) => (
        <div key={`c-${i}`} className={`flex-1 ${shade}`} />
      ))}
      {magentaShades.map((shade, i) => (
        <div key={`m-${i}`} className={`flex-1 ${shade}`} />
      ))}
      {yellowShades.map((shade, i) => (
        <div key={`y-${i}`} className={`flex-1 ${shade}`} />
      ))}
      {blackShades.map((shade, i) => (
        <div key={`k-${i}`} className={`flex-1 ${shade}`} />
      ))}
    </div>
  );
}

// Barra vertical
export function CMYKColorBarVertical({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col w-3 ${className}`}>
      <div className="flex-1 bg-[#00D4FF]" />
      <div className="flex-1 bg-[#FF00FF]" />
      <div className="flex-1 bg-[#FFEB00]" />
      <div className="flex-1 bg-[#1A1A1A]" />
    </div>
  );
}

// CMYK Labels (C100 M0 Y0 K0 style)
export function CMYKLabels({ className = '' }: { className?: string }) {
  return (
    <div className={`flex gap-4 text-xs font-mono text-gray-500 ${className}`}>
      <span>C100 M0 Y0 K0</span>
      <span>C0 M100 Y0 K0</span>
      <span>C0 M0 Y100 K0</span>
      <span>C0 M0 Y0 K100</span>
    </div>
  );
}
