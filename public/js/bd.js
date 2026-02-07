const params = new URLSearchParams(window.location.search);
const bdId = params.get("id");

/* 🔗 BASE APPWRITE (VIEW = affichage, pas download) */
const APPWRITE = {
  endpoint: "https://nyc.cloud.appwrite.io/v1",
  project: "6987071c000bff9156a3",
  bucket: "pdfs"
};

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

/* 📖 charge chapitre depuis Appwrite */
function chargerChapitre() {
  chapitreTitle.textContent = `📖 Chapitre ${chapitre}`;

  const fileId = `bd${bdId}-chapitre${chapitre}`;

  viewer.src =
    `${APPWRITE.endpoint}/storage/buckets/${APPWRITE.bucket}` +
    `/files/${fileId}/view?project=${APPWRITE.project}` +
    `#toolbar=0&navpanes=0&scrollbar=0`;
}

/* premier affichage */
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

/* 📺 publicité interstitielle */
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

  let time = 25;

  ad.innerHTML = `
    <p id="timer">📺 Publicité... ${time}s</p>
    <button disabled id="skip"
      style="
        margin-top:25px;
        padding:14px 28px;
        border:none;
        background:#e50914;
        color:white;
        font-size:18px;
        border-radius:8px;
        cursor:pointer;
      ">
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
