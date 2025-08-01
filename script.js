// Dark Mode Toggle
const toggleBtn = document.getElementById('toggleMode');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Contact form (just a dummy handler)
let contactForm = prompt('Enter your email details:');
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thanks for reaching out! ');
  this.reset();
});
// Fetching GitHub repositories and displaying them
fetch('https://github.com/Nehafaruki/Neha-portfolio')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('projectList');
    data.forEach(repo => {
      const item = document.createElement('li');
      item.textContent = repo.name;
      container.appendChild(item);
    });
  })
  .catch(error => console.error('API error:', error));

