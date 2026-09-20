'use client';

import { useEffect } from 'react';
import FlyerViewer from './flyer-viewer';

export function MotionDetails() {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | undefined;
    const elements = document.querySelectorAll('[data-reveal]');
    const setup = () => {
      observer?.disconnect();
      elements.forEach(el => el.classList.remove('reveal-pending'));
      if (media.matches) return;
      observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending');
          entry.target.classList.add('reveal-arrived');
          observer?.unobserve(entry.target);
        }
      }), { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });
      elements.forEach(el => {
        if (el.getBoundingClientRect().top > window.innerHeight) {
          el.classList.add('reveal-pending');
          observer?.observe(el);
        }
      });
    };
    setup();
    media.addEventListener('change', setup);
    return () => { observer?.disconnect(); media.removeEventListener('change', setup); elements.forEach(el => el.classList.remove('reveal-pending')); };
  }, []);
  return null;
}

export default function ExperienceGuide() {
  return <section id="schedule" className="experience-guide">
    <div className="section">
      <div className="guide-title" data-reveal><p className="section-label">当日のプログラム</p><h2>参加のご案内</h2><p>体験・レースの時間と参加条件をご確認ください。</p></div>
      <article className="sup-program" id="sup-race" data-reveal>
        <div className="sup-program-intro"><p className="section-label">事前申込</p><h3>SUPレース</h3><p>肱川を舞台に、SUPで速さを競います。<br/>小学4年生から参加でき、初心者も歓迎です。</p><p className="sup-program-note">経験に応じたハンデあり。上位3名には賞品があります。</p></div>
        <div className="sup-program-entry"><dl><div><dt>参加費</dt><dd>1,500<span>円</span></dd></div><div><dt>対象</dt><dd>小学4年生以上</dd></div><div><dt>定員</dt><dd>28名</dd></div></dl><a className="sup-apply" href="https://docs.google.com/forms/d/e/1FAIpQLSczGaplUmxmxWDCZladTNuuob3C6-ZuInatIKipoEALpk3OLQ/viewform" target="_blank" rel="noreferrer">参加を申し込む<span aria-hidden="true">↗</span></a><p>定員に空きがある場合は、当日も参加できます。</p></div>
        <div className="sup-program-schedule"><h4>当日の流れ</h4><ol>{[['10:30','受付'],['11:00','予選'],['13:00','決勝'],['14:00','表彰']].map(([time,label])=><li key={time}><time>{time}</time><span>{label}</span></li>)}</ol></div>
      </article>
      <div className="guide-grid"><article className="session-panel" id="hangiri" data-reveal>
        <div className="hangiri-heading"><div><p className="section-label">川の体験</p><h3>はんぎり体験・競漕</h3></div><span className="reservation-note">予約不要</span></div>
        <p className="hangiri-description">「はんぎり」は、直径約1mのたらい舟。道具を使わず、体の動きだけで進みます。体験のほか、速さを競うレースも行います。</p>
        <div className="schedule-caption"><h4>開催時間</h4><span>各回20分</span></div>
        <table className="hangiri-schedule"><caption className="sr-only">はんぎり体験・競漕の開催時間</caption><thead><tr><th scope="col">時間</th><th scope="col">内容</th></tr></thead><tbody>
          <tr><th scope="row"><time>10:30</time><span>–</span><time>10:50</time></th><td>体験</td></tr>
          <tr><th scope="row"><time>11:00</time><span>–</span><time>11:20</time></th><td>体験</td></tr>
          <tr className="competition-row"><th scope="row"><time>11:30</time><span>–</span><time>11:50</time></th><td>レース</td></tr>
          <tr className="schedule-break"><td colSpan={2}>昼休憩</td></tr>
          <tr><th scope="row"><time>13:00</time><span>–</span><time>13:20</time></th><td>体験</td></tr>
          <tr><th scope="row"><time>13:30</time><span>–</span><time>13:50</time></th><td>体験</td></tr>
          <tr className="competition-row"><th scope="row"><time>14:00</time><span>–</span><time>14:20</time></th><td>レース</td></tr>
          <tr><th scope="row"><time>14:30</time><span>–</span><time>14:50</time></th><td>体験またはレース</td></tr>
        </tbody></table>
        <p className="schedule-notice">当日の状況により、時間や内容を変更する場合があります。</p>
        <details className="history-detail"><summary>はんぎりの歴史</summary><p>江戸時代から昭和にかけて、松前町で盛んだった地引網漁。漁師が沖の船と岸を行き来したり、小魚を運んだりするときに、はんぎりを巧みに操って水上を移動していました。</p></details>
      </article>
      <div className="guide-side"><article className="flyer-feature" id="flyers" data-reveal><div className="flyer-feature-copy"><p className="section-label">イベント案内</p><h3>公式チラシ</h3><p>画像をタップすると、表・裏を拡大してご覧いただけます。</p></div><FlyerViewer /></article>
      <aside className="river-kit"><div><p className="section-label">体験に参加される方へ</p><h3>服装・持ち物</h3></div><div><span className="kit-number">01</span><strong>ぬれてもよい服装</strong><p>靴やサンダルも、ぬれてよいものをご用意ください。</p></div><div><span className="kit-number">02</span><strong>ライフジャケット</strong><p>貸し出しがあります。</p></div></aside></div></div>
    </div>
  </section>;
}
