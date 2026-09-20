# イラスト素材の記録


## トップ画像の白い空間の補修

2026-09-20。内蔵 image_gen の編集モードを使用。
保存先：`public/images/river-water-repair.webp`。
サイトでは補修画像全体を置き換えず、`app/page.tsx` のSVGマスクで左上の白い空間だけ重ねています。人物・舟・城・川岸がある下部や右側には元の `river-landscape.webp` を使用しています。

最終の画像編集指示：

> Use case: precise-object-edit / background repair. Edit the supplied river illustration in exactly one area: the large empty WHITE NOTCH in the UPPER LEFT of the painted scene, above the river and left of the fisherman and bridge. That blank was reserved for flyer text and now looks abruptly cut out on the website. Fill this upper-left empty area with a seamless continuation of the existing soft muted turquoise river water and its original dry-brush gouache texture, with sparse original-style small white ripples. Match the adjacent water color exactly; do not make it more saturated. Make the TOP outer edge of the added water softly, naturally irregular and painterly into white over a shallow band, so it can join the white website above. There must be NO deep empty white notch remaining. Retain the small tree and wooden stakes already in the white notch, on the continued water. Preserve the entire existing illustration, bridge, all people, faces, boats, castle, trees, market, shoreline, colors and their coordinates exactly. Do not redraw or reposition them. Leave the large WHITE BOTTOM region completely unchanged. No new people, boats, buildings, objects, lettering, frame, border or enclosing shape. Preserve original canvas aspect ratio and composition. The only change is continuing the river water into that upper-left gap. Output the full edited image, same portrait composition.


2026-09-20 更新。提供された公式チラシをもとに、サイト用の素材を整理しました。

- `public/images/river-landscape.webp`：チラシ表面の埋め込み画像をそのまま抽出。PDFの色で描画してWebP形式に変換。
- `public/images/hangiri-original.webp`：チラシ表面のはんぎりイラストを抽出。元の透明度と色を維持。
- `public/images/uki-uki-logo.png`：以前に抽出した公式チラシのロゴを継続使用。
- `public/images/river-characters.webp`：内蔵 image_gen の編集モードで、元絵から舟橋とカヌー・SUPを透明背景の素材に整理。生成による編集を含むため、元PDFからの完全な無改変抽出ではありません。

歴史写真には生成画像を使用していません。未確認の歴史写真も追加していません。

## 最終の画像編集指示

方式：内蔵 image_gen（CLI不使用）。編集元：元PDFから描画した `tmp/pdfs/river-art.png`。
保存先：`public/images/river-characters.webp`。

> This is an asset extraction/editing task from the provided original event illustration. Create one transparent-background wide sprite sheet with EXACTLY TWO separate cutout groups, laid out left and right with ample transparent space between. LEFT group: the floating green bamboo raft market scene in the center of the reference, preserve the two connected groups of green rafts, vegetable seller on orange boat, vegetable shopper with carrot in bag, white-shirt parent and child and their boat, and orange-shirt person with brown dog. RIGHT group: the three independent small canoes/SUP below-left in the reference: orange canoe with red cap paddler, red canoe with straw hat paddler and yellow paddle, and yellow-green SUP board with standing straw hat paddler. Keep entire bodies, all boats, every paddle intact. Extract only these original objects. Remove all aqua river, river bank, castle, all unrelated people and objects, and any white background. Preserve the source hand-painted texture, exact shapes, original colors, faces, clothing, poses, and placement within each group. This is not a redesign and not new illustration. No extra elements, no circles, no decorative enclosing blobs, no text, no shadows, no new icons. Transparent background. High quality clean natural edges. Two clearly separated intact groups on a transparent sheet.

## トップに追加した2隻の統一
2026-09-20。トップに重ねるカヌーとSUPは、生成素材から元チラシの river-landscape.webp を参照するSVG切り抜きへ変更。輪郭をSVGパスで指定し、元絵の舟とほぼ同じ表示倍率に統一。体験紹介側の素材は変更していません。

