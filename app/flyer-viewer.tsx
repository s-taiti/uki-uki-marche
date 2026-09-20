'use client';

import { useRef, useState } from 'react';

type Side = 'front' | 'back';
const labels = { front: '表面', back: '裏面' };

export default function FlyerViewer({ hero = false }: { hero?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const canvas = useRef<HTMLDivElement>(null);
  const [side, setSide] = useState<Side>(hero ? 'front' : 'back');
  const [zoomed, setZoomed] = useState(false);
  const open = (value: Side) => {
    setSide(value);
    setZoomed(false);
    dialog.current?.showModal();
    canvas.current?.scrollTo(0, 0);
  };
  const switchSide = (value: Side) => {
    setSide(value);
    setZoomed(false);
    canvas.current?.scrollTo(0, 0);
  };
  return <>
    {hero ? <button className="hero-flyer-button" onClick={()=>open('front')} aria-label="チラシ表面を拡大表示"><img src="/images/flyer-front.webp" alt="ウキウキマルシェの公式チラシ表面" width="1284" height="1800" fetchPriority="high"/><span>表・裏を大きく見る ＋</span></button> : <div className="flyer-pair">{(['front','back'] as Side[]).map(value=><button key={value} className="poster-button" onClick={()=>open(value)} aria-label={`チラシ${labels[value]}を拡大表示`}><img src={`/images/flyer-${value}.webp`} alt={`公式チラシ${labels[value]}`} width="1284" height="1800" loading="lazy"/><span>{labels[value]}を拡大 ＋</span></button>)}</div>}
    <dialog ref={dialog} className="poster-dialog double-flyer-dialog" onClick={event=>{if(event.target===event.currentTarget)dialog.current?.close();}} aria-label="公式チラシ 表・裏">
      <div className="poster-dialog-bar"><div className="flyer-side-switch" role="group" aria-label="チラシの面を選ぶ">{(['front','back'] as Side[]).map(value=><button key={value} type="button" aria-pressed={side===value} onClick={()=>switchSide(value)}>{labels[value]}</button>)}</div><div className="flyer-view-actions"><button type="button" aria-pressed={zoomed} onClick={()=>setZoomed(!zoomed)}>{zoomed?'全体表示':'さらに拡大 ＋'}</button><button type="button" onClick={()=>dialog.current?.close()} autoFocus>閉じる ×</button></div></div>
      <div ref={canvas} className={`flyer-canvas${zoomed?' is-zoomed':''}`} tabIndex={0} aria-label={`${labels[side]}。拡大時は縦横にスクロールできます。`}><img src={`/images/flyer-${side}.webp`} alt={`ウキウキマルシェ公式チラシ${labels[side]}`} width="1284" height="1800"/></div>
      <p className="flyer-view-hint" aria-live="polite">{labels[side]} · {zoomed?'縦横にスクロールしてご覧ください':'「さらに拡大」で小さな文字まで確認できます'}</p>
    </dialog>
  </>;
}
