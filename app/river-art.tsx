type ArtKind = 'market' | 'canoe' | 'hangiri';

export function RiverArt({ kind, idPrefix = '' }: { kind: ArtKind; idPrefix?: string }) {
  if (kind === 'hangiri') return <img className="river-art" src="/images/hangiri-original.webp" alt="たらい舟をこいで進む3人" width="1200" height="755" loading="lazy" />;
  const market = kind === 'market';
  if (market) return <svg className="river-art" viewBox="0 0 1100 793" role="img" aria-label="舟橋で買い物を楽しむ人たち"><image href="/images/river-characters.webp" width="1981" height="793" /></svg>;
  return <svg className="river-art canoe-art" viewBox="1140 90 841 660" role="img" aria-label="カヌーとSUPで川遊びをする人たち">
    <defs>
      <clipPath id={`${idPrefix}orange-canoe`}><polygon points="1140,70 1600,70 1600,320 1460,320 1460,435 1140,455" /></clipPath>
      <clipPath id={`${idPrefix}red-canoe`}><polygon points="1600,95 1981,95 1981,595 1725,595 1725,395 1600,350" /></clipPath>
      <clipPath id={`${idPrefix}sup-board`}><polygon points="1460,330 1640,330 1640,400 1725,450 1730,750 1340,750 1340,540 1420,430" /></clipPath>
    </defs>
    {['orange-canoe', 'red-canoe', 'sup-board'].map((id, index) => <g className={`river-boat boat-${index + 1}`} key={id}><image clipPath={`url(#${idPrefix}${id})`} href="/images/river-characters.webp" width="1981" height="793" /></g>)}
  </svg>;
}
