const card = document.getElementById('card');
const inner = document.getElementById('inner');

card.addEventListener('click', () => {
  inner.classList.toggle('flipped');
});