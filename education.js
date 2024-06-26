document.addEventListener("DOMContentLoaded", function() {
  // Collapsible sections
  const items = document.querySelectorAll("main ul li");
  items.forEach(item => {
      item.addEventListener("click", function() {
          this.classList.toggle("active");
          const img = this.nextElementSibling;
          const desc = img.nextElementSibling;
          if (img.style.display === "block") {
              img.style.display = "none";
              desc.style.display = "none";
          } else {
              img.style.display = "block";
              desc.style.display = "block";
          }
      });
  });

  // Lightbox effect for images
  const images = document.querySelectorAll("img");
  images.forEach(img => {
      img.addEventListener("click", function() {
          const lightbox = document.createElement("div");
          lightbox.id = "lightbox";
          document.body.appendChild(lightbox);
          
          const imgClone = img.cloneNode();
          imgClone.style.maxWidth = "90%";
          imgClone.style.maxHeight = "90%";
          lightbox.appendChild(imgClone);
          
          lightbox.addEventListener("click", function() {
              lightbox.remove();
          });
      });
  });

  // Scroll to top button
  const scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.id = "scrollToTopBtn";
  scrollToTopBtn.textContent = "↑";
  document.body.appendChild(scrollToTopBtn);
  
  window.addEventListener("scroll", function() {
      if (window.scrollY > 200) {
          scrollToTopBtn.style.display = "block";
      } else {
          scrollToTopBtn.style.display = "none";
      }
  });

  scrollToTopBtn.addEventListener("click", function() {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });
});
