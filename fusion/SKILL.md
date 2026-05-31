---
name: fusion-textbook
description: 三輪允仁が Fusion 360 で「メカ→電気→ソフト→組立」を1人で縦串で発明する力を身につけるための長期教科書スキル。6Phase構成・各Phase詳細md・PWA（fusion_tracker.html）で進捗ポチ管理。学び方の哲学はプロジェクトベース×縦串ループ。「Fusion」「Fusion360」「フュージョン」「フュージョン360」「教科書」「ロードマップ」「Phase 0」「Phase 1」「縦串」「メカ電気ソフト統合」「発明設計教科書」等のキーワードで自動発動。calendar-monthly/activity-tracker/設計クロード/sw-macro と連動。
---

# fusion-textbook スキル — Fusion 360 縦串教科書

## このスキルは何？

三輪允仁が **Fusion 360 で発明を1人で完成できる長期教科書**。
操作だけ覚えるのではなく **作品を作りながら覚える** プロジェクトベース教科書。
進捗は PWA（[tracker.html](tracker.html)）で一目で見られる。

> 「メカ設計 → 電気設計 → ソフト設計 → 組み立て」を1人で縦串で通す力を育てる。

## 構成ファイル

| ファイル | 役割 |
|---|---|
| [roadmap.md](roadmap.md) | 全体MASTER・6Phaseロードマップ・学び方の哲学 |
| [phase0.md](phase0.md) | Phase 0 基礎操作（試用版残り日数で完走想定） |
| `phase1.md`〜`phase6.md` | 各Phase詳細（Phase 0完走後に順次展開） |
| [tracker.html](tracker.html) | 進捗トラッカーPWA（activity-tracker流用） |

## 6Phase 概要

| Phase | 期間 | 領域 | 作品 |
|---|---|---|---|
| 0 基礎操作 | 1週 | Fusion基本 | ペン立て |
| 1 単品設計 | 2週 | メカ | アーム1関節 |
| 2 機構設計 | 1ヶ月 | メカ複合 | アーム本体 |
| 3 電気設計 | 2-3週 | Fusion Electronics | 駆動基板 |
| 4 ソフト | 2-3週 | Arduino/Python | 制御コード |
| 5 統合・組立 | 1ヶ月 | 実物統合 | 動くアーム |
| 6 次の縦串 | 継続 | ループ | 量子PC筐体等 |

## PWA の場所と URL

| 項目 | 内容 |
|---|---|
| ローカル原本 | `~/.claude/skills/fusion-textbook/tracker.html` |
| デプロイ先 | `pasarinobuhito0409-droid/trip-shioris` リポの `/fusion/index.html` |
| 公開URL（予定） | https://pasarinobuhito0409-droid.github.io/trip-shioris/fusion/ |
| データ保存 | localStorage（key=`fusion_textbook_v1`） |

## 使い方

### 新セッションで「Fusion」「教科書」と言われた時

1. このSKILL.mdを Read
2. [roadmap.md](roadmap.md) を Read して現在Phaseを把握
3. PWAを開いて進捗確認 or [tracker.html](tracker.html) を見て進捗確認
4. 三輪さんの今のフェーズに合わせて該当 phase{N}.md を Read
5. 次にやることを提案

### 進捗ポチ（毎日）

1. 公開URLをスマホで開く（ホーム画面追加済み前提）
2. 現Phaseのチェック項目をタップ
3. ミニ作品が完成したらメモ欄に学び・気づきを記入
4. Phase完了の合格基準を満たしたら次Phaseへ

### 設計判断が出た時（任意）

- 板厚・R・材料・公差等の判断 → [mech_design_log.md](../../projects/C--WINDOWS-System32-WindowsPowerShell-v1-0/memory/mech_design_log.md) に追記
- 設計疑問 → [design_questions_log.md](../../projects/C--WINDOWS-System32-WindowsPowerShell-v1-0/memory/design_questions_log.md)
- 発明アイデア → [mech_design_inventions.md](../../projects/C--WINDOWS-System32-WindowsPowerShell-v1-0/memory/mech_design_inventions.md)

## 連動スキル・memory

- [activity-tracker](../activity-tracker/SKILL.md) — PWA構造の元
- [設計クロード](../設計クロード/SKILL.md) — メカ設計の核
- [sw-macro](../sw-macro/SKILL.md) — SolidWorks との比較
- [robot-arm](../robot-arm/SKILL.md) — Phase 1-5 の第1作品候補
- [garakuta-lab](../garakuta-lab/SKILL.md) — Phase 1-2 のジャンク部品作品候補
- [project_fusion360_personal_plan.md](../../projects/C--WINDOWS-System32-WindowsPowerShell-v1-0/memory/project_fusion360_personal_plan.md) — ライセンス計画
- [meta-growth](../meta-growth/SKILL.md) — Phase完了ごとの学び保存

## 更新手順（ローカル → デプロイ）

```bash
# 1. tracker.html を編集
code "C:/Users/三輪　允仁/.claude/skills/fusion-textbook/tracker.html"

# 2. デプロイクローンに反映（Macなら ~/Desktop/calendar_auto/_deploy/）
cp ~/.claude/skills/fusion-textbook/tracker.html ~/Desktop/calendar_auto/_deploy/fusion/index.html

# 3. push
cd ~/Desktop/calendar_auto/_deploy
git add fusion/ && git commit -m "Update fusion tracker" && git push
```

## 履歴

| 日 | 変更 |
|---|---|
| 2026-05-31 | 初版。6Phase骨子・Phase 0詳細・PWA本体・MASTER完成 |
