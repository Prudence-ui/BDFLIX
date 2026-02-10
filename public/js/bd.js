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

  /* ===== BD 1 → BD 10 (inchangées) ===== */
  "10-1":"1fU7F_DmCRfLz4Nhoz5_yWf7QgeZHlJtl",
  "10-2":"127en1IoodceEBvcLYC9qd44NjjQyG8bi",
  "10-3":"1bXvcshsrAlpq1fVt_OX1oQyOfqb6G9sx",

  /* ===== BD 11 ===== */
  "11-1":"1d-weihPKFd5q0crZUt4-eTeLtq8lYjll",
  "11-2":"1GoAL-mF0P58cCiKiboMUL5E-jOlAW8mv",
  "11-3":"1O9-sxhCwmAnQ0ciQUYqWPBsZptuLheMv",
  "11-4":"1gv2uo1EtQ36N1IMfEUczJ4NRPEEQeKYm",
  "11-5":"1uSXEu__EaxK8td12qRXPy40mV5G8ZkoP",
  "11-6":"1uuehbdXxNWmVGEFETWB2u4FiLkGSSwEi",

  /* ===== BD 12 ===== */
  "12-1":"1N6bqcxBY4SyS6uefzjGh109KP_AZj0oB",
  "12-2":"1AMS9yfDG10fgMpycmGCVZ0jDtdLIKwXN",
  "12-3":"1AsHN0ni9IEyjkKyTGA-JTQnSTMxa35yh",
  "12-4":"199fPeTp7CQGiCCWFii0GoTZ9dO9Q80ic",
  "12-5":"11LUzIuFUdrVbNw_QOTNtiNiyNhZKYwXk",
  "12-6":"1YNRMSGbFTncsMF-BEml8LmzbRvrX6_vB",

  /* ===== BD 13 ===== */
  "13-1":"1v9P7kJJWVE1RU6OoncUxiOJQHCevV6fB",
  "13-2":"1V_ZZX1ZrATKlq0XNgNbkBVZ6K8uOIYwl",
  
  /* ===== BD 14 ===== */
  "14-1":"1Z5oHol6dTo--tvU4GVPiKrcZ0IKqap7r",
  "14-2":"1rolxQU3-HXo_GBu9jDYmgRwIpVtN01un",
  "14-3":"1A2fF39-xSzlcQA86-nYkSd9qQ9f-_e8R",
  "14-4":"1kVTEPpVeSf174O6wYpyTCOrGQZgfiWc-",

  /* ===== BD 15 ===== */
  "15-1":"1O3kRNKp09x4UkvnoJgK_-n1LFfMHCBMN",
  "15-2":"1JA28k5kWQ9_zLALyZwa7biVrziQBG9Nz",

  /* ===== BD 16 ===== */
  "16-1":"1eMF5eBnztYvcU0lw8S4PvCVBTuasPROk",
  "16-2":"1SJ4wUdSkprfFVm9BzDGwU0U9Y6oeNT0n",
  "16-3":"1HGQuRAL_siooItO2_zvblyavdH1kKcTJ",
  "16-4":"1OcymmeJbA7ZnErxdxBdCT-DFK4zEIOoA",
  "16-5":"18fEnPDzjT-8gFHkDRD1XB7MvthU6H_nS",

   /* ===== BD 17 ===== */
  "17-1":"1etRT4xWVsekJHAOL98GnMoIOsMqmyMd2",
  "17-2":"1E41t1-94z81XAefXXuxGznPLm9NghqVL",
  "17-3":"1lYev-EGAqdXVybVgXH1tjbP2iApEdVYR",
  "17-4":"12Q74BTG8fmbg143zVSsGI-7eOP_3G0hm",

   /* ===== BD 18 ===== */
  "18-1":"13POnscwv2UKyEoQQfxO3x7NYYA223h9m",
  "18-2":"1WFbsXLg25wh_DP7sXggQ6Ly1Rc2w52p_",
  "18-3":"1i9w3Zg-QCKtNGoaXuL5k2lThM4pwEmRe",
  "18-4":"1e4_2Eb3B8lkipFrpMoFXWVnNEzQzjYqo",
  "18-5":"1rRKFNzZtY2CoSIe2G3mx2h4uTb88w8C5",
  "18-6":"1pPhEMvoc25TlWjdGd4aHL1l9qUnav84G",
  "18-7":"1ZrGAOqQZ4E9_QSlBBfL74kw8I_XS071Y",
  "18-8":"1wucJinpMPNZgBmqYzpZH4ftBJ5pBfgIF",
  "18-9":"1cDrAWkVIgkvTd7ZADOS0EAI10tjurCQr",
  "18-10":"1oqQHvrx1oODydLDnkICd_IzfXwMbs6Ez",
  "18-11":"1uXAZ7qlI87meVs2fdLO0DBg7xxwLSHNP",
  "18-12":"14I3iwRt3EWTHN8hnukg1fVh9T_ZpanQT",
  "18-13":"1_42X0vo6mkc-BpEBC-YycNhD3tVjHpJ7"
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
