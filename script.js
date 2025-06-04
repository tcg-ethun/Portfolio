window.onload = function() {
  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';

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


function alt(){
    window.alert("Nothing Found !")
}


        // Add some interactive functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Add typing effect on page load
            const codeContainer = document.querySelector('.code-container');
            const codeLines = document.querySelectorAll('.code-line');
            
            // Initially hide all lines
            codeLines.forEach(line => {
                line.style.opacity = '0';
                line.style.transform = 'translateY(30px)';
            });
            
            // Animate lines appearing one by one
            codeLines.forEach((line, index) => {
                setTimeout(() => {
                    line.style.transition = 'all 1s ease';
                    line.style.opacity = '1';
                    line.style.transform = 'translateY(0)';
                }, index * 100);
            });
            
            // Add hover effect to traffic lights
            const trafficLights = document.querySelectorAll('.traffic-light');
            trafficLights.forEach(light => {
                light.addEventListener('mouseenter', function() {
                    this.style.transform = 'scale(1.1)';
                    this.style.transition = 'transform 0.2s ease';
                });
                
                light.addEventListener('mouseleave', function() {
                    this.style.transform = 'scale(1)';
                });
            });
            
            // Add click effect to the window
            const terminalWindow = document.querySelector('.terminal-window');
            terminalWindow.addEventListener('click', function() {
                const cursor = document.querySelector('.cursor');
                cursor.style.animation = 'none';
                setTimeout(() => {
                    cursor.style.animation = 'blink 1s infinite';
                }, 100);
            });
        });

        
  const counters = document.querySelectorAll('.number');

  counters.forEach(counter => {
    counter.innerText = '0';
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = Math.ceil(target / 100);

      if (current < target) {
        counter.innerText = Math.min(current + increment, target);
        setTimeout(updateCount, 25);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });