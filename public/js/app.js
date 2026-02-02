const categories = [
  {
    id: 'popular',
    bds: [
      { id: 1, title: 'Morpheuscuk', image: 'images/bd1.jpg' },
      { id: 2, title: 'Tomb Raider', image: 'images/bd2.jpg' },
      { id: 3, title: 'Miranda', image: 'images/bd3.jpg' },
      { id: 4, title: 'The shepherds wife', image: 'images/bd4.jpg' },
      { id: 5, title: 'Isolee', image: 'images/bd5.jpg' }
    ]
  },
  {
    id: 'new',
    bds: [
      { id: 6, title: 'Sister grace', image: 'images/bd6.jpg' },
      { id: 7, title: 'Louise', image: 'images/bd7.jpg' },
      { id: 8, title: 'Family sins', image: 'images/bd8.jpg' },
      { id: 9, title: 'Daddy', image: 'images/bd9.jpg' },
      { id: 10, title: 'Mom s Help', image: 'images/bd10.jpg' }
    ]
  },
  {
    id: 'recommended',
    bds: [
      { id: 11, title: 'Desir forbidden', image: 'images/bd11.jpg' },
      { id: 12, title: 'Liste de vie', image: 'images/bd12.jpg' },
      { id: 13, title: 'Father', image: 'images/bd13.jpg' },
      { id: 14, title: 'Helena', image: 'images/bd14.jpg' },
      { id: 15, title: 'Detention', image: 'images/bd15.jpg' },
      { id: 16, title: 'Les Blacks', image: 'images/bd16.jpg' },
      { id: 17, title: 'Desire', image: 'images/bd17.jpg' },
      { id: 18, title: 'En colle', image: 'images/bd18.jpg' },
      { id: 19, title: 'Inceste', image: 'images/bd19.jpg' },
      { id: 20, title: 'La bordel du quartier', image: 'images/bd20.jpg' }
    ]
  }
];

categories.forEach(cat => {
  const container = document.getElementById(cat.id);
  if (!container) return;

  const fragment = document.createDocumentFragment(); // ⚡ ultra rapide DOM

  cat.bds.forEach(bd => {
    const card = document.createElement("div");
    card.className = "bd-card";

    card.innerHTML = `
      <img src="${bd.image}" alt="${bd.title}" loading="lazy">
      <div class="overlay">
        <h4>${bd.title}</h4>
        <button>Voir</button>
      </div>
    `;

    card.onclick = () => {
      window.location.href = `bd.html?id=${bd.id}`;
    };

    fragment.appendChild(card);
  });

  container.appendChild(fragment);
});
