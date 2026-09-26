import type { Metadata } from 'next';
import './globals.css';
const title = '【縮小開催】水上マルシェ Uki Uki Marche｜2026年9月27日・愛媛県大洲市';
const description = '2026年9月27日（日）10:00〜16:00、愛媛県大洲市「しろしたかわみなと」で開催。一部内容を変更して開催。屋形船の水上マーケット、音楽ライブ、カヌー・SUP、はんぎり体験を実施します。休止内容は公式サイトをご確認ください。';
export const metadata: Metadata = {
  metadataBase: new URL('https://uki-uki-marche.vercel.app'),
  title, description,
  alternates: { canonical: '/' },
  verification: { google: '4HUx9Jh7ImjYe0K9y7S98AB-urqNkHEEbIINTGkur-0' },
  openGraph: { type: 'website', locale: 'ja_JP', url: '/', siteName: 'Uki Uki Marche 水上マルシェ', title, description,
    images: [{ url: '/images/uki-uki-logo.png', width: 590, height: 295, alt: 'Uki Uki Marche 水上マルシェ' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/uki-uki-logo.png'] },
  robots: { index: true, follow: true },
  other: { 'format-detection': 'telephone=no, date=no, address=no, email=no' },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="ja"><body>{children}</body></html>; }
