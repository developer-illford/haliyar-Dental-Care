document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll(".home-slideshow-image");
    let commonContent = document.querySelector(".home-slideshow-left");
    let currentSlide = 0;
    const slideInterval = 2000; // Change slide every 2 seconds (2000 milliseconds)
  
    function nextSlide() {
      slides[currentSlide].style.display = "none";
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].style.display = "block";
    }
  
    function startSlideshow() {
      setInterval(nextSlide, slideInterval);
    }
  
    startSlideshow();
  });
  