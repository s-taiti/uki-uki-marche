import type { Metadata } from 'next';
import './globals.css';
const title = '水上マルシェ Uki Uki Marche｜2026年9月27日・愛媛県大洲市';
const description = '2026年9月27日（日）10:00〜16:00、愛媛県大洲市「しろしたかわみなと」で開催。水上マルシェ、カヌー・SUP、はんぎり体験、音楽ライブを楽しむ一日。開催時間・参加費・会場へのアクセスをご案内します。';
export const metadata: Metadata = {
  metadataBase: new URL('https://uki-uki-marche.vercel.app'),
  title, description,
  alternates: { canonical: '/' },
  verification: { google: '4HUx9Jh7ImjYe0K9y7S98AB-urqNkHEEbIINTGkur-0' },
  openGraph: { type: 'website', locale: 'ja_JP', url: '/', siteName: 'Uki Uki Marche 水上マルシェ', title, description,
    images: [{ url: '/images/flyer-front.webp', width: 1284, height: 1800, alt: '水上マルシェの公式チラシ' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/flyer-front.webp'] },
  robots: { index: true, follow: true },
  other: { 'format-detection': 'telephone=no, date=no, address=no, email=no' },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="ja"><body>{children}</body></html>; }
