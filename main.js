document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.querySelectorAll(".error").forEach(function(error) {
      error.textContent = "";
    });
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    let isValid = true;
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Invalid email address";
      isValid = false;
    }
  
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required";
      isValid = false;
    }
    if (message === "") {
      document.getElementById("messageError").textContent = "Message is required";
      isValid = false;
    }
  
    if (isValid) {
      document.getElementById("contactForm").style.display = "none";
      document.getElementById("successMessage").style.display = "block";
    }
  });
  



