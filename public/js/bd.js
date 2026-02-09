const params = new URLSearchParams(window.location.search);
const bdId = params.get("id");

/* 📚 BASE GOOGLE DRIVE */
const GOOGLE_DRIVE_BASE = "https://drive.google.com/file/d/";

/* 📚 liste des BD */
const bds = {
  1:{ titre:"MORPHEUCUK", image:"images/bd1.jpg", chapitres:11 },
  2:{ titre:"TOMB RAIDER", image:"images/bd2.jpg", chapitres:8 },
  3:{ titre:"MIRANDA", image:"images/bd3.jpg", chapitres:13 },
  4:{ titre:"THE SHEPHERD'S WIFE", image:"images/bd4.jpg", chapitres:21 },
  5:{ titre:"ISOLEE", image:"images/bd5.jpg", chapitres:12 },
  6:{ titre:"SISTER GRACE", image:"images/bd6.jpg", chapitres:4 },
  7:{ titre:"LOUISE", image:"images/bd7.jpg", chapitres:22 },
  8:{ titre:"FAMILY SINS", image:"images/bd8.jpg", chapitres:5 },
  9:{ titre:"DADDY", image:"images/bd9.jpg", chapitres:4 },
  10:{ titre:"MOM'S HELP", image:"images/bd10.jpg", chapitres:3 },
  11:{ titre:"DESIR FORBIDDEN", image:"images/bd11.jpg", chapitres:6 },
  12:{ titre:"LISTE DE VIE", image:"images/bd12.jpg", chapitres:7 },
  13:{ titre:"FATHER", image:"images/bd13.jpg", chapitres:2 },
  14:{ titre:"HELENA", image:"images/bd14.jpg", chapitres:4 },
  15:{ titre:"DETENTION", image:"images/bd15.jpg", chapitres:2 },
  16:{ titre:"LES BLACKS", image:"images/bd16.jpg", chapitres:5 },
  17:{ titre:"DESIRE", image:"images/bd17.jpg", chapitres:4 },
  18:{ titre:"EN COLLE", image:"images/bd18.jpg", chapitres:13 },
  19:{ titre:"INCESTE", image:"images/bd19.jpg", chapitres:14 },
  20:{ titre:"LA BORDEL DU QUARTIER", image:"images/bd20.jpg", chapitres:20 }
};

/* 🔒 sécurité */
const bd = bds[bdId];
if (!bd) {
  alert("BD introuvable");
  location.href = "index.html";
}

/* 🎨 affichage infos */
document.getElementById("titre").textContent = bd.titre;
document.getElementById("cover").src = bd.image;

let chapitre = 1;
const viewer = document.getElementById("pdf-viewer");
const chapitreTitle = document.getElementById("chapitre-title");

/* 🔗 GOOGLE DRIVE FILES */
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
  "3-13":"1QSTtxGGeOsjNaoGbtaD4PIBrSDz24KZA",

  /* ===== BD 4 ===== */
  "4-1":"1gMYVs9tWl4p39U0Yj5PwurdWxyq0KEhm",
  "4-2":"1tDm3_1tVGTSZuJLMu8fRjdepaqX2jgbS",
  "4-3":"1aOhV3orxWh3IAlTKzWTQW7R4-OItNGBM",
  "4-4":"1xzcojLluUjHg9Ek9Nuon970oZFaLA1c0",
  "4-5":"1xw0c4HmMKs9eCcSSF4BX5x3XvZYkM63h",
  "4-6":"1zaKDTsMb9mlOBXDrWC3lkghcAh789wX7",
  "4-7":"1U0yRahA2y_n0aL7QkJooaah6FhxpMUx6",
  "4-8":"1EfyZq7szz_6TDTJ9UZ7APx3yfYpTGf6g",
  "4-9":"1T_5jeMwH_2PfwSVlbUAi3IM6nNVWl1tx",
  "4-10":"1It1WcMZu4ZdjoVXi0sLRVWEPXPdnUEM0",
  "4-11":"1B9QShE1YwXzfVGOTw5WRuzdam50prFBB",
  "4-12":"1C6mDPN3pWo7kfSN5p5EXc21oZnKs154V",
  "4-13":"1oSzDqU5LpfsMw45lsrjwOdRaOxj1_vjD",
  "4-14":"1MTigrKzziWQ0jmWdd6oQWdZHZL3FbqvE",
  "4-15":"1MuoFHtStEU6HAMhZljXfcvWX7kpXgKVx",
  "4-16":"1jy8FVnBFUiMyW19MvtNzSiw6ZkRNq8oN",
  "4-17":"1m4TIcDHrcTG9WJ9ikoX-1dVU3yeQ0Y0Q",
  "4-18":"1TxxB4mgS92zfJgY-nAqdORGOfkGHHlh-",
  "4-19":"1cVsSSmmbDZUJfPd2SLuCk7dqCUmSHyO5",
  "4-20":"191QPzYDpZpoUgCCzY0h6nJXmMZHgUmSS",
  "4-21":"1iWBmdtQ_Kzbety14Fd32WjHkZw3HQKW6",

  /* ===== BD 5 ===== */
  "5-1":"1PqfApDZhwd0V8NQHs8-nmpc9Yj_ziNCZ",
  "5-2":"1Dh_InOYPJUR47yYAm8_E9WZigroGYBa3",
  "5-3":"1DMrqwDDtd24ncRx2uTwF1IydF57P7hI3",
  "5-4":"19ltrgl6I7RuzFjB4xe2jNE1OTm3OL7jg",
  "5-5":"1BQm7bL3xt5thpwxD_MfszQgZqr7naRAi",
  "5-6":"1NYRpAkNjGGGOaZ-9ALaowZWX9qg4_rp6",
  "5-7":"1WN7NJdPGcuuLRi1Rgfbu7M0CZ7HhemUc",
  "5-8":"12A066xoSpRCR-FIQ8ZyND9cENsJ5Sq79",
  "5-9":"15IA4dN-9z67EpWtEEtQW1751EltTAe8c",
  "5-10":"1wPvleo7vnoLlMEyc01hjKhJg6rQhlQeo",
  "5-11":"1X6ubs1WbBFeu-lIoCvUtEZ14KJAqzmu8",
  "5-12":"19WV8WnC0fKRM7h8wQaPWpPehUaqhRp3Y",

  /* ===== BD 6 ===== */
  "6-1":"1BwWLyK7MLWkUv669G3D-r7zo2urSphx5",
  "6-2":"1MZ3kvg4BWmbomEngxUOMs_qvE73jKr5g",
  "6-3":"1rR1g-3Axs3BXFcl2DbCPu9OyFxoor79D",
  "6-4":"1LDjVXEafW5sPZVNzvChFObotjp_xxBSY",

  /* ===== BD 7 ===== */
  "7-1":"1CU8wQpd-i9An31ykBxufRFTZ3MFtQtZx",
  "7-2":"1MRrYcxWWtpMWTylrA2SfGc8y68AfkXK0",
  "7-3":"1QRPWIzJuRWxZ0VgxbAgJxRnJRhi8ob-U",
  "7-4":"1Ce6F8qBMBeCU4E9CO497yazLKlnUFqWd",
  "7-5":"1K6lX44sVGKSaY0BoDqJ_aUwX7JofLOsM",
  "7-6":"1n_G5j0gthPZu23QEZAq4N7cuyF3YVjZx",
  "7-7":"1V70ufwEAjp3NbkzGKP0G8sJmA0O0GSlr",
  "7-8":"1ksqoZhF2Ta0L0aOEgf-61ZBMKZYX_PfB",
  "7-9":"1mKdajcQlw2joro4ClWsTjhgJ9Y6LRbOm",
  "7-10":"1EwvpLplzIRCcz_xayWxe-97SwrAzh-5Y",
  "7-11":"18O-QIQRLztH0aDdRUQKuVo5dKAjWN84L",
  "7-12":"19KAarBt7cd_4C1Sjx9d9C4MrGni9JhiN",
  "7-13":"14r2Z561B24KgacHuf5z8Fxp14MNZm-cd",
  "7-14":"1Op9d-xNCfiwl1vkX8uGxLoTv-Z3cVvh7",
  "7-15":"14M5vjfHKatlBkCJVp9e9IhjFjpGsXGQz",
  "7-16":"1lVpy62WL3gOlurlRnQdtMlYLnKFixbA6",
  "7-17":"1pCy7jsDP_r87auX2Q80xI0TaCB1_skIP",
  "7-18":"1QSTz66w1hDgokSQhHeU7xNebT5scwCeV",
  "7-19":"1Ky7SN8r3wZoW0R15FzJf7VMPm5diQffh",
  "7-20":"1ZFuo0M1ue3FrZPvd1AD3M3k74GpJdyT-",
  "7-21":"14C0c89Ix95eSAJ0YMdIPvSX6f-g5baRN",
  "7-22":"1ylkoIL3wpiO0o4MAytQSKY44WdOUWAQ8",

  /* ===== BD 8 ===== */
  "8-1":"1E4BZ9NjQBRhpkMUZtzOa-eNekXeizkRT",
  "8-2":"1-VontMaOWJGhlNPoxW9TsQeM-C_3Hasq",
  "8-3":"1P0bQ2bfFyMVk2dNUuqj_wvkkXcY26UI9",
  "8-4":"16N0StGJzUbZBB56xKxXoFcm_wBXHTGFn",
  "8-5":"1d8ExNaLHJ10jNSPypqOxPP4crE8NAyZ_",

   /* ===== BD 9 ===== */
  "9-1":"1unfnLakAgCAFsLECg5EKw__Kc5KD3-U9",
  "9-2":"1Qel06bfhCZmaTF1hSFDBjMq6l7AFCiuM",
  "9-3":"1inHdG-SoVpx0aTjupSWfiEwdo7m_hubK",
  "9-4":"1eevRufbh54eQ6FQcuY6hVVXqsXNi2XS8",

};

/* 📖 charger chapitre */
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

/* affichage initial */
chargerChapitre();

/* ➡️ chapitre suivant avec pub */
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
    position:fixed; inset:0; background:#000; color:#fff;
    display:flex; flex-direction:column;
    justify-content:center; align-items:center;
    font-size:26px; z-index:9999;
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
