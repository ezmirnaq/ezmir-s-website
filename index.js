document.addEventListener("DOMContentLoaded", function() {
  // Dynamic greeting based on the time of day
  const greetingElement = document.querySelector("header h1");
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour < 12) {
      greeting = "Good Morning!";
  } else if (currentHour < 18) {
      greeting = "Good Afternoon!";
  } else {
      greeting = "Good Evening!";
  }

  greetingElement.textContent = `${greeting} Welcome to My Humble Website`;

  // Image modal functionality
  const images = document.querySelectorAll(".gallery img");
  const modal = document.createElement("div");
  const modalImage = document.createElement("img");
  const closeModal = document.createElement("span");

  modal.classList.add("modal");
  closeModal.classList.add("close-modal");
  closeModal.textContent = "×";

  modal.appendChild(closeModal);
  modal.appendChild(modalImage);
  document.body.appendChild(modal);

  images.forEach(image => {
      image.addEventListener("click", () => {
          modal.style.display = "block";
          modalImage.src = image.src;
      });
  });

  closeModal.addEventListener("click", () => {
      modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
      if (e.target === modal) {
          modal.style.display = "none";
      }
  });
});
