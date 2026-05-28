interface Props {
  aspect?: 'landscape' | 'portrait' | 'square'
  label?: string
  dark?: boolean
  className?: string
}

const ratios: Record<NonNullable<Props['aspect']>, string> = {
  landscape: 'aspect-[4/3]',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
}

export default function ImagePlaceholder({
  aspect = 'landscape',
  label = 'imagem',
  dark = false,
  className = '',
}: Props) {
  const bg = dark ? '#2C2C2C' : '#EDE6DC'
  const line = dark ? '#3D3D3D' : '#D4C4B0'
  const textColor = dark ? '#3D3D3D' : '#B8A48C'

  return (
    <div
      className={`relative overflow-hidden ${ratios[aspect]} ${className}`}
      style={{ backgroundColor: bg }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 24px, ${line} 24px, ${line} 25px)`,
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          style={{ color: textColor }}
        >
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 15l5-5 4 4 3-3 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span
          className="text-[9px] tracking-[0.22em] uppercase font-medium"
          style={{ color: textColor }}
        >
          {label}
        </span>
      </div>
    </div>
  )
}
