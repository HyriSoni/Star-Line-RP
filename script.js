const aboutModal = document.getElementById('aboutModal');
const aboutBtn = document.getElementById('aboutBtn');
const closeAboutModalBtn = document.getElementById('closeAboutModalBtn');

aboutBtn.addEventListener('click', (e) => {
  e.preventDefault();
  aboutModal.classList.add('show');
});

closeAboutModalBtn.addEventListener('click', () => {
  aboutModal.classList.remove('show');
});
