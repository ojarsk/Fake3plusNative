const card = document.getElementById('card');
const inner = document.getElementById('inner');

const hitbox = document.getElementById('hitbox');

function flip() {
  inner.classList.toggle('flipped');
}

card.addEventListener('click', flip);
hitbox.addEventListener('click', flip);