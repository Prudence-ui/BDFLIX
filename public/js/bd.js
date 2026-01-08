const params = new URLSearchParams(window.location.search);
const id = params.get('id') || 1;


const bd = {
id,
titre: 'BD Numéro ' + id,
cover: 'https://via.placeholder.com/300x450?text=BD+' + id,
chapitres: 6
};


// Infos BD
document.getElementById('titre').innerText = bd.titre;
document.getElementById('cover').src = bd.cover;
document.getElementById('chapitre-count').innerText = `📚 ${bd.chapitres} chapitres disponibles`;


const container = document.getElementById('chapitres');

for (let i = 1; i <= bd.chapitres; i++) {
const div = document.createElement('div');
div.className = 'chapitre' + (i === 1 ? '' : ' locked');


div.innerHTML = `
<span>Chapitre ${i}</span>
<span>${i === 1 ? 'Lire gratuitement' : '🔒 Verrouillé'}</span>
`;


container.appendChild(div);
}


function payer() {
alert('Paiement Fedapay – étape suivante');
}