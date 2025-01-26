// Get the button
const scrollUpBtn = document.getElementById("scrollUpBtn")

// Show the button when scrolling down
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
};

// Scroll to the top when the button is clicked
scrollUpBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};



////years/////
document.getElementById('year').textContent = new Date().getFullYear();
////years/////
/////aos////////
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
      duration: 1200, 
      once: true,          
    });
  });
  /////aos////////
