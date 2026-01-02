interface CropMarksProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function CropMarks({
  children,
  className = '',
  color = 'gray-400',
  size = 'md'
}: CropMarksProps) {
  const sizeMap = {
    sm: { mark: 'w-4 h-4', offset: '-top-2 -left-2' },
    md: { mark: 'w-6 h-6', offset: '-top-3 -left-3' },
    lg: { mark: 'w-8 h-8', offset: '-top-4 -left-4' }
  };

  const { mark, offset } = sizeMap[size];
  const borderColor = `border-${color}`;

  return (
    <div className={`relative ${className}`}>
      {/* Top Left */}
      <div
        className={`absolute ${mark} ${offset.replace('-left-', '-left-')} border-t-2 border-l-2 ${borderColor}`}
        style={{ top: size === 'sm' ? '-8px' : size === 'md' ? '-12px' : '-16px', left: size === 'sm' ? '-8px' : size === 'md' ? '-12px' : '-16px' }}
      />

      {/* Top Right */}
      <div
        className={`absolute ${mark} border-t-2 border-r-2 ${borderColor}`}
        style={{ top: size === 'sm' ? '-8px' : size === 'md' ? '-12px' : '-16px', right: size === 'sm' ? '-8px' : size === 'md' ? '-12px' : '-16px' }}
      />

      {/* Bottom Left */}
      <div
        className={`absolute ${mark} border-b-2 border-l-2 ${borderColor}`}
        style={{ bottom: size === 'sm' ? '-8px' : size === 'md' ? '-12px' : '-16px', left: size === 'sm' ? '-8px' : size === 'md' ? '-12px' : '-16px' }}
      />

      {/* Bottom Right */}
      <div
        className={`absolute ${mark} border-b-2 border-r-2 ${borderColor}`}
        style={{ bottom: size === 'sm' ? '-8px' : size === 'md' ? '-12px' : '-16px', right: size === 'sm' ? '-8px' : size === 'md' ? '-12px' : '-16px' }}
      />

      {children}
    </div>
  );
}
