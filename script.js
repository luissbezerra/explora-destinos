document.getElementById('buscado').addEventListener('input', (e) => {
  const busca = e.target.value.toLowerCase();
  document.querySelectorAll('.card').forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(busca) ? 'block' : 'none';
  });
});


document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});


document.getElementById('btn-tema').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});