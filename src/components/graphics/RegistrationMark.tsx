interface RegistrationMarkProps {
  size?: number;
  color?: string;
  className?: string;
}

export function RegistrationMark({
  size = 24,
  color = 'currentColor',
  className = ''
}: RegistrationMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1" />
      <circle cx="12" cy="12" r="6" stroke={color} strokeWidth="1" />
      <circle cx="12" cy="12" r="2" fill={color} />
      <line x1="0" y1="12" x2="24" y2="12" stroke={color} strokeWidth="0.5" />
      <line x1="12" y1="0" x2="12" y2="24" stroke={color} strokeWidth="0.5" />
    </svg>
  );
}

// Versão compacta para uso inline
export function RegistrationMarkInline({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center w-4 h-4 ${className}`}>
      <RegistrationMark size={16} />
    </span>
  );
}
