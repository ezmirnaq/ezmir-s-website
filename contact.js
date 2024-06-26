document.addEventListener("DOMContentLoaded", function() {
  const contactButton = document.getElementById("contactButton");
  const contactInfo = document.getElementById("contactInfo");

  contactButton.addEventListener("click", function() {
      if (contactInfo.style.display === "none") {
          contactInfo.style.display = "block";
          contactButton.textContent = "Hide Contact Information";
      } else {
          contactInfo.style.display = "none";
          contactButton.textContent = "Show Contact Information";
      }
  });

  // Form submission alert
  const form = document.querySelector("form");
  if (form) {
      form.addEventListener("submit", function(event) {
          event.preventDefault();
          alert("Thank you for contacting me! I will get back to you soon.");
      });
  }
});
