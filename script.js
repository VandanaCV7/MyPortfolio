function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function calculateExperience() {
  const startDate = new Date('2021-09-09');
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const years = (diffDays / 365.25).toFixed(1);

  const experienceElement = document.getElementById('experience-years');
  if (experienceElement) {
    experienceElement.innerHTML = years + ' years<br>Software Engineer';
  }
}

// Calculate experience on page load
document.addEventListener('DOMContentLoaded', calculateExperience);