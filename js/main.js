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
  //vailform////
  document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("subjectError").textContent = "";
    document.getElementById("messageError").textContent = "";

    // Get form values
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    let isValid = true;

    // Validate name
    if (name === "") {
      document.getElementById("nameError").textContent = "الاسم مطلوب.";
      isValid = false;
    }

    // Validate phone (11 digits)
    if (!/^\d{11}$/.test(phone)) {
      document.getElementById("phoneError").textContent =
        "رقم الهاتف يجب أن يحتوي على 11 رقمًا.";
      isValid = false;
    }

    // Validate subject
    if (subject === "") {
      document.getElementById("subjectError").textContent = "الموضوع مطلوب.";
      isValid = false;
    }

    // Validate message
    if (message === "") {
      document.getElementById("messageError").textContent = "الرسالة مطلوبة.";
      isValid = false;
    }

    // Submit form if valid
    if (isValid) {
      alert("تم إرسال النموذج بنجاح!");
      this.submit();
    }
  });
    //vailform////
