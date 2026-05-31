# Fusion 360 縦串教科書 — ロードマップMASTER

> 三輪允仁が **発明を1人で最初から最後まで形にする力** を Fusion 360 で身につけるための長期教科書。
> 操作だけ覚える教科書ではなく、**作品を作りながら覚える**プロジェクトベース教科書。

---

## ★ この教科書の核となる考え方 ★

### なぜ「縦串」なのか

メカ・電気・ソフトを別々に学ぶと、**統合する段階で必ず詰まる**。
だから最初から **小さい作品を縦串で完成** させる経験を何度も積む。

```
1作品 = メカ設計 → 電気設計 → ソフト設計 → 組み立て → 動く
                              ↑
                       ここまでで1サイクル
                              ↓
              次の作品で同じサイクルをループ（難易度UP）
```

### なぜ「プロジェクトベース」なのか

三輪さんは **ADHD特性 × 実証主義スタイル**（[project_fusion360_personal_plan.md](../../projects/C--WINDOWS-System32-WindowsPowerShell-v1-0/memory/project_fusion360_personal_plan.md) 参照）。
だから「使う場面」と紐付かない知識は定着しない。
教科書を読むだけより、**実物を作りながら学ぶ方が10倍速い**。

### なぜFusion 360 一本化なのか

Fusion 360 は **メカ・電気（Electronics）・シミュレーション・CAM** が1つに統合された CAD/CAE プラットフォーム。
ソフト（Arduino/MicroPython等）は別だが、メカ〜電気の橋渡しが Fusion 内で完結する。
SolidWorks との比較は試用版終了（2026-06-08）後に判断（[project_fusion360_personal_plan.md](../../projects/C--WINDOWS-System32-WindowsPowerShell-v1-0/memory/project_fusion360_personal_plan.md)）。

---

## ★ 6Phase ロードマップ ★

| Phase | 期間 | 学ぶ領域 | 主な内容 | 作品候補 | 縦串の位置 |
|---|---|---|---|---|---|
| **0 基礎操作** | 1週（試用版残り8日に合わせる） | Fusion基本 | UI・スケッチ・押出・回転・保存 | ペン立て／簡単なコップ | 入口 |
| **1 単品設計** | 2週 | メカ単品 | 板金・ジョイント・公差・パラメトリック | アームの1関節／ジャンク部品の置換パーツ | メカ |
| **2 機構設計** | 1ヶ月 | メカ複合 | アセンブリ・干渉チェック・図面・3D印刷データ | 小型アーム本体（動かない・骨格のみ） | メカ |
| **3 電気設計** | 2-3週 | 電気 | Fusion Electronics（回路図・基板設計） | アーム駆動基板／センサー基板 | 電気 |
| **4 ソフト** | 2-3週 | ソフト | Arduino / MicroPython / シリアル通信 | アームを動かすコード | ソフト |
| **5 統合・組立** | 1ヶ月 | 全体 | 3D印刷・実物組立・配線・実機デバッグ | **動くアーム完成** | 組立 |
| **6 次の縦串** | 継続 | ループ | Phase 1-5を別作品で繰り返す | 量子PC筐体／ガラクタ研究所の発明 | ループ |

**Phase 5完走で約4-5ヶ月後**。ここまで来たら「Fusion360で発明を1人で完成」のスキルが回り出す。

---

## ★ 既存発明計画との連結 ★

縦串ループの作品は、三輪さんの既存スキル・プロジェクトから選ぶ（教材を別途用意しない）：

| スキル/プロジェクト | 縦串候補 | Phase活用 |
|---|---|---|
| [robot-arm](../robot-arm/SKILL.md) | 小型アーム（第1作品の本命） | Phase 1-5 |
| [garakuta-lab](../garakuta-lab/SKILL.md) | ジャンク部品の置換パーツ・再生品 | Phase 1-2 |
| [quantum-pc](../quantum-pc/SKILL.md) | 量子PC筐体・冷却部 | Phase 6 |
| [custom-pc](../custom-pc/SKILL.md) | PC内部マウント・カスタムパネル | Phase 1-2 |
| [発明](../発明/SKILL.md) | 人間拡張・BCI関連の筐体 | Phase 6+ |

---

## ★ 学びの記録方法 ★

### 1. 教科書本体（このフォルダ）

| ファイル | 役割 |
|---|---|
| `roadmap.md`（このファイル） | 全体像・MASTER |
| `phase0.md` 〜 `phase6.md` | 各Phaseの学習内容・チェック項目 |
| `tracker.html` | PWA（進捗ポチアプリ） |
| `SKILL.md` | スキル定義 |

### 2. PWA（進捗トラッカー）

- スマホ・PC両対応・オフライン動作
- Phase切替タブ → チェック項目をポチで完了
- 進捗％を円グラフで可視化
- 学びメモ・作品写真URL貼り付け
- localStorage で永続化

→ 詳細は `tracker.html` を開けば即わかる。

### 3. 設計クロード との連動

設計判断（板厚・R・材料・公差）が出たら [mech_design_log.md](../../projects/C--WINDOWS-System32-WindowsPowerShell-v1-0/memory/mech_design_log.md) に追記。
発明アイデアは [mech_design_inventions.md](../../projects/C--WINDOWS-System32-WindowsPowerShell-v1-0/memory/mech_design_inventions.md) に発酵させる。

---

## ★ 試用版終了（2026-06-08）までの動き ★

今日：2026-05-31（試用版残り **8日**）

| 日 | やること |
|---|---|
| 5/31〜6/7 | Phase 0 を完走（PWAで進捗管理） |
| 6/8 | Fusion個人用に切替判断（[project_fusion360_personal_plan.md](../../projects/C--WINDOWS-System32-WindowsPowerShell-v1-0/memory/project_fusion360_personal_plan.md)） |
| 6/8以降 | 個人用ライセンスでPhase 1へ進む |

---

## ★ 関連 ★

- [project_fusion360_personal_plan.md](../../projects/C--WINDOWS-System32-WindowsPowerShell-v1-0/memory/project_fusion360_personal_plan.md) — ライセンス計画
- [設計クロード SKILL.md](../設計クロード/SKILL.md) — メカ設計の核
- [sw-macro](../sw-macro/SKILL.md) — SolidWorks マクロ（比較対象）
- [activity-tracker](../activity-tracker/SKILL.md) — PWA構造の元
- [meta-growth](../meta-growth/SKILL.md) — 節目ごとの学び保存

---

## 履歴

| 日 | 変更 |
|---|---|
| 2026-05-31 | 初版。6Phase骨子確定・PWA設計と並行で作成 |
