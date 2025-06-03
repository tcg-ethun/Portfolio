window.onload = function() {
  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';

    // Smooth scroll to hash if it exists
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }

  }, 600);  
};

const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function closeSidebar() {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
  menuBtn.style.display = 'block'; // Show menu button
}

menuBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
  overlay.classList.add('active');
  menuBtn.style.display = 'none'; // Hide menu button
});

closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// NEW: close sidebar on nav link click
document.querySelectorAll('#sidebar nav a').forEach(link => {
  link.addEventListener('click', closeSidebar);
});
