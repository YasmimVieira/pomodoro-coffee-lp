import styles from './CoffeeCup.module.css'

interface Props {
  fill?: number       
  size?: number
  showSteam?: boolean
  showCheck?: boolean
}

export function CoffeeCup({
  fill = 0,
  size = 120,
  showSteam = false,
  showCheck = false,
}: Props) {
  const w = size * 0.8
  const h = size
  const liquidY = h * 0.12 + (1 - fill) * h * 0.6
  const liquidH = fill * h * 0.6
  const clipId = `cup-${size}-${fill}`
  const gradId = `liq-${size}`

  return (
    <div className={styles.wrapper} style={{ width: w, height: h + 30 }}>
      {showSteam && fill > 0.4 && (
        <div className={styles.steam}>
          {[0, 0.7, 1.3].map(delay => (
            <span
              key={delay}
              className={styles.steamLine}
              style={{ animationDelay: `${delay}s` }}
            />
          ))}
        </div>
      )}

      <svg
        width={w}
        height={h}
        viewBox={`0 0 ${w} ${h}`}
        style={{ marginTop: 30 }}
      >
        <defs>
          <clipPath id={clipId}>
            <path d={cupPath(w, h)} />
          </clipPath>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#c8913a" stopOpacity="0.9" />
            <stop offset="60%"  stopColor="#8b5e2a" />
            <stop offset="100%" stopColor="#3d2210" />
          </linearGradient>
        </defs>

        <path d={cupPath(w, h)} fill="#2a2018" stroke="rgba(200,145,58,0.2)" strokeWidth="1" />

        {fill > 0 && (
          <g clipPath={`url(#${clipId})`}>
            <rect
              x="0"
              y={liquidY}
              width={w}
              height={liquidH}
              fill={`url(#${gradId})`}
              className={styles.liquid}
            />
          </g>
        )}

        <ellipse
          cx={w * 0.5} cy={h * 0.12}
          rx={w * 0.38} ry={h * 0.04}
          fill="none"
          stroke="rgba(200,145,58,0.35)"
          strokeWidth="1.5"
        />

        <path
          d={`M ${w * 0.88} ${h * 0.35} Q ${w * 1.1} ${h * 0.35} ${w * 1.1} ${h * 0.55} Q ${w * 1.1} ${h * 0.72} ${w * 0.88} ${h * 0.72}`}
          fill="none"
          stroke="rgba(200,145,58,0.4)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {showCheck && (
          <g transform={`translate(${w * 0.7}, ${h * 0.7})`}>
            <circle cx="0" cy="0" r="14" fill="var(--gold)" />
            <path
              d="M -6 0 L -2 5 L 7 -5"
              fill="none"
              stroke="#0d0c0b"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        )}
      </svg>
    </div>
  )
}

function cupPath(w: number, h: number): string {
  return `
    M ${w * 0.12} ${h * 0.12}
    L ${w * 0.05} ${h * 0.85}
    Q ${w * 0.05} ${h * 0.95} ${w * 0.15} ${h * 0.95}
    L ${w * 0.85} ${h * 0.95}
    Q ${w * 0.95} ${h * 0.95} ${w * 0.95} ${h * 0.85}
    L ${w * 0.88} ${h * 0.12}
    Z
  `
}