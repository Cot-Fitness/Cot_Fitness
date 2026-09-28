const C = {
  crm: [
    "Circuit training / renforcement musculaire",
    "Enchaînement d'ateliers pour renforcer tout le corps, avec un accent sur la force.",
  ],
  crc: [
    "Circuit cardio 30min puis abdo/stretching 30min",
    "Enchaînement d'ateliers dynamiques pour travailler le cardio et l'endurance.",
  ],
  cir: [
    "Circuit training",
    "Enchaînement d'ateliers pour travailler tout le corps, en force et en endurance.",
  ],
  ren: [
    "Renforcement musculaire",
    "Squats, fentes, gainage et étirements : un cours complet pour gagner en force, en endurance et en posture.",
  ],
  pil: [
    "Pilates",
    "Renforcement des muscles profonds, posture, souplesse et respiration.",
  ],
  mob: [
    "Mobilité",
    "Mobilité articulaire, étirements, équilibre et respiration. Un moment doux pour se détendre.",
  ],
  caf: [
    "C.A.F. (cuisses, abdos, fessiers)",
    "Renforcement musculaire ciblé sur le bas du corps.",
  ],
  dan: [
    "Fit dance",
    "Danse rythmée, cardio et coordination pour se dynamiser et s'amuser.",
  ],
  sta: [
    "Step 1 (avancé)",
    "Enchaînements plus techniques sur une marche, pour celles et ceux qui ont l'habitude du step.",
  ],
  stb: [
    "Step 2 (débutant)",
    "Enchaînements simples sur une marche pour découvrir le step : cardio, jambes et coordination.",
  ],
  ful: [
    "Full body",
    "Tous les muscles en une séance, entre renforcement et cardio. Tous niveaux.",
  ],
  str: [
    "Stretching",
    "Étirements pour relâcher les muscles et gagner en souplesse.",
  ],
  pmp: [
    "Pump",
    "Renforcement musculaire en musique, avec charges légères et nombreuses répétitions.",
  ],
  box: [
    "Cardio boxe",
    "Des mouvements de boxe sans combat, pour l'endurance, le cardio et la tonicité.",
  ],
  abd: ["Abdo flash", "Une séance courte et ciblée sur les abdominaux."],
};
const D = [
  [
    "Lundi",
    [
      ["18h00–19h00", "crm", "Enzo"],
      ["19h00–20h00", "crc", "Enzo"],
    ],
  ],
  [
    "Mardi",
    [
      ["9h00–10h00", "pil", "Nicolas"],
      ["10h00–11h00", "ren", "Nicolas"],
      ["18h00–19h00", "mob", "Marion"],
      ["19h00–20h00", "caf", "Marion"],
    ],
  ],
  [
    "Mercredi",
    [
      ["18h00–19h00", "dan", "Tiffany"],
      ["19h00–19h45", "sta", "Tiffany"],
      ["19h45–20h30", "stb", "Tiffany"],
    ],
  ],
  [
    "Jeudi",
    [
      ["18h00–19h00", "ful", "Hyacinthe"],
      ["19h00–20h00", "pil", "Hyacinthe"],
    ],
  ],
  [
    "Vendredi",
    [
      ["9h00–9h45", "pil", "Nicolas"],
      ["9h45–10h15", "cir", "Nicolas"],
      ["10h15–11h00", "str", "Nicolas"],
    ],
  ],
  [
    "Samedi",
    [
      ["10h00–10h45", "pmp", "Christophe"],
      ["11h00–11h45", "box", "Christophe"],
      ["11h45–12h00", "abd", "Christophe"],
      ["10h00–10h45", "ren", "Marion"],
      ["10h45–11h00", "abd", "Marion"],
      ["11h15–12h00", "mob", "Marion"],
    ],
    "Le samedi, les cours alternent une semaine sur deux : une semaine avec Christophe (Pump, Cardio boxe, Abdo flash), l'autre avec Marion (Renforcement musculaire, Abdo flash, Mobilité).",
  ],
];
const t = document.getElementById("tabs"),
  s = document.getElementById("slots");
const dow = new Date().getDay(),
  today = dow >= 1 && dow <= 6 ? dow - 1 : -1;
function show(i) {
  [...t.children].forEach((b, j) => b.setAttribute("aria-selected", j == i));
  s.innerHTML =
    D[i][1]
      .map(
        ([h, k, c]) =>
          `<details class="slot"><summary><time>${h}</time><span class="n">${C[k][0]}</span><span class="c">Coach : ${c}</span></summary><p>${C[k][1]}</p></details>`,
      )
      .join("") + (D[i][2] ? `<p class="note">${D[i][2]}</p>` : "");
}
D.forEach(([d], i) => {
  const b = document.createElement("button");
  b.type = "button";
  b.setAttribute("role", "tab");
  b.innerHTML = d + (i == today ? "<small>aujourd'hui</small>" : "");
  b.onclick = () => show(i);
  t.append(b);
});
show(Math.max(today, 0));
const P = {
    seul: [30, 35, 37, 40],
    duo: [55, 65, 70, 75],
    spe: [25, 30, 32, 35],
  },
  L = ["1 an", "6 mois", "3 mois", "Sans engagement"],
  pl = document.getElementById("plans");
function price(k) {
  pl.innerHTML = P[k]
    .map(
      (v, i) =>
        `<div class="plan${i ? "" : " best"}">${i ? "" : '<span class="tag">Le moins cher</span>'}<h3>${i ? "Engagement " : "Engagement "}${L[i] == "Sans engagement" ? "aucun" : L[i]}</h3><b>${v}<span class="u"> €/mois</span></b></div>`,
    )
    .join("");
}
document
  .querySelectorAll("input[name=p]")
  .forEach((r) => (r.onchange = () => price(r.value)));
price("seul");
