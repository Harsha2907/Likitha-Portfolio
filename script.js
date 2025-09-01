// Scroll progress bar
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / height) * 100;
  document.getElementById("scrollProgress").style.width = scrolled + "%";
});

// Particles init
window.addEventListener("load", () => {
  if (window.particlesJS) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 70 },
        color: { value: ["#ff4da6", "#b57edc"] },
        shape: { type: "circle" },
        opacity: { value: 0.35 },
        size: { value: 3 },
        line_linked: { enable: true, opacity: 0.2 },
        move: { enable: true, speed: 1.2 }
      },
      interactivity: {
        events: { onhover: { enable: true, mode: "repulse" } }
      }
    });
  }
  // AOS init
  if (window.AOS) {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true
    });
  }
});

// Contact form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  if (form){
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your message has been sent.");
      form.reset();
    });
  }
});
// Resume Modal
function openResume() {
  document.getElementById("resumeModal").style.display = "flex";
}
function closeResume() {
  document.getElementById("resumeModal").style.display = "none";
}

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  const modal = document.getElementById("resumeModal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
// Projects
function openModal(id){
  const m = document.getElementById(id);
  if (m) m.classList.add('open');
}
function closeModal(id){
  const m = document.getElementById(id);
  if (m) m.classList.remove('open');
}

// Resume
function openResume(){
  const m = document.getElementById('resumeModal');
  if (m) m.classList.add('open');
}
function closeResume(){
  const m = document.getElementById('resumeModal');
  if (m) m.classList.remove('open');
}

// Close when clicking outside
window.addEventListener('click', (e) => {
  document.querySelectorAll('.modal.open, .resume-modal.open').forEach(m => {
    if (e.target === m) m.classList.remove('open');
  });
});
// Open modal
function openModal(id){
  const m = document.getElementById(id);
  if (m) m.classList.add('open');
}
// Close modal
function closeModal(id){
  const m = document.getElementById(id);
  if (m) m.classList.remove('open');
}
// Close when clicking outside
window.addEventListener('click', (e) => {
  document.querySelectorAll('.modal.open').forEach(m => {
    if (e.target === m) m.classList.remove('open');
  });
});
// Contact form (demo)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your message has been sent.");
      form.reset();
    });
  }
});
