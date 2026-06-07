const details = [
  {
    number: "P0",
    kicker: "今ここ",
    title: "己を知る",
    text: "今の力、道具、弱点、特性を整理する。ここを曖昧にすると、正しいロードマップにならない。",
  },
  {
    number: "P1",
    kicker: "今ここ",
    title: "自宅発明ラボ",
    text: "右は設計、左は組立・実験。寝室でも安全に続けられる小さな基地を作る。",
  },
  {
    number: "P2",
    kicker: "設計の武器",
    title: "設計力を形にする",
    text: "Fusion 360で形を作り、図面にし、実物の組立まで考えられる状態にする。",
  },
  {
    number: "P3",
    kicker: "最初の作品",
    title: "小型装置1号",
    text: "机の上で動くロボット、治具、検査装置を1つ完成させる。ここが発明家としての最初の実績になる。",
  },
  {
    number: "P4",
    kicker: "縦串",
    title: "メカ・電気・ソフトをつなぐ",
    text: "形を作る。配線する。プログラムで動かす。1人で現実の装置まで持っていく。",
  },
  {
    number: "P5",
    kicker: "量産する力",
    title: "発明ネタを量産する",
    text: "日常の面倒を種にする。試作し、失敗し、改善する。このループを増やす。",
  },
  {
    number: "P6",
    kicker: "お金に変える",
    title: "特許と収益化",
    text: "特許で守り、売る、貸す、外注する。得たお金を投資へ回して研究時間を増やす。",
  },
  {
    number: "P7",
    kicker: "夢の領域",
    title: "大発明領域",
    text: "不老、脳拡張、宇宙船、ヒューマノイド。SFに見えるものを現実へ近づける。",
  },
];

const zones = {
  build: {
    icon: "組",
    kicker: "左エリア",
    title: "組立・実験エリア",
    lead: "分解、測定、はんだ、仮組みをする場所。P1の「基地を作る」タスクと直結する。",
    tasks: [
      "作業マットを敷く",
      "部品収納の住所を決める",
      "煙・粉・火の対策を置く",
      "テスター、ノギス、工具の定位置を作る",
    ],
  },
  design: {
    icon: "設",
    kicker: "右エリア",
    title: "設計・開発エリア",
    lead: "Fusion 360、調査、Codex相談、図面確認をする場所。P2の「設計力を形にする」と直結する。",
    tasks: [
      "モニターとキーボードの位置を固定する",
      "Fusion用メモ置き場を作る",
      "設計中の疑問をすぐ記録する",
      "右机は散らかさず、頭の作業専用にする",
    ],
  },
  lab: {
    icon: "基",
    kicker: "P1連動",
    title: "基地を作るタスク",
    lead: "左と右を分けて、毎日少しでも発明に戻れる形を作る。ここが次の実作業。",
    tasks: [
      "左机の候補と寸法を決める",
      "右は設計、左は組立と決める",
      "7月に買う物を優先順に並べる",
      "この部屋でやる作業・やらない作業を決める",
    ],
  },
};

const cards = document.querySelectorAll(".roadCard");
const number = document.getElementById("detailNumber");
const kicker = document.getElementById("detailKicker");
const title = document.getElementById("detailTitle");
const text = document.getElementById("detailText");
const zoneIcon = document.getElementById("zoneIcon");
const zoneKicker = document.getElementById("zoneKicker");
const zoneTitle = document.getElementById("zoneTitle");
const zoneLead = document.getElementById("zoneLead");
const zoneTasks = document.getElementById("zoneTasks");
const zonePanel = document.getElementById("zonePanel");

function setDetail(index) {
  const item = details[index];
  if (!item) return;
  cards.forEach((card) => card.classList.toggle("selected", Number(card.dataset.step) === index));
  number.textContent = item.number;
  kicker.textContent = item.kicker;
  title.textContent = item.title;
  text.textContent = item.text;
}

function setZone(name) {
  const zone = zones[name];
  if (!zone) return;
  document.querySelectorAll("[data-zone]").forEach((item) => {
    item.classList.toggle("zoneSelected", item.dataset.zone === name);
  });
  zoneIcon.textContent = zone.icon;
  zoneKicker.textContent = zone.kicker;
  zoneTitle.textContent = zone.title;
  zoneLead.textContent = zone.lead;
  zoneTasks.innerHTML = zone.tasks.map((task) => `<li>${task}</li>`).join("");
  zonePanel.classList.remove("flash");
  void zonePanel.offsetWidth;
  zonePanel.classList.add("flash");
}

cards.forEach((card) => {
  const index = Number(card.dataset.step);
  const zone = card.dataset.zone;
  card.addEventListener("mouseenter", () => {
    setDetail(index);
    if (zone) setZone(zone);
  });
  card.addEventListener("focus", () => {
    setDetail(index);
    if (zone) setZone(zone);
  });
  card.addEventListener("click", () => {
    setDetail(index);
    if (zone) setZone(zone);
  });
});

document.querySelectorAll(".stageZone, .stageLabel").forEach((control) => {
  control.addEventListener("click", () => {
    setZone(control.dataset.zone);
    zonePanel.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  control.addEventListener("mouseenter", () => setZone(control.dataset.zone));
});

document.querySelectorAll("[data-tilt]").forEach((panel) => {
  panel.addEventListener("mousemove", (event) => {
    const rect = panel.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    panel.style.setProperty("--tilt-x", `${(-y * 4).toFixed(2)}deg`);
    panel.style.setProperty("--tilt-y", `${(x * 5).toFixed(2)}deg`);
  });

  panel.addEventListener("mouseleave", () => {
    panel.style.setProperty("--tilt-x", "0deg");
    panel.style.setProperty("--tilt-y", "0deg");
  });
});

setDetail(0);
setZone("build");
