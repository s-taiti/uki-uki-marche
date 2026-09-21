import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Uki Uki Marche｜水上を遊びつくす ウキウキマルシェ', description: '2026年9月27日（日）10:00〜16:00、愛媛県大洲市・肱川橋周辺で開催。浮亀橋の水上マルシェ、カヌー・SUP、はんぎり体験を楽しむ一日。', robots: { index: true, follow: true }, other: { 'format-detection': 'telephone=no, date=no, address=no, email=no' } };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="ja"><body>{children}</body></html>; }
