const params = new URLSearchParams(window.location.search);
const bdId = params.get("id");

/* 📚 BASE GOOGLE DRIVE (preview = affichage, pas download) */
const GOOGLE_DRIVE_BASE = "https://drive.google.com/file/d/";

/* 📚 base des BD */
const bds = {
  1: { titre: "MORPHEUCUK", image: "images/bd1.jpg", chapitres: 11 },
  2: { titre: "TOMB RAIDER", image: "images/bd2.jpg", chapitres: 8 },
  3: { titre: "MIRANDA", image: "images/bd3.jpg", chapitres: 13 },
  4: { titre: "THE SHEPHERD'S WIFE", image: "images/bd4.jpg", chapitres: 21 },
  5: { titre: "ISOLEE", image: "images/bd5.jpg", chapitres: 12 },
  6: { titre: "SISTER GRACE", image: "images/bd6.jpg", chapitres: 4 },
  7: { titre: "LOUISE", image: "images/bd7.jpg", chapitres: 22 },
  8: { titre: "FAMILY SINS", image: "images/bd8.jpg", chapitres: 5 },
  9: { titre: "DADDY", image: "images/bd9.jpg", chapitres: 4 },
  10:{ titre: "MOM'S HELP", image: "images/bd10.jpg", chapitres: 3 },
  11:{ titre: "DESIR FORBIDDEN", image: "images/bd11.jpg", chapitres: 6 },
  12:{ titre: "LISTE DE VIE", image: "images/bd12.jpg", chapitres: 7 },
  13:{ titre: "FATHER", image: "images/bd13.jpg", chapitres: 2 },
  14:{ titre: "HELENA", image: "images/bd14.jpg", chapitres: 4 },
  15:{ titre: "DETENTION", image: "images/bd15.jpg", chapitres: 2 },
  16:{ titre: "LES BLACKS", image: "images/bd16.jpg", chapitres: 5 },
  17:{ titre: "DESIRE", image: "images/bd17.jpg", chapitres: 4 },
  18:{ titre: "EN COLLE", image: "images/bd18.jpg", chapitres: 13 },
  19:{ titre: "INCESTE", image: "images/bd19.jpg", chapitres: 14 },
  20:{ titre: "LA BORDEL DU QUARTIER", image: "images/bd20.jpg", chapitres: 20 }
};

/* 🔒 sécurité */
const bd = bds[bdId];
if (!bd) {
  alert("BD introuvable");
  location.href = "index.html";
}

/* 🎨 infos BD */
document.getElementById("titre").textContent = bd.titre;
document.getElementById("cover").src = bd.image;

let chapitre = 1;
const viewer = document.getElementById("pdf-viewer");
const chapitreTitle = document.getElementById("chapitre-title");

/* 🔗 MAPPING GOOGLE DRIVE */
const driveFiles = {

  /* ===== BD 1 ===== */
  "1-1":"1OeaglTla4wpA4iz59dgPUThYw7j8LEhz",
  "1-2":"1v6ljEGT8B7POLf1OyPG-zZSlsND13baY",
  "1-3":"18pHV42Szh0wmvb1anGcVhrHWfWHkeqZy",
  "1-4":"1DPtDGHJyViaA1HvPhnZxjjsW61EkKpaa",
  "1-5":"1eI3RLoC_S27tsENILnaLwO1VdLj20kiO",
  "1-6":"1TMgB96rT0mstY0JDDrZ9W1anm2gP4RTf",
  "1-7":"1sKOtMyKIeATgQXxURBrBfaIKstaI-kAZ",
  "1-8":"1QnovBADtFCC9_pVInLcLf1TTm2Zntcpc",
  "1-9":"1mih0UHQ7cKHDFt2qy6RG5kfIRdVHmW1g",
  "1-10":"1YSp0Bj20ugGQmWyNX7kZP0U44Le1EIyc",
  "1-11":"1D1-xIE1ds73wb_f81aVGEcsClB6SwrrK",

  /* ===== BD 2 ===== */
  "2-1":"1NBuiLxvEHnfOVi5vhHuHSTsZCkT4T7hH",
  "2-2":"1rO8WwSpRr-bnPmB_oj7nfbZ0q8wPd6bm",
  "2-3":"1u-Lo7iDZ_z_ugCvL4MwlcsuAZnj3Snq6",
  "2-4":"10xuKbqt3nOilibFY5OcWakcJUWN6qSJF",
  "2-5":"1ZNzfwMaM0SVdmi9Tvl4HGsJVkRr0whwh",
  "2-6":"1f3T4myGvnnHCcmWTIkulHf5h4CyhCh9Z",
  "2-7":"13M_mz88dfUB3CMIcN-Buj3-vsfkS47zG",
  "2-8":"1WhdW60fiAA87HXHgIZJxgSxK7L5aNxXk",

  /* ===== BD 3 ===== */
  "3-1":"18_BVxta670uDaarj2hp-m2pZa2rAELy5",
  "3-2":"152vcCMM51QnvPmzaAzF5cOb4HxaQdAnF",
  "3-3":"1Lg6FLwn4Qv-VxUYiEdSPoI8cKGTT8Xf3",
  "3-4":"1WVUJqzjcHI063vNUNgABc3vDTs5jd4Kx",
  "3-5":"1s-9q2IyWJ8vw5J_3wFOKBoEGBvm8tV5T",
  "3-6":"18WoSwHEehDzg7w7RgR1KYf7gTti4sIvr",
  "3-7":"1Fsx9o03PVa5QrtIAWhGA67kvWIuVcUt2",
  "3-8":"1Am-1yC1bK-RDGWvc4r1k2iR59o3-t8wR",
  "3-9":"1iYJCtU4ZxZ3msVpxfKkqc6bG4qNxecqn",
  "3-10":"1sBrOdfV4CHzXlIm3SABMUuTOOV6B0EZf",
  "3-11":"1Gp4gU2dILTN8B9mLGy0Awqw1sQkmhz9_",
  "3-12":"1JvW4HBlSGRGs7ciTA_NeLRkvesHt0apb",
  "3-13":"1QSTtxGGeOsjNaoGbtaD4PIBrSDz24KZA"
};

/* 📖 charge chapitre */
function chargerChapitre() {
  chapitreTitle.textContent = `📖 Chapitre ${chapitre}`;
  const key = `${bdId}-${chapitre}`;
  const fileId = driveFiles[key];

  if (!fileId) {
    viewer.src = "";
    chapitreTitle.textContent = "❌ Chapitre non disponible";
    return;
  }

  viewer.src = `${GOOGLE_DRIVE_BASE}${fileId}/preview`;
}

/* premier affichage */
chargerChapitre();

/* ➡️ chapitre suivant + pub */
document.getElementById("nextBtn").onclick = () => {
  if (chapitre >= bd.chapitres) {
    alert("📚 Fin de la BD !");
    return;
  }
  afficherPub(() => {
    chapitre++;
    chargerChapitre();
  });
};

/* 📺 publicité */
function afficherPub(next) {
  const ad = document.createElement("div");
  ad.style = `
    position:fixed;
    inset:0;
    background:#000;
    color:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-size:26px;
    z-index:9999;
  `;

  let time = 10;
  ad.innerHTML = `
    <p id="timer">📺 Publicité... ${time}s</p>
    <button disabled id="skip"
      style="margin-top:25px;padding:14px 28px;border:none;
      background:#e50914;color:white;font-size:18px;border-radius:8px;">
      Continuer
    </button>
  `;

  document.body.appendChild(ad);

  const interval = setInterval(() => {
    time--;
    document.getElementById("timer").textContent = `📺 Publicité... ${time}s`;
    if (time <= 0) {
      clearInterval(interval);
      const btn = document.getElementById("skip");
      btn.disabled = false;
      btn.textContent = "Continuer la lecture";
    }
  }, 1000);

  document.getElementById("skip").onclick = () => {
    ad.remove();
    next();
  };
}

/* 🚫 anti clic droit */
document.addEventListener("contextmenu", e => e.preventDefault());
