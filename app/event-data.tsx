const event = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: '水上マルシェ Uki Uki Marche',
  description: '一部内容を変更して縮小開催。屋形船の水上マーケット、音楽ライブ、カヌー・SUP、はんぎり体験を実施。キッチンカー・鮎の塩焼き・クラフトコーラそぶるはお休みです。',
  startDate: '2026-09-27T10:00:00+09:00',
  endDate: '2026-09-27T16:00:00+09:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  url: 'https://uki-uki-marche.vercel.app/',
  image: ['https://uki-uki-marche.vercel.app/images/uki-uki-logo.png'],
  location: {
    '@type': 'Place', name: 'しろしたかわみなと',
    address: { '@type': 'PostalAddress', addressLocality: '大洲市', addressRegion: '愛媛県', addressCountry: 'JP' },
  },
  organizer: { '@type': 'Organization', name: '一般社団法人かわまちコネクト', telephone: '+81-893-57-7500', email: 'admin@kwmcc.or.jp' },
};

export default function EventData() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(event).replace(/</g, '\\u003c') }} />;
}
