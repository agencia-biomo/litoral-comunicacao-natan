interface CutLineProps {
  className?: string;
  showScissors?: boolean;
  orientation?: 'horizontal' | 'vertical';
}

export function CutLine({
  className = '',
  showScissors = true,
  orientation = 'horizontal'
}: CutLineProps) {
  if (orientation === 'vertical') {
    return (
      <div className={`relative flex flex-col items-center ${className}`}>
        {showScissors && (
          <span className="text-gray-400 text-sm rotate-90 mb-2">✂</span>
        )}
        <div className="w-px h-full border-l-2 border-dashed border-gray-300" />
      </div>
    );
  }

  return (
    <div className={`relative flex items-center w-full ${className}`}>
      {showScissors && (
        <span className="text-gray-400 text-sm mr-2 flex-shrink-0">✂</span>
      )}
      <div className="flex-1 border-t-2 border-dashed border-gray-300" />
    </div>
  );
}

// Divider com estilo de impressão
export function PrintDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`py-4 ${className}`}>
      <CutLine />
    </div>
  );
}
