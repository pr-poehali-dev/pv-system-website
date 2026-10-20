type Props = { type: "fire" | "blast"; size?: number };

export default function MineSymbol({ type, size = 28 }: Props) {
  if (type === "fire") {
    const rays = Array.from({ length: 8 }, (_, i) => {
      const a = (i * Math.PI) / 4;
      return { x1: 50 + Math.cos(a) * 30, y1: 50 + Math.sin(a) * 30, x2: 50 + Math.cos(a) * 44, y2: 50 + Math.sin(a) * 44 };
    });
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="#e00000" strokeWidth={7} strokeLinecap="round">
        <circle cx={50} cy={50} r={19} />
        {rays.map((r, i) => <line key={i} {...r} />)}
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="#111" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round">
      <circle cx={50} cy={50} r={17} />
      <line x1={50} y1={33} x2={50} y2={8} />
      <line x1={50} y1={67} x2={50} y2={92} />
      <line x1={33} y1={50} x2={8} y2={50} />
      <line x1={67} y1={50} x2={92} y2={50} />
      <polyline points="41,17 50,8 59,17" />
      <polyline points="41,83 50,92 59,83" />
      <polyline points="17,41 8,50 17,59" />
      <polyline points="83,41 92,50 83,59" />
    </svg>
  );
}
