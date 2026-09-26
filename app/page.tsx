import ExperienceGuide, { MotionDetails } from './experience-guide';
import { RiverArt } from './river-art';
import EventData from './event-data';

const mapUrl = 'https://www.google.com/maps/search/?api=1&query=%E3%81%97%E3%82%8D%E3%81%97%E3%81%9F%E3%81%8B%E3%82%8F%E3%81%BF%E3%81%AA%E3%81%A8';

export default function Home() {
  return <>
    <EventData />
    <a className="skip" href="#main">本文へ移動</a>
    <header className="header">
      <a className="brand" href="#" aria-label="Uki Uki Marche トップ"><img src="/images/uki-uki-logo.png" alt="Uki Uki Marche" width="590" height="295" /></a>
      <nav aria-label="メインメニュー"><a href="#about">マルシェについて</a><a href="#experiences">楽しみ方</a><a href="#access">アクセス</a></nav>
    </header>
    <main id="main">
      <MotionDetails />
      <section className="event-notice" aria-labelledby="notice-title">
        <p className="section-label">2026年9月26日 更新</p>
        <h2 id="notice-title">縮小開催のお知らせ</h2>
        <p className="notice-date">2026年9月27日（日）10:00〜16:00<br/>会場：しろしたかわみなと（肱川橋周辺）</p>
        <p>一部内容を変更して開催します。</p>
        <p>カヌー・SUP体験、SUPレース、はんぎり体験・競漕は予定どおり開催します。</p><div className="notice-columns">
          <div><h3>開催内容</h3><ul><li>水上マーケット（屋形船）</li><li>HANAGA（肉）</li><li>ぷらいまりぃ（野菜・フルーツ）</li><li>KUUKAI（焼き鳥）</li><li>音楽ライブ</li></ul></div>
          <div><h3>今回はお休みする内容</h3><ul><li>キッチンカー</li><li>鮎の塩焼き</li><li>クラフトコーラそぶる</li></ul></div>
        </div>
      </section>
      <section className="hero" aria-labelledby="event-title">
        <div className="hero-copy">
          <p className="hero-place">愛媛県大洲市・肱川橋周辺</p>
          <h1 id="event-title"><img src="/images/uki-uki-logo.png" alt="Uki Uki Marche" width="590" height="295" fetchPriority="high" /></h1>
          <p className="hero-title">水上を遊びつくす<br/>ウキウキマルシェ</p>
          <div className="event-date"><span className="event-year">2026</span><strong>9.27</strong><span className="event-day">日</span><span className="event-time">10:00<span>—</span>16:00</span></div>
          <p className="hero-description">屋形船の水上マーケットと音楽ライブ。<br/>一部内容を変更して開催します。</p>
          <a className="button" href="#experiences">当日の楽しみ方 <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-landscape">
          <img src="/images/river-landscape.webp" alt="肱川の舟橋で買い物をする人々、カヌーやはんぎりで遊ぶ人々を描いたチラシのイラスト" width="1697" height="2400" fetchPriority="high" />
          <svg className="river-repair-layer" viewBox="0 0 1697 2400" aria-hidden="true" focusable="false">
            <defs>
              <filter id="river-repair-feather" x="-10%" y="-15%" width="120%" height="130%"><feGaussianBlur stdDeviation="18" /></filter>
              <mask id="river-white-space" maskUnits="userSpaceOnUse" x="0" y="0" width="1697" height="2400">
                <path d="M-100-100H875C855 100 816 228 788 358C768 454 753 544 693 588C626 638 520 597 440 596C305 585 229 660 95 649L-100 664Z" fill="white" filter="url(#river-repair-feather)" />
              </mask>
              <clipPath id="hero-canoe"><path d="M182 894L201 900L225 890L247 875L255 864L251 854L252 842L261 836L272 834L279 831L286 836L276 843L285 848L280 859L287 867L307 846L326 834L334 834L336 845L334 866L348 860L364 859L367 864L367 876L359 880L333 880L327 901L311 925L287 947L261 967L234 980L218 983L207 979L204 970L211 950L226 925L244 905L246 894L231 901L224 898L203 905L185 916L181 912Z" /></clipPath>
              <clipPath id="hero-sup"><path d="M338 933L350 929L351 922L366 919L385 923L388 932L400 937L400 942L383 942L384 950L381 956L394 960L402 951L414 946L425 948L432 956L436 968L434 987L423 1012L445 1018L459 1030L462 1038L455 1044L439 1035L416 1021L403 1047L381 1076L358 1094L340 1103L320 1102L307 1092L304 1080L311 1057L323 1030L337 1009L339 991L327 985L323 973L314 968L312 962L318 962L331 969L342 958L350 954L348 946L346 940L339 940Z" /></clipPath>
            </defs>
            <image href="/images/river-water-repair.webp" width="1697" height="2400" preserveAspectRatio="none" mask="url(#river-white-space)" />
            <g><svg x="225" y="554" width="240" height="196" viewBox="180 830 190 155"><image href="/images/river-landscape.webp" width="1334" height="1888" clipPath="url(#hero-canoe)" /></svg></g>
            <g><svg x="595" y="677" width="200" height="238" viewBox="304 918 159 189"><image href="/images/river-landscape.webp" width="1334" height="1888" clipPath="url(#hero-sup)" /></svg></g>
          </svg>
        </div>
        <a className="hero-flyer-link" href="#flyers">公式チラシをひらく <span aria-hidden="true">↗</span></a>
      </section>
      <div className="ribbon" aria-hidden="true"><div className="ribbon-track">{[0, 1].map(copy => <div className="ribbon-group" key={copy}>{[0, 1, 2].map(item => <div className="ribbon-item" key={item}>RIVER · FOOD · MUSIC · ADVENTURE <span>UKI UKI MARCHE</span></div>)}</div>)}</div></div>
      <section id="about" className="section about">
        <div data-reveal><p className="section-label">水上マルシェについて</p><h2>川の上で楽しむ、<br/>大洲の休日。</h2><p className="about-caption">屋形船の水上マーケット。<br/>川辺に集まる、食と音楽。</p></div>
        <div className="about-body" data-reveal>
          <p>かつて、舟を並べた「浮亀橋」が架かっていた肱川。今回は一部内容を変更し、屋形船の水上マーケットと音楽ライブなどを開催します。</p>
          <p>HANAGA（肉）、ぷらいまりぃ（野菜・フルーツ）、KUUKAI（焼き鳥）が出店します。大洲の川辺で、お買い物と音楽をお楽しみください。</p>
          <details className="history-detail"><summary>浮亀橋って、どんな橋？</summary><p>川舟を並べて板を渡した、珍しい舟橋。大正2年に肱川橋が完成するまで、肱南と肱北地区を結んでいました。遠くから見た橋の形が亀の背に似ていたことが、名前の由来です。</p></details>
        </div>
      </section>
      <section id="experiences" className="experiences section">
        <div className="section-heading" data-reveal><p className="section-label">当日の楽しみ方</p><h2>川の上で、何しよう。</h2></div>
        <article className="experience-row market-row">
          <div className="experience-visual" data-reveal="art"><RiverArt kind="market" /></div>
          <div className="experience-copy" data-reveal>
            <p className="experience-index">01 <span>お買い物と音楽</span></p>
            <h3>水上マーケット<br/>（屋形船）</h3>
            <p>屋形船の水上マーケットと音楽ライブを開催します。<br/>HANAGA（肉）／ぷらいまりぃ（野菜・フルーツ）／KUUKAI（焼き鳥）</p>
            <div className="experience-meta">イベントMC<br/><strong>愛媛のエンターテイナー たいき</strong></div>
          </div>
        </article>
        <article className="experience-row canoe-row">
          <div className="experience-visual" data-reveal="art"><RiverArt kind="canoe" /></div>
          <div className="experience-copy" data-reveal>
            <p className="experience-index">02 <span>予約不要・初心者歓迎</span></p>
            <h3>カヌー・SUP体験</h3>
            <div className="canoe-inline-art"><RiverArt kind="canoe" idPrefix="mobile-" /></div>
            <p>きらめく水面、心地よい風、広い空。<br className="desktop-break"/>肱川から大洲城を見上げる、<br className="desktop-break"/>ここでしか味わえない川遊び。</p>
            <div className="experience-meta"><strong className="experience-price">500<span>円 / 30分</span></strong><span>ライフジャケットのレンタル料込み</span></div>
            <a className="text-link" href="#sup-race">SUPレースのご案内 <span aria-hidden="true">↗</span></a>
          </div>
        </article>
        <article className="experience-row hangiri-row">
          <div className="experience-visual" data-reveal="art"><RiverArt kind="hangiri" /></div>
          <div className="experience-copy" data-reveal>
            <p className="experience-index">03 <span>予約不要</span></p>
            <h3>はんぎり体験・競漕</h3>
            <div className="hangiri-inline-art"><RiverArt kind="hangiri" /></div>
            <p>直径約1mのたらい舟を、<br className="desktop-break"/>道具を使わず、体の動きだけで進みます。<br className="desktop-break"/>体験のほか、速さを競うレースも開催。</p>
            <a className="text-link" href="#hangiri">体験・レースの時間を見る <span aria-hidden="true">↗</span></a>
          </div>
        </article>
      </section>
      <ExperienceGuide />
      <section id="access" className="access">
        <div className="section">
          <div className="access-heading" data-reveal><p className="section-label">会場・アクセス</p><h2>会場は、<br className="mobile-break"/>肱川橋のたもと。</h2></div>
          <div className="access-grid" data-reveal><div><p className="location">愛媛県大洲市<br/><strong>しろしたかわみなと</strong></p><p>2026年9月27日（日）10:00〜16:00</p><a className="button light" href={mapUrl} target="_blank" rel="noreferrer">しろしたかわみなと <span aria-hidden="true">↗</span></a></div><div className="parking"><h3>駐車場のご案内</h3><p><strong>大洲市立体駐車場</strong><br/>大洲市大洲1034</p><p><strong>大洲高等学校グラウンド</strong><br/>大洲市大洲737</p><p className="note">当日は現地の案内に従ってご利用ください。</p></div></div>
        </div>
      </section>
      <section className="section contact" data-reveal><div><h2>お問い合わせ</h2><p>主催：一般社団法人かわまちコネクト<br/>（しろしたテラス指定管理者）</p><a className="text-link" href="https://www.instagram.com/shiroshita_terrace.ozu/" target="_blank" rel="noopener noreferrer">しろしたテラス Instagram <span aria-hidden="true">↗</span></a></div><div><a className="phone" href="tel:0893577500">0893-57-7500 <span aria-hidden="true">↗</span></a><a className="email" href="mailto:admin@kwmcc.or.jp">admin@kwmcc.or.jp <span aria-hidden="true">↗</span></a><p className="note">住所：愛媛県大洲市大洲1番地5 しろしたテラス</p></div></section>
    </main>
    <footer><a className="brand" href="#"><img src="/images/uki-uki-logo.png" alt="Uki Uki Marche" width="590" height="295" /></a><p>主催：一般社団法人かわまちコネクト<br/>後援：大洲市<br/>協力：YAMATO / 大洲市観光協会 / はんぎり競漕実行委員会 / 大洲カヌー同好会</p><small>© 2026 Uki Uki Marche</small></footer>
  </>;
}
