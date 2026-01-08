const categories = [
{ id: 'popular', title: 'Populaires', count: 10 },
{ id: 'new', title: 'Nouveautés', count: 10 },
{ id: 'recommended', title: 'Recommandées', count: 10 }
];


categories.forEach(cat => {
const container = document.getElementById(cat.id);
for (let i = 1; i <= cat.count; i++) {
const img = document.createElement('img');
img.src = `https://via.placeholder.com/200x300?text=${cat.title}+${i}`;
img.className = 'poster';
img.title = `${cat.title} BD ${i}`;
img.onclick = () => { window.location.href = 'bd.html?id=' + i; };
container.appendChild(img);
}
});