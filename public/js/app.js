// ⚡ Cloudinary CDN ultra rapide
const CDN = "https://res.cloudinary.com/dulhq0vvv/image/upload/f_auto,q_auto,w_400/";

const categories = [
  {
    id: "popular",
    bds: [
      { id: 1, title: "Morpheuscuk", image: CDN + "v1770055741/bd1_vhkz0m.jpg" },
      { id: 2, title: "Tomb Raider", image: CDN + "v1770055739/bd2_nexzqc.jpg" },
      { id: 3, title: "Miranda", image: CDN + "v1770055735/bd3_jqxcil.jpg" },
      { id: 4, title: "The shepherds wife", image: CDN + "v1770055736/bd4_xr7ltr.jpg" },
      { id: 5, title: "Isolee", image: CDN + "v1770055741/bd5_mm6gwh.jpg" },
      { id: 51, title: "Big Black Cocks", image: CDN + "v1771086646/bd51_th4gfj.jpg" }

    ]
  },
  {
    id: "new",
    bds: [
      { id: 6, title: "Sister grace", image: CDN + "v1770055749/bd6_kowuwf.jpg" },
      { id: 7, title: "Louise", image: CDN + "v1770055738/bd7_heqzfx.jpg" },
      { id: 8, title: "Family sins", image: CDN + "v1770055747/bd8_caxdoe.jpg" },
      { id: 9, title: "Daddy", image: CDN + "v1770055746/bd9_gnuyhd.jpg" },
      { id: 10, title: "Mom’s Help", image: CDN + "v1770055748/bd10_vtij6z.jpg" }
    ]
  },
  {
    id: "recommended",
    bds: [
      { id: 11, title: "Desir forbidden", image: CDN + "v1770055743/bd11_q4ne9o.jpg" },
      { id: 12, title: "Liste de vie", image: CDN + "v1770055743/bd12_irq7fw.jpg" },
      { id: 13, title: "Father", image: CDN + "v1770055743/bd13_cdimxi.jpg" },
      { id: 14, title: "Helena", image: CDN + "v1770055743/bd14_foz8sf.jpg" },
      { id: 15, title: "Detention", image: CDN + "v1770055743/bd15_ubrp04.jpg" },
      { id: 16, title: "Les Blacks", image: CDN + "v1770055738/bd16_axm9uh.jpg" },
      { id: 17, title: "Desire", image: CDN + "v1770055735/bd17_jymdgk.jpg" },
      { id: 18, title: "En colle", image: CDN + "v1770055746/bd18_x5ebll.jpg" },
      { id: 19, title: "Inceste", image: CDN + "v1770055738/bd19_ketlbr.jpg" },
      { id: 20, title: "La bordel du quartier", image: CDN + "v1770055738/bd20_i0bhwd.jpg" }
    ]
  }
];

/* 🎨 Génération des cartes */
categories.forEach(({ id, bds }) => {
  const container = document.getElementById(id);
  if (!container) return;

  const fragment = document.createDocumentFragment();

  bds.forEach(({ id, title, image }) => {
    const card = document.createElement("div");
    card.className = "bd-card";

    card.innerHTML = `
      <img src="${image}" alt="${title}" loading="lazy" decoding="async" fetchpriority="low">
      <div class="overlay">
        <h4>${title}</h4>
        <button>Voir</button>
      </div>
    `;

    card.addEventListener("click", () => {
      window.location.href = `bd.html?id=${id}`;
    });

    fragment.appendChild(card);
  });

  container.appendChild(fragment);
});

/* 🔎 RECHERCHE BD */
const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("input", function() {
    const value = this.value.toLowerCase();
    const cards = document.querySelectorAll(".bd-card");

    cards.forEach(card => {
      const title = card.querySelector("h4").textContent.toLowerCase();

      if (title.includes(value)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

/* ❌ Bouton clear */
const clearBtn = document.getElementById("clearSearch");

if (clearBtn && searchInput) {
  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchInput.dispatchEvent(new Event("input"));
    searchInput.focus();
  });
}

